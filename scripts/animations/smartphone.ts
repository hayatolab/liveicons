import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, -2, 2, -2, 2, -1, 1, 0] },
  },
  transition: { duration: 0.35, ease: "easeInOut" },
  category: "feedback",
  tags: ["vibrate", "buzz", "haptic", "phone", "mobile", "device"],
};
