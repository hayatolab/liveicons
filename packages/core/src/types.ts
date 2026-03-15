export type AnimateMode = "on-hover" | "on-click" | "loop" | "once" | false;

export type AnimateSpeed = "slow" | "normal" | "fast" | number;

export interface LiveIconBaseProps {
  /** Trigger mode for the animation */
  animate?: AnimateMode;
  /** Animation speed — "slow" | "normal" | "fast" or a custom duration in seconds */
  speed?: AnimateSpeed;
  /** Icon size in px (number) or any CSS unit (string). Default: 24 */
  size?: number | string;
  /** Icon color. Defaults to currentColor */
  color?: string;
  /** SVG stroke width. Default: 2 */
  strokeWidth?: number;
  /** Additional CSS class */
  className?: string;
}

/** Maps AnimateSpeed to a duration in seconds */
export function resolveSpeed(speed: AnimateSpeed = "normal"): number {
  if (typeof speed === "number") return speed;
  return { slow: 1.2, normal: 0.6, fast: 0.25 }[speed];
}
