/**
 * Creates animation defs for tabler-exclusive icons A–D
 * Usage: pnpm tsx scripts/create-tabler-ad-animations.ts
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

const NUDGE_DOWN_LEFT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_DOWN_RIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_UP_LEFT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`;

const NUDGE_UP_RIGHT = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
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

const SCALE_SHRINK = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.85, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 },
  category: "action",
};`;

const ALARM_RING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.05, 1.1, 1], rotate: [0, -5, 5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`;

const BELL_RING = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
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

const COIN_BOUNCE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10, mass: 0.5 },
  category: "action",
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

const SCALE_POP = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: {},
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 },
};`;

// ─── A–B ────────────────────────────────────────────────────────────────────

// a-b: text swap animation, scale pop
write("a-b", SCALE_POP);
write("a-b-2", SCALE_POP);
write("a-b-off", SHAKE);

// abacus
write("abacus", NUDGE_RIGHT); // slide beads right
write("abacus-off", SHAKE);

// abc: text/alphabet
write("abc", SCALE_POP);

// access-point: wireless signal pulse
write("access-point", PULSE);
write("access-point-off", SHAKE);

// accessible: accessibility
write("accessible", SCALE_POP);
write("accessible-off", SHAKE);

// activity-heartbeat
write("activity-heartbeat", HEARTBEAT);

// ad: advertisement
write("ad", SCALE_POP);
write("ad-2", SCALE_POP);
write("ad-circle", SCALE_POP);
write("ad-circle-off", SHAKE);
write("ad-off", SHAKE);

// address-book
write("address-book", NUDGE_UP); // open book
write("address-book-off", SHAKE);

// adjustments family: settings/sliders → small rotate
for (const variant of [
  "adjustments", "adjustments-alt", "adjustments-horizontal",
  "adjustments-bolt", "adjustments-check", "adjustments-code",
  "adjustments-cog", "adjustments-dollar", "adjustments-exclamation",
  "adjustments-heart", "adjustments-minus", "adjustments-pin",
  "adjustments-plus", "adjustments-question", "adjustments-search",
  "adjustments-share", "adjustments-spark", "adjustments-star",
]) {
  write(variant, ROTATE_CW);
}
write("adjustments-down", NUDGE_DOWN);
write("adjustments-up", NUDGE_UP);
write("adjustments-off", SHAKE);
write("adjustments-cancel", SHAKE);
write("adjustments-pause", SHAKE);
write("adjustments-x", SHAKE);

// aerial-lift: float up
write("aerial-lift", FLOAT_UP);

// affiliate: network/connection
write("affiliate", PULSE);

// ai family: pulse (neural/processing)
write("ai", PULSE);
write("ai-agent", PULSE);
write("ai-agents", PULSE);
write("ai-gateway", PULSE);

// air-balloon: float up
write("air-balloon", FLOAT_UP);

// air-conditioning
write("air-conditioning", ROTATE_SWING);
write("air-conditioning-disabled", SHAKE);

// air-traffic-control: rotate like radar
write("air-traffic-control", SPIN_360);

// alarm family (tabler-specific "alarm" without "-clock" suffix)
write("alarm", ALARM_RING);
write("alarm-average", ALARM_RING);
write("alarm-minus", ALARM_RING);
write("alarm-plus", ALARM_RING);
write("alarm-snooze", ALARM_RING);
write("alarm-off", SHAKE);

// album
write("album", NUDGE_UP); // open
write("album-off", SHAKE);

// alert family: shake
for (const variant of [
  "alert-circle-off", "alert-hexagon", "alert-hexagon-off",
  "alert-octagon", "alert-small", "alert-small-off",
  "alert-square", "alert-square-rounded", "alert-square-rounded-off",
  "alert-triangle", "alert-triangle-off",
]) {
  write(variant, SHAKE);
}

// alien: float + wobble
write("alien", FLOAT_UP);

// align-box family: nudge in direction based on box position
const alignNudges: Record<string, string> = {
  "align-box-bottom-center": NUDGE_DOWN,
  "align-box-bottom-left": NUDGE_DOWN_LEFT,
  "align-box-bottom-right": NUDGE_DOWN_RIGHT,
  "align-box-center-bottom": NUDGE_DOWN,
  "align-box-center-middle": SCALE_POP,
  "align-box-center-stretch": SCALE_EXPAND,
  "align-box-center-top": NUDGE_UP,
  "align-box-left-bottom": NUDGE_DOWN_LEFT,
  "align-box-left-middle": NUDGE_LEFT,
  "align-box-left-stretch": NUDGE_LEFT,
  "align-box-left-top": NUDGE_UP_LEFT,
  "align-box-right-bottom": NUDGE_DOWN_RIGHT,
  "align-box-right-middle": NUDGE_RIGHT,
  "align-box-right-stretch": NUDGE_RIGHT,
  "align-box-right-top": NUDGE_UP_RIGHT,
  "align-box-top-center": NUDGE_UP,
  "align-box-top-left": NUDGE_UP_LEFT,
  "align-box-top-right": NUDGE_UP_RIGHT,
};
for (const [name, anim] of Object.entries(alignNudges)) {
  write(name, anim);
}

// align text
write("align-center", SCALE_POP);
write("align-justified", SCALE_POP);
write("align-left", NUDGE_LEFT);
write("align-left-2", NUDGE_LEFT);
write("align-right", NUDGE_RIGHT);
write("align-right-2", NUDGE_RIGHT);

// alphabet/alpha: language
write("alpha", SCALE_POP);
for (const lang of [
  "arabic", "bangla", "cyrillic", "greek", "hebrew",
  "korean", "latin", "polish", "runes", "thai",
]) {
  write(`alphabet-${lang}`, SCALE_POP);
}

// alt
write("alt", SCALE_POP);

// ampersand
write("ampersand", ROTATE_SWING);

// analyze
write("analyze", PULSE);
write("analyze-off", SHAKE);

// anchor-off
write("anchor-off", SHAKE);

// angle
write("angle", ROTATE_CW);

// ankh
write("ankh", SCALE_POP);

// antenna-bars: signal strength pulse
for (let i = 1; i <= 5; i++) {
  write(`antenna-bars-${i}`, PULSE);
}
write("antenna-bars-off", SHAKE);
write("antenna-off", SHAKE);
write("antenna", PULSE);

// aperture-off
write("aperture-off", SHAKE);

// api family
write("api", PULSE);
write("api-app", PULSE);
write("api-app-off", SHAKE);
write("api-book", NUDGE_UP);
write("api-off", SHAKE);

// app-window
write("app-window", SCALE_POP);

// apple
write("apple", NUDGE_DOWN); // apple falls down

// apps
write("apps", SCALE_POP);
write("apps-off", SHAKE);

// archery-arrow
write("archery-arrow", NUDGE_RIGHT);

// archive-off
write("archive-off", SHAKE);

// armchair family
write("armchair", SCALE_POP);
write("armchair-2", SCALE_POP);
write("armchair-off", SHAKE);
write("armchair-2-off", SHAKE);

// ─── Arrow family ─────────────────────────────────────────────────────────────

// arrow-autofit family
write("arrow-autofit-content", SCALE_EXPAND);
write("arrow-autofit-down", NUDGE_DOWN);
write("arrow-autofit-height", SCALE_EXPAND);
write("arrow-autofit-left", NUDGE_LEFT);
write("arrow-autofit-right", NUDGE_RIGHT);
write("arrow-autofit-up", NUDGE_UP);
write("arrow-autofit-width", SCALE_EXPAND);

// arrow-back: go back (left)
write("arrow-back", NUDGE_LEFT);
write("arrow-back-up", NUDGE_LEFT);
write("arrow-back-up-double", NUDGE_LEFT);

// arrow-badge
write("arrow-badge-down", NUDGE_DOWN);
write("arrow-badge-left", NUDGE_LEFT);
write("arrow-badge-right", NUDGE_RIGHT);
write("arrow-badge-up", NUDGE_UP);

// arrow-bar
write("arrow-bar-both", SCALE_EXPAND);
write("arrow-bar-down", NUDGE_DOWN);
write("arrow-bar-left", NUDGE_LEFT);
write("arrow-bar-right", NUDGE_RIGHT);
write("arrow-bar-to-down", NUDGE_DOWN);
write("arrow-bar-to-down-dashed", NUDGE_DOWN);
write("arrow-bar-to-left", NUDGE_LEFT);
write("arrow-bar-to-left-dashed", NUDGE_LEFT);
write("arrow-bar-to-right", NUDGE_RIGHT);
write("arrow-bar-to-right-dashed", NUDGE_RIGHT);
write("arrow-bar-to-up", NUDGE_UP);
write("arrow-bar-to-up-dashed", NUDGE_UP);
write("arrow-bar-up", NUDGE_UP);

// arrow-bear (turning arrows)
write("arrow-bear-left", NUDGE_LEFT);
write("arrow-bear-left-2", NUDGE_LEFT);
write("arrow-bear-right", NUDGE_RIGHT);
write("arrow-bear-right-2", NUDGE_RIGHT);

// arrow-big line/lines variants (same direction as base)
write("arrow-big-down-line", NUDGE_DOWN);
write("arrow-big-down-lines", NUDGE_DOWN);
write("arrow-big-left-line", NUDGE_LEFT);
write("arrow-big-left-lines", NUDGE_LEFT);
write("arrow-big-right-line", NUDGE_RIGHT);
write("arrow-big-right-lines", NUDGE_RIGHT);
write("arrow-big-up-line", NUDGE_UP);
write("arrow-big-up-lines", NUDGE_UP);

// arrow-bounce: spring bounce
write("arrow-bounce", SCALE_POP);

// arrow-capsule: right direction
write("arrow-capsule", NUDGE_RIGHT);

// arrow-curve
write("arrow-curve-left", NUDGE_LEFT);
write("arrow-curve-right", NUDGE_RIGHT);

// arrow-down variants
write("arrow-down-bar", NUDGE_DOWN);
write("arrow-down-circle", NUDGE_DOWN);
write("arrow-down-dashed", NUDGE_DOWN);
write("arrow-down-from-arc", NUDGE_DOWN);
write("arrow-down-left-circle", NUDGE_DOWN_LEFT);
write("arrow-down-rhombus", NUDGE_DOWN);
write("arrow-down-right-circle", NUDGE_DOWN_RIGHT);
write("arrow-down-square", NUDGE_DOWN);
write("arrow-down-tail", NUDGE_DOWN);
write("arrow-down-to-arc", NUDGE_DOWN);

// arrow-elbow
write("arrow-elbow-left", NUDGE_LEFT);
write("arrow-elbow-right", NUDGE_RIGHT);

// arrow-fork: split outward
write("arrow-fork", SCALE_EXPAND);

// arrow-forward
write("arrow-forward", NUDGE_RIGHT);
write("arrow-forward-up", NUDGE_UP_RIGHT);
write("arrow-forward-up-double", NUDGE_UP_RIGHT);

// arrow-guide
write("arrow-guide", NUDGE_RIGHT);

// arrow-iteration: rotate
write("arrow-iteration", ROTATE_CW);

// arrow-left variants
write("arrow-left-bar", NUDGE_LEFT);
write("arrow-left-circle", NUDGE_LEFT);
write("arrow-left-dashed", NUDGE_LEFT);
write("arrow-left-from-arc", NUDGE_LEFT);
write("arrow-left-rhombus", NUDGE_LEFT);
write("arrow-left-square", NUDGE_LEFT);
write("arrow-left-tail", NUDGE_LEFT);
write("arrow-left-to-arc", NUDGE_LEFT);

// arrow-loop: rotate
write("arrow-loop-left", ROTATE_CW);
write("arrow-loop-left-2", ROTATE_CW);
write("arrow-loop-right", ROTATE_CW);
write("arrow-loop-right-2", ROTATE_CW);

// arrow-merge
write("arrow-merge", SCALE_SHRINK);
write("arrow-merge-alt-left", NUDGE_LEFT);
write("arrow-merge-alt-right", NUDGE_RIGHT);
write("arrow-merge-both", SCALE_SHRINK);
write("arrow-merge-left", NUDGE_LEFT);
write("arrow-merge-right", NUDGE_RIGHT);

// arrow-move
write("arrow-move-down", NUDGE_DOWN);
write("arrow-move-left", NUDGE_LEFT);
write("arrow-move-right", NUDGE_RIGHT);
write("arrow-move-up", NUDGE_UP);

// arrow-narrow
write("arrow-narrow-down", NUDGE_DOWN);
write("arrow-narrow-left", NUDGE_LEFT);
write("arrow-narrow-right", NUDGE_RIGHT);
write("arrow-narrow-up", NUDGE_UP);

// arrow-ramp (turning on/off a path)
write("arrow-ramp-left", NUDGE_LEFT);
write("arrow-ramp-left-2", NUDGE_LEFT);
write("arrow-ramp-left-3", NUDGE_LEFT);
write("arrow-ramp-right", NUDGE_RIGHT);
write("arrow-ramp-right-2", NUDGE_RIGHT);
write("arrow-ramp-right-3", NUDGE_RIGHT);

// arrow-right variants
write("arrow-right-bar", NUDGE_RIGHT);
write("arrow-right-circle", NUDGE_RIGHT);
write("arrow-right-dashed", NUDGE_RIGHT);
write("arrow-right-from-arc", NUDGE_RIGHT);
write("arrow-right-rhombus", NUDGE_RIGHT);
write("arrow-right-square", NUDGE_RIGHT);
write("arrow-right-tail", NUDGE_RIGHT);
write("arrow-right-to-arc", NUDGE_RIGHT);

// arrow-rotary
write("arrow-rotary-first-left", NUDGE_LEFT);
write("arrow-rotary-first-right", NUDGE_RIGHT);
write("arrow-rotary-last-left", NUDGE_LEFT);
write("arrow-rotary-last-right", NUDGE_RIGHT);
write("arrow-rotary-left", NUDGE_LEFT);
write("arrow-rotary-right", NUDGE_RIGHT);
write("arrow-rotary-straight", NUDGE_UP);

// arrow-roundabout: rotate
write("arrow-roundabout-left", ROTATE_CW);
write("arrow-roundabout-right", ROTATE_CW);

// arrow-sharp-turn
write("arrow-sharp-turn-left", NUDGE_LEFT);
write("arrow-sharp-turn-right", NUDGE_RIGHT);

// arrow-up variants
write("arrow-up-bar", NUDGE_UP);
write("arrow-up-circle", NUDGE_UP);
write("arrow-up-dashed", NUDGE_UP);
write("arrow-up-from-arc", NUDGE_UP);
write("arrow-up-left-circle", NUDGE_UP_LEFT);
write("arrow-up-rhombus", NUDGE_UP);
write("arrow-up-right-circle", NUDGE_UP_RIGHT);
write("arrow-up-square", NUDGE_UP);
write("arrow-up-tail", NUDGE_UP);
write("arrow-up-to-arc", NUDGE_UP);

// arrow-wave: wavy motion, directional
write("arrow-wave-left-down", NUDGE_DOWN_LEFT);
write("arrow-wave-left-up", NUDGE_UP_LEFT);
write("arrow-wave-right-down", NUDGE_DOWN_RIGHT);
write("arrow-wave-right-up", NUDGE_UP_RIGHT);

// arrow-zig-zag
write("arrow-zig-zag", ROTATE_SWING);

// ─── Arrows (multi-arrow icons) ───────────────────────────────────────────

write("arrows-cross", ROTATE_CW);
write("arrows-diagonal", SCALE_EXPAND);
write("arrows-diagonal-2", SCALE_EXPAND);
write("arrows-diagonal-minimize", SCALE_SHRINK);
write("arrows-diagonal-minimize-2", SCALE_SHRINK);
write("arrows-diff", SCALE_POP);
write("arrows-double-ne-sw", NUDGE_UP_RIGHT);
write("arrows-double-nw-se", NUDGE_UP_LEFT);
write("arrows-double-se-nw", NUDGE_DOWN_LEFT);
write("arrows-double-sw-ne", NUDGE_DOWN_RIGHT);
write("arrows-down", NUDGE_DOWN);
write("arrows-down-up", SCALE_POP);
write("arrows-exchange", ROTATE_CW);
write("arrows-exchange-2", ROTATE_CW);
write("arrows-horizontal", SCALE_EXPAND);
write("arrows-join", SCALE_SHRINK);
write("arrows-join-2", SCALE_SHRINK);
write("arrows-left", NUDGE_LEFT);
write("arrows-left-down", NUDGE_DOWN_LEFT);
write("arrows-left-right", SCALE_EXPAND);
write("arrows-maximize", SCALE_EXPAND);
write("arrows-minimize", SCALE_SHRINK);
write("arrows-move", SCALE_POP);
write("arrows-move-horizontal", SCALE_EXPAND);
write("arrows-move-vertical", SCALE_EXPAND);
write("arrows-random", ROTATE_SWING);
write("arrows-right", NUDGE_RIGHT);
write("arrows-right-down", NUDGE_DOWN_RIGHT);
write("arrows-right-left", SCALE_POP);
write("arrows-shuffle", ROTATE_CW);
write("arrows-shuffle-2", ROTATE_CW);
write("arrows-sort", NUDGE_DOWN);
write("arrows-split", SCALE_EXPAND);
write("arrows-split-2", SCALE_EXPAND);
write("arrows-transfer-down", NUDGE_DOWN);
write("arrows-transfer-up", NUDGE_UP);
write("arrows-transfer-up-down", SCALE_POP);
write("arrows-up", NUDGE_UP);
write("arrows-up-down", SCALE_POP);
write("arrows-up-left", NUDGE_UP_LEFT);
write("arrows-up-right", NUDGE_UP_RIGHT);
write("arrows-vertical", SCALE_EXPAND);

// ─── B ───────────────────────────────────────────────────────────────────────

// badge family (tabler has many badge variants)
const badgeVariants = [
  "badge-3d", "badge-4k", "badge-8k", "badge-ad", "badge-ar",
  "badge-cc", "badge-filled", "badge-hd", "badge-off",
  "badge-sd", "badge-tm", "badge-vo", "badge-vr", "badge-wc",
];
for (const v of badgeVariants) {
  if (v.endsWith("-off")) {
    write(v, SHAKE);
  } else {
    write(v, SCALE_POP);
  }
}

// balloon (lucide has balloon defined; tabler may have it too but this def will be shared)
// basket family: shopping basket → nudge down
write("basket", NUDGE_DOWN);
write("basket-bolt", NUDGE_DOWN);
write("basket-cancel", SHAKE);
write("basket-check", NUDGE_DOWN);
write("basket-code", NUDGE_DOWN);
write("basket-cog", NUDGE_DOWN);
write("basket-discount", NUDGE_DOWN);
write("basket-dollar", NUDGE_DOWN);
write("basket-down", NUDGE_DOWN);
write("basket-exclamation", SHAKE);
write("basket-heart", NUDGE_DOWN);
write("basket-minus", NUDGE_DOWN);
write("basket-off", SHAKE);
write("basket-pause", NUDGE_DOWN);
write("basket-pin", NUDGE_DOWN);
write("basket-plus", NUDGE_DOWN);
write("basket-question", NUDGE_DOWN);
write("basket-search", NUDGE_DOWN);
write("basket-share", NUDGE_RIGHT);
write("basket-star", NUDGE_DOWN);
write("basket-up", NUDGE_UP);
write("basket-x", SHAKE);

// battery family (tabler has many)
for (const v of [
  "battery-1", "battery-2", "battery-3", "battery-4",
  "battery-automotive", "battery-charging-2",
  "battery-eco", "battery-exclamation", "battery-filled",
  "battery-off",
]) {
  if (v.endsWith("-off") || v.endsWith("-exclamation")) {
    write(v, SHAKE);
  } else {
    write(v, SCALE_POP);
  }
}

// bell family (tabler variants not in lucide)
write("bell-bolt", BELL_RING);
write("bell-cancel", SHAKE);
write("bell-check", BELL_RING);
write("bell-code", BELL_RING);
write("bell-cog", BELL_RING);
write("bell-dollar", BELL_RING);
write("bell-down", NUDGE_DOWN);
write("bell-exclamation", SHAKE);
write("bell-heart", BELL_RING);
write("bell-pause", SHAKE);
write("bell-pin", BELL_RING);
write("bell-question", BELL_RING);
write("bell-ringing", BELL_RING);
write("bell-ringing-2", BELL_RING);
write("bell-school", BELL_RING);
write("bell-search", BELL_RING);
write("bell-share", NUDGE_RIGHT);
write("bell-star", BELL_RING);
write("bell-up", NUDGE_UP);
write("bell-x", SHAKE);
write("bell-z", SHAKE); // snooze

// biohazard (already has lucide def, skip)

// blockquote, bold (likely already defined)

// border family: scale
for (const v of [
  "border-all", "border-bottom", "border-corner-ios",
  "border-corner-pill", "border-corner-rounded", "border-corner-square",
  "border-horizontal", "border-inner", "border-left",
  "border-none", "border-outer", "border-right",
  "border-sides", "border-style", "border-style-dashed",
  "border-top", "border-vertical",
]) {
  write(v, SCALE_POP);
}

// box-multiple family
for (let i = 1; i <= 9; i++) {
  write(`box-multiple-${i}`, SCALE_POP);
}
write("box-multiple-0", SCALE_POP);
write("box-multiple-off", SHAKE);

// brand family: ALL brand logos → just scale pop (brand identities, no specific motion)
// (skip - letting DEFAULT_ANIMATION handle 371 brand icons)

// briefcase-* (some tabler-exclusive)
write("briefcase-off", SHAKE);

// building family
for (const v of [
  "building-arch", "building-bank", "building-bridge",
  "building-bridge-2", "building-broadcast-tower",
  "building-carousel", "building-castle", "building-church",
  "building-circus", "building-community", "building-cottage",
  "building-estate", "building-factory", "building-factory-2",
  "building-fortress", "building-government", "building-hospital",
  "building-lighthouse", "building-minus", "building-monument",
  "building-mosque", "building-off", "building-pavilion",
  "building-plus", "building-skyscraper", "building-stadium",
  "building-store", "building-tunnel", "building-warehouse",
  "building-wind-turbine", "building-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-x") || v.endsWith("-minus")) {
    write(v, SHAKE);
  } else {
    write(v, SCALE_POP);
  }
}

// bus family
write("bus-off", SHAKE);
write("bus-stop", SCALE_POP);

// ─── C ───────────────────────────────────────────────────────────────────────

// calendar family (tabler has many unique variants)
const calendarVariants = [
  "calendar-bolt", "calendar-cancel", "calendar-code",
  "calendar-cog", "calendar-dollar", "calendar-down",
  "calendar-due", "calendar-exclamation", "calendar-filled",
  "calendar-heart", "calendar-minus", "calendar-moon",
  "calendar-off", "calendar-pause", "calendar-pin",
  "calendar-plus", "calendar-question", "calendar-repeat",
  "calendar-repeat-off", "calendar-sad", "calendar-share",
  "calendar-smile", "calendar-star", "calendar-stats",
  "calendar-time", "calendar-up", "calendar-user", "calendar-week",
  "calendar-x", "calendar",
];
for (const v of calendarVariants) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x") || v.endsWith("-sad")) {
    write(v, SHAKE);
  } else if (v.endsWith("-down")) {
    write(v, NUDGE_DOWN);
  } else if (v.endsWith("-up")) {
    write(v, NUDGE_UP);
  } else {
    write(v, SCALE_POP);
  }
}

// camera family (tabler has many)
const cameraVariants2 = [
  "camera-bolt", "camera-cancel", "camera-check", "camera-code",
  "camera-cog", "camera-dollar", "camera-down", "camera-exclamation",
  "camera-filled", "camera-heart", "camera-minus", "camera-move",
  "camera-pause", "camera-pin", "camera-plus", "camera-question",
  "camera-rotate", "camera-search", "camera-selfie", "camera-share",
  "camera-spark", "camera-star", "camera-up", "camera-x",
];
for (const v of cameraVariants2) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x")) {
    write(v, SHAKE);
  } else if (v === "camera-rotate") {
    write(v, ROTATE_CW);
  } else if (v.endsWith("-down")) {
    write(v, NUDGE_DOWN);
  } else if (v.endsWith("-up")) {
    write(v, NUDGE_UP);
  } else {
    write(v, SCALE_POP);
  }
}

// cash family: coin bounce
for (const v of [
  "cash", "cash-banknote", "cash-banknote-filled", "cash-off",
  "cash-register",
]) {
  if (v.endsWith("-off")) {
    write(v, SHAKE);
  } else {
    write(v, COIN_BOUNCE);
  }
}

// chart family: tabler has many chart types
const chartVariants = [
  "chart-arcs", "chart-arcs-3", "chart-area-filled", "chart-area-line",
  "chart-area-line-filled", "chart-arrows", "chart-bar", "chart-bar-off",
  "chart-bar-popular", "chart-bubble", "chart-bubble-filled",
  "chart-candle", "chart-candle-filled", "chart-circles", "chart-cohort",
  "chart-column", "chart-donut", "chart-donut-2", "chart-donut-3",
  "chart-donut-4", "chart-donut-filled", "chart-dots", "chart-dots-2",
  "chart-dots-3", "chart-grid-dots", "chart-grid-dots-filled",
  "chart-histogram", "chart-infographic", "chart-line", "chart-off",
  "chart-pie-2", "chart-pie-3", "chart-pie-4", "chart-pie-filled",
  "chart-ppf", "chart-radar", "chart-sankey", "chart-treemap",
];
for (const v of chartVariants) {
  if (v.endsWith("-off")) {
    write(v, SHAKE);
  } else {
    write(v, SCALE_POP);
  }
}

// circle family: tabler has letter circles, number circles
const circleLetters = "abcdefghijklmnopqrstuvwxyz".split("");
for (const l of circleLetters) {
  write(`circle-letter-${l}`, SCALE_POP);
  write(`circle-dotted-letter-${l}`, SCALE_POP);
  write(`circle-dashed-letter-${l}`, SCALE_POP);
}
for (let i = 0; i <= 9; i++) {
  write(`circle-number-${i}`, SCALE_POP);
  write(`circle-dashed-number-${i}`, SCALE_POP);
}
write("circle-dashed", PULSE);
write("circle-filled", SCALE_POP);
write("circle-half", SCALE_POP);
write("circle-half-2", SCALE_POP);
write("circle-half-vertical", SCALE_POP);
write("circle-key-filled", ROTATE_CW);
write("circle-key", ROTATE_CW);
write("circle-rectangle", SCALE_POP);
write("circle-rectangle-off", SHAKE);
write("circle-square", SCALE_POP);
write("circle-triangle", SCALE_POP);
write("circle-x-filled", SHAKE);

// circuit family
for (const v of [
  "circuit-ammeter", "circuit-battery", "circuit-bulb",
  "circuit-capacitor", "circuit-capacitor-polarized",
  "circuit-cell", "circuit-cell-plus", "circuit-changeover",
  "circuit-diode", "circuit-diode-zener", "circuit-ground",
  "circuit-ground-digital", "circuit-inductor", "circuit-motor",
  "circuit-pushbutton", "circuit-resistor", "circuit-switch-closed",
  "circuit-switch-open", "circuit-voltmeter",
]) {
  write(v, PULSE);
}

// clipboard family (tabler variants)
write("clipboard-data", NUDGE_UP);
write("clipboard-heart", NUDGE_UP);
write("clipboard-off", SHAKE);
write("clipboard-smile", NUDGE_UP);
write("clipboard-text", NUDGE_UP);
write("clipboard-x", SHAKE);

// clock family (tabler has clock-hour-*)
for (let i = 1; i <= 12; i++) {
  write(`clock-hour-${i}`, ROTATE_CW);
}
// Tabler clock variants
for (const v of [
  "clock-2", "clock-bolt", "clock-cancel", "clock-code",
  "clock-cog", "clock-dollar", "clock-down", "clock-edit",
  "clock-exclamation", "clock-filled", "clock-heart",
  "clock-minus", "clock-off", "clock-pause", "clock-pin",
  "clock-play", "clock-plus", "clock-question", "clock-record",
  "clock-search", "clock-share", "clock-shield",
  "clock-star", "clock-stop", "clock-up", "clock-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x")) {
    write(v, SHAKE);
  } else {
    write(v, ROTATE_CW);
  }
}

// cloud family (tabler extras not in lucide)
for (const v of [
  "cloud-bitcoin", "cloud-bolt", "cloud-cancel", "cloud-code",
  "cloud-cog", "cloud-data-connection", "cloud-dollar", "cloud-exclamation",
  "cloud-heart", "cloud-lock", "cloud-lock-open", "cloud-minus",
  "cloud-network", "cloud-pause", "cloud-pin", "cloud-plus",
  "cloud-question", "cloud-search", "cloud-share",
  "cloud-star", "cloud-storm", "cloud-up", "cloud-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x") || v.endsWith("-lock")) {
    write(v, SHAKE);
  } else if (v.endsWith("-up")) {
    write(v, NUDGE_UP);
  } else {
    write(v, SCALE_POP);
  }
}

// coin family (tabler)
for (const v of [
  "coin", "coin-bitcoin", "coin-euro", "coin-filled", "coin-monero",
  "coin-off", "coin-pound", "coin-ripple", "coin-rupee",
  "coin-taka", "coin-yen", "coin-yuan",
]) {
  if (v.endsWith("-off")) {
    write(v, SHAKE);
  } else {
    write(v, COIN_BOUNCE);
  }
}

// color-filter, color-picker, color-swatch (tabler variants)
write("color-filter", ROTATE_CW);
write("color-off", SHAKE);
write("color-picker-off", SHAKE);
write("color-swatch-off", SHAKE);

// columns family (tabler extras)
write("columns-off", SHAKE);

// compass-off
write("compass-off", SHAKE);

// confetti: burst
write("confetti", SCALE_EXPAND);
write("confetti-off", SHAKE);

// container-off
write("container-off", SHAKE);

// contrast family
write("contrast-2", ROTATE_CW);
write("contrast-2-filled", ROTATE_CW);
write("contrast-filled", ROTATE_CW);
write("contrast-off", SHAKE);

// copy family (tabler extras)
write("copy", SCALE_POP);
write("copy-off", SHAKE);

// corner family (tabler specific)
for (const v of [
  "corner-down-left-double", "corner-down-right-double",
  "corner-left-down-double", "corner-left-up-double",
  "corner-right-down-double", "corner-right-up-double",
  "corner-up-left-double", "corner-up-right-double",
]) {
  write(v, SCALE_POP);
}

// credit-card family (tabler extras)
write("credit-card-off", SHAKE);
write("credit-card-pay", NUDGE_RIGHT);
write("credit-card-refund", NUDGE_LEFT);

// crop family (tabler specific)
for (const v of [
  "crop-1-1", "crop-16-9", "crop-3-2", "crop-5-4", "crop-7-5",
  "crop-landscape", "crop-portrait",
]) {
  write(v, SCALE_POP);
}

// cross-off
write("cross-off", SHAKE);

// crown-off
write("crown-off", SHAKE);

// crutches
write("crutches", SCALE_POP);
write("crutches-off", SHAKE);

// crystal-ball
write("crystal-ball", SCALE_POP);

// csv
write("csv", NUDGE_DOWN);

// cube family
write("cube", ROTATE_CW);
write("cube-3d-sphere", SPIN_360);
write("cube-3d-sphere-off", SHAKE);
write("cube-off", SHAKE);
write("cube-plus", SCALE_POP);
write("cube-send", NUDGE_RIGHT);
write("cube-spark", PULSE);
write("cube-unfolded", SCALE_EXPAND);

// cup
write("cup", FLOAT_UP);
write("cup-off", SHAKE);

// curling
write("curling", NUDGE_RIGHT);

// curly-loop
write("curly-loop", ROTATE_SWING);

// currency family: coin bounce
for (const v of [
  "currency", "currency-afghani", "currency-bahraini", "currency-baht",
  "currency-bitcoin", "currency-cent", "currency-dinar", "currency-dirham",
  "currency-dogecoin", "currency-dollar", "currency-dollar-australian",
  "currency-dollar-brunei", "currency-dollar-canadian", "currency-dollar-guyanese",
  "currency-dollar-off", "currency-dollar-singapore", "currency-dollar-zimbabwean",
  "currency-dong", "currency-dram", "currency-ethereum", "currency-euro",
  "currency-euro-off", "currency-florin", "currency-forint", "currency-frank",
  "currency-guarani", "currency-hryvnia", "currency-iranian-rial",
  "currency-kip", "currency-krone-czech", "currency-krone-danish",
  "currency-krone-swedish", "currency-lari", "currency-leu", "currency-lira",
  "currency-litecoin", "currency-lyd", "currency-manat", "currency-monero",
  "currency-naira", "currency-nano", "currency-off", "currency-paanga",
  "currency-peso", "currency-pound", "currency-pound-off", "currency-quetzal",
  "currency-real", "currency-renminbi", "currency-ripple", "currency-riyal",
  "currency-rubel", "currency-rufiyaa", "currency-rupee", "currency-rupee-nepalese",
  "currency-shekel", "currency-solana", "currency-som", "currency-taka",
  "currency-tenge", "currency-tugrik", "currency-won", "currency-xrp",
  "currency-yen", "currency-yen-off", "currency-yuan", "currency-zloty",
]) {
  if (v.endsWith("-off")) {
    write(v, SHAKE);
  } else {
    write(v, COIN_BOUNCE);
  }
}

// current-location
write("current-location", PULSE);
write("current-location-off", SHAKE);

// cursor
write("cursor-off", SHAKE);
write("cursor-text", SCALE_POP);

// cut
write("cut", ROTATE_CW); // scissors motion

// cylinder
write("cylinder", SCALE_POP);
write("cylinder-off", SHAKE);
write("cylinder-plus", SCALE_POP);

// ─── D ───────────────────────────────────────────────────────────────────────

// database family (tabler extras)
for (const v of [
  "database-cog", "database-dollar", "database-edit",
  "database-exclamation", "database-export", "database-heart",
  "database-import", "database-leak", "database-minus",
  "database-off", "database-plus", "database-share",
  "database-star", "database-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-x") || v.endsWith("-leak") || v.endsWith("-exclamation")) {
    write(v, SHAKE);
  } else if (v.endsWith("-export") || v.endsWith("-share")) {
    write(v, NUDGE_RIGHT);
  } else if (v.endsWith("-import")) {
    write(v, NUDGE_LEFT);
  } else {
    write(v, SCALE_POP);
  }
}

// device family: tabler has massive device family
// Group by device type for meaningful animations
const deviceFamilies = [
  "device-desktop", "device-desktop-analytics", "device-desktop-bolt",
  "device-desktop-cancel", "device-desktop-check", "device-desktop-code",
  "device-desktop-cog", "device-desktop-dollar", "device-desktop-down",
  "device-desktop-exclamation", "device-desktop-heart", "device-desktop-minus",
  "device-desktop-off", "device-desktop-pause", "device-desktop-pin",
  "device-desktop-plus", "device-desktop-question", "device-desktop-search",
  "device-desktop-share", "device-desktop-star", "device-desktop-up",
  "device-desktop-x",
  "device-floppy", "device-gamepad", "device-gamepad-2",
  "device-heart-monitor", "device-heart-monitor-filled",
  "device-imac", "device-imac-bolt", "device-imac-cancel", "device-imac-check",
  "device-imac-code", "device-imac-cog", "device-imac-dollar", "device-imac-down",
  "device-imac-exclamation", "device-imac-heart", "device-imac-minus",
  "device-imac-off", "device-imac-pause", "device-imac-pin", "device-imac-plus",
  "device-imac-question", "device-imac-search", "device-imac-share",
  "device-imac-star", "device-imac-up", "device-imac-x",
  "device-ipad", "device-ipad-bolt", "device-ipad-cancel", "device-ipad-check",
  "device-ipad-code", "device-ipad-cog", "device-ipad-dollar", "device-ipad-down",
  "device-ipad-exclamation", "device-ipad-heart", "device-ipad-horizontal",
  "device-ipad-horizontal-bolt", "device-ipad-horizontal-cancel",
  "device-ipad-horizontal-check", "device-ipad-horizontal-code",
  "device-ipad-horizontal-cog", "device-ipad-horizontal-dollar",
  "device-ipad-horizontal-down", "device-ipad-horizontal-exclamation",
  "device-ipad-horizontal-heart", "device-ipad-horizontal-minus",
  "device-ipad-horizontal-off", "device-ipad-horizontal-pause",
  "device-ipad-horizontal-pin", "device-ipad-horizontal-plus",
  "device-ipad-horizontal-question", "device-ipad-horizontal-search",
  "device-ipad-horizontal-share", "device-ipad-horizontal-star",
  "device-ipad-horizontal-up", "device-ipad-horizontal-x",
  "device-ipad-minus", "device-ipad-off", "device-ipad-pause",
  "device-ipad-pin", "device-ipad-plus", "device-ipad-question",
  "device-ipad-search", "device-ipad-share", "device-ipad-star",
  "device-ipad-up", "device-ipad-x",
  "device-landline-phone", "device-laptop", "device-laptop-off",
  "device-mobile", "device-mobile-bolt", "device-mobile-cancel",
  "device-mobile-charging", "device-mobile-check", "device-mobile-code",
  "device-mobile-cog", "device-mobile-dollar", "device-mobile-down",
  "device-mobile-exclamation", "device-mobile-heart", "device-mobile-message",
  "device-mobile-minus", "device-mobile-off", "device-mobile-pause",
  "device-mobile-pin", "device-mobile-plus", "device-mobile-question",
  "device-mobile-rotated", "device-mobile-search", "device-mobile-share",
  "device-mobile-star", "device-mobile-up", "device-mobile-vibration",
  "device-mobile-x",
  "device-nintendo", "device-nintendo-off",
  "device-projector", "device-remote", "device-sd-card",
  "device-sim", "device-sim-1", "device-sim-2", "device-sim-3",
  "device-speaker", "device-speaker-off",
  "device-tablet", "device-tablet-bolt", "device-tablet-cancel",
  "device-tablet-check", "device-tablet-code", "device-tablet-cog",
  "device-tablet-dollar", "device-tablet-down", "device-tablet-exclamation",
  "device-tablet-heart", "device-tablet-minus", "device-tablet-off",
  "device-tablet-pause", "device-tablet-pin", "device-tablet-plus",
  "device-tablet-question", "device-tablet-search", "device-tablet-share",
  "device-tablet-star", "device-tablet-up", "device-tablet-x",
  "device-tv", "device-tv-off", "device-tv-old",
  "device-unknown", "device-usb", "device-vision-pro",
  "device-watch", "device-watch-bolt", "device-watch-cancel",
  "device-watch-check", "device-watch-code", "device-watch-cog",
  "device-watch-dollar", "device-watch-down", "device-watch-exclamation",
  "device-watch-heart", "device-watch-minus", "device-watch-off",
  "device-watch-pause", "device-watch-pin", "device-watch-plus",
  "device-watch-question", "device-watch-search", "device-watch-share",
  "device-watch-star", "device-watch-stats", "device-watch-stats-2",
  "device-watch-up", "device-watch-x",
];
for (const v of deviceFamilies) {
  if (
    v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x") ||
    v.endsWith("-exclamation") || v.endsWith("-minus") || v.endsWith("-pause")
  ) {
    write(v, SHAKE);
  } else if (v.endsWith("-down")) {
    write(v, NUDGE_DOWN);
  } else if (v.endsWith("-up")) {
    write(v, NUDGE_UP);
  } else if (v.endsWith("-vibration")) {
    write(v, SHAKE);
  } else if (v.endsWith("-rotated")) {
    write(v, ROTATE_CW);
  } else if (v.endsWith("-charging")) {
    write(v, PULSE);
  } else {
    write(v, SCALE_POP);
  }
}

// devices (generic)
for (const v of [
  "devices", "devices-2", "devices-bolt", "devices-cancel",
  "devices-check", "devices-code", "devices-cog", "devices-dollar",
  "devices-down", "devices-exclamation", "devices-heart", "devices-minus",
  "devices-off", "devices-pause", "devices-pc", "devices-pc-off",
  "devices-pin", "devices-plus", "devices-question", "devices-search",
  "devices-share", "devices-star", "devices-up", "devices-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x") || v.endsWith("-exclamation")) {
    write(v, SHAKE);
  } else {
    write(v, SCALE_POP);
  }
}

// diameter
write("diameter", SCALE_EXPAND);

// direction-arrows
write("direction-arrows", NUDGE_RIGHT);
write("direction-horizontal", NUDGE_RIGHT);
write("direction-sign", NUDGE_RIGHT);
write("direction-sign-filled", NUDGE_RIGHT);
write("direction-sign-off", SHAKE);

// disabled (accessibility)
write("disabled", SHAKE);
write("disabled-2", SHAKE);
write("disabled-off", SHAKE);

// disc family (tabler extras)
write("disc-golf", SPIN_360);
write("disc-off", SHAKE);

// discount
write("discount", ROTATE_CW);
write("discount-2", ROTATE_CW);
write("discount-2-off", SHAKE);
write("discount-check", ROTATE_CW);
write("discount-check-filled", ROTATE_CW);
write("discount-filled", ROTATE_CW);
write("discount-off", SHAKE);

// divide
write("divide", SCALE_POP);

// dna family
write("dna-2", ROTATE_SWING);
write("dna-2-off", SHAKE);

// dog-bowl
write("dog-bowl", SCALE_POP);

// door family (tabler variants)
write("door-enter", NUDGE_RIGHT);
write("door-exit", NUDGE_LEFT);
write("door-off", SHAKE);

// dots family
write("dots-circle-horizontal", SCALE_POP);
write("dots-diagonal", SCALE_POP);
write("dots-diagonal-2", SCALE_POP);
write("dots-vertical", SCALE_POP);
write("dots", SCALE_POP);

// download-off
write("download-off", SHAKE);

// drag-drop
write("drag-drop", NUDGE_DOWN);
write("drag-drop-2", NUDGE_DOWN);

// drone-off
write("drone-off", SHAKE);

// drop-circle
write("drop-circle", NUDGE_DOWN);

// droplet family (tabler has many)
for (const v of [
  "droplet-bolt", "droplet-cancel", "droplet-check", "droplet-code",
  "droplet-cog", "droplet-dollar", "droplet-down", "droplet-exclamation",
  "droplet-half", "droplet-half-2", "droplet-heart", "droplet-minus",
  "droplet-off", "droplet-pause", "droplet-pin", "droplet-plus",
  "droplet-question", "droplet-search", "droplet-share", "droplet-star",
  "droplet-up", "droplet-x",
]) {
  if (v.endsWith("-off") || v.endsWith("-cancel") || v.endsWith("-x") || v.endsWith("-exclamation")) {
    write(v, SHAKE);
  } else if (v.endsWith("-down")) {
    write(v, NUDGE_DOWN);
  } else if (v.endsWith("-up")) {
    write(v, NUDGE_UP);
  } else {
    write(v, NUDGE_DOWN); // droplets fall
  }
}
write("droplets", NUDGE_DOWN);

// dual-screen
write("dual-screen", SCALE_EXPAND);

// dumpling
write("dumpling", SCALE_POP);

console.log("\nDone! Created animation defs for tabler A–D icons.");
