import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  transition: { duration: 1.2, ease: "linear", repeat: Infinity },
  category: "action",
};