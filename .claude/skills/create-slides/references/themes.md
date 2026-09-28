# Themes

One template, four looks. Switch with the `data-theme` attribute on `<html>` in `composition/index.html`; nothing else changes.

| `data-theme` | Canvas | Type | Accent | Use |
|---|---|---|---|---|
| `keynote-dark` (default) | near-black `#050506` + soft radial glow | Inter (shipped woff2) | one accent, default sage `#7c9885` | talks, demos, anything on a projector |
| `keynote-light` | `#fbfbfd` | Inter | darker sage `#4b6552` | bright rooms, print-leaning handouts |
| `rs-dark` | R&S stepped cover gradient `#001437 → #005A9E` (135°, hard stops) | Arial Narrow headings / Arial body (local system fonts) | R&S blue `#009DEC`, secondary `#7CC9F2` | Rohde & Schwarz internal talks; logo bottom-right appears automatically |
| `rs-light` | white, headings in R&S dark blue `#003E76` | Arial Narrow / Arial | `#009DEC` | R&S print-style content, PDF handouts |

Tokens live in `composition/deck.css`. R&S values come from `~/.claude/skills/rus_style/tokens.json` (`roles_dark`, `roles`, `trace_cycle_dark`, `trace_cycle`); if the two ever disagree, `tokens.json` wins — update deck.css.

## Changing the accent

In the `<style>` block of `composition/index.html`:

```css
:root { --accent: #82a4c7; --accent-2: #9bb5d4; --accent-soft: rgba(130, 164, 199, 0.18); }
```

Keep one accent per deck. Chart series use `--c1 … --c6` (already ordered for hue separation per theme).

## Ambient preset (MP4 loop behind the slides)

Opt-in. The loop lives in the **wrapper**, behind a transparent player — a `<video>` inside the composition would be paused by the player on every slide change.

1. Copy the loop to `composition/assets/ambient.mp4` (re-encode to ≤ 20 MB, 1080p, no audio: `ffmpeg -i in.mp4 -vf scale=1920:-2 -vcodec libx264 -crf 26 -an ambient.mp4`).
2. In `index.html` (wrapper): add `data-ambient` to `<html>` and uncomment the `.ambient` block.
3. Tune legibility with `.ambient video { opacity }` (0.25–0.4) and `.ambient::after { background }` (the scrim). Aim for the video to read as texture, not content.
4. `bun run dev` and check every slide over the busiest part of the loop; `check`/`snapshot` always validate the opaque composition, so contrast over video is a visual judgement.

The composition detects the wrapper flag (`html.ambient`) and drops its own background and glow; nothing in the composition changes.

## R&S specifics

- Fonts are declared as `RS Heading` / `RS Body` mapping to `local("Arial Narrow")` / `local("Arial")`, because HyperFrames silently aliases the name `Arial` to Inter at compile time. `check` prints "No deterministic font mapping for: Arial Narrow" — expected, harmless; local renders use the installed system fonts.
- `assets/rs.svg` (the R&S logo) is bundled and shown by `[data-theme^="rs"] .logo`. This is a deliberate exception to the `rus_style` skill's "no trademarked artwork" rule for this internal-use skill; the skill never redraws or restyles the mark, it only places the file. Remove the `<img class="logo">` for external audiences if in doubt.
- Restraint is the brand: lead with `#009DEC`, use orange `#EA5B0C` only for one emphasis per deck, keep white type, no rainbow charts.
- The stepped cover gradient carries the identity; do not add glass panels or extra gradients on top of it.

## Adding a theme

Add one `html[data-theme="name"] { … }` block in `deck.css` overriding the same token names, run the eight-pattern test deck through `bun run check`, and eyeball the contact sheet. Do not add tokens the other themes lack.
