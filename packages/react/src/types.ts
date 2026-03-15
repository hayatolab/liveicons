import type { HTMLAttributes } from "react";
import type { LiveIconBaseProps } from "@liveicons/core";

export interface LiveIconProps
  extends LiveIconBaseProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

export interface LiveIconHandle {
  /** Imperatively trigger the animation */
  startAnimation: () => void;
  /** Imperatively stop/reset the animation */
  stopAnimation: () => void;
}
