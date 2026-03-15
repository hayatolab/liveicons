import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, -2, 0], y: [0, 2, -1, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["paintbrush", "brush", "paint", "art"],
};
