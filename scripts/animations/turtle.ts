import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 80, damping: 15 },
  category: "action",
  tags: ["turtle", "slow", "animal", "nature", "pace"],
};
