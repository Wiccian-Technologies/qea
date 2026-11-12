# 2 ✦ Colours

∞ ∞ ∞

Colours are light: very high frequencies in the electromagnetic spectrum. People feel a colour before they read a single word, so we choose each one for the feeling and the job it serves, check that everyone can see it, and then align its value.

## Colour Psychology

Colour associations are tendencies, not laws: they come from nature, the body and culture, and context changes them (a red heart and a red error say different things). Use them as a starting point, then test with the people you build for.

| Hue | Often felt as | Serves well | Watch out for |
|---|---|---|---|
| **Blue** | trust, calm, clarity, depth, reliability | finance, health, technology, links and main actions | too much feels cold or distant |
| **Teal, turquoise** | balance, renewal, clear thinking, refreshment | wellbeing, travel, secondary actions | can feel clinical in large areas |
| **Green** | growth, health, nature, safety, "go" | success states, sustainability, food | many greens look like red to colour-blind eyes |
| **Yellow, amber** | optimism, warmth, attention, energy | highlights, warnings, playful brands | bright yellow fails contrast as text; large areas tire the eye |
| **Orange** | friendliness, enthusiasm, invitation, creativity | community, food, calls to join | loud or cheap when fully saturated |
| **Red** | urgency, passion, power, danger, "stop" | errors, destructive actions; love and appetite in small doses | raises the pulse; never for ordinary buttons |
| **Pink, rose** | care, tenderness, compassion, playfulness | caring services, gentle accents | deeper roses read warm and mature, not only "feminine" |
| **Violet, purple** | imagination, wisdom, luxury, the spiritual | creative, reflective and premium products | dark violets feel heavy; light ones dreamy |
| **Brown, earth** | grounding, honesty, warmth, the handmade | craft, food, nature | dull when it carries actions |
| **Near-black** | strength, elegance, authority, focus | text, premium products | pure black on white is harsh to read for long; prefer a deep ink |
| **Off-white** | space, clarity, simplicity, freshness | backgrounds, breathing room | pure white glares; a warm or cool off-white is kinder |
| **Grey** | neutrality, balance, calm professionalism | secondary text, borders, surfaces | too much feels lifeless |

### Saturation and Lightness Speak Too

- **Saturated** colours energise and draw the eye: keep them for the one thing that should be seen.
- **Muted** colours feel calm, natural and grown-up: good for large areas.
- **Light tints** feel soft and open; **deep shades** feel serious and steady.
- **Warm** colours (red, orange, yellow) seem to come forward and feel active; **cool** colours (blue, green, violet) step back and feel calm.

### Culture Changes Meaning

The same colour can mean opposite things. Before you launch in a new region, ask people who live there.

| Colour | Some meanings |
|---|---|
| White | purity and weddings in much of Europe and the Americas; mourning in parts of East and South Asia |
| Red | danger or "stop" in interfaces; luck and celebration in China; weddings in India |
| Green | nature and "go"; sacred in Islam; money or envy in some markets |
| Yellow | joy and sun; imperial in historical China; linked with mourning in some Latin American traditions |
| Purple | spirituality and luxury; mourning in parts of Latin America and Southern Europe |
| Black | elegance and power; mourning in many Western cultures |

Financial screens are a known trap: in China, Japan and Korea, red usually shows prices going **up** and green going **down**, the opposite of most Western markets.

## Colours by Goal

| Goal | Reach for |
|---|---|
| Trust, depth, clarity | blues, deep teal, a deep ink |
| Calm, healing, growth | muted greens, sage, soft teal |
| Warmth, heart, connection | rose, coral, peach, warm earth tones |
| Energy, invitation, action | orange, one warm accent per screen |
| Light, abundance, optimism | gold, amber, cream |
| Spirit, imagination | violet, lavender, indigo |
| Ground and rest | off-white, sand, stone, deep warm grey |

For colours that follow the time of year and the five Feng Shui elements, see [Elements & Seasons](3-elements-seasons.md).

## Building a Palette

