import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.3, 1, 1.15, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
};