# Deck contract — how a create-slides deck is wired

Everything below is implemented by `assets/template/` and verified against HyperFrames 0.8.29. Read this before touching `composition/index.html`.

## Files

```
slides/
  index.html                 wrapper: <hyperframes-slideshow> + <hyperframes-player src="composition/"> + island copy (+ optional ambient <video>)
  composition/index.html     the deck: island → #root → scenes → inline root-timeline registration → deck.js → patterns
  composition/deck.css       tokens (4 themes) + layout classes — generic, do not fork per deck
  composition/deck.js        engine: scenes/fragments/effects/patterns/manifest bootstrap
  composition/patterns/*.js  only the shape patterns this deck uses (copied from the skill's assets/patterns/)
  composition/assets/        fonts/, icons.svg, rs.svg, gsap.min.js (copied by postinstall), ambient.mp4 (optional), media
  scripts/validate.mjs       lint → check --at <hold times> → snapshot --at <hold times>
  PLAN.md                    the approved slide plan (claim / shape / form / fragments / notes source)
  package.json               dev · lint · check · check:all · snapshot · pdf
```

## The island (source of truth for order, fragments, notes)

```html
<script type="application/hyperframes-slideshow+json">
{ "slides": [
    { "sceneId": "cover",  "notes": "2–4 sentences the presenter reads." },
    { "sceneId": "three",  "notes": "…", "fragments": [10.3, 10.6, 10.9] },
    { "sceneId": "demo",   "notes": "…", "autoplay": true }
  ],
  "slideSequences": [ { "id": "detail", "label": "Backup: method", "slides": [ { "sceneId": "detail-1" } ] } ] }
</script>
```

- Exactly one island, first thing in `<body>`, before `#root`. `present`/lint read it statically.
- `sceneId` must equal a scene's `data-composition-id`. Fragment times are **absolute composition seconds** inside the scene's `[start, end]`.
- The wrapper's `<hyperframes-slideshow>` needs a **verbatim copy** of the island — it reads its own innerHTML, not the loaded composition. `scripts/validate.mjs` mirrors it on every run; never edit the wrapper copy by hand.
- `autoplay: true` plays the slide's first `<video>` on enter (never auto-advances). The player pauses all composition media on slide change.

## Scenes and time slots

```html
<section id="scene-three" class="scene-frame clip" data-composition-id="three" data-start="10" data-duration="10" data-label="Three points">
  <div class="slide"> … </div>
</section>
```

- Every scene owns a 10 s slot: `data-start = 10 × index`, `data-duration = 10`; `#root[data-duration] = 10 × number of scenes` (branch scenes included, placed after the main line).
- Fragment hold times: `start + 0.3·k` for k = 1..n (bunched near the start so clicks feel instant).
- `#root` must be the **first** `[data-composition-id]` in the document (the player keys `__timelines` by it). Keep `<img class="logo">` and the inline timeline registration inside `#root`, after the scenes.
- Visibility is half-open `[start, start+duration)`; the engine toggles `.is-active`. Hidden scenes are `visibility:hidden; pointer-events:none` so they never swallow clicks.

## Engine attributes (deck.js)

| Attribute | On | Behaviour |
|---|---|---|
| `data-anim` | any element | fades/rises in when its scene becomes active (staggered) |
| `data-fragment="k"` | any element (HTML or SVG) | hidden until `fragments[k-1]`; several elements may share k |
| `data-effect` | with the two above | `rise` (default) · `fade` · `pop` · `draw` (SVG stroke) · `grow` (scaleY from `data-origin`, default `50% 100%`) |
| `data-pattern="name"` + child `<script type="application/json">` | a `.figure` div | rendered by `patterns/name.js` before the first seek; sets `data-fragments="n"` |

Navigation is a **pure seek** (no playback). State is computed from `t` alone; transitions are imperative and only play in a real browser (`navigator.webdriver` is false). Under `check`/`snapshot` every frame is the final state.

## Foot-guns (each one cost a debugging round)

| Symptom | Cause | Fix |
|---|---|---|
| No nav capsule, arrows dead | slideshow element upgraded before its island was parsed | keep `defer` on both player scripts in the wrapper |
| `/deck.js` 404 in the live deck, assets missing | static server "clean URLs" redirect `composition/index.html` → `/composition` | wrapper uses `src="composition/"` (trailing slash) |
| MP4 not visible behind slides | player host is opaque black | wrapper `hyperframes-player{background:transparent!important}` + `<html data-ambient>`; deck.js mirrors it as `html.ambient` |
| Snapshots on white, contrast `0/0` | composition transparent while validating | composition stays opaque; only the wrapper flag makes it transparent |
| `page_error: Invalid or unexpected token`, `gsap is not defined` | `check` inlines **all** local scripts into one `<script>`; a literal `</script>` inside any JS file (even in a comment) ends it early | never write `</script>` in .js files (patterns use `<\/script>` in comments) |
| `missing_timeline_registry` | lint looks for `window.__timelines[...] =` in index.html itself | keep the inline registration script; deck.js reuses it |
| Snapshots show half-drawn curves / dim headlines | transitions in flight at capture | engine is instant under automation — if you add custom tweens, gate them on `deck.instant` |
| Background video freezes on slide change | `<video>` inside the composition is paused by the player | ambient loops live in the wrapper only |
| Text renders in Segoe/Arial instead of Inter | bundled HyperFrames fonts exist only at compile time | fonts are shipped as local woff2 in `assets/fonts/` (already wired in deck.css) |
| `Arial` becomes Inter in check | compiler alias | R&S faces are declared as `RS Heading` / `RS Body` via `local()` — the "No deterministic font mapping for: Arial Narrow" warning is expected and harmless |
| Layout/contrast report `0 sample(s)` | a lint **error** disables the browser audits | fix lint first (validate.mjs stops on lint errors) |
| `sweep_static` failure | even sampling of a still deck | always sample with `--at` (validate.mjs does) |
| Deck rendered as 6 s MP4 | `hyperframes render` on a deck | never render a deck; deliverables are the live deck, PNGs, PDF |
| `[deck] scene "x" has data-fragment up to 3 but the island lists 2` (console) | markup and island disagree | fix the island (or markup) — validate.mjs prints the same warning statically |
| lint `composition_file_too_large` warning | a 30-slide deck is one file by design (no engine runtime under the wrapper, so no sub-compositions) | expected; ignore |
| layout `connector_detached` warning on `cycle-loop` arcs | the connector heuristic cannot see that arcs end on circle rims | expected; verify on the PNG and ignore |
