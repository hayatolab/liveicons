import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: "0deg" },
    animate: { rotate: "360deg" },
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
  category: "action",
  tags: ["reload", "sync", "update", "rotate", "retry"],
};
