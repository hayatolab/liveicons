import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0, -2, 0] },
  },
  transition: { duration: 0.4 },
  category: "action",
  tags: ["secure", "password", "protected", "closed"],
};
