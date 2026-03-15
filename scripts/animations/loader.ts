import type { AnimationDef } from "../types";

// Default animate mode for loader is "loop"
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 360 },
  },
  // repeat: Infinity is injected automatically by the template when animate="loop"
  transition: { duration: 1, ease: "linear" },
  category: "feedback",
  tags: ["loading", "spinner", "progress", "wait", "fetch"],
};
