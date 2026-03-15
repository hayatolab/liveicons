/**
 * generate.ts
 *
 * Reads SVG source files from icons/<library>/ and generates
 * React components in packages/react/src/icons/<library>/.
 *
 * Each source gets its own subdirectory and barrel for tree-shaking:
 *   packages/react/src/icons/lucide/bell.tsx
 *   packages/react/src/icons/lucide/index.ts   ← per-source barrel
 *   packages/react/src/icons/index.ts          ← aggregate barrel
 *
 * Each icon can have a custom animation definition in scripts/animations/<name>.ts
 * If no definition exists, a placeholder component is generated with empty variants.
 *
 * Usage:
 *   pnpm generate                         # all icons with animation defs
 *   pnpm generate --source lucide         # only lucide source
 *   pnpm generate --icon search,bell      # specific icons
 *   pnpm generate --all                   # include icons without animation defs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AnimationDef, SvgAttrs } from "./types";
import { reactIconTemplate } from "./templates/react-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(ROOT, "icons");
const ANIMATIONS_DIR = path.join(ROOT, "scripts/animations");
const ICONS_OUT_BASE = path.join(ROOT, "packages/react/src/icons");

const args = process.argv.slice(2);
const sourceFilter = args.includes("--source")
  ? args[args.indexOf("--source") + 1]
  : null;
const iconFilter = args.includes("--icon")
  ? args[args.indexOf("--icon") + 1]?.split(",")
  : null;
const includeAll = args.includes("--all");

/** Convert kebab-case to PascalCase */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

/** Extract root SVG attributes needed to render the component wrapper */
function extractSvgAttrs(svgContent: string): SvgAttrs {
  const svgTagMatch = svgContent.match(/<svg([^>]*)>/s);
  const svgTag = svgTagMatch?.[1] ?? "";

  const viewBox = svgTag.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";

  // Get inner content (after the opening <svg> tag)
  const inner = svgContent.replace(/<svg[^>]*>/s, "").replace(/<\/svg>/g, "");

  // Stroke-based: root has stroke attribute, OR children use stroke
  // Fill-based (heroicons solid style): root has fill="none" but children use fill, not stroke
  const rootHasStroke = svgTag.includes("stroke");
  const childrenHaveStroke = /\bstroke="(?!none)[^"]+"/i.test(inner);
  const strokeBased = rootHasStroke || childrenHaveStroke;

  // Linecap/join are on the root for lucide/tabler, or on paths for heroicons — either is fine
  const strokeLinecap = svgContent.match(/stroke-linecap="([^"]+)"/)?.[1];
  const strokeLinejoin = svgContent.match(/stroke-linejoin="([^"]+)"/)?.[1];

  return { viewBox, strokeBased, strokeLinecap, strokeLinejoin };
}

/** Extract inner SVG content (paths, circles, etc.) from raw SVG */
function extractSvgChildren(svgContent: string): string {
  const inner = svgContent
    .replace(/<\?xml[^?]*\?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<svg[^>]*>/gis, "")
    .replace(/<\/svg>/gi, "")
    .trim();

  return inner
    // Strip hardcoded stroke colors — inherit from SVG wrapper (stroke={color})
    .replace(/\s+stroke="(?!none|currentColor)[^"]+"/g, "")
    // Strip hardcoded hex fill colors — inherit from SVG wrapper (fill={color} or fill="none")
    .replace(/\s+fill="#[0-9a-fA-F]{3,8}"/g, "")
    // Strip per-element stroke props — controlled via SVG wrapper props
    .replace(/\s+stroke-width="[^"]+"/g, "")
    .replace(/\s+stroke-linecap="[^"]+"/g, "")
    .replace(/\s+stroke-linejoin="[^"]+"/g, "")
    // Convert remaining kebab-case attrs to camelCase for JSX
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/class=/g, "className=");
}

/** Load animation definition for an icon, or return null */
async function loadAnimationDef(iconName: string): Promise<AnimationDef | null> {
  const defPath = path.join(ANIMATIONS_DIR, `${iconName}.ts`);
  if (!fs.existsSync(defPath)) return null;

  try {
    const mod = await import(defPath);
    return mod.animation as AnimationDef;
  } catch (err) {
    console.warn(`  ⚠ Failed to load animation def for "${iconName}":`, err);
    return null;
  }
}

/** Default animation when no definition exists (--all flag) */
const DEFAULT_ANIMATION: AnimationDef = {
  target: "svg",
  variants: {
    normal: {},
    animate: { scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.4 },
};

async function generateIcon(
  svgPath: string,
  iconName: string,
  source: string,
  outDir: string
): Promise<boolean> {
  const svgContent = fs.readFileSync(svgPath, "utf-8");
  const svgChildren = extractSvgChildren(svgContent);
  const svgAttrs = extractSvgAttrs(svgContent);
  const componentName = `${toPascalCase(iconName)}Icon`;

  const animDef = await loadAnimationDef(iconName);

  if (!animDef && !includeAll) {
    console.log(`  ⏭ ${componentName} — no animation def, skipping (use --all to generate placeholder)`);
    return false;
  }

  const code = reactIconTemplate({
    componentName,
    iconName,
    source,
    svgChildren,
    svgAttrs,
    animation: animDef ?? DEFAULT_ANIMATION,
    // icons live at src/icons/<source>/<name>.tsx → ../../types
    typesPath: "../../types",
  });

  const outFile = path.join(outDir, `${iconName}.tsx`);
  fs.writeFileSync(outFile, code, "utf-8");
  console.log(`  ✓ ${componentName}${animDef ? "" : " (placeholder)"}`);
  return true;
}

/** Write per-source barrel index */
function writeSourceIndex(outDir: string, iconNames: string[]): void {
  const lines = iconNames.map((n) => `export * from "./${n}";`);
  fs.writeFileSync(path.join(outDir, "index.ts"), lines.join("\n") + "\n", "utf-8");
}

/**
 * Write aggregate barrel.
 * Re-exports only the primary source (lucide) for the default `liveicons/react` import.
 * All sources are accessible via per-source imports: `liveicons/react/<source>`.
 */
function writeAggregateIndex(generatedSources: string[]): void {
  const PRIMARY = "lucide";
  const primary = generatedSources.includes(PRIMARY) ? PRIMARY : generatedSources[0];
  const lines = [
    `// Default source: ${primary}`,
    `// For other styles use: liveicons/react/<source>`,
    `// Available: ${generatedSources.join(", ")}`,
    `export * from "./${primary}";`,
  ];
  fs.writeFileSync(
    path.join(ICONS_OUT_BASE, "index.ts"),
    lines.join("\n") + "\n",
    "utf-8"
  );
}

/** Update packages/react/src/index.ts to enable icon exports */
function enableMainExport(): void {
  const mainIndexPath = path.join(ROOT, "packages/react/src/index.ts");
  let mainIndex = fs.readFileSync(mainIndexPath, "utf-8");
  if (mainIndex.includes("// export * from")) {
    mainIndex = mainIndex.replace(
      /\/\/ export \* from "\.\/icons";/,
      'export * from "./icons";'
    );
    fs.writeFileSync(mainIndexPath, mainIndex, "utf-8");
  }
}

async function main() {
  fs.mkdirSync(ICONS_OUT_BASE, { recursive: true });

  const sources = fs
    .readdirSync(ICONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !sourceFilter || name === sourceFilter);

  let totalGenerated = 0;
  let totalSkipped = 0;
  const generatedSources: string[] = [];

  for (const source of sources) {
    const sourceDir = path.join(ICONS_DIR, source);
    const outDir = path.join(ICONS_OUT_BASE, source);

    const svgFiles = fs
      .readdirSync(sourceDir)
      .filter((f) => f.endsWith(".svg"))
      .filter((f) => !iconFilter || iconFilter.includes(path.basename(f, ".svg")));

    if (svgFiles.length === 0) continue;

    console.log(`\n📦 ${source} (${svgFiles.length} SVGs found)`);
    fs.mkdirSync(outDir, { recursive: true });

    const generatedNames: string[] = [];

    for (const file of svgFiles) {
      const iconName = path.basename(file, ".svg");
      const ok = await generateIcon(path.join(sourceDir, file), iconName, source, outDir);
      if (ok) {
        generatedNames.push(iconName);
        totalGenerated++;
      } else {
        totalSkipped++;
      }
    }

    if (generatedNames.length > 0) {
      writeSourceIndex(outDir, generatedNames);
      generatedSources.push(source);
    }
  }

  if (generatedSources.length > 0) {
    writeAggregateIndex(generatedSources);
    enableMainExport();
  }

  console.log(`\n✅ Generated: ${totalGenerated} | Skipped (no anim def): ${totalSkipped}`);
  if (totalSkipped > 0) {
    console.log(`   → Create animation defs in scripts/animations/<name>.ts and re-run`);
  }
  console.log(`\n📂 Per-source entry points:`);
  for (const s of generatedSources) {
    console.log(`   from 'liveicons/react/${s}'`);
  }
}

main().catch(console.error);
