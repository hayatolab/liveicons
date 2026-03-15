import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.3, 0.9, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10 },
  category: "feedback",
  tags: ["emotion", "surprised", "face"],
};