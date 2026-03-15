import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 12 },
  category: "action",
  tags: ["fishing", "hook", "cast", "dip"],
};
