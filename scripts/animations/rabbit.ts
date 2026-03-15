import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -6, 1, 0], scale: [1, 1.05, 0.95, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 20 },
  category: "action",
  tags: ["rabbit", "hop", "animal", "fast", "bounce"],
};
