/**
 * Creates animation defs for tabler stroke icons S–Z
 * Usage: pnpm tsx scripts/create-tabler-sz-animations.ts
 */

import * as fs from "fs";
import * as path from "path";

const ANIMATIONS_DIR = path.join(__dirname, "animations");

function write(name: string, content: string) {
  const file = path.join(ANIMATIONS_DIR, `${name}.ts`);
  if (fs.existsSync(file)) return; // don't overwrite existing
  fs.writeFileSync(file, content, "utf-8");
  console.log(`  ✓ ${name}`);
}

// ─── Reusable animation templates ───────────────────────────────────────────

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

const SCALE_POP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: {},
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
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

const ROTATE_CW = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 90 },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
};`;

const SPIN_LOOP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 1.2, ease: "linear", repeat: Infinity },
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
    animate: { scale: [1, 1.3, 1, 1.15, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`;

const COIN_BOUNCE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -5, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10 },
  category: "action",
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

const FLOAT_UP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 10 },
  category: "action",
};`;

const SCALE_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
};`;

const WARM_WOBBLE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -3, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`;

const SCALE_X_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.3, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`;

const SCALE_Y_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 1.3, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`;

const SPARKLE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 0.9, 1.1, 1], rotate: [0, 15, -10, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`;

// ─── S icons ─────────────────────────────────────────────────────────────────

// S-turn family (road turns)
write("s-turn-down", NUDGE_DOWN);
write("s-turn-left", NUDGE_LEFT);
write("s-turn-right", NUDGE_RIGHT);
write("s-turn-up", NUDGE_UP);

// Sailboat family
write("sailboat-2", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, rotate: 0 },
    animate: { x: [0, 3, -3, 2, 0], rotate: [0, 3, -3, 1, 0] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "action",
  tags: ["boat", "sail", "ocean"],
};`);
write("sailboat-off", SHAKE);

write("salt", NUDGE_DOWN);
write("sandbox", SCALE_POP);
write("satellite-off", SHAKE);
write("sausage", WARM_WOBBLE);

// Scale family
write("scale-off", SHAKE);
write("scale-outline", SCALE_POP);
write("scale-outline-off", SHAKE);

// Scan family
write("scan-position", PULSE);
write("scan-traces", PULSE);

// Schema
write("schema", SCALE_POP);
write("schema-off", SHAKE);

// School
write("school-bell", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, -10, 10, -5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["bell", "ring", "school", "notification"],
};`);
write("school-off", SHAKE);

write("scissors-off", SHAKE);
write("scooter-electric", DRIVE_RIGHT);
write("scoreboard", SCALE_POP);
write("screenshot", PULSE);
write("scribble", ROTATE_SWING);
write("scribble-off", SHAKE);

// Script family
write("script", SCALE_POP);
write("script-minus", SCALE_POP);
write("script-plus", SCALE_EXPAND);
write("script-x", SHAKE);

// Scuba family
write("scuba-diving", FLOAT_UP);
write("scuba-diving-tank", FLOAT_UP);
write("scuba-mask", SCALE_POP);
write("scuba-mask-off", SHAKE);

write("sdk", SCALE_POP);
write("search-off", SHAKE);
write("section-sign", SCALE_POP);

// Seedling
write("seedling", NUDGE_UP);
write("seedling-off", SHAKE);

write("select", SCALE_POP);
write("select-all", SCALE_POP);
write("selector", NUDGE_DOWN);

write("send-2", NUDGE_RIGHT);
write("send-off", SHAKE);
write("seo", PULSE);
write("separator", SCALE_X_EXPAND);

write("server-2", SCALE_POP);
write("server-bolt", PULSE);
write("server-spark", PULSE);
write("serverless", PULSE);
write("servicemark", SCALE_POP);

