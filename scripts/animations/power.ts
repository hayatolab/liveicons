import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.6, 1] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
  tags: ["power", "on", "off", "button", "energy"],
};
