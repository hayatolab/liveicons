import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 6, 0], y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 12 },
  category: "action",
  tags: ["send", "paper-airplane", "message", "launch"],
};