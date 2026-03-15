import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 3, ease: "linear" },
  category: "action",
  tags: ["planet", "orbit", "space"],
};