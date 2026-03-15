import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 1.2, 0.9, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
  tags: ["parentheses", "brackets", "code", "syntax"],
};
