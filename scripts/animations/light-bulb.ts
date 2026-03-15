import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] },
  },
  transition: { type: "spring", stiffness: 250, damping: 10 },
  category: "feedback",
  tags: ["idea", "inspiration", "bulb", "light"],
};