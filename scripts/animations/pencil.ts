import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 1, -1, 1, 0], y: [0, -1, 1, -1, 0] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "action",
  tags: ["edit", "write", "pencil"],
};
