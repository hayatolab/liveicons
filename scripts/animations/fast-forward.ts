import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { duration: 0.3, ease: "easeOut" },
  category: "media",
  tags: ["forward", "skip", "fast", "next"],
};
