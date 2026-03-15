import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.85, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "navigation",
  tags: ["hamburger", "sidebar", "navigation", "drawer"],
};
