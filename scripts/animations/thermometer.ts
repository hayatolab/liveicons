import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1, y: 0 },
    animate: { scaleY: [1, 1.1, 1], y: [0, -2, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 15 },
  category: "feedback",
  tags: ["temperature", "heat", "weather", "weather"],
};
