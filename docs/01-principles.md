# 1 ✦ Principles

∞ ∞ ∞

## Why Align

Wiccian works from one observation: everything we make carries a frequency, the numbers it is built from, the colours, the words, the symbols. Customers, team members and users read it, mostly without noticing. QEA makes that frequency deliberate. Instead of leaving a thousand small choices to habit or to a tool's defaults, we choose them in resonance with **3 · 6 · 9**.

The effect we look for is coherence: a page, a product or a codebase where every part comes from the same intention and therefore feels calm, whole and trustworthy.

## The Nine Dimensions

QEA works on nine dimensions. They follow the QEO framework on [wiccian.io/technology](https://wiccian.io/technology.html):

| Dimension | What we align |
|---|---|
| **Numbers** | Sizes, spacing, durations, limits, counts, periods, prices where we choose them |
| **Colours** | Every colour's hex value; which colours carry which role |
| **Elements** | The order and balance of 🜃 Earth · 🜄 Water · 🜂 Fire · 🜁 Air · ✧ Ether |
| **Symbols** | ✦ ✧ ∞ ♥ \|\|∿ and sacred geometry, where and how they appear |
| **Words** | High-vibration, heart-based wording; keywords; turning heavy words |
| **Texts & Presentations** | Structure, headings and calls to action in the same spirit |
| **Images & Films** | Their sizes, lengths and quiet integration of symbols |
| **Code** | Constants, design tokens, tests, intention comments |
| **Products** | Physical and digital products carry the same code |

## Free Choices Only

QEA applies to **free choices**: values a designer, writer or developer picks. It never overrides a value that has a reason of its own.

### When Other Values Win

Keep the given value, and mark it in code with `qea-ignore` so the reason stays visible, when it is:

- **An industry standard:** link preview images 1200 × 630, video 16:9 and 1920 × 1080, A4, ISO dates, HTTP status codes.
- **Accessibility:** contrast ratios (WCAG 2.2 AA: 4.5 : 1 for text, 3 : 1 for large text and icons) and touch targets (Apple 44 pt, Android 48 dp; we use 45 or 48 px). An aligned colour that fails contrast is not used for text.
- **A protocol or format:** port numbers, byte sizes a format needs (H.264 needs even sides), cryptography.
- **A third party's default** we don't control (a payment provider's widget, a map, an embedded player).
- **A measured copy:** when we rebuild an existing page one to one, its measured sizes stay; its colours still align.
- **The law or a contract:** VAT rates, legal minimums, contract terms.
- **Someone else's words or numbers:** a customer's price, a testimonial, a place's own text. Places and clients keep their own words; QEA aligns the design around them.

### Hairlines

Lines of 1 or 2 px are physical pixels, not design choices. They stay.

## How to Apply It

1. **Start from tokens.** Define the aligned scale, colours and durations once (design tokens, CSS custom properties, a theme) and use only those.
2. **Choose, don't round late.** Pick 36 px from the start rather than designing at 35 and fixing it later.
3. **Prefer 9.** When two aligned values work, take the one divisible by 9 (18 over 15, 36 over 33, 108 over 105).
4. **Check automatically.** Run `tools/qea-check.mjs` in CI, and test your palette (see [Code](07-code.md)).
5. **Write the exceptions down.** Every `qea-ignore` says why.

---
[← Overview](../README.md) · [Numbers →](02-numbers.md)
