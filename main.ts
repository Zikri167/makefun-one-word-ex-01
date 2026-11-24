// One Word From Your Ex — entry program.
//
// Writes exactly one word, the word the entrant's ex would use to describe
// them, to /output/entry.txt. Deterministic, Node 22 stdlib only, no network,
// no input files, no randomness.
//
// The word: "Intern"
//   An ex's verdict in one job title: did all the work, got no title, no
//   pay, no future. The unpaid emotional labour of the relationship,
//   summed up in a single word that lands the moment you hear it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Intern";

// Gate the word the same way the sealed scorer does: UTF-8 text of 1 to 24
// characters, not only white space, and exactly one word.
function validate(word: string): void {
  if (typeof word !== "string") {
    throw new Error("entry must be a string");
  }
  // Letters A-Z only: rejects digits, punctuation, hyphens, accents and
  // anything else that would make the judge read a phrase or a code.
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be exactly one word of letters A-Z");
  }
  const chars = [...word];
  if (chars.length < 1 || chars.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${chars.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no white space)");
  }
}

function main(): void {
  validate(WORD);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, WORD, "utf8");
  // Verify what was actually written, byte for byte: no trailing newline,
  // no BOM, no stray whitespace may reach the gate.
  const written = readFileSync(outPath, "utf8");
  if (written !== WORD) {
    throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(WORD)}, read back ${JSON.stringify(written)}`);
  }
  validate(written);
}

main();
