import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1],
  variants: {
    normal: { y: 0 },
    animate: { y: -3 },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["user", "person", "profile"],
};
