import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["warehouse", "storage", "building", "logistics", "inventory"],
};
