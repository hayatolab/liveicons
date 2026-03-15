import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -3, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
  tags: ["lock", "locked", "secure", "closed"],
};