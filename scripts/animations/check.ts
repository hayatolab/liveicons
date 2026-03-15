import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      transition: { duration: 0.3, opacity: { duration: 0.1 } },
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      scale: [0.6, 1],
      transition: { duration: 0.4, opacity: { duration: 0.1 } },
    },
  },
  transition: { duration: 0.4 },
  category: "feedback",
  tags: ["done", "success", "confirm", "tick", "complete"],
};
