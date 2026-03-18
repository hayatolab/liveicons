# SVG Animation Cheatsheet for Icon Design

Quick-reference for SVG properties, techniques, and their Framer Motion equivalents.

---

## Animatable SVG Properties

### Transform Properties (GPU-composited)

| SVG Property | Framer Motion | Example Values | Notes |
|-------------|---------------|----------------|-------|
| `transform: rotate()` | `rotate` | `90`, `[0, -12, 12, 0]` | Degrees, no unit suffix |
| `transform: scale()` | `scale` | `1.2`, `[1, 1.3, 1]` | Multiplier, 1 = original |
| `transform: scaleX()` | `scaleX` | `[1, 1.1, 1]` | Horizontal only |
| `transform: scaleY()` | `scaleY` | `[1, 0.1, 1]` | Vertical only (blink effect) |
| `transform: translateX()` | `x` | `4`, `[0, 4, 0]` | viewBox units |
| `transform: translateY()` | `y` | `-4`, `[0, -4, 0]` | viewBox units (negative = up) |

### Stroke Properties (repaint, fine for 24x24)

| SVG Property | Framer Motion | Example Values | Notes |
|-------------|---------------|----------------|-------|
| `stroke-dashoffset` | `pathLength` | `[0, 1]` | Requires `pathLength="1"` on SVG element |
| `stroke-width` | `strokeWidth` | `[2, 2.5, 2]` | Subtle pulse effect |
| `stroke-dasharray` | `strokeDasharray` | `"4 4"` → `"20 0"` | Dash pattern animation |
| `stroke` | `stroke` | Color values | Prefer currentColor + CSS |

### Visual Properties

| SVG Property | Framer Motion | Example Values | Notes |
|-------------|---------------|----------------|-------|
| `opacity` | `opacity` | `[1, 0.4, 1]` | GPU-composited, use freely |
| `fill` | `fill` | Color values | Prefer currentColor |
| `fill-opacity` | `fillOpacity` | `[0, 1]` | Fill fade-in |

### Shape Properties (repaint)

| SVG Property | Framer Motion | Example Values | Notes |
|-------------|---------------|----------------|-------|
| `d` (path) | `d` | Path string | Both paths must have same command structure |
| `rx` (rect) | `rx` | `0` → `12` | Corner radius morphing |
| `r` (circle) | `r` | `6` → `8` | Circle size pulse |
| `cx`, `cy` | `cx`, `cy` | Position values | Circle position shift |

---

## Path Drawing Quick Setup

```
1. Set pathLength="1" on the SVG <path> element
2. In AnimationDef:
   - normal: { pathLength: 0, opacity: 0 }
   - animate: { pathLength: 1, opacity: 1 }
3. Use target: "path", pathIndex: [0]
```

### Manual stroke-dash calculation (for understanding)

```
Path total length = L (use getTotalLength() or estimate)
stroke-dasharray = L        → one dash = full path
stroke-dashoffset = L       → dash shifted out of view (hidden)
stroke-dashoffset = 0       → dash visible (drawn)
```

**pathLength="1" normalization:** Sets L=1, so dasharray=1 and dashoffset animates 1→0.

---

## Keyframe Pattern Templates

### Shake (decreasing amplitude)
```
[0, -A, A, -A*0.66, A*0.66, -A*0.33, 0]
```
Example (A=12): `[0, -12, 12, -8, 8, -4, 0]`

### Bounce (single)
```
[0, -A, 0]
```
Example: `y: [0, -4, 0]`

### Double-beat (heartbeat)
```
[1, peak1, 1, peak2, 1]
```
Example: `scale: [1, 1.3, 1, 1.15, 1]`

### Flash
```
[1, low, 1, low*1.5, 1]
```
Example: `opacity: [1, 0.4, 1, 0.6, 1]`

### Wobble (symmetric)
```
[0, -A, A, 0]
```
Example: `rotate: [0, -8, 8, 0]`

### Scale pop
```
[1, peak, 1]
```
Example: `scale: [1, 1.2, 1]`

---

## Technique Decision Tree

```
What effect do you want?
│
├─ Path appears from nothing?
│  └─ PATH DRAWING: pathLength [0,1], target:"path"
│
├─ Shape changes form?
│  ├─ Simple (round corners, size)?
│  │  └─ ATTRIBUTE MORPH: animate rx, r, width, etc.
│  └─ Complex (path to different path)?
│     └─ PATH MORPH: animate d attribute (same command count!)
│
├─ Icon moves/rotates/scales?
│  ├─ To a fixed end state?
│  │  └─ SPRING TRANSFORM: rotate, scale, x, y
│  └─ Through multiple positions?
│     └─ TWEEN KEYFRAMES: property: [val1, val2, val3, ...]
│
├─ Icon pulses/breathes?
│  └─ OPACITY/SCALE KEYFRAMES: [1, peak, 1] or [1, low, 1]
│
└─ Multiple parts animate differently?
   ├─ Sequential drawing?
   │  └─ GROUP + STAGGER: staggerChildren
   └─ Different motions per part?
      └─ PATH + specific pathIndex for each
```

---

## SMIL to Framer Motion Translation

For reference when adapting SMIL animations to liveicons:

| SMIL | Framer Motion equivalent |
|------|------------------------|
| `<animate attributeName="x" to="10" dur="0.5s">` | `variants: { animate: { x: 10 } }, transition: { duration: 0.5 }` |
| `<animate ... values="0;10;0" dur="0.5s">` | `variants: { animate: { x: [0, 10, 0] } }` |
| `<animate ... fill="freeze">` | Default behavior (stays at final value) |
| `<animate ... repeatCount="indefinite">` | `animate="loop"` mode (handled by component) |
| `<animate ... begin="click">` | `animate="on-click"` mode |
| `<animate ... begin="mouseenter">` | `animate="on-hover"` mode |
| `<animateTransform type="rotate" to="360">` | `variants: { animate: { rotate: 360 } }` |
| `calcMode="spline" keySplines="0.4 0 0.2 1"` | `transition: { ease: [0.4, 0, 0.2, 1] }` |
| `keyTimes="0;0.5;1" values="0;10;0"` | `variants: { animate: { x: [0, 10, 0] } }` (even distribution) |

---

## CSS Timing Functions → Framer Motion Easing

| CSS Name | Cubic Bezier | Framer Motion |
|----------|-------------|---------------|
| `ease` | `(0.25, 0.1, 0.25, 1)` | `[0.25, 0.1, 0.25, 1]` |
| `ease-in` | `(0.42, 0, 1, 1)` | `"easeIn"` |
| `ease-out` | `(0, 0, 0.58, 1)` | `"easeOut"` |
| `ease-in-out` | `(0.42, 0, 0.58, 1)` | `"easeInOut"` |
| `linear` | `(0, 0, 1, 1)` | `"linear"` |
| Material standard | `(0.4, 0, 0.2, 1)` | `[0.4, 0, 0.2, 1]` |
| Material decelerate | `(0, 0, 0.2, 1)` | `[0, 0, 0.2, 1]` |
| Material accelerate | `(0.4, 0, 1, 1)` | `[0.4, 0, 1, 1]` |

---

## viewBox Unit Reference

All liveicons: `viewBox="0 0 24 24"`

| Translate value | % of icon | At 24px render | At 48px render |
|----------------|-----------|----------------|----------------|
| 1 | 4.2% | 1px | 2px |
| 2 | 8.3% | 2px | 4px |
| 4 | 16.7% | 4px | 8px |
| 6 | 25% | 6px | 12px |

**Rule of thumb:** Keep translates between 2-6 viewBox units for micro-interactions.
