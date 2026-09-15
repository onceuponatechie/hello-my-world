# Asset sources

## Photos

`images/essy-reading.jpg` and `images/essy-notes.jpg` were copied without modification from the user's `butter-canvas-dream/src/assets` folder for the initial still frames of the hero image chips.

## Fonts

Retrieved on 15 September 2026 from Google's official font repository:

- [Hanken Grotesk](https://github.com/google/fonts/tree/main/ofl/hankengrotesk): `HankenGrotesk[wght].ttf`.
- [Instrument Serif](https://github.com/google/fonts/tree/main/ofl/instrumentserif): regular and italic TTF files.

The corresponding SIL Open Font License files are included in `fonts/`. Next.js serves these font files with the site using `next/font/local`.

## Missing reference asset

The source `hero-cover.png.asset.json` points to a Lovable asset route, not a local image. Its background has not been replaced with an approximation. Recover the actual file once the live site address is available.
