import { mkdirSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got — one sentence, at most 200 characters.
// The best advice, as my grandfather gave it: buy quality once instead
// of cheap twice — and he proved it by buying me the expensive hammer.
const ENTRY =
  "My grandfather said the cheapest tool is the one you buy twice, then bought me the expensive hammer.";

// Defensive gate, mirroring the competition gate: one sentence, 1-200
// characters, not only whitespace. Fail loudly instead of writing an
// entry the sealed scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200 characters`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
