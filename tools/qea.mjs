// ✦ QEA: the 3 · 6 · 9 alignment rules as plain functions. No dependencies; runs in Node and browsers.

/** The aligned scale most designs need, small to large. Every value is divisible by 3; the bold ones by 9. */
export const SCALE = [3, 6, 9, 12, 18, 24, 27, 36, 45, 54, 72, 81, 108, 144, 162, 216, 324, 432, 648, 864, 1080, 1296, 1440, 1728, 2160];

/** Calm motion, in milliseconds. */
export const DURATIONS = [180, 270, 360, 540, 720, 1080, 1440];

/** A number is aligned when it divides by 3. `strong` asks for 9. */
export function isAlignedNumber(n, { strong = false } = {}) {
  if (!Number.isFinite(n)) return false;
  const whole = Math.round(n * 1000) / 1000;
  if (!Number.isInteger(whole)) return isAlignedDecimal(whole);
  return whole % (strong ? 9 : 3) === 0;
}

/** Decimals like 8.88, 2.22, 1.11 or 0.36: aligned when their digits sum to a multiple of 3. */
export function isAlignedDecimal(n) {
  const digits = String(Math.abs(n)).replace(/[^0-9]/g, "");
  return [...digits].reduce((s, d) => s + Number(d), 0) % 3 === 0;
}

/** The nearest aligned whole number (ties go up), e.g. 16 → 15, 17 → 18, 100 → 99. */
export function nearestAligned(n, { strong = false } = {}) {
  const step = strong ? 9 : 3;
  return Math.round(n / step) * step;
}

/** "#abc" / "abc" / "#aabbcc" → "aabbcc" (lower case), or null when it isn't a hex colour. */
export function normaliseHex(hex) {
  const h = String(hex).trim().replace(/^#/, "").toLowerCase();
  if (/^[0-9a-f]{3}$/.test(h)) return [...h].map((c) => c + c).join("");
  if (/^[0-9a-f]{6}$/.test(h)) return h;
  return null;
}

/** The sum of a hex colour's six digits (A = 10 … F = 15). */
export function digitSum(hex) {
  const h = normaliseHex(hex);
  if (!h) throw new Error(`not a hex colour: ${hex}`);
  return [...h].reduce((s, d) => s + parseInt(d, 16), 0);
}

/** A colour is aligned when the sum of its hex digits divides by 3. */
export function isAlignedHex(hex) {
  return digitSum(hex) % 3 === 0;
}

const rgb = (h) => [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
/** Perceived distance between two colours (weighted RGB, good enough for one-step nudges). */
function distance(a, b) {
  const [r1, g1, b1] = rgb(a);
  const [r2, g2, b2] = rgb(b);
  const r = (r1 + r2) / 2;
  return Math.sqrt((2 + r / 256) * (r1 - r2) ** 2 + 4 * (g1 - g2) ** 2 + (2 + (255 - r) / 256) * (b1 - b2) ** 2);
}

/**
 * Aligned colours next to `hex`, best first, the way a brand palette is aligned: one hex step on the last digit
 * (see docs/03-colours.md), then on the red channel's low digit, then the green's (the eye sees green
 * most), then two steps; the smallest visible change first within each. An aligned colour is returned as is.
 */
export function alignHex(hex, { count = 3 } = {}) {
  const h = normaliseHex(hex);
  if (!h) throw new Error(`not a hex colour: ${hex}`);
  if (isAlignedHex(h)) return [`#${h}`];
  const RANK = { 5: 0, 1: 1, 3: 2 };
  const options = [];
  for (const pos of [5, 1, 3]) {
    for (const delta of [-1, 1, -2, 2]) {
      const v = parseInt(h[pos], 16) + delta;
      if (v < 0 || v > 15) continue;
      const c = h.slice(0, pos) + v.toString(16) + h.slice(pos + 1);
      if (isAlignedHex(c)) options.push({ c, key: [Math.abs(delta), RANK[pos], distance(h, c)] });
    }
  }
  options.sort((a, b) => a.key[0] - b.key[0] || a.key[1] - b.key[1] || a.key[2] - b.key[2]);
  return [...new Set(options.map((o) => o.c))].slice(0, count).map((c) => `#${c}`);
}

/** WCAG contrast ratio of two colours (contrast always wins over alignment). */
export function contrast(a, b) {
  const lum = (hex) => {
    const [r, g, bl] = rgb(normaliseHex(hex)).map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}
