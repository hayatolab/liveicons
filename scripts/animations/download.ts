import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0, 2],
  variants: {
    normal: { y: 0 },
    animate: { y: 6 },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["download", "save"],
};
