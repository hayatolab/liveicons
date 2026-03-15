import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 45 },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "navigation",
  tags: ["compass", "direction", "heading", "map"],
};
