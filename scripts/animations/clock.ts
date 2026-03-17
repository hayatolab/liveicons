import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1],
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 45 },
  },
  transition: { type: "spring", stiffness: 300, damping: 18 },
  category: "feedback",
  tags: ["time", "clock", "schedule"],
};
