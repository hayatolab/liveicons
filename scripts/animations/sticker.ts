import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, rotate: 0 },
    animate: { scale: [1, 1.2, 0.9, 1.1, 1], rotate: [0, 15, -10, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["sticker", "emoji", "react", "fun", "decal"],
};
