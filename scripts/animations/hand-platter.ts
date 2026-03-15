import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
  tags: ["hand", "platter", "serve", "offer", "present"],
};
