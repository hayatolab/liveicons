import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};