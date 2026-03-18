import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { pathLength: 0, opacity: 0, scale: 0.8 },
    animate: { pathLength: 1, opacity: 1, scale: 1 },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "feedback",
  tags: ["star", "favorite", "rate"],
};
