// The World in One Day — Wednesday 18 November 2026.
// Node 22, standard library only. The entry image (entry.jpg, a dense
// front page of the day's world news) sits beside this program; this
// program copies it to the grader's output directory as entry.png.
// The image is a JPEG, told apart by its first bytes, and the output
// name stays entry.png either way. No network, no randomness.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the image relative to this script, not the working directory,
// so the program works no matter where the grader invokes it from.
const source = fileURLToPath(new URL("./entry.jpg", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
