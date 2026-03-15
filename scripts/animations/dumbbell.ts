import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
};