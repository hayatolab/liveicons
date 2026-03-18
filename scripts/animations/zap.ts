import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: [0, 1, 0.6, 1] },
  },
  transition: { duration: 0.3, ease: "easeOut" },
  category: "feedback",
  tags: ["lightning", "flash", "power"],
};
