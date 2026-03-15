import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 4, 0], y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "navigation",
  tags: ["plane", "fly", "travel", "flight"],
};
