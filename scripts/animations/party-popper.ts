import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, -20, 15, -10, 0], scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 20 },
  category: "feedback",
  tags: ["party", "celebrate", "confetti", "fun"],
};
