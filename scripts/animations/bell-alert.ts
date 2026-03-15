import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["notification", "alert", "ring"],
};