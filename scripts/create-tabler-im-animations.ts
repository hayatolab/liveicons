/**
 * Creates animation defs for tabler stroke icons I–M
 * Usage: pnpm tsx scripts/create-tabler-im-animations.ts
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
    animate: { rotate: -90 },
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
  transition: { duration: 1, ease: "linear", repeat: Infinity },
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
  tags: ["heart", "love", "pulse"],
};`;

const COIN_BOUNCE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -6, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10 },
  category: "action",
  tags: ["money", "currency", "bounce"],
};`;

const PULSE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 0.95, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
};`;

const FLOAT_UP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -6, 0] },
  },
  transition: { type: "spring", stiffness: 150, damping: 10 },
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
  category: "navigation",
};`;

const ROTATE_SWING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -6, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
};`;

const SCALE_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "action",
};`;

const MOOD_SAD = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["emotion", "sad", "face"],
};`;

const MOOD_HAPPY = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 0.95, 1] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "feedback",
  tags: ["emotion", "happy", "face"],
};`;

const MOOD_SURPRISED = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.3, 0.9, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10 },
  category: "feedback",
  tags: ["emotion", "surprised", "face"],
};`;

const MOOD_TILT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 10, -5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["emotion", "confused", "face"],
};`;

// ─── I icons ────────────────────────────────────────────────────────────────

// Ice cream family - float/bounce
const iceCreamIcons = ["ice-cream", "ice-cream-2"];
for (const name of iceCreamIcons) write(name, FLOAT_UP);
write("ice-cream-off", SHAKE);
write("ice-skating", DRIVE_RIGHT);

// Icons family
write("icons", SCALE_POP);
write("icons-off", SHAKE);

// ID badge family
const idBadgeIcons = ["id-badge", "id-badge-2", "id"];
for (const name of idBadgeIcons) write(name, SCALE_POP);
write("id-badge-off", SHAKE);
write("id-off", SHAKE);

// Ikosaedr (3D shape)
write("ikosaedr", ROTATE_CW);

// Image extras (image.ts, images.ts, etc. already exist)
write("image-generation", PULSE);
write("image-in-picture", SCALE_POP);

// Inbox
write("inbox", NUDGE_DOWN);
write("inbox-off", SHAKE);

// Indent
write("indent-decrease", NUDGE_LEFT);
write("indent-increase", NUDGE_RIGHT);

// Infinity off
write("infinity-off", SHAKE);

// Info variants - all scale pop (informational)
const infoIcons = [
  "info-circle", "info-hexagon", "info-octagon", "info-small",
  "info-square-rounded", "info-square", "info-triangle",
];
for (const name of infoIcons) write(name, SCALE_POP);

// Inner shadow family - directional
write("inner-shadow-bottom", NUDGE_DOWN);
write("inner-shadow-bottom-left", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`);
write("inner-shadow-bottom-right", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`);
write("inner-shadow-top", NUDGE_UP);
write("inner-shadow-top-left", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`);
write("inner-shadow-top-right", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};`);
write("inner-shadow-left", NUDGE_LEFT);
write("inner-shadow-right", NUDGE_RIGHT);

// Input family
write("input-ai", PULSE);
write("input-check", SCALE_POP);
write("input-search", SCALE_POP);
write("input-spark", PULSE);
write("input-x", SHAKE);

// Invoice
write("invoice", NUDGE_DOWN);

// Ironing family
const ironingNormal = ["ironing-1", "ironing-2", "ironing-3", "ironing", "ironing-steam"];
for (const name of ironingNormal) write(name, ROTATE_SWING);
write("ironing-off", SHAKE);
write("ironing-steam-off", SHAKE);

// Irregular polyhedron
write("irregular-polyhedron", ROTATE_CW);
write("irregular-polyhedron-off", SHAKE);
write("irregular-polyhedron-plus", SCALE_POP);

// ─── J icons ────────────────────────────────────────────────────────────────

write("jacket", SCALE_POP);
write("jetpack", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -8, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 8 },
  category: "navigation",
  tags: ["fly", "jet", "launch"],
};`);
write("jewish-star", ROTATE_CW);
write("join-bevel", SCALE_POP);
write("join-round", SCALE_POP);
write("join-straight", SCALE_POP);
write("joker", SCALE_POP);
write("jpg", SCALE_POP);
write("json", SCALE_POP);
write("jump-rope", ROTATE_SWING);

// ─── K icons ────────────────────────────────────────────────────────────────

write("karate", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 15, 0] },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "action",
  tags: ["martial", "sport", "chop"],
};`);
write("kerning", NUDGE_RIGHT);
write("key-off", SHAKE);
write("keyboard-hide", NUDGE_DOWN);
write("keyboard-show", NUDGE_UP);
write("keyframe", SCALE_POP);
write("keyframe-align-center", SCALE_POP);
write("keyframe-align-horizontal", SCALE_POP);
write("keyframe-align-vertical", SCALE_POP);
write("keyframes", SCALE_POP);

// ─── L icons ────────────────────────────────────────────────────────────────

write("label", SCALE_POP);
write("label-important", SCALE_EXPAND);
write("label-off", SHAKE);
write("ladder", NUDGE_UP);
write("ladder-off", SHAKE);
write("ladle", ROTATE_SWING);
write("lambda", SCALE_POP);

// Lamp extras (lamp.ts, lamp-ceiling.ts etc already exist)
write("lamp-2", PULSE);
write("lamp-off", SHAKE);

write("lane", NUDGE_RIGHT);

// Language variants
write("language", SCALE_POP);
write("language-hiragana", SCALE_POP);
write("language-katakana", SCALE_POP);
write("language-off", SHAKE);

// Lasso
write("lasso-off", SHAKE);
write("lasso-polygon", ROTATE_SWING);

// Laurel wreath family - celebrate / spin
const laurelIcons = ["laurel-wreath", "laurel-wreath-1", "laurel-wreath-2", "laurel-wreath-3"];
for (const name of laurelIcons) write(name, SCALE_EXPAND);

// Layers extras (layers.ts, layers-2.ts, layers-plus.ts already exist)
const layersShake = ["layers-off"];
const layersPop = [
  "layers-difference", "layers-intersect", "layers-intersect-2",
  "layers-linked", "layers-selected", "layers-selected-bottom",
  "layers-subtract", "layers-union",
];
for (const name of layersShake) write(name, SHAKE);
for (const name of layersPop) write(name, SCALE_POP);

// Layout family - directional/scale
write("layout", SCALE_POP);
write("layout-2", SCALE_POP);
write("layout-off", SHAKE);
write("layout-align-bottom", NUDGE_DOWN);
write("layout-align-top", NUDGE_UP);
write("layout-align-left", NUDGE_LEFT);
write("layout-align-right", NUDGE_RIGHT);
write("layout-align-center", SCALE_POP);
write("layout-align-middle", SCALE_POP);
write("layout-board", SCALE_POP);
write("layout-board-split", SCALE_POP);
write("layout-bottombar", NUDGE_DOWN);
write("layout-bottombar-collapse", NUDGE_DOWN);
write("layout-bottombar-expand", NUDGE_UP);
write("layout-bottombar-inactive", SCALE_POP);
write("layout-cards", SCALE_POP);
write("layout-collage", SCALE_POP);
write("layout-columns", SCALE_POP);
write("layout-distribute-horizontal", SCALE_POP);
write("layout-distribute-vertical", SCALE_POP);
write("layout-grid-add", SCALE_EXPAND);
write("layout-grid-remove", SHAKE);
write("layout-kanban", NUDGE_RIGHT);
write("layout-navbar", NUDGE_UP);
write("layout-navbar-collapse", NUDGE_UP);
write("layout-navbar-expand", NUDGE_DOWN);
write("layout-navbar-inactive", SCALE_POP);
write("layout-rows", SCALE_POP);
write("layout-sidebar", NUDGE_LEFT);
write("layout-sidebar-inactive", SCALE_POP);
write("layout-sidebar-left-collapse", NUDGE_LEFT);
write("layout-sidebar-left-expand", NUDGE_RIGHT);
write("layout-sidebar-right", NUDGE_RIGHT);
write("layout-sidebar-right-collapse", NUDGE_RIGHT);
write("layout-sidebar-right-expand", NUDGE_LEFT);
write("layout-sidebar-right-inactive", SCALE_POP);

// Leaf extras
write("leaf-2", ROTATE_SWING);
write("leaf-off", SHAKE);

// Lego
write("lego", SCALE_POP);
write("lego-off", SHAKE);

// Lemon family
write("lemon", ROTATE_SWING);
write("lemon-2", ROTATE_SWING);

// Letter family - all scale pop
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
for (const l of letters) {
  write(`letter-${l}`, SCALE_POP);
  write(`letter-${l}-small`, SCALE_POP);
}
write("letter-case", SCALE_POP);
write("letter-case-lower", SCALE_POP);
write("letter-case-upper", SCALE_POP);
write("letter-case-toggle", SCALE_POP);
write("letter-spacing", NUDGE_RIGHT);

// Library extras
write("library-minus", SHAKE);
write("library-photo", SCALE_POP);
write("library-plus", SCALE_EXPAND);

// License
write("license", SCALE_POP);
write("license-off", SHAKE);

// Lifebuoy extras (lifebuoy.ts already exists via lucide counterpart? check)
write("lifebuoy", ROTATE_CW);
write("lifebuoy-off", SHAKE);

write("lighter", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
  tags: ["fire", "flame", "light"],
};`);

// Line family
write("line", SCALE_POP);
write("line-dashed", SCALE_POP);
write("line-dotted", SCALE_POP);
write("line-height", NUDGE_UP);
write("line-scan", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["scan", "line"],
};`);

// Link extras
write("link-minus", SHAKE);
write("link-off", SHAKE);
write("link-plus", SCALE_EXPAND);

// List extras
write("list-details", SCALE_POP);
write("list-letters", SCALE_POP);
write("list-numbers", SCALE_POP);
write("list-search", SCALE_POP);

// Live photo
write("live-photo", PULSE);
write("live-photo-off", SHAKE);
write("live-view", PULSE);

// Load balancer
write("load-balancer", PULSE);

// Loader extras (loader.ts, loader-2.ts are probably from lucide mapping)
write("loader-2", SPIN_LOOP);
write("loader-3", SPIN_LOOP);
write("loader-quarter", SPIN_LOOP);

// Location family - map pin drop + content variants
const locationDown = ["location-down"];
const locationUp = ["location-up"];
const locationShake = [
  "location-broken", "location-cancel", "location-off", "location-x",
];
const locationCoin = ["location-dollar", "location-discount"];
const locationPulse = ["location-search"];
const locationHeart = ["location-heart"];
const locationCog = ["location-cog"];
const locationNudge = ["location-pin", "location"]; // map pin drop
const locationPop = [
  "location-bolt", "location-check", "location-code",
  "location-exclamation", "location-minus", "location-pause",
  "location-plus", "location-question", "location-share",
  "location-star",
];

for (const name of locationDown) write(name, NUDGE_DOWN);
for (const name of locationUp) write(name, NUDGE_UP);
for (const name of locationShake) write(name, SHAKE);
for (const name of locationCoin) write(name, COIN_BOUNCE);
for (const name of locationPulse) write(name, PULSE);
for (const name of locationHeart) write(name, HEARTBEAT);
for (const name of locationCog) write(name, ROTATE_CW);
for (const name of locationNudge) write(name, NUDGE_DOWN);
for (const name of locationPop) write(name, SCALE_POP);

// Lock family
const lockShake = [
  "lock-cancel", "lock-off", "lock-open-off", "lock-x",
];
const lockDown = ["lock-down"];
const lockUp = ["lock-up"];
const lockCoin = ["lock-dollar", "lock-bitcoin"];
const lockHeart = ["lock-heart"];
const lockCog = ["lock-cog"];
const lockPop = [
  "lock-access", "lock-bolt", "lock-check", "lock-code",
  "lock-exclamation", "lock-minus", "lock-open-2", "lock-password",
  "lock-pause", "lock-pin", "lock-plus", "lock-question",
  "lock-search", "lock-share", "lock-square", "lock-square-rounded",
  "lock-star",
];
const lockAccessOff = ["lock-access-off"];

for (const name of lockShake) write(name, SHAKE);
for (const name of lockDown) write(name, NUDGE_DOWN);
for (const name of lockUp) write(name, NUDGE_UP);
for (const name of lockCoin) write(name, COIN_BOUNCE);
for (const name of lockHeart) write(name, HEARTBEAT);
for (const name of lockCog) write(name, ROTATE_CW);
for (const name of lockPop) write(name, SCALE_POP);
for (const name of lockAccessOff) write(name, SHAKE);

// Logic gates - scale pop (digital circuits)
const logicIcons = [
  "logic-and", "logic-buffer", "logic-nand", "logic-nor",
  "logic-not", "logic-or", "logic-xnor", "logic-xor",
];
for (const name of logicIcons) write(name, SCALE_POP);

// Login/logout - directional nudge
write("login", NUDGE_RIGHT);
write("login-2", NUDGE_RIGHT);
write("logout", NUDGE_RIGHT);
write("logout-2", NUDGE_RIGHT);

write("lollipop-off", SHAKE);
write("luggage-off", SHAKE);

// Lungs
write("lungs", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { duration: 0.8, ease: "easeInOut" },
  category: "feedback",
  tags: ["breath", "lungs", "health"],
};`);
write("lungs-off", SHAKE);

// ─── M icons ────────────────────────────────────────────────────────────────

write("macro", SCALE_EXPAND);
write("macro-off", SHAKE);
write("magnet-off", SHAKE);
write("magnetic", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 3, -2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["magnetic", "attract"],
};`);

// Mail extras (mail.ts, mail-open.ts etc. exist from lucide)
const mailDown = ["mail-down"];
const mailUp = ["mail-up"];
const mailShake = ["mail-cancel", "mail-off"];
const mailCoin = ["mail-dollar", "mail-bitcoin"];
const mailHeart = ["mail-heart"];
const mailCog = ["mail-cog"];
const mailPop = [
  "mail-ai", "mail-bolt", "mail-code", "mail-exclamation",
  "mail-fast", "mail-forward", "mail-opened", "mail-pause",
  "mail-pin", "mail-question", "mail-share", "mail-spark",
  "mail-star",
];

for (const name of mailDown) write(name, NUDGE_DOWN);
for (const name of mailUp) write(name, NUDGE_UP);
for (const name of mailShake) write(name, SHAKE);
for (const name of mailCoin) write(name, COIN_BOUNCE);
for (const name of mailHeart) write(name, HEARTBEAT);
for (const name of mailCog) write(name, ROTATE_CW);
for (const name of mailPop) write(name, SCALE_POP);

write("mailbox-off", SHAKE);
write("man", SCALE_POP);
write("manual-gearbox", ROTATE_CW);

// Map extras (map.ts already exists from lucide)
const mapDown = ["map-down", "map-pin-down"];
const mapUp = ["map-up", "map-pin-up"];
const mapShake = ["map-cancel", "map-off", "map-x", "map-pin-cancel"];
const mapCoin = ["map-dollar", "map-discount", "map-pin-dollar"];
const mapHeart = ["map-heart", "map-pin-heart"];
const mapCog = ["map-cog", "map-pin-cog"];
const mapPinNudge = ["map-pin-2", "map-pins"]; // pin drop
const mapPop = [
  "map-2", "map-bolt", "map-check", "map-code",
  "map-east", "map-exclamation", "map-lock",
  "map-north", "map-pause",
  "map-pin-bolt", "map-pin-code",
  "map-pin-exclamation", "map-pin-pause",
  "map-pin-pin", "map-pin-question",
  "map-pin-search", "map-pin-share",
  "map-pin-star",
  "map-question", "map-route", "map-search",
  "map-share", "map-shield", "map-south",
  "map-star", "map-west",
];

for (const name of mapDown) write(name, NUDGE_DOWN);
for (const name of mapUp) write(name, NUDGE_UP);
for (const name of mapShake) write(name, SHAKE);
for (const name of mapCoin) write(name, COIN_BOUNCE);
for (const name of mapHeart) write(name, HEARTBEAT);
for (const name of mapCog) write(name, ROTATE_CW);
for (const name of mapPinNudge) write(name, NUDGE_DOWN);
for (const name of mapPop) write(name, SCALE_POP);

// Markdown
write("markdown", SCALE_POP);
write("markdown-off", SHAKE);

// Marquee
write("marquee", ROTATE_SWING);
write("marquee-2", ROTATE_SWING);
write("marquee-off", SHAKE);

// Mask
write("mask", SCALE_POP);
write("mask-off", SHAKE);
write("masks-theater", SCALE_POP);
write("masks-theater-off", SHAKE);

// Massage / matchstick
write("massage", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["massage", "relax", "health"],
};`);
write("matchstick", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
  tags: ["fire", "light"],
};`);

// Math family - scale pop for most, shake for -off/-not
const mathShake = ["math-function-off", "math-not", "math-off"];
const mathPop = [
  "math", "math-1-divide-2", "math-1-divide-3", "math-avg",
  "math-cos", "math-ctg", "math-equal-greater", "math-equal-lower",
  "math-function", "math-function-y", "math-greater",
  "math-integral", "math-integral-x", "math-integrals",
  "math-lower", "math-max", "math-max-min", "math-min",
  "math-pi", "math-pi-divide-2", "math-sec", "math-sin",
  "math-symbols", "math-tg", "math-x-divide-2", "math-x-divide-y",
  "math-x-divide-y-2", "math-x-floor-divide-y", "math-x-minus-x",
  "math-x-minus-y", "math-x-plus-x", "math-x-plus-y",
  "math-xy", "math-y-minus-y", "math-y-plus-y",
];

for (const name of mathShake) write(name, SHAKE);
for (const name of mathPop) write(name, SCALE_POP);

// Matrix
write("matrix", SCALE_POP);

// Maximize off
write("maximize-off", SHAKE);

// Meat
write("meat", ROTATE_SWING);
write("meat-off", SHAKE);

// Medal-2 (medal.ts already exists)
write("medal-2", SCALE_EXPAND);

// Medical cross
write("medical-cross", SCALE_EXPAND);
write("medical-cross-circle", SCALE_EXPAND);
write("medical-cross-off", SHAKE);

write("medicine-syrup", NUDGE_DOWN);
write("meeple", SCALE_POP);
write("melon", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`);
write("menorah", SCALE_POP);

// Menu extras (menu.ts already exists from lucide)
const menuPop = ["menu-2", "menu-3", "menu-4", "menu-deep", "menu-order"];
for (const name of menuPop) write(name, SCALE_POP);

write("mesh", SCALE_POP);

// Message-2 family
const message2Down = ["message-2-down"];
const message2Up = ["message-2-up"];
const message2Shake = ["message-2-cancel", "message-2-off", "message-2-x"];
const message2Heart = ["message-2-heart"];
const message2Cog = ["message-2-cog"];
const message2Pop = [
  "message-2", "message-2-bolt", "message-2-check", "message-2-code",
  "message-2-dollar", "message-2-exclamation", "message-2-minus",
  "message-2-pause", "message-2-pin", "message-2-plus",
  "message-2-question", "message-2-search", "message-2-share",
  "message-2-star",
];

for (const name of message2Down) write(name, NUDGE_DOWN);
for (const name of message2Up) write(name, NUDGE_UP);
for (const name of message2Shake) write(name, SHAKE);
for (const name of message2Heart) write(name, HEARTBEAT);
for (const name of message2Cog) write(name, ROTATE_CW);
for (const name of message2Pop) write(name, SCALE_POP);

// Message family
const messageDown = ["message-down"];
const messageUp = ["message-up"];
const messageShake = ["message-cancel", "message-off", "message-report", "message-x", "messages-off"];
const messageHeart = ["message-heart"];
const messageCog = ["message-cog"];
const messagePop = [
  "message", "message-bolt", "message-chatbot", "message-check",
  "message-code", "message-dollar", "message-dots",
  "message-exclamation", "message-forward", "message-language",
  "message-minus", "message-pause", "message-pin", "message-plus",
  "message-question", "message-reply", "message-search",
  "message-share", "message-star", "message-user",
  "messages",
];

for (const name of messageDown) write(name, NUDGE_DOWN);
for (const name of messageUp) write(name, NUDGE_UP);
for (const name of messageShake) write(name, SHAKE);
for (const name of messageHeart) write(name, HEARTBEAT);
for (const name of messageCog) write(name, ROTATE_CW);
for (const name of messagePop) write(name, SCALE_POP);

// Message-circle family
const msgCircleDown = ["message-circle-down"];
const msgCircleUp = ["message-circle-up"];
const msgCircleShake = ["message-circle-cancel"];
const msgCircleHeart = []; // no heart variant
const msgCircleCog = ["message-circle-cog"];
const msgCircleCoin = ["message-circle-dollar"];
const msgCirclePop = [
  "message-circle-bolt", "message-circle-exclamation",
  "message-circle-minus", "message-circle-pause",
  "message-circle-pin", "message-circle-question",
  "message-circle-search", "message-circle-share",
  "message-circle-star", "message-circle-user",
];

for (const name of msgCircleDown) write(name, NUDGE_DOWN);
for (const name of msgCircleUp) write(name, NUDGE_UP);
for (const name of msgCircleShake) write(name, SHAKE);
for (const name of msgCircleCog) write(name, ROTATE_CW);
for (const name of msgCircleCoin) write(name, COIN_BOUNCE);
for (const name of msgCirclePop) write(name, SCALE_POP);

// Meteor
write("meteor", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 5, 0], y: [0, -5, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "navigation",
  tags: ["meteor", "shooting-star", "space"],
};`);
write("meteor-off", SHAKE);

// Meter
write("meter-cube", SCALE_POP);
write("meter-square", SCALE_POP);

// Michelin
write("michelin-bib-gourmand", SCALE_POP);
write("michelin-star", SCALE_EXPAND);
write("michelin-star-green", SCALE_EXPAND);

write("mickey", SCALE_POP);
write("microfrontends", PULSE);

// Microphone extras (microphone.ts already exists from lucide mapping as 'mic')
write("microphone", NUDGE_UP);
write("microphone-off", SHAKE);
write("microphone-2", NUDGE_UP);
write("microphone-2-off", SHAKE);

write("microscope-off", SHAKE);
write("microwave-off", SHAKE);
write("middleware", PULSE);
write("military-award", SCALE_EXPAND);
write("military-rank", SCALE_POP);
write("milkshake", ROTATE_SWING);
write("minus-vertical", SCALE_POP);
write("mist", PULSE);
write("mist-off", SHAKE);
write("mobiledata", PULSE);
write("mobiledata-off", SHAKE);

// Moneybag family
const moneyBagShake = ["moneybag-minus"];
const moneyBagHeart = ["moneybag-heart"];
const moneyBagPop = ["moneybag-edit", "moneybag-move-back"];
const moneyBagRight = ["moneybag-move"];
const moneyBagExpand = ["moneybag-plus"];

for (const name of moneyBagShake) write(name, SHAKE);
for (const name of moneyBagHeart) write(name, HEARTBEAT);
for (const name of moneyBagPop) write(name, SCALE_POP);
for (const name of moneyBagRight) write(name, NUDGE_RIGHT);
for (const name of moneyBagExpand) write(name, SCALE_EXPAND);

write("monkeybar", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 6, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 10 },
  category: "action",
  tags: ["gymnastics", "sport", "swing"],
};`);

// Mood family — semantic per emotion
write("mood-angry", SHAKE);
write("mood-wrrr", SHAKE);
write("mood-annoyed", SHAKE);
write("mood-annoyed-2", SHAKE);
write("mood-sad", MOOD_SAD);
write("mood-sad-2", MOOD_SAD);
write("mood-sad-dizzy", MOOD_SAD);
write("mood-sad-squint", MOOD_SAD);
write("mood-cry", MOOD_SAD);
write("mood-sick", SHAKE);
write("mood-off", SHAKE);
write("mood-x", SHAKE);
write("mood-happy", MOOD_HAPPY);
write("mood-crazy-happy", MOOD_HAPPY);
write("mood-smile", MOOD_HAPPY);
write("mood-smile-beam", MOOD_HAPPY);
write("mood-smile-dizzy", MOOD_HAPPY);
write("mood-wink", MOOD_HAPPY);
write("mood-wink-2", MOOD_HAPPY);
write("mood-tongue-wink", MOOD_HAPPY);
write("mood-tongue-wink-2", MOOD_HAPPY);
write("mood-tongue", MOOD_HAPPY);
write("mood-surprised", MOOD_SURPRISED);
write("mood-confuzed", MOOD_TILT);
write("mood-nervous", MOOD_TILT);
write("mood-puzzled", MOOD_TILT);
write("mood-nerd", SCALE_POP);
write("mood-empty", SCALE_POP);
write("mood-neutral", SCALE_POP);
write("mood-unamused", SCALE_POP);
write("mood-silence", SCALE_POP);
write("mood-boy", SCALE_POP);
write("mood-kid", SCALE_POP);
write("mood-spark", PULSE);
write("mood-sing", SCALE_EXPAND);
write("mood-look-down", NUDGE_DOWN);
write("mood-look-up", NUDGE_UP);
write("mood-look-left", NUDGE_LEFT);
write("mood-look-right", NUDGE_RIGHT);
write("mood-up", NUDGE_UP);
write("mood-bitcoin", COIN_BOUNCE);
write("mood-dollar", COIN_BOUNCE);
write("mood-check", SCALE_POP);
write("mood-cog", ROTATE_CW);
write("mood-edit", SCALE_POP);
write("mood-heart", HEARTBEAT);
write("mood-minus", SCALE_POP);
write("mood-pin", NUDGE_DOWN);
write("mood-plus", SCALE_EXPAND);
write("mood-search", SCALE_POP);
write("mood-share", NUDGE_RIGHT);

// Moon extras (moon.ts already exists)
write("moon-2", ROTATE_CW);
write("moon-off", SHAKE);
write("moon-stars", SCALE_POP);

// Vehicles
write("moped", DRIVE_RIGHT);
write("motorbike", DRIVE_RIGHT);

// Mountain
write("mountain", NUDGE_UP);
write("mountain-off", SHAKE);

// Mouse extras (mouse.ts already exists? check lucide...)
write("mouse", SCALE_POP);
write("mouse-2", SCALE_POP);
write("mouse-off", SHAKE);

write("moustache", ROTATE_SWING);
write("movie", SCALE_POP);
write("movie-off", SHAKE);
write("mug", FLOAT_UP);
write("mug-off", SHAKE);

// Multiplier family
const multiplierIcons = ["multiplier-0-5x", "multiplier-1x", "multiplier-1-5x", "multiplier-2x"];
for (const name of multiplierIcons) write(name, SCALE_POP);

// Mushroom
write("mushroom", FLOAT_UP);
write("mushroom-off", SHAKE);

// Music extras (music.ts already exists)
const musicDown = ["music-down"];
const musicUp = ["music-up"];
const musicShake = ["music-cancel", "music-off", "music-x"];
const musicHeart = ["music-heart"];
const musicCog = ["music-cog"];
const musicCoin = ["music-dollar", "music-discount"];
const musicPop = [
  "music", "music-bolt", "music-check", "music-code",
  "music-exclamation", "music-minus", "music-pause",
  "music-pin", "music-plus", "music-question",
  "music-search", "music-share", "music-star",
];

for (const name of musicDown) write(name, NUDGE_DOWN);
for (const name of musicUp) write(name, NUDGE_UP);
for (const name of musicShake) write(name, SHAKE);
for (const name of musicHeart) write(name, HEARTBEAT);
for (const name of musicCog) write(name, ROTATE_CW);
for (const name of musicCoin) write(name, COIN_BOUNCE);
for (const name of musicPop) write(name, SCALE_POP);

console.log("\nDone!");
