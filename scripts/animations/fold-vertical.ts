import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 0.8, 1] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "action",
  tags: ["fold", "vertical", "collapse", "compress"],
};
