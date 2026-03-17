# Animation Rework Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace 5,700 bulk-generated generic animation definitions with semantically meaningful, diverse animations using a unified rewrite script with pattern-based matching.

**Architecture:** A single `scripts/rework-animations.ts` script with ~50 improved recipe templates and a pattern-based matching system (regex on icon names + suffix rules). Icons are categorized into semantic groups (directional, toggle, destructive, status, container, media, etc.). Unmatched icons get a better category-aware default instead of the current generic `scalePop`. Hand-crafted originals are auto-detected (not just the 37 known ones) by fingerprinting against known bulk templates — any animation that doesn't match a bulk template is considered hand-crafted and preserved.

**Tech Stack:** TypeScript (tsx), existing generate pipeline (`pnpm generate --all`), existing validation (`pnpm validate`)

---

## Current State

- **5,721** animation files in `scripts/animations/`
- **37 hand-crafted** (bell, heart, check, etc.) — these are GOOD, preserve them
- **2,120** use `scalePop` (scale: [1, 1.1, 1]) with empty `normal: {}` — worst quality
- **773** use identical `shake` pattern regardless of icon meaning
- **~2,800** use directional nudges (often misapplied to non-directional icons)
- Pattern assignment was done by `scripts/create-*-animations.ts` (8 scripts, each covering a letter range)

## File Structure

```
scripts/
├── rework-animations.ts        # CREATE — unified rewrite script
├── rework-recipes.ts           # CREATE — all recipe templates
├── rework-rules.ts             # CREATE — pattern matching rules
├── animations/                 # MODIFY — all 5,721 files rewritten (except protected)
└── create-*-animations.ts      # KEEP — historical reference, no longer used
```

---

### Task 1: Define Improved Recipe Templates

**Files:**
- Create: `scripts/rework-recipes.ts`

- [ ] **Step 1: Create the recipe templates file**

This file exports a `RECIPES` record mapping recipe name → animation file content string. Each recipe must have:
- Proper `normal` state (never empty `{}`)
- Semantic motion that matches the category
- Appropriate transition (spring vs tween per the decision tree)
- `category` and `tags` fields

```typescript
// scripts/rework-recipes.ts

/**
 * Animation recipe templates for the rework script.
 * Each recipe is a complete .ts file content string.
 *
 * NAMING: recipes are named by the MOTION they produce, not the icon.
 * Icons are mapped to recipes in rework-rules.ts.
 */

export const RECIPES = {
  // ===== NAVIGATION =====

  /** Arrows, links, forward-pointing icons */
  nudgeRight: recipe({
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeLeft: recipe({
    normal: { x: 0 },
    animate: { x: [0, -4, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeUp: recipe({
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeDown: recipe({
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  /** Smaller nudge for chevrons, carets */
  nudgeSmallRight: recipe({
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeSmallLeft: recipe({
    normal: { x: 0 },
    animate: { x: [0, -3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeSmallUp: recipe({
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeSmallDown: recipe({
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeDiagUpRight: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeDiagDownRight: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeDiagUpLeft: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, -3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  nudgeDiagDownLeft: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "navigation",
  }),

  // ===== ACTIONS =====

  /** Settings gear, tools — quarter spin and return */
  rotateCW: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, 90, 0] },
    transition: `{ type: "spring", stiffness: 200, damping: 20 }`,
    category: "action",
  }),

  /** Refresh, sync — full spin (designed for on-click/loop, stays at 360 which == 0 visually) */
  rotateFull: recipe({
    normal: { rotate: 0 },
    animate: { rotate: 360 },
    transition: `{ duration: 0.6, ease: "linear" }`,
    category: "action",
  }),

  /** Compass, needle — swing */
  rotateSwing: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, 20, -10, 0] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Aperture, iris — partial rotation */
  rotatePartial: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
    transition: `{ type: "spring", stiffness: 200, damping: 15 }`,
    category: "action",
  }),

  /** Search — tilt/look around */
  searchTilt: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 0] },
    transition: `{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }`,
    category: "action",
  }),

  /** Write, edit — quick scribble */
  scribble: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0, -2, 0], y: [0, -2, 0, -1, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Plus, add — pop with rotate */
  addPop: recipe({
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.15, 1], rotate: [0, 90, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "action",
  }),

  /** X, close — spin dismiss */
  spinDismiss: recipe({
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: 90, scale: [1, 1.1, 1] },
    transition: `{ type: "spring", stiffness: 500, damping: 20, mass: 0.5 }`,
    category: "action",
  }),

  /** Send, launch — diagonal launch */
  launch: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, 6, 0], y: [0, -6, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "action",
  }),

  /** Copy, duplicate — stack nudge */
  stackNudge: recipe({
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "action",
  }),

  /** Camera, capture — shutter click */
  shutterClick: recipe({
    normal: { scale: 1 },
    animate: { scale: [1, 0.9, 1.05, 1] },
    transition: `{ duration: 0.25, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Lock, secure — click down */
  lockClick: recipe({
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 0.85, 1] },
    transition: `{ type: "spring", stiffness: 500, damping: 20, mass: 0.5 }`,
    category: "action",
  }),

  /** Axe, hammer — chop motion */
  chop: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 5, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Archive, file — settle down */
  settleDown: recipe({
    normal: { y: 0 },
    animate: { y: [0, 3, -1, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 20 }`,
    category: "action",
  }),

  // ===== FEEDBACK =====

  /** Bell, notification — ring shake */
  bellRing: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Warning, error — mild shake */
  warningShake: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Danger, destructive — intense shake */
  dangerShake: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -6, 6, -3, 0] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Heart — heartbeat double-pulse */
  heartbeat: recipe({
    normal: { scale: 1 },
    animate: { scale: [1, 1.3, 1, 1.15, 1] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Star, award — pop with tilt */
  starPop: recipe({
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Zap, lightning — flash */
  flash: recipe({
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.4, 1, 0.6, 1] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Alert, info — gentle attention pulse */
  attentionPulse: recipe({
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "feedback",
  }),

  /** Success-adjacent — grow in */
  successGrow: recipe({
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [0.9, 1.1, 1], opacity: [0.8, 1, 1] },
    transition: `{ type: "spring", stiffness: 300, damping: 15 }`,
    category: "feedback",
  }),

  // ===== MEDIA =====

  /** Loader, spinner — continuous spin */
  spinLoop: recipe({
    normal: { rotate: 0 },
    animate: { rotate: 360 },
    transition: `{ duration: 1, ease: "linear" }`,
    category: "media",
  }),

  /** Play, forward — forward nudge */
  playNudge: recipe({
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }`,
    category: "media",
  }),

  /** Pause — squeeze */
  pauseSqueeze: recipe({
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.8, 1] },
    transition: `{ duration: 0.3, ease: "easeInOut" }`,
    category: "media",
  }),

  /** Volume — horizontal ripple */
  volumeRipple: recipe({
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.1, 0.9, 1.05, 1] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "media",
  }),

  /** Disc, record — slow spin */
  discSpin: recipe({
    normal: { rotate: 0 },
    animate: { rotate: 360 },
    transition: `{ duration: 2, ease: "linear" }`,
    category: "media",
  }),

  // ===== STATE / TOGGLE =====

  /** Eye — blink */
  blink: recipe({
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 0.1, 1] },
    transition: `{ duration: 0.25, ease: "easeOut" }`,
    category: "action",
  }),

  /** Sun — partial rotate for rays and return */
  sunRotate: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
    transition: `{ type: "spring", stiffness: 200, damping: 30, mass: 1 }`,
    category: "action",
  }),

  /** Moon — arc swing */
  moonSwing: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 0] },
    transition: `{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }`,
    category: "action",
  }),

  /** Menu — expand-x */
  menuExpand: recipe({
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.1, 1] },
    transition: `{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }`,
    category: "navigation",
  }),

  /** Share — radiate outward */
  shareRadiate: recipe({
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "action",
  }),

  // ===== OBJECT-SPECIFIC =====

  /** Vehicle — drive/move */
  driveRight: recipe({
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 20 }`,
    category: "action",
  }),

  /** Float up — balloon, bird, light objects */
  floatUp: recipe({
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
    transition: `{ type: "spring", stiffness: 200, damping: 12 }`,
    category: "action",
  }),

  /** Warm wobble — coffee, cooking, cozy */
  warmWobble: recipe({
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 5, -5, 3, 0], scale: [1, 1.05, 1] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Coin bounce — money, currency */
  coinBounce: recipe({
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -3, 0], scale: [1, 1.05, 1] },
    transition: `{ type: "spring", stiffness: 300, damping: 10 }`,
    category: "action",
  }),

  /** Dice — roll */
  diceRoll: recipe({
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 90, 0], scale: [1, 1.05, 1] },
    transition: `{ type: "spring", stiffness: 300, damping: 15 }`,
    category: "action",
  }),

  /** Door — swing open */
  doorSwing: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 0] },
    transition: `{ type: "spring", stiffness: 200, damping: 20 }`,
    category: "action",
  }),

  /** DNA — helix twist */
  helixTwist: recipe({
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.7, 1] },
    transition: `{ duration: 0.5, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Precipitation — fall */
  precipitationFall: recipe({
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
    transition: `{ type: "spring", stiffness: 300, damping: 20 }`,
    category: "action",
  }),

  /** Bookmark — save dip */
  bookmarkSave: recipe({
    normal: { y: 0 },
    animate: { y: [0, -2, 0] },
    transition: `{ type: "spring", stiffness: 400, damping: 20 }`,
    category: "action",
  }),

  /** Lift — dumbbell, weight */
  lift: recipe({
    normal: { y: 0 },
    animate: { y: [0, -3, 2, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "action",
  }),

  /** Battery — charge pulse */
  chargePulse: recipe({
    normal: { scale: 1 },
    animate: { scale: [1, 1.05, 1], x: [0, 2, 0] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "feedback",
  }),

  // ===== DISABLED/OFF VARIANTS =====

  /** "-off" suffix icons — gentle fade pulse (NOT shake) */
  disabledPulse: recipe({
    normal: { opacity: 1 },
    animate: { opacity: [1, 0.5, 1] },
    transition: `{ duration: 0.4, ease: "easeInOut" }`,
    category: "feedback",
  }),

  // ===== CATEGORY DEFAULTS =====
  // These are used when no pattern matches but we know the Tabler category

  /** Default for UI/form icons — subtle scale */
  subtleScale: recipe({
    normal: { scale: 1 },
    animate: { scale: [1, 1.06, 1] },
    transition: `{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }`,
    category: "action",
  }),

  /** Default for misc/unknown icons — gentle wobble (better than scalePop) */
  gentleWobble: recipe({
    normal: { rotate: 0 },
    animate: { rotate: [0, -4, 4, 0] },
    transition: `{ duration: 0.35, ease: "easeInOut" }`,
    category: "action",
  }),
} as const;

// Helper to generate file content from recipe params
function recipe(opts: {
  normal: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: string;
  category: string;
}): string {
  const normalStr = JSON.stringify(opts.normal);
  const animateStr = JSON.stringify(opts.animate)
    .replace(/"([^"]+)":/g, "$1:");
  return `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: ${normalStr.replace(/"([^"]+)":/g, "$1:")},
    animate: ${animateStr},
  },
  transition: ${opts.transition},
  category: "${opts.category}",
};
`;
}

export type RecipeName = keyof typeof RECIPES;
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsx --eval "import('./scripts/rework-recipes.ts').then(() => console.log('OK'))"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add scripts/rework-recipes.ts
git commit -m "feat: add improved animation recipe templates for rework"
```

---

### Task 2: Define Pattern Matching Rules

**Files:**
- Create: `scripts/rework-rules.ts`

- [ ] **Step 1: Create the rules file**

This file exports a function `resolveRecipe(iconName: string): RecipeName` that maps icon names to recipes using ordered pattern rules.

```typescript
// scripts/rework-rules.ts

import type { RecipeName } from "./rework-recipes";

/**
 * Ordered list of pattern rules. First match wins.
 * Pattern can be:
 * - RegExp: tested against the full icon name
 * - string: exact match
 */
type Rule = { pattern: RegExp | string; recipe: RecipeName };

const RULES: Rule[] = [
  // ===== BIDIRECTIONAL (before directional, these should NOT nudge one way) =====
  { pattern: /arrow-(down-up|up-down|left-right|right-left)/, recipe: "subtleScale" },
  { pattern: /chevrons-(down-up|up-down|left-right|right-left)/, recipe: "subtleScale" },

  // ===== DIRECTIONAL (arrows, chevrons) =====
  { pattern: /arrow.*right|arrow-right|right-from|right-to/i, recipe: "nudgeRight" },
  { pattern: /arrow.*left|arrow-left|left-from|left-to/i, recipe: "nudgeLeft" },
  { pattern: /arrow.*up(?!load)|arrow-up/i, recipe: "nudgeUp" },
  { pattern: /arrow.*down(?!load)|arrow-down/i, recipe: "nudgeDown" },
  { pattern: /chevron.*right|caret.*right/i, recipe: "nudgeSmallRight" },
  { pattern: /chevron.*left|caret.*left/i, recipe: "nudgeSmallLeft" },
  { pattern: /chevron.*up/i, recipe: "nudgeSmallUp" },
  { pattern: /chevron.*down/i, recipe: "nudgeSmallDown" },
  { pattern: /diagonal.*up.*right|corner.*up.*right|external-link/i, recipe: "nudgeDiagUpRight" },
  { pattern: /diagonal.*down.*right|corner.*down.*right/i, recipe: "nudgeDiagDownRight" },
  { pattern: /diagonal.*up.*left|corner.*up.*left/i, recipe: "nudgeDiagUpLeft" },
  { pattern: /diagonal.*down.*left|corner.*down.*left/i, recipe: "nudgeDiagDownLeft" },

  // ===== ACTIONS =====
  { pattern: /^search|magnifying|zoom-in|zoom-out|scan/i, recipe: "searchTilt" },
  { pattern: /^settings$|^cog$|^gear|^wrench|^tool$|^nut$/i, recipe: "rotateCW" },
  { pattern: /^refresh|^sync|rotate-c|^reload|^repeat/i, recipe: "rotateFull" },
  { pattern: /compass|gauge|speedometer|needle/i, recipe: "rotateSwing" },
  { pattern: /aperture|iris|shutter/i, recipe: "rotatePartial" },
  { pattern: /^pencil|^pen$|^edit$|^signature|^writing|^highlighter/i, recipe: "scribble" },
  { pattern: /^plus$|^add$|^circle-plus|^square-plus/i, recipe: "addPop" },
  { pattern: /^x$|^close$|^circle-x|^square-x|^x-circle/i, recipe: "spinDismiss" },
  { pattern: /^send|^paper-airplane|^rocket/i, recipe: "launch" },
  { pattern: /^copy$|^clipboard|^duplicate/i, recipe: "stackNudge" },
  { pattern: /^camera|^photo|^image$|^picture/i, recipe: "shutterClick" },
  { pattern: /^lock|^shield-lock|^key-round/i, recipe: "lockClick" },
  { pattern: /^axe$|^hammer$|^pickaxe|^sword|^knife/i, recipe: "chop" },
  { pattern: /^archive$|^inbox$|^file-input|^folder-input/i, recipe: "settleDown" },
  { pattern: /^share|^external/i, recipe: "shareRadiate" },
  { pattern: /^eye|^view|^visibility/i, recipe: "blink" },
  { pattern: /^menu$|^hamburger|^sidebar|^panel-left|^panel-right/i, recipe: "menuExpand" },

  // ===== DOWNLOAD / UPLOAD =====
  { pattern: /download|import$|^cloud-download/i, recipe: "nudgeDown" },
  { pattern: /upload|export$|^cloud-upload/i, recipe: "nudgeUp" },

  // ===== FEEDBACK =====
  { pattern: /^bell|notification|^concierge/i, recipe: "bellRing" },
  { pattern: /^alert|^warning|^exclamation|^triangle-alert/i, recipe: "warningShake" },
  { pattern: /^trash|^delete|^bomb$|^skull|^biohazard/i, recipe: "dangerShake" },
  { pattern: /^heart$|^heart-crack|^heart-pulse/i, recipe: "heartbeat" },
  { pattern: /^star$|^award$|^trophy$|^medal|^crown|^gem$|^sparkle/i, recipe: "starPop" },
  { pattern: /^zap$|^lightning$|^bolt$|^flash/i, recipe: "flash" },
  { pattern: /^info$|^circle-help|^help-circle|^badge-info/i, recipe: "attentionPulse" },
  { pattern: /^check$|^check-circle|^circle-check|^badge-check/i, recipe: "successGrow" },

  // ===== MEDIA =====
  { pattern: /^loader|^spinner|^loading/i, recipe: "spinLoop" },
  { pattern: /^play$|^play-circle|^circle-play|^skip-forward/i, recipe: "playNudge" },
  { pattern: /^pause$|^pause-circle|^circle-pause/i, recipe: "pauseSqueeze" },
  { pattern: /^volume|^speaker/i, recipe: "volumeRipple" },
  { pattern: /^disc$|^disc-|^record|^vinyl/i, recipe: "discSpin" },

  // ===== STATE / TOGGLE =====
  { pattern: /^sun$|^sun-|^brightness/i, recipe: "sunRotate" },
  { pattern: /^moon$|^moon-/i, recipe: "moonSwing" },

  // ===== SUFFIX: "-off" variants =====
  // Placed AFTER specific matches so bell-off gets bellRing, not disabledPulse.
  // Only unmatched -off icons fall through to this.
  { pattern: /-off$/, recipe: "disabledPulse" },

  // ===== OBJECT-SPECIFIC =====
  { pattern: /^car$|^car-|^bus$|^bus-|^truck|^ambulance|^taxi|^bike|^bicycle|^vehicle/i, recipe: "driveRight" },
  { pattern: /^train|^tram|^subway/i, recipe: "driveRight" },
  { pattern: /^ship|^sailboat|^boat/i, recipe: "driveRight" },
  { pattern: /^plane$|^plane-|^drone/i, recipe: "floatUp" },
  { pattern: /^balloon$|^bird$|^feather|^kite|^cloud$|^cloud-sun/i, recipe: "floatUp" },
  { pattern: /^coffee$|^cup-|^cooking|^soup|^flame$|^fire$|^candle/i, recipe: "warmWobble" },
  { pattern: /^dollar|^coin|^banknote|^wallet|^piggy-bank|^currency|^cent/i, recipe: "coinBounce" },
  { pattern: /^dice|^casino|^slot/i, recipe: "diceRoll" },
  { pattern: /^door/i, recipe: "doorSwing" },
  { pattern: /^dna$|^dna-/i, recipe: "helixTwist" },
  { pattern: /^cloud-rain|^cloud-drizzle|^cloud-snow|^cloud-hail|^umbrella/i, recipe: "precipitationFall" },
  { pattern: /^cloud-lightning|^cloud-storm/i, recipe: "flash" },
  { pattern: /^bookmark/i, recipe: "bookmarkSave" },
  { pattern: /^dumbbell|^barbell|^weight/i, recipe: "lift" },
  { pattern: /^battery-charging/i, recipe: "chargePulse" },
  { pattern: /^bug$|^bug-/i, recipe: "warningShake" },
  { pattern: /^mail$|^mail-|^envelope/i, recipe: "warmWobble" }, // mail-specific wobble (envelope wiggle)
  { pattern: /^user$|^user-|^person|^people|^users$/i, recipe: "attentionPulse" },
  { pattern: /^home$|^house$|^home-|^house-/i, recipe: "nudgeSmallUp" },
  { pattern: /^phone$|^phone-/i, recipe: "warningShake" },
  { pattern: /^printer$|^print/i, recipe: "settleDown" },
  { pattern: /^book$|^book-|^library|^notebook/i, recipe: "nudgeSmallUp" },
  { pattern: /^calendar|^clock$|^clock-|^timer|^watch$|^alarm$|^alarm-/i, recipe: "attentionPulse" },
  { pattern: /^map$|^map-|^globe$|^globe-|^earth|^world/i, recipe: "rotateSwing" },
  { pattern: /^flag$|^flag-/i, recipe: "warmWobble" },
  { pattern: /^gift$|^gift-|^party|^cake|^balloon/i, recipe: "starPop" },
  { pattern: /^music$|^music-|^headphones|^microphone/i, recipe: "attentionPulse" },
  { pattern: /^wifi$|^wifi-|^signal$|^signal-|^antenna|^radio$|^broadcast/i, recipe: "attentionPulse" },
  { pattern: /^database$|^server$|^hard-drive|^cpu|^circuit/i, recipe: "subtleScale" },
  { pattern: /^terminal$|^code$|^code-|^brackets|^braces/i, recipe: "subtleScale" },
  { pattern: /^table$|^table-|^grid$|^layout|^columns|^rows/i, recipe: "subtleScale" },
  { pattern: /^filter$|^funnel|^sort/i, recipe: "subtleScale" },
  { pattern: /^minus$|^circle-minus|^square-minus/i, recipe: "subtleScale" },
];

/** Default for icons that match no rule */
const DEFAULT_RECIPE: RecipeName = "gentleWobble";

/**
 * Resolve an icon name to a recipe.
 * First exact match in RULES wins. Falls back to DEFAULT_RECIPE.
 */
export function resolveRecipe(iconName: string): RecipeName {
  for (const rule of RULES) {
    if (typeof rule.pattern === "string") {
      if (iconName === rule.pattern) return rule.recipe;
    } else {
      if (rule.pattern.test(iconName)) return rule.recipe;
    }
  }
  return DEFAULT_RECIPE;
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsx --eval "import('./scripts/rework-rules.ts').then(m => { console.log('bell →', m.resolveRecipe('bell')); console.log('trash →', m.resolveRecipe('trash')); console.log('arrow-right →', m.resolveRecipe('arrow-right')); console.log('abacus →', m.resolveRecipe('abacus')); console.log('wifi-off →', m.resolveRecipe('wifi-off')); })"`
Expected:
```
bell → bellRing
trash → dangerShake
arrow-right → nudgeRight
abacus → gentleWobble
wifi-off → disabledPulse
```

- [ ] **Step 3: Commit**

```bash
git add scripts/rework-rules.ts
git commit -m "feat: add pattern-based icon-to-recipe matching rules"
```

---

### Task 3: Create the Rework Script

**Files:**
- Create: `scripts/rework-animations.ts`

- [ ] **Step 1: Create the rework script**

This script:
1. Lists ALL animation files in `scripts/animations/`
2. Skips the 37 hand-crafted originals (PROTECTED set)
3. For each remaining file, resolves a recipe via `resolveRecipe(iconName)`
4. Overwrites the file with the recipe content
5. Reports stats: protected, rewritten, recipe distribution

```typescript
// scripts/rework-animations.ts
/**
 * Rewrites bulk-generated animation definitions with semantically
 * appropriate recipes based on pattern matching.
 *
 * Usage:
 *   npx tsx scripts/rework-animations.ts                    # dry run
 *   npx tsx scripts/rework-animations.ts --write            # overwrite files
 *   npx tsx scripts/rework-animations.ts --write --icon bell # single icon
 *   npx tsx scripts/rework-animations.ts --stats            # show recipe distribution
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { RECIPES } from "./rework-recipes";
import { resolveRecipe } from "./rework-rules";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ANIMS_DIR = path.join(__dirname, "animations");

// These icons have hand-crafted animations — NEVER overwrite
// Includes the original 37 + any others detected as non-bulk
const KNOWN_PROTECTED = new Set([
  "alert-circle", "arrow-down", "arrow-left", "arrow-right", "arrow-up",
  "bell", "check", "chevron-down", "chevron-right", "copy", "download",
  "eye", "heart", "home", "info", "loader", "lock", "mail", "menu",
  "moon", "pause", "pencil", "play", "plus", "refresh-cw", "search",
  "send", "settings", "share", "star", "sun", "trash", "upload",
  "user", "volume-2", "x", "zap",
]);

// Fingerprints of the 7 known bulk-generated patterns.
// If an animation file does NOT contain any of these, it's likely hand-crafted.
// All known bulk patterns — both generic defaults and recipe-assigned ones.
// Any file containing ONLY these patterns was bulk-generated.
const BULK_FINGERPRINTS = [
  // Generic defaults
  "scale: [1, 1.1, 1]",
  "scale: [1, 1.15, 1]",
  "normal: {}",
  // Directional nudges
  "y: [0, 4, 0]", "y: [0, -4, 0]", "y: [0, 3, 0]", "y: [0, -3, 0]",
  "x: [0, 4, 0]", "x: [0, -4, 0]", "x: [0, 3, 0]", "x: [0, -3, 0]",
  "y: [0, -5, 0]", "y: [0, 5, 0]", "y: [0, 6, 0]", "y: [0, -6, 0]",
  "x: [0, 6, 0]", "x: [0, -6, 0]",
  // Shakes
  "rotate: [0, -8, 8, -4, 0]",
  "rotate: [0, -10, 10, -6, 6, -3, 0]",
  // Recipe-assigned bulk patterns
  "rotate: [0, -8, 0]",
  "rotate: [0, 20, -10, 0]",
  "rotate: [0, 45, 0]",
  "rotate: [0, -20, 5, 0]",
  "rotate: [0, 5, -5, 3, 0]",
  "rotate: [0, 90, 0]",
  "scaleX: [1, 0.7, 1]",
  "scaleX: [1, 0.85, 1]",
  "y: [0, -3, 2, 0]",
  "y: [0, -2, 0]",
  "scale: [1, 0.9, 1.05, 1]",
  "scale: [1, 1.05, 1.1, 1]",
  "scale: [1, 1.05, 1]",
  "scale: [1, 0.95, 1.02, 1]",
  "scale: [1, 1.2, 1]",
];

function isProtected(iconName: string, filePath: string): boolean {
  if (KNOWN_PROTECTED.has(iconName)) return true;
  // Auto-detect: if file doesn't match any bulk fingerprint, it's hand-crafted
  const content = fs.readFileSync(filePath, "utf-8");
  return !BULK_FINGERPRINTS.some(fp => content.includes(fp));
}

const args = process.argv.slice(2);
const shouldWrite = args.includes("--write");
const showStats = args.includes("--stats");
const iconFilter = args.includes("--icon")
  ? args[args.indexOf("--icon") + 1]?.split(",")
  : null;

function main() {
  const files = fs.readdirSync(ANIMS_DIR)
    .filter(f => f.endsWith(".ts"))
    .filter(f => !iconFilter || iconFilter.includes(path.basename(f, ".ts")));

  let protectedCount = 0;
  let rewrittenCount = 0;
  let unchangedCount = 0;
  const recipeStats: Record<string, number> = {};

  for (const file of files) {
    const iconName = path.basename(file, ".ts");

    const filePath = path.join(ANIMS_DIR, file);
    if (isProtected(iconName, filePath)) {
      protectedCount++;
      if (iconFilter) console.log(`  🛡 ${iconName} — protected (hand-crafted), skipping`);
      continue;
    }

    const recipeName = resolveRecipe(iconName);
    recipeStats[recipeName] = (recipeStats[recipeName] ?? 0) + 1;

    const content = RECIPES[recipeName];

    if (shouldWrite) {
      fs.writeFileSync(filePath, content, "utf-8");
      rewrittenCount++;
    } else {
      rewrittenCount++;
    }
  }

  // Report
  console.log(`\n${shouldWrite ? "✅ WRITE MODE" : "🔍 DRY RUN (use --write to apply)"}`);
  console.log(`  Protected (hand-crafted): ${protectedCount}`);
  console.log(`  ${shouldWrite ? "Rewritten" : "Would rewrite"}: ${rewrittenCount}`);
  console.log(`  Total files scanned: ${files.length}`);

  if (showStats || !shouldWrite) {
    console.log("\n📊 Recipe distribution:");
    const sorted = Object.entries(recipeStats).sort((a, b) => b[1] - a[1]);
    for (const [recipe, count] of sorted) {
      const pct = ((count / rewrittenCount) * 100).toFixed(1);
      console.log(`  ${recipe.padEnd(20)} ${String(count).padStart(5)} (${pct}%)`);
    }
  }

  if (!shouldWrite) {
    console.log("\nRun with --write to apply changes.");
  } else {
    console.log("\nNext steps:");
    console.log("  pnpm generate --all    # regenerate all components");
    console.log("  pnpm validate          # check generated components");
    console.log("  pnpm build             # compile");
    console.log("  pnpm dev               # test in playground");
  }
}

main();
```

- [ ] **Step 2: Run dry run to verify distribution**

Run: `npx tsx scripts/rework-animations.ts --stats`
Expected: Shows recipe distribution. Verify:
- `gentleWobble` (default) should be < 40% of total (improvement from current 37% scalePop)
- `disabledPulse` should capture all `-off` icons
- No protected icons are listed for rewrite

- [ ] **Step 3: Commit**

```bash
git add scripts/rework-animations.ts
git commit -m "feat: add unified animation rework script with dry run mode"
```

---

### Task 4: Execute the Rework

- [ ] **Step 1: Run the rework in write mode**

Run: `npx tsx scripts/rework-animations.ts --write --stats`
Expected: ~5,684 files rewritten, 37 protected, recipe distribution printed

- [ ] **Step 2: Regenerate all components**

Run: `pnpm generate --all`
Expected: All icons regenerated successfully. Should see `✅ Generated: 8468` (or close)

- [ ] **Step 3: Validate generated components**

Run: `pnpm validate`
Expected: All validation rules pass (UPPER_SNAKE_CASE, "use client", both variant keys, no hex colors)

- [ ] **Step 4: Build**

Run: `pnpm build`
Expected: Clean build, no TypeScript errors

- [ ] **Step 5: Commit**

```bash
git add scripts/animations/
git commit -m "refactor: rewrite 5684 animation defs with semantic pattern matching

Replace 7 generic bulk templates (scalePop, shake, nudge) with 50+
semantically-appropriate recipes. Pattern matching assigns animations
based on icon name semantics (directional, toggle, destructive, etc.).

37 hand-crafted originals (bell, heart, check, etc.) preserved."
```

---

### Task 5: Test in Playground

- [ ] **Step 1: Start playground**

Run: `pnpm dev`
Expected: Playground starts at localhost:3001

- [ ] **Step 2: Manual testing checklist**

Test these icon categories in the playground with `on-hover` mode:
- [ ] Arrows (arrow-right, arrow-left, etc.) — should nudge in their direction
- [ ] Bell variants (bell-dot, bell-ring) — should ring/shake
- [ ] Trash — should danger-shake
- [ ] Settings/cog — should quarter-rotate
- [ ] "-off" icons (wifi-off, eye-off) — should fade-pulse, NOT shake
- [ ] Vehicles (car, bus) — should drive right
- [ ] Weather (cloud-rain) — should precipitation fall
- [ ] Star, award — should pop with tilt
- [ ] Heart — should heartbeat (this is protected, should be unchanged)
- [ ] Random/generic icons (abacus, alien) — should gentle-wobble, NOT scalePop

- [ ] **Step 3: Fix any issues found, re-run pipeline**

If any animations look wrong:
1. Check if the pattern rule is matching correctly
2. Adjust the rule in `scripts/rework-rules.ts`
3. Re-run: `npx tsx scripts/rework-animations.ts --write && pnpm generate --all && pnpm build`

---

### Task 6: Tune Rules (Iterative)

This task is iterative — browse icons in playground and refine.

- [ ] **Step 1: Identify mismatches**

Browse through playground pages looking for icons where the animation doesn't match the icon's meaning. Common issues:
- Directional icon going wrong direction
- Non-warning icon shaking (should be a pattern rule fix)
- Default `gentleWobble` on an icon that has a more appropriate recipe

- [ ] **Step 2: Add rules to rework-rules.ts for mismatches**

Add new pattern rules to `RULES` array, above the defaults.

- [ ] **Step 3: Re-run pipeline**

```bash
npx tsx scripts/rework-animations.ts --write
pnpm generate --all
pnpm build
```

- [ ] **Step 4: Commit when satisfied**

```bash
git add scripts/rework-rules.ts scripts/animations/
git commit -m "refine: tune animation pattern rules after visual testing"
```
