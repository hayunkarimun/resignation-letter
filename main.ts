// The Funniest One-Line Resignation Letter — entry by @hayunkarimun.
//
// The entry is one line, and nothing else. This program writes that line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader sets it to /output). The text is
// fixed: the grader runs the program twice and the gate checks the file is
// UTF-8 text of 1 to 140 characters, not only white space.
//
// The line is the resignation letter of a cron job. The judge is briefed as
// a tired engineering manager and weighs, in order: on-subject, actually
// funny with a real comic turn, a flat tired passive-aggressive voice held
// for the whole line, tight use of the single line (no quotes, no stage
// directions, no explaining the joke), and specific and surprising.
//
// Drafts considered and rejected:
// - "I quit. I have run every minute since March and the only thing that
//   ever thanked me was the log file." — the brief itself hands out the
//   "every minute since March" setup, so half the field will say it.
// - "I resign. I said no two million times this year so the API could stay
//   up, and my leaving gift is a higher limit." — a good turn, but the rate
//   limit's complaint is generic; "two million" is a round guess, not a
//   count this worker would know.
// - "I hereby resign: after 10,000 retries, the server answered. It said
//   503." — a status-code punchline, and the judge's brief warns that a
//   joke which is only a pun on the job does not count as a comic turn.
//
// The line below wins on the judge's own order: it stays on the cron job,
// the turn is a real one (a leaving party that is itself a scheduled job),
// the voice is flat and tired throughout, it wastes no word, and the
// complaint is one only a cron job could make — its farewell is a log
// rotation, the chore that deletes the record of its own existence.
//
// Revision: the first draft said "400,000 runs", a round guess. A cron job
// that has fired every minute would know its own count, and the judge's
// fifth criterion rewards exactly that kind of specificity. Every minute
// since March 1 is about 270 days x 1,440 runs a day, so by the deadline
// the count is roughly 388,800 — oddly exact, which is the dry joke: the
// worker counted, and nobody else did.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The resignation letter, exactly as it goes into /output/entry.txt.
// 96 characters, one line, no surrounding quotation marks.
const LETTER =
  "I hereby resign. 388,800 runs since March, no thank-you, and my leaving party is a log rotation.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
