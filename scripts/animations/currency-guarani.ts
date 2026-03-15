import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10, mass: 0.5 },
  category: "action",
};