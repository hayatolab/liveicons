import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, x: 0 },
    animate: { scale: [1, 1.08, 1], x: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["chat", "message", "bubble"],
};