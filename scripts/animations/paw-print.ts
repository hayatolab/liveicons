import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -4, 1, 0] },
  },
  transition: { type: "spring", stiffness: 280, damping: 20 },
  category: "action",
  tags: ["paw", "animal", "pet", "step", "track"],
};
