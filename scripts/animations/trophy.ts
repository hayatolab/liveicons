import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -5, 0], scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "feedback",
  tags: ["trophy", "award", "win", "achievement", "celebrate"],
};
