import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 360] },
  },
  transition: { duration: 0.6, ease: "linear" },
  category: "action",
};