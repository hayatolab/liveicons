import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -3, 3, -2, 2, 0] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "feedback",
  tags: ["phone", "call", "ring"],
};
