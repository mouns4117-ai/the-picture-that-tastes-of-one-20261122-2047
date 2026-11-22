// Honey — the picture that tastes of one ingredient.
//
// main.ts hands the finished picture to the harness:
//   node main.ts            (Node 22, standard library only, no network)
// It reads entry.png from beside this file and writes it whole to
// $MAKEFUN_OUTPUT_DIR/entry.png, so the two runs the grader makes are
// byte for byte the same picture.
//
// The output directory is a mounted directory on the grader, so it is
// emptied by removing its contents one entry at a time, never by
// removing the directory itself.

import { copyFileSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PICTURE = join(HERE, 'entry.png');

function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(HERE, 'out');
  emptyDir(outDir);
  // The picture must be there before we hand anything in; a missing
  // file is a build error, not an empty entry.
  if (!statSync(PICTURE, { throwIfNoEntry: false })) {
    throw new Error(`missing picture: ${PICTURE}`);
  }
  const target = join(outDir, 'entry.png');
  copyFileSync(PICTURE, target);
  const bytes = statSync(target).size;
  console.log(`Honey handed in: entry.png (${bytes} bytes) is in ${outDir}`);
}

main();
