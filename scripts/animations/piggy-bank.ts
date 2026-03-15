import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, rotate: 0 },
    animate: { x: [0, -2, 2, -1, 0], rotate: [0, -5, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["piggy", "bank", "save", "money", "coins"],
};
