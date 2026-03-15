import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 80, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 20 },
  category: "action",
  tags: ["redo", "forward", "history", "repeat"],
};
