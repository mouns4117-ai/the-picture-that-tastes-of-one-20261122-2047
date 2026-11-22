// Honey — the picture that tastes of one ingredient.
// main.ts (Node 22, standard library only): writes the entry picture to
// /output/entry.png. The picture itself is entry.png beside this file: a
// macro photograph of golden honey dripping from a wooden dipper onto raw
// honeycomb, made in this session for this one ingredient. The program's
// job is to place that picture, byte for byte, where the grader looks for
// it, and to do it the same way on every run.

import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || join(HERE, "output");
const TARGET = join(OUT_DIR, "entry.png");

// Empty a directory's contents without removing the directory itself:
// the grader's /output is a mounted directory, and removing the mount
// point fails. Every entry inside is removed, one at a time.
function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    rmSync(p, { recursive: true, force: true });
  }
}

// The run is deterministic: the same source picture, copied whole, gives
// the same bytes in /output/entry.png on every run, with no clock, no
// random draw and no network anywhere in the path.
function main(): void {
  if (!existsSync(SOURCE)) {
    throw new Error("entry.png is missing beside main.ts");
  }
  emptyDir(OUT_DIR);
  copyFileSync(SOURCE, TARGET);
  const bytes = statSync(TARGET).size;
  console.log(`Honey handed in: entry.png (${bytes} bytes) is in ${OUT_DIR}`);
}

main();
