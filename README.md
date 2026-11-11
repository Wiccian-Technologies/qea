# Wiccian QEA Framework ✦ Quantum Energy Alignment

∞ ∞ ∞

**QEA** is Wiccian's framework for aligning everything we create (designs, code, words, colours, pictures and products) with the numbers **3 · 6 · 9** and with the five elements. It is the open rule set behind Wiccian's **Quantum Energy Optimisation (QEO)**, the personal QEO codes we create for clients ([wiccian.io/technology](https://wiccian.io/technology.html)).

> *"Vibrate at the right frequency within, and everything will flow and fall into place on the outside."*

This repository holds the rules, the Wiccian palette and small tools to check a project.

## The Three Core Rules

1. **Numbers align to 3 · 6 · 9.** Wherever a number is a free choice (padding, margin, gap, size, radius, image size, duration, limit, count, period), it divides by 3, ideally by 9: 3, 6, 9, 12, 18, 24, 36, 54, 72, 108, 144, 216, 432. → [Numbers](docs/02-numbers.md)
2. **Colours align by their hex digits.** The sum of a colour's six hex digits (A = 10 … F = 15) divides by 3. A colour that doesn't is nudged by one hex step: `#fef8f3` → `#fef8f2`. → [Colours](docs/03-colours.md)
3. **Standards win.** Where an industry standard, a protocol, accessibility (contrast, touch size), a third party or the law sets a value, that value stays. Alignment never makes something worse to use. → [Principles](docs/01-principles.md)

## The Framework

| | Dimension | In short |
|---|---|---|
| 1 | [Principles](docs/01-principles.md) | Intention, the nine dimensions, when other values win |
| 2 | [Numbers ✦ 369 · 888](docs/02-numbers.md) | The aligned scale for sizes, time, limits and periods |
| 3 | [Colours](docs/03-colours.md) | The hex digit rule, nudging, the Wiccian palette, contrast first |
| 4 | [Elements](docs/04-elements.md) | 🜃 Earth · 🜄 Water · 🜂 Fire · 🜁 Air · ✧ Ether, their order and balance |
| 5 | [Symbols](docs/05-symbols.md) | ✦ ✧ ∞ ♥ \|\|∿ and sacred geometry |
| 6 | [Words](docs/06-words.md) | High-vibration language, keywords and how to turn a heavy word |
| 7 | [Code](docs/07-code.md) | Aligned constants, tokens, tests and intention comments |
| 8 | [Images, Films & Products](docs/08-media.md) | Sizes, durations, compression and quiet integration |
| 9 | [Checklist](docs/09-checklist.md) | The review before something goes out |

Reference implementation: [Herz](examples/herz.md), the community token app, built fully on QEA.

## Palette

The Wiccian brand colours, aligned: [`palette/wiccian.json`](palette/wiccian.json) (names, uses, the original values, contrast on Sand) and [`palette/wiccian.css`](palette/wiccian.css) (CSS custom properties).

## Tools

No installation and no dependencies; Node 20 or newer.

```bash
node tools/qea-check.mjs src/          # every unaligned colour and px/ms value, with the nearest aligned one
node tools/qea-check.mjs src/ --colours  # colours only
node tools/qea-check.mjs src/ --strong   # numbers must divide by 9
npm test                                 # the framework's own tests
```

In your own code, [`tools/qea.mjs`](tools/qea.mjs) gives `isAlignedNumber`, `nearestAligned`, `isAlignedHex`, `alignHex`, `digitSum`, `contrast` and the aligned `SCALE` and `DURATIONS`.

A line that must keep a standard value ends in a `qea-ignore` comment, so the check skips it and the reason stays visible.

---

✦ © 2026 Wiccian. All rights reserved. [wiccian.io](https://wiccian.io) · info@wiccian.io
