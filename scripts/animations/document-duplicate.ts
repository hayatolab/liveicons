import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, x: 0 },
    animate: { y: [0, -2, 0], x: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 15 },
  category: "action",
  tags: ["copy", "duplicate", "clone"],
};