/**
 * create-ad-animations.ts
 *
 * Generates animation definition files for all lucide icons starting with A–D
 * that don't already have a definition in scripts/animations/.
 *
 * Recipes are mapped to icon names via semantic rules.
 * Unmapped icons use the updated DEFAULT_ANIMATION (scale pop spring).
 *
 * Usage: npx tsx scripts/create-ad-animations.ts
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

  nudgeDownLarge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 6, 0] },
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

  nudgeUpLarge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -6, 0] },
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

  nudgeLeftLarge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -6, 0] },
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

  nudgeRightLarge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 6, 0] },
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

  nudgeDiagonalDownLeft: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeDiagonalDownRight: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeDiagonalUpLeft: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  nudgeDiagonalUpRight: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15, mass: 0.5 },
  category: "navigation",
};`,

  // Rotation: quarter spin CW (like settings)
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

  // Rotation: gentle swing (compass, needle)
  rotateSwing: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 20, -10, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`,

  // Rotation: aperture iris open/close
  rotateAperture: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
};`,

  // Continuous spin (disc, record)
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

  // Shake/wiggle (danger, warning)
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

  // Angry shake (more intense)
  shakeIntense: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -6, 6, -3, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`,

  // Bell ring (same as bell)
  bellRing: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`,

  // Gentle bell tilt
  bellTilt: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Float up (balloon, bird, crown)
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

  // Float down (anchoring, filing)
  floatDown: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
};`,

  // Drive right (vehicle, bike)
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

  // Award / celebration pop
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

  // Chop motion (axe)
  chop: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`,

  // Archive action (nudge down then settle)
  archiveAction: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
};`,

  // Archive restore (nudge up)
  archiveRestore: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
};`,

  // Camera shutter click
  cameraClick: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.9, 1.05, 1] },
  },
  transition: { duration: 0.25, ease: "easeInOut" },
  category: "action",
};`,

  // Alarm ring (scale pulse)
  alarmRing: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.05, 1.1, 1], rotate: [0, -5, 5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Activity pulse (heart rate monitor)
  activityPulse: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.05, 1.1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};`,

  // Dice roll
  diceRoll: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 90, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
};`,

  // Lift (dumbbell - up and down)
  lift: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};`,

  // Warm wobble (coffee, cozy items)
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

  // Coin bounce
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

  // Rain/precipitation fall
  precipitationFall: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
};`,

  // Lightning flash
  lightningFlash: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.5, 1, 0.7, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Door open swing
  doorOpen: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
};`,

  // Door close click
  doorClose: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.95, 1.02, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
};`,

  // DNA helix twist
  helixTwist: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};`,

  // Bookmark save (nudge up slightly)
  bookmarkSave: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
};`,

  // Battery charge pulse
  batteryCharge: `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.05, 1], x: [0, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};`,

  // Default scale pop (the new default for ambiguous icons)
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
// Icon → recipe mapping
// ---------------------------------------------------------------------------

const iconRecipes: Record<string, keyof typeof RECIPES> = {
  // A-arrows (text font size)
  "a-arrow-down": "nudgeDown",
  "a-arrow-up": "nudgeUp",

  // Arrow-big
  "arrow-big-down": "nudgeDownLarge",
  "arrow-big-down-dash": "nudgeDownLarge",
  "arrow-big-up": "nudgeUpLarge",
  "arrow-big-up-dash": "nudgeUpLarge",
  "arrow-big-left": "nudgeLeftLarge",
  "arrow-big-left-dash": "nudgeLeftLarge",
  "arrow-big-right": "nudgeRightLarge",
  "arrow-big-right-dash": "nudgeRightLarge",

  // Arrow-down variants
  "arrow-down-0-1": "nudgeDown",
  "arrow-down-1-0": "nudgeDown",
  "arrow-down-a-z": "nudgeDown",
  "arrow-down-from-line": "nudgeDown",
  "arrow-down-left": "nudgeDiagonalDownLeft",
  "arrow-down-narrow-wide": "nudgeDown",
  "arrow-down-right": "nudgeDiagonalDownRight",
  "arrow-down-to-dot": "nudgeDown",
  "arrow-down-to-line": "nudgeDown",
  "arrow-down-up": "scalePop",
  "arrow-down-wide-narrow": "nudgeDown",
  "arrow-down-z-a": "nudgeDown",

  // Arrow-left variants
  "arrow-left-from-line": "nudgeLeft",
  "arrow-left-right": "scalePop",
  "arrow-left-to-line": "nudgeLeft",

  // Arrow-right variants
  "arrow-right-from-line": "nudgeRight",
  "arrow-right-left": "scalePop",
  "arrow-right-to-line": "nudgeRight",

  // Arrow-up variants
  "arrow-up-0-1": "nudgeUp",
  "arrow-up-1-0": "nudgeUp",
  "arrow-up-a-z": "nudgeUp",
  "arrow-up-down": "scalePop",
  "arrow-up-from-dot": "nudgeUp",
  "arrow-up-from-line": "nudgeUp",
  "arrow-up-left": "nudgeDiagonalUpLeft",
  "arrow-up-narrow-wide": "nudgeUp",
  "arrow-up-right": "nudgeDiagonalUpRight",
  "arrow-up-to-line": "nudgeUp",
  "arrow-up-wide-narrow": "nudgeUp",
  "arrow-up-z-a": "nudgeUp",
  "arrows-up-from-line": "nudgeUp",

  // Chevrons (not yet in US-001)
  "chevron-first": "nudgeSmallLeft",
  "chevron-last": "nudgeSmallRight",
  "chevron-left": "nudgeSmallLeft",
  "chevron-up": "nudgeSmallUp",
  "chevrons-down": "nudgeSmallDown",
  "chevrons-down-up": "scalePop",
  "chevrons-left": "nudgeSmallLeft",
  "chevrons-left-right": "scalePop",
  "chevrons-left-right-ellipsis": "scalePop",
  "chevrons-right": "nudgeSmallRight",
  "chevrons-right-left": "scalePop",
  "chevrons-up": "nudgeSmallUp",
  "chevrons-up-down": "scalePop",

  // Circle arrows
  "circle-arrow-down": "nudgeSmallDown",
  "circle-arrow-left": "nudgeSmallLeft",
  "circle-arrow-out-down-left": "nudgeDiagonalDownLeft",
  "circle-arrow-out-down-right": "nudgeDiagonalDownRight",
  "circle-arrow-out-up-left": "nudgeDiagonalUpLeft",
  "circle-arrow-out-up-right": "nudgeDiagonalUpRight",
  "circle-arrow-right": "nudgeSmallRight",
  "circle-arrow-up": "nudgeSmallUp",

  // Decimals arrows
  "decimals-arrow-left": "nudgeSmallLeft",
  "decimals-arrow-right": "nudgeSmallRight",

  // Rotation icons
  aperture: "rotateAperture",
  cog: "rotateCW",
  compass: "rotateSwing",
  "drafting-compass": "rotateSwing",
  "disc": "spinLoop",
  "disc-2": "spinLoop",
  "disc-3": "spinLoop",
  "disc-album": "spinLoop",
  dna: "helixTwist",
  "dna-off": "helixTwist",

  // Shake / warning
  "alarm-smoke": "shake",
  angry: "shakeIntense",
  annoyed: "shake",
  ban: "shake",
  biohazard: "activityPulse",
  bomb: "shake",
  bug: "shake",
  "bug-off": "shake",
  "bug-play": "shake",
  construction: "shake",

  // Bell variants
  "bell-dot": "bellRing",
  "bell-electric": "bellRing",
  "bell-minus": "bellTilt",
  "bell-off": "bellTilt",
  "bell-plus": "bellRing",
  "bell-ring": "bellRing",
  "concierge-bell": "bellRing",

  // Alarm variants
  "alarm-clock": "alarmRing",
  "alarm-clock-check": "alarmRing",
  "alarm-clock-minus": "alarmRing",
  "alarm-clock-off": "alarmRing",
  "alarm-clock-plus": "alarmRing",

  // Activity / pulse
  activity: "activityPulse",

  // Float up (light, upward things)
  baby: "floatUp",
  balloon: "floatUp",
  bird: "floatUp",
  crown: "floatUp",

  // Float down (heavy, descending things)
  anchor: "floatDown",

  // Vehicles (drive right)
  ambulance: "driveRight",
  "bus-front": "driveRight",
  bus: "driveRight",
  "cable-car": "driveRight",
  "car-front": "driveRight",
  "car-taxi-front": "driveRight",
  car: "driveRight",
  bike: "driveRight",
  drone: "floatUp",

  // Archive actions
  archive: "archiveAction",
  "archive-restore": "archiveRestore",
  "archive-x": "shake",

  // Award / celebration
  award: "celebrationPop",

  // Axe / chop
  axe: "chop",

  // Battery
  "battery-charging": "batteryCharge",

  // Bookmarks (save)
  bookmark: "bookmarkSave",
  "bookmark-check": "bookmarkSave",
  "bookmark-minus": "bookmarkSave",
  "bookmark-plus": "bookmarkSave",
  "bookmark-x": "bookmarkSave",

  // Book actions (directional)
  "book-down": "nudgeDown",
  "book-up": "nudgeUp",
  "book-up-2": "nudgeUp",

  // Calendar sync/arrows
  "calendar-arrow-down": "nudgeDown",
  "calendar-arrow-up": "nudgeUp",

  // Camera
  camera: "cameraClick",
  "camera-off": "shake",

  // Cloud directional
  "cloud-download": "nudgeDown",
  "cloud-upload": "nudgeUp",

  // Cloud weather
  "cloud-drizzle": "precipitationFall",
  "cloud-hail": "precipitationFall",
  "cloud-rain": "precipitationFall",
  "cloud-rain-wind": "precipitationFall",
  "cloud-snow": "precipitationFall",
  "cloud-lightning": "lightningFlash",

  // Coffee / cozy
  coffee: "warmWobble",
  "cooking-pot": "warmWobble",

  // Coins / wealth
  coins: "coinBounce",
  "dollar-sign": "coinBounce",
  "banknote": "coinBounce",
  "banknote-arrow-down": "nudgeDown",
  "banknote-arrow-up": "nudgeUp",

  // Dice
  "dice-1": "diceRoll",
  "dice-2": "diceRoll",
  "dice-3": "diceRoll",
  "dice-4": "diceRoll",
  "dice-5": "diceRoll",
  "dice-6": "diceRoll",
  dices: "diceRoll",

  // Door
  "door-open": "doorOpen",
  "door-closed": "doorClose",
  "door-closed-locked": "doorClose",

  // Dumbbell (lift)
  dumbbell: "lift",

  // Drum (hit)
  drum: "nudgeSmallDown",
};

// ---------------------------------------------------------------------------
// Already existing defs (skip)
// ---------------------------------------------------------------------------
const ALREADY_DONE = new Set([
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
