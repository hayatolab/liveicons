/**
 * Second pass: Creates animation defs for remaining tabler A–D icons
 * Usage: pnpm tsx scripts/create-tabler-ad-animations-2.ts
 */

import * as fs from "fs";
import * as path from "path";

const ANIMATIONS_DIR = path.join(__dirname, "animations");

function write(name: string, content: string) {
  const file = path.join(ANIMATIONS_DIR, `${name}.ts`);
  if (fs.existsSync(file)) return;
  fs.writeFileSync(file, content, "utf-8");
  console.log(`  ✓ ${name}`);
}

// ─── Templates ───────────────────────────────────────────────────────────────

const SHAKE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`;

const NUDGE_DOWN = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_UP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_LEFT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_RIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const SCALE_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 },
  category: "action",
};`;

const SCALE_POP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: {},
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 },
};`;

const ROTATE_CW = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
  },
  transition: { type: "spring", stiffness: 260, damping: 20 },
  category: "action",
};`;

const ROTATE_SWING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`;

const SPIN_360 = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 360] },
  },
  transition: { duration: 0.6, ease: "linear" },
  category: "action",
};`;

const FLOAT_UP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12, mass: 0.8 },
  category: "action",
};`;

const PULSE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 0.95, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`;

const HEARTBEAT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 1, 1.1, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`;

const DRIVE_RIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
};`;

// ─── Remaining A ──────────────────────────────────────────────────────────

write("arrow-narrow-down-dashed", NUDGE_DOWN);
write("arrow-narrow-left-dashed", NUDGE_LEFT);
write("arrow-narrow-right-dashed", NUDGE_RIGHT);
write("arrow-narrow-up-dashed", NUDGE_UP);

write("artboard", SCALE_POP);
write("artboard-off", SHAKE);

write("article", NUDGE_UP); // open/read
write("article-off", SHAKE);

write("aspect-ratio", SCALE_EXPAND);
write("aspect-ratio-off", SHAKE);

write("assembly", SCALE_POP);
write("assembly-off", SHAKE);

write("asset", SCALE_POP);

write("asterisk", ROTATE_SWING);
write("asterisk-simple", ROTATE_SWING);

write("at", SCALE_POP);
write("at-off", SHAKE);

write("atom", SPIN_360);
write("atom-2", SPIN_360);
write("atom-off", SHAKE);

write("augmented-reality", SCALE_EXPAND);
write("augmented-reality-2", SCALE_EXPAND);
write("augmented-reality-off", SHAKE);

write("auth-2fa", PULSE);

write("automatic-gearbox", ROTATE_CW);
write("automation", SPIN_360);

write("avocado", SCALE_POP);

write("award-off", SHAKE);

write("axis-x", NUDGE_RIGHT);
write("axis-y", NUDGE_UP);

// ─── Remaining B ──────────────────────────────────────────────────────────

write("baby-bottle", ROTATE_SWING);
write("baby-carriage", DRIVE_RIGHT);

write("background", SCALE_POP);

write("backhoe", ROTATE_CW); // arm swings

write("backpack", NUDGE_UP);
write("backpack-off", SHAKE);

write("backslash", ROTATE_SWING);
write("backspace", NUDGE_LEFT);

write("badge", SCALE_POP);
write("badge-2k", SCALE_POP);
write("badge-3k", SCALE_POP);
write("badge-5k", SCALE_POP);
write("badge-ad-off", SHAKE);
write("badges", SCALE_POP);
write("badges-off", SHAKE);

write("baguette", ROTATE_SWING); // wave like a baguette

write("ball-american-football", ROTATE_SWING);
write("ball-american-football-off", SHAKE);
write("ball-baseball", ROTATE_SWING);
write("ball-basketball", FLOAT_UP);
write("ball-bowling", NUDGE_DOWN);
write("ball-football", ROTATE_SWING);
write("ball-football-off", SHAKE);
write("ball-tennis", ROTATE_SWING);
write("ball-volleyball", FLOAT_UP);

write("balloon-off", SHAKE);

write("ballpen", NUDGE_RIGHT); // writing stroke
write("ballpen-off", SHAKE);

write("bandage", SCALE_POP);
write("bandage-off", SHAKE);

write("barbell", NUDGE_UP); // lift
write("barbell-off", SHAKE);

write("barcode", SCALE_POP);
write("barcode-off", SHAKE);

write("barrel", ROTATE_CW);
write("barrel-off", SHAKE);

write("barrier-block", NUDGE_RIGHT);
write("barrier-block-off", SHAKE);

write("baseline", NUDGE_DOWN);
write("baseline-density-large", NUDGE_DOWN);
write("baseline-density-medium", NUDGE_DOWN);
write("baseline-density-small", NUDGE_DOWN);

write("bat", ROTATE_SWING);

write("bath", SCALE_POP);
write("bath-off", SHAKE);

