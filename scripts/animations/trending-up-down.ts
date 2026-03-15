import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 2, 0] },
  },
  transition: { type: "spring", stiffness: 250, damping: 12 },
  category: "feedback",
  tags: ["trending", "up-down", "volatile", "change", "chart"],
};
