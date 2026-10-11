# BONSAI Design System

BONSAI design extends minimalism to the visual realm — every pixel serves a purpose, every
color conveys meaning, every interaction feels intentional. The look is the **Rohde & Schwarz
ZNA instrument look** (flat slate panels, recessed borders, a cyan lead accent, plots as
black neon screens) set in the **BONSAI type system** (Inter / Quicksand / JetBrains Mono).

Every value below is machine-readable in [`design-tokens.json`](design-tokens.json) (W3C
DTCG) next to this file. Code snippets per target live in
[`frontend/react-tailwind.md`](frontend/react-tailwind.md) and
[`python/visualization.md`](python/visualization.md).

## Core Design Principles

- **One theme.** No light/dark toggle, no `prefers-color-scheme`. The only other look is
  the white **report** figure — for documents, print and PDF, never an app theme.
- **Instrument, not decoration.** Surfaces are flat. Separation comes from a **recessed**
  border (`bd1`, darker than every surface), not from shadows or glass.
- **Contrast first.** White headings, near-white body text, saturated accents; every text
  token holds WCAG AA on the surfaces it is meant for (table below).
- **Progressive Disclosure** — Start with essential information, reveal complexity only when needed.
- **Purposeful Aesthetics** — No decorative elements, no visual noise.
- **Name colors by hue, mean them by role.** Tokens are `ac-cyan`, `ac-red` …; the role
  table says what each hue means. A hue never changes meaning between surfaces.
- **The terminal and the app speak the same colors.** A WARNING is the same orange in
  loguru, in Rich and in any in-app log view.

## Color

### Surfaces, text, borders

| Token | Hex | Use |
|-------|-----|-----|
| `bg0` | `#14181d` | App ground |
| `bg1` | `#232a33` | Panels, cards |
| `bg2` | `#2a323c` | Nested panels, inputs |
| `bg3` | `#333d48` | Menus, hovered rows |
| `bg4` | `#3d4855` | Overlays, pressed state |
| `tx1` | `#ffffff` | Headings, values |
| `tx2` | `#d6dce1` | Body text |
| `tx3` | `#aab5be` | Labels, metadata |
| `tx4` | `#919da8` | Secondary metadata, placeholders |
| `bd1` | `#10151a` | **Recessed** separation — darker than `bg0` |
| `bd2` | `#3e4a55` | Standard raised border (surfaces) |
| `bd3` | `#4e5c69` | Hover / emphasis border (surfaces) |
| `bd4` | `#66737f` | **Input, select and search borders** — 3:1 against the ground |

### Accents (named by hue)

| Token | Hex | Typical use |
|-------|-----|-------------|
| `ac-cyan` | `#009dec` | Lead accent: active tab, primary button, selection |
| `ac-cyan2` | `#33b4f5` | Lead hover, links, active underline / bar |
| `ac-navy` | `#003e76` | R&S dark blue: logo gradient start, report titles |
| `ac-green` | `#2bd98a` | Success, "ok", done |
| `ac-orange` | `#ffa23c` | Warning, paused, attention |
| `ac-red` | `#e8483e` | Error, destructive actions |
| `ac-sky` | `#7cc9f2` | Info, data, secondary axis |
| `ac-violet` | `#9b6bd3` | Variables, protocol traffic, a fifth category hue |
| `glow-cyan` | `rgba(0,157,236,.18)` | Running glow, connection pulse |
| `glow-orange` | `rgba(255,162,60,.18)` | Paused glow |
| `focus` | `#66ccff` | Focus line (opaque, 2 px) |
| `selection` | `rgba(0,157,236,.40)` | Text selection, selected-item halo |

### States

| Token | Hex | Use |
|-------|-----|-----|
| `lead-dim` | `#2c5468` | Pressed segment, active toggle, owned badge — text on it is `tx1` (8.2:1) |
| `on-lead` | `#04121b` | Text on a **filled** cyan button (6.4:1) |
| `ok-dim` | `#1e6f4e` | Done fill, ok borders (`tx1` on it 6.1:1) |
| `row-hover` | `#1b2128` | Row under the pointer |
| `row-selected` | `#17303f` | Selected row — always with a 3 px `ac-cyan2` bar on the left |

### Roles

| Role | Hue | Terminal glyph |
|------|-----|----------------|
| lead | cyan | — |
| ok | green | `✓` |
| warn | orange | `⚠` |
| err | red | `✗` |
| info | sky | `→` |

### Contrast (WCAG 2.x, computed)

| Text on → | `bg0` | `bg1` | `bg3` |
|-----------|-------|-------|-------|
| `tx1` | 17.8 | 14.5 | 11.0 |
| `tx2` | 12.9 | 10.5 | 8.0 |
| `tx3` | 8.5 | 6.9 | 5.3 |
| `tx4` | 6.4 | 5.2 | 4.0 |
| cyan | 6.0 | 4.8 | 3.7 |
| green / sky | 9.7 | 7.9 | 6.0 |
| orange | 8.9 | 7.2 | 5.5 |
| red / violet | 4.6 | **3.7** | **2.9** |
| `bd4` field border (non-text) | 3.7 | 3.0 | 2.3 |
| `focus` line (non-text) | 9.9 | 8.0 | 6.1 |

Rules that follow:

- `tx3` and `tx4` hold AA on `bg0`–`bg2`; on `bg3`+ prefer `tx3`.
- **Disabled is opacity, not a color**: `opacity: .45` on the control.
- Field borders use `bd4` (WCAG 1.4.11: 3:1 for control boundaries); `bd2`/`bd3` are for
  surfaces. A field's hover goes *lighter* (`tx4`), never to `bd3`.
- **Red and violet fall below AA on `bg1` and up** — use them there for icons, borders,
  glyphs, tinted chips or bold ≥ 14 px text, not small body text.
- A filled cyan button takes `on-lead` text; white on cyan is only 3.0. `ac-cyan2` text on
  `lead-dim` is only 3.5 — an active fill takes `tx1` text.

## Typography

| Role | Family stack | Weight |
|------|--------------|--------|
| Body / UI | `"Inter Variable", Inter, system-ui, sans-serif` | 420 body · 520 emphasis · 600 heading |
| Display | `Quicksand, "Inter Variable", Inter, sans-serif` | 500–700 |
| Mono | `"JetBrains Mono Variable", "JetBrains Mono", Consolas, monospace` | inherits the body weight |

- Body **13 px** (dense app UI) or **14 px** (content pages), line-height **1.55–1.6**,
  letter-spacing **0.01em**. Dense UI steps: 9.5 / 10 / 10.5 / 11 / 12 / 13 px.
- Bundle the fonts in web apps (fontsource: `@fontsource-variable/inter`,
  `@fontsource/quicksand`, `@fontsource-variable/jetbrains-mono`); single-file pages load
  them from Google Fonts. The "… Variable" name comes first because fontsource registers it;
  the plain name second resolves an *installed* font.
- **Exports need installed fonts.** Browser PNG/SVG export (canvas), kaleido and matplotlib
  never see webfonts. An installed `InterVariable.ttf` is *not* found under "Inter Variable"
  — only "Inter" resolves, so keep the plain names in every stack. Full-stack projects check
  and install them via `dev.py --fonts` (see `structure.md`); elsewhere install Inter,
  Quicksand and JetBrains Mono manually (Nerd-Font builds are different families).
- Numbers that line up (tables, readouts, counters) use mono + `tabular-nums`.

## Shape, Motion, Chrome

- **Radius:** 3–4 px controls and cards, 6–8 px menus and dialogs, full for pills and dots.
- **Borders:** 1 px. `bd1` between regions, `bd2` around surfaces, `bd3` on their hover,
  `bd4` around input fields.
- **Spacing:** 8 px base (4 px steps in dense UI); generous section gaps.
- **Scrollbars:** 4 px, thumb `bd2`, transparent track.
- **Transitions:** 200–300 ms ease. No lift/translate on hover — instrument UIs stay still.
- **Focus:** opaque 2 px `focus` line (`outline: 2px solid; outline-offset: 2px`, or
  Tailwind `focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus`).
- **Logo:** 135° gradient `ac-navy → ac-cyan`, dark glyph (`bg0`).
- `color-scheme: dark` on `:root`; `<meta name="theme-color" content="#14181d">`.

## Component Patterns

| Pattern | Recipe |
|---------|--------|
| **Status card** | `bg1`, 1 px `bd2`, **3 px top stripe** in the status hue (`ac-cyan2` current, `ac-green` done, `ac-orange` attention, `bd3` neutral), radius 4 px. A 3 px left stripe marks a callout. |
| **Eyebrow label** | 11 px uppercase, letter-spacing 0.08–0.14em, `tx3` (or `ac-cyan` as section kicker), above a display heading. |
| **Display heading** | Quicksand, `tx1`, 600–700, line-height 1.05–1.2, `text-wrap: balance`. |
| **Segmented control** | One bordered group. Active: `lead-dim` fill, `tx1` text, `inset 0 -3px 0 ac-cyan2`. Inactive `tx3`, hover `tx1`. |
| **Toggle (on)** | `border ac-cyan/50`, `lead-dim` fill, `tx1` text; hover strengthens the border to `ac-cyan2`. |
| **Buttons** | Primary: filled `ac-cyan`, `on-lead` text, 700; hover `ac-cyan2`. Secondary: `bg3` + `bd3`, hover `bg4` + `bd4`. Danger: transparent, border + text `ac-orange`/`ac-red`. |
| **Badge / chip** | 11 px uppercase, 0.06–0.08em, 1 px border, radius 3 px. Owned/active: `lead-dim` + `border ac-cyan`. Ok: `border ok-dim`, text `ac-green`. Optional: dashed. Status dot 7 px (+ `0 0 6px` glow when live). |
| **Table** | Sticky header `bg2`, 11 px uppercase `tx3`, weight 400. Rows: 1 px `bd1`, hover `row-hover`, selected `row-selected` + `inset 3px 0 0 ac-cyan2`. Numbers right-aligned mono. |
| **Progress bar** | 6 px track `bg3`, radius 3, fill `ac-cyan` (running) / `ac-green` (done). |
| **kbd** | Mono 11 px, 1 px `bd3`, 2 px bottom border, radius 3. |
| **Toast** | `bg3`, 1 px `bd3`, radius 3, `0 4px 16px rgba(0,0,0,.5)`, bottom-center above the safe area. |
| **Disclosure** | `<details>` with a CSS chevron (rotated 2 px border corner), never a glyph in the accessible name. |

## Plots: `screen` and `report`

| Token | `screen` (default) | `report` (documents only) |
|-------|--------------------|---------------------------|
| paper / plot | `#10141A` / `#0A0D10` | `#FFFFFF` / `#FFFFFF` |
| title · axis titles · ticks | `#FFFFFF` · `#D6DCE1` · `#98A4AE` | navy `#003E76` · `#000000` · `#5A5F63` |
| grid · zero/axis line | `#262E36` · `#3A434D` | `#E3E6E8` · `#BFC3C6` |
| hover card | `rgba(35,42,51,.96)`, bd `#3E4A55`, white text | `#003E76`, white text |
| legend card | `rgba(16,20,26,.88)`, bd `#3E4A55` | `rgba(255,255,255,.92)`, bd `#BFC3C6` |
| markers M1 / M2 | `#FFA23C` / `#FFE14B` | `#EA5B0C` / `#F8AD3E` |
| aggregate mean / envelope | `#E86BD8` / `#98A4AE` | `#933973` / `#5A5F63` |
| secondary axis (Y2) | `#7CC9F2` | `#003E76` |
| trace width · ticks | 2 px · none | 2.5 px · `outside` |
| trace cycle | `#3BE065 #00B0F0 #FFA23C #FF5252 #E86BD8 #FFE14B #7CC9F2 #2BD9C8 #BFC3C6` | `#009DEC #EA5B0C #007973 #A50F14 #003E76 #F8AD3E #0083A2 #933973 #BFC3C6` |
| heatmap / surface | `#003E76 → #0083A2 → #009DEC → #7CC9F2 → #C7E8FA` | same |
| correlation (−1 → 0 → +1) | `#e8483e → #0A0D10 → #009dec` | `#A50F14 → #FFFFFF → #009DEC` |

Trace rules: **color = which trace** (walk the cycle in order; frozen/pinned curves keep their
color and the walk continues after them); **dash = which source file** (ladder `solid, dot,
dash, longdash, dashdot, longdashdot`); **generated curves** (means, ±σ, envelopes) are
dashed width 2; **Y2 traces** go thinner (1.25 px) in the Y2 color. Drag = pan, wheel = zoom,
SI tick exponents, hover label in mono 11 px.

## Console Output

| Level | Color | Hex |
|-------|-------|-----|
| DEBUG | `tx3` | `#aab5be` |
| INFO | `tx1` | `#ffffff` |
| SUCCESS | green | `#2bd98a` |
| WARNING | orange | `#ffa23c` |
| ERROR / CRITICAL | red | `#e8483e` |
| custom protocol level (e.g. SCPI) | violet | `#9b6bd3` |
| custom data level | sky | `#7cc9f2` |

Line format: cyan `HH:mm:ss`, level-colored level and message, sky `name:function:line`.
Rich uses role keys — `lead` cyan, `ok` green, `warn` orange, `err` red, `info` sky,
`accent` violet, `text` `tx1`, `muted` `tx3`, `border` `bd3` — from ONE dict per project,
never inline hex at call sites. Light terminals: use the `report` hues (navy/`#007973`/
`#C74D0A`/`#A50F14`, darkened to AA on white) for the same roles.

## Motion & Accessibility

Respect `prefers-reduced-motion` in every UI — it is an accessibility choice, not theme
sniffing. Include this block by default in every `index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Hit targets ≥ 44 px under `@media (pointer: coarse)`; inputs ≥ 16 px font there.
- `@media (forced-colors: active)`: never signal state by color alone — add
  `outline: 2px solid Highlight` to pressed/selected items and a dashed border to "done".
- `[hidden] { display: none !important }`; skip link first; `scroll-padding-top` = sticky
  header height.

## CLI & Terminal Output

Use the console roles for meaning, one glyph each: `✓` ok (`#2bd98a`), `✗` err (`#e8483e`),
`→` info (`#7cc9f2`), `⚠` warn (`#ffa23c`), muted `#aab5be` for timestamps and metadata.
