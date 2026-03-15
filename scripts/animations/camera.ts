import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.9, 1.05, 1] },
  },
  transition: { duration: 0.25, ease: "easeInOut" },
  category: "action",
};