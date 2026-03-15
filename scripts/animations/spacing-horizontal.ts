import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.3, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};