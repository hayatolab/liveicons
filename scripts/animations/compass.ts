import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 20, -10, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
};