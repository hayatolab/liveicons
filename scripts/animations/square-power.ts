import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { opacity: 1, scale: 1 },
    animate: { opacity: [1, 0.2, 1, 0.5, 1], scale: [1, 1.05, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["square", "power", "on", "off", "toggle"],
};
