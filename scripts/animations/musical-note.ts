import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0, rotate: 0 },
    animate: { y: [0, -4, 0], rotate: [0, 5, -5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["music", "audio", "sound", "note"],
};