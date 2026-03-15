import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 6, 0], y: [0, -6, 0] },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "action",
  tags: ["submit", "email", "message", "share", "deliver"],
};
