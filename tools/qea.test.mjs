// ✦ Tests for the QEA functions and the Wiccian palette:  node --test tools/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { alignHex, contrast, digitSum, isAlignedHex, isAlignedNumber, nearestAligned, SCALE, DURATIONS } from "./qea.mjs";

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

test("alignHex nudges by one step, as the Wiccian palette was aligned", () => {
  assert.equal(alignHex("#fef8f3")[0], "#fef8f2"); // qea-ignore
  assert.equal(alignHex("#003a6c")[0], "#003a6b"); // qea-ignore
  assert.deepEqual(alignHex("#3f6cab"), ["#3f6cab"]);
  for (const c of alignHex("#f2d6ce")) assert.equal(isAlignedHex(c), true); // qea-ignore
});

test("contrast is measured as WCAG does", () => {
  assert.equal(Math.round(contrast("#000000", "#ffffff")), 21);
});

test("every colour of the Wiccian palette is aligned, and its original is kept beside it", () => {
  const palette = JSON.parse(readFileSync(new URL("../palette/wiccian.json", import.meta.url), "utf8"));
  for (const group of Object.values(palette.colours)) {
    for (const [name, c] of Object.entries(group)) {
      assert.equal(isAlignedHex(c.hex), true, `${name} ${c.hex}`);
      if (c.original) assert.equal(alignHex(c.original).includes(c.hex), true, `${name}: ${c.original} → ${c.hex}`);
    }
  }
});
