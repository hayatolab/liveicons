import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -40, 10, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["pickaxe", "mine", "dig", "tool"],
};
