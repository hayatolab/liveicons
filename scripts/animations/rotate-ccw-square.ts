import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: -90 },
  },
  transition: { type: "spring", stiffness: 250, damping: 20 },
  category: "action",
  tags: ["rotate", "ccw", "square", "counter-clockwise"],
};
