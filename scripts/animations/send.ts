import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: 4, y: -4 },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "action",
  tags: ["send", "submit", "launch"],
};
