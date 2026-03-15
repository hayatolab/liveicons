import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -8, 8, -5, 0] },
  },
  transition: { duration: 0.45, ease: "easeInOut" },
  category: "action",
  tags: ["handbag", "bag", "purse", "swing", "fashion"],
};
