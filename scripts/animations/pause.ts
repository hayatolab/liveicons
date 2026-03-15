import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scaleX: 1 },
    animate: { scaleX: [1, 0.8, 1] },
  },
  transition: { duration: 0.25, ease: "easeInOut" },
  category: "media",
  tags: ["stop", "hold", "video", "audio", "wait"],
};
