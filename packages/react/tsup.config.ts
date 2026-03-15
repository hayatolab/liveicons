import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";

const iconsDir = path.join(__dirname, "src/icons");

// Discover which source subdirectories have been generated
const sourceDirs = fs.existsSync(iconsDir)
  ? fs
      .readdirSync(iconsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
  : [];

// One entry point per source for tree-shaking
// e.g. "react/lucide/index" → src/icons/lucide/index.ts
//      bundled as dist/react/lucide/index.mjs
const sourceEntries = Object.fromEntries(
  sourceDirs.map((s) => [`react/${s}/index`, `src/icons/${s}/index.ts`])
);

export default defineConfig([
  // Main package entry: ESM + CJS (small, just re-exports lucide + types)
  {
    entry: { "react/index": "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    external: ["react", "react-dom", "motion"],
    esbuildOptions(options) {
      options.banner = { js: '"use client";' };
    },
  },
  // Per-source entries: ESM only (large bundles — CJS doubles memory usage)
  {
    entry: sourceEntries,
    format: ["esm"],
    dts: true,
    sourcemap: false,
    external: ["react", "react-dom", "motion"],
    esbuildOptions(options) {
      options.banner = { js: '"use client";' };
    },
  },
]);
