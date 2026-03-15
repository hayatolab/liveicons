/**
 * validate.ts
 *
 * Validates generated icon components follow liveicons conventions:
 * - Variant constants are UPPER_SNAKE_CASE (SVG_VARIANTS, PATH_VARIANTS)
 * - Component uses forwardRef with LiveIconHandle
 * - Component uses LiveIconProps (not a custom props interface)
 * - No hardcoded hex colors
 * - File is "use client" directive at the top
 *
 * Usage:
 *   pnpm validate
 *   pnpm validate --icon bell
 */

import fs from "node:fs";
import path from "node:path";

import { fileURLToPath } from "node:url";
const __script_dir = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(__script_dir, "../packages/react/src/icons");

interface Issue {
  file: string;
  line: number;
  rule: string;
  message: string;
}

const UPPER_SNAKE_RE = /^[A-Z][A-Z0-9_]+$/;
const HEX_COLOR_RE = /#[0-9a-fA-F]{3,6}/;

function validateFile(filePath: string, fileName: string): Issue[] {
  if (fileName === "index.ts") return [];

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const issues: Issue[] = [];

  // Rule: must have "use client" on line 1
  if (!lines[0].includes('"use client"')) {
    issues.push({ file: fileName, line: 1, rule: "use-client", message: 'Missing "use client" directive' });
  }

  // Rule: must import LiveIconProps and LiveIconHandle
  if (!content.includes("LiveIconProps")) {
    issues.push({ file: fileName, line: 0, rule: "props-type", message: "Must use LiveIconProps from ../types" });
  }
  if (!content.includes("LiveIconHandle")) {
    issues.push({ file: fileName, line: 0, rule: "handle-type", message: "Must use LiveIconHandle from ../types" });
  }

  // Rule: must use forwardRef
  if (!content.includes("forwardRef")) {
    issues.push({ file: fileName, line: 0, rule: "forward-ref", message: "Must use forwardRef" });
  }

  // Rule: variant constants must be UPPER_SNAKE_CASE
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*Variants/);
    if (match) {
      const name = match[1];
      if (!UPPER_SNAKE_RE.test(name)) {
        issues.push({
          file: fileName,
          line: i + 1,
          rule: "variant-naming",
          message: `Variant constant "${name}" must be UPPER_SNAKE_CASE (e.g. SVG_VARIANTS)`,
        });
      }
    }
  }

  // Rule: no hardcoded hex colors
  for (let i = 0; i < lines.length; i++) {
    if (HEX_COLOR_RE.test(lines[i])) {
      issues.push({
        file: fileName,
        line: i + 1,
        rule: "no-hardcoded-color",
        message: `Hardcoded hex color found — use the "color" prop or currentColor`,
      });
    }
  }

  // Rule: variants must have both "normal" and "animate" states
  if (content.includes("Variants") && (!content.includes('"normal"') || !content.includes('"animate"'))) {
    issues.push({ file: fileName, line: 0, rule: "variant-states", message: 'Variants must include "normal" and "animate" states' });
  }

  return issues;
}

/** Collect all .tsx files recursively under a directory */
function collectTsxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectTsxFiles(full));
    } else if (entry.name.endsWith(".tsx")) {
      results.push(full);
    }
  }
  return results;
}

function main() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.log("No icons generated yet. Run pnpm generate first.");
    process.exit(0);
  }

  const args = process.argv.slice(2);
  const iconFilter = args.includes("--icon")
    ? args[args.indexOf("--icon") + 1]?.split(",").map((n) => `${n}.tsx`)
    : null;

  const allFiles = collectTsxFiles(ICONS_DIR)
    .filter((f) => !iconFilter || iconFilter.includes(path.basename(f)));

  let totalIssues = 0;
  for (const filePath of allFiles) {
    const fileName = path.relative(ICONS_DIR, filePath);
    const issues = validateFile(filePath, fileName);
    if (issues.length > 0) {
      console.log(`\n${fileName}:`);
      for (const issue of issues) {
        const location = issue.line > 0 ? `:${issue.line}` : "";
        console.log(`  ✘ [${issue.rule}]${location} ${issue.message}`);
      }
      totalIssues += issues.length;
    }
  }

  if (totalIssues === 0) {
    console.log(`✅ All ${allFiles.length} icons passed validation`);
    process.exit(0);
  } else {
    console.log(`\n✘ ${totalIssues} issue(s) found in ${allFiles.length} icons`);
    process.exit(1);
  }
}

main();
