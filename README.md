# QEA Framework ✦ Quantum Energy Alignment

∞ ∞ ∞

**QEA** is an open framework for builders (designers, developers, writers and product teams) who want everything they create to come from one clear intention. It aligns the free choices in a product (sizes, timings, colours, words, symbols, pictures and code) with the numbers **3 · 6 · 9**, the elements and the seasons, while keeping every standard that makes a product usable, accessible and legal.

> *"Vibrate at the right frequency within, and everything will flow and fall into place on the outside."*

The result is coherence: a product where every part feels as if it belongs, calm to look at, easy to use and trustworthy. QEA works with any brand, any stack and any industry. It doesn't bring its own look; it brings a way of choosing.

## The Three Core Rules

1. **Numbers align to 3 · 6 · 9.** Wherever a number is a free choice (padding, margin, gap, size, radius, image size, duration, limit, count, period), it divides by 3, ideally by 9: 3, 6, 9, 12, 18, 24, 36, 54, 72, 108, 144, 216, 432. → [Numbers](docs/02-numbers.md)
2. **Colours align by their hex digits.** The sum of a colour's six hex digits (A = 10 … F = 15) divides by 3. A colour that doesn't is nudged by one hex step, invisible to the eye. → [Colours](docs/03-colours.md)
3. **Standards win.** Where an industry standard, a protocol, accessibility (contrast, touch size), a third party or the law sets a value, that value stays. Alignment never makes something worse to use. → [Principles](docs/01-principles.md)

## The Framework

| | Dimension | In short |
|---|---|---|
| 1 | [Principles](docs/01-principles.md) | Intention, the nine dimensions, when other values win |
| 2 | [Numbers ✦ 369](docs/02-numbers.md) | The aligned scale for sizes, time, limits and periods; Grabovoi sequences |
| 3 | [Colours](docs/03-colours.md) | Colour psychology, culture, roles, accessibility and the hex digit rule |
| 4 | [Elements & Seasons](docs/04-elements.md) | The five elements, the Feng Shui elements and their colours, a palette for each season |
| 5 | [Symbols](docs/05-symbols.md) | ✦ ✧ ∞ \|\|∿, sacred geometry and the signs of New Homeopathy |
| 6 | [Words](docs/06-words.md) | High-vibration language, keywords and how to turn a heavy word |
| 7 | [Code](docs/07-code.md) | Aligned constants, tokens, tests and intention comments |
| 8 | [Images, Films & Products](docs/08-media.md) | Sizes, durations, compression and quiet integration |
| 9 | [Checklist](docs/09-checklist.md) | The review before something goes out |

A worked example: [Applying QEA to a Web Product](examples/web-product.md).

## Palettes

- **Starter palette:** nine hue families, each a strong, text-safe colour and a soft surface: [`palette/starter.json`](palette/starter.json), [`palette/starter.css`](palette/starter.css).
- **Season palettes:** six colours for each of the five seasons and their elements: [`palette/seasons.json`](palette/seasons.json), [`palette/seasons.css`](palette/seasons.css).

Every colour is aligned and its contrast is listed. Use them to prototype, or as a model when you align your own brand colours.

## Tools

No installation and no dependencies; Node 20 or newer.

```bash
node tools/qea-check.mjs src/            # every unaligned colour and px/ms value, with the nearest aligned one
node tools/qea-check.mjs src/ --colours  # colours only
node tools/qea-check.mjs src/ --strong   # numbers must divide by 9
npm test                                 # the framework's own tests
```

In your own code, [`tools/qea.mjs`](tools/qea.mjs) gives `isAlignedNumber`, `nearestAligned`, `isAlignedHex`, `alignHex`, `digitSum`, `contrast` and the aligned `SCALE` and `DURATIONS`.

A line that must keep a standard value ends in a `qea-ignore` comment, so the check skips it and the reason stays visible.

---

✦ QEA is published by [Wiccian](https://wiccian.io). © 2026 Wiccian. All rights reserved.
