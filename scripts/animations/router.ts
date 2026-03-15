import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.85, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["router", "network", "wifi", "internet"],
};
