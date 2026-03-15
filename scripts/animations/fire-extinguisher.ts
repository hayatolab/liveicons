import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -4, 4, -4, 4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["fire", "extinguisher", "safety", "spray"],
};
