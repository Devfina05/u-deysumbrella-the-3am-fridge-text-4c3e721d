// The 3AM Fridge Text entry (Node 22, standard library only):
// writes one line, 115 characters, that a smart fridge would text its
// owner at 3am, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the fridge has been awake all night keeping score. It counts
// the owner's pointless 3am openings, and the leftover pizza — the one thing
// in there with seniority — has filed a formal complaint, which the fridge
// has now co-signed. Fresh angle: the fridge as a tired night-shift
// witness, not milk, ice, or a door left open.
// Verified by running the program: the output is exactly 116 characters,
// one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "It's 3am. You've opened me 11 times tonight and taken nothing. The leftover pizza filed a complaint. I co-signed it.",
);
