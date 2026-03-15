import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 72, 0] },
  },
  transition: { type: "spring", stiffness: 150, damping: 20 },
  category: "action",
  tags: ["pentagon", "shape", "polygon", "geometry"],
};
