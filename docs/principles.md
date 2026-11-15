# ✦ Principles

∞ ∞ ∞

QEA rests on the [seven universal laws](universal-laws.md), all expressions of one: everything is energy.

## Why Align

Everything we make carries a frequency: the numbers it is built from, the colours, the words, the symbols. Customers, team members and users read it, mostly without noticing. QEA makes that frequency deliberate. Instead of leaving a thousand small choices to habit or to a tool's defaults, we choose them in resonance with **3 · 6 · 9**, the elements and the rhythms of nature.

The effect we look for is coherence: a page, a product or a codebase where every part comes from the same intention and therefore feels calm, whole and trustworthy. Coherence is also simply good craft: a consistent scale, a palette with roles and words chosen with care make any product easier to build, use and love.

## The Nine Dimensions

Nine qualities, in three families of three (3 · 6 · 9 itself):

| | Dimension | What we align |
|---|---|---|
| **I. Form** | *what is seen* | |
| 1 | **Numbers & Proportion** | Sizes, spacing, limits, counts, prices where we choose them; the rule of thirds and the golden ratio |
| 2 | **Colours & Light** | Every colour's hex value and role; daylight, warm and neutral light |
| 3 | **Shapes & Symbols** | The shapes of the elements, sacred geometry, the nine core symbols (✦ ✧ ∞ \|\|∿ ♥ ☉ ☽ and the spiral) and healing signs |
| **II. Vibration** | *what is heard and felt* | |
| 4 | **Words** | High-vibration wording, keywords, structure, headings and calls to action |
| 5 | **Sound & Music** | Tuning, frequencies, tempo, lengths and the sounds of the elements |
| 6 | **Touch, Scent & Taste** | Materials and textures, natural scents, seasonal food |
| **III. Nature** | *which element, when, where* | |
| 7 | **Elements** | The order and balance of the elements, their cycles and personalities |
| 8 | **Time & Rhythm** | Durations, the day, the moon, the seasons, the stars and aligned dates |
| 9 | **Place & Direction** | Reading the place, the directions, the centre, the Bagua and the Vastu mandala |

The nine come together in **where QEA lives**: digital products and code, images and films, brands, products and print, spaces and architecture, experiences and events.

## Magical Products

A product made with QEA is created with the energies that support it:

- **Aligned dates:** it is planned and carried out on dates chosen with the moon and the positions of the planets and stars (see [Aligned Dates](8-time-rhythm.md#aligned-dates)).
- **Universally aligned design:** numbers, colours, elements, symbols and sacred geometry in resonance with 3 · 6 · 9.
- **High-frequency code:** the technology itself is written with aligned values and clear intention (see [Digital Products & Code](apply-digital.md)).

## Free Choices Only

QEA applies to **free choices**: values a designer, writer or developer picks. It never overrides a value that has a reason of its own.

### When Other Values Win

Keep the given value, and mark it in code with `qea-ignore` so the reason stays visible, when it is:

- **An industry standard:** link preview images 1200 × 630, video 16:9 and 1920 × 1080, A4, ISO dates, HTTP status codes.
- **Accessibility:** contrast ratios (WCAG 2.2 AA: 4.5 : 1 for text, 3 : 1 for large text and icons) and touch targets (Apple 44 pt, Android 48 dp; 45 or 48 px align). An aligned colour that fails contrast is not used for text.
- **A protocol or format:** port numbers, byte sizes a format needs (H.264 needs even sides), cryptography.
- **A third party's default** you don't control (a payment provider's widget, a map, an embedded player).
- **A measured copy:** when you rebuild an existing page one to one, its measured sizes stay; its colours still align.
- **The law or a contract:** tax rates, legal minimums, contract terms.
- **Someone else's words or numbers:** a customer's price, a testimonial, a partner's own text. Everyone keeps their own words; QEA aligns the design around them.
- **A tuning standard** an orchestra or a licensed recording uses (A = 440 Hz).
- **A sequence with its own meaning:** a Grabovoi sequence or a date is used as it is (see [Numbers & Proportion](1-numbers-proportion.md)).

### Hairlines

Lines of 1 or 2 px are physical pixels, not design choices. They stay.

## How to Apply It

1. **Start from intention.** Write in one sentence whom the product serves and how it should feel.
2. **Start from tokens.** Define the aligned scale, colours and durations once (design tokens, CSS custom properties, a theme) and use only those.
3. **Choose, don't round late.** Pick 36 px from the start rather than designing at 35 and fixing it later.
4. **Prefer 9.** When two aligned values work, take the one divisible by 9 (18 over 15, 36 over 33, 108 over 105).
5. **Check automatically.** Run `npx qea-check src/` in CI (see [Install QEA](install.md)), and test your palette (see [Digital Products & Code](apply-digital.md)).
6. **Write the exceptions down.** Every `qea-ignore` says why.

## Practices, Not Promises

Some dimensions draw on traditions, practices and technologies (sacred geometry, Feng Shui, Vastu Shastra, geomancy, BioGeometry, New Homeopathy, Grabovoi sequences, healing frequencies, the moon and astrology, TimeWaver quantum technology) whose effects are not scientifically established. QEA uses them as intention and as design language. Never present them to your users as medical, financial or guaranteed effects, and never instead of professional care.

---
[← Everything Is Energy](universal-laws.md) · [Care for the Earth →](care-for-the-earth.md)
