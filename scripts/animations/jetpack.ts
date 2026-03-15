import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -8, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 8 },
  category: "navigation",
  tags: ["fly", "jet", "launch"],
};