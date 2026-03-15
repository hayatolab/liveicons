import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 1, -1, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 12 },
  category: "action",
  tags: ["tablets", "pills", "medicine", "health", "drugs"],
};
