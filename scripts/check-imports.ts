/**
 * check-imports.ts
 *
 * Validates that generated icon components only import from allowed sources:
 * - "motion/react"
 * - "react"
 * - "../types"
 * - "../hooks/useIconAnimation"
 * - "@liveicons/core"
 *
 * Disallowed: @/lib/utils (pqoqubbw/icons-specific), absolute paths, etc.
 */

import fs from "node:fs";
import path from "node:path";

import { fileURLToPath } from "node:url";
const __script_dir = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(__script_dir, "../packages/react/src/icons");

const ALLOWED_IMPORTS = [
  "motion/react",
  "react",
  "../types",
  "../../types",
  "../hooks/useIconAnimation",
  "../../hooks/useIconAnimation",
  "@liveicons/core",
];

function checkFile(filePath: string, fileName: string): string[] {
  if (fileName === "index.ts") return [];
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const violations: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^import .+ from ['"]([^'"]+)['"]/);
    if (!match) continue;
    const importPath = match[1];
    if (!ALLOWED_IMPORTS.some((allowed) => importPath.startsWith(allowed))) {
      violations.push(`  Line ${i + 1}: disallowed import "${importPath}"`);
    }
  }

  return violations;
}

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
    console.log("No icons yet. Run pnpm generate first.");
    process.exit(0);
  }

  const files = collectTsxFiles(ICONS_DIR);
  let errors = 0;

  for (const filePath of files) {
    const fileName = path.relative(ICONS_DIR, filePath);
    const violations = checkFile(filePath, fileName);
    if (violations.length > 0) {
      console.log(`\n${fileName}:`);
      violations.forEach((v) => console.log(v));
      errors += violations.length;
    }
  }

  if (errors === 0) {
    console.log(`✅ Import check passed (${files.length} icons)`);
    process.exit(0);
  } else {
    console.log(`\n✘ ${errors} import violation(s) found`);
    process.exit(1);
  }
}

main();
