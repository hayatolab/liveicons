import type { AnimationDef } from "../types";

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
