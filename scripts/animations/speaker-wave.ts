import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "media",
  tags: ["speaker", "audio", "sound", "volume"],
};