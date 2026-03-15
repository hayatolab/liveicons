import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, -5, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["sport", "table-tennis", "game"],
};