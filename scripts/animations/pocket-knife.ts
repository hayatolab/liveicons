import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -20, 5, 0] },
  },
  transition: { type: "spring", stiffness: 280, damping: 20 },
  category: "action",
  tags: ["pocket", "knife", "tool", "blade", "open"],
};
