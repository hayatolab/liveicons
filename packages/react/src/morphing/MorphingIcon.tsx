"use client";

import { motion, useSpring, useReducedMotion } from "motion/react";
import type { SpringOptions, Transition } from "motion/react";
import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { ICONS } from "./icons";
import type { MorphingIconName } from "./icons";

const MORPH_TRANSITION: Transition = {
  ease: [0.19, 1, 0.22, 1],
  duration: 0.4,
};
const INSTANT_TRANSITION: Transition = { duration: 0 };

const SPRING_CONFIG: SpringOptions = { stiffness: 260, damping: 20 };

export interface MorphingIconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  /** The icon to display. Change this prop to trigger a morph. */
  icon: MorphingIconName;
  /** Icon size in px. Default: 24 */
  size?: number;
  /** Stroke color. Default: "currentColor" */
  color?: string;
  /**
   * Stroke width in SVG user units (viewBox is 14×14).
   * Default: 1.5 — visually equivalent to strokeWidth=2 on a 24×24 icon.
   */
  strokeWidth?: number;
}

export function MorphingIcon({
  icon,
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className,
  ...props
}: MorphingIconProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const activeTransition = reducedMotion ? INSTANT_TRANSITION : MORPH_TRANSITION;

  const definition = ICONS[icon];
  const prevGroupRef = useRef<string | undefined>(definition.group);

  const rotation = useSpring(definition.rotation ?? 0, SPRING_CONFIG);

  useEffect(() => {
    const prevGroup = prevGroupRef.current;
    const nextGroup = definition.group;
    const shouldAnimate =
      !reducedMotion &&
      prevGroup !== undefined &&
      nextGroup !== undefined &&
      prevGroup === nextGroup;

    if (shouldAnimate) {
      rotation.set(definition.rotation ?? 0);
    } else {
      rotation.jump(definition.rotation ?? 0);
    }

    prevGroupRef.current = nextGroup;
  }, [definition, reducedMotion, rotation]);

  const [l1, l2, l3] = definition.lines;

  return (
    <div className={className} {...props}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <motion.g style={{ rotate: rotation, transformOrigin: "7px 7px" }}>
          <motion.line
            initial={{ x1: l1.x1, y1: l1.y1, x2: l1.x2, y2: l1.y2, opacity: l1.opacity ?? 1 }}
            animate={{ x1: l1.x1, y1: l1.y1, x2: l1.x2, y2: l1.y2, opacity: l1.opacity ?? 1 }}
            transition={activeTransition}
          />
          <motion.line
            initial={{ x1: l2.x1, y1: l2.y1, x2: l2.x2, y2: l2.y2, opacity: l2.opacity ?? 1 }}
            animate={{ x1: l2.x1, y1: l2.y1, x2: l2.x2, y2: l2.y2, opacity: l2.opacity ?? 1 }}
            transition={activeTransition}
          />
          <motion.line
            initial={{ x1: l3.x1, y1: l3.y1, x2: l3.x2, y2: l3.y2, opacity: l3.opacity ?? 1 }}
            animate={{ x1: l3.x1, y1: l3.y1, x2: l3.x2, y2: l3.y2, opacity: l3.opacity ?? 1 }}
            transition={activeTransition}
          />
        </motion.g>
      </svg>
    </div>
  );
}

MorphingIcon.displayName = "MorphingIcon";
