import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { x: 0 },
    animate: { x: [0, 5, 0] },
  },
  transition: { type: "spring", stiffness: 200, damping: 15 },
  category: "action",
  tags: [""tractor"", "vehicle", "transport", "farm", "agriculture", "field", "drive"],
};
