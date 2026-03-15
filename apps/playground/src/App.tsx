import { useState, useMemo, useCallback } from "react";
import { MorphingIcon } from "liveicons/react/morphing";
import type { MorphingIconName } from "liveicons/react/morphing";
import * as LucideIcons from "liveicons/react";
import * as HeroIcons from "liveicons/react/heroicons";
import * as HeroSolidIcons from "liveicons/react/heroicons-solid";
import * as TablerIcons from "liveicons/react/tabler";
import * as TablerFilledIcons from "liveicons/react/tabler-filled";
import type { LiveIconProps } from "liveicons/react";

type AnimateMode = LiveIconProps["animate"];
type SpeedMode = LiveIconProps["speed"];
type StyleId = "lucide" | "heroicons" | "heroicons-solid" | "tabler" | "tabler-filled";

type IconRecord = { name: string; Component: React.ComponentType<LiveIconProps> };

function extractIcons(mod: Record<string, unknown>): IconRecord[] {
  return Object.entries(mod)
    .filter(([key]) => key.endsWith("Icon") && !key.includes("Handle"))
    .map(([key, Component]) => ({
      name: key.replace(/Icon$/, ""),
      Component: Component as React.ComponentType<LiveIconProps>,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const STYLE_ICONS: Record<StyleId, IconRecord[]> = {
  lucide:           extractIcons(LucideIcons      as Record<string, unknown>),
  heroicons:        extractIcons(HeroIcons        as Record<string, unknown>),
  "heroicons-solid":extractIcons(HeroSolidIcons   as Record<string, unknown>),
  tabler:           extractIcons(TablerIcons       as Record<string, unknown>),
  "tabler-filled":  extractIcons(TablerFilledIcons as Record<string, unknown>),
};

const STYLES: { id: StyleId; label: string }[] = [
  { id: "lucide",           label: "Lucide"          },
  { id: "heroicons",        label: "Heroicons"        },
  { id: "heroicons-solid",  label: "Heroicons Solid"  },
  { id: "tabler",           label: "Tabler"           },
  { id: "tabler-filled",    label: "Tabler Filled"    },
];

const COLORS = [
  { label: "White",  value: "#ffffff" },
  { label: "Blue",   value: "#60a5fa" },
  { label: "Green",  value: "#4ade80" },
  { label: "Red",    value: "#f87171" },
  { label: "Yellow", value: "#fbbf24" },
  { label: "Purple", value: "#c084fc" },
];

const PAGE_SIZE = 96;

export default function App() {
  const [style, setStyle]   = useState<StyleId>("lucide");
  const [search, setSearch] = useState("");
  const [page, setPage]     = useState(0);
  const [animate, setAnimate] = useState<AnimateMode>("on-hover");
  const [speed, setSpeed]     = useState<SpeedMode>("normal");
  const [size, setSize]       = useState(28);
  const [color, setColor]     = useState("#ffffff");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const icons = STYLE_ICONS[style];
    return q ? icons.filter(i => i.name.toLowerCase().includes(q)) : icons;
  }, [style, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageIcons  = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleStyleChange = useCallback((id: StyleId) => {
    setStyle(id);
    setPage(0);
  }, []);

  const handleSearch = useCallback((q: string) => {
    setSearch(q);
    setPage(0);
  }, []);

  const codeSnippet = `import { BellIcon } from 'liveicons/react'

<BellIcon
  animate="${animate}"
  speed="${speed}"
  size={${size}}
  color="${color}"
/>`;

  const [morphIcon, setMorphIcon] = useState<MorphingIconName>("menu");

  const MORPH_SEQUENCE: MorphingIconName[] = [
    "menu", "close", "plus", "minus", "check", "more",
    "arrow-right", "arrow-down", "arrow-left", "arrow-up",
    "chevron-right", "chevron-down", "chevron-left", "chevron-up",
  ];

  return (
    <>
      <h1>liveicons</h1>
      <p className="subtitle">Animated icon micro-interactions — playground</p>

      {/* Morphing Icons Demo */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem", opacity: 0.7 }}>
          MorphingIcon — shape transforms, not crossfades
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <MorphingIcon icon={morphIcon} size={40} color={color} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {MORPH_SEQUENCE.map(name => (
              <button
                key={name}
                onClick={() => setMorphIcon(name)}
                style={{
                  padding: "0.25rem 0.5rem",
                  fontSize: "0.75rem",
                  background: morphIcon === name ? "#60a5fa22" : "transparent",
                  border: `1px solid ${morphIcon === name ? "#60a5fa" : "#444"}`,
                  borderRadius: "4px",
                  color: morphIcon === name ? "#60a5fa" : "#aaa",
                  cursor: "pointer",
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <pre style={{ marginTop: "0.75rem", fontSize: "0.75rem", opacity: 0.5, background: "none", padding: 0 }}>
          {`import { MorphingIcon } from 'liveicons/react/morphing'\n\n<MorphingIcon icon="${morphIcon}" size={40} />`}
        </pre>
      </div>

      {/* Controls */}
      <div className="controls">
        <label>Animate</label>
        <select value={animate as string} onChange={e => setAnimate(e.target.value as AnimateMode)}>
          <option value="on-hover">on-hover</option>
          <option value="on-click">on-click</option>
          <option value="loop">loop</option>
          <option value="once">once</option>
          <option value="false">false (static)</option>
        </select>

        <label>Speed</label>
        <select value={speed as string} onChange={e => setSpeed(e.target.value as SpeedMode)}>
          <option value="slow">slow</option>
          <option value="normal">normal</option>
          <option value="fast">fast</option>
        </select>

        <label>Size</label>
        <input
          type="range" min={16} max={64} value={size}
          onChange={e => setSize(Number(e.target.value))}
        />
        <span className="size-value">{size}px</span>

        <label>Color</label>
        <div className="color-row">
          {COLORS.map(c => (
            <div
              key={c.value}
              className={`color-swatch${color === c.value ? " active" : ""}`}
              style={{ background: c.value }}
              title={c.label}
              onClick={() => setColor(c.value)}
            />
          ))}
        </div>
      </div>

      {/* Style tabs */}
      <div className="style-tabs">
        {STYLES.map(s => (
          <button
            key={s.id}
            className={`style-tab${style === s.id ? " active" : ""}`}
            onClick={() => handleStyleChange(s.id)}
          >
            {s.label}
            <span className="tab-count">{STYLE_ICONS[s.id].length}</span>
          </button>
        ))}
      </div>

      {/* Search + count */}
      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search icons…"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
        <span className="result-count">
          {filtered.length.toLocaleString()} icon{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Icon grid */}
      <div className="icon-grid">
        {pageIcons.map(({ name, Component }) => (
          <div key={name} className="icon-card">
            <Component
              animate={animate === "false" as unknown as AnimateMode ? false : animate}
              speed={speed}
              size={size}
              color={color}
            />
            <span className="icon-name">{name}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            ← Prev
          </button>
          <span className="page-info">
            {page + 1} / {totalPages}
          </span>
          <button
            className="page-btn"
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            Next →
          </button>
        </div>
      )}

      {/* Code preview */}
      <div className="code-block">{codeSnippet}</div>
    </>
  );
}
