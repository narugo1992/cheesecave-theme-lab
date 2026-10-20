# Site colour picker (prototype)

A prototype for the Theme page of the CheeseCave admin: pick a ready-made light and dark colour set, or give **one brand colour** and get all six colours of the theme back (primary, page background and card, for light and dark).

- **Live page:** https://narugo1992.github.io/cheesecave-theme-lab/ (`index.html`): a mock admin Theme page; **Quick setup…** opens the colour dialog.
- **Previous version:** `previous.html`: the palette-and-slider page before the dialog.
- **Research version:** https://narugo1992.github.io/cheesecave-theme-lab/research.html: the same with three methods side by side (hand-written rules, Material 3, Ant Design), a twelve-hue sweep and a check against real themes.
- **Design issue with the research and the plan:** https://github.com/cheesecave/cheesecave-admin/issues/23

Nothing here changes the product.

**The dialog** has, on the left, 16 recommended colours, then three bars (hue, vividness, lightness, each with its value) and a hex field, and at the bottom the **Dark depth** bar. On the right the Light and Dark demos update as you drag. **Apply** fills the six fields of the page; **Cancel**, Esc or a click outside discards. All controls work with the keyboard; on a phone the dialog fills the screen.

## What the picker decides for you

The inputs are the brand colour (16 recommended colours, three bars, or a hex field) and one slider, **Dark mode depth** (soft dark to deep dark). The rest is fixed, from measurements on 13 real themes whose files were read:

| Decision | Choice | Why |
|---|---|---|
| Light primary | your colour, unchanged | it is the brand |
| Dark primary | same hue and vividness, lightness at least 0.68 | real dark accents are 0.12 lighter at the median, and four themes use one colour in both modes |
| Page and card | near white or near black with a faint tint of your hue; the dark page starts at lightness 0.23 (soft dark) and goes down to 0.16 (deep dark) with the slider | 0.23 is the median of the 13 real themes (range 0.15 to 0.33); the five tint styles of the first prototype differed by at most 0.025 (barely visible), so they are not a choice any more |
| Method | rules in OKLCH | mean distance to the real themes 0.041, against 0.067 (Material 3) and 0.064 (Ant Design) |

The rules were fitted on those 13 themes, so that score is in-sample. A leave-one-out check of the main fitted parameter gave the same value every time (0.66) and a held-out error of 0.069 against 0.073 in-sample.

## Files

- `index.html`: the picker (about 60 KB, no dependency apart from the web font, which falls back to system fonts offline).
- `research.html`: the research version (inlines two colour libraries, see below).
- `data/verified-themes.json`: the 13 themes whose colours were read from their own files or palette pages, with source URLs.
- `analysis/`: the scripts behind every number (`final-eval.mjs`, `loo.mjs`, `tune*.mjs`, `effect.mjs`, `stats-check.mjs`, `check.mjs`) and the 58 presets with their provenance (`presets.mjs`). `algos.mjs` needs the two libraries: `npm i @material/material-color-utilities@0.3.0 @ant-design/colors@7.2.0 esbuild`, then bundle `libs-entry.js` as an IIFE to `libs/bundle/libs.js`.

## Provenance of the 58 presets

13 have values read from the theme's own files (shown with a source link in the page), 10 are partly official, 15 are from memory and not checked, 20 are original designs. Only the first group is a source. The theme names belong to their authors; the colour values are listed for reference and no endorsement is implied.

## Third-party code

See `THIRD-PARTY-NOTICES.md`.
