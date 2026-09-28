# Validation loop

Run after every batch of 3–5 authored slides and once more at the end. Green output is necessary, not sufficient: **read every PNG**.

```bash
bun run check        # lint → check --at <hold times> → snapshot --at <hold times>
bun run check:all    # same, but samples every fragment state (slower; use for the final pass)
bun run snapshot     # snapshots only (no browser audits) — quick visual iteration
bun run dev          # http://localhost:3030 — the real thing; ←/→ Space Backspace, P presenter, F fullscreen
bun run pdf          # composition/snapshots/frame-*.png → deck.pdf (run check or check:all first)
```

`scripts/validate.mjs` derives the hold times from the island + scene markup (rest frame = start + 0.7 s; fragment frames = fragment + 0.05 s), prints the index → scene → time table, then runs the CLI. It stops on lint errors because a lint error silently disables the layout and contrast audits.

## Reading the output

| Section | Means | Act |
|---|---|---|
| Lint `✗ …` | contract violation (unresolved sceneId, fragment out of range, overlapping slides, missing timeline registry, duplicate ids) | fix the island/markup first |
| Runtime `page_error` | JS threw in the composition (a pattern JSON typo, missing pattern script, `</script>` inside a JS file) | open `bun run dev`, read the console |
| Layout `canvas_overflow` / `content_overlap` / `escaped_container` | text beyond the frame or two held elements overlapping | cut words, drop a row, or move the figure to `.slide.top` |
| Contrast `n/m pass` | WCAG AA on visible text; failures list fg/bg and a suggested colour | use `--fg-2` instead of `--fg-3` for body text; never put `.small` on the accent |
| `⚠ "scene": markup has data-fragment up to 3, island lists 2` (validate.mjs) or the same in the browser console (`[deck] …`) | a dead click or a never-revealed element | make the island fragment count equal the markup |
| `⚠ scene "x" is in the DOM but not in the island` | unreachable slide | add it to the island or delete it |

## Visual review (mandatory)

1. Open `composition/snapshots/contact-sheet.jpg` — one glance for rhythm and consistency.
2. Read every `frame-NN-at-T.png` with the Read tool and ask per slide: is the headline the claim? does the figure say what text could not? is anything cramped or floating? one accent only?
3. Fix, re-run, re-read. Do not skip step 2 after a fix; regressions hide in neighbours.

What validation cannot see: a wrong fact, a headline that is a label, a figure that is decoration, a deck with no pulse. That is the review's job.

## Live check before handing over

`bun run dev`, then walk the whole deck with → only. Every press must change something. Press `P`, confirm notes and "Up next" in the presenter view. Close the audience tab.
