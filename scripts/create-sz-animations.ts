/**
 * create-sz-animations.ts
 * Generates animation definition files for lucide icons S–Z.
 * Skip icons already defined: search, send, settings, share, star, sun, trash, upload, user, volume-2, x, zap
 */

import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const dir = join(__dirname, "animations");
let created = 0;
let skipped = 0;

function write(name: string, content: string, overwrite = false) {
  const path = join(dir, `${name}.ts`);
  if (!overwrite && existsSync(path)) {
    console.log(`  skip ${name}.ts (exists)`);
    skipped++;
    return;
  }
  writeFileSync(path, content);
  console.log(`  ✓ ${name}.ts`);
  created++;
}

// ─── Motion templates ───────────────────────────────────────────────

const shake = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 3, -2, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const nudgeDown = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const nudgeUp = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const nudgeRight = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const nudgeLeft = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const rotateCW = (deg = 90, category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: ${deg} },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const rotateCCW = (deg = -90, category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: ${deg} },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const spinLoop = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 1.2, ease: "linear" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const pulse = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 0.95, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const sparkle = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 0.9, 1.1, 1], rotate: [0, 15, -10, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const coinBounce = (currency: string, tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "action",
  tags: [${[`"${currency}"`, "currency", "money", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const sway = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, rotate: 0 },
    animate: { x: [0, 3, -3, 2, 0], rotate: [0, 3, -3, 1, 0] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const rotateSwing = (deg = 15, category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, ${deg}, -${Math.round(deg * 0.6)}, ${Math.round(deg * 0.3)}, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const scan = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const zoomIn = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const zoomOut = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.82, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const flipH = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const scaleXExpand = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const scaleYExpand = (category = "action", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const vibrate = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -2, 2, -2, 2, -1, 1, 0] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "feedback",
  tags: [${["vibrate", "buzz", "haptic", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const flash = (category = "feedback", tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { opacity: 1, scale: 1 },
    animate: { opacity: [1, 0.2, 1, 0.5, 1], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "${category}",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const thermometerRise = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1, y: 0 },
    animate: { scaleY: [1, 1.1, 1], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 15 },
  category: "feedback",
  tags: [${["temperature", "heat", "weather", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const driveRight = (vehicle: string, tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
  tags: [${[`"${vehicle}"`, "vehicle", "transport", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const stethoscopeBeat = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1, 1.08, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: [${["health", "medical", "heartbeat", "doctor", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const shuffleCross = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, scale: 1 },
    animate: { x: [0, -3, 3, 0], scale: [1, 0.95, 1.05, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "media",
  tags: [${["shuffle", "random", "mix", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const slashTilt = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, 0] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "action",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

const trophyFloat = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -5, 0], scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "feedback",
  tags: [${["trophy", "award", "win", "achievement", "celebrate", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const toggleSlide = (dir: "left" | "right", tags: string[] = []) => {
  const val = dir === "right" ? 3 : -3;
  return `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, ${val}, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
  tags: [${["toggle", "switch", "on", "off", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;
};

const pingTarget = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.2, 0.95, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeOut" },
  category: "action",
  tags: [${["target", "aim", "focus", "goal", "bullseye", ...tags].map((t) => `"${t}"`).join(", ")}],
};
`;

const warmWobble = (tags: string[] = []) =>
  `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -3, 3, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: [${tags.map((t) => `"${t}"`).join(", ")}],
};
`;

// ─── Write animation files ───────────────────────────────────────────

console.log("Creating S–Z animations...\n");

// ── S ──

// Sailboat: gentle sway
write("sailboat", sway("action", ["boat", "sail", "ocean", "voyage", "nautical"]));

// Salad: warm wobble (mixing)
write("salad", warmWobble(["salad", "food", "bowl", "healthy", "vegetables"]));

// Sandwich: nudgeDown (pressed together)
write("sandwich", nudgeDown("action", ["food", "sandwich", "lunch", "eat"]));

// Satellite-dish: slow rotate (scanning)
write("satellite-dish", rotateCW(30, "action", ["satellite", "dish", "signal", "broadcast", "scan"]));

// Satellite: orbit (rotate)
write("satellite", rotateCW(30, "action", ["satellite", "orbit", "space", "signal"]));

// Saudi-riyal: coin bounce
write("saudi-riyal", coinBounce("riyal", ["saudi", "SAR"]));

// Save-all: nudgeDown
write("save-all", nudgeDown("action", ["save", "download", "files", "disk"]));

// Save-off: shake
write("save-off", shake("action", ["save", "off", "disabled", "no-save"]));

// Save: nudgeDown
write("save", nudgeDown("action", ["save", "disk", "floppy", "store"]));

// Scale-3d: zoom in
write("scale-3d", zoomIn("action", ["scale", "3d", "resize", "dimensions"]));

// Scale: tilt (balance)
write("scale", rotateSwing(10, "action", ["scale", "balance", "weigh", "justice", "compare"]));

// Scaling: scale pop
write("scaling", zoomIn("action", ["scale", "resize", "zoom", "fit"]));

// Scan family: y sweep
const scanIcons = [
  ["scan", ["scan", "qr", "camera"]],
  ["scan-barcode", ["scan", "barcode", "product"]],
  ["scan-eye", ["scan", "eye", "biometric"]],
  ["scan-face", ["scan", "face", "biometric", "recognition"]],
  ["scan-heart", ["scan", "heart", "health", "vitals"]],
  ["scan-line", ["scan", "line", "detect"]],
  ["scan-qr-code", ["scan", "qr", "code"]],
  ["scan-search", ["scan", "search", "find"]],
  ["scan-text", ["scan", "text", "ocr", "document"]],
] as [string, string[]][];

for (const [name, tags] of scanIcons) {
  write(name, scan("action", tags));
}

write("school", zoomIn("action", ["school", "education", "learn", "building"]));

// Scissors: snip (rotate)
write("scissors", rotateSwing(20, "action", ["cut", "trim", "scissors", "snip"]));
write("scissors-line-dashed", rotateSwing(20, "action", ["cut", "trim", "scissors", "dashed"]));

// Scooter: drive right
write("scooter", driveRight("scooter", ["vehicle", "transport", "ride"]));

// Screen-share-off: shake
write("screen-share-off", shake("action", ["screen", "share", "off", "disabled"]));

// Screen-share: nudgeUp
write("screen-share", nudgeUp("action", ["screen", "share", "present", "cast"]));

// Scroll: nudgeDown
write("scroll", nudgeDown("action", ["scroll", "document", "paper", "list"]));
write("scroll-text", nudgeDown("action", ["scroll", "text", "document", "read"]));

// Search family (skip existing search.ts)
write("search-alert", shake("feedback", ["search", "alert", "warning", "error"]));
write("search-check", zoomIn("action", ["search", "check", "found", "verify"]));
write("search-code", zoomIn("action", ["search", "code", "find", "debug"]));
write("search-slash", shake("action", ["search", "slash", "disabled", "no-search"]));
write("search-x", shake("action", ["search", "x", "cancel", "clear"]));

write("section", zoomIn("action", ["section", "paragraph", "divide", "content"]));

// Send-horizontal: nudgeRight
write("send-horizontal", nudgeRight("action", ["send", "submit", "message", "horizontal"]));

// Send-to-back: nudgeDown (push back)
write("send-to-back", nudgeDown("action", ["send", "back", "layers", "behind"]));

// Separator: scale X
write("separator-horizontal", scaleXExpand("action", ["separator", "divider", "horizontal"]));
write("separator-vertical", scaleYExpand("action", ["separator", "divider", "vertical"]));

// Server: nudge down (rack mount)
write("server", nudgeDown("action", ["server", "host", "backend", "rack"]));
write("server-cog", rotateCW(90, "action", ["server", "settings", "config"]));
write("server-crash", shake("feedback", ["server", "crash", "error", "down", "fail"]));
write("server-off", shake("feedback", ["server", "off", "down", "disabled"]));

// Settings-2: rotate (like settings)
write("settings-2", rotateCW(90, "action", ["settings", "config", "sliders", "preferences"]));

// Shapes: rotate
write("shapes", rotateCW(45, "action", ["shapes", "geometry", "design"]));

// Share-2: nudge up-right diagonal
write("share-2", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["share", "export", "distribute", "connect"],
};
`);

write("sheet", nudgeDown("action", ["sheet", "table", "spreadsheet", "data"]));
write("shell", rotateCW(20, "action", ["shell", "terminal", "command", "bash"]));
write("shelving-unit", nudgeDown("action", ["shelf", "storage", "organize"]));

// Shield family: pulse (protection)
const shieldOK = ["shield", "shield-check", "shield-plus", "shield-user", "shield-half", "shield-ellipsis", "shield-minus"];
const shieldBad = ["shield-alert", "shield-ban", "shield-off", "shield-x", "shield-question-mark"];

for (const name of shieldOK) {
  write(name, pulse("feedback", [name.replace(/-/g, " "), "protect", "security", "safe"]));
}
for (const name of shieldBad) {
  write(name, shake("feedback", [name.replace(/-/g, " "), "security", "threat", "warning"]));
}

// Ship: sway
write("ship", sway("action", ["ship", "boat", "ocean", "vessel", "nautical"]));
// Ship-wheel: spin
write("ship-wheel", rotateCW(45, "action", ["ship", "wheel", "helm", "steer", "navigate"]));

// Shirt: wave/shake
write("shirt", warmWobble(["shirt", "clothing", "apparel", "fashion"]));

// Shopping: actions
write("shopping-bag", nudgeDown("action", ["shopping", "bag", "purchase", "buy"]));
write("shopping-basket", nudgeDown("action", ["shopping", "basket", "purchase", "groceries"]));
write("shopping-cart", nudgeRight("action", ["shopping", "cart", "buy", "purchase", "checkout"]));

// Shovel: dig motion
write("shovel", rotateSwing(20, "action", ["shovel", "dig", "garden", "construction"]));

// Shower-head: drip
write("shower-head", nudgeDown("action", ["shower", "water", "bath", "droplet"]));

// Shredder: nudgeDown (shred into)
write("shredder", nudgeDown("action", ["shredder", "destroy", "delete", "paper"]));

// Shrimp: bounce
write("shrimp", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 2, -2, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "action",
  tags: ["shrimp", "seafood", "food", "bounce"],
};
`);

// Shrink: scale down
write("shrink", zoomOut("action", ["shrink", "compress", "smaller", "minimize"]));

// Shrub: sway
write("shrub", rotateSwing(8, "action", ["shrub", "plant", "bush", "nature", "garden"]));

// Shuffle
write("shuffle", shuffleCross(["random", "playlist"]));

// Sigma: scale pop (math)
write("sigma", zoomIn("action", ["sigma", "sum", "math", "formula", "statistics"]));

// Signal family: pulse
const signalIcons = ["signal", "signal-high", "signal-medium", "signal-low", "signal-zero"];
for (const name of signalIcons) {
  write(name, pulse("action", [name.replace(/-/g, " "), "connectivity", "bars", "network"]));
}

// Signature: diagonal nudge (pen motion)
write("signature", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "action",
  tags: ["signature", "sign", "autograph", "write", "document"],
};
`);

// Signpost: rotate slight
write("signpost", rotateSwing(10, "action", ["signpost", "direction", "navigate", "road"]));
write("signpost-big", rotateSwing(10, "action", ["signpost", "direction", "navigate", "road"]));

// Siren: flash
write("siren", flash("feedback", ["siren", "alert", "emergency", "alarm", "warning"]));

// Skip: directional
write("skip-back", nudgeLeft("media", ["skip", "back", "previous", "rewind"]));
write("skip-forward", nudgeRight("media", ["skip", "forward", "next", "fast-forward"]));

// Skull: shake (scary/danger)
write("skull", shake("feedback", ["skull", "danger", "death", "warning", "poison"]));

// Slack: brand pop
write("slack", zoomIn("action", ["slack", "messaging", "brand", "team", "communication"]));

// Slash: tilt
write("slash", slashTilt(["slash", "divider", "separator", "cancel"]));

// Slice: nudgeDown (cut)
write("slice", nudgeDown("action", ["slice", "cut", "knife", "pizza", "divide"]));

// Sliders: directional
write("sliders-horizontal", nudgeRight("action", ["sliders", "controls", "adjust", "settings"]));
write("sliders-vertical", nudgeUp("action", ["sliders", "controls", "adjust", "settings"]));

// Smartphone: vibrate
write("smartphone", vibrate(["phone", "mobile", "device"]));
write("smartphone-charging", pulse("action", ["phone", "charging", "battery", "power"]));
write("smartphone-nfc", pulse("action", ["phone", "nfc", "tap", "wireless"]));

// Smile: scale pop
write("smile", zoomIn("feedback", ["smile", "happy", "emoji", "positive"]));
write("smile-plus", zoomIn("feedback", ["smile", "happy", "add", "react"]));

// Snail: nudgeRight (slow)
write("snail", nudgeRight("action", ["snail", "slow", "animal", "pace"]));

// Snowflake: slow rotate
write("snowflake", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 60 },
  },
  transition: { type: "spring", stiffness: 80, damping: 12 },
  category: "action",
  tags: ["snowflake", "snow", "cold", "winter", "ice", "freeze"],
};
`);

// Soap-dispenser: nudgeDown (pump)
write("soap-dispenser-droplet", nudgeDown("action", ["soap", "dispenser", "wash", "hygiene", "pump"]));

// Sofa: nudgeDown (sit)
write("sofa", nudgeDown("action", ["sofa", "couch", "furniture", "sit", "lounge"]));

// Solar panel: pulse (energy generation)
write("solar-panel", pulse("action", ["solar", "panel", "energy", "sun", "power", "renewable"]));

// Soup: warm wobble
write("soup", warmWobble(["soup", "food", "warm", "bowl", "hot"]));

// Space: nudgeRight
write("space", nudgeRight("action", ["space", "key", "keyboard", "spacebar"]));

// Spade: scale pop
write("spade", zoomIn("action", ["spade", "card", "game", "suit", "poker"]));

// Sparkle/sparkles: sparkle
write("sparkle", sparkle("feedback", ["sparkle", "magic", "shine", "glow", "special"]));
write("sparkles", sparkle("feedback", ["sparkles", "magic", "ai", "shine", "glow", "special"]));

// Speaker: pulse (sound)
write("speaker", pulse("media", ["speaker", "audio", "sound", "volume", "output"]));

// Speech: scale pop
write("speech", zoomIn("action", ["speech", "talk", "voice", "message"]));

// Spell-check
write("spell-check", zoomIn("action", ["spell", "check", "grammar", "text", "writing"]));
write("spell-check-2", zoomIn("action", ["spell", "check", "grammar", "text"]));

// Spline pointer: scale
write("spline-pointer", zoomIn("action", ["spline", "pointer", "vector", "curve"]));
write("spline", zoomIn("action", ["spline", "vector", "curve", "design"]));

// Split: scaleX expand
write("split", scaleXExpand("action", ["split", "divide", "fork", "branch"]));

// Spool: spin
write("spool", spinLoop("action", ["spool", "thread", "film", "roll", "reel"]));

// Spotlight: pulse
write("spotlight", pulse("action", ["spotlight", "focus", "highlight", "search", "light"]));

// Spray can: nudge up-right
write("spray-can", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["spray", "can", "paint", "graffiti", "aerosol"],
};
`);

// Sprout: nudgeUp (growth)
write("sprout", nudgeUp("action", ["sprout", "grow", "plant", "nature", "new", "seedling"]));

// Square family (arrow variants): directional nudges
write("square-arrow-down", nudgeDown("action", ["square", "arrow", "down", "direction"]));
write("square-arrow-up", nudgeUp("action", ["square", "arrow", "up", "direction"]));
write("square-arrow-left", nudgeLeft("action", ["square", "arrow", "left", "direction"]));
write("square-arrow-right", nudgeRight("action", ["square", "arrow", "right", "direction"]));
write("square-arrow-down-left", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -2, 0], y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "down-left", "direction"],
};
`);
write("square-arrow-down-right", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "down-right", "direction"],
};
`);
write("square-arrow-up-left", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -2, 0], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "up-left", "direction"],
};
`);
write("square-arrow-up-right", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "up-right", "direction"],
};
`);
write("square-arrow-out-down-left", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -2, 0], y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "out", "down-left", "direction"],
};
`);
write("square-arrow-out-down-right", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "out", "down-right", "direction"],
};
`);
write("square-arrow-out-up-left", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -2, 0], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "out", "up-left", "direction"],
};
`);
write("square-arrow-out-up-right", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["square", "arrow", "out", "up-right", "direction"],
};
`);
write("square-arrow-right-enter", nudgeRight("action", ["square", "arrow", "enter", "login", "in"]));
write("square-arrow-right-exit", nudgeRight("action", ["square", "arrow", "exit", "logout", "out"]));

// Square chevrons: directional
write("square-chevron-down", nudgeDown("action", ["square", "chevron", "down", "expand"]));
write("square-chevron-up", nudgeUp("action", ["square", "chevron", "up", "collapse"]));
write("square-chevron-left", nudgeLeft("action", ["square", "chevron", "left", "back"]));
write("square-chevron-right", nudgeRight("action", ["square", "chevron", "right", "forward"]));

// Square: scale pop (generic)
write("square", zoomIn("action", ["square", "box", "shape"]));
write("square-activity", pulse("feedback", ["square", "activity", "monitor", "vitals"]));
write("square-asterisk", sparkle("action", ["square", "asterisk", "wildcard", "note"]));
write("square-bottom-dashed-scissors", rotateSwing(15, "action", ["scissors", "cut", "dashed"]));
write("square-centerline-dashed-horizontal", scaleXExpand("action", ["centerline", "horizontal", "dashed"]));
write("square-centerline-dashed-vertical", scaleYExpand("action", ["centerline", "vertical", "dashed"]));
write("square-chart-gantt", nudgeRight("action", ["chart", "gantt", "timeline", "project"]));
write("square-check", zoomIn("action", ["square", "check", "complete", "done", "task"]));
write("square-check-big", zoomIn("action", ["square", "check", "complete", "done", "task"]));
write("square-code", zoomIn("action", ["square", "code", "developer", "programming"]));
write("square-dashed", zoomIn("action", ["square", "dashed", "outline", "empty"]));
write("square-dashed-bottom", nudgeDown("action", ["square", "dashed", "bottom"]));
write("square-dashed-bottom-code", nudgeDown("action", ["square", "dashed", "code", "bottom"]));
write("square-dashed-kanban", nudgeRight("action", ["square", "dashed", "kanban", "board"]));
write("square-dashed-mouse-pointer", zoomIn("action", ["square", "dashed", "select", "pointer"]));
write("square-dashed-top-solid", nudgeUp("action", ["square", "dashed", "top", "solid"]));
write("square-divide", zoomIn("action", ["square", "divide", "math", "split"]));
write("square-dot", zoomIn("action", ["square", "dot", "point", "position"]));
write("square-equal", zoomIn("action", ["square", "equal", "math", "compare"]));
write("square-function", zoomIn("action", ["square", "function", "math", "code"]));
write("square-kanban", nudgeRight("action", ["square", "kanban", "board", "project"]));
write("square-library", zoomIn("action", ["square", "library", "books", "collection"]));
write("square-m", zoomIn("action", ["square", "m", "letter", "metro", "map"]));
write("square-menu", nudgeDown("action", ["square", "menu", "list", "navigation"]));
write("square-minus", scaleXExpand("action", ["square", "minus", "remove", "subtract"]));
write("square-mouse-pointer", zoomIn("action", ["square", "mouse", "pointer", "select", "cursor"]));
write("square-parking", zoomIn("action", ["square", "parking", "park", "car"]));
write("square-parking-off", shake("action", ["square", "parking", "off", "no-parking"]));
write("square-pause", pulse("media", ["square", "pause", "stop", "hold"]));
write("square-pen", rotateSwing(10, "action", ["square", "pen", "edit", "write"]));
write("square-percent", zoomIn("action", ["square", "percent", "discount", "sale"]));
write("square-pi", zoomIn("action", ["square", "pi", "math", "circle", "constant"]));
write("square-pilcrow", zoomIn("action", ["square", "pilcrow", "paragraph", "text"]));
write("square-play", zoomIn("media", ["square", "play", "video", "start", "watch"]));
write("square-plus", zoomIn("action", ["square", "plus", "add", "create", "new"]));
write("square-power", flash("feedback", ["square", "power", "on", "off", "toggle"]));
write("square-radical", zoomIn("action", ["square", "radical", "math", "root", "formula"]));
write("square-round-corner", zoomIn("action", ["square", "rounded", "corner", "radius"]));
write("square-scissors", rotateSwing(15, "action", ["square", "scissors", "cut", "trim"]));
write("square-sigma", zoomIn("action", ["square", "sigma", "sum", "math", "statistics"]));
write("square-slash", slashTilt(["square", "slash", "disabled", "no"]));
write("square-split-horizontal", scaleXExpand("action", ["square", "split", "horizontal", "divide"]));
write("square-split-vertical", scaleYExpand("action", ["square", "split", "vertical", "divide"]));
write("square-square", zoomIn("action", ["square", "nested", "layers"]));
write("square-stack", nudgeUp("action", ["square", "stack", "layers", "pages"]));
write("square-star", sparkle("feedback", ["square", "star", "favorite", "rating"]));
write("square-stop", zoomIn("media", ["square", "stop", "halt", "end"]));
write("square-terminal", nudgeRight("action", ["square", "terminal", "cli", "command"]));
write("square-user", zoomIn("action", ["square", "user", "profile", "avatar"]));
write("square-user-round", zoomIn("action", ["square", "user", "profile", "avatar", "round"]));
write("square-x", shake("action", ["square", "x", "close", "delete", "cancel"]));
write("squares-exclude", zoomIn("action", ["squares", "exclude", "boolean", "subtract"]));
write("squares-intersect", zoomIn("action", ["squares", "intersect", "boolean", "overlap"]));
write("squares-subtract", nudgeLeft("action", ["squares", "subtract", "boolean", "remove"]));
write("squares-unite", zoomIn("action", ["squares", "unite", "boolean", "merge", "combine"]));
write("squircle", zoomIn("action", ["squircle", "shape", "round", "square"]));
write("squircle-dashed", zoomIn("action", ["squircle", "dashed", "shape", "outline"]));
write("squirrel", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 1, -2, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 10 },
  category: "action",
  tags: ["squirrel", "animal", "nature", "hop", "jump"],
};
`);

// Stamp: nudgeDown (stamp motion)
write("stamp", nudgeDown("action", ["stamp", "approve", "seal", "mark", "official"]));

// Star-half: scale+rotate (like star)
write("star-half", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["star", "half", "rating", "review"],
};
`);

// Star-off: shake
write("star-off", shake("feedback", ["star", "off", "unfavorite", "remove"]));

// Step: directional
write("step-back", nudgeLeft("media", ["step", "back", "previous", "frame"]));
write("step-forward", nudgeRight("media", ["step", "forward", "next", "frame"]));

// Stethoscope: heartbeat
write("stethoscope", stethoscopeBeat(["auscultate", "listen"]));

// Sticker: sparkle
write("sticker", sparkle("action", ["sticker", "emoji", "react", "fun", "decal"]));

// Sticky-note: nudgeUp (peel)
write("sticky-note", nudgeUp("action", ["sticky", "note", "memo", "reminder", "post-it"]));

// Stone: nudgeDown (drop/heavy)
write("stone", nudgeDown("action", ["stone", "rock", "heavy", "drop", "weight"]));

// Store: zoomIn
write("store", zoomIn("action", ["store", "shop", "retail", "ecommerce", "market"]));

// Stretch: directional scale
write("stretch-horizontal", scaleXExpand("action", ["stretch", "expand", "horizontal", "width"]));
write("stretch-vertical", scaleYExpand("action", ["stretch", "expand", "vertical", "height"]));

// Strikethrough: nudgeRight (crossing out)
write("strikethrough", nudgeRight("action", ["strikethrough", "strike", "delete", "text", "format"]));

// Subscript: nudgeDown
write("subscript", nudgeDown("action", ["subscript", "text", "format", "chemical"]));

// Sun variants
write("sun-dim", pulse("action", ["sun", "dim", "brightness", "light", "dark"]));
write("sun-medium", pulse("action", ["sun", "medium", "brightness", "light"]));
write("sun-moon", rotateCW(45, "action", ["sun", "moon", "theme", "dark", "light", "toggle"]));
write("sun-snow", rotateCW(20, "action", ["sun", "snow", "weather", "contrast", "season"]));

// Sunrise/sunset
write("sunrise", nudgeUp("action", ["sunrise", "morning", "dawn", "sun", "rise"]));
write("sunset", nudgeDown("action", ["sunset", "evening", "dusk", "sun", "set"]));

// Superscript: nudgeUp
write("superscript", nudgeUp("action", ["superscript", "text", "format", "exponent"]));

// Swatch-book: rotate (flip pages)
write("swatch-book", rotateSwing(12, "action", ["swatch", "book", "colors", "palette", "design"]));

// Swiss-franc: coin bounce
write("swiss-franc", coinBounce("franc", ["CHF", "switzerland", "currency"]));

// Switch-camera: flip (scaleX)
write("switch-camera", flipH("action", ["switch", "camera", "flip", "selfie", "photo"]));

// Sword: slash rotate
write("sword", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -25, 15, -8, 0] },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "action",
  tags: ["sword", "weapon", "slash", "fight", "blade"],
};
`);

// Swords: clash shake
write("swords", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, scale: 1 },
    animate: { x: [0, -3, 3, -2, 2, 0], scale: [1, 1.05, 0.98, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["swords", "battle", "fight", "clash", "conflict"],
};
`);

// Syringe: rotate (inject angle)
write("syringe", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, y: 0 },
    animate: { rotate: [0, -8, 0], y: [0, 2, 0] },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "action",
  tags: ["syringe", "inject", "medical", "vaccine", "needle"],
};
`);

// ── T ──

// Table family: scale pop
const tableIcons = ["table", "table-2", "table-cells-merge", "table-cells-split", "table-columns-split", "table-of-contents", "table-properties", "table-rows-split"];
for (const name of tableIcons) {
  write(name, zoomIn("action", [name.replace(/-/g, " "), "data", "grid", "spreadsheet"]));
}

// Tablet: scale pop
write("tablet", zoomIn("action", ["tablet", "device", "ipad", "screen"]));
write("tablet-smartphone", zoomIn("action", ["tablet", "smartphone", "device", "responsive"]));
write("tablets", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 1, -1, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "action",
  tags: ["tablets", "pills", "medicine", "health", "drugs"],
};
`);

// Tag: rotate slight (tagging motion)
write("tag", rotateSwing(10, "action", ["tag", "label", "category", "badge"]));
write("tags", rotateSwing(10, "action", ["tags", "labels", "categories", "keywords"]));

// Tally: nudgeRight (marking)
const tallyIcons = ["tally-1", "tally-2", "tally-3", "tally-4", "tally-5"];
for (const name of tallyIcons) {
  write(name, nudgeRight("action", [name.replace(/-/g, " "), "count", "mark", "score"]));
}

// Tangent: rotate
write("tangent", rotateCW(20, "action", ["tangent", "math", "angle", "geometry", "curve"]));

// Target: ping pulse
write("target", pingTarget(["bullseye", "aim", "precision", "shoot"]));

// Telescope: nudgeRight (looking)
write("telescope", nudgeRight("action", ["telescope", "look", "observe", "astronomy", "far", "zoom"]));

// Tent: scale pop
write("tent", zoomIn("action", ["tent", "camping", "outdoor", "shelter"]));
write("tent-tree", zoomIn("action", ["tent", "tree", "camping", "outdoor", "nature"]));

// Terminal: blink (flash)
write("terminal", flash("action", ["terminal", "cli", "command", "code", "console"]));

// Test-tubes: shake (mix)
write("test-tube", shake("action", ["test", "tube", "lab", "experiment", "science"]));
write("test-tube-diagonal", shake("action", ["test", "tube", "diagonal", "lab", "chemistry"]));
write("test-tubes", shake("action", ["test", "tubes", "lab", "experiment", "chemistry"]));

// Text family: scale pop
write("text-align-center", zoomIn("action", ["text", "align", "center", "justify"]));
write("text-align-end", zoomIn("action", ["text", "align", "end", "right"]));
write("text-align-justify", zoomIn("action", ["text", "align", "justify", "full"]));
write("text-align-start", zoomIn("action", ["text", "align", "start", "left"]));
write("text-cursor", pulse("action", ["text", "cursor", "caret", "type", "input"]));
write("text-cursor-input", pulse("action", ["text", "cursor", "input", "field", "type"]));
write("text-initial", zoomIn("action", ["text", "initial", "format", "clear"]));
write("text-quote", nudgeRight("action", ["text", "quote", "blockquote", "cite"]));
write("text-search", zoomIn("action", ["text", "search", "find", "lookup"]));
write("text-select", zoomIn("action", ["text", "select", "highlight", "copy"]));
write("text-wrap", nudgeDown("action", ["text", "wrap", "line", "break", "format"]));

// Theater: scale pop
write("theater", zoomIn("action", ["theater", "performance", "drama", "show", "masks"]));

// Thermometer: rise
write("thermometer", thermometerRise(["weather"]));
write("thermometer-sun", thermometerRise(["hot", "heat", "summer"]));
write("thermometer-snowflake", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1, y: 0 },
    animate: { scaleY: [1, 0.9, 1], y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 15 },
  category: "feedback",
  tags: ["temperature", "cold", "freeze", "winter", "snow"],
};
`);

// Thumbs: directional
write("thumbs-up", nudgeUp("feedback", ["thumbs", "up", "like", "approve", "positive"]));
write("thumbs-down", nudgeDown("feedback", ["thumbs", "down", "dislike", "reject", "negative"]));

// Ticket family: nudgeRight
const ticketIcons = ["ticket", "ticket-check", "ticket-minus", "ticket-percent", "ticket-plus", "ticket-slash", "ticket-x", "tickets", "tickets-plane"];
for (const name of ticketIcons) {
  write(name, nudgeRight("action", [name.replace(/-/g, " "), "event", "entry", "admission"]));
}

// Timer: actions
write("timer", pulse("action", ["timer", "countdown", "time", "alarm", "stopwatch"]));
write("timer-off", shake("action", ["timer", "off", "stop", "cancel", "disabled"]));
write("timer-reset", rotateCCW(-180, "action", ["timer", "reset", "restart", "clear"]));

// Toggle: slide directional
write("toggle-left", toggleSlide("left", ["off", "disabled"]));
write("toggle-right", toggleSlide("right", ["on", "enabled"]));

// Toilet: nudgeDown
write("toilet", nudgeDown("action", ["toilet", "bathroom", "plumbing", "flush"]));

// Tool-case/toolbox: nudgeDown
write("tool-case", nudgeDown("action", ["tools", "case", "bag", "kit", "repair"]));
write("toolbox", nudgeDown("action", ["toolbox", "tools", "kit", "repair", "maintenance"]));

// Tornado: spin
write("tornado", spinLoop("action", ["tornado", "spin", "storm", "wind", "twister"]));

// Torus: rotate
write("torus", rotateCW(45, "action", ["torus", "donut", "ring", "3d", "geometry"]));

// Touchpad: scale pop / shake off
write("touchpad", zoomIn("action", ["touchpad", "trackpad", "gesture", "pointer"]));
write("touchpad-off", shake("action", ["touchpad", "off", "disabled", "trackpad"]));

// Towel-rack: nudgeDown
write("towel-rack", nudgeDown("action", ["towel", "rack", "bathroom", "storage"]));

// Tower-control: pulse (broadcast)
write("tower-control", pulse("action", ["tower", "control", "signal", "broadcast", "radar"]));

// Toy-brick: nudgeDown (snap)
write("toy-brick", nudgeDown("action", ["toy", "brick", "lego", "build", "snap", "connect"]));

// Tractor: drive right (slow)
write("tractor", driveRight("tractor", ["farm", "agriculture", "field", "drive"]));

// Traffic-cone: scale pop
write("traffic-cone", zoomIn("feedback", ["traffic", "cone", "warning", "construction", "road"]));

// Train family: drive right
write("train-front", driveRight("train", ["rail", "transit", "public-transport"]));
write("train-front-tunnel", driveRight("train", ["train", "tunnel", "rail", "underground"]));
write("train-track", nudgeRight("action", ["train", "track", "rail", "railway"]));

// Tram: drive right
write("tram-front", driveRight("tram", ["tram", "streetcar", "transit", "city"]));

// Transgender: rotate
write("transgender", rotateCW(30, "action", ["transgender", "gender", "identity", "symbol"]));

// Trash family
write("trash-2", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["delete", "remove", "bin", "garbage", "trash"],
};
`);

// Tree family: sway
write("tree-deciduous", rotateSwing(8, "action", ["tree", "deciduous", "nature", "forest", "seasonal"]));
write("tree-palm", rotateSwing(12, "action", ["tree", "palm", "tropical", "beach", "nature"]));
write("tree-pine", rotateSwing(6, "action", ["tree", "pine", "evergreen", "forest", "nature"]));
write("trees", rotateSwing(6, "action", ["trees", "forest", "nature", "park", "woods"]));

// Trello: scale pop (brand)
write("trello", zoomIn("action", ["trello", "kanban", "board", "project", "organize"]));

// Trending: directional
write("trending-up", nudgeUp("feedback", ["trending", "up", "growth", "increase", "chart"]));
write("trending-down", nudgeDown("feedback", ["trending", "down", "decrease", "decline", "chart"]));
write("trending-up-down", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 2, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "feedback",
  tags: ["trending", "up-down", "volatile", "change", "chart"],
};
`);

// Triangle-alert: shake
write("triangle-alert", shake("feedback", ["triangle", "alert", "warning", "danger", "caution"]));
write("triangle-dashed", zoomIn("action", ["triangle", "dashed", "shape", "outline"]));
write("triangle-right", nudgeRight("action", ["triangle", "right", "play", "direction"]));
write("triangle", zoomIn("action", ["triangle", "shape", "geometry"]));

// Trophy: float up (celebrate)
write("trophy", trophyFloat([]));

// Truck family: drive right
write("truck", driveRight("truck", ["delivery", "shipping", "freight", "cargo"]));
write("truck-electric", driveRight("truck-electric", ["ev", "electric", "delivery", "sustainable"]));

// Turkish lira: coin bounce
write("turkish-lira", coinBounce("lira", ["TRY", "turkey", "currency"]));

// Turntable: spin
write("turntable", spinLoop("media", ["turntable", "vinyl", "record", "music", "spin", "DJ"]));

// Turtle: slow nudgeRight
write("turtle", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 80, damping: 15 },
  category: "action",
  tags: ["turtle", "slow", "animal", "nature", "pace"],
};
`);

// TV: scale pop
write("tv", zoomIn("media", ["tv", "television", "screen", "video", "watch"]));
write("tv-minimal", zoomIn("media", ["tv", "minimal", "screen", "display"]));
write("tv-minimal-play", zoomIn("media", ["tv", "minimal", "play", "video", "stream"]));

// Twitch/Twitter: brand scale pop
write("twitch", zoomIn("action", ["twitch", "stream", "gaming", "brand"]));
write("twitter", zoomIn("action", ["twitter", "x", "tweet", "social", "brand"]));

// Type: scale pop
write("type", zoomIn("action", ["type", "text", "font", "typography"]));
write("type-outline", zoomIn("action", ["type", "outline", "font", "typography", "hollow"]));

// ── U ──

// Umbrella
write("umbrella", zoomIn("action", ["umbrella", "rain", "weather", "protect"]));
write("umbrella-off", shake("action", ["umbrella", "off", "no-rain", "disabled"]));

// Underline: nudgeDown
write("underline", nudgeDown("action", ["underline", "text", "format", "emphasis"]));

// Undo family: rotateCCW
write("undo", rotateCCW(-180, "action", ["undo", "revert", "back", "history", "ctrl-z"]));
write("undo-2", rotateCCW(-180, "action", ["undo", "revert", "back", "history"]));
write("undo-dot", rotateCCW(-180, "action", ["undo", "dot", "revert", "history"]));

// Unfold: expand
write("unfold-horizontal", scaleXExpand("action", ["unfold", "horizontal", "expand", "reveal"]));
write("unfold-vertical", scaleYExpand("action", ["unfold", "vertical", "expand", "reveal"]));

// Ungroup: scale expand (separating)
write("ungroup", zoomIn("action", ["ungroup", "separate", "explode", "organize"]));

// University: scale pop
write("university", zoomIn("action", ["university", "college", "education", "campus", "learn"]));

// Unlink: shake (disconnect)
write("unlink", shake("action", ["unlink", "disconnect", "break", "remove", "chain"]));
write("unlink-2", shake("action", ["unlink", "disconnect", "break", "remove"]));

// Unplug: nudgeUp (unplug motion)
write("unplug", nudgeUp("action", ["unplug", "disconnect", "power", "cable", "remove"]));

// USB: nudgeRight (plug in)
write("usb", nudgeRight("action", ["usb", "plug", "connect", "cable", "port"]));

// User family
write("user-check", zoomIn("action", ["user", "check", "verify", "approve", "confirmed"]));
write("user-cog", rotateCW(90, "action", ["user", "settings", "config", "preferences"]));
write("user-key", rotateCW(30, "action", ["user", "key", "auth", "access", "unlock"]));
write("user-lock", zoomIn("action", ["user", "lock", "secure", "private", "restricted"]));
write("user-minus", nudgeLeft("action", ["user", "minus", "remove", "unfriend", "delete"]));
write("user-pen", nudgeRight("action", ["user", "pen", "edit", "profile", "write"]));
write("user-plus", nudgeUp("action", ["user", "plus", "add", "invite", "new"]));
write("user-search", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 0, -3, 0], y: [0, -3, 0, 0] },
  },
  transition: { duration: 0.5, bounce: 0.3 },
  category: "action",
  tags: ["user", "search", "find", "lookup", "profile"],
};
`);
write("user-star", sparkle("feedback", ["user", "star", "favorite", "vip", "premium"]));
write("user-x", shake("action", ["user", "x", "remove", "ban", "block", "delete"]));

// User-round variants match user variants
write("user-round", zoomIn("action", ["user", "round", "profile", "avatar", "person"]));
write("user-round-check", zoomIn("action", ["user", "round", "check", "verify", "approved"]));
write("user-round-cog", rotateCW(90, "action", ["user", "round", "settings", "config"]));
write("user-round-key", rotateCW(30, "action", ["user", "round", "key", "auth", "access"]));
write("user-round-minus", nudgeLeft("action", ["user", "round", "minus", "remove"]));
write("user-round-pen", nudgeRight("action", ["user", "round", "pen", "edit", "profile"]));
write("user-round-plus", nudgeUp("action", ["user", "round", "plus", "add", "invite"]));
write("user-round-search", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 0, -3, 0], y: [0, -3, 0, 0] },
  },
  transition: { duration: 0.5, bounce: 0.3 },
  category: "action",
  tags: ["user", "round", "search", "find", "lookup"],
};
`);
write("user-round-x", shake("action", ["user", "round", "x", "remove", "ban", "block"]));

// Users: scale pop
write("users", zoomIn("action", ["users", "group", "team", "people", "members"]));
write("users-round", zoomIn("action", ["users", "round", "group", "team", "community"]));

// Utensils: warm wobble (eating)
write("utensils", warmWobble(["utensils", "fork", "knife", "eat", "food", "restaurant"]));
write("utensils-crossed", shake("action", ["utensils", "crossed", "no-food", "closed", "restaurant"]));

// Utility-pole: scale pop
write("utility-pole", pulse("action", ["utility", "pole", "power", "electricity", "grid"]));

// ── V ──

// Van: drive right
write("van", driveRight("van", ["van", "vehicle", "transport", "delivery", "road"]));

// Variable: scale pop (code)
write("variable", zoomIn("action", ["variable", "code", "programming", "math", "value"]));

// Vault: scale pop (secure)
write("vault", zoomIn("action", ["vault", "safe", "secure", "bank", "password", "storage"]));

// Vector-square: scale pop
write("vector-square", zoomIn("action", ["vector", "square", "design", "path", "anchor"]));

// Vegan: leaf swing
write("vegan", rotateSwing(10, "action", ["vegan", "plant", "leaf", "vegetarian", "natural", "green"]));

// Venetian-mask: scale pop
write("venetian-mask", zoomIn("action", ["venetian", "mask", "carnival", "disguise", "theater"]));

// Venus: scale pop
write("venus", zoomIn("action", ["venus", "female", "gender", "symbol"]));
write("venus-and-mars", zoomIn("action", ["venus", "mars", "gender", "symbol", "couple"]));

// Vibrate: vibrate
write("vibrate", vibrate(["phone", "notification", "buzz"]));
write("vibrate-off", shake("action", ["vibrate", "off", "silent", "disabled", "mute"]));

// Video: scale pop / shake off
write("video", zoomIn("media", ["video", "camera", "record", "film", "watch"]));
write("video-off", shake("media", ["video", "off", "disabled", "muted", "no-video"]));

// Videotape: spin (tape rolling)
write("videotape", spinLoop("media", ["videotape", "vhs", "tape", "video", "retro", "record"]));

// View: scale pop
write("view", zoomIn("action", ["view", "see", "observe", "perspective", "layout"]));

// Voicemail: pulse (signal)
write("voicemail", pulse("action", ["voicemail", "message", "phone", "audio", "missed"]));

// Volleyball: bounce
write("volleyball", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -5, 2, -2, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 10 },
  category: "action",
  tags: ["volleyball", "ball", "sport", "bounce", "game"],
};
`);

// Volume family
write("volume-1", pulse("media", ["volume", "low", "sound", "audio"]));
write("volume", pulse("media", ["volume", "sound", "audio", "speaker"]));
write("volume-off", shake("media", ["volume", "off", "mute", "silent", "disabled"]));
write("volume-x", shake("media", ["volume", "x", "mute", "silent", "no-sound"]));

// Vote: nudgeDown (drop in ballot)
write("vote", nudgeDown("action", ["vote", "ballot", "election", "check", "submit"]));

// ── W ──

// Wallet family: nudgeDown (heavy/full)
write("wallet", coinBounce("wallet", ["money", "payment", "finance", "cards"]));
write("wallet-cards", coinBounce("wallet-cards", ["cards", "credit", "payment", "finance"]));
write("wallet-minimal", coinBounce("wallet-minimal", ["money", "payment", "minimal"]));

// Wallpaper: scale pop
write("wallpaper", zoomIn("action", ["wallpaper", "background", "desktop", "image", "theme"]));

// Wand: sparkle + rotate
write("wand", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, -15, 15, -8, 0], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["wand", "magic", "transform", "effect", "auto", "ai"],
};
`);
write("wand-sparkles", sparkle("action", ["wand", "sparkles", "magic", "ai", "transform", "auto"]));

// Warehouse: scale pop
write("warehouse", zoomIn("action", ["warehouse", "storage", "building", "logistics", "inventory"]));

// Washing-machine: spin
write("washing-machine", spinLoop("action", ["washing", "machine", "laundry", "spin", "clean"]));

// Watch: scale pop (tick)
write("watch", pulse("action", ["watch", "time", "clock", "wrist", "timer"]));

// Waves: y oscillate
write("waves", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 2, -1, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["waves", "water", "ocean", "sea", "flow", "audio"],
};
`);
write("waves-arrow-down", nudgeDown("action", ["waves", "arrow", "down", "water", "dive", "swim"]));
write("waves-arrow-up", nudgeUp("action", ["waves", "arrow", "up", "water", "swim", "surface"]));
write("waves-ladder", nudgeUp("action", ["waves", "ladder", "pool", "climb", "swim"]));

// Waypoints: nudgeRight (navigate along path)
write("waypoints", nudgeRight("action", ["waypoints", "route", "path", "navigate", "journey"]));

// Webcam: pulse (recording)
write("webcam", pulse("action", ["webcam", "camera", "video", "stream", "record"]));

// Webhook: pulse / shake off
write("webhook", pulse("action", ["webhook", "api", "event", "trigger", "integration"]));
write("webhook-off", shake("action", ["webhook", "off", "disabled", "inactive"]));

// Weight: nudgeDown (heavy)
write("weight", nudgeDown("action", ["weight", "heavy", "mass", "scales", "gym"]));
write("weight-tilde", nudgeDown("action", ["weight", "tilde", "approximately", "estimate"]));

// Wheat: sway
write("wheat", rotateSwing(10, "action", ["wheat", "grain", "crop", "harvest", "agriculture", "food"]));
write("wheat-off", shake("action", ["wheat", "off", "gluten-free", "no-wheat", "allergen"]));

// Whole-word: scale pop
write("whole-word", zoomIn("action", ["whole", "word", "text", "search", "match"]));

// Wifi family: pulse (signal)
const wifiOK = ["wifi", "wifi-high", "wifi-low", "wifi-zero", "wifi-pen", "wifi-sync"];
for (const name of wifiOK) {
  write(name, pulse("action", [name.replace(/-/g, " "), "signal", "wireless", "network", "connectivity"]));
}
write("wifi-cog", rotateCW(90, "action", ["wifi", "cog", "settings", "config", "network"]));
write("wifi-off", shake("action", ["wifi", "off", "disconnected", "no-signal", "disabled"]));

// Wind: nudgeRight (blow)
write("wind", nudgeRight("action", ["wind", "air", "breeze", "weather", "blow", "gust"]));
write("wind-arrow-down", nudgeDown("action", ["wind", "arrow", "down", "draft", "air", "downdraft"]));

// Wine: tilt
write("wine", `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -5, 0] },
  },
  transition: { duration: 0.45, ease: "easeInOut" },
  category: "action",
  tags: ["wine", "drink", "glass", "toast", "cheers", "alcohol"],
};
`);
write("wine-off", shake("action", ["wine", "off", "no-alcohol", "sober", "disabled"]));

// Workflow: nudgeRight
write("workflow", nudgeRight("action", ["workflow", "process", "automation", "pipeline", "steps"]));

// Worm: crawl nudgeRight
write("worm", nudgeRight("action", ["worm", "animal", "crawl", "garden", "slow"]));

// Wrench: rotate (tighten)
write("wrench", rotateCW(45, "action", ["wrench", "fix", "repair", "tool", "maintenance", "configure"]));

// ── X ──

write("x-line-top", shake("action", ["x", "line", "close", "cancel", "mark"]));

// ── Y ──

write("youtube", zoomIn("media", ["youtube", "video", "watch", "brand", "stream"]));

// ── Z ──

// Zap-off: shake
write("zap-off", shake("action", ["zap", "off", "disabled", "no-power", "inactive"]));

// Zodiac family: slow rotate (celestial)
const zodiacSigns = [
  "zodiac-aquarius",
  "zodiac-aries",
  "zodiac-cancer",
  "zodiac-capricorn",
  "zodiac-gemini",
  "zodiac-leo",
  "zodiac-libra",
  "zodiac-ophiuchus",
  "zodiac-pisces",
  "zodiac-sagittarius",
  "zodiac-scorpio",
  "zodiac-taurus",
  "zodiac-virgo",
];

for (const name of zodiacSigns) {
  const sign = name.replace("zodiac-", "");
  write(name, `import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 10, -10, 5, 0], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["zodiac", "${sign}", "astrology", "celestial", "horoscope"],
};
`);
}

// Zoom in/out
write("zoom-in", zoomIn("action", ["zoom", "in", "magnify", "enlarge", "scale"]));
write("zoom-out", zoomOut("action", ["zoom", "out", "shrink", "reduce", "scale"]));

console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
