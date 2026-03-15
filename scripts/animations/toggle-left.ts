import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
  tags: ["toggle", "switch", "on", "off", "off", "disabled"],
};
