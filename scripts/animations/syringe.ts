import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0, y: 0 },
    animate: { rotate: [0, -8, 0], y: [0, 2, 0] },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "action",
  tags: ["syringe", "inject", "medical", "vaccine", "needle"],
};
