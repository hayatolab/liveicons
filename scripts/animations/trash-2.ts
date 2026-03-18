import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -6, 6, -4, 4, 0] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["delete", "remove", "trash"],
};
