import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1],
  variants: {
    normal: { scale: 1 },
    animate: { scale: 0.7 },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "media",
  tags: ["camera", "photo", "capture"],
};
