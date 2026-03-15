import type { AnimationDef } from "../types";
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -6, 0] },
  },
  transition: { type: "spring", stiffness: 300, damping: 10, mass: 0.8 },
  category: "action",
  tags: ["rocket", "launch", "deploy", "start"],
};