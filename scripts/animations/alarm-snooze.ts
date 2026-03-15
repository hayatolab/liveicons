import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.05, 1.1, 1], rotate: [0, -5, 5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};