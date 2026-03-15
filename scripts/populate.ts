/**
 * populate.ts
 *
 * Copies ALL SVGs from reference libraries into icons/<source>/
 * using EXACT original filenames — no renaming, no mapping.
 *
 * Sources:
 *   lucide           → all Lucide icons (outline, 24×24)
 *   tabler           → all Tabler outline icons (24×24)
 *   tabler-filled    → all Tabler filled icons (24×24)
 *   heroicons        → all Heroicons outline icons (24×24)
 *   heroicons-solid  → all Heroicons solid icons (24×24)
 *
 * Usage:
 *   pnpm populate                       # all sources
 *   pnpm populate --source tabler       # specific source
 *
 * After running, execute:
 *   pnpm generate        → icons with animation defs only
 *   pnpm generate --all  → all icons (default animation for those without defs)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REFS = path.join(ROOT, ".liveicons-docs/references");
const ICONS_OUT = path.join(ROOT, "icons");

const args = process.argv.slice(2);
const sourceFilter = args.includes("--source")
  ? args[args.indexOf("--source") + 1]
  : null;

interface SourceConfig {
  /** Absolute path to the directory containing source SVGs */
  srcDir: string;
  /** Short description shown during populate */
  description: string;
}

const SOURCES: Record<string, SourceConfig> = {
  lucide: {
    srcDir: path.join(REFS, "lucide/icons"),
    description: "Lucide icons (24×24 stroke)",
  },
  tabler: {
    srcDir: path.join(REFS, "tabler-icons/icons/outline"),
    description: "Tabler outline icons (24×24 stroke)",
  },
  "tabler-filled": {
    srcDir: path.join(REFS, "tabler-icons/icons/filled"),
    description: "Tabler filled icons (24×24 fill)",
  },
  heroicons: {
    srcDir: path.join(REFS, "heroicons/src/24/outline"),
    description: "Heroicons outline icons (24×24 stroke)",
  },
  "heroicons-solid": {
    srcDir: path.join(REFS, "heroicons/src/24/solid"),
    description: "Heroicons solid icons (24×24 fill)",
  },
};

function populateSource(sourceName: string, config: SourceConfig): void {
  if (!fs.existsSync(config.srcDir)) {
    console.log(`  ⚠ Not found: ${config.srcDir}`);
    return;
  }

  const svgFiles = fs
    .readdirSync(config.srcDir)
    .filter((f) => f.endsWith(".svg"));

  if (svgFiles.length === 0) {
    console.log(`  ⚠ No SVG files found in ${config.srcDir}`);
    return;
  }

  const outDir = path.join(ICONS_OUT, sourceName);
  fs.mkdirSync(outDir, { recursive: true });

  // Write a README for the source
  fs.writeFileSync(
    path.join(outDir, "README.md"),
    `# icons/${sourceName}\n\n${config.description}\n\nPopulated by \`pnpm populate --source ${sourceName}\`.\n`
  );

  let copied = 0;
  for (const file of svgFiles) {
    fs.copyFileSync(
      path.join(config.srcDir, file),
      path.join(outDir, file)
    );
    copied++;
  }

  console.log(`  ✓ ${copied} SVGs copied`);
}

function main() {
  const targets = sourceFilter
    ? { [sourceFilter]: SOURCES[sourceFilter] }
    : SOURCES;

  if (sourceFilter && !SOURCES[sourceFilter]) {
    console.error(
      `Unknown source: "${sourceFilter}". Valid: ${Object.keys(SOURCES).join(", ")}`
    );
    process.exit(1);
  }

  for (const [name, config] of Object.entries(targets)) {
    console.log(`\n📦 ${name} — ${config.description}`);
    populateSource(name, config);
  }

  const totalSources = Object.keys(targets).length;
  console.log(`\n✅ Populated ${totalSources} source(s).`);
  console.log(`\nNext steps:`);
  console.log(`  pnpm generate        — animated icons only (have animation defs)`);
  console.log(`  pnpm generate --all  — all icons (default animation for those without defs)`);
}

main();
