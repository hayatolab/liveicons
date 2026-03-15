import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 15 },
  category: "feedback",
  tags: ["trending", "up", "growth", "increase", "chart"],
};
