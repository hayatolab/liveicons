import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, -1, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};