// Settings family (large)
write("settings-ai", PULSE);
write("settings-automation", ROTATE_CW);
write("settings-bolt", PULSE);
write("settings-cancel", SHAKE);
write("settings-check", SCALE_POP);
write("settings-code", SCALE_POP);
write("settings-cog", ROTATE_CW);
write("settings-dollar", COIN_BOUNCE);
write("settings-down", NUDGE_DOWN);
write("settings-exclamation", SHAKE);
write("settings-heart", HEARTBEAT);
write("settings-minus", SCALE_POP);
write("settings-off", SHAKE);
write("settings-pause", SCALE_POP);
write("settings-pin", SCALE_POP);
write("settings-plus", SCALE_EXPAND);
write("settings-question", SCALE_POP);
write("settings-search", PULSE);
write("settings-share", NUDGE_RIGHT);
write("settings-spark", PULSE);
write("settings-star", SCALE_EXPAND);
write("settings-up", NUDGE_UP);
write("settings-x", SHAKE);

write("shadow", SCALE_POP);
write("shadow-off", SHAKE);

// Shape family
write("shape", ROTATE_CW);
write("shape-2", ROTATE_CW);
write("shape-3", ROTATE_CW);
write("shape-off", SHAKE);

write("share-3", NUDGE_RIGHT);
write("share-off", SHAKE);
write("shareplay", NUDGE_RIGHT);

// Shield family (large)
write("shield-bolt", PULSE);
write("shield-cancel", SHAKE);
write("shield-checkered", SCALE_POP);
write("shield-chevron", NUDGE_UP);
write("shield-code", SCALE_POP);
write("shield-cog", ROTATE_CW);
write("shield-dollar", COIN_BOUNCE);
write("shield-down", NUDGE_DOWN);
write("shield-exclamation", SHAKE);
write("shield-heart", HEARTBEAT);
write("shield-lock", SCALE_POP);
write("shield-pause", SCALE_POP);
write("shield-pin", SCALE_POP);
write("shield-question", SCALE_POP);
write("shield-search", PULSE);
write("shield-share", NUDGE_RIGHT);
write("shield-star", SCALE_EXPAND);
write("shield-up", NUDGE_UP);

write("ship-off", SHAKE);
write("shirt-off", SHAKE);
write("shirt-sport", SCALE_POP);

write("shoe", DRIVE_RIGHT);
write("shoe-off", SHAKE);

// Shopping bag family
write("shopping-bag-check", SCALE_POP);
write("shopping-bag-discount", COIN_BOUNCE);
write("shopping-bag-edit", SCALE_POP);
write("shopping-bag-exclamation", SHAKE);
write("shopping-bag-heart", HEARTBEAT);
write("shopping-bag-minus", SCALE_POP);
write("shopping-bag-plus", SCALE_EXPAND);
write("shopping-bag-search", PULSE);
write("shopping-bag-x", SHAKE);

// Shopping cart family
write("shopping-cart-bolt", PULSE);
write("shopping-cart-cancel", SHAKE);
write("shopping-cart-check", SCALE_POP);
write("shopping-cart-code", SCALE_POP);
write("shopping-cart-cog", ROTATE_CW);
write("shopping-cart-copy", SCALE_POP);
write("shopping-cart-discount", COIN_BOUNCE);
write("shopping-cart-dollar", COIN_BOUNCE);
write("shopping-cart-down", NUDGE_DOWN);
write("shopping-cart-exclamation", SHAKE);
write("shopping-cart-heart", HEARTBEAT);
write("shopping-cart-minus", SCALE_POP);
write("shopping-cart-off", SHAKE);
write("shopping-cart-pause", SCALE_POP);
write("shopping-cart-pin", SCALE_POP);
write("shopping-cart-plus", SCALE_EXPAND);
write("shopping-cart-question", SCALE_POP);
write("shopping-cart-search", PULSE);
write("shopping-cart-share", NUDGE_RIGHT);
write("shopping-cart-star", SCALE_EXPAND);
write("shopping-cart-up", NUDGE_UP);
write("shopping-cart-x", SHAKE);

write("shovel-pitchforks", NUDGE_DOWN);

// Sign family
write("sign-left", NUDGE_LEFT);
write("sign-right", NUDGE_RIGHT);

// Signal family
const signals = ["signal-2g", "signal-3g", "signal-4g", "signal-4g-plus", "signal-5g", "signal-6g", "signal-e", "signal-g", "signal-h", "signal-h-plus", "signal-lte"];
for (const s of signals) write(s, PULSE);

write("signature-off", SHAKE);
write("sitemap", SCALE_POP);
write("sitemap-off", SHAKE);

// Skateboard family
write("skateboard", DRIVE_RIGHT);
write("skateboard-off", SHAKE);
write("skateboarding", DRIVE_RIGHT);

write("skew-x", SCALE_X_EXPAND);
write("skew-y", SCALE_Y_EXPAND);
write("ski-jumping", FLOAT_UP);
write("slashes", SCALE_POP);
write("sleigh", DRIVE_RIGHT);
write("slideshow", NUDGE_RIGHT);

write("smart-home", SCALE_POP);
write("smart-home-off", SHAKE);

write("smoking", SCALE_POP);
write("smoking-no", SHAKE);

write("snowboarding", DRIVE_RIGHT);
write("snowflake-off", SHAKE);
write("snowman", SCALE_POP);
write("soccer-field", SCALE_POP);

write("social", SCALE_POP);
write("social-off", SHAKE);
write("sock", SCALE_POP);
write("sofa-off", SHAKE);

write("solar-electricity", PULSE);
write("solar-panel-2", PULSE);

// Sort family — nudgeDown semantics (sorting = items moving into order)
const sortVariants = [
  "sort-0-9", "sort-9-0", "sort-a-z", "sort-z-a",
  "sort-ascending", "sort-ascending-2", "sort-ascending-letters", "sort-ascending-numbers",
  "sort-ascending-shapes", "sort-ascending-small-big",
  "sort-descending", "sort-descending-2", "sort-descending-letters", "sort-descending-numbers",
  "sort-descending-shapes", "sort-descending-small-big",
];
for (const s of sortVariants) write(s, NUDGE_DOWN);

write("sos", SHAKE);
write("soup-off", SHAKE);
write("source-code", SCALE_POP);
write("space-off", SHAKE);
write("spaces", SCALE_POP);
write("spacing-horizontal", SCALE_X_EXPAND);
write("spacing-vertical", SCALE_Y_EXPAND);
write("sparkles-2", SPARKLE);
write("speakerphone", PULSE);
write("speedboat", DRIVE_RIGHT);

// Sphere family
write("sphere", ROTATE_CW);
write("sphere-off", SHAKE);
write("sphere-plus", SCALE_EXPAND);

write("spider", SCALE_POP);
write("spiral", SPIN_LOOP);
write("spiral-off", SHAKE);
write("sport-billard", SCALE_POP);
write("spray", PULSE);

write("spy", PULSE);
write("spy-off", SHAKE);

write("sql", SCALE_POP);

// Square-chevrons family
write("square-chevrons-down", NUDGE_DOWN);
write("square-chevrons-left", NUDGE_LEFT);
write("square-chevrons-right", NUDGE_RIGHT);
write("square-chevrons-up", NUDGE_UP);

// Square-f0..f9
for (let i = 0; i <= 9; i++) write(`square-f${i}`, SCALE_POP);

write("square-forbid", SHAKE);
write("square-forbid-2", SHAKE);
write("square-half", SCALE_POP);
write("square-key", ROTATE_CW);

// Square-letter-[a-z]
for (const c of "abcdefghijklmnopqrstuvwxyz") write(`square-letter-${c}`, SCALE_POP);

write("square-minus-2", SCALE_POP);

// Square-number-0..9
for (let i = 0; i <= 9; i++) write(`square-number-${i}`, SCALE_POP);

write("square-off", SHAKE);
write("square-percentage", SCALE_POP);
write("square-plus-2", SCALE_EXPAND);

write("square-root", SCALE_POP);
write("square-root-2", SCALE_POP);

write("square-rotated", ROTATE_CW);
write("square-rotated-asterisk", ROTATE_CW);
write("square-rotated-forbid", SHAKE);
write("square-rotated-forbid-2", SHAKE);
write("square-rotated-off", SHAKE);

// Square-rounded family
write("square-rounded", SCALE_POP);
write("square-rounded-arrow-down", NUDGE_DOWN);
write("square-rounded-arrow-left", NUDGE_LEFT);
write("square-rounded-arrow-right", NUDGE_RIGHT);
write("square-rounded-arrow-up", NUDGE_UP);
write("square-rounded-check", SCALE_EXPAND);
write("square-rounded-chevron-down", NUDGE_DOWN);
write("square-rounded-chevron-left", NUDGE_LEFT);
write("square-rounded-chevron-right", NUDGE_RIGHT);
write("square-rounded-chevron-up", NUDGE_UP);
write("square-rounded-chevrons-down", NUDGE_DOWN);
write("square-rounded-chevrons-left", NUDGE_LEFT);
write("square-rounded-chevrons-right", NUDGE_RIGHT);
write("square-rounded-chevrons-up", NUDGE_UP);
for (const c of "abcdefghijklmnopqrstuvwxyz") write(`square-rounded-letter-${c}`, SCALE_POP);
write("square-rounded-minus", SCALE_POP);
write("square-rounded-minus-2", SCALE_POP);
for (let i = 0; i <= 9; i++) write(`square-rounded-number-${i}`, SCALE_POP);
write("square-rounded-percentage", SCALE_POP);
write("square-rounded-plus", SCALE_EXPAND);
write("square-rounded-plus-2", SCALE_EXPAND);
write("square-rounded-x", SHAKE);

write("square-toggle", NUDGE_RIGHT);
write("square-toggle-horizontal", NUDGE_RIGHT);

write("squares", SCALE_POP);
write("squares-diagonal", ROTATE_CW);
write("squares-selected", SCALE_POP);

// Stack family — depth operations
write("stack", SCALE_POP);
write("stack-2", SCALE_POP);
write("stack-3", SCALE_POP);
write("stack-back", NUDGE_DOWN);
write("stack-backward", NUDGE_DOWN);
write("stack-forward", NUDGE_UP);
write("stack-front", NUDGE_UP);
write("stack-middle", SCALE_POP);
write("stack-pop", NUDGE_UP);
write("stack-push", NUDGE_DOWN);

// Stairs family
write("stairs", SCALE_POP);
write("stairs-down", NUDGE_DOWN);
write("stairs-up", NUDGE_UP);

write("stars", SPARKLE);
write("stars-off", SHAKE);

write("status-change", SCALE_POP);
write("steam", FLOAT_UP);

write("steering-wheel", ROTATE_CW);
write("steering-wheel-off", SHAKE);

write("step-into", NUDGE_RIGHT);
write("step-out", NUDGE_LEFT);

write("stereo-glasses", SCALE_POP);
write("stethoscope-off", SHAKE);
write("sticker-2", SCALE_POP);

write("stopwatch", ROTATE_CW);

write("storm", PULSE);
write("storm-off", SHAKE);

write("stretching", SCALE_EXPAND);
write("stretching-2", SCALE_EXPAND);

write("stroke-curved", SCALE_POP);
write("stroke-dynamic", SCALE_POP);
write("stroke-straight", SCALE_POP);

write("submarine", DRIVE_RIGHT);
write("subtask", NUDGE_RIGHT);

write("subtitles", SCALE_POP);
write("subtitles-ai", PULSE);
write("subtitles-edit", SCALE_POP);
write("subtitles-off", SHAKE);

write("sum", SCALE_POP);
write("sum-off", SHAKE);

// Sun family
write("sun-electricity", PULSE);
write("sun-high", NUDGE_UP);
write("sun-low", NUDGE_DOWN);
write("sun-off", SHAKE);
write("sun-wind", PULSE);
write("sunglasses", SCALE_POP);
write("sunset-2", NUDGE_DOWN);

write("svg", SCALE_POP);
write("swimming", DRIVE_RIGHT);

// Swipe family
write("swipe", NUDGE_RIGHT);
write("swipe-down", NUDGE_DOWN);
write("swipe-left", NUDGE_LEFT);
write("swipe-right", NUDGE_RIGHT);
write("swipe-up", NUDGE_UP);

// Switch family
write("switch", ROTATE_CW);
write("switch-2", ROTATE_CW);
write("switch-3", ROTATE_CW);
write("switch-horizontal", NUDGE_RIGHT);
write("switch-vertical", NUDGE_DOWN);

write("sword-off", SHAKE);

// ─── T icons ─────────────────────────────────────────────────────────────────

// Table family
write("table-alias", SCALE_POP);
write("table-column", SCALE_POP);
write("table-dashed", SCALE_POP);
write("table-down", NUDGE_DOWN);
write("table-export", NUDGE_RIGHT);
write("table-heart", HEARTBEAT);
write("table-import", NUDGE_LEFT);
write("table-minus", SCALE_POP);
write("table-off", SHAKE);
write("table-options", SCALE_POP);
write("table-plus", SCALE_EXPAND);
write("table-row", SCALE_POP);
write("table-share", NUDGE_RIGHT);
write("table-shortcut", SCALE_POP);
write("table-spark", PULSE);

// Tag family
write("tag-minus", SCALE_POP);
write("tag-off", SHAKE);
write("tag-plus", SCALE_EXPAND);
write("tag-starred", SCALE_EXPAND);
write("tags-off", SHAKE);

// Tallymarks
for (let i = 1; i <= 4; i++) write(`tallymark-${i}`, SCALE_POP);
write("tallymarks", SCALE_POP);

write("tank", DRIVE_RIGHT);

// Target family
write("target-arrow", SCALE_EXPAND);
write("target-off", SHAKE);

// Tax family
write("tax", COIN_BOUNCE);
write("tax-euro", COIN_BOUNCE);
write("tax-pound", COIN_BOUNCE);

write("teapot", WARM_WOBBLE);
write("telescope-off", SHAKE);

// Temperature family
write("temperature", NUDGE_UP);
write("temperature-celsius", SCALE_POP);
write("temperature-fahrenheit", SCALE_POP);
write("temperature-minus", NUDGE_DOWN);
write("temperature-off", SHAKE);
write("temperature-plus", NUDGE_UP);
write("temperature-snow", NUDGE_DOWN);
write("temperature-sun", NUDGE_UP);

write("template", SCALE_POP);
write("template-off", SHAKE);
write("tent-off", SHAKE);
write("terminal-2", SCALE_POP);

// Test pipe family
write("test-pipe", NUDGE_DOWN);
write("test-pipe-2", NUDGE_DOWN);
write("test-pipe-off", SHAKE);

write("tex", SCALE_POP);

// Text family
write("text-caption", SCALE_POP);
write("text-color", SCALE_POP);
write("text-decrease", NUDGE_DOWN);
write("text-direction-ltr", NUDGE_RIGHT);
write("text-direction-rtl", NUDGE_LEFT);
write("text-grammar", SCALE_POP);
write("text-increase", NUDGE_UP);
write("text-orientation", ROTATE_CW);
write("text-plus", SCALE_EXPAND);
write("text-recognition", PULSE);
write("text-resize", SCALE_EXPAND);
write("text-scan-2", PULSE);
write("text-size", SCALE_EXPAND);
write("text-spellcheck", SCALE_POP);
write("text-wrap-column", SCALE_POP);
write("text-wrap-disabled", SHAKE);

write("texture", SCALE_POP);

// Thumb family
write("thumb-down", NUDGE_DOWN);
write("thumb-down-off", SHAKE);
write("thumb-up", NUDGE_UP);
write("thumb-up-off", SHAKE);

write("tic-tac", SCALE_POP);
write("ticket-off", SHAKE);
write("tie", SCALE_POP);
write("tilde", SCALE_POP);

write("tilt-shift", ROTATE_CW);
write("tilt-shift-off", SHAKE);

// Time-duration family
const timeDurations = [0, 5, 10, 15, 30, 45, 60, 90];
for (const d of timeDurations) write(`time-duration-${d}`, SCALE_POP);
write("time-duration-off", SHAKE);

// Timeline family
write("timeline", SCALE_POP);
write("timeline-event", SCALE_POP);
write("timeline-event-exclamation", SHAKE);
write("timeline-event-minus", SCALE_POP);
write("timeline-event-plus", SCALE_EXPAND);
write("timeline-event-text", SCALE_POP);
write("timeline-event-x", SHAKE);

write("timezone", ROTATE_CW);

// Tip jar family
write("tip-jar", COIN_BOUNCE);
write("tip-jar-euro", COIN_BOUNCE);
write("tip-jar-pound", COIN_BOUNCE);

write("tir", DRIVE_RIGHT);

