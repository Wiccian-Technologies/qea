# ✦ Apply QEA

∞ ∞ ∞

Anybody can use QEA, and **nothing needs to be installed for QEA to work**: read it, understand it, and apply it by hand to your own work. Installing the tools makes it faster and easier, especially today, when an AI assistant can apply and check QEA in your code for you. Pick the way that fits you.

## By Hand: Nothing to Install

For designers, writers, space holders and anyone who doesn't write code.

1. **Read the [Quick Start](quick-start.md).** One page, nine steps.
2. **Take your colours** from a ready palette: [starter palette](2-colours-light.md#starter-palette) or [a palette for each season](8-time-rhythm.md#a-palette-for-each-season). Copy the colour codes (like `#2a5db1`) into your design tool.
3. **Before anything goes out,** go through [Before It Goes Out](checklist.md).

That's all.

## With Code: Install the Tools in Three Steps

For websites, apps and anything built with code. It takes about three minutes.

**With an AI assistant:** give it this page and the [Quick Start](quick-start.md), and ask it to install the tools and align your project. It can follow the three steps below for you.

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

## On a WordPress Site

QEA changes nothing on its own, so it can't break a WordPress layout. You decide every change, one at a time.

1. **Try it on a copy first.** Most hosts offer a staging site. If yours doesn't, take a backup.
2. **Add the colours.** Go to **Appearance → Customize → Additional CSS** (or your child theme's `style.css`) and paste the contents of [`palette/starter.css`](../palette/starter.css). It only adds colour names like `--qea-blue`. Nothing on the page changes yet.
3. **Use them one place at a time.** For example, `.wp-block-button__link { background: var(--qea-blue); }`. Look at the page on a phone and a computer after each change.
4. **Check the theme (optional).** Download your child theme folder and run `npx qea-check` on it. The check only reads files and never changes them.

**Go gently with** font sizes, spacing and widths across the whole site. Those can shift a layout. Change them for one block at a time, keep your theme's breakpoints, and mark values that must stay with `qea-ignore`. Never edit the parent theme directly: an update would erase your changes.

## When a Value Must Stay

Some values must stay as they are: a standard size, a value from a partner, a measurement the law sets (see [When Other Values Win](principles.md#when-other-values-win)). End that line with a `qea-ignore` comment and the reason, and the check skips it:

```css
.preview { width: 1200px; } /* Open Graph standard qea-ignore */
```

## Build It In First

QEA works best at the very start of the making, not as a correction at the end. Place it as early as you can, in this order:

1. **Before creating:** read the dimensions the piece touches ([Before You Create](before-you-create.md), [Before It Goes Out](checklist.md)) and plan aligned values before writing any. With an AI assistant, make this a standing project instruction, so it reads QEA before it designs or builds.
2. **While creating:** let the check run on what was just written. With an AI coding assistant, a hook after each edit can run `qea-check` on the new text and show it the result at once, so it aligns in the same step.
3. **On every change:** add the check to your lint script, so a change that isn't aligned is not done:

```json
"scripts": { "qea": "qea-check src/", "lint": "eslint && qea-check src/" }
```

4. **Before it goes out:** walk the nine dimensions of [Before It Goes Out](checklist.md), and run the check in CI (see [Digital Products & Code](apply-digital.md#tests-that-keep-it-aligned)).
5. **Now and then:** a full check of everything, older work included (see [Keeping It Aligned](keeping-aligned.md)).

**Copies follow QEA.** When you copy a page or design from elsewhere, keep its story, words and pictures, and move its sizes, spacing, timings and colours to the nearest aligned values rather than copying them one to one.

**Link, don't copy.** Install QEA as a dependency (or point to a shared clone) rather than copying its files, so every project follows when QEA grows.

## No npm? Download It

1. On GitHub, open [Wiccian-Technologies/qea](https://github.com/Wiccian-Technologies/qea), click **Code**, then **Download ZIP**.
2. Copy the `palette` and `tools` folders into your project.
3. Run `node tools/qea-check.mjs src/`.
4. In your CSS, import the palette by its path instead: `@import "./palette/starter.css";`

## If Something Doesn't Work

| You see | Do this |
|---|---|
| `command not found: node` or `npm` | Install Node.js from [nodejs.org](https://nodejs.org), then open a new terminal. |
| `npm ERR!` with "404" or "permission" | Check your internet connection and the spelling `github:Wiccian-Technologies/qea`, or use **Download ZIP**. |
| `Tell QEA which folder to check` | Add the folder to check at the end, like `npx qea-check src/`. |
| `Can't find "src/"` | Your code is in another folder. Use its name, like `npx qea-check app/`. |
| Anything else | Write to [info@wiccian.io](mailto:info@wiccian.io): we're glad to help, or to implement QEA for you. |

---
[← Quick Start](quick-start.md) · [Everything Is Energy →](universal-laws.md)
