import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: -180 },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["undo", "dot", "revert", "history"],
};
