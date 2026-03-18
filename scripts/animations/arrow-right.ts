import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: 4 },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "navigation",
  tags: ["arrow", "right", "next", "forward"],
};
