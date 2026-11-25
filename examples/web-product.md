# Applying QEA to a Web Product

∞ ∞ ∞

A worked example: a small booking app for a yoga studio, built with QEA from the first line.

## Intention

> *"People find calm the moment they open it, and book a class in three taps."*

The brand's dominant element is Water (calm, flow). It is steadied with Earth (warm neutrals, clear structure) and given one Fire accent for the main action.

## Numbers

- Spacing unit 3 px; paragraphs 18 px apart, sections 36 or 54 px.
- Radii 12 (buttons) and 18 (cards); body text 18 px on 27 px lines.
- Touch targets 48 px; a reading column of 720 px.
- Motion 360 ms; a booking confirmation shows for 6 seconds.
- 9 classes per page; a booking can be cancelled up to 36 hours before.

## Colours

From the starter palette: Paper background, Ink text, Teal for links and secondary actions, Cream surfaces, one Orange for the "Book" button. Success in Green with a check mark and a word, never colour alone. Contrast checked in light and dark mode.

## Elements & Seasons

The home page photograph and one accent colour change with the season where the studio is: Deep Fern in spring, Coral in summer, Ochre in late summer, Burnished Gold in autumn, Deep Water in winter (reversed for a studio in the southern hemisphere). Text and action colours stay the same all year.

## Symbols

`✦ Book Your Class ✦` on the main button; ∞ ∞ ∞ under each section title; a Lotus Flower of Life at 9 % opacity behind the welcome.

## Words

"Find your calm" rather than "Stop the stress". Keywords: calm, breath, flow, together. Classes grouped by element: grounding (Earth), flowing (Water), energising (Fire), breathing (Air), meditation (Ether).

## Sound

Silent by default. An optional soft chime of 360 ms on a confirmed booking; class playlists tuned to 432 Hz at 72 BPM for flow classes and 60 BPM for yin; guided meditations of 18 or 27 minutes on a 528 Hz drone.

## Code

```css
@import "@wiccian/qea/palette.css";
:root { --spacing: 3px; --radius-button: 12px; --duration-calm: 360ms; }
```

```ts
// ✦ Members book a class in three taps, and always know where they stand.
export const CANCEL_UNTIL_HOURS = 36;
export const OG_SIZE = { width: 1200, height: 630 }; // Open Graph standard qea-ignore
```

A test fails the build when a colour isn't aligned; `qea-check` runs in CI.

## Images & Films

Photos at 1080 px, WebP, under 864 KB; a 36-second welcome film at 720 px with captions, a still and a pause button.

## Before Each Release

Before each release the team goes through the [nine points](../docs/checklist.md).

---
[← Overview](../README.md)
