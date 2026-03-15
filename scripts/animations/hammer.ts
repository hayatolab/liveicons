import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -40, 0] },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "action",
  tags: ["hammer", "tool", "build", "hit", "chop"],
};
