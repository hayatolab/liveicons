import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: -3, y: 3 },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["copy", "duplicate", "clipboard"],
};
