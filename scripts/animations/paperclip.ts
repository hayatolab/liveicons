import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -10, 5, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 20 },
  category: "action",
  tags: ["paperclip", "clip", "attach", "file"],
};
