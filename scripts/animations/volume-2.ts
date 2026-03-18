import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "group",
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  },
  transition: {
    staggerChildren: 0.1,
    duration: 0.3,
    ease: "easeOut",
  },
  category: "media",
  tags: ["volume", "sound", "audio"],
};
