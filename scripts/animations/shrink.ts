import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 0.82, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["shrink", "compress", "smaller", "minimize"],
};
