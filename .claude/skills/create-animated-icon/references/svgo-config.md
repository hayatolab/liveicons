# SVGO Configuration for liveicons

When processing SVGs before adding them to `icons/lucide/`, you must preserve animation targets. Default SVGO optimizations will break animations.

## Required SVGO config

Use the `preset-default` override approach — cleaner than listing all safe plugins:

```js
// svgo.config.mjs
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // ❌ MUST DISABLE — breaks animation targets
          cleanupIds: false,            // preserves IDs used as animation targets
          mergePaths: false,            // keeps separate paths for individual animation
          collapseGroups: false,        // preserves <g> wrappers for grouped animations
          convertShapeToPath: false,    // keeps semantic element types
          removeHiddenElems: false,     // keeps elements hidden at initial animation state
          removeViewBox: false,         // essential — all components assume viewBox="0 0 24 24"
          removeEmptyContainers: false, // keeps animation wrapper groups
        },
      },
    },
    {
      name: "prefixIds",  // prevents ID collisions when multiple icons are inlined
    },
  ],
};
```

## Why each disabled plugin matters

### `mergePaths`
The generate script uses `pathIndex: [0]`, `[1]`, etc. to target specific `<path>` elements by position. If SVGO merges `<path d="M..."/>` + `<path d="M..."/>` into one compound path, all indices shift — animations break.

**Example of what breaks:**
```svg
<!-- Before merge: pathIndex [1] targets the checkmark stroke -->
<path d="M...circle..."/>   <!-- index 0 -->
<path d="M...check..."/>    <!-- index 1 ← this is what we animate -->

<!-- After mergePaths: index 1 no longer exists -->
<path d="M...circle... M...check..."/>  <!-- merged into index 0 -->
```

### `collapseGroups`
When `target: "group"` is used, the template wraps a `<g>` in `<motion.g>`. If SVGO collapses the group, there's nothing to animate.

### `cleanupIds`
Some Lucide icons use `<clipPath id="...">` referenced by `clip-path="url(#...)"`. Renaming these IDs breaks the reference.

### `removeViewBox`
All generated components assume `viewBox="0 0 24 24"`. Removing it causes layout issues.

## Lucide SVG format

Lucide icons are already clean and animation-safe. For icons sourced from Lucide directly, **no SVGO processing is needed**. Just copy the SVG as-is into `icons/lucide/`.

The generate script's `extractSvgChildren()` handles:
- Removing the `<svg>` wrapper
- Converting kebab-case attrs to camelCase (`stroke-width` → `strokeWidth`)
- Stripping XML declarations and comments

## Verifying path indices

Before writing your animation def, count which `<path>` is at which index:

```bash
# Quick path index check
grep -o "<path[^/]*/>" icons/lucide/check.svg | nl -v0
# 0: <path d="M20 6 9 17l-5-5"/>  ← this is pathIndex: [0]
```

Or open the SVG in any editor — paths are zero-indexed in document order.
