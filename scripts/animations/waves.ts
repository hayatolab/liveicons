import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -2, 2, -1, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["waves", "water", "ocean", "sea", "flow", "audio"],
};
