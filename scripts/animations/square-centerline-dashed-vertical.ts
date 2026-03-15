import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 1.2, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["centerline", "vertical", "dashed"],
};
