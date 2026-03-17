import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "action",
  tags: ["bookmark", "save", "mark"],
};
