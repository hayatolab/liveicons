import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -30, 30, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["gauge", "meter", "speed", "level", "measure"],
};
