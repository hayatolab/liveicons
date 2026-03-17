import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 90 },
  },
  transition: { type: "spring", stiffness: 300, damping: 18 },
  category: "action",
  tags: ["settings", "gear", "config"],
};
