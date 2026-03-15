import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, y: 0 },
    animate: { scale: [1, 1.1, 0.95, 1.05, 1], y: [0, -2, 1, -1, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["fire", "flame", "hot", "trending"],
};