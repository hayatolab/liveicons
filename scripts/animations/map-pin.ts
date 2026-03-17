import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: -5 },
  },
  transition: { type: "spring", stiffness: 400, damping: 12 },
  category: "feedback",
  tags: ["location", "map", "pin"],
};
