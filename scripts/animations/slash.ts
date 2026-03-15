import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -15, 15, 0] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "action",
  tags: ["slash", "divider", "separator", "cancel"],
};
