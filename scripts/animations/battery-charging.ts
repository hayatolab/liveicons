import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.05, 1], x: [0, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};