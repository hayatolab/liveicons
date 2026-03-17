import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: 3 },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["cart", "shop", "commerce"],
};
