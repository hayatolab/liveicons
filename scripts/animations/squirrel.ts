import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 1, -2, 0] },
  },
  transition: { type: "spring", stiffness: 350, damping: 10 },
  category: "action",
  tags: ["squirrel", "animal", "nature", "hop", "jump"],
};
