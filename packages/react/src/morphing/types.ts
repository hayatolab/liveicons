export interface IconLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Opacity — set to 0 for collapsed (invisible) lines */
  opacity?: number;
}

export interface IconDefinition {
  lines: [IconLine, IconLine, IconLine];
  /** Rotation in degrees, applied to the whole icon */
  rotation?: number;
  /**
   * Icons sharing the same group rotate smoothly between each other.
   * Icons in different (or no) groups jump instantly to their rotation.
   */
  group?: string;
}
