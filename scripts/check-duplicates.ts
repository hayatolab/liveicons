/**
 * check-duplicates.ts
 *
 * Checks that no icon name appears more than once WITHIN the same source.
 * Cross-source duplicates are intentional — same icon, different visual style.
 */

import fs from "node:fs";
import path from "node:path";

import { fileURLToPath } from "node:url";
const __script_dir = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(__script_dir, "../icons");

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function main() {
  const sources = fs
    .readdirSync(ICONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let errors = 0;

  for (const source of sources) {
    const sourceDir = path.join(ICONS_DIR, source);
    const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".svg"));

    const namesSeen = new Set<string>();
    const componentsSeen = new Set<string>();

    for (const file of files) {
      const iconName = path.basename(file, ".svg");
      const componentName = `${toPascalCase(iconName)}Icon`;

      if (namesSeen.has(iconName)) {
        console.log(`✘ [${source}] Duplicate icon name "${iconName}"`);
        errors++;
      }
      if (componentsSeen.has(componentName)) {
        console.log(`✘ [${source}] Duplicate component name "${componentName}"`);
        errors++;
      }
      namesSeen.add(iconName);
      componentsSeen.add(componentName);
    }
  }

  if (errors === 0) {
    console.log(`✅ No within-source duplicates found (cross-source duplicates are intentional)`);
    process.exit(0);
  } else {
    console.log(`\n✘ ${errors} duplicate(s) found`);
    process.exit(1);
  }
}

main();
