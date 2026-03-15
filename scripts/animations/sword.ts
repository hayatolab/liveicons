import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -25, 15, -8, 0] },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "action",
  tags: ["sword", "weapon", "slash", "fight", "blade"],
};
