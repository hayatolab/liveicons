/**
 * create-im-animations.ts
 *
 * Generates animation definition files for all lucide icons starting with I–M
 * that don't already have a definition in scripts/animations/.
 *
 * Usage: npx tsx scripts/create-im-animations.ts
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ANIMS_DIR = path.join(__dirname, "animations");

// ---------------------------------------------------------------------------
// Animation recipe templates
// ---------------------------------------------------------------------------

const RECIPES = {
  nudgeDown: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeUp: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeSmallDown: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeSmallUp: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeSmallLeft: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeSmallRight: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeLeft: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeRight: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  // Shake/wiggle (warning, disabled)
  shake: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Horizontal shake (megaphone, announcement)
  horizontalShake: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 3, -2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Continuous spin (loaders, infinity)
  spinLoop: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 2, ease: "linear" },
  category: "media",
};`,

  // Quarter spin CW (key turning, iteration)
  rotateCW: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 90 },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
};`,

  // Quarter spin CCW (iteration-ccw, list-restart)
  rotateCCW: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: -90 },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
};`,

  // Gentle swing (leaf, nature items)
  rotateSwing: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 15, -8, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`,

  // Metronome tick (back and forth)
  metronomeTick: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 20, -10, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "media",
};`,

  // Italic tilt (text styling)
  italicTilt: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
};`,

  // Joystick tilt (gaming)
  joystickTilt: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -6, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`,

  // Scale expand (maximize, image-upscale)
  scaleExpand: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
};`,

  // Scale down (minimize)
  scaleDown: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.85, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
};`,

  // Scale X expand (minus, divider line)
  scaleXExpand: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.3, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
};`,

  // Mirror flip (scaleX)
  mirrorFlip: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`,

  // Heart/love scale pulse
  heartBeat: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.25, 1, 1.1, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`,

  // Laugh scale pop (bigger)
  laughPop: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
};`,

  // Lightbulb flash (idea!)
  lightbulbFlash: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "feedback",
};`,

  // Coin bounce (currency)
  coinBounce: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -3, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10 },
  category: "action",
};`,

  // Layers depth nudge
  layersNudge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`,

  // Drive right (vehicles)
  driveRight: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "navigation",
};`,

  // Float up (maps, ping)
  floatUp: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
};`,

  // Warm wobble (hot drinks, heating)
  warmWobble: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 5, -5, 3, 0], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`,

  // Celebration pop (medal, award)
  celebrationPop: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`,

  // Life-buoy spin (rescue)
  lifeBuoySpin: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
};`,

  // Ping pulse (locate, GPS)
  pingPulse: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 0.95, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
};`,

  // Default scale pop
  scalePop: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: {},
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 },
};`,
} as const;

// ---------------------------------------------------------------------------
// Icon → recipe mapping for I–M icons
// ---------------------------------------------------------------------------

const iconRecipes: Record<string, keyof typeof RECIPES> = {
  // ── I ──────────────────────────────────────────────────────────────────
  "ice-cream-bowl": "scalePop",
  "ice-cream-cone": "scalePop",
  "id-card": "scalePop",
  "id-card-lanyard": "scalePop",
  "image-down": "nudgeDown",
  "image-minus": "scalePop",
  "image-off": "shake",
  "image-play": "scalePop",
  "image-plus": "scalePop",
  "image-up": "nudgeUp",
  "image-upscale": "scaleExpand",
  image: "scalePop",
  images: "scalePop",
  import: "nudgeDown",
  inbox: "nudgeDown",
  "indian-rupee": "coinBounce",
  infinity: "spinLoop",
  "inspection-panel": "scalePop",
  instagram: "scalePop",
  italic: "italicTilt",
  "iteration-ccw": "rotateCCW",
  "iteration-cw": "rotateCW",

  // ── J ──────────────────────────────────────────────────────────────────
  "japanese-yen": "coinBounce",
  joystick: "joystickTilt",

  // ── K ──────────────────────────────────────────────────────────────────
  kanban: "nudgeSmallRight",
  kayak: "driveRight",
  key: "rotateCW",
  "key-round": "rotateCW",
  "key-square": "rotateCW",
  keyboard: "scalePop",
  "keyboard-music": "warmWobble",
  "keyboard-off": "shake",

  // ── L ──────────────────────────────────────────────────────────────────
  lamp: "lightbulbFlash",
  "lamp-ceiling": "lightbulbFlash",
  "lamp-desk": "lightbulbFlash",
  "lamp-floor": "lightbulbFlash",
  "lamp-wall-down": "lightbulbFlash",
  "lamp-wall-up": "lightbulbFlash",
  "land-plot": "scalePop",
  landmark: "scalePop",
  languages: "rotateSwing",
  laptop: "scalePop",
  "laptop-minimal": "scalePop",
  "laptop-minimal-check": "scalePop",
  lasso: "scalePop",
  "lasso-select": "scalePop",
  laugh: "laughPop",
  layers: "layersNudge",
  "layers-2": "layersNudge",
  "layers-plus": "layersNudge",
  "layout-dashboard": "scalePop",
  "layout-grid": "scalePop",
  "layout-list": "scalePop",
  "layout-panel-left": "scalePop",
  "layout-panel-top": "scalePop",
  "layout-template": "scalePop",
  leaf: "rotateSwing",
  "leafy-green": "rotateSwing",
  lectern: "scalePop",
  "lens-concave": "scalePop",
  "lens-convex": "scaleExpand",
  library: "scalePop",
  "library-big": "scalePop",
  "life-buoy": "lifeBuoySpin",
  ligature: "scalePop",
  lightbulb: "lightbulbFlash",
  "lightbulb-off": "shake",
  "line-dot-right-horizontal": "nudgeSmallRight",
  "line-squiggle": "scalePop",
  "link-2": "nudgeSmallRight",
  "link-2-off": "shake",
  link: "nudgeSmallRight",
  linkedin: "scalePop",
  "list-check": "scalePop",
  "list-checks": "scalePop",
  "list-chevrons-down-up": "scalePop",
  "list-chevrons-up-down": "scalePop",
  "list-collapse": "scaleDown",
  "list-end": "nudgeSmallDown",
  "list-filter": "scalePop",
  "list-filter-plus": "scalePop",
  "list-indent-decrease": "nudgeLeft",
  "list-indent-increase": "nudgeRight",
  "list-minus": "scalePop",
  "list-music": "scalePop",
  "list-ordered": "scalePop",
  "list-plus": "scalePop",
  "list-restart": "rotateCCW",
  "list-start": "nudgeSmallUp",
  "list-todo": "scalePop",
  "list-tree": "scalePop",
  "list-video": "scalePop",
  "list-x": "shake",
  list: "scalePop",
  "loader-circle": "spinLoop",
  "loader-pinwheel": "spinLoop",
  "locate-fixed": "pingPulse",
  "locate-off": "shake",
  locate: "pingPulse",
  "lock-keyhole": "nudgeSmallDown",
  "lock-keyhole-open": "rotateSwing",
  "lock-open": "nudgeSmallUp",
  lollipop: "rotateSwing",
  "log-in": "nudgeSmallRight",
  "log-out": "nudgeSmallRight",
  logs: "scalePop",
  luggage: "driveRight",

  // ── M ──────────────────────────────────────────────────────────────────
  magnet: "horizontalShake",
  "mail-check": "floatUp",
  "mail-minus": "scalePop",
  "mail-open": "nudgeSmallUp",
  "mail-plus": "scalePop",
  "mail-question-mark": "scalePop",
  "mail-search": "scalePop",
  "mail-warning": "shake",
  "mail-x": "shake",
  mailbox: "nudgeSmallDown",
  mails: "scalePop",
  "map-minus": "scalePop",
  "map-pin": "nudgeSmallDown",
  "map-pin-check": "nudgeSmallDown",
  "map-pin-check-inside": "nudgeSmallDown",
  "map-pin-house": "nudgeSmallDown",
  "map-pin-minus": "nudgeSmallDown",
  "map-pin-minus-inside": "nudgeSmallDown",
  "map-pin-off": "shake",
  "map-pin-pen": "nudgeSmallDown",
  "map-pin-plus": "nudgeSmallDown",
  "map-pin-plus-inside": "nudgeSmallDown",
  "map-pin-x": "shake",
  "map-pin-x-inside": "shake",
  "map-pinned": "nudgeSmallDown",
  "map-plus": "scalePop",
  map: "scaleExpand",
  "mars-stroke": "scalePop",
  mars: "scalePop",
  martini: "warmWobble",
  maximize: "scaleExpand",
  "maximize-2": "scaleExpand",
  medal: "celebrationPop",
  megaphone: "horizontalShake",
  "megaphone-off": "shake",
  meh: "scalePop",
  "memory-stick": "nudgeSmallRight",
  merge: "nudgeSmallDown",
  "message-circle": "scalePop",
  "message-circle-check": "scalePop",
  "message-circle-code": "scalePop",
  "message-circle-dashed": "scalePop",
  "message-circle-heart": "heartBeat",
  "message-circle-more": "scalePop",
  "message-circle-off": "shake",
  "message-circle-plus": "scalePop",
  "message-circle-question-mark": "scalePop",
  "message-circle-reply": "nudgeSmallLeft",
  "message-circle-warning": "shake",
  "message-circle-x": "shake",
  "message-square": "scalePop",
  "message-square-check": "scalePop",
  "message-square-code": "scalePop",
  "message-square-dashed": "scalePop",
  "message-square-diff": "scalePop",
  "message-square-dot": "scalePop",
  "message-square-heart": "heartBeat",
  "message-square-lock": "scalePop",
  "message-square-more": "scalePop",
  "message-square-off": "shake",
  "message-square-plus": "scalePop",
  "message-square-quote": "scalePop",
  "message-square-reply": "nudgeSmallLeft",
  "message-square-share": "nudgeSmallRight",
  "message-square-text": "scalePop",
  "message-square-warning": "shake",
  "message-square-x": "shake",
  "messages-square": "scalePop",
  metronome: "metronomeTick",
  mic: "nudgeSmallUp",
  "mic-off": "shake",
  "mic-vocal": "nudgeSmallUp",
  microchip: "scalePop",
  microscope: "scalePop",
  microwave: "warmWobble",
  milestone: "nudgeSmallRight",
  milk: "scalePop",
  "milk-off": "shake",
  minimize: "scaleDown",
  "minimize-2": "scaleDown",
  minus: "scaleXExpand",
  "mirror-rectangular": "mirrorFlip",
  "mirror-round": "mirrorFlip",
  monitor: "scalePop",
  "monitor-check": "scalePop",
  "monitor-cloud": "scalePop",
  "monitor-cog": "rotateCW",
  "monitor-dot": "scalePop",
  "monitor-down": "nudgeSmallDown",
  "monitor-off": "shake",
  "monitor-pause": "scalePop",
  "monitor-play": "scalePop",
  "monitor-smartphone": "scalePop",
  "monitor-speaker": "scalePop",
  "monitor-stop": "scalePop",
  "monitor-up": "nudgeSmallUp",
  "monitor-x": "shake",
  "moon-star": "scalePop",
};

// ---------------------------------------------------------------------------
// Already existing defs (skip)
// ---------------------------------------------------------------------------
const ALREADY_DONE = new Set([
  // US-001 icons
  "alert-circle",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "bell",
  "check",
  "chevron-down",
  "chevron-right",
  "copy",
  "download",
  "eye",
  "heart",
  "home",
  "info",
  "loader",
  "lock",
  "mail",
  "menu",
  "moon",
  "pause",
  "pencil",
  "play",
  "plus",
  "refresh-cw",
  "search",
  "send",
  "settings",
  "share",
  "star",
  "sun",
  "trash",
  "upload",
  "user",
  "volume-2",
  "x",
  "zap",
]);

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  let created = 0;
  let skipped = 0;

  for (const [iconName, recipeName] of Object.entries(iconRecipes)) {
    if (ALREADY_DONE.has(iconName)) {
      skipped++;
      continue;
    }

    const outPath = path.join(ANIMS_DIR, `${iconName}.ts`);
    if (fs.existsSync(outPath)) {
      console.log(`  ⏭ ${iconName} — already exists, skipping`);
      skipped++;
      continue;
    }

    const content = RECIPES[recipeName];
    fs.writeFileSync(outPath, content, "utf-8");
    console.log(`  ✓ ${iconName} → ${recipeName}`);
    created++;
  }

  console.log(`\n✅ Created: ${created} | Skipped: ${skipped}`);
  console.log(`\nNext step: pnpm generate --source lucide --all`);
}

main();
