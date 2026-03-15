import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
  },
  transition: { duration: 0.35, ease: "easeOut" },
  category: "navigation",
  tags: ["link", "open", "new-tab", "navigate"],
};
