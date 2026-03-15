import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
  },
  transition: { duration: 0.5, ease: "easeOut" },
  category: "feedback",
  tags: ["cursor", "ripple", "click", "interact"],
};