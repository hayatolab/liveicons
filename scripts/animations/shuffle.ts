import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, scale: 1 },
    animate: { x: [0, -3, 3, 0], scale: [1, 0.95, 1.05, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "media",
  tags: ["shuffle", "random", "mix", "random", "playlist"],
};
