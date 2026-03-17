import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -45, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 18 },
  category: "action",
  tags: ["key", "unlock", "access"],
};
