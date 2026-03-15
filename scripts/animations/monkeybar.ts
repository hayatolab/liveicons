import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 6, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 10 },
  category: "action",
  tags: ["gymnastics", "sport", "swing"],
};