---
name: svg-animation-techniques
description: SVG animation techniques knowledge base for designing icon animations — covers path drawing, morphing, transform composition, stroke tricks, and how each technique maps to Framer Motion variants in liveicons.
---

# SVG Animation Techniques for Icon Design

Use this skill when designing **how** an icon should animate — choosing the right SVG technique, understanding what's possible, and translating SVG concepts into Framer Motion `AnimationDef` variants.

> **Relationship to other skills:**
> - `icon-design` → picks which icon + mode
> - `svg-animation-techniques` (this) → designs the motion using SVG knowledge
> - `create-animated-icon` → implements the AnimationDef and runs the pipeline

---

## 1. The Three Animation Buckets

Every SVG icon animation falls into one of three categories:

| Bucket | What it looks like | SVG technique | Framer Motion mapping |
|--------|-------------------|---------------|----------------------|
| **Drawing** | Path appears to be drawn from nothing | `stroke-dasharray` + `stroke-dashoffset` | `pathLength: [0, 1]` in variants |
| **Transforming** | Icon moves, rotates, scales, or shakes | CSS/SVG transforms | `rotate`, `scale`, `x`, `y`, `opacity` in variants |
| **Morphing** | Shape changes into another shape | `d` attribute animation or attribute interpolation | `d` path interpolation or attribute tweening |

Most liveicons use **transforming** (simplest, most performant). **Drawing** is used for check marks and reveals. **Morphing** is advanced and used sparingly.

---

## 2. Path Drawing Animations

### The Core Technique

Path drawing works by manipulating the stroke, not the path itself:

1. **`stroke-dasharray`** — creates a dashed stroke. Set it to the path's total length to create one dash that covers the entire path.
2. **`stroke-dashoffset`** — shifts where the dash starts. Set it equal to the path length to hide the dash completely.
3. **Animate `stroke-dashoffset` to 0** — the path appears to draw itself.

```svg
<!-- Hidden state: dash exists but is shifted out of view -->
<circle r="6" stroke-dasharray="38" stroke-dashoffset="38" />

<!-- Animate to visible: offset returns to 0 -->
<circle r="6" stroke-dasharray="38" stroke-dashoffset="0" />
```

### pathLength Normalization

Instead of calculating exact path lengths, SVG's `pathLength` attribute normalizes the length to any number. In liveicons, we use `pathLength="1"`:

```svg
<path d="..." pathLength="1" />
<!-- Now stroke-dasharray="1" = full length, stroke-dashoffset="1" = fully hidden -->
```

### Framer Motion Translation

In liveicons, Framer Motion handles this via its built-in `pathLength` property:

```typescript
// AnimationDef for a draw-in effect (e.g., check icon)
export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 }
  },
  transition: { duration: 0.4, ease: "easeInOut" }
};
```

**Key rule:** When using `pathLength` animation, the source SVG path MUST have `pathLength="1"` attribute.

### Partial Drawing / Moving Dash

You can animate a dash that's shorter than the path to create a "moving segment" effect:

```svg
<!-- A dash of 8 units moving along a 70-unit path -->
<path stroke-dasharray="8 70" stroke-dashoffset="0" />
<!-- Animate stroke-dashoffset to -78 (dash + gap) to move it fully through -->
```

**Gap sizing rule:** For a clean exit (dash disappears at end), set gap length >= path length.

This technique powers loading/spinner animations on stroke paths.

### Reverse Drawing (Erase)

Animate `pathLength` from 1 to 0 (or `stroke-dashoffset` from 0 to path-length) for an erase effect. Useful for "close" or "dismiss" animations.

---

## 3. Transform Animations

Transforms are the bread and butter of icon micro-interactions. They're GPU-composited and performant.

### Transform Properties

| Property | What it does | Common use |
|----------|-------------|------------|
| `rotate` | Rotates around center | Settings gear, refresh spin, shake |
| `scale` / `scaleX` / `scaleY` | Enlarges/shrinks | Heart pop, button press, blink |
| `x` / `y` (translate) | Moves horizontally/vertically | Arrow nudge, bounce, send launch |
| `opacity` | Fades in/out | Flash, pulse, combined with scale |

### Keyframe Sequences vs. Single Values

**Single value** — animate to a target and back (use spring):
```typescript
variants: {
  normal: { rotate: 0 },
  animate: { rotate: 90 }
}
// Spring will naturally settle at 90
```

**Keyframe array** — animate through multiple steps (use tween):
```typescript
variants: {
  normal: { rotate: 0 },
  animate: { rotate: [0, -12, 12, -8, 8, -4, 0] }
}
// Bell shake: oscillates with decreasing amplitude, returns to start
```

### Combining Transforms

Multiple transform properties can animate simultaneously:

```typescript
// Send icon: moves right and up at the same time
variants: {
  normal: { x: 0, y: 0 },
  animate: { x: [0, 6, 0], y: [0, -6, 0] }
}
```

### Transform Origin in SVGs

SVG transforms default to the **viewport origin (0,0)**, not the element center. This is different from CSS!

- Framer Motion's `motion.svg` automatically handles `transform-box: fill-box` and `transform-origin: center`, so rotations work as expected.
- When targeting specific paths with `target: "path"`, be aware that rotation pivots around the path's bounding box center.

### Amplitude Guidelines

| Icon size | Max rotation | Max translate | Max scale |
|-----------|-------------|---------------|-----------|
| 16px | +-8deg | 2px | 1.1x |
| 24px (default) | +-15deg | 4px | 1.2x |
| 32px+ | +-20deg | 6px | 1.15x |

**Rule:** Larger icons need smaller relative amplitude — oversized motion feels unstable.

---

## 4. Morph Animations

Morphing = changing the shape itself. There are two approaches:

### Attribute Morphing (Simple)

Animate a single attribute to transform between shapes:

```svg
<!-- Rectangle to circle: animate rx -->
<rect rx="0" /> → <rect rx="30" />

<!-- Triangle to line: animate polygon points -->
<polygon points="12 4 20 16 4 16" /> → <polygon points="12 16 20 16 4 16" />
```

**Framer Motion translation:**
```typescript
// Morph a rect's corner radius
variants: {
  normal: { rx: 0 },
  animate: { rx: 12 }
}
```

### Path Morphing (Complex)

Animate the `d` attribute between two path shapes. Both paths MUST have the **same number and type of commands** for smooth interpolation.

```typescript
// Hamburger menu to X
variants: {
  normal: { d: "M4 6h16" },   // horizontal line
  animate: { d: "M6 18L18 6" } // diagonal line
}
```

**Rules for path morphing:**
1. Both `d` values must have identical command structure (same number of M, L, C, etc.)
2. Only the numeric values should differ
3. If paths differ in structure, add invisible/degenerate points to match

**Framer Motion:** Supports `d` attribute interpolation on `motion.path` elements. This is advanced — only use when the visual effect demands it (e.g., hamburger-to-X, play-to-pause).

### The Mental Model

To morph shape A into shape B:
1. Draw both shapes using the **same element type**
2. Identify which **attributes** change between A and B
3. Animate those attributes

Example: Circle to square = `<rect>` with animated `rx` (not `<circle>` to `<rect>`).

---

## 5. Stroke Animations Beyond Drawing

### Stroke Width Pulsing

Animate `strokeWidth` for a subtle breathing/pulse effect:

```typescript
variants: {
  normal: { strokeWidth: 2 },
  animate: { strokeWidth: [2, 2.5, 2] }
}
```

### Stroke Color Transitions

Animate `stroke` color for state changes (success green, error red):

```typescript
variants: {
  normal: { stroke: "currentColor" },
  animate: { stroke: "#22c55e" } // green
}
```

**Caution:** Avoid hardcoded colors in liveicons — prefer using `opacity` changes or `currentColor` with CSS color inheritance.

### Dash Pattern Animation

Animate `strokeDasharray` itself for decorative effects:

```typescript
// Dashes appear and merge
variants: {
  normal: { strokeDasharray: "4 4" },
  animate: { strokeDasharray: "20 0" }
}
```

---

## 6. Multi-Element Coordination

### Staggered Path Drawing

When an icon has multiple paths, draw them sequentially:

```typescript
// Path 0 draws first, path 1 draws after a delay
// In AnimationDef, use group target with stagger:
export const animation: AnimationDef = {
  target: "group",
  variants: {
    normal: { /* all paths hidden */ },
    animate: { /* all paths visible */ }
  },
  transition: {
    staggerChildren: 0.15,  // delay between each child
    duration: 0.3
  }
};
```

### Independent Part Animation

Different parts of an icon animate differently. Example: mail icon — envelope shakes while flap opens.

This requires the `target: "path"` approach with specific `pathIndex` values, or advanced hand-tuning in the generated component.

---

## 7. Technique Selection Guide

Given a desired effect, pick the right technique:

