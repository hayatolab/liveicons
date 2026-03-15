import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1, scaleY: 1 },
    animate: { scaleX: [1, 1.1, 1], scaleY: [1, 1.15, 1] },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["rainbow", "color", "arc", "sky", "weather"],
};
