# Contributing to liveicons

Thank you for your interest in contributing! liveicons is MIT-licensed and community-driven. Every contribution — a new animated icon, a bug fix, a docs improvement — matters.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding an Animated Icon](#adding-an-animated-icon)
- [Commit Message Format](#commit-message-format)
- [Semantic Versioning](#semantic-versioning)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

| Type | Where |
|------|--------|
| New animated icon | Add an `AnimationDef` + open a PR |
| Bug report | [GitHub Issues](https://github.com/hayatolab/liveicons/issues) |
| Feature request | [GitHub Discussions](https://github.com/hayatolab/liveicons/discussions) |
| Documentation | `apps/docs/` |
| Performance / DX | `packages/react/`, `packages/core/` |

> **The highest-impact contribution is a well-crafted animation definition for an icon that doesn't have one yet.** See [Adding an Animated Icon](#adding-an-animated-icon).

---

## Development Setup

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | `>=20` |
| pnpm | `9.0.0` (pinned) |

Install pnpm if needed:

```bash
corepack enable
corepack prepare pnpm@9.0.0 --activate
```

### First-time setup

```bash
git clone https://github.com/hayatolab/liveicons.git
cd liveicons
pnpm install          # installs all workspace deps + sets up Husky hooks
pnpm build            # compile all packages
pnpm dev              # playground at http://localhost:3001 (watch mode)
```

### Useful commands

```bash
pnpm validate         # lint generated components (7 rules)
pnpm check-imports    # verify import sources are in the allowlist
pnpm check-duplicates # detect duplicate icon names within the same source
pnpm typecheck        # run tsc --noEmit across all packages
pnpm test             # run Vitest
pnpm build            # production compile (tsup)
```

---

## Project Structure

```
liveicons/
├── icons/                    # Source SVGs (8 468 icons, 5 sources)
│   ├── lucide/               # 1 708 icons — primary/default source
│   ├── tabler/
│   ├── tabler-filled/
│   ├── heroicons/
│   └── heroicons-solid/
├── scripts/
│   ├── animations/           # AnimationDef files (one per icon)
│   ├── generate.ts           # SVG + def → React component
│   ├── validate.ts           # Linter (7 rules)
│   └── ...
├── packages/
│   ├── react/                # "liveicons" npm package (published)
│   ├── core/                 # "@liveicons/core" — types + resolveSpeed()
│   └── vue/                  # Phase 2 placeholder
└── apps/
    ├── docs/                 # liveicons.dev (Next.js 15 + Fumadocs)
    └── playground/           # Vite dev sandbox (port 3001)
```

---

## Adding an Animated Icon

> **Never hand-write a component.** All components are generated from `AnimationDef` files.

### Quickstart

```bash
# 1. Confirm the SVG exists
ls icons/lucide/<name>.svg

# 2. Create the animation definition
touch scripts/animations/<name>.ts

# 3. Generate the component
pnpm generate --icon <name>

# 4. Validate and build
pnpm validate && pnpm build

# 5. Preview in the playground
pnpm dev   # open http://localhost:3001
```

### AnimationDef template

```typescript
// scripts/animations/bell.ts
import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",           // "svg" | "path" | "group"
  variants: {
    normal:  { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",    // "navigation" | "action" | "feedback" | "media"
  tags: ["bell", "notification", "alert"],
};
```

### Target selection

| Scenario | Target |
|----------|--------|
| Whole-icon motion (shake, spin, bounce) | `"svg"` |
| Draw-on / reveal animation | `"path"` — set `pathLength: [0, 1]` |
| Coordinated multi-path motion | `"group"` |
| One path moves, others stay | `"path"` + `pathIndex: [n]` |

### Motion patterns (semantic guide)

| Motion | Properties | Example icons |
|--------|-----------|---------------|
| Shake / wiggle | `rotate: [0, -12, 12, -8, 8, -4, 0]` | bell, trash |
| Nudge directional | `x: [0, 4, 0]` or `y: [0, -4, 0]` | arrows, chevrons |
| Pulse / heartbeat | `scale: [1, 1.3, 1, 1.15, 1]` | heart |
| Spin (loop) | `rotate: 360`, `ease: "linear"` | loader |
| Rotate to state | `rotate: 90` or `rotate: 45` | settings, sun |
| Draw-on | `pathLength: [0, 1]`, `opacity: [0, 1]` | check |
| Flash / flicker | `opacity: [1, 0.4, 1]` | zap, info |
| Scale pop | `scale: [1, 1.2, 1]` | star, plus |

### Duration guidelines

| Trigger | Duration |
|---------|---------|
| Click / tap feedback | 70–150 ms |
| Hover micro-interaction | 100–150 ms |
| Toggle / state change | 150–300 ms |
| Attention / notification | 300–600 ms |
| Loop cycle (spinner) | 600–1 500 ms |

**Hard ceiling: 400 ms** (Material Design). Above that, animations feel sluggish.

### Common mistakes

| Mistake | Fix |
|---------|-----|
| `repeat: Infinity` in the def | Remove it — the template injects it for `loop` mode |
| Hardcoded hex color | Use `stroke={color}` from the `color` prop |
| Variant key not `normal` / `animate` | The template expects exactly these two keys |
| Duration hardcoded in variants | Don't — `resolveSpeed()` injects duration at runtime |

### Pre-PR checklist for new icons

- [ ] `pnpm validate` passes
- [ ] `pnpm check-imports` passes
- [ ] `pnpm check-duplicates` passes
- [ ] `pnpm build` compiles cleanly
- [ ] Tested in playground (hover, click, loop, once modes)
- [ ] Animation feels snappy — under 400 ms for the active interaction

---

## Commit Message Format

liveicons uses [Conventional Commits](https://www.conventionalcommits.org/). Commitlint enforces this on every commit via Husky.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer: BREAKING CHANGE: <description>]
```

### Types

| Type | When to use |
|------|------------|
| `feat` | New icon animation, new API prop, new feature |
| `fix` | Bug fix in a component, hook, or script |
| `docs` | Documentation only |
| `refactor` | Code restructuring — no new feature, no bug fix |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `chore` | Tooling, dependency updates, config changes |
| `ci` | CI/CD workflow changes |
| `revert` | Reverts a previous commit |

### Scopes

Scope is optional — omit it when a change spans multiple areas or doesn't fit a single scope (e.g. `chore: bump all deps`).

| Scope | Area |
|-------|------|
| `react` | `packages/react/` — main library |
| `core` | `packages/core/` — types, `resolveSpeed()` |
| `vue` | `packages/vue/` — Vue adapter |
| `icons` | `scripts/animations/` — animation definitions |
| `scripts` | `scripts/` — generation pipeline |
| `docs` | `apps/docs/` |
| `playground` | `apps/playground/` |
| `deps` | Dependency updates |
| `ci` | CI/CD configuration |
| `release` | Release and changelog process |
| `config` | Root-level tooling config |

### Examples

```bash
# New animated icon
feat(icons): add animation for download icon

# Bug fix in the React package
fix(react): correct transform-origin for path targets

# Breaking API change
feat(react)!: rename speed prop to duration

BREAKING CHANGE: the `speed` prop has been renamed to `duration`.
Users must update all <Icon speed="fast" /> to <Icon duration="fast" />.

# Dependency update
chore(deps): upgrade motion to 11.5.0

# Documentation only
docs(docs): add accessibility guide for reduced-motion
```

---

## Semantic Versioning

liveicons follows [SemVer](https://semver.org/) (`MAJOR.MINOR.PATCH`). The release version is determined automatically from commit history.

### Commit → version bump mapping

| Commit type | Version bump | Example |
|-------------|-------------|---------|
| `feat(scope):` | **minor** `0.x.0` | New animated icon, new prop |
| `fix(scope):` | **patch** `0.0.x` | Bug fix |
| `perf(scope):` | **patch** `0.0.x` | Performance improvement |
| `feat(scope)!:` or `BREAKING CHANGE:` footer | **major** `x.0.0` | Renamed prop, removed export |
| `docs:`, `chore:`, `ci:`, `refactor:`, `test:` | **no bump** | No user-facing change |

### Rules

1. **Never manually edit the `version` field** in `package.json` — releases are automated.
2. **Breaking changes require a major bump** and must include a `BREAKING CHANGE:` footer explaining the migration path.
3. **Pre-1.0.0 policy**: while on `0.x.y`, breaking changes bump minor (not major) per SemVer spec. Breaking changes are still noted with `BREAKING CHANGE:` in the commit.
4. **Multiple packages**: `liveicons` (react) and `@liveicons/core` are versioned together (lockstep). The `vue` adapter will be versioned independently when it reaches Phase 2.

---

## Pull Request Process

1. **Fork** the repository and create a branch:
   ```bash
   git checkout -b feat/icons/download-icon
   ```
   Branch naming: `<type>/<scope>/<short-description>`

2. **Make your changes** following the guidelines above.

3. **Run pre-flight checks:**
   ```bash
   pnpm validate && pnpm check-imports && pnpm check-duplicates && pnpm build
   ```

4. **Commit** using Conventional Commits format. The commit-msg hook will reject non-conforming messages.

5. **Open a PR** against `main`. Use the PR template and fill in:
   - What changed and why
   - Screenshot / recording of the animation (for icon PRs)
   - Breaking changes (if any)

6. **CI must pass** — typecheck, validate, build, tests.

7. A maintainer will review. Icon animation PRs are typically reviewed within 72 hours.

### PR title format

PR titles follow the same Conventional Commits format:

```
feat(icons): add animation for download, upload, share icons
fix(react): correct pathIndex offset for multi-path targets
```

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you agree to uphold a welcoming and respectful environment.

Report unacceptable behavior to [work@hayato.me](mailto:work@hayato.me).
