import type { IconDefinition, IconLine } from "./types";

const CENTER = 7;

/** Zero-length line at center — makes unused lines invisible */
const collapsed: IconLine = {
  x1: CENTER,
  y1: CENTER,
  x2: CENTER,
  y2: CENTER,
  opacity: 0,
};

// ─── Shared line sets (for rotational variants) ───────────────────────────

const arrowLines: [IconLine, IconLine, IconLine] = [
  { x1: 2, y1: CENTER, x2: 12, y2: CENTER },      // shaft
  { x1: 7.5, y1: 2.5, x2: 12, y2: CENTER },       // arrowhead top
  { x1: 7.5, y1: 11.5, x2: 12, y2: CENTER },      // arrowhead bottom
];

const chevronLines: [IconLine, IconLine, IconLine] = [
  { x1: 5, y1: 2.5, x2: 9.5, y2: CENTER },        // top arm
  { x1: 5, y1: 11.5, x2: 9.5, y2: CENTER },       // bottom arm
  collapsed,
];

// ─── Icon definitions ─────────────────────────────────────────────────────

export const ICONS: Record<MorphingIconName, IconDefinition> = {
  menu: {
    lines: [
      { x1: 2, y1: 3.5, x2: 12, y2: 3.5 },
      { x1: 2, y1: CENTER, x2: 12, y2: CENTER },
      { x1: 2, y1: 10.5, x2: 12, y2: 10.5 },
    ],
  },

  close: {
    lines: [
      { x1: 2.5, y1: 2.5, x2: 11.5, y2: 11.5 },
      { x1: CENTER, y1: CENTER, x2: CENTER, y2: CENTER, opacity: 0 },
      { x1: 11.5, y1: 2.5, x2: 2.5, y2: 11.5 },
    ],
  },

  plus: {
    lines: [
      { x1: 2, y1: CENTER, x2: 12, y2: CENTER },
      { x1: CENTER, y1: 2, x2: CENTER, y2: 12 },
      collapsed,
    ],
  },

  minus: {
    lines: [
      { x1: 2, y1: CENTER, x2: 12, y2: CENTER },
      collapsed,
      collapsed,
    ],
  },

  check: {
    lines: [
      { x1: 2, y1: 7.5, x2: 5.5, y2: 11 },
      { x1: 5.5, y1: 11, x2: 12, y2: 3 },
      collapsed,
    ],
  },

  more: {
    lines: [
      { x1: 2.5, y1: CENTER, x2: 3.5, y2: CENTER },
      { x1: 6.5, y1: CENTER, x2: 7.5, y2: CENTER },
      { x1: 10.5, y1: CENTER, x2: 11.5, y2: CENTER },
    ],
  },

  "arrow-right": {
    lines: arrowLines,
    rotation: 0,
    group: "arrow",
  },
  "arrow-down": {
    lines: arrowLines,
    rotation: 90,
    group: "arrow",
  },
  "arrow-left": {
    lines: arrowLines,
    rotation: 180,
    group: "arrow",
  },
  "arrow-up": {
    lines: arrowLines,
    rotation: -90,
    group: "arrow",
  },

  "chevron-right": {
    lines: chevronLines,
    rotation: 0,
    group: "chevron",
  },
  "chevron-down": {
    lines: chevronLines,
    rotation: 90,
    group: "chevron",
  },
  "chevron-left": {
    lines: chevronLines,
    rotation: 180,
    group: "chevron",
  },
  "chevron-up": {
    lines: chevronLines,
    rotation: -90,
    group: "chevron",
  },
} satisfies Record<MorphingIconName, IconDefinition>;

export type MorphingIconName =
  | "menu" | "close" | "plus" | "minus" | "check" | "more"
  | "arrow-right" | "arrow-down" | "arrow-left" | "arrow-up"
  | "chevron-right" | "chevron-down" | "chevron-left" | "chevron-up";
