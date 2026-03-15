import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.2, 0.95, 1.08, 1], opacity: [1, 0.7, 1] },
  },
  transition: { duration: 0.5, ease: "easeOut" },
  category: "action",
  tags: ["target", "aim", "focus", "goal", "bullseye", "bullseye", "aim", "precision", "shoot"],
};
