import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { y: 0 },
    animate: { y: -3 },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["email", "message", "envelope"],
};
