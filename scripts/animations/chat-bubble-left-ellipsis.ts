import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.06, 1], opacity: [1, 0.8, 1] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["typing", "message", "chat", "ellipsis"],
};