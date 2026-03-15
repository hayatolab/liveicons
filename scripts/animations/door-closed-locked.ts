import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.95, 1.02, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
};