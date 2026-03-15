import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["spray", "scent", "fragrance"],
};