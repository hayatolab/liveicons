import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { type: "spring", stiffness: 80, damping: 20 },
  category: "navigation",
  tags: ["globe", "world", "planet", "internet", "spin"],
};
