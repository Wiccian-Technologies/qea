# 3 ✦ Colours

∞ ∞ ∞

Colours are light, very high frequencies in the electromagnetic spectrum; in terms of vibration they rise above words. We choose a colour for the goal it serves, and we align its value.

## The Rule

**The sum of a colour's six hex digits divides by 3** (A = 10, B = 11, C = 12, D = 13, E = 14, F = 15).

```
#504243 → 5 + 0 + 4 + 2 + 4 + 3 = 18 ✓
#fef8f3 → 15 + 14 + 15 + 8 + 15 + 3 = 70 ✗
#fef8f2 → 69 ✓
```

Short forms count in full: `#fff` is `#ffffff` (90 ✓).

## Nudging a Colour

A colour that doesn't align moves by **one hex step**, invisible to the eye:

1. Change the **last digit** (the blue channel's low digit) by one: `#fef8f3` → `#fef8f2`, `#4999bb` → `#4999bc`.
2. If that harms the colour or its contrast, change the red channel's low digit, then the green's (the eye is most sensitive to green).
3. Only then two steps.

`alignHex("#fef8f3")` lists the options in this order. Check contrast again after any change.

## Contrast First

An aligned colour that fails contrast is not used for text. Text needs **4.5 : 1** against its background (3 : 1 for large text and icons, WCAG 2.2 AA). The palette lists every colour's contrast on Sand, and `contrast(a, b)` measures any pair.

## Transparency

Mix with aligned percentages: 9, 18, 36, 54, 72 % (`color-mix(in srgb, var(--wiccian-deep-ocean) 54%, transparent)`). Avoid unaligned eight-digit hex values.

## The Wiccian Palette

Aligned on 17 Oct 2026 by one hex step from the brand's originals. Full data in [`palette/wiccian.json`](../palette/wiccian.json), CSS in [`palette/wiccian.css`](../palette/wiccian.css).

| Group | Colour | Hex | Was | Use | On Sand |
|---|---|---|---|---|---|
| Neutrals | Deep Taupe | `#504243` | | dark text, depth | 9.1 |
| | Sand | `#fef8f2` | `#fef8f3` | light background | |
| | Antique Rose | `#9e7d77` | | icons and large text only | 3.5 |
| | Ivory | `#ebdfca` | `#ebdfcb` | soft surfaces | |
| Blues | Deep Ocean | `#003a6b` | `#003a6c` | strong text, night surfaces | 11.0 |
| | Ocean | `#3f6cab` | | links, calm actions | 5.1 |
| | Ether | `#4999bc` | `#4999bb` | accents, decoration | 3.0 |
| | Sky | `#add2e8` | | info surfaces | |
| Greens | Midnight Teal | `#305d60` | | grounded accents | 7.0 |
| | Forest | `#455f46` | `#455f45` | success text | 6.7 |
| | Emerald | `#7b9477` | `#7b9476` | success icons | 3.1 |
| | Sage | `#d7e5d5` | `#d7e5d4` | calm surfaces, light buttons | |
| Warm | Terracotta | `#bb4e47` | | heart accents | 4.6 |
| | Coral | `#ed9378` | | glow and logo, never text on light | 2.2 |
| | Gold | `#ffd377` | `#ffd378` | highlights, stars | |
| Identity | Leela | `#30006c` | | identity, headings | 14.8 |
| | Lumina | `#d5bc6d` | `#d5bd6d` | the action colour, ✦ | |
| | Dark Violet | `#5d3fb4` | | wiccian.io accent | 7.0 |
| | Rose Gold | `#f2d6cf` | `#f2d6ce` | wiccian.io soft accent (proposed) | |

Black `#000000` and white `#ffffff` are aligned too (0 and 90).

## Colours by Goal

| Goal | Colours |
|---|---|
| Trust, depth, clarity | Deep Ocean, Ocean |
| Calm, healing, growth | Sage, Emerald, Midnight Teal, Forest |
| Warmth, heart, connection | Terracotta, Coral, Rose Gold |
| Light, abundance, action | Gold, Lumina |
| Spirit, identity | Leela, Dark Violet, Ether |
| Ground and rest | Sand, Ivory, Deep Taupe |

---
[← Numbers](02-numbers.md) · [Elements →](04-elements.md)
