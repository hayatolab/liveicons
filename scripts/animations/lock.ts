import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1],
  variants: {
    normal: { y: 0 },
    animate: { y: -6 },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["lock", "security", "unlock"],
};