| Desired effect | Technique | Target | Key property |
|---------------|-----------|--------|-------------|
| Icon shakes/wiggles | Transform keyframes | `"svg"` | `rotate: [0, -12, 12, ...]` |
| Icon bounces | Transform keyframes | `"svg"` | `y: [0, -4, 0]` |
| Icon spins continuously | Transform single | `"svg"` | `rotate: 360` (loop mode) |
| Path draws in from nothing | Path drawing | `"path"` | `pathLength: [0, 1]` |
| Icon pulses/breathes | Transform keyframes | `"svg"` | `scale: [1, 1.1, 1]` |
| Shape changes form | Morph | `"path"` | `d` attribute or `rx` |
| Icon flashes/blinks | Opacity keyframes | `"svg"` | `opacity: [1, 0.4, 1]` |
| Part of icon moves | Targeted transform | `"path"` + index | `y`, `rotate` on specific path |
| Multiple paths draw sequentially | Stagger | `"group"` | `staggerChildren` + `pathLength` |
| Send/launch direction | Combined transforms | `"svg"` | `x` + `y` keyframes |
| Click/press feedback | Scale spring | `"svg"` | `scale: [1, 0.9, 1]` (spring) |
| Eye blink | Scale Y | `"svg"` | `scaleY: [1, 0.1, 1]` |

---

## 8. SVG Coordinate System Essentials

### viewBox and Animation

All liveicons use `viewBox="0 0 24 24"`. Animation values (translate x/y) are in viewBox units, not pixels.

- `x: 4` means 4 units in a 24-unit space = 16.7% of icon width
- This scales proportionally with icon size — a 48px icon moves 8 actual pixels

### SVG vs CSS Transform Differences

| Aspect | SVG native | CSS / Framer Motion |
|--------|-----------|-------------------|
| Units | No units: `translate(10, 20)` | With units: `translateX(10px)` |
| Origin | Top-left of viewport (0,0) | Center of element (50% 50%) |
| Rotation | Degrees only: `rotate(45)` | Degrees: `rotate(45deg)` |

Framer Motion normalizes these — use unitless values in variants and it handles the rest.

---

## 9. Performance Considerations

### GPU-Composited (Fast)
- `transform` (rotate, scale, translate)
- `opacity`

### Triggers Repaint (Acceptable for 24x24 icons)
- `stroke-dashoffset` / `pathLength`
- `stroke-width`
- `d` attribute (path morphing)

### Triggers Layout (Avoid)
- Changing `width`, `height`, `viewBox`
- Changing `x`, `y` attributes on `<rect>`, `<circle>` (use transforms instead)

**Rule:** For 24x24 icons, repaint-triggering animations are fine. For larger decorative icons (64px+), prefer GPU-composited transforms.

---

## 10. Common Animation Recipes

### Recipe: Shake (Bell, Trash)
```typescript
variants: {
  normal: { rotate: 0 },
  animate: { rotate: [0, -12, 12, -8, 8, -4, 0] }
}
// Decreasing amplitude = natural damping
// Tween with easeInOut, ~0.5s
```

### Recipe: Draw Check Mark
```typescript
target: "path",
pathIndex: [0],
variants: {
  normal: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 }
}
// Tween, easeInOut, 0.3-0.4s
// SVG path MUST have pathLength="1"
```

### Recipe: Heartbeat
```typescript
variants: {
  normal: { scale: 1 },
  animate: { scale: [1, 1.3, 1, 1.15, 1] }
}
// Double-beat pattern mimics real heartbeat
// Tween, easeInOut, 0.5s
```

### Recipe: Continuous Spin (Loader)
```typescript
variants: {
  normal: { rotate: 0 },
  animate: { rotate: 360 }
}
// Loop mode injects repeat: Infinity
// Tween, linear, 1s
// NEVER add repeat in AnimationDef
```

### Recipe: Directional Nudge (Arrow)
```typescript
variants: {
  normal: { x: 0 },
  animate: { x: [0, 4, 0] }
}
// Spring stiffness:400, damping:15
// Quick and snappy
```

### Recipe: Pop + Settle (Star, Plus)
```typescript
variants: {
  normal: { scale: 1, rotate: 0 },
  animate: { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }
}
// Combined transforms = more character
// Tween, easeInOut, 0.4s
```

### Recipe: Blink (Eye)
```typescript
variants: {
  normal: { scaleY: 1 },
  animate: { scaleY: [1, 0.1, 1] }
}
// Fast tween, 0.25s
// scaleY squishes vertically = eyelid close
```

---

## Related Skills

- **`icon-design`** — Pick the right icon + animate mode first
- **`create-animated-icon`** — Implement the AnimationDef and run the pipeline

## Reference Files

- `references/svg-animation-cheatsheet.md` — Quick-reference card for SVG animation properties
- `.claude/references/spring-presets.ts` — Spring/tween configs with decision tree
- `.claude/references/semantic-map.md` — Icon name → motion pattern mapping
- `.claude/references/component-anatomy.md` — Full annotated component breakdown
