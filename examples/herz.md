# Reference Implementation ✦ Herz

∞ ∞ ∞

**Herz** (app.herz.io, herzworld.one) is the community token app of the Herz community, built by Wiccian fully on QEA. Where a rule in this framework is abstract, Herz shows it in practice.

## Numbers

- Tailwind spacing unit **3 px**; radii 6 · 12 · 18 · 24 · 36; text sizes 12 · 15 · 18 · 21 · 24 · 30 · 36 · 45 · 54.
- Motion 180–1440 ms (most transitions 360 ms); offer page reveals 1512 ms with delays 0 · 504 · 1008 · 1512 · 2016.
- Touch targets 45 px; at least 18 px between paragraphs.
- Limits: messages and wishes 144 characters; names 54; up to 9 offerings per place; 108 log lines per page; AI readings 6 a day for members, 36 for ambassadors, 108 for the team.
- Exchange codes live 9 minutes; a correction window of 30 days; members send at most 36 times in 24 hours.
- The partner contribution: **8.88 %**, shared 2.22 · 1.11 · 1.11 · 2.22 · 2.22.
- Pictures: 144 (avatars) · 432 · 720 · 1440 (photos); photos under 864 KB; films 960 or 720 px.

## Colours

- Every colour in `src/app/globals.css` and `src/lib/palette.ts` is aligned; a test fails the build otherwise:

  ```ts
  it("every colour follows 369 (hex digit sum divisible by 3)", () => {
    for (const [name, hex] of Object.entries(PALETTE)) expect([name, digitSum(hex) % 3]).toEqual([name, 0]);
  });
  ```

- A lint step rejects any raw colour outside the palette files.
- Colours have roles (`heading`, `tint`, `night`, `glow` …), and every role meets WCAG AA, with the ratio written beside each token.

## Elements

Place categories and the Numbers dashboard follow 🜃 Earth · 🜄 Water · 🜂 Fire · 🜁 Air · ✧ Ether.

## Symbols

♥ for Herz, ✦ for Coherence Verified places and calls to action, ✧ as the soft accent, drawn icons from one sacred-symbols set; no emoji in the interface and no yellow smiley faces (a lint rule checks it).

## Exceptions Written Down

Link preview images stay 1200 × 630; the one-to-one copy of the Quantum Business Flow page keeps its measured sizes while its colours align; places and clients keep their own words.

---
[← Overview](../README.md)
