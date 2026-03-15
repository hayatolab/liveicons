/**
 * Creates animation defs for tabler stroke icons N–R
 * Usage: pnpm tsx scripts/create-tabler-nr-animations.ts
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

const PHONE_RING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, -10, 10, -5, 5, 0] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
  tags: ["phone", "ring", "call"],
};`;

// ─── N icons ────────────────────────────────────────────────────────────────

// Navigation family (tabler variants)
const navShake = ["navigation-cancel", "navigation-off", "navigation-x"];
const navDown = ["navigation-down", "navigation-south"];
const navUp = ["navigation-up", "navigation-north", "navigation-top"];
const navEast = ["navigation-east"];
const navWest = ["navigation-west"];
const navHeart = ["navigation-heart"];
const navCoin = ["navigation-dollar", "navigation-discount"];
const navCog = ["navigation-cog"];
const navPulse = ["navigation-search"];
const navPop = [
  "navigation-bolt", "navigation-check", "navigation-code",
  "navigation-exclamation", "navigation-minus", "navigation-pause",
  "navigation-pin", "navigation-plus", "navigation-question",
  "navigation-share", "navigation-star",
];

for (const name of navShake) write(name, SHAKE);
for (const name of navDown) write(name, NUDGE_DOWN);
for (const name of navUp) write(name, NUDGE_UP);
for (const name of navEast) write(name, NUDGE_RIGHT);
for (const name of navWest) write(name, NUDGE_LEFT);
for (const name of navHeart) write(name, HEARTBEAT);
for (const name of navCoin) write(name, COIN_BOUNCE);
for (const name of navCog) write(name, ROTATE_CW);
for (const name of navPulse) write(name, PULSE);
for (const name of navPop) write(name, SCALE_POP);

write("needle", ROTATE_SWING);
write("needle-thread", ROTATE_SWING);

write("network-off", SHAKE);

write("new-section", SCALE_POP);

write("news", SCALE_POP);
write("news-off", SHAKE);

write("nfc-off", SHAKE);

write("no-copyright", SHAKE);
write("no-creative-commons", SHAKE);
write("no-derivatives", SHAKE);

write("north-star", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["star", "sparkle", "glow"],
};`);

write("note", SCALE_POP);
write("note-off", SHAKE);
write("notebook-off", SHAKE);
write("notes", SCALE_POP);
write("notes-off", SHAKE);

write("notification", PULSE);
write("notification-off", SHAKE);

// Number family — all scale pop
const numberNames: string[] = [];
for (let i = 0; i <= 9; i++) {
  numberNames.push(`number-${i}`);
  for (let j = 0; j <= 99; j++) {
    numberNames.push(`number-${j}-small`);
    break; // placeholder: we'll generate all -small below
  }
}
// Actually generate all properly
for (let i = 0; i <= 9; i++) write(`number-${i}`, SCALE_POP);
for (let i = 10; i <= 99; i++) write(`number-${i}`, SCALE_POP);
for (let i = 0; i <= 99; i++) write(`number-${i}-small`, SCALE_POP);
write("number-100-small", SCALE_POP);
write("number-123", SCALE_POP);
write("number", SCALE_POP);
write("numbers", SCALE_POP);

write("nurse", SCALE_POP);

// ─── O icons ────────────────────────────────────────────────────────────────

write("object-scan", PULSE);

// Octagon variants (octagon, octagon-alert, octagon-minus, octagon-pause, octagon-x already have defs)
write("octagon-minus-2", SCALE_POP);
write("octagon-off", SHAKE);
write("octagon-plus", SCALE_EXPAND);
write("octagon-plus-2", SCALE_EXPAND);

// Octahedron (3D shape)
write("octahedron", ROTATE_CW);
write("octahedron-off", SHAKE);
write("octahedron-plus", SCALE_EXPAND);

write("old", SCALE_POP);

write("olympics", SCALE_POP);
write("olympics-off", SHAKE);

write("om", ROTATE_SWING);

write("outbound", NUDGE_RIGHT);
write("outlet", SCALE_POP);
write("oval", SCALE_POP);
write("oval-vertical", SCALE_POP);
write("overline", SCALE_POP);

// ─── P icons ────────────────────────────────────────────────────────────────

write("pacman", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10 },
  category: "action",
  tags: ["game", "arcade", "eat"],
};`);

write("page-break", SCALE_POP);

write("paint", ROTATE_SWING);
write("paint-off", SHAKE);

write("palette-off", SHAKE);

write("panorama-horizontal", SCALE_POP);
write("panorama-horizontal-off", SHAKE);
write("panorama-vertical", SCALE_POP);
write("panorama-vertical-off", SHAKE);

write("paper-bag", NUDGE_DOWN);
write("paper-bag-off", SHAKE);

write("parachute", FLOAT_UP);
write("parachute-off", SHAKE);

write("parentheses-off", SHAKE);

write("parking", SCALE_POP);
write("parking-circle", SCALE_POP);
write("parking-off", SHAKE);

write("password", SCALE_POP);
write("password-fingerprint", PULSE);
write("password-mobile-phone", SCALE_POP);
write("password-user", SCALE_POP);

write("paw", SCALE_POP);
write("paw-off", SHAKE);

write("paywall", SCALE_POP);
write("pdf", SCALE_POP);
write("peace", ROTATE_SWING);

// Pencil family (tabler variants) - pencil.ts and pencil-off.ts already exist
const pencilShake = ["pencil-cancel", "pencil-off", "pencil-x"];
const pencilDown = ["pencil-down"];
const pencilUp = ["pencil-up"];
const pencilHeart = ["pencil-heart"];
const pencilCoin = ["pencil-dollar", "pencil-discount"];
const pencilCog = ["pencil-cog"];
const pencilPop = [
  "pencil-bolt", "pencil-check", "pencil-code",
  "pencil-exclamation", "pencil-minus", "pencil-pause",
  "pencil-pin", "pencil-plus", "pencil-question",
  "pencil-search", "pencil-share", "pencil-star",
];

for (const name of pencilShake) write(name, SHAKE);
for (const name of pencilDown) write(name, NUDGE_DOWN);
for (const name of pencilUp) write(name, NUDGE_UP);
for (const name of pencilHeart) write(name, HEARTBEAT);
for (const name of pencilCoin) write(name, COIN_BOUNCE);
for (const name of pencilCog) write(name, ROTATE_CW);
for (const name of pencilPop) write(name, SCALE_POP);

write("pennant", ROTATE_SWING);
write("pennant-2", ROTATE_SWING);
write("pennant-off", SHAKE);

// Pentagon family (pentagon.ts already exists)
write("pentagon-minus", SHAKE);
for (let i = 0; i <= 9; i++) write(`pentagon-number-${i}`, SCALE_POP);
write("pentagon-off", SHAKE);
write("pentagon-plus", SCALE_EXPAND);
write("pentagon-x", SHAKE);
write("pentagram", ROTATE_SWING);

write("pepper", ROTATE_SWING);
write("pepper-off", SHAKE);

// Percentage family
const percentages = [0, 10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100];
for (const p of percentages) write(`percentage-${p}`, SCALE_POP);
write("percentage", SCALE_POP);

write("perfume", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["spray", "scent", "fragrance"],
};`);

write("perspective", ROTATE_CW);
write("perspective-off", SHAKE);

// Phone variants (phone.ts, phone-call.ts etc. already exist)
const phoneShake = ["phone-off", "phone-x"];
const phoneRing = ["phone-ringing", "phone-calling", "phone-spark"];
const phonePop = [
  "phone-check", "phone-done", "phone-end",
  "phone-incoming", "phone-outgoing", "phone-pause", "phone-plus",
];

for (const name of phoneShake) write(name, SHAKE);
for (const name of phoneRing) write(name, PHONE_RING);
for (const name of phonePop) write(name, SCALE_POP);

// Photo family (large variant set)
const photoShake = [
  "photo-cancel", "photo-off", "photo-x",
];
const photoDown = ["photo-down"];
const photoUp = ["photo-up"];
const photoHeart = ["photo-heart"];
const photoCoin = ["photo-dollar", "photo-bitcoin"];
const photoCog = ["photo-cog"];
const photoPulse = [
  "photo-ai", "photo-scan", "photo-search", "photo-spark", "photo-sensor",
  "photo-sensor-2", "photo-sensor-3",
];
const photoExpand = ["photo-circle-plus", "photo-hexagon", "photo-pentagon", "photo-square-rounded", "photo-circle"];
const photoPop = [
  "photo", "photo-bolt", "photo-check", "photo-code",
  "photo-edit", "photo-exclamation", "photo-minus",
  "photo-pause", "photo-pin", "photo-plus", "photo-question",
  "photo-share", "photo-shield", "photo-star",
  "photo-video", "photo-circle-minus",
];

for (const name of photoShake) write(name, SHAKE);
for (const name of photoDown) write(name, NUDGE_DOWN);
for (const name of photoUp) write(name, NUDGE_UP);
for (const name of photoHeart) write(name, HEARTBEAT);
for (const name of photoCoin) write(name, COIN_BOUNCE);
for (const name of photoCog) write(name, ROTATE_CW);
for (const name of photoPulse) write(name, PULSE);
for (const name of photoExpand) write(name, SCALE_EXPAND);
for (const name of photoPop) write(name, SCALE_POP);

write("physotherapist", SCALE_POP);

write("pick", ROTATE_SWING);
write("picnic-table", SCALE_POP);

// Picture-in-picture variants (picture-in-picture.ts already exists)
write("picture-in-picture-off", SHAKE);
write("picture-in-picture-on", SCALE_EXPAND);
write("picture-in-picture-top", NUDGE_UP);

write("pig", FLOAT_UP);
write("pig-money", COIN_BOUNCE);
write("pig-off", SHAKE);

write("pill-off", SHAKE);
write("pills", SCALE_POP);

write("pin-end", NUDGE_DOWN);
write("pin-invoke", SCALE_POP);

write("ping-pong", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, -5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["sport", "table-tennis", "game"],
};`);

write("pinned", NUDGE_DOWN);
write("pinned-off", SHAKE);

write("pizza-off", SHAKE);
write("placeholder", SCALE_POP);

// Plane variants (plane.ts, plane-landing.ts, plane-takeoff.ts already exist)
write("plane-arrival", NUDGE_DOWN);
write("plane-departure", NUDGE_UP);
write("plane-inflight", NUDGE_RIGHT);
write("plane-off", SHAKE);
write("plane-tilt", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "navigation",
  tags: ["plane", "tilt", "fly"],
};`);

write("planet", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 3, ease: "linear" },
  category: "action",
  tags: ["planet", "orbit", "space"],
};`);
write("planet-off", SHAKE);

// Plant family
write("plant", ROTATE_SWING);
write("plant-2", ROTATE_SWING);
write("plant-off", SHAKE);
write("plant-2-off", SHAKE);

// Play sports (play.ts already exists)
write("play-basketball", FLOAT_UP);
write("play-football", FLOAT_UP);
write("play-handball", FLOAT_UP);
write("play-volleyball", FLOAT_UP);

// Play card family
for (let i = 1; i <= 10; i++) write(`play-card-${i}`, SCALE_POP);
for (const f of ["a", "j", "q", "k"]) write(`play-card-${f}`, SCALE_POP);
write("play-card", SCALE_POP);
write("play-card-off", SHAKE);
write("play-card-star", SCALE_EXPAND);

// Player family
write("player-eject", NUDGE_UP);
write("player-pause", SCALE_POP);
write("player-play", SCALE_EXPAND);
write("player-record", PULSE);
write("player-skip-back", NUDGE_LEFT);
write("player-skip-forward", NUDGE_RIGHT);
write("player-stop", SCALE_POP);
write("player-track-next", NUDGE_RIGHT);
write("player-track-prev", NUDGE_LEFT);

// Playlist family
write("playlist", SCALE_POP);
write("playlist-add", SCALE_EXPAND);
write("playlist-off", SHAKE);
write("playlist-x", SHAKE);

// Playstation buttons
write("playstation-circle", SCALE_POP);
write("playstation-square", SCALE_POP);
write("playstation-triangle", SCALE_POP);
write("playstation-x", SHAKE);

// Plug variants (plug.ts already exists)
write("plug-connected", SCALE_POP);
write("plug-connected-x", SHAKE);
write("plug-off", SHAKE);
write("plug-x", SHAKE);

write("plus-equal", SCALE_POP);
write("plus-minus", SCALE_POP);
write("png", SCALE_POP);

write("podium", SCALE_EXPAND);
write("podium-off", SHAKE);

write("point", SCALE_POP);
write("point-off", SHAKE);

// Pointer family (pointer.ts, pointer-off.ts already exist)
const pointerShake = ["pointer-cancel", "pointer-off", "pointer-x"];
const pointerDown = ["pointer-down"];
const pointerUp = ["pointer-up"];
const pointerHeart = ["pointer-heart"];
const pointerCoin = ["pointer-dollar", "pointer-discount"];
const pointerCog = ["pointer-cog"];
const pointerPop = [
  "pointer-bolt", "pointer-check", "pointer-code",
  "pointer-exclamation", "pointer-minus", "pointer-pause",
  "pointer-pin", "pointer-plus", "pointer-question",
  "pointer-search", "pointer-share", "pointer-star",
];

for (const name of pointerShake) write(name, SHAKE);
for (const name of pointerDown) write(name, NUDGE_DOWN);
for (const name of pointerUp) write(name, NUDGE_UP);
for (const name of pointerHeart) write(name, HEARTBEAT);
for (const name of pointerCoin) write(name, COIN_BOUNCE);
for (const name of pointerCog) write(name, ROTATE_CW);
for (const name of pointerPop) write(name, SCALE_POP);

write("pokeball", ROTATE_CW);
write("pokeball-off", SHAKE);
write("poker-chip", SPIN_LOOP);
write("polaroid", SCALE_POP);
write("polygon", ROTATE_SWING);
write("polygon-off", SHAKE);
write("poo", ROTATE_SWING);
write("pool", SCALE_POP);
write("pool-off", SHAKE);
write("pray", SCALE_POP);
write("premium-rights", SCALE_EXPAND);
write("prescription", SCALE_POP);

write("presentation-analytics", SCALE_POP);
write("presentation-off", SHAKE);

write("printer-off", SHAKE);

write("prism", ROTATE_CW);
write("prism-light", PULSE);
write("prism-off", SHAKE);
write("prism-plus", SCALE_EXPAND);

write("prison", SHAKE);

// Progress family
write("progress", SCALE_POP);
write("progress-alert", PULSE);
write("progress-bolt", PULSE);
write("progress-check", SCALE_POP);
write("progress-down", NUDGE_DOWN);
write("progress-help", SCALE_POP);
write("progress-x", SHAKE);

write("prompt", SCALE_POP);
write("prong", SCALE_POP);

write("propeller", SPIN_LOOP);
write("propeller-off", SHAKE);

write("protocol", SCALE_POP);
write("pumpkin-scary", ROTATE_SWING);

write("puzzle-2", ROTATE_CW);
write("puzzle-off", SHAKE);

// Pyramid variants (pyramid.ts already exists)
write("pyramid-off", SHAKE);
write("pyramid-plus", SCALE_EXPAND);

// ─── Q icons ────────────────────────────────────────────────────────────────

write("qrcode", SCALE_POP);
write("qrcode-off", SHAKE);

write("question-mark", ROTATE_SWING);

write("queue-pop-in", NUDGE_DOWN);
write("queue-pop-out", NUDGE_UP);

write("quote-off", SHAKE);
write("quotes", SCALE_POP);

// ─── R icons ────────────────────────────────────────────────────────────────

// Radar variants (radar.ts already exists)
write("radar-2", SPIN_LOOP);
write("radar-off", SHAKE);

write("radio-off", SHAKE);

write("radioactive", PULSE);
write("radioactive-off", SHAKE);

// Radius corners
write("radius-bottom-left", SCALE_POP);
write("radius-bottom-right", SCALE_POP);
write("radius-top-left", SCALE_POP);
write("radius-top-right", SCALE_POP);

write("rainbow-off", SHAKE);

// Rating badges
const ratings = ["rating-12-plus", "rating-14-plus", "rating-16-plus", "rating-18-plus", "rating-21-plus"];
for (const name of ratings) write(name, SCALE_POP);

write("razor", ROTATE_SWING);
write("razor-electric", SPIN_LOOP);

// Receipt variants (receipt.ts, receipt-euro.ts etc. already exist)
write("receipt-2", NUDGE_DOWN);
write("receipt-bitcoin", COIN_BOUNCE);
write("receipt-dollar", COIN_BOUNCE);
write("receipt-off", SHAKE);
write("receipt-pound", COIN_BOUNCE);
write("receipt-refund", NUDGE_UP);
write("receipt-rupee", COIN_BOUNCE);
write("receipt-tax", NUDGE_DOWN);
write("receipt-yen", COIN_BOUNCE);
write("receipt-yuan", COIN_BOUNCE);

write("recharging", PULSE);

write("record-mail", SCALE_POP);
write("record-mail-off", SHAKE);

// Rectangle variants (rectangle-vertical.ts already exists)
write("rectangle", SCALE_POP);
write("rectangle-rounded-bottom", SCALE_POP);
write("rectangle-rounded-top", SCALE_POP);

// Rectangular prism (3D shape)
write("rectangular-prism", ROTATE_CW);
write("rectangular-prism-off", SHAKE);
write("rectangular-prism-plus", SCALE_EXPAND);

write("recycle-off", SHAKE);

// Refresh variants (refresh-cw.ts, refresh-ccw.ts etc. already exist)
write("refresh", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 150, damping: 15 },
  category: "action",
  tags: ["refresh", "reload", "sync"],
};`);
write("refresh-alert", SHAKE);
write("refresh-dot", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 150, damping: 15 },
  category: "action",
};`);
write("refresh-off", SHAKE);

write("regex-off", SHAKE);
write("registered", SCALE_POP);

// Relation diagrams
write("relation-many-to-many", SCALE_POP);
write("relation-one-to-many", SCALE_POP);
write("relation-one-to-one", SCALE_POP);

write("reload", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 150, damping: 15 },
  category: "action",
  tags: ["reload", "refresh"],
};`);

write("reorder", SCALE_POP);

// Repeat variants (repeat.ts, repeat-1.ts etc. already exist)
write("repeat-off", SHAKE);
write("repeat-once", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 150, damping: 15 },
  category: "action",
};`);

// Replace variants (replace.ts already exists)
write("replace-off", SHAKE);
write("replace-user", SCALE_POP);

// Report family
write("report", SCALE_POP);
write("report-analytics", SCALE_POP);
write("report-medical", SCALE_POP);
write("report-money", COIN_BOUNCE);
write("report-off", SHAKE);
write("report-search", PULSE);

write("reserved-line", SCALE_POP);
write("resize", SCALE_EXPAND);
write("restore", NUDGE_UP);

// Rewind family — backward = nudge left, forward = nudge right
const rewindBackwards = [5, 10, 15, 20, 30, 40, 50, 60];
const rewindForwards = [5, 10, 15, 20, 30, 40, 50, 60];
for (const t of rewindBackwards) write(`rewind-backward-${t}`, NUDGE_LEFT);
for (const t of rewindForwards) write(`rewind-forward-${t}`, NUDGE_RIGHT);

write("ribbon-health", HEARTBEAT);
write("rings", SCALE_POP);

// Ripple family — pulse (sound/water wave)
write("ripple", PULSE);
write("ripple-down", NUDGE_DOWN);
write("ripple-off", SHAKE);
write("ripple-up", NUDGE_UP);

write("road", NUDGE_RIGHT);
write("road-off", SHAKE);
write("road-sign", SCALE_POP);

write("robot", SCALE_POP);
write("robot-face", SCALE_POP);
write("robot-off", SHAKE);

// Rocket variants (rocket.ts already exists)
write("rocket-off", SHAKE);

write("roller-skating", DRIVE_RIGHT);
write("rollercoaster", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 4, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 10 },
  category: "action",
  tags: ["coaster", "ride", "fun"],
};`);
write("rollercoaster-off", SHAKE);

// Rosette family
write("rosette", ROTATE_SWING);
write("rosette-asterisk", SCALE_EXPAND);
write("rosette-discount", SCALE_POP);
write("rosette-discount-check", SCALE_EXPAND);
write("rosette-discount-check-off", SHAKE);
write("rosette-discount-off", SHAKE);
for (let i = 0; i <= 9; i++) write(`rosette-number-${i}`, SCALE_POP);

// Rotate family (rotate-3d.ts, rotate-ccw.ts, rotate-cw.ts etc. already exist)
write("rotate", ROTATE_CW);
write("rotate-2", ROTATE_CW);
write("rotate-360", SPIN_LOOP);
write("rotate-clockwise", ROTATE_CW);
write("rotate-clockwise-2", ROTATE_CW);
write("rotate-dot", ROTATE_CW);
write("rotate-rectangle", ROTATE_CW);

// Route variants (route.ts, route-off.ts already exist)
write("route-2", NUDGE_RIGHT);
write("route-alt-left", NUDGE_LEFT);
write("route-alt-right", NUDGE_RIGHT);
write("route-scan", PULSE);
write("route-square", SCALE_POP);
write("route-square-2", SCALE_POP);
write("route-x", SHAKE);
write("route-x-2", SHAKE);

// Router variants (router.ts already exists)
write("router-off", SHAKE);

// Row operations
write("row-insert-bottom", NUDGE_DOWN);
write("row-insert-top", NUDGE_UP);
write("row-remove", SHAKE);

// Rubber stamp
write("rubber-stamp", `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10 },
  category: "action",
  tags: ["stamp", "approve", "mark"],
};`);
write("rubber-stamp-off", SHAKE);

// Ruler variants (ruler.ts already exists)
write("ruler-2", SCALE_POP);
write("ruler-2-off", SHAKE);
write("ruler-3", SCALE_POP);
write("ruler-measure", SCALE_POP);
write("ruler-measure-2", SCALE_POP);
write("ruler-off", SHAKE);

write("run", DRIVE_RIGHT);
write("rv-truck", DRIVE_RIGHT);

console.log("\nDone! N–R tabler animation defs created.");
