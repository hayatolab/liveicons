import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, 90, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
};