import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 3, -1, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 20 },
  category: "action",
  tags: ["rat", "animal", "scurry", "rodent"],
};
