import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 0.95, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
};