# Digital Products & Code

∞ ∞ ∞

Apps, websites and tools carry every dimension at once: aligned numbers and colours, element-ordered content, symbols, words, quiet sound and light media. And the code itself carries the same frequency as everything else we create: QEA aligns its numbers, holds its colours in one place, and lets tests keep it aligned.

New to the tools? See [Apply QEA](apply-qea.md#with-code-install-the-tools-in-three-steps). A worked example: [Applying QEA to a Web Product](../examples/web-product.md).

## Aligned Constants

Every free number in code is aligned and named:

```ts
export const MAX_MESSAGE_LENGTH = 144; // 12 × 12
export const MAX_OFFERINGS = 9;
export const PAGE_SIZE = 36;
export const CODE_LIFETIME_MS = 9 * 60 * 1000; // 9 minutes
export const RETRIES = 3;
```

Standards stay as they are and say why:

```ts
export const OG_SIZE = { width: 1200, height: 630 }; // Open Graph standard qea-ignore
```

## Design Tokens

Define the aligned scale once and use only that.

**CSS:**

```css
@import "@wiccian/qea/palette.css";

:root {
  --space: 3px; /* everything is a multiple of 3 */
  --radius-md: 12px;
  --duration-calm: 360ms;
}
```

**Tailwind CSS v4:** a 3 px spacing unit makes every spacing class aligned (`p-6` = 18 px, `gap-12` = 36 px):

```css
@theme {
  --spacing: 3px;
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 18px; --radius-xl: 24px; --radius-2xl: 36px;
  --text-xs: 12px; --text-sm: 15px; --text-base: 18px; --text-lg: 21px; --text-xl: 24px;
  --text-2xl: 30px; --text-3xl: 36px; --text-4xl: 45px; --text-5xl: 54px;
}
```

Write arbitrary values only when they are aligned (`mt-[54px]`) or a measured exception.

## Colours in One Place

Colours live only in the palette (one CSS file and, if needed, one code module that mirrors it). Everywhere else a colour is a token. A lint step can fail the build on any raw `#hex`, `rgb()` or `hsl()` outside those files.

## Tests That Keep It Aligned

```js
import { isAlignedHex } from "@wiccian/qea";

test("every colour follows 369", () => {
  for (const [name, hex] of Object.entries(PALETTE)) expect([name, isAlignedHex(hex)]).toEqual([name, true]);
});
```

And in CI:

```bash
npx qea-check src/
```

## Intention Comments

Compilers ignore comments; the intention in them stays. A Grabovoi sequence may sit in one, written as published and marked `qea-ignore`. A module may open with one line of intention: what it serves and for whom.

```ts
// ✦ Customers book a session in three steps: clear, calm and confirmed at once.
```

Keep them true, short and kind, and never put secrets or noise in them.

---
[← Place & Direction](9-place-direction.md) · [Images & Films →](apply-images-films.md)