write("battery", SCALE_POP);
write("battery-spark", PULSE);
write("battery-vertical", SCALE_POP);
write("battery-vertical-1", SCALE_POP);
write("battery-vertical-2", SCALE_POP);
write("battery-vertical-3", SCALE_POP);
write("battery-vertical-4", SCALE_POP);
write("battery-vertical-charging", PULSE);
write("battery-vertical-charging-2", PULSE);
write("battery-vertical-eco", SCALE_POP);
write("battery-vertical-exclamation", SHAKE);
write("battery-vertical-off", SHAKE);

write("beach", FLOAT_UP);
write("beach-off", SHAKE);

write("bed", SCALE_POP);
write("bed-flat", SCALE_POP);
write("bed-off", SHAKE);

write("beer", FLOAT_UP); // bubbles
write("beer-off", SHAKE);

write("beta", ROTATE_SWING);

write("bible", NUDGE_UP);

write("bike-off", SHAKE);

write("binary", SCALE_POP);
write("binary-off", SHAKE);
write("binary-tree", SCALE_POP);

// ─── Remaining C ──────────────────────────────────────────────────────────

write("chisel", ROTATE_SWING);

write("christmas-ball", ROTATE_SWING);
write("christmas-tree", SCALE_POP);
write("christmas-tree-off", SHAKE);

// circle family - tabler specific
write("circle", SCALE_POP);
write("circle-arrow-down-left", NUDGE_DOWN);
write("circle-arrow-down-right", NUDGE_DOWN);
write("circle-arrow-up-left", NUDGE_UP);
write("circle-arrow-up-right", NUDGE_UP);
write("circle-asterisk", ROTATE_SWING);
write("circle-caret-down", NUDGE_DOWN);
write("circle-caret-left", NUDGE_LEFT);
write("circle-caret-right", NUDGE_RIGHT);
write("circle-caret-up", NUDGE_UP);
write("circle-check", SCALE_POP);
write("circle-chevron-down", NUDGE_DOWN);
write("circle-chevron-left", NUDGE_LEFT);
write("circle-chevron-right", NUDGE_RIGHT);
write("circle-chevron-up", NUDGE_UP);
write("circle-chevrons-down", NUDGE_DOWN);
write("circle-chevrons-left", NUDGE_LEFT);
write("circle-chevrons-right", NUDGE_RIGHT);
write("circle-chevrons-up", NUDGE_UP);
write("circle-dashed-check", SCALE_POP);
write("circle-dashed-minus", SHAKE);
write("circle-dashed-percentage", ROTATE_CW);
write("circle-dashed-plus", SCALE_POP);
write("circle-dashed-x", SHAKE);
write("circle-dot", PULSE);
write("circle-dotted", PULSE);
write("circle-minus", SHAKE);
write("circle-minus-2", SHAKE);
write("circle-off", SHAKE);
write("circle-open-arrow-down", NUDGE_DOWN);
write("circle-open-arrow-left", NUDGE_LEFT);
write("circle-open-arrow-right", NUDGE_RIGHT);
write("circle-open-arrow-up", NUDGE_UP);
write("circle-percentage", ROTATE_CW);
write("circle-plus", SCALE_POP);
write("circle-plus-2", SCALE_POP);
write("circle-plus-minus", ROTATE_SWING);
write("circle-x", SHAKE);
write("circles", SCALE_POP);
write("circles-relation", PULSE);

write("clear-all", SHAKE);
write("clear-formatting", SHAKE);

write("click", SCALE_POP);

write("cliff-jumping", FLOAT_UP);

write("clipboard", NUDGE_UP);
write("clipboard-check", NUDGE_UP);
write("clipboard-copy", NUDGE_UP);
write("clipboard-list", NUDGE_UP);
write("clipboard-plus", NUDGE_UP);
write("clipboard-search", NUDGE_UP);
write("clipboard-typography", NUDGE_UP);

write("clock", ROTATE_CW);
write("clock-12", ROTATE_CW);
write("clock-24", ROTATE_CW);
write("clock-bitcoin", COIN_BOUNCE_INLINE());
write("clock-check", ROTATE_CW);

write("clothes-rack", ROTATE_SWING);
write("clothes-rack-off", SHAKE);

write("cloud", FLOAT_UP);
write("cloud-check", FLOAT_UP);
write("cloud-computing", PULSE);
write("cloud-down", NUDGE_DOWN);
write("cloud-fog", FLOAT_UP);
write("cloud-off", SHAKE);

write("clover", ROTATE_SWING);
write("clover-2", ROTATE_SWING);

write("clubs", SCALE_POP);

write("code", SCALE_POP);
write("code-asterisk", ROTATE_SWING);
write("code-circle", SCALE_POP);
write("code-circle-2", SCALE_POP);
write("code-dots", SCALE_POP);
write("code-minus", SHAKE);
write("code-off", SHAKE);
write("code-plus", SCALE_POP);
write("code-variable", SCALE_POP);
write("code-variable-minus", SHAKE);
write("code-variable-plus", SCALE_POP);
write("codeblock", SCALE_POP);

write("coffee-off", SHAKE);
write("coffin", NUDGE_DOWN);

write("color-picker", ROTATE_CW);
write("color-swatch", ROTATE_SWING);

write("column-insert-left", NUDGE_LEFT);
write("column-insert-right", NUDGE_RIGHT);
write("column-remove", SHAKE);
write("columns", SCALE_POP);
write("columns-1", SCALE_POP);
write("columns-2", SCALE_POP);
write("columns-3", SCALE_POP);