1. **Start from the intention.** Name in one sentence how the product should feel ("calm and trustworthy, with a warm heart"). Choose one main hue from it.
2. **Give every colour a role,** not just a name: background, surface, text, secondary text, main action, link, success, warning, error, accent. A colour without a role doesn't go in.
3. **Balance by 60 · 30 · 10:** about 60 % calm base, 30 % supporting colour, 10 % accent. The accent is rare on purpose: when everything stands out, nothing does.
4. **Pair strong and soft:** each hue gets a strong shade that carries text or icons, and a soft tint for surfaces.
5. **Keep states universal:** green for success, amber for warning, red for error, blue for information. People already know them.
6. **Plan dark mode from the start:** don't invert; lower the saturation of accents, use deep greys rather than pure black, and check contrast again.
7. **Align and test** (below).

## Everyone Must See It

- **Contrast first.** Text needs **4.5 : 1** against its background; large text (24 px, or 18.5 px bold) and icons **3 : 1** (WCAG 2.2 AA). An aligned colour that fails contrast is not used for text. `contrast(a, b)` measures any pair.
- **Never colour alone.** About 1 in 12 men and 1 in 200 women see colour differently, most often red and green. Pair every colour signal with a word, an icon or a shape.
- **Light and glare.** Test on a phone in sunlight and at low brightness; soft tints can disappear.

## The Alignment Rule

**The sum of a colour's six hex digits divides by 3** (A = 10, B = 11, C = 12, D = 13, E = 14, F = 15).

```
#1f2327 → 1 + 15 + 2 + 3 + 2 + 7 = 30 ✓
#fafaf8 → 15 + 10 + 15 + 10 + 15 + 8 = 73 ✗
#fafaf7 → 72 ✓
```

Short forms count in full: `#fff` is `#ffffff` (90 ✓). Black `#000000` (0) and white `#ffffff` (90) are aligned.

### Nudging a Colour

A colour that doesn't align moves by **one hex step**, invisible to the eye:

1. Change the **last digit** (the blue channel's low digit) by one: `#fafaf8` → `#fafaf7`.
2. If that harms the colour or its contrast, change the red channel's low digit, then the green's (the eye is most sensitive to green).
3. Only then two steps.

`alignHex(hex)` lists the options in this order. Check contrast again after any change. An existing brand colour keeps its character: one step is never visible.

### Transparency

Mix with aligned percentages: 9, 18, 36, 54, 72 % (`color-mix(in srgb, var(--qea-blue) 54%, transparent)`). Avoid unaligned eight-digit hex values.

## Starter Palette

A neutral starting point to prototype with or to model your own on: nine hue families, each a strong colour (text-safe on Paper) and a soft surface. Data in [`palette/starter.json`](../palette/starter.json), CSS in [`palette/starter.css`](../palette/starter.css).

| Family | Feeling | Strong | Contrast on Paper | Soft |
|---|---|---|---|---|
| Neutral | ground, focus, quiet | Ink `#1f2327` · Stone `#5f6670` | 15.1 · 5.5 | Paper `#fafaf7` · Mist `#eef1f4` |
| Blue | trust, calm, clarity | `#2a5db1` | 6.1 | Sky `#dbe8f8` |
| Teal | balance, renewal | `#1f6f77` | 5.6 | Aqua `#d8f0ed` |
| Green | growth, safety | `#2f7a53` | 5.0 | Mint `#dcefe4` |
| Amber | optimism, attention | `#946008` | 5.1 | Cream `#fbefd7` |
| Orange | energy, invitation | `#b04a14` | 5.2 | Peach `#fbe5d5` |
| Red | urgency, "stop" | `#b3261d` | 6.3 | Blush `#f9dedb` |
| Rose | care, tenderness | `#a3365f` | 6.2 | Petal `#f8e1eb` |
| Violet | imagination, wisdom | `#6b4fba` | 5.8 | Lavender `#e9e3f8` |

---
[← Numbers](1-numbers.md) · [Elements & Seasons →](3-elements-seasons.md)
