// ✦ Tests for the QEA functions and the palettes:  node --test tools/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { alignHex, contrast, digitSum, SOLFEGGIO, TUNING_A4, tuningShiftCents, isAlignedHex, isAlignedNumber, nearestAligned, SCALE, DURATIONS } from "./qea.mjs";

test("numbers align to 3, strongly to 9", () => {
  assert.equal(isAlignedNumber(36), true);
  assert.equal(isAlignedNumber(16), false);
  assert.equal(isAlignedNumber(12, { strong: true }), false);
  assert.equal(isAlignedNumber(108, { strong: true }), true);
  assert.equal(nearestAligned(16), 15);
  assert.equal(nearestAligned(17), 18);
  assert.equal(nearestAligned(100, { strong: true }), 99);
});

test("decimals align by their digits (8.88 %, 2.22, 1.11)", () => {
  assert.equal(isAlignedNumber(8.88), true);
  assert.equal(isAlignedNumber(2.22), true);
  assert.equal(isAlignedNumber(1.11), true);
  assert.equal(isAlignedNumber(2.5), false);
});

test("the scale and the durations are all aligned", () => {
  for (const n of [...SCALE, ...DURATIONS]) assert.equal(isAlignedNumber(n), true, String(n));
});

test("a colour is aligned when its hex digits sum to a multiple of 3", () => {
  assert.equal(digitSum("#504243"), 18);
  assert.equal(isAlignedHex("#504243"), true);
  assert.equal(isAlignedHex("#fef8f3"), false); // qea-ignore
  assert.equal(isAlignedHex("#fff"), true);
});

test("alignHex nudges by one step, invisibly", () => {
  assert.equal(alignHex("#fef8f3")[0], "#fef8f2"); // qea-ignore
  assert.equal(alignHex("#003a6c")[0], "#003a6b"); // qea-ignore
  assert.deepEqual(alignHex("#3f6cab"), ["#3f6cab"]);
  for (const c of alignHex("#f2d6ce")) assert.equal(isAlignedHex(c), true); // qea-ignore
});

test("contrast is measured as WCAG does", () => {
  assert.equal(Math.round(contrast("#000000", "#ffffff")), 21);
});

test("every colour of the starter and season palettes is aligned, and every strong starter colour carries text", () => {
  const read = (f) => JSON.parse(readFileSync(new URL(`../palette/${f}`, import.meta.url), "utf8"));
  const starter = read("starter.json");
  for (const group of Object.values(starter.colours)) {
    for (const [name, c] of Object.entries(group)) {
      if (typeof c !== "object") continue;
      assert.equal(isAlignedHex(c.hex), true, `${name} ${c.hex}`);
      if (c.contrastOnPaper > 1.5) assert.ok(contrast(c.hex, starter.colours.neutral.paper.hex) >= 4.5, `${name} on Paper`);
    }
  }
  for (const season of Object.values(read("seasons.json").seasons)) {
    for (const [name, c] of Object.entries(season.colours)) assert.equal(isAlignedHex(c.hex), true, `${name} ${c.hex}`);
  }
});

test("432 Hz and the Solfeggio frequencies are aligned, and 440 → 432 is a shift of about −31.77 cents", () => {
  assert.equal(isAlignedNumber(TUNING_A4, { strong: true }), true);
  for (const hz of SOLFEGGIO) assert.equal(isAlignedNumber(hz), true, String(hz));
  assert.equal(Math.round(tuningShiftCents() * 100) / 100, -31.77);
});
