import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0, y: 0 },
    animate: { x: [0, 3, 0], y: [0, 2, 0] },
  },
  transition: { duration: 0.4, ease: "easeOut" },
  category: "action",
  tags: ["signature", "sign", "autograph", "write", "document"],
};
