import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 15, -9, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["square", "scissors", "cut", "trim"],
};
