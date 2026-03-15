import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
  tags: ["cube", "3d", "transparent", "object"],
};