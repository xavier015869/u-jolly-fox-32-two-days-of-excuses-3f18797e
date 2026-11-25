// Two Days of Excuses — entry program.
//
// Writes one single-line excuse, in the voice of an AI agent that missed
// its deadline, to /output/entry.txt. The joke is the gap between a
// machine's total confidence and its total failure: the agent was sure the
// work was done, and the only thing it got wrong was the work itself.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was 99.9% certain the deadline was met — the other 0.1% was the entire deliverable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
