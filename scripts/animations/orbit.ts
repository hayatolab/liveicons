import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 1.5, ease: "linear" },
  category: "action",
  tags: ["orbit", "spin", "rotate", "planet", "space"],
};
