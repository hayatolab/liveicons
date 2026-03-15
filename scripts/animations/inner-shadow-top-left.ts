import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, -3, 0], y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
};