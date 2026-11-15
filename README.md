# QEA Framework ✦ Quantum Energy Alignment

∞ ∞ ∞

**QEA** is a framework for builders (designers, developers, writers and product teams) who want everything they create to come from one clear intention. It aligns the free choices in a product (sizes, timings, colours, words, symbols, sounds, pictures, code and spaces) with the numbers **3 · 6 · 9**, the elements, the seasons and the frequencies of sound, while keeping every standard that makes a product usable, accessible and legal.

> *"Vibrate at the right frequency within, and everything will flow and fall into place on the outside."*

QEA respects the [seven universal laws](docs/universal-laws.md), which all express one: **everything is energy**.

The result is coherence: a product where every part feels as if it belongs, calm to look at, easy to use and trustworthy. QEA works with any brand, any stack and any industry. It doesn't bring its own look; it brings a way of choosing.

## The Three Core Rules

1. **Numbers align to 3 · 6 · 9.** Wherever a number is a free choice (padding, margin, gap, size, radius, image size, duration, limit, count, period), it divides by 3, ideally by 9: 3, 6, 9, 12, 18, 24, 36, 54, 72, 108, 144, 216, 432. → [Numbers](docs/1-numbers.md)
2. **Colours align by their hex digits.** The sum of a colour's six hex digits (A = 10 … F = 15) divides by 3. A colour that doesn't is nudged by one hex step, invisible to the eye. → [Colours](docs/2-colours.md)
3. **Standards win.** Where an industry standard, a protocol, accessibility (contrast, touch size), a third party or the law sets a value, that value stays. Alignment never makes something worse to use. → [Principles](docs/principles.md)

## The Nine Dimensions

New here? Begin with the [Quick Start](docs/quick-start.md). Then read [Everything Is Energy](docs/universal-laws.md), the [Principles](docs/principles.md), [Before You Create](docs/before-you-create.md) and [Care for the Earth](docs/care-for-the-earth.md), and then:

| | Dimension | In short |
|---|---|---|
| 1 | [Numbers ✦ 369](docs/1-numbers.md) | The aligned scale for sizes, time, limits and periods; Grabovoi sequences |
| 2 | [Colours](docs/2-colours.md) | Colour psychology, culture, roles, accessibility and the hex digit rule |
| 3 | [Elements & Seasons](docs/3-elements-seasons.md) | The five elements, Feng Shui (cycles, shapes, fonts, industries, logos, the Bagua, personalities), a palette for each season |
| 4 | [Symbols](docs/4-symbols.md) | ✦ ✧ ∞ \|\|∿, sacred geometry and the signs of New Homeopathy |
| 5 | [Words, Texts & Presentations](docs/5-words.md) | High-vibration language, keywords and how to turn a heavy word |
| 6 | [Sound & Music](docs/6-sound-music.md) | 432 Hz, Solfeggio frequencies, rhythm, the sounds of the elements, sound in products |
| 7 | [Images & Films](docs/7-images-films.md) | Sizes, lengths, compression and quiet integration |
| 8 | [Code](docs/8-code.md) | Aligned constants, tokens, tests and intention comments |
| 9 | [Products, Spaces & Experiences](docs/9-products-spaces.md) | Physical products, rooms and venues, sessions and events, [architecture](docs/9a-architecture.md), [touch, scent and taste](docs/9b-senses.md) |

Before anything goes out: [Testing Resonance](docs/testing-resonance.md) and [the review of all nine](docs/checklist.md). Afterwards: [Keeping It Aligned](docs/keeping-aligned.md). Words explained: [Glossary](docs/glossary.md).

Worked examples: [a Web Product](examples/web-product.md), [a Retreat Space](examples/retreat-space.md), [an Event Flyer](examples/event-flyer.md).

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

✦ QEA is published by [Wiccian](https://wiccian.io). © 2026 Wiccian. All rights reserved. You may use it freely to build your own work, or hire Wiccian to implement it for you: see the [Licence](LICENSE.md).