write("toilet-paper", SCALE_POP);
write("toilet-paper-off", SHAKE);
write("toml", SCALE_POP);

// Tool family
write("tool", ROTATE_CW);
write("tools", ROTATE_CW);
write("tools-kitchen", WARM_WOBBLE);
write("tools-kitchen-2", WARM_WOBBLE);
write("tools-kitchen-2-off", SHAKE);
write("tools-kitchen-3", WARM_WOBBLE);
write("tools-kitchen-off", SHAKE);
write("tools-off", SHAKE);

write("tooltip", NUDGE_UP);

// Topology family — pulse (network energy)
const topologies = [
  "topology-bus", "topology-complex", "topology-full", "topology-full-hierarchy",
  "topology-ring", "topology-ring-2", "topology-ring-3",
  "topology-star", "topology-star-2", "topology-star-3",
  "topology-star-ring", "topology-star-ring-2", "topology-star-ring-3",
];
for (const t of topologies) write(t, PULSE);

write("torii", SCALE_POP);
write("tournament", SCALE_POP);
write("tower", PULSE);
write("tower-off", SHAKE);

write("track", NUDGE_RIGHT);
write("trademark", SCALE_POP);
write("traffic-cone-off", SHAKE);
write("traffic-lights", PULSE);
write("traffic-lights-off", SHAKE);
write("train", DRIVE_RIGHT);

// Transaction family
const currencies = ["bitcoin", "dollar", "euro", "pound", "rupee", "yen", "yuan"];
for (const c of currencies) write(`transaction-${c}`, COIN_BOUNCE);

// Transfer family
write("transfer", NUDGE_RIGHT);
write("transfer-in", NUDGE_RIGHT);
write("transfer-out", NUDGE_LEFT);
write("transfer-vertical", NUDGE_DOWN);

// Transform family
write("transform", ROTATE_CW);
write("transform-point", SCALE_POP);
write("transform-point-bottom-left", NUDGE_DOWN);
write("transform-point-bottom-right", NUDGE_DOWN);
write("transform-point-top-left", NUDGE_UP);
write("transform-point-top-right", NUDGE_UP);

// Transition family (directional)
write("transition-bottom", NUDGE_DOWN);
write("transition-left", NUDGE_LEFT);
write("transition-right", NUDGE_RIGHT);
write("transition-top", NUDGE_UP);

write("trash-off", SHAKE);
write("trash-x", SHAKE);
write("treadmill", DRIVE_RIGHT);
write("tree", ROTATE_SWING);
write("trekking", DRIVE_RIGHT);

// Trending family
write("trending-down-2", NUDGE_DOWN);
write("trending-down-3", NUDGE_DOWN);
write("trending-up-2", NUDGE_UP);
write("trending-up-3", NUDGE_UP);

// Triangle family
write("triangle-inverted", NUDGE_DOWN);
write("triangle-minus", SCALE_POP);
write("triangle-minus-2", SCALE_POP);
write("triangle-off", SHAKE);
write("triangle-plus", SCALE_EXPAND);
write("triangle-plus-2", SCALE_EXPAND);
write("triangle-square-circle", ROTATE_CW);
write("triangles", ROTATE_CW);

write("trident", NUDGE_UP);
write("trolley", DRIVE_RIGHT);
write("trophy-off", SHAKE);
write("trowel", NUDGE_DOWN);

// Truck family
write("truck-delivery", DRIVE_RIGHT);
write("truck-loading", DRIVE_RIGHT);
write("truck-off", SHAKE);
write("truck-return", NUDGE_LEFT);

write("txt", SCALE_POP);
write("typeface", SCALE_POP);
write("typography", SCALE_POP);
write("typography-off", SHAKE);

// ─── U icons ─────────────────────────────────────────────────────────────────

write("u-turn-left", NUDGE_LEFT);
write("u-turn-right", NUDGE_RIGHT);

write("ufo", FLOAT_UP);
write("ufo-off", SHAKE);
write("uhd", PULSE);

write("umbrella-2", SCALE_POP);
write("umbrella-closed", SCALE_POP);
write("umbrella-closed-2", SCALE_POP);

write("universe", SPIN_LOOP);
write("urgent", SHAKE);

// User extended family
write("user-bitcoin", COIN_BOUNCE);
write("user-bolt", PULSE);
write("user-cancel", SHAKE);
write("user-circle", SCALE_POP);
write("user-code", SCALE_POP);
write("user-dollar", COIN_BOUNCE);
write("user-down", NUDGE_DOWN);
write("user-edit", SCALE_POP);
write("user-exclamation", SHAKE);
write("user-heart", HEARTBEAT);
write("user-hexagon", SCALE_POP);
write("user-off", SHAKE);
write("user-pause", SCALE_POP);
write("user-pentagon", SCALE_POP);
write("user-pin", SCALE_POP);
write("user-question", SCALE_POP);
write("user-scan", PULSE);
write("user-screen", SCALE_POP);
write("user-share", NUDGE_RIGHT);
write("user-shield", SCALE_POP);
write("user-square", SCALE_POP);
write("user-square-rounded", SCALE_POP);
write("user-up", NUDGE_UP);

// Users group family
write("users-group", SCALE_POP);
write("users-minus", SCALE_POP);
write("users-plus", SCALE_EXPAND);

write("uv-index", PULSE);
write("ux-circle", ROTATE_CW);

// ─── V icons ─────────────────────────────────────────────────────────────────

write("vaccine", SCALE_POP);
write("vaccine-bottle", SCALE_POP);
write("vaccine-bottle-off", SHAKE);
write("vaccine-off", SHAKE);

write("vacuum-cleaner", DRIVE_RIGHT);

write("variable-minus", SCALE_POP);
write("variable-off", SHAKE);
write("variable-plus", SCALE_EXPAND);

// Vector family
write("vector", SCALE_POP);
write("vector-bezier", SCALE_POP);
write("vector-bezier-2", SCALE_POP);
write("vector-bezier-arc", SCALE_POP);
write("vector-bezier-circle", ROTATE_CW);
write("vector-off", SHAKE);
write("vector-spline", SCALE_POP);
write("vector-triangle", SCALE_POP);
write("vector-triangle-off", SHAKE);

write("versions", SCALE_POP);
write("versions-off", SHAKE);

write("video-minus", SCALE_POP);
write("video-plus", SCALE_EXPAND);

// View-360 family
write("view-360", SPIN_LOOP);
write("view-360-arrow", ROTATE_CW);
write("view-360-number", SPIN_LOOP);
write("view-360-off", SHAKE);

write("viewfinder", SCALE_EXPAND);
write("viewfinder-off", SHAKE);

// Viewport family
write("viewport-narrow", SCALE_X_EXPAND);
write("viewport-short", SCALE_Y_EXPAND);
write("viewport-tall", SCALE_Y_EXPAND);
write("viewport-wide", SCALE_X_EXPAND);

write("vinyl", SPIN_LOOP);

write("vip", SCALE_EXPAND);
write("vip-2", SCALE_EXPAND);
write("vip-off", SHAKE);

write("virus", PULSE);
write("virus-off", SHAKE);
write("virus-search", PULSE);

write("vocabulary", SCALE_POP);
write("vocabulary-off", SHAKE);

write("volcano", FLOAT_UP);

// ─── W icons ─────────────────────────────────────────────────────────────────

write("walk", DRIVE_RIGHT);
write("wall", SCALE_POP);
write("wall-off", SHAKE);
write("wallet-off", SHAKE);
write("wallpaper-off", SHAKE);
write("wand-off", SHAKE);

// Wash family — washing machine spin or shake for off
write("wash", SPIN_LOOP);
write("wash-dry", SPIN_LOOP);
const washDryVariants = ["1", "2", "3", "a", "dip", "f", "flat", "hang", "p", "shade", "w"];
for (const v of washDryVariants) write(`wash-dry-${v}`, SCALE_POP);
write("wash-dry-off", SHAKE);
write("wash-dryclean", SPIN_LOOP);
write("wash-dryclean-off", SHAKE);
write("wash-eco", PULSE);
write("wash-gentle", WARM_WOBBLE);
write("wash-hand", WARM_WOBBLE);
write("wash-machine", SPIN_LOOP);
write("wash-off", SHAKE);
write("wash-press", NUDGE_DOWN);
for (let i = 1; i <= 6; i++) write(`wash-temperature-${i}`, SCALE_POP);
write("wash-tumble-dry", SPIN_LOOP);
write("wash-tumble-off", SHAKE);

write("waterpolo", SCALE_POP);

// Wave family
write("wave-saw-tool", PULSE);
write("wave-sine", PULSE);
write("wave-square", PULSE);
write("waves-electricity", PULSE);

write("wheel", ROTATE_CW);
write("wheelchair", DRIVE_RIGHT);
write("wheelchair-off", SHAKE);
write("whirl", SPIN_LOOP);
write("whisk", ROTATE_CW);

// Wifi variants
write("wifi-0", PULSE);
write("wifi-1", PULSE);
write("wifi-2", PULSE);

write("wind-electricity", PULSE);
write("wind-off", SHAKE);
write("windmill", SPIN_LOOP);
write("windmill-off", SHAKE);

// Window family
write("window", SCALE_POP);
write("window-maximize", SCALE_EXPAND);
write("window-minimize", SCALE_POP);
write("window-off", SHAKE);

write("windsock", ROTATE_SWING);
write("wiper", ROTATE_SWING);
write("wiper-wash", ROTATE_SWING);
write("woman", SCALE_POP);
write("wood", SCALE_POP);

// World family (globe spins)
write("world-bolt", PULSE);
write("world-cancel", SHAKE);
write("world-check", SCALE_POP);
write("world-code", SCALE_POP);
write("world-cog", ROTATE_CW);
write("world-dollar", COIN_BOUNCE);
write("world-down", NUDGE_DOWN);
write("world-download", NUDGE_DOWN);
write("world-exclamation", SHAKE);
write("world-heart", HEARTBEAT);
write("world-latitude", ROTATE_CW);
write("world-longitude", ROTATE_CW);
write("world-map", SCALE_POP);
write("world-minus", SCALE_POP);
write("world-off", SHAKE);
write("world-pause", SCALE_POP);
write("world-pin", NUDGE_DOWN);
write("world-plus", SCALE_EXPAND);
write("world-question", SCALE_POP);
write("world-search", PULSE);
write("world-share", NUDGE_RIGHT);
write("world-star", SCALE_EXPAND);
write("world-up", NUDGE_UP);
write("world-upload", NUDGE_UP);
write("world-www", PULSE);
write("world-x", SHAKE);

write("wrecking-ball", ROTATE_SWING);
write("writing", SCALE_POP);
write("writing-off", SHAKE);
write("writing-sign", SCALE_POP);
write("writing-sign-off", SHAKE);

// ─── X icons ─────────────────────────────────────────────────────────────────

write("x-power-y", SCALE_POP);
write("xbox-a", SCALE_POP);
write("xbox-b", SCALE_POP);
write("xbox-x", SCALE_POP);
write("xbox-y", SCALE_POP);
write("xd", SCALE_POP);
write("xxx", SHAKE);

// ─── Y icons ─────────────────────────────────────────────────────────────────

write("yin-yang", SPIN_LOOP);
write("yoga", SCALE_POP);

// ─── Z icons ─────────────────────────────────────────────────────────────────

write("zeppelin", FLOAT_UP);
write("zeppelin-off", SHAKE);
write("zero-config", ROTATE_CW);
write("zip", SCALE_POP);

// Zoom family
write("zoom", SCALE_EXPAND);
write("zoom-cancel", SHAKE);
write("zoom-check", SCALE_EXPAND);
write("zoom-code", SCALE_POP);
write("zoom-exclamation", SHAKE);
write("zoom-in-area", SCALE_EXPAND);
write("zoom-money", COIN_BOUNCE);
write("zoom-out-area", SCALE_POP);
write("zoom-pan", NUDGE_RIGHT);
write("zoom-question", SCALE_POP);
write("zoom-replace", ROTATE_CW);
write("zoom-reset", ROTATE_CW);
write("zoom-scan", PULSE);

// Zzz family (sleep)
write("zzz", FLOAT_UP);
write("zzz-off", SHAKE);

console.log("\nDone! S–Z tabler animation defs created.");
