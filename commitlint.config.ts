import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Allowed scopes map 1:1 to monorepo packages and work areas.
    // Add a scope here when adding a new package or major work area.
    "scope-enum": [
      2,
      "always",
      [
        "react",       // packages/react — main published library
        "core",        // packages/core — framework-agnostic types + utils
        "vue",         // packages/vue — Vue 3 adapter (Phase 2)
        "icons",       // scripts/animations/* — animation definition files
        "scripts",     // scripts/* — generation pipeline
        "docs",        // apps/docs — liveicons.dev docs site
        "playground",  // apps/playground — dev sandbox
        "deps",        // dependency updates (renovate / manual)
        "ci",          // CI/CD workflows
        "release",     // release process and changelogs
        "config",      // root-level tooling config (tsconfig, turbo, etc.)
      ],
    ],
    // Scope is optional — omit when a change spans multiple packages or doesn't fit a single scope.
    "scope-empty": [0, "never"],
    // Keep subject short and imperative.
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 100],
  },
};

export default config;
