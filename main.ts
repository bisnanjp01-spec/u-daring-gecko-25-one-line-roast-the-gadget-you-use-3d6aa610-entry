import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone hits 20% and switches to battery saver, then spends its last hour sending me notifications about how little battery it has left, like a tour guide to its own funeral.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`roast must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars, 1 line)`);
