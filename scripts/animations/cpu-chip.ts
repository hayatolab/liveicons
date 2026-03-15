import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.06, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.6, ease: "easeInOut" },
  category: "feedback",
  tags: ["processor", "chip", "computing", "hardware"],
};