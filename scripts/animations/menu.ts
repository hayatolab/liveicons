import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "group",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.7, 1] },
  },
  transition: {
    staggerChildren: 0.06,
    duration: 0.25,
    ease: "easeInOut",
  },
  category: "navigation",
  tags: ["menu", "hamburger", "nav"],
};
