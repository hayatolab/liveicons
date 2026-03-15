import type { AnimationDef } from "../../types";

// Fill-safe override: uses scale+opacity instead of pathLength (stroke-only)
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [0.7, 1.15, 1], opacity: [0.5, 1, 1] },
  },
  transition: { type: "spring", stiffness: 350, damping: 18 },
  category: "feedback",
  tags: ["done", "success", "confirm", "tick", "complete"],
};
