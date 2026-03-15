import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 4, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
  tags: ["phone", "forwarded", "redirect", "call"],
};
