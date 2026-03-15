/**
 * Third pass: Creates animation defs for remaining tabler A–D non-brand icons
 * Usage: pnpm tsx scripts/create-tabler-ad-animations-3.ts
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

const SCALE_BRIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`;

// ─── B (remaining) ──────────────────────────────────────────────────────────

write("binary-tree-2", SCALE_POP);

write("binoculars", SCALE_EXPAND); // zoom in

write("biohazard-off", SHAKE);

write("blade", ROTATE_CW); // slice

write("bleach", SCALE_POP);
write("bleach-chlorine", SCALE_POP);
write("bleach-no-chlorine", SHAKE);
write("bleach-off", SHAKE);

write("blend-mode", ROTATE_SWING);
write("blender", SPIN_360); // blend

write("blind", SCALE_POP);

write("blob", SCALE_POP);

write("blockquote", SCALE_POP);
write("blocks", SCALE_POP);

write("bluetooth", PULSE);
write("bluetooth-connected", PULSE);
write("bluetooth-off", SHAKE);
write("bluetooth-x", SHAKE);

write("blur", SCALE_POP);
write("blur-off", SHAKE);

write("bmp", NUDGE_DOWN);

write("body-scan", PULSE);

write("bold", SCALE_POP);
write("bold-off", SHAKE);

write("bolt", PULSE); // flash
write("bolt-off", SHAKE);

write("bone", ROTATE_SWING);
write("bone-off", SHAKE);

write("bong", ROTATE_SWING);
write("bong-off", SHAKE);

write("book", NUDGE_UP);
write("book-2", NUDGE_UP);
write("book-download", NUDGE_DOWN);
write("book-off", SHAKE);
write("book-upload", NUDGE_UP);

write("bookmark-ai", PULSE);
write("bookmark-edit", SCALE_POP);
write("bookmark-off", SHAKE);
write("bookmark-question", SCALE_POP);
write("bookmarks", NUDGE_UP);
write("bookmarks-off", SHAKE);

write("books", NUDGE_UP);
write("books-off", SHAKE);

write("boom", SCALE_EXPAND); // burst

write("border-bottom-plus", NUDGE_DOWN);
write("border-corners", SCALE_POP);
write("border-left-plus", NUDGE_LEFT);
write("border-radius", ROTATE_CW);
write("border-right-plus", NUDGE_RIGHT);
write("border-style-2", SCALE_POP);
write("border-top-plus", NUDGE_UP);

write("bot-id", PULSE);

write("bottle", ROTATE_SWING);
write("bottle-off", SHAKE);

write("bounce-left", NUDGE_LEFT);
write("bounce-right", NUDGE_RIGHT);

write("bow", ROTATE_SWING);

write("bowl", NUDGE_DOWN);
write("bowl-chopsticks", NUDGE_DOWN);
write("bowl-spoon", NUDGE_DOWN);

write("bowling", NUDGE_RIGHT); // roll

write("box", SCALE_POP);
write("box-align-bottom", NUDGE_DOWN);
write("box-align-bottom-left", NUDGE_DOWN);
write("box-align-bottom-right", NUDGE_DOWN);
write("box-align-left", NUDGE_LEFT);
write("box-align-right", NUDGE_RIGHT);
write("box-align-top", NUDGE_UP);
write("box-align-top-left", NUDGE_UP);
write("box-align-top-right", NUDGE_UP);
write("box-margin", SCALE_EXPAND);
write("box-model", SCALE_POP);
write("box-model-2", SCALE_POP);
write("box-model-2-off", SHAKE);
write("box-model-off", SHAKE);
write("box-multiple", SCALE_POP);
write("box-off", SHAKE);
write("box-padding", SCALE_EXPAND);

write("braces", SCALE_POP);
write("braces-off", SHAKE);
write("brackets", SCALE_POP);
write("brackets-angle", SCALE_POP);
write("brackets-angle-off", SHAKE);
write("brackets-contain", SCALE_POP);
write("brackets-contain-end", SCALE_POP);
write("brackets-contain-start", SCALE_POP);
write("brackets-off", SHAKE);

write("braille", SCALE_POP);

write("brain", PULSE);

write("bread", SCALE_POP);
write("bread-off", SHAKE);

write("briefcase", NUDGE_RIGHT);
write("briefcase-2", NUDGE_RIGHT);

write("brightness", SCALE_BRIGHT);
write("brightness-2", SCALE_BRIGHT);
write("brightness-auto", SCALE_BRIGHT);
write("brightness-down", NUDGE_DOWN);
write("brightness-half", SCALE_BRIGHT);
write("brightness-off", SHAKE);
write("brightness-up", NUDGE_UP);

write("broadcast", PULSE);
write("broadcast-off", SHAKE);

write("browser", SCALE_POP);
write("browser-check", SCALE_POP);
write("browser-maximize", SCALE_EXPAND);
write("browser-minus", SHAKE);
write("browser-off", SHAKE);
write("browser-plus", SCALE_POP);
write("browser-share", NUDGE_RIGHT);
write("browser-x", SHAKE);

write("brush", ROTATE_SWING);
write("brush-off", SHAKE);

write("bubble", FLOAT_UP); // speech bubble floats
write("bubble-minus", SHAKE);
write("bubble-plus", FLOAT_UP);
write("bubble-tea", FLOAT_UP);
write("bubble-tea-2", FLOAT_UP);
write("bubble-text", FLOAT_UP);
write("bubble-x", SHAKE);

write("bucket", NUDGE_DOWN);
write("bucket-droplet", NUDGE_DOWN);
write("bucket-off", SHAKE);

write("building", SCALE_POP);
write("building-airport", FLOAT_UP);
write("building-burj-al-arab", SCALE_POP);
write("building-cog", ROTATE_CW);
write("buildings", SCALE_POP);

write("bulb", PULSE); // light pulse
write("bulb-off", SHAKE);

write("bulldozer", NUDGE_RIGHT);
write("burger", SCALE_POP);
write("businessplan", SCALE_POP);
write("butterfly", FLOAT_UP);

// ─── C (remaining) ──────────────────────────────────────────────────────────

write("cactus", SCALE_POP);
write("cactus-off", SHAKE);

write("cake", SCALE_POP);
write("cake-off", SHAKE);
write("cake-roll", ROTATE_CW);

write("calculator", SCALE_POP);
write("calculator-off", SHAKE);

write("calendar-check", SCALE_POP);
write("calendar-clock", ROTATE_CW);
write("calendar-dot", PULSE);
write("calendar-event", SCALE_POP);
write("calendar-month", SCALE_POP);
write("calendar-search", SCALE_POP);

write("camera-ai", PULSE);
write("camera-bitcoin", SCALE_POP);
write("camera-moon", SCALE_POP);

write("camper", NUDGE_RIGHT);
write("campfire", ROTATE_SWING); // flame flicker

write("canary", FLOAT_UP); // bird

write("cancel", SHAKE);

write("candle", ROTATE_SWING); // flame

write("candy", SCALE_POP);
write("candy-off", SHAKE);

write("cane", ROTATE_SWING);

write("cannabis", ROTATE_SWING);

write("cap-projecting", SCALE_POP);
write("cap-rounded", SCALE_POP);
write("cap-straight", SCALE_POP);

write("capsule", SCALE_POP);
write("capsule-horizontal", SCALE_POP);

write("capture", PULSE);
write("capture-off", SHAKE);

write("car-4wd", NUDGE_RIGHT);
write("car-crane", ROTATE_CW);
write("car-crash", SHAKE);
write("car-fan", SPIN_360);
write("car-fan-1", SPIN_360);
write("car-fan-2", SPIN_360);
write("car-fan-3", SPIN_360);
write("car-fan-auto", SPIN_360);
write("car-garage", NUDGE_RIGHT);
write("car-off", SHAKE);
write("car-suv", NUDGE_RIGHT);
write("car-turbine", SPIN_360);

write("carambola", ROTATE_SWING);
write("caravan", NUDGE_RIGHT);
write("cardboards", SCALE_POP);
write("cardboards-off", SHAKE);

write("cards", ROTATE_SWING);

write("caret-down", NUDGE_DOWN);
write("caret-left", NUDGE_LEFT);
write("caret-left-right", SCALE_EXPAND);
write("caret-right", NUDGE_RIGHT);
write("caret-up", NUDGE_UP);
write("caret-up-down", SCALE_POP);

write("carousel-horizontal", NUDGE_RIGHT);
write("carousel-vertical", NUDGE_DOWN);

write("carrot", NUDGE_DOWN);
write("carrot-off", SHAKE);

write("cash-banknote-edit", SCALE_POP);
write("cash-banknote-heart", HEARTBEAT);
write("cash-banknote-minus", SHAKE);
write("cash-banknote-move", NUDGE_RIGHT);
write("cash-banknote-move-back", NUDGE_LEFT);
write("cash-banknote-off", SHAKE);
write("cash-banknote-plus", SCALE_POP);
write("cash-edit", SCALE_POP);
write("cash-heart", HEARTBEAT);
write("cash-minus", SHAKE);
write("cash-move", NUDGE_RIGHT);
write("cash-move-back", NUDGE_LEFT);
write("cash-plus", SCALE_POP);

write("cast", PULSE);
write("cast-off", SHAKE);

write("cat", FLOAT_UP);

write("category", SCALE_POP);
write("category-2", SCALE_POP);
write("category-minus", SHAKE);
write("category-plus", SCALE_POP);

write("ce", SCALE_POP);
write("ce-off", SHAKE);

write("cell", PULSE);
write("cell-signal-1", PULSE);
write("cell-signal-2", PULSE);
write("cell-signal-3", PULSE);
write("cell-signal-4", PULSE);
write("cell-signal-5", PULSE);
write("cell-signal-off", SHAKE);

write("certificate", NUDGE_UP);
write("certificate-2", NUDGE_UP);
write("certificate-2-off", SHAKE);
write("certificate-off", SHAKE);

write("chair-director", ROTATE_SWING);

write("chalkboard", SCALE_POP);
write("chalkboard-off", SHAKE);
write("chalkboard-teacher", SCALE_POP);

write("charging-pile", PULSE);

write("chart-area", SCALE_POP);
write("chart-arrows-vertical", NUDGE_UP);
write("chart-covariate", SCALE_POP);
write("chart-funnel", NUDGE_DOWN);
write("chart-pie", ROTATE_CW);
write("chart-pie-off", SHAKE);
write("chart-scatter", SCALE_POP);
write("chart-scatter-3d", SCALE_POP);

write("checkbox", SCALE_POP);
write("checklist", NUDGE_DOWN);
write("checks", SCALE_POP);
write("checkup-list", NUDGE_DOWN);

write("cheese", SCALE_POP);
write("chef-hat", FLOAT_UP);
write("chef-hat-off", SHAKE);

write("cherry", FLOAT_UP);

write("chess", SCALE_POP);
write("chess-bishop", SCALE_POP);
write("chess-king", FLOAT_UP);
write("chess-knight", SCALE_POP);
write("chess-queen", FLOAT_UP);
write("chess-rook", SCALE_POP);

write("chevron-compact-down", NUDGE_DOWN);
write("chevron-compact-left", NUDGE_LEFT);
write("chevron-compact-right", NUDGE_RIGHT);
write("chevron-compact-up", NUDGE_UP);
write("chevron-down-left", NUDGE_DOWN);
write("chevron-down-right", NUDGE_DOWN);

console.log("\nDone! Third pass complete.");
