import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: 60 },
  },
  transition: { type: "spring", stiffness: 80, damping: 12 },
  category: "action",
  tags: ["snowflake", "snow", "cold", "winter", "ice", "freeze"],
};
