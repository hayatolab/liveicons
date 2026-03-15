import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["rose", "flower", "bloom", "garden"],
};
