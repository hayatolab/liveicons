import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { type: "spring", stiffness: 400, damping: 10 },
  category: "feedback",
  tags: ["warning", "error", "attention", "info"],
};
