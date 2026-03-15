import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};