/**
 * Spring presets for liveicons animation definitions.
 *
 * Copy-paste the `transition` value directly into your AnimationDef.
 * All presets are tuned for 24px icons. Scale stiffness DOWN for larger icons.
 *
 * Usage:
 *   transition: SPRING_PRESETS.snappy
 */

import type { Transition } from "motion/react";

export const SPRING_PRESETS = {
  /**
   * Snappy tap feedback — directional nudges (arrows, chevrons)
   * Fast response, settles quickly. No visible overshooting.
   * mass: 0.5 keeps icons feeling lightweight, not sluggish.
   */
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 15,
    mass: 0.5,
  } satisfies Transition,

  /**
   * Click — buttons, toggles (x/close, plus/add, lock)
   * Very stiff, near-instant. Feels like a physical click.
   */
  click: {
    type: "spring",
    stiffness: 500,
    damping: 20,
    mass: 0.5,
  } satisfies Transition,

  /**
   * Standard state change — settings, search
   * Balanced. Slight natural deceleration. No overshoot.
   */
  standard: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.8,
  } satisfies Transition,

  /**
   * Smooth (critically damped) — theme toggles, home
   * No bounce at all. Clean, professional feel.
   */
  smooth: {
    type: "spring",
    stiffness: 200,
    damping: 30,
    mass: 1,
  } satisfies Transition,

  /**
   * Soft — gentle, ambient motions (sun/moon theme)
   * Slower settle, very slight wobble. Feels organic.
   */
  soft: {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  } satisfies Transition,

  /**
   * Bouncy — playful interactions (heart, star, zap)
   * Lower damping = visible overshoot. Feels lively and fun.
   */
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.5,
  } satisfies Transition,
} as const;

/**
 * Tween presets — use when you need precise keyframe control.
 * Spring cannot drive keyframe arrays like [0, -12, 12, -8, 8, -4, 0].
 */
export const TWEEN_PRESETS = {
  /** Standard micro-interaction duration */
  normal: { duration: 0.5, ease: "easeInOut" } satisfies Transition,

  /** Quick feedback (close, dismiss) */
  fast: { duration: 0.25, ease: "easeOut" } satisfies Transition,

  /** Deliberate action (check draw-in, download) */
  deliberate: { duration: 0.4, ease: "easeInOut" } satisfies Transition,

  /** Mechanical continuous rotation (loader, refresh) */
  spin: { duration: 1, ease: "linear" } satisfies Transition,

  /** Slow ambient (status badges, ambient loops) */
  slow: { duration: 1.2, ease: "easeInOut" } satisfies Transition,
} as const;

/**
 * When to use spring vs tween:
 *
 * Use SPRING when:
 *   - Animating to a single end state (rotate 90, scale 1.1)
 *   - Want natural physics deceleration
 *   - Need interruptibility (user can hover off mid-animation)
 *
 * Use TWEEN when:
 *   - Animating through a keyframe sequence [0, -12, 12, -8, 0]
 *   - Need exact timing (draw-in choreography)
 *   - Continuous linear motion (loader spin)
 */
