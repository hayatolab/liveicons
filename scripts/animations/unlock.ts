import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
  tags: ["unlock", "open", "access"],
};
