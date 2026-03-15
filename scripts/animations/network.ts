import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1 },
    animate: { scale: [1, 1.1, 0.95, 1] },
  },
  transition: { type: "spring", stiffness: 280, damping: 20 },
  category: "action",
  tags: ["network", "connection", "nodes", "topology"],
};
