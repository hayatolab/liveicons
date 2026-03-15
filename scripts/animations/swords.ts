import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, scale: 1 },
    animate: { x: [0, -3, 3, -2, 2, 0], scale: [1, 1.05, 0.98, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "action",
  tags: ["swords", "battle", "fight", "clash", "conflict"],
};
