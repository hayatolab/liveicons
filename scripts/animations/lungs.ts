import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
  },
  transition: { duration: 0.8, ease: "easeInOut" },
  category: "feedback",
  tags: ["breath", "lungs", "health"],
};