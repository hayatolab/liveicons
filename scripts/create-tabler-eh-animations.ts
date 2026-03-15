/**
 * Creates animation defs for tabler-exclusive icons E–H
 * Usage: pnpm tsx scripts/create-tabler-eh-animations.ts
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

const ROTATE_CCW = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: -360 },
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
  category: "media",
};`;

const FLOAT_UP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -5, 0] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "action",
};`;

const PULSE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
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

const WARM_WOBBLE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`;

const BLINK = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 0.1, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
};`;

const FLIP_H = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`;

const FLIP_V = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`;

const DRIVE_RIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 10 },
  category: "navigation",
};`;

const SWING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 15, -10, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`;

const EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 15 },
  category: "action",
};`;

// ─── E icons ────────────────────────────────────────────────────────────────

write("e-passport", SHAKE); // security document shake
write("ear-scan", PULSE); // scanning pulse
write("ear", NUDGE_UP); // listening attention
write("ease-in-control-point", SCALE_POP);
write("ease-in-out-control-points", SCALE_POP);
write("ease-in-out", SCALE_POP);
write("ease-in", SCALE_POP);
write("ease-out-control-point", SCALE_POP);
write("ease-out", SCALE_POP);
write("edit-circle-off", SHAKE);
write("edit-circle", ROTATE_CW);
write("edit-off", SHAKE);
write("edit", NUDGE_RIGHT);
write("egg-cracked", SHAKE);
write("egg-fried", WARM_WOBBLE);
write("egg", FLOAT_UP);
write("eggs", FLOAT_UP);
write("elevator-off", SHAKE);
write("elevator", NUDGE_UP);
write("emergency-bed", SHAKE);
write("empathize-off", SHAKE);
write("empathize", HEARTBEAT);
write("emphasis", SCALE_POP);
write("engine-off", SHAKE);
write("engine", ROTATE_CW);
write("equal-double", SCALE_POP);
write("equal-not", SHAKE);
write("equal", SCALE_POP);
write("eraser-off", SHAKE);
write("error-404-off", SHAKE);
write("error-404", SHAKE);
write("escalator-down", NUDGE_DOWN);
write("escalator-up", NUDGE_UP);
write("escalator", NUDGE_DOWN);
write("exchange-off", SHAKE);
write("exchange", ROTATE_CW);
write("exclamation-circle", SHAKE);
write("exclamation-mark-off", SHAKE);
write("exclamation-mark", SHAKE);
write("explicit-off", SHAKE);
write("explicit", SHAKE);
write("exposure-0", SCALE_POP);
write("exposure-minus-1", SCALE_POP);
write("exposure-minus-2", SCALE_POP);
write("exposure-off", SHAKE);
write("exposure-plus-1", SCALE_POP);
write("exposure-plus-2", SCALE_POP);
write("exposure", SCALE_POP);
write("external-link-off", SHAKE);

// ─── Eye variants ────────────────────────────────────────────────────────────

const eyeVariants = [
  "eye-bitcoin", "eye-bolt", "eye-check", "eye-code",
  "eye-cog", "eye-discount", "eye-dollar", "eye-dotted",
  "eye-edit", "eye-heart", "eye-minus", "eye-pause",
  "eye-pin", "eye-plus", "eye-question", "eye-search",
  "eye-share", "eye-spark", "eye-star", "eye-table",
];
for (const name of eyeVariants) write(name, BLINK);

write("eye-cancel", SHAKE);
write("eye-exclamation", SHAKE);
write("eye-x", SHAKE);
write("eye-down", NUDGE_DOWN);
write("eye-up", NUDGE_UP);
write("eyeglass-2", NUDGE_UP);
write("eyeglass-off", SHAKE);
write("eyeglass", NUDGE_UP);

// ─── F icons ────────────────────────────────────────────────────────────────

write("face-id-error", SHAKE);
write("face-id", PULSE);
write("face-mask-off", SHAKE);
write("face-mask", NUDGE_UP);
write("fall", NUDGE_DOWN);
write("favicon", SCALE_POP);
write("feather-off", SHAKE);
write("fence-off", SHAKE);
write("fence", NUDGE_UP);
write("ferry", DRIVE_RIGHT);
write("fidget-spinner", SPIN_LOOP);

// file variants — directional
write("file-arrow-left", NUDGE_LEFT);
write("file-arrow-right", NUDGE_RIGHT);
write("file-download", NUDGE_DOWN);
write("file-export", NUDGE_RIGHT);
write("file-import", NUDGE_LEFT);
write("file-upload", NUDGE_UP);
write("file-like", NUDGE_UP);
write("file-dislike", NUDGE_DOWN);

// file variants — shake (error/off/alert/broken/sad)
write("file-alert", SHAKE);
write("file-broken", SHAKE);
write("file-off", SHAKE);
write("file-sad", SHAKE);
write("file-x", SHAKE);
write("files-off", SHAKE);

// file variants — rotate (cog/settings/time/orientation)
write("file-settings", ROTATE_CW);
write("file-time", ROTATE_CW);
write("file-orientation", ROTATE_CW);

// file variants — signal/pulse
write("file-rss", PULSE);
write("file-signal", PULSE);

// file variants — spin
write("file-infinity", SPIN_LOOP);

// file variants — nudge right (edit/pencil/symlink)
write("file-pencil", NUDGE_RIGHT);
write("file-symlink", NUDGE_RIGHT);
write("file-shredder", NUDGE_DOWN);

// file variants — scale pop (generic)
const fileScalePop = [
  "file-3d", "file-ai", "file-analytics", "file-barcode",
  "file-bitcoin", "file-certificate", "file-chart", "file-check",
  "file-code-2", "file-code", "file-cv", "file-database",
  "file-delta", "file-description", "file-diff", "file-digit",
  "file-dollar", "file-dots", "file-euro", "file-excel",
  "file-function", "file-horizontal", "file-info",
  "file-invoice", "file-isr", "file-lambda", "file-minus",
  "file-music", "file-neutral", "file-percent", "file-phone",
  "file-plus", "file-power", "file-report", "file-scissors",
  "file-smile", "file-spark", "file-spreadsheet", "file-stack",
  "file-star", "file-text-ai", "file-text-shield", "file-text-spark",
  "file-text", "file-typography", "file-unknown", "file-vector",
  "file-word", "file-zip",
  "file-type-bmp", "file-type-css", "file-type-csv", "file-type-doc",
  "file-type-docx", "file-type-html", "file-type-jpg", "file-type-js",
  "file-type-jsx", "file-type-pdf", "file-type-php", "file-type-png",
  "file-type-ppt", "file-type-rs", "file-type-sql", "file-type-svg",
  "file-type-ts", "file-type-tsx", "file-type-txt", "file-type-vue",
  "file-type-xls", "file-type-xml", "file-type-zip",
  "file", "files",
];
for (const name of fileScalePop) write(name, SCALE_POP);

// filter-2 family
const filter2Shake = ["filter-2-cancel", "filter-2-x", "filter-2-exclamation"];
for (const name of filter2Shake) write(name, SHAKE);
write("filter-2-down", NUDGE_DOWN);
write("filter-2-up", NUDGE_UP);
const filter2ScalePop = [
  "filter-2-bolt", "filter-2-check", "filter-2-code", "filter-2-cog",
  "filter-2-discount", "filter-2-dollar", "filter-2-edit", "filter-2-minus",
  "filter-2-pause", "filter-2-pin", "filter-2-plus", "filter-2-question",
  "filter-2-search", "filter-2-share", "filter-2-spark", "filter-2",
];
for (const name of filter2ScalePop) write(name, SCALE_POP);

// filter family
const filterShake = ["filter-cancel", "filter-off", "filter-x", "filter-exclamation"];
for (const name of filterShake) write(name, SHAKE);
write("filter-down", NUDGE_DOWN);
write("filter-up", NUDGE_UP);
const filterScalePop = [
  "filter-bolt", "filter-check", "filter-code", "filter-cog",
  "filter-discount", "filter-dollar", "filter-edit", "filter-heart",
  "filter-minus", "filter-pause", "filter-pin", "filter-plus",
  "filter-question", "filter-search", "filter-share", "filter-spark",
  "filter-star", "filter", "filters",
];
for (const name of filterScalePop) write(name, SCALE_POP);

// fingerprint
write("fingerprint-off", SHAKE);
write("fingerprint-scan", PULSE);
write("fingerprint", PULSE);

// fire/first-aid
write("fire-hydrant-off", SHAKE);
write("fire-hydrant", SCALE_POP);
write("firetruck", DRIVE_RIGHT);
write("firewall-check", SCALE_POP);
write("firewall-flame", WARM_WOBBLE);
write("first-aid-kit-off", SHAKE);
write("first-aid-kit", SCALE_POP);

// fish
write("fish-bone", SCALE_POP);
write("fish-christianity", SCALE_POP);
write("fish-hook-off", SHAKE);
write("fish-hook", NUDGE_DOWN);

// flag variants
const flagShake = ["flag-2-off", "flag-cancel", "flag-off", "flag-x"];
for (const name of flagShake) write(name, SHAKE);
write("flag-down", NUDGE_DOWN);
write("flag-up", NUDGE_UP);
const flagSwing = [
  "flag-2", "flag-3", "flag-bitcoin", "flag-bolt", "flag-check",
  "flag-code", "flag-cog", "flag-discount", "flag-dollar",
  "flag-exclamation", "flag-heart", "flag-minus", "flag-pause",
  "flag-pin", "flag-plus", "flag-question", "flag-search",
  "flag-share", "flag-spark", "flag-star",
];
for (const name of flagSwing) write(name, SWING);

// flame/flask/flip/float/flower/focus/fold/folder
write("flame-off", SHAKE);
write("flare", PULSE);
write("flask-2-off", SHAKE);
write("flask-2", SCALE_POP);
write("flask-off", SHAKE);
write("flask", SCALE_POP);
write("flip-flops", DRIVE_RIGHT);
write("flip-horizontal", FLIP_H);
write("flip-vertical", FLIP_V);
write("float-center", SCALE_POP);
write("float-left", NUDGE_LEFT);
write("float-none", SCALE_POP);
write("float-right", NUDGE_RIGHT);
write("flower-off", SHAKE);
write("focus-2", EXPAND);
write("focus-auto", EXPAND);
write("focus-centered", EXPAND);
write("focus", EXPAND);
write("fold-down", NUDGE_DOWN);
write("fold-up", NUDGE_UP);
write("fold", SCALE_POP);

// folder variants
const folderShake = [
  "folder-cancel", "folder-off", "folder-x", "folder-exclamation",
  "folders-off",
];
for (const name of folderShake) write(name, SHAKE);
write("folder-down", NUDGE_DOWN);
write("folder-up", NUDGE_UP);
const folderScalePop = [
  "folder-bolt", "folder-check", "folder-code", "folder-cog",
  "folder-dollar", "folder-heart", "folder-minus", "folder-open",
  "folder-pause", "folder-pin", "folder-plus", "folder-question",
  "folder-root", "folder-search", "folder-share", "folder-star",
  "folder-symlink", "folder", "folders",
];
for (const name of folderScalePop) write(name, SCALE_POP);

// forbid/forms/fountain/frame
write("forbid-2", SHAKE);
write("forbid", SHAKE);
write("forms", SCALE_POP);
write("fountain-off", SHAKE);
write("fountain", FLOAT_UP);
write("frame-off", SHAKE);
write("frame", SCALE_POP);
write("free-rights", SCALE_POP);

// freeze/fridge/friends
write("freeze-column", SCALE_POP);
write("freeze-row-column", SCALE_POP);
write("freeze-row", SCALE_POP);
write("fridge-off", SHAKE);
write("fridge", SCALE_POP);
write("friends-off", SHAKE);
write("friends", SCALE_POP);
write("frustum-off", SHAKE);
write("frustum-plus", SCALE_POP);
write("frustum", ROTATE_CW);
write("function-off", SHAKE);
write("function", SCALE_POP);

// ─── G icons ────────────────────────────────────────────────────────────────

write("galaxy", SPIN_LOOP);
write("garden-cart-off", SHAKE);
write("garden-cart", DRIVE_RIGHT);
write("gas-station-off", SHAKE);
write("gas-station", SCALE_POP);
write("gauge-off", SHAKE);

// gender family — all scale pop
const genderFamily = [
  "gender-agender", "gender-androgyne", "gender-bigender",
  "gender-demiboy", "gender-demigirl", "gender-epicene",
  "gender-female", "gender-femme", "gender-genderfluid",
  "gender-genderless", "gender-genderqueer", "gender-hermaphrodite",
  "gender-intergender", "gender-male", "gender-neutrois",
  "gender-third", "gender-transgender", "gender-trasvesti",
];
for (const name of genderFamily) write(name, SCALE_POP);

write("geometry", ROTATE_CW);
write("ghost-2", FLOAT_UP);
write("ghost-3", FLOAT_UP);
write("ghost-off", SHAKE);
write("gif", SCALE_POP);
write("gift-card", SCALE_POP);
write("gift-off", SHAKE);

// git
write("git-branch-deleted", SHAKE);
write("git-cherry-pick", NUDGE_UP);
write("git-commit", NUDGE_RIGHT);
write("git-compare", ROTATE_CW);
write("git-merge", SCALE_POP);
write("git-pull-request-closed", SHAKE);
write("git-pull-request-draft", SCALE_POP);
write("git-pull-request", NUDGE_UP);

write("gizmo", ROTATE_CW);

// glass family
const glassUp = [
  "glass-champagne", "glass-cocktail", "glass-full",
  "glass-gin", "glass",
];
for (const name of glassUp) write(name, FLOAT_UP);
write("glass-off", SHAKE);

// go/golf/gps/gradienter
write("go-game", SCALE_POP);
write("golf-off", SHAKE);
write("golf", NUDGE_RIGHT);
write("gps", PULSE);
write("gradienter", NUDGE_LEFT);
write("grain", SCALE_POP);
write("graph-off", SHAKE);
write("graph", SCALE_POP);
write("grave-2", SCALE_POP);
write("grave", SCALE_POP);

// grid family
const gridScalePop = [
  "grid-3x3", "grid-4x4", "grid-dots", "grid-pattern", "grid-scan",
];
for (const name of gridScalePop) write(name, SCALE_POP);
write("grid-goldenratio", ROTATE_CW);

// grill/grip/growth
write("grill-fork", NUDGE_UP);
write("grill-off", SHAKE);
write("grill-spatula", NUDGE_RIGHT);
write("grill", WARM_WOBBLE);
write("grip-horizontal", NUDGE_RIGHT);
write("grip-vertical", NUDGE_DOWN);
write("growth", NUDGE_UP);
write("guitar-pick", NUDGE_DOWN);
write("gymnastics", SCALE_POP);

// ─── H icons ────────────────────────────────────────────────────────────────

// heading levels
for (const n of ["h-1", "h-2", "h-3", "h-4", "h-5", "h-6"]) write(n, SCALE_POP);

write("hammer-off", SHAKE);

// hand variants
write("hand-click-off", SHAKE);
write("hand-click", NUDGE_DOWN);
write("hand-finger-down", NUDGE_DOWN);
write("hand-finger-left", NUDGE_LEFT);
write("hand-finger-off", SHAKE);
write("hand-finger-right", NUDGE_RIGHT);
write("hand-finger", NUDGE_DOWN);
write("hand-grab", SCALE_POP);
write("hand-little-finger", SCALE_POP);
write("hand-love-you", SCALE_POP);
write("hand-middle-finger", NUDGE_UP);
write("hand-move", SCALE_POP);
write("hand-off", SHAKE);
write("hand-ring-finger", SCALE_POP);
write("hand-sanitizer", NUDGE_DOWN);
write("hand-stop", SCALE_POP);
write("hand-three-fingers", SCALE_POP);
write("hand-two-fingers", SCALE_POP);

// hanger
write("hanger-2", NUDGE_DOWN);
write("hanger-off", SHAKE);
write("hanger", NUDGE_DOWN);

// hash/haze/hdr
write("hash", SCALE_POP);
write("haze-moon", SCALE_POP);
write("haze", SCALE_POP);
write("hdr", SCALE_POP);

// heading
write("heading-off", SHAKE);
write("heading", SCALE_POP);

// headphones/headset
write("headphones-off", SHAKE);
write("headphones", NUDGE_DOWN);
write("headset-off", SHAKE);
write("headset", NUDGE_DOWN);
write("health-recognition", PULSE);

// heart variants
const heartBeatVariants = [
  "heart-bitcoin", "heart-bolt", "heart-check", "heart-code",
  "heart-cog", "heart-discount", "heart-dollar", "heart-pin",
  "heart-plus", "heart-search", "heart-share", "heart-spark",
  "heart-star", "hearts",
];
for (const name of heartBeatVariants) write(name, HEARTBEAT);
write("heart-broken", SHAKE);
write("heart-cancel", SHAKE);
write("heart-exclamation", SHAKE);
write("heart-x", SHAKE);
write("hearts-off", SHAKE);
write("heart-down", NUDGE_DOWN);
write("heart-up", NUDGE_UP);
write("heart-minus", SCALE_POP);
write("heart-pause", SCALE_POP);
write("heart-question", SCALE_POP);
write("heart-rate-monitor", PULSE);
write("heartbeat", PULSE);

// helicopter
write("helicopter-landing", NUDGE_DOWN);

// helmet
write("helmet-off", SHAKE);
write("helmet", SCALE_POP);

// help family
const helpScalePop = [
  "help-circle", "help-hexagon", "help-octagon", "help-small",
  "help-square-rounded", "help-square", "help-triangle", "help",
];
for (const name of helpScalePop) write(name, SCALE_POP);
write("help-off", SHAKE);

// hemisphere
write("hemisphere-off", SHAKE);
write("hemisphere-plus", SCALE_POP);
write("hemisphere", ROTATE_CW);

// hexagon family
write("hexagon-3d", ROTATE_CW);
write("hexagon-asterisk", ROTATE_CW);
write("hexagon-off", SHAKE);
write("hexagon-minus-2", SCALE_POP);
write("hexagon-minus", SCALE_POP);
write("hexagon-plus-2", SCALE_POP);
write("hexagon-plus", SCALE_POP);
const hexagonLetters = "abcdefghijklmnopqrstuvwxyz".split("");
for (const l of hexagonLetters) write(`hexagon-letter-${l}`, SCALE_POP);
for (let n = 0; n <= 9; n++) write(`hexagon-number-${n}`, SCALE_POP);

// hexagonal prism/pyramid
write("hexagonal-prism-off", SHAKE);
write("hexagonal-prism-plus", SCALE_POP);
write("hexagonal-prism", ROTATE_CW);
write("hexagonal-pyramid-off", SHAKE);
write("hexagonal-pyramid-plus", SCALE_POP);
write("hexagonal-pyramid", ROTATE_CW);
write("hexagons-off", SHAKE);
write("hexagons", SCALE_POP);

// hierarchy
write("hierarchy-2", SCALE_POP);
write("hierarchy-3", SCALE_POP);
write("hierarchy-off", SHAKE);
write("hierarchy", SCALE_POP);

// highlight
write("highlight-off", SHAKE);
write("highlight", NUDGE_RIGHT);

// history
write("history-off", SHAKE);
write("history-toggle", ROTATE_CCW);

// home family
const homeShake = ["home-cancel", "home-exclamation", "home-off", "home-x"];
for (const name of homeShake) write(name, SHAKE);
write("home-down", NUDGE_DOWN);
write("home-up", NUDGE_UP);
write("home-move", DRIVE_RIGHT);
write("home-cog", ROTATE_CW);
write("home-heart", HEARTBEAT);
write("home-signal", PULSE);
const homeScalePop = [
  "home-2", "home-bitcoin", "home-bolt", "home-check", "home-dollar",
  "home-dot", "home-eco", "home-edit", "home-hand", "home-infinity",
  "home-link", "home-lock", "home-minus", "home-plus", "home-question",
  "home-ribbon", "home-search", "home-share", "home-shield",
  "home-spark", "home-star", "home-stats",
];
for (const name of homeScalePop) write(name, SCALE_POP);

// horse/horseshoe
write("horse-toy", DRIVE_RIGHT);
write("horse", DRIVE_RIGHT);
write("horseshoe", SCALE_POP);

// hospital/hotel
write("hospital-circle", SCALE_POP);
write("hospital", SCALE_POP);
write("hotel-service", SCALE_POP);

// hourglass
write("hourglass-empty", SHAKE);
write("hourglass-high", ROTATE_CW);
write("hourglass-low", ROTATE_CW);
write("hourglass-off", SHAKE);

// hours
write("hours-12", ROTATE_CW);
write("hours-24", ROTATE_CW);
write("html", SCALE_POP);

// http methods
const httpOff = [
  "http-connect-off", "http-delete-off", "http-get-off",
  "http-head-off", "http-options-off", "http-patch-off",
  "http-post-off", "http-put-off", "http-que-off", "http-trace-off",
];
for (const name of httpOff) write(name, SHAKE);
const httpNormal = [
  "http-connect", "http-delete", "http-get", "http-head",
  "http-options", "http-patch", "http-post", "http-put",
  "http-que", "http-trace",
];
for (const name of httpNormal) write(name, SCALE_POP);

console.log("\nDone!");
