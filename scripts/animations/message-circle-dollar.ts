import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -6, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10 },
  category: "action",
  tags: ["money", "currency", "bounce"],
};