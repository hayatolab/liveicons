import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 2, 0], y: [0, -6, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
  tags: ["rocket", "launch", "space", "fast", "startup"],
};
