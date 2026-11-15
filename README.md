# QEA Framework ✦ Quantum Energy Alignment

∞ ∞ ∞

**QEA** is a framework for builders (designers, developers, writers and product teams) who want everything they create to come from one clear intention. It aligns the free choices in everything we make (sizes, colours, shapes, words, sounds, materials, timings and places) with the numbers **3 · 6 · 9**, the elements and the rhythms of nature, while keeping every standard that makes a product usable, accessible and legal.

> *"Vibrate at the right frequency within, and everything will flow and fall into place on the outside."*

QEA respects the [seven universal laws](docs/universal-laws.md), which all express one: **everything is energy**.

The result is coherence: a product where every part feels as if it belongs, calm to look at, easy to use and trustworthy. QEA works with any brand, any stack and any industry. It doesn't bring its own look; it brings a way of choosing.

## The Three Core Rules

1. **Numbers align to 3 · 6 · 9.** Wherever a number is a free choice (padding, margin, gap, size, radius, image size, duration, limit, count, period), it divides by 3, ideally by 9: 3, 6, 9, 12, 18, 24, 36, 54, 72, 108, 144, 216, 432. → [Numbers & Proportion](docs/1-numbers-proportion.md)
2. **Colours align by their hex digits.** The sum of a colour's six hex digits (A = 10 … F = 15) divides by 3. A colour that doesn't is nudged by one hex step, invisible to the eye. → [Colours & Light](docs/2-colours-light.md)
3. **Standards win.** Where an industry standard, a protocol, accessibility (contrast, touch size), a third party or the law sets a value, that value stays. Alignment never makes something worse to use. → [Principles](docs/principles.md)

## Start Here

**Anybody can use QEA, and nothing needs to be installed.** Read it, understand it, and apply it to your own work. The values here are guidelines and show how we use them; make them your own.

✦ **New?** Read the [Quick Start](docs/quick-start.md): QEA on one page.
✦ **Building with code?** [Install QEA](docs/install.md) in three steps.
✦ **Going deeper?** [Everything Is Energy](docs/universal-laws.md), the [Principles](docs/principles.md), [Care for the Earth](docs/care-for-the-earth.md) and [Before You Create](docs/before-you-create.md).

## The Nine Dimensions

Nine qualities, in three families of three.

| | Dimension | In short |
|---|---|---|
| | **I. Form** · *what is seen* | |
| 1 | [Numbers & Proportion](docs/1-numbers-proportion.md) | The aligned scale, the rule of thirds, the golden ratio, Grabovoi sequences |
| 2 | [Colours & Light](docs/2-colours-light.md) | Colour psychology, roles, accessibility, the hex digit rule, light |
| 3 | [Shapes & Symbols](docs/3-shapes-symbols.md) | The shapes of the elements, sacred geometry, nine core symbols (✦ ✧ ∞ \|\|∿ ♥ ☉ ☽ and the spiral), New Homeopathy |
| | **II. Vibration** · *what is heard and felt* | |
| 4 | [Words](docs/4-words.md) | High-vibration language, keywords, turning a heavy word |
| 5 | [Sound & Music](docs/5-sound-music.md) | 432 Hz, Solfeggio frequencies, tempo, the sounds of the elements |
| 6 | [Touch, Scent & Taste](docs/6-touch-scent-taste.md) | Materials, natural scents, seasonal food |
| | **III. Nature** · *which element, when, where* | |
| 7 | [Elements](docs/7-elements.md) | The five elements, Feng Shui's cycles, the [personalities](docs/7a-element-personalities.md) |
| 8 | [Time & Rhythm](docs/8-time-rhythm.md) | Durations, the day, the moon, the seasons, the stars, aligned dates |
| 9 | [Place & Direction](docs/9-place-direction.md) | Reading the place, the directions, the centre, the Bagua, the Vastu mandala |

## Where QEA Lives

The nine come together in what we make:

- [Digital Products & Code](docs/apply-digital.md) and [Images & Films](docs/apply-images-films.md)
- [Brands & Business](docs/apply-brands.md)
- [Products & Print](docs/apply-products-print.md)
- [Spaces & Architecture](docs/apply-spaces.md)
- [Experiences & Events](docs/apply-experiences.md)

Worked examples: [a Web Product](examples/web-product.md), [a Retreat Space](examples/retreat-space.md), [an Event Flyer](examples/event-flyer.md).

## Before and After

[Testing Resonance](docs/testing-resonance.md) → [Before It Goes Out](docs/checklist.md) → [Keeping It Aligned](docs/keeping-aligned.md). Words explained: [Glossary](docs/glossary.md).

## Palettes

- **Starter palette:** nine hue families, each a strong, text-safe colour and a soft surface: [`palette/starter.json`](palette/starter.json), [`palette/starter.css`](palette/starter.css).
- **Season palettes:** six colours for each of the five seasons: [`palette/seasons.json`](palette/seasons.json), [`palette/seasons.css`](palette/seasons.css).

Every colour is aligned and its contrast is listed.

## Tools

```bash
npm install github:Wiccian-Technologies/qea   # add QEA to your project
npx qea-check src/                            # every unaligned colour and size, with the nearest aligned one
npx qea-check src/ --colours                  # colours only
npx qea-check src/ --strong                   # numbers must divide by 9
```

In code, `@wiccian/qea` gives `isAlignedNumber`, `nearestAligned`, `isAlignedHex`, `alignHex`, `digitSum`, `contrast` and the aligned `SCALE` and `DURATIONS`. No dependencies; Node 20 or newer. Step by step: [Install QEA](docs/install.md).

---

✦ QEA is open source, published by [Wiccian](https://wiccian.io): texts under CC BY-SA 4.0, tools under MIT (see the [Licence](LICENSE.md)). Questions, or would you like Wiccian to implement QEA for you? Write to [info@wiccian.io](mailto:info@wiccian.io).