write("comet", NUDGE_DOWN); // falling comet

write("command", SCALE_POP);
write("command-off", SHAKE);

write("components", SCALE_POP);
write("components-off", SHAKE);

write("cone", ROTATE_CW);
write("cone-2", ROTATE_CW);
write("cone-off", SHAKE);
write("cone-plus", SCALE_POP);

write("confucius", SCALE_POP);
write("congruent-to", SCALE_POP);

write("connection", PULSE);

write("container", NUDGE_DOWN);

write("contract", SCALE_SHRINK_INLINE());

write("contrast", ROTATE_CW);
write("contrast-2-off", SHAKE);

write("cooker", ROTATE_SWING); // warm

write("cookie", SCALE_POP);
write("cookie-man", SCALE_POP);
write("cookie-off", SHAKE);

write("copy-check", SCALE_POP);
write("copy-minus", SHAKE);
write("copy-plus", SCALE_POP);
write("copy-x", SHAKE);

write("copyleft", ROTATE_SWING);
write("copyleft-off", SHAKE);
write("copyright", ROTATE_SWING);
write("copyright-off", SHAKE);

write("corner-down-left", NUDGE_DOWN);
write("corner-down-right", NUDGE_DOWN);
write("corner-left-down", NUDGE_LEFT);
write("corner-left-up", NUDGE_LEFT);
write("corner-right-down", NUDGE_RIGHT);
write("corner-right-up", NUDGE_RIGHT);
write("corner-up-left", NUDGE_UP);
write("corner-up-right", NUDGE_UP);

write("cpu", PULSE);
write("cpu-2", PULSE);
write("cpu-off", SHAKE);

write("crane", ROTATE_CW); // arm rotates
write("crane-off", SHAKE);

write("creative-commons", SCALE_POP);
write("creative-commons-by", SCALE_POP);
write("creative-commons-nc", SCALE_POP);
write("creative-commons-nd", SCALE_POP);
write("creative-commons-off", SHAKE);
write("creative-commons-sa", ROTATE_CW);
write("creative-commons-zero", SCALE_POP);

write("credit-card", NUDGE_RIGHT); // swipe
write("credits", SCALE_POP);

write("cricket", ROTATE_SWING);

write("crop", SCALE_EXPAND);
write("cross", SCALE_POP);
write("crosshair", PULSE);

// ─── Remaining D ──────────────────────────────────────────────────────────

write("dashboard", PULSE);
write("dashboard-off", SHAKE);

write("database", SCALE_POP);
write("database-search", PULSE);
write("database-smile", SCALE_POP);

write("deaf", SHAKE);

write("decimal", SCALE_POP);

write("deer", FLOAT_UP);

write("delta", ROTATE_SWING);

write("dental", SCALE_POP);
write("dental-broken", SHAKE);
write("dental-off", SHAKE);

write("deselect", SHAKE);

write("desk", SCALE_POP);

write("details", NUDGE_DOWN);
write("details-off", SHAKE);

write("device-airpods", SCALE_POP);
write("device-airpods-case", SCALE_POP);
write("device-airtag", PULSE);
write("device-analytics", SCALE_POP);
write("device-audio-tape", SPIN_360);
write("device-camera-phone", SCALE_POP);
write("device-cctv", ROTATE_CW);
write("device-cctv-off", SHAKE);
write("device-computer-camera", SCALE_POP);
write("device-computer-camera-off", SHAKE);
write("device-gamepad-3", SCALE_POP);

write("diabolo", ROTATE_SWING);
write("diabolo-off", SHAKE);
write("diabolo-plus", ROTATE_SWING);

write("dialpad", SCALE_POP);
write("dialpad-off", SHAKE);

write("diamond", ROTATE_SWING);
write("diamond-off", SHAKE);
write("diamonds", ROTATE_SWING);

write("diaper", SCALE_POP);

write("dice", ROTATE_CW); // roll

write("dimensions", SCALE_EXPAND);

write("direction", NUDGE_RIGHT);
write("directions", NUDGE_RIGHT);
write("directions-off", SHAKE);

write("dog", FLOAT_UP);

write("door", SCALE_POP);

write("droplet", NUDGE_DOWN);

// chevron variants (remaining)
write("chevron-left-pipe", NUDGE_LEFT);
write("chevron-right-pipe", NUDGE_RIGHT);
write("chevron-up-left", NUDGE_UP);
write("chevron-up-right", NUDGE_UP);
write("chevrons-down-left", NUDGE_DOWN);
write("chevrons-down-right", NUDGE_DOWN);
write("chevrons-up-left", NUDGE_UP);
write("chevrons-up-right", NUDGE_UP);

console.log("\nDone! Second pass complete.");

// ─── Helpers ─────────────────────────────────────────────────────────────────
function COIN_BOUNCE_INLINE() {
  return `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10, mass: 0.5 },
  category: "action",
};`;
}

function SCALE_SHRINK_INLINE() {
  return `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.85, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 },
  category: "action",
};`;
}
