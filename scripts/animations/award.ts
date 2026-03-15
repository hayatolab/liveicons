import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};