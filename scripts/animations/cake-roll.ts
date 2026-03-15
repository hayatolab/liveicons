import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 45, 0] },
  },
  transition: { type: "spring", stiffness: 260, damping: 20 },
  category: "action",
};