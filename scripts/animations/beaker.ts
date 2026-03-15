import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["lab", "test", "chemistry", "experiment"],
};