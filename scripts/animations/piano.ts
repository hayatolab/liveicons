import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, 2, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "media",
  tags: ["piano", "music", "keys", "instrument"],
};
