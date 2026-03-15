import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "navigation",
  tags: ["plane", "tilt", "fly"],
};