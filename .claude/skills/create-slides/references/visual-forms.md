# Visual forms — pick the form from the content's shape

Do not decide "how fancy" a slide should be. State the slide's message in one sentence, name its **shape**, and let the shape choose the form. The form then tells you which template block or pattern to use.

## Shape → form → building block

| Shape | The slide says… | Form | Block / pattern | Fragments |
|---|---|---|---|---|
| Declarative | "X is Y." One claim. | headline + one supporting line, lots of air | `.slide.center` · `h1` + `.lede` | 0 |
| Quote | a memorable line | pull quote with source | `.quote` + `<cite>` | 0 |
| Definition | "X means Y, where…" | headline + 2–3 rows or a split with an icon | `.slide.split`, `.list > .row` | ≤ 3 |
| Sequence | ordered steps, dated events | numbered rows revealed one by one · timeline when dates matter | `.row .num` · `timeline` | one per step |
| Comparison | A vs B vs C | 2–4 cards | `comparison-grid` (or `.cols` + `.card` by hand) | one per column or 0 |
| Relational (many → one) | independent things meet | converging tracks | `convergence` | tracks + 1 |
| Quantitative (few numbers) | one number that matters | giant stat + label | `.stat` | 0–1 |
| Quantitative (series) | values across categories or time | bar / line chart | `chart` | one per series |
| Trend / metaphor | "it follows a curve", "downhill", "plateau" | single curve with markers | `curve` | 1 + markers |
| Hierarchical | containment, taxonomy | nested rings | `nested-sets` | one per ring |
| Branching | decision tree, search explosion | growing tree, optional highlighted path | `tree` | depth − 1 |
| Looping | a repeating process | nodes on a ring with arrows | `cycle-loop` | one per node |
| Scene / set | many actors arranged (a swarm, an orchestrator + tools) | icon composition in one SVG, hand-authored | inline `<svg>` + `<use href="assets/icons.svg#i-…">` | as needed |
| Code | a snippet | `.mono` block with hand-tokenised `<span>`s, ≤ 8 lines, ≥ 32 px | `<pre class="mono">` | 0–1 |
| Math | an equation | plain text/Unicode or hand-drawn SVG (no KaTeX in HyperFrames) | `.mono` or SVG | 0 |
| Title / divider | section break | `.slide.center` with eyebrow + `h1`, nothing else | — | 0 |
| Media | a clip carries the slide | `<video>` clip + `autoplay: true` in the island | `<video id="…" data-start data-duration>` | 0 |

## The per-slide justification test

Before you build anything beyond typography, answer in one line: **"What does text alone fail to convey here?"**
If the answer is "nothing", stay with typography. If it names a structural property (order, containment, convergence, quantity, cycle, branching, shape of a trend), the pattern is justified. Never pick a figure because it "looks cool".

## Rhythm

A 40-minute talk with a figure on every slide exhausts the room. Aim for a pulse: figure → typography → typography → figure. If more than half the deck is figures, collapse the weakest candidates to rows or a stat. Never two `.stat` slides in a row.

## Anti-patterns

- Bullet lists with symbols. Use numbered `.row`s (max 4) or cards. Never more than six lines of body text on a slide.
- A chart for two numbers. Use `.stat` or a split with the two numbers as `h1`s.
- A timeline for unordered items. Use cards.
- A hand-drawn figure when a pattern fits: check the eight patterns first.
- Cramming: if the `check` layout audit reports overflow, cut words before shrinking fonts.
