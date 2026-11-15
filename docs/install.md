# ✦ Install QEA

∞ ∞ ∞

There are two ways to use QEA. Pick the one that fits you.

## Without Code: Nothing to Install

For designers, writers, space holders and anyone who doesn't write code.

1. **Read the [Quick Start](quick-start.md).** One page, nine steps.
2. **Take your colours** from a ready palette: [starter palette](2-colours-light.md#starter-palette) or [a palette for each season](8-time-rhythm.md#a-palette-for-each-season). Copy the colour codes (like `#2a5db1`) into your design tool.
3. **Before anything goes out,** go through [Before It Goes Out](checklist.md).

That's all.

## With Code: Three Steps

For websites, apps and anything built with code. It takes about three minutes.

**You need** Node.js 20 or newer. To see if you have it, type `node -v` in a terminal. If you see `v20` or higher, you're ready. If not, install it from [nodejs.org](https://nodejs.org).

### Step 1 ✦ Add QEA to Your Project

In a terminal, inside your project folder:

```bash
npm install github:Wiccian-Technologies/qea
```

### Step 2 ✦ Use the Aligned Colours and Values

In your CSS:

```css
@import "@wiccian/qea/palette.css";

.button { background: var(--qea-blue); padding: 18px 36px; border-radius: 12px; }
```

In your JavaScript or TypeScript:

```js
import { nearestAligned, isAlignedHex } from "@wiccian/qea";

nearestAligned(17);      // 18
isAlignedHex("#fafaf7"); // true
```

### Step 3 ✦ Check Your Project

```bash
npx qea-check src/
```

Replace `src/` with the folder your code lives in. The check reads your files and lists every colour and size that isn't aligned, with the nearest aligned value:

```
src/style.css:1  colour #fafaf8 → #fafaf7 or #f9faf8 or #faf9f8
src/style.css:1  16px → 15px

✦ 2 value(s) to align.
```

Change each value to one of the suggestions, run the check again, and when you see **✦ All aligned.** you're done.

## When a Value Must Stay

Some values must stay as they are: a standard size, a value from a partner, a measurement the law sets (see [When Other Values Win](principles.md#when-other-values-win)). End that line with a `qea-ignore` comment and the reason, and the check skips it:

```css
.preview { width: 1200px; } /* Open Graph standard qea-ignore */
```

## Keep It Checked (Optional)

Add the check to your project's `package.json`, so anyone can run it with `npm run qea`:

```json
"scripts": { "qea": "qea-check src/" }
```

Run it in your CI as well, so every change stays aligned (see [Digital Products & Code](apply-digital.md#tests-that-keep-it-aligned)).

## No npm? Download It

1. On GitHub, open [Wiccian-Technologies/qea](https://github.com/Wiccian-Technologies/qea), click **Code**, then **Download ZIP**.
2. Copy the `palette` and `tools` folders into your project.
3. Run `node tools/qea-check.mjs src/`.

## If Something Doesn't Work

| You see | Do this |
|---|---|
| `command not found: node` or `npm` | Install Node.js from [nodejs.org](https://nodejs.org), then open a new terminal. |
| `npm ERR!` with "404" or "permission" | Your GitHub account needs access to the repository, or use **Download ZIP**. |
| `Usage: node tools/qea-check.mjs …` | Add the folder to check at the end, like `npx qea-check src/`. |
| Anything else | Ask [Wiccian](https://wiccian.io): we're glad to help, or to implement QEA for you. |

---
[← Quick Start](quick-start.md) · [Everything Is Energy →](universal-laws.md)
