import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 0, -3, 0], y: [0, -4, 0, 0] },
  },
  transition: { duration: 0.6, bounce: 0.3 },
  category: "action",
  tags: ["find", "lookup", "magnifier", "query"],
};
