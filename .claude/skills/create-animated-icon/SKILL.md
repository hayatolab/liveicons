---
name: create-animated-icon
description: Use when adding a new animated icon to liveicons — creating the animation definition file, choosing the right target and motion pattern, and running the generate pipeline.
---

# create-animated-icon

## Overview

Each icon = one animation definition file in `scripts/animations/<name>.ts` + one Lucide SVG in `icons/lucide/<name>.svg`. The generate script produces the React component automatically.

**Never hand-write components.** Always go through the pipeline.

---

## Workflow

```
1. Copy SVG → icons/lucide/<name>.svg
2. Create → scripts/animations/<name>.ts  (AnimationDef)
3. Run    → pnpm generate --icon <name>
4. Verify → pnpm validate && pnpm build
5. Test   → playground at localhost:3001
```

---

## AnimationDef Structure

```ts
// scripts/animations/<name>.ts
import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",          // "svg" | "path" | "group"
  pathIndex: [0],         // only when target="path"; index of <path> elements (0-based)
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",   // "navigation" | "action" | "feedback" | "media"
  tags: ["keyword1", "keyword2"],
};
```

**Rules:**
- Variants MUST have both `normal` and `animate` keys
- For `loop` mode: do NOT add `repeat: Infinity` — the template injects it automatically
- Const name in the generated file = `SVG_VARIANTS` / `PATH_VARIANTS` / `GROUP_VARIANTS`

---

## Target Selection

| Scenario | Target | Notes |
|----------|--------|-------|
| Whole-icon motion (shake, spin, bounce) | `"svg"` | Most common. `<motion.svg>` wraps everything. |
| Draw-on / reveal animation | `"path"` | Use `pathLength: [0, 1]`. Set `pathIndex` to target specific paths. |
| Coordinated multi-path motion | `"group"` | `<motion.g>` wraps all paths together. |
| One path moves, others static | `"path"` + `pathIndex: [n]` | Specify exact path index. |

---

## Motion Patterns by Icon Semantics

See `references/semantic-map.md` for full mapping. Quick reference:

| Motion | Properties | Icons |
|--------|-----------|-------|
| Shake/wiggle | `rotate: [0, -12, 12, -8, 8, -4, 0]` | bell, trash |
| Nudge directional | `x/y: [0, 4, 0]` | arrows, chevrons |
| Pulse/heartbeat | `scale: [1, 1.3, 1, 1.15, 1]` | heart |
| Spin continuous | `rotate: 360`, `ease: "linear"` + loop mode | loader |
| Rotate to state | `rotate: 90` or `rotate: 45` | settings, sun |
| Draw-on | `pathLength: [0, 1]`, `opacity: [0, 1]` | check |
| Flash/flicker | `opacity: [1, 0.4, 1]` | zap, info |
| Scale pop | `scale: [1, 1.2, 1]` | star |

---

## Transition Types

### Tween (default)
```ts
transition: { duration: 0.4, ease: "easeInOut" }
// Eases: "easeOut" for enters | "easeIn" for exits | "easeInOut" for state changes | "linear" for spin
```

### Spring (for snappy micro-interactions)
```ts
transition: { type: "spring", stiffness: 400, damping: 20, mass: 0.5 }
// Icons are small — use higher stiffness+damping than typical UI springs
// See references/spring-presets.ts for copy-paste presets
```

### Duration ranges (from Material Design / Apple HIG research)

| Trigger | Duration | Notes |
|---------|---------|-------|
| Click/tap feedback | 70–150ms | Must feel instantaneous |
| Hover micro-interaction | 100–150ms | Brief acknowledgment |
| Toggle / state change | 150–300ms | Between icon states |
| Entry / appear | 200–300ms | Icon mounting |
| Attention / notification | 300–600ms | Bell shake, badge pop |
| Loop cycle (spinner) | 600–1500ms | Per full rotation |

**Hard ceiling: 400ms** (Material Design). Above that, animations feel sluggish.

### Spring vs tween decision

Use **spring** when animating to a single end state (rotate 90, scale 1.1) — naturally interruptible if user hovers off mid-animation. Use **tween** when animating through a keyframe sequence `[0, -12, 12, -8, 0]` or for continuous rotation.

---

## Speed System

`resolveSpeed(speed)` maps the `speed` prop to seconds:

| Prop value | Duration |
|-----------|---------|
| `"slow"` | 1.2s |
| `"normal"` | 0.6s |
| `"fast"` | 0.25s |
| `number` | exact seconds |

The template passes `duration` into every transition — **do not hardcode durations in variants**.

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| `repeat: Infinity` in animation def | Remove it. Template handles loop mode. |
| `useIconAnimation` import in template | Not used. Template uses `useAnimation` directly. |
| `import.meta.dirname` in scripts | Use `fileURLToPath(import.meta.url)` instead. |
| Hardcoded hex colors | Use `color` prop → `stroke={color}`. |
| `JSON.stringify(Infinity)` → `null` | Use `serializeTransition()` replacer (already in template). |
| Variant key not `normal`/`animate` | Template expects exactly these two keys. |

---

## SVG Setup

Every source SVG must use `viewBox="0 0 24 24"` and `pathLength="1"` on animated paths:

```html
<!-- icons/lucide/check.svg -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path pathLength="1" d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

`pathLength="1"` normalizes the path's total length to 1, so `pathLength: [0, 1]` in Motion works identically on every icon without needing `getTotalLength()`. Motion handles this automatically for `pathLength` animations — but setting it on the SVG element makes CSS fallbacks trivial too.

### transform-box: fill-box (automatic in Motion)

SVG transform-origin defaults to `(0,0)` — the viewBox corner, not the element center. Without correction, a `rotate(360)` orbits the entire viewport. Motion sets `transform-box: fill-box` automatically for all `motion.*` SVG elements, so rotations are element-relative by default. If you ever animate raw SVG elements outside Motion, add:

```css
.icon path { transform-box: fill-box; transform-origin: center; }
```

## Performance

### will-change: dynamic only
Never set `will-change` globally. Apply it only during active animation:

```tsx
// In useIconAnimation (or directly in the component):
el.style.willChange = isAnimating ? "transform, opacity" : "auto";
```

Promoting 50+ icons to GPU layers simultaneously causes _inverse_ performance on mobile VRAM.

### IntersectionObserver: required for icon-heavy pages
Pause off-screen animations when you have 15+ animated icons on a page. Observe the wrapper `<div>`, not the SVG directly:

```tsx
const observer = new IntersectionObserver(
  ([entry]) => setIsVisible(entry.isIntersecting),
  { threshold: 0.1, rootMargin: "50px" }
);
observer.observe(wrapperRef.current);
```

Cap concurrent animations at ~15–20.

## Accessibility

### prefers-reduced-motion
Wrap the app root with `MotionConfig` — Motion handles the rest:

```tsx
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```

Replace spatial motion with opacity fades for reduced-motion users (don't eliminate animation entirely — that's worse UX than fading).

### ARIA: decorative by default
Icons are decorative by default (`aria-hidden="true"`). Only switch to informational mode when a `title` prop is provided:

```tsx
<svg
  role={title ? "img" : undefined}
  aria-hidden={title ? undefined : true}
  aria-labelledby={title ? titleId : undefined}
  focusable="false"  // prevents double-focus in legacy Edge
>
  {title && <title id={titleId}>{title}</title>}
</svg>
```

## Validation

```bash
pnpm validate        # checks UPPER_SNAKE_CASE variants, "use client", no hex colors
pnpm check-imports   # verifies all barrel exports are resolvable
pnpm check-duplicates # catches duplicate component names
pnpm build           # final compile check
```

**Do not open a PR until all four pass.**

---

## Reference Files

- `references/semantic-map.md` — complete icon → motion pattern table
- `references/spring-presets.ts` — copy-paste spring configs for different feels
- `references/svgo-config.md` — SVGO rules that preserve animation targets
- `references/component-anatomy.md` — annotated generated component

## Related Skills

- `icon-design` — use first if you need to pick *which* icon to animate (concept → component + animate mode)
