// Make the AI Judge Laugh: the Office Joke Open
// Entry for make.fun — one single-line office joke, written to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads, no input files.
// The joke itself is a fixed string; the program only validates it against the
// house gate (1-200 characters, not only whitespace, single line) and writes it.

import { mkdirSync, writeFileSync } from "node:fs";

// The angle: every entrant will reach for the meeting-that-could-have-been-an-email,
// the reply-all, or the printer jam. This one takes the printer somewhere none of
// those go — a self-defeating act. The setup sounds like a sensible office fix;
// the payoff is a little logic loop: announcing the problem consumes the last of
// the thing the announcement is about, so the announcement erases itself.
const JOKE =
  "The printer ran out of toner, so I printed a sign saying so \u2014 which used the last of the toner, so now nobody knows.";

// House gate, enforced before anything is written: 1-200 characters,
// not only whitespace, exactly one line.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`entry is ${JOKE.length} characters; gate needs 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
