/**
 * Creates animation defs for heroicons stroke icons that don't have shared animation defs.
 * Usage: pnpm tsx scripts/create-heroicons-animations.ts
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
  transition: { duration: 1.5, ease: "linear", repeat: Infinity },
  category: "feedback",
};`;

const PULSE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
};`;

const SCALE_EXPAND = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
};`;

const COIN_BOUNCE = `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -6, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10, mass: 0.8 },
  category: "action",
  tags: ["money", "currency", "payment"],
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
  tags: ["like", "love", "favorite"],
};`;

// ─── Heroicons-specific animations ──────────────────────────────────────────

console.log("Creating heroicons animation defs...\n");

// Academic cap — tilt swing (graduation celebration)
write(
  "academic-cap",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [-5, 5, -3, 3, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["graduation", "education", "school", "cap"],
};`
);

// Adjustments-vertical — nudgeDown (vertical sliders)
write("adjustments-vertical", NUDGE_DOWN);

// Archive box variants
write(
  "archive-box",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["archive", "store", "save"],
};`
);
write("archive-box-arrow-down", NUDGE_DOWN);
write("archive-box-x-mark", SHAKE);

// Arrow down on square — nudgeDown (download)
write("arrow-down-on-square", NUDGE_DOWN);
write("arrow-down-on-square-stack", NUDGE_DOWN);
write("arrow-down-tray", NUDGE_DOWN);

// Arrow left on rectangle — nudgeLeft (sign out / exit)
write("arrow-left-on-rectangle", NUDGE_LEFT);
write("arrow-left-end-on-rectangle", NUDGE_LEFT);
write("arrow-left-start-on-rectangle", NUDGE_LEFT);

// Arrow long — directional nudge
write("arrow-long-down", NUDGE_DOWN);
write("arrow-long-left", NUDGE_LEFT);
write("arrow-long-right", NUDGE_RIGHT);
write("arrow-long-up", NUDGE_UP);

// Arrow path — rotateCW (refresh/cycle)
write(
  "arrow-path",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["refresh", "reload", "cycle", "sync"],
};`
);
write("arrow-path-rounded-square", ROTATE_CW);

// Arrow right on rectangle — nudgeRight (sign in / enter)
write("arrow-right-on-rectangle", NUDGE_RIGHT);
write("arrow-right-end-on-rectangle", NUDGE_RIGHT);
write("arrow-right-start-on-rectangle", NUDGE_RIGHT);

// Arrow small — directional nudge
write("arrow-small-down", NUDGE_DOWN);
write("arrow-small-left", NUDGE_LEFT);
write("arrow-small-right", NUDGE_RIGHT);
write("arrow-small-up", NUDGE_UP);

// Arrow top right on square — nudgeRight (external link)
write("arrow-top-right-on-square", NUDGE_RIGHT);

// Arrow trending — directional
write("arrow-trending-down", NUDGE_DOWN);
write("arrow-trending-up", NUDGE_UP);

// Arrow turn variants — directional by primary axis
write("arrow-turn-down-left", NUDGE_DOWN);
write("arrow-turn-down-right", NUDGE_DOWN);
write("arrow-turn-left-down", NUDGE_LEFT);
write("arrow-turn-left-up", NUDGE_LEFT);
write("arrow-turn-right-down", NUDGE_RIGHT);
write("arrow-turn-right-up", NUDGE_RIGHT);
write("arrow-turn-up-left", NUDGE_UP);
write("arrow-turn-up-right", NUDGE_UP);

// Arrow up on square — nudgeUp (upload/share)
write("arrow-up-on-square", NUDGE_UP);
write("arrow-up-on-square-stack", NUDGE_UP);
write("arrow-up-tray", NUDGE_UP);

// Arrow uturn — directional
write("arrow-uturn-down", NUDGE_DOWN);
write("arrow-uturn-left", NUDGE_LEFT);
write("arrow-uturn-right", NUDGE_RIGHT);
write("arrow-uturn-up", NUDGE_UP);

// Arrows pointing in/out — scale compress/expand
write(
  "arrows-pointing-in",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.85, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["collapse", "minimize", "compress"],
};`
);
write(
  "arrows-pointing-out",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["expand", "maximize", "fullscreen"],
};`
);

// At-symbol — pulse (active/mention)
write(
  "at-symbol",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["mention", "email", "contact"],
};`
);

// Backward — nudgeLeft (previous/rewind)
write("backward", NUDGE_LEFT);

// Banknotes — coinBounce (money)
write("banknotes", COIN_BOUNCE);

// Bars icons — scale pop (menu/list)
write("bars-2", SCALE_POP);
write("bars-3", SCALE_POP);
write("bars-3-bottom-left", SCALE_POP);
write("bars-3-bottom-right", SCALE_POP);
write("bars-3-center-left", SCALE_POP);
write("bars-4", SCALE_POP);
write("bars-arrow-down", NUDGE_DOWN);
write("bars-arrow-up", NUDGE_UP);

// Battery — semantic states
write(
  "battery-0",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -4, 4, -2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["battery", "empty", "dead", "low"],
};`
);
write("battery-50", SCALE_POP);
write("battery-100", SCALE_POP);

// Beaker — nudgeDown (pour/test)
write(
  "beaker",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["lab", "test", "chemistry", "experiment"],
};`
);

// Bell variants
write(
  "bell-alert",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["notification", "alert", "ring"],
};`
);
write(
  "bell-slash",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["mute", "silent", "notification-off"],
};`
);
write(
  "bell-snooze",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0, -2, 0] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
  tags: ["snooze", "sleep", "delay", "notification"],
};`
);

// Bolt-slash — shake (disabled/off)
write("bolt-slash", SHAKE);

// Book open — scale expand (reading)
write(
  "book-open",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["book", "read", "open", "documentation"],
};`
);

// Bookmark variants
write(
  "bookmark-slash",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["remove-bookmark", "unbookmark"],
};`
);
write(
  "bookmark-square",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["save", "bookmark", "favorite"],
};`
);

// Bug ant — wiggle/shake (insect)
write(
  "bug-ant",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -6, 6, -3, 3, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["bug", "insect", "error", "debug"],
};`
);

// Building icons — scale pop
write("building-library", SCALE_POP);
write("building-office", SCALE_POP);
write("building-office-2", SCALE_POP);
write(
  "building-storefront",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["store", "shop", "marketplace"],
};`
);

// Calendar variants
write("calendar-date-range", SCALE_POP);
write("calendar-days", SCALE_POP);

// Chart bar square
write("chart-bar-square", SCALE_POP);

// Chat bubble icons — scale pop (messaging)
write(
  "chat-bubble-bottom-center",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, y: 0 },
    animate: { scale: [1, 1.08, 1], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["chat", "message", "bubble", "comment"],
};`
);
write(
  "chat-bubble-bottom-center-text",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, y: 0 },
    animate: { scale: [1, 1.08, 1], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["chat", "message", "text", "comment"],
};`
);
write(
  "chat-bubble-left",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, x: 0 },
    animate: { scale: [1, 1.08, 1], x: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["chat", "message", "bubble"],
};`
);
write(
  "chat-bubble-left-ellipsis",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.06, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["typing", "message", "chat", "ellipsis"],
};`
);
write(
  "chat-bubble-left-right",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["conversation", "chat", "discussion"],
};`
);
write(
  "chat-bubble-oval-left",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, x: 0 },
    animate: { scale: [1, 1.08, 1], x: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["chat", "message", "bubble"],
};`
);
write(
  "chat-bubble-oval-left-ellipsis",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.06, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["typing", "message", "chat"],
};`
);

// Check badge / check circle — scale pop (success)
write(
  "check-badge",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
  tags: ["verified", "badge", "approved", "check"],
};`
);
write(
  "check-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.12, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
  tags: ["done", "success", "complete", "check"],
};`
);

// Chevron double — directional
write("chevron-double-down", NUDGE_DOWN);
write("chevron-double-left", NUDGE_LEFT);
write("chevron-double-right", NUDGE_RIGHT);
write("chevron-double-up", NUDGE_UP);
write(
  "chevron-up-down",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 1.1, 0.9, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["sort", "expand", "collapse", "select"],
};`
);

// Circle stack — nudgeDown (database layers)
write(
  "circle-stack",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["database", "stack", "layers", "storage"],
};`
);

// Clipboard document variants
write(
  "clipboard-document",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["copy", "clipboard", "document"],
};`
);
write("clipboard-document-check", SCALE_POP);
write("clipboard-document-list", SCALE_POP);

// Cloud arrow variants
write("cloud-arrow-down", NUDGE_DOWN);
write("cloud-arrow-up", NUDGE_UP);

// Code bracket variants
write("code-bracket", SCALE_POP);
write("code-bracket-square", SCALE_POP);

// Cog variants — rotateCW
write("cog-6-tooth", ROTATE_CW);
write("cog-8-tooth", ROTATE_CW);

// Command-line — scale pop (terminal)
write(
  "command-line",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["terminal", "code", "cli", "command"],
};`
);

// Computer desktop — scale pop
write("computer-desktop", SCALE_POP);

// CPU chip — pulse (processing)
write(
  "cpu-chip",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.06, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
  tags: ["processor", "chip", "computing", "hardware"],
};`
);

// Cube transparent — scale expand (3D/transparent)
write(
  "cube-transparent",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
  tags: ["cube", "3d", "transparent", "object"],
};`
);

// Currency bangladeshi — coinBounce
write("currency-bangladeshi", COIN_BOUNCE);

// Cursor variants
write(
  "cursor-arrow-rays",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["cursor", "click", "pointer", "interact"],
};`
);
write(
  "cursor-arrow-ripple",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
  },
  transition: { duration: 0.5, ease: "easeOut" },
  category: "feedback",
  tags: ["cursor", "ripple", "click", "interact"],
};`
);

// Device phone mobile — shake (phone vibrate)
write(
  "device-phone-mobile",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -5, 5, -2, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["phone", "mobile", "vibrate", "call"],
};`
);

// Document variants
write("document", SCALE_POP);
write("document-arrow-down", NUDGE_DOWN);
write("document-arrow-up", NUDGE_UP);
write("document-chart-bar", SCALE_POP);
write("document-check", SCALE_POP);
write("document-currency-bangladeshi", COIN_BOUNCE);
write("document-currency-dollar", COIN_BOUNCE);
write("document-currency-euro", COIN_BOUNCE);
write("document-currency-pound", COIN_BOUNCE);
write("document-currency-rupee", COIN_BOUNCE);
write("document-currency-yen", COIN_BOUNCE);
write(
  "document-duplicate",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, x: 0 },
    animate: { y: [0, -2, 0], x: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["copy", "duplicate", "clone"],
};`
);
write("document-magnifying-glass", SCALE_EXPAND);
write("document-minus", SCALE_POP);
write("document-plus", SCALE_POP);
write("document-text", SCALE_POP);

// Ellipsis — pulse (loading/more)
write(
  "ellipsis-horizontal",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["more", "options", "ellipsis", "menu"],
};`
);
write(
  "ellipsis-horizontal-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["more", "options", "ellipsis"],
};`
);
write(
  "ellipsis-vertical",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["more", "options", "menu"],
};`
);

// Envelope
write(
  "envelope",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["email", "mail", "message", "send"],
};`
);
write(
  "envelope-open",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["email", "open", "mail", "read"],
};`
);

// Equals
write(
  "equals",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["equals", "math", "equal"],
};`
);

// Exclamation triangle — shake (warning)
write(
  "exclamation-triangle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["warning", "alert", "caution", "triangle"],
};`
);

// Eye dropper — nudgeDown (pick color)
write(
  "eye-dropper",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["color", "picker", "dropper", "eyedropper"],
};`
);

// Eye slash — shake (hidden)
write("eye-slash", SHAKE);

// Face icons
write(
  "face-frown",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "feedback",
  tags: ["sad", "unhappy", "frown", "emoji"],
};`
);
write(
  "face-smile",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
  tags: ["happy", "smile", "positive", "emoji"],
};`
);

// Film — scale pop
write("film", SCALE_POP);

// Finger print — pulse (scanning)
write(
  "finger-print",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.6, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
  tags: ["biometric", "fingerprint", "scan", "security"],
};`
);

// Fire — scale expand (flame)
write(
  "fire",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, y: 0 },
    animate: { scale: [1, 1.1, 0.95, 1.05, 1], y: [0, -2, 1, -1, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["fire", "flame", "hot", "trending"],
};`
);

// Folder arrow down
write("folder-arrow-down", NUDGE_DOWN);

// Gift top — nudgeUp (present lid)
write(
  "gift-top",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 12 },
  category: "feedback",
  tags: ["gift", "present", "top", "lid"],
};`
);

// Globe variants — spinLoop (world)
write(
  "globe-alt",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 3, ease: "linear", repeat: Infinity },
  category: "action",
  tags: ["globe", "world", "earth", "global"],
};`
);
write("globe-americas", SPIN_LOOP);
write("globe-asia-australia", SPIN_LOOP);
write("globe-europe-africa", SPIN_LOOP);

// Heading variants — scale pop
write("h1", SCALE_POP);
write("h2", SCALE_POP);
write("h3", SCALE_POP);

// Hand variants
write(
  "hand-raised",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -5, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["hand", "raise", "stop", "wave"],
};`
);
write(
  "hand-thumb-down",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "feedback",
  tags: ["thumbs-down", "dislike", "no", "negative"],
};`
);
write(
  "hand-thumb-up",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "feedback",
  tags: ["thumbs-up", "like", "yes", "positive"],
};`
);

// Hashtag — scale pop
write(
  "hashtag",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["hashtag", "tag", "topic", "social"],
};`
);

// Home modern — nudgeUp (nicer home)
write(
  "home-modern",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["home", "house", "modern", "building"],
};`
);

// Identification — scale pop
write(
  "identification",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["id", "identification", "card", "badge"],
};`
);

// Inbox variants
write("inbox-arrow-down", NUDGE_DOWN);
write(
  "inbox-stack",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["inbox", "stack", "layers", "mail"],
};`
);

// Information circle — pulse
write(
  "information-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["info", "information", "help", "tooltip"],
};`
);

// Light bulb — scale expand (idea)
write(
  "light-bulb",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 10 },
  category: "feedback",
  tags: ["idea", "inspiration", "bulb", "light"],
};`
);

// Link slash — shake (broken)
write("link-slash", SHAKE);

// List bullet — scale pop
write("list-bullet", SCALE_POP);

// Lock closed — shake (secure)
write(
  "lock-closed",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -3, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["lock", "locked", "secure", "closed"],
};`
);

// Magnifying glass variants
write(
  "magnifying-glass",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.12, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["search", "find", "zoom", "magnify"],
};`
);
write(
  "magnifying-glass-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["search", "find", "zoom"],
};`
);
write(
  "magnifying-glass-minus",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.9, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["zoom-out", "shrink", "minimize"],
};`
);
write(
  "magnifying-glass-plus",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.12, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["zoom-in", "enlarge", "maximize"],
};`
);

// Minus circle / minus small
write("minus-circle", SCALE_POP);
write("minus-small", SCALE_POP);

// Musical note — scale pop (bounce/rhythm)
write(
  "musical-note",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, rotate: 0 },
    animate: { y: [0, -4, 0], rotate: [0, 5, -5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["music", "audio", "sound", "note"],
};`
);

// No symbol — shake (forbidden)
write(
  "no-symbol",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["forbidden", "no", "blocked", "ban"],
};`
);

// Numbered list — scale pop
write("numbered-list", SCALE_POP);

// Paint brush — nudgeDown
write(
  "paint-brush",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["paint", "brush", "art", "design"],
};`
);

// Paper airplane — nudgeRight (send)
write(
  "paper-airplane",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 6, 0], y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["send", "paper-airplane", "message", "launch"],
};`
);

// Paper clip — scale pop
write(
  "paper-clip",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 5, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "action",
  tags: ["attach", "clip", "file", "paperclip"],
};`
);

// Pause circle — scale pop
write("pause-circle", SCALE_POP);

// Pencil square — scale pop
write(
  "pencil-square",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["edit", "pencil", "write", "compose"],
};`
);

// Percent badge — scale pop
write(
  "percent-badge",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.12, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "feedback",
  tags: ["percent", "discount", "badge", "sale"],
};`
);

// Phone variants
write(
  "phone-arrow-down-left",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["incoming-call", "phone", "call", "receive"],
};`
);
write(
  "phone-arrow-up-right",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 8, -5, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["outgoing-call", "phone", "call", "dial"],
};`
);
write(
  "phone-x-mark",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["missed-call", "hang-up", "end-call"],
};`
);

// Play circle / play-pause — scale pop
write("play-circle", SCALE_POP);
write(
  "play-pause",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "media",
  tags: ["play", "pause", "media", "toggle"],
};`
);

// Plus circle / plus small — scale pop
write("plus-circle", SCALE_EXPAND);
write("plus-small", SCALE_EXPAND);

// Presentation charts — scale pop
write("presentation-chart-bar", SCALE_POP);
write("presentation-chart-line", SCALE_POP);

// Puzzle piece — rotate slightly (fit)
write(
  "puzzle-piece",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["puzzle", "piece", "integration", "plugin"],
};`
);

// Question mark circle — pulse
write(
  "question-mark-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["question", "help", "faq", "info"],
};`
);

// Queue list — scale pop
write("queue-list", SCALE_POP);

// Receipt percent — scale pop
write(
  "receipt-percent",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["receipt", "discount", "percent", "sale"],
};`
);

// Rectangle group / stack
write("rectangle-group", SCALE_POP);
write(
  "rectangle-stack",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["stack", "layers", "cards", "deck"],
};`
);

// Rocket launch — nudgeUp (launch)
write(
  "rocket-launch",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -6, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10, mass: 0.8 },
  category: "action",
  tags: ["rocket", "launch", "deploy", "start"],
};`
);

// Server stack — nudgeDown (layers)
write(
  "server-stack",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["server", "stack", "database", "backend"],
};`
);

// Signal slash — shake
write("signal-slash", SHAKE);

// Speaker variants
write(
  "speaker-wave",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "media",
  tags: ["speaker", "audio", "sound", "volume"],
};`
);
write("speaker-x-mark", SHAKE);

// Square variants
write(
  "square-2-stack",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["stack", "layers", "copy", "duplicate"],
};`
);
write(
  "square-3-stack-3d",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["stack", "3d", "layers", "cards"],
};`
);
write("squares-2x2", SCALE_POP);
write("squares-plus", SCALE_EXPAND);

// Stop variants
write("stop", SCALE_POP);
write("stop-circle", SCALE_POP);

// Swatch — scale pop (color palette)
write(
  "swatch",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "action",
  tags: ["color", "swatch", "palette", "design"],
};`
);

// Table cells — scale pop
write("table-cells", SCALE_POP);

// User group — scale pop
write(
  "user-group",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["group", "users", "team", "community"],
};`
);

// Video camera variants
write(
  "video-camera",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "media",
  tags: ["video", "camera", "record", "film"],
};`
);
write("video-camera-slash", SHAKE);

// View columns — scale pop
write("view-columns", SCALE_POP);

// Viewfinder circle — scale expand (focus/zoom)
write(
  "viewfinder-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "action",
  tags: ["viewfinder", "focus", "aim", "camera"],
};`
);

// Wrench screwdriver — rotateCW (tools)
write(
  "wrench-screwdriver",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, -8, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["tools", "wrench", "screwdriver", "settings", "maintenance"],
};`
);

// X circle / x mark — shake (close/error)
write(
  "x-circle",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["close", "cancel", "error", "remove"],
};`
);
write(
  "x-mark",
  `import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["close", "cancel", "dismiss", "remove"],
};`
);

console.log("\nDone! Now run: pnpm generate --source heroicons --all");
