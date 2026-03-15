import { useAnimation } from "motion/react";
import { useCallback, useRef } from "react";
import type { AnimateMode } from "@liveicons/core";

/**
 * Shared animation hook used by every liveicons React component.
 * Handles on-hover, on-click, loop, and once trigger modes.
 */
export function useIconAnimation(mode: AnimateMode = "on-hover") {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  const startAnimation = useCallback(() => {
    controls.start("animate");
  }, [controls]);

  const stopAnimation = useCallback(() => {
    controls.start("normal");
  }, [controls]);

  const handleMouseEnter = useCallback(() => {
    if (mode === "on-hover" && !isControlledRef.current) {
      controls.start("animate");
    }
  }, [controls, mode]);

  const handleMouseLeave = useCallback(() => {
    if (mode === "on-hover" && !isControlledRef.current) {
      controls.start("normal");
    }
  }, [controls, mode]);

  const handleClick = useCallback(() => {
    if (mode === "on-click" && !isControlledRef.current) {
      controls.start("animate");
    }
  }, [controls, mode]);

  return {
    controls,
    isControlledRef,
    startAnimation,
    stopAnimation,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
}
