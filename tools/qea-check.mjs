#!/usr/bin/env node
// ✦ QEA check: finds colours and sizes that aren't aligned to 3 · 6 · 9, and suggests the nearest aligned
// value. No dependencies.
//   node tools/qea-check.mjs <files or folders …> [--colours] [--numbers] [--strong]
// --colours / --numbers check only one kind; --strong asks numbers to divide by 9. Exit code 1 when something is
// found, so it can run in CI. A line ending in `qea-ignore` (any comment style) is skipped: use it for standards,
// third-party values and measured copies (docs/principles.md, "When other values win").
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { alignHex, isAlignedHex, isAlignedNumber, nearestAligned } from "./qea.mjs";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const paths = args.filter((a) => !a.startsWith("--"));
if (paths.length === 0) {
  console.log("Tell QEA which folder to check, like this:  npx qea-check src/");
  console.log("(Options: --colours, --numbers, --strong)");
  process.exit(0);
}
const missing = paths.filter((p) => !existsSync(p));
if (missing.length > 0) {
  for (const p of missing) console.log(`Can't find "${p}". Check the name, or use the folder your code lives in.`);
  process.exit(2);
}
const checkColours = !flags.has("--numbers") || flags.has("--colours");
const checkNumbers = !flags.has("--colours") || flags.has("--numbers");
const strong = flags.has("--strong");

const EXTENSIONS = new Set([".css", ".scss", ".sass", ".less", ".html", ".svg", ".js", ".mjs", ".jsx", ".ts", ".tsx", ".vue", ".svelte", ".json"]);
const SKIP_DIRS = new Set(["node_modules", ".git", ".next", "dist", "build", "out", "coverage", "vendor"]);
/** Hairlines (0–2 px) are physical pixels, not design choices. */
const HAIRLINES = new Set([0, 1, 2]);

function* files(path) {
  const stat = statSync(path);
  if (stat.isFile()) {
    if (EXTENSIONS.has(extname(path))) yield path;
    return;
  }
  for (const entry of readdirSync(path)) if (!SKIP_DIRS.has(entry)) yield* files(join(path, entry));
}

const COLOUR = /#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
const NUMBER = /(?<![\w.#-])(\d+(?:\.\d+)?)(px|ms|s)\b/g;

let found = 0;
for (const root of paths) {
  for (const file of files(root)) {
    readFileSync(file, "utf8")
      .split("\n")
      .forEach((line, i) => {
        if (/qea-ignore\s*(\*\/|-->)?\s*$/.test(line)) return;
        const where = `${file}:${i + 1}`;
        if (checkColours) {
          for (const m of line.matchAll(COLOUR)) {
            const hex = m[0];
            // A colour kept as history ("original": in JSON, /* was #… */ in CSS) is not a colour in use.
            const before = line.slice(0, m.index);
            if (isAlignedHex(hex) || /"original"\s*:\s*"$/.test(before) || /\bwas\s+$/.test(before)) continue;
            found++;
            console.log(`${where}  colour ${hex} → ${alignHex(hex).join(" or ")}`);
          }
        }
        if (checkNumbers) {
          for (const [, raw, unit] of line.matchAll(NUMBER)) {
            const value = unit === "s" ? Math.round(Number(raw) * 1000) : Number(raw);
            if (HAIRLINES.has(value) && unit === "px") continue;
            if (isAlignedNumber(value, { strong })) continue;
            found++;
            const better = nearestAligned(value, { strong });
            console.log(`${where}  ${raw}${unit} → ${unit === "s" ? `${better}ms` : `${better}${unit}`}`);
          }
        }
      });
  }
}
console.log(found ? `\n✦ ${found} value(s) to align.` : "✦ All aligned.");
process.exit(found ? 1 : 0);
