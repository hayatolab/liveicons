import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.2, 0.95, 1] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "feedback",
  tags: ["emotion", "happy", "face"],
};