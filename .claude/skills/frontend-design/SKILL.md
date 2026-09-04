---
name: frontend-design
description: The Classical design language this site is built in - an editorial, book-like system of hairlines, outlined controls and justified columns on a soft near-white ground. Load before writing or changing any markup, styling, colour, type or spacing in this repo, and whenever a change needs a new component, a new colour, a new size or a new interaction state.
---

# Front-end design

The site speaks one visual language, ported from the imported Claude Design
project's `classical` system. Everything below is enforced by the tokens in
`src/app/globals.css`. **That file is the only place a raw hex, font stack,
radius or shadow may appear.** Everywhere else, take the token.

## The direction in one paragraph

Editorial and book-like. Cormorant Garamond headings over Lora body text on a
soft near-white ground. Structure is carried by hairline rules, not by boxes or
fills. Colour is applied as **stroke** — borders, rules, underlines — never as
a filled block. Buttons are outlined. Cards are bordered and unfilled. Images
are matted like tipped-in plates. The spacing is airy on purpose.

## Colour

| Token                     | Use                                                      |
| ------------------------- | -------------------------------------------------------- |
| `bg-page`                 | The ground. Every page sits on it.                       |
| `bg-surface`              | The only fill in the system: image mats and code blocks. |
| `text-ink`                | Body and heading text.                                   |
| `border-rule`             | Every hairline, every divider, every unfilled border.    |
| `accent-100`…`accent-900` | One accent role, as a 100–900 ramp.                      |

The ramp is generated in OKLCH on a shared lightness scale, so step N of any
ramp carries the same visual weight.

- **100–300** — tinted fills, hovers, subtle borders.
- **600** (`accent` itself) — the base: rules, outlines, marks.
- **700–900** — text _on_ a tint, and pressed states.

Two rules that are easy to get wrong:

1. **`accent` is not readable as body text.** The accent-to-ground pair is
   tuned to ~3:1 — enough for rules, icons, large text and interface chrome,
   not for paragraph copy. For accent-coloured text at reading size use
   `text-accent-700`.
2. **Prefer a ramp step to an ad-hoc mix.** `text-ink/62` is fine for muting
   ink, but reach for `accent-300` before inventing a new accent tint.

## Type

`font-heading` (Cormorant Garamond) for headings, `font-body` (Lora) for
everything else. Never introduce a third face, and **never swap in a
sans-serif for emphasis** — weight and italics do that job.

**Bold does not exist here.** Interface headings cap at `font-semibold`. The
bigger the text, the lighter it sets: display sizes (`text-display`,
`text-title`, `text-article`) take `font-normal`.

Sizes are named by role, not by t-shirt size, because the scale is editorial
rather than modular: `text-micro`, `text-kicker`, `text-caption`, `text-meta`,
`text-note`, `text-detail`, `text-nav`, `text-body`, `text-read`, `text-lede`,
`text-row`, `text-repo`, `text-title`, `text-article`, `text-display`. Reach
for the named token first; a one-off `text-[13.5px]` is acceptable when no
role fits, a new token is better when the size repeats.

### Figures

Apply `tnum` wherever numbers stand **as figures** — kickers, dates, star
counts, tables, chart axes, statistics columns. Do **not** apply it to running
prose: Lora's tabular feature also widens word-spaces and punctuation, which
loosens the setting.

### Measure

Long-form body copy is justified with hyphenation (`text-justify
hyphens-auto`) at a comfortable measure. Cap prose with a `ch` measure —
`max-w-[44ch]` for a lede, `max-w-reading` (640px) for an article.

## Drawing the page

- Sections are separated by hairlines (`Rule`, or `border-rule` on an edge),
  not by cards, shadows or background changes.
- Lists of things are **rows** with a hairline between them, not a grid of
  cards. Give the whole row one hit target.
- Sidebars and metadata columns hang off a vertical hairline
  (`border-l border-rule pl-6`).
- A grid of cells draws its rules with a **one-pixel gap over the divider
  colour** (`gap-px bg-rule`), so no cell needs a border.
- Elevation is a whisper. `shadow-sm/md/lg` exist and are pre-tuned; a heavy
  drop shadow is always wrong.
- Every content image and figure goes through `Plate` / `Figure`, which mats it
  in a thin surface-coloured border with a warm archival grade.

## Interaction states

Never leave a browser default.

- **Hover** on a row or control: an accent tint (`hover:bg-accent/7`), and the
  row's title shifts to `group-hover:text-accent-700`.
- **Pressed**: one step further (`active:bg-accent/22`).
- **Focus**: the 2px accent `:focus-visible` ring is set globally in
  `globals.css`. Do not restyle it per component.
- **Disabled**: 45% opacity.

## The Tailwind ordering trap

This has already caused two defects in this repo, so it is worth stating
plainly.

Tailwind emits `.border-transparent` **after** `.border-accent` and
`.border-rule` in the stylesheet. Utilities of the same property and
specificity are resolved by source order, not by the order you wrote them in
the class string. So this silently loses its outline:

```tsx
// WRONG — border-transparent wins, the outline never renders
<button className="border border-transparent border-accent" />
```

Pick exactly one border colour per element:

```tsx
// RIGHT — width in the base, colour chosen once
<button
  className={cn("border", active ? "border-accent" : "border-transparent")}
/>
```

The same applies to any two utilities that set the same property. A
`hover:`-prefixed utility is safe, because variants are emitted after plain
utilities.

## Do

- Justify body copy and let the hairlines carry the structure.
- Draw with borders, rules and underlines.
- Give text room — the spacing is airy by design.
- Mat photographs so they read as plates, not banners.

## Don't

- Do not fill a card or a button with solid accent.
- Do not use a heavy drop shadow.
- Do not tighten the leading or crowd the margins.
- Do not swap in a sans-serif for emphasis.
- Do not hard-code a hex, a font name, a radius or a shadow outside
  `globals.css`.

## Checking your work

`npm run build` catches nothing visual. Before calling a design change done,
render it and look:

```bash
npx next start -p 4130          # in the background
node scratch/measure.js         # or drive Edge over CDP with puppeteer-core
```

Check every route at **390, 768 and 1280**, and assert
`document.scrollWidth === document.clientWidth` at each. Horizontal overflow is
the failure this layout is most prone to — a grid item's `min-width` defaults
to `auto`, so any wide child (a code block, a long unbroken string, a fixed-width
field) will widen its track and push the page sideways unless the item carries
`min-w-0`.
