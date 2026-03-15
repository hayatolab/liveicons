import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 3, 0] },
  },
  transition: { type: "spring", stiffness: 500, damping: 20 },
  category: "navigation",
  tags: ["dropdown", "collapse", "caret", "select"],
};
