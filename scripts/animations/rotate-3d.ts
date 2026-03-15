import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 120, 0] },
  },
  transition: { type: "spring", stiffness: 150, damping: 20 },
  category: "action",
  tags: ["rotate", "3d", "transform", "spin"],
};
