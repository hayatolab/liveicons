import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.08, 1] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "navigation",
  tags: ["panels", "right", "bottom", "layout"],
};
