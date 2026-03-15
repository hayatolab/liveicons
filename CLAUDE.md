# liveicons

Animated icon micro-interactions in 1 line of code. MIT-licensed React library built on top of Lucide, Tabler, and Heroicons SVGs with Framer Motion animations. Monorepo (pnpm workspaces + Turbo).

## Project Structure

```
liveicons/
├── apps/
│   ├── docs/           # Next.js 15 + Fumadocs — liveicons.dev
│   └── playground/     # Vite React sandbox, dev only, port 3001
├── packages/
│   ├── react/          # Main public package: "liveicons" (v0.1.0, published)
│   ├── core/           # Framework-agnostic types + resolveSpeed()
│   ├── vue/            # Vue 3 adapter — Phase 2, placeholder only
│   └── config-typescript/  # Shared tsconfigs
├── scripts/            # Icon generation pipeline (TypeScript, run via tsx)
├── icons/              # Source SVGs — 8,468 icons across 5 sources
├── .claude/
│   ├── skills/create-animated-icon/SKILL.md  # Full workflow for adding icons
│   └── references/     # component-anatomy.md, semantic-map.md, spring-presets.ts, svgo-config.md
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Icon Sources

| Source          | Count | Format        |
| --------------- | ----- | ------------- |
| lucide          | 1,708 | 24×24, stroke |
| tabler          | 343   | 24×24, stroke |
| tabler-filled   | 343   | 24×24, fill   |
| heroicons       | 343   | 24×24, stroke |
| heroicons-solid | 343   | 24×24, fill   |

SVGs live in `icons/<source>/<name>.svg`. Lucide is the primary/default source.

---

## Main Package: `liveicons`

- Located at `packages/react/`
- Published to npm
- Exports:
  - `from 'liveicons/react'` — lucide icons (default)
  - `from 'liveicons/react/<source>'` — per-source (lucide, tabler, tabler-filled, heroicons, heroicons-solid)
  - Types: `LiveIconProps`, `LiveIconHandle`
  - Hook: `useIconAnimation`
- Peer deps: React 18+ or 19+, Framer Motion 11+ (`motion`)
- Build: tsup (ESM + CJS), per-source entry points for tree-shaking

### Component API

```tsx
<BellIcon animate="hover" speed="normal" size={24} color="currentColor" />
```

- `animate`: `"hover"` | `"click"` | `"loop"` | `"once"` | `false`
- `speed`: `"slow"` | `"normal"` | `"fast"` | `number` (seconds)
  - Resolved by `resolveSpeed()` in `@liveicons/core`: slow=1.2s, normal=0.6s, fast=0.25s
- `size`, `color`, `strokeWidth`, `className` + all HTMLDivElement props
- Imperative: `ref.startAnimation()` / `ref.stopAnimation()` via `LiveIconHandle`

---

## Generation Pipeline

**Rule: never hand-write components. Always use the pipeline.**

### Scripts (`pnpm <script>`)

| Script             | What it does                                                         |
| ------------------ | -------------------------------------------------------------------- |
| `populate`         | Copies SVGs from `.liveicons-docs/references/` into `icons/`         |
| `generate`         | SVG + animation def → React component in `packages/react/src/icons/` |
| `animate`          | Marks components as animation-ready (placeholder)                    |
| `validate`         | Lints generated components against 7 rules                           |
| `check-imports`    | Enforces approved import sources                                     |
| `check-duplicates` | Detects duplicate names within same source                           |

### Flags

- `--source <name>` — one source only
- `--icon <names>` — specific icons
- `--all` — include icons without animation defs (uses placeholder animation)

### Adding a New Animated Icon

1. SVG already in `icons/<source>/<name>.svg` (or copy it there)
2. Create `scripts/animations/<name>.ts` with an `AnimationDef`
3. `pnpm generate --icon <name>`
4. `pnpm validate`
5. `pnpm build`
6. Test in playground: `pnpm dev` (port 3001)

See `.claude/skills/create-animated-icon/SKILL.md` for the full workflow, motion patterns, transition presets, and common mistakes.

### AnimationDef Structure

```typescript
import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg" | "path" | "group",
  pathIndex?: [0] | "all",           // only when target="path"
  variants: {
    normal: { /* resting state */ },
    animate: { /* animated state */ }
  },
  transition: {
    duration: number,  // 0.07–0.6s, hard ceiling 0.4s for UI
    ease: string,
    // OR spring:
    type: "spring",
    stiffness: number,
    damping: number,
    mass?: number
  },
  category?: "navigation" | "action" | "feedback" | "media",
  tags?: string[]
};
```

### Validation Rules (validate.ts)

1. `"use client"` on line 1
2. Uses `LiveIconProps` type
3. Uses `LiveIconHandle` type
4. Uses `forwardRef`
5. Variant constants in `UPPER_SNAKE_CASE` (`SVG_VARIANTS`, `PATH_VARIANTS`, `GROUP_VARIANTS`)
6. No hardcoded hex colors
7. Variants must have both `"normal"` and `"animate"` keys

### Allowed Imports (check-imports.ts)

`motion/react`, `react`, `../types`, `../../types`, `../hooks/useIconAnimation`, `../../hooks/useIconAnimation`, `@liveicons/core`

---

## Workspace Commands

```bash
pnpm build          # turbo build all packages
pnpm dev            # turbo dev (playground at :3001, watches)
pnpm typecheck      # turbo typecheck
pnpm validate       # lint generated components
pnpm check-imports  # enforce import rules
pnpm clean          # remove node_modules, .turbo
```

---

## Key References in `.claude/references/`

- **component-anatomy.md** — full annotated component breakdown (hooks, controls, SVG targets)
- **semantic-map.md** — icon name → recommended motion pattern table
- **spring-presets.ts** — copy-paste spring/tween configs with decision tree
- **svgo-config.md** — SVGO rules that preserve animation targets

---

## Tech Stack

- **Node**: >=20, **pnpm**: 9.0.0
- **Build**: Turbo 2+, tsup, tsx (for scripts)
- **TypeScript**: 5.4+
- **React**: 18+ / 19+, **Motion**: 11+ (Framer Motion)
- **Docs**: Next.js 15 + Fumadocs
- **Playground**: Vite + React 18

---

## Current Status

- Core React library v0.1.0 — published
- Icons with animation defs: ~37 (bell, check, loader, etc.)
- Vue adapter: Phase 2, not started
- Docs site: Phase 1 Week 3, in progress
