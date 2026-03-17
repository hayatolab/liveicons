import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0, 1] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "action",
  tags: ["payment", "card", "credit"],
};
