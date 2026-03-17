import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "group",
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  },
  transition: {
    staggerChildren: 0.05,
    duration: 0.35,
    ease: "easeOut",
  },
  category: "feedback",
  tags: ["sun", "light", "day", "theme"],
};
