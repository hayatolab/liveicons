import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1],
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 2, -2, 1, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["view", "see", "visible", "eye"],
};
