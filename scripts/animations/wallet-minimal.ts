import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, scale: 1 },
    animate: { y: [0, -4, 0], scale: [1, 1.05, 1] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "action",
  tags: [""wallet-minimal"", "currency", "money", "money", "payment", "minimal"],
};
