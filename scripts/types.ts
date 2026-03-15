import type { Variants, Transition } from "motion/react";

/**
 * Parsed attributes from the source SVG root element.
 * Used by the template to render the correct wrapper element props.
 */
export interface SvgAttrs {
  viewBox: string;
  /** true = stroke-based icon (fill="none" on root, stroke prop drives color) */
  strokeBased: boolean;
  strokeLinecap?: string;
  strokeLinejoin?: string;
}

/**
 * Defines the animation for a single icon.
 *
 * Each icon in scripts/animations/<name>.ts exports one of these.
 * The generate.ts script injects it into the component template.
 */
export interface AnimationDef {
  /**
   * Which SVG element to animate:
   * - "svg"   → wraps the entire <svg> in <motion.svg>
   * - "path"  → wraps specific paths in <motion.path>; use `pathIndex` to target
   * - "group" → wraps all paths in a <motion.g>
   */
  target: "svg" | "path" | "group";

  /**
   * Which path indices to animate (only relevant when target = "path").
   * Defaults to [0] (first path). Use "all" to animate all paths.
   */
  pathIndex?: number[] | "all";

  /** Motion variants — must include "normal" and "animate" states */
  variants: Variants;

  /**
   * Default transition applied to the animated element.
   * For "loop" mode, the generate script automatically adds repeat: Infinity.
   */
  transition: Transition;

  /**
   * Icon category — used for docs and search.
   * E.g. "navigation", "media", "feedback", "action"
   */
  category?: string;

  /** Search tags for the docs site */
  tags?: string[];
}
