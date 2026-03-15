import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, 8, -5, 5, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "action",
  tags: ["outgoing-call", "phone", "call", "dial"],
};