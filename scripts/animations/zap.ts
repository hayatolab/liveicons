import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { opacity: 1, scale: 1 },
    animate: {
      opacity: [1, 0.4, 1, 0.6, 1],
      scale: [1, 1.1, 1],
    },
  },
  transition: { duration: 0.5 },
  category: "feedback",
  tags: ["lightning", "fast", "energy", "power", "instant", "flash"],
};
