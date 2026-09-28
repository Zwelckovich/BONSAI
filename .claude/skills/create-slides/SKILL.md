---
name: create-slides
description: Build premium, Apple-Keynote-clean presentation decks as HyperFrames slideshows from any text or audio (transcripts, podcasts, talks, outlines, articles) — one claim per slide, data-driven figures, presenter notes, per-slide validation with screenshots, and a static PDF handout. Four looks — keynote-dark (default), keynote-light, and Rohde & Schwarz rs-dark / rs-light. Use whenever the user wants slides or a deck ("make slides from this", "turn this transcript into a presentation", "Präsentation aus dem Transkript", "build me a deck about X", "convert this into talk slides"), even without naming a tool. Replaces the retired slidev-presentation skill. Not for single slide images or PowerPoint files.
---

# create-slides

Premium decks on HyperFrames slideshows. The template in `assets/template/` is the design system (four themes, layout classes, seek-driven engine); `assets/patterns/` holds eight data-driven figures; `scripts/validate.mjs` is the feedback loop. Deliverables: a live deck (`bun run dev`), per-slide PNGs, and a PDF handout. HyperFrames cannot export a deck to PDF or MP4 natively — never run `hyperframes render` on a deck.

Read `references/contract.md` before writing any composition HTML. Everything else is loaded when its phase starts.

## Prerequisites

Node ≥ 22, bun, ffmpeg, ImageMagick (`magick`) on PATH; the HyperFrames CLI is a project dev dependency (pinned), Chrome is downloaded by the CLI on first `check`. Audio input needs `uv` (faster-whisper is fetched on demand).

## Workflow

### Phase 0 — Input

- Text (transcript, outline, article): use as is. Keep the source next to the deck (`slides/source.md`) so notes can cite it.
- Audio/video: `uv run --with faster-whisper python <skill>/scripts/transcribe.py <file> -o slides/source.md` (CUDA → large-v3, CPU → small; `--language en|de`).
- Ask nothing yet. Read the whole source once; write down the through-line in one sentence — the deck's thesis.

### Phase 1 — Scaffold

```bash
cp -r <skill>/assets/template/. slides/      # wrapper, composition, deck.css/js, assets, scripts, package.json, .gitignore
cd slides && bun install                     # postinstall copies gsap.min.js into composition/assets/
```

Set `<html data-theme="…">` in `composition/index.html` (default `keynote-dark`; R&S → `rs-dark`; see `references/themes.md`). Ambient MP4 loop only when asked (themes.md). Add `slides/node_modules`, `slides/composition/snapshots` to the project `.gitignore` if the deck lives in a repo.

### Phase 2 — Plan (one approval gate)

Read `references/visual-forms.md`. Write `slides/PLAN.md`:

```markdown
# <Deck title> — plan
Thesis: <one sentence>   Audience: …   Length: ~N min   Theme: keynote-dark   Ambient: off

| # | sceneId | Claim (the headline, a full sentence) | Shape | Form / pattern | Frags | Source | Notes gist |
|---|---------|----------------------------------------|-------|----------------|-------|--------|------------|
| 1 | cover   | It's May 2026. Magic appeared overnight. | title | .slide.center | 0 | 00:00–00:33 | open cold, pause |
| 2 | thesis  | A seventy-year overnight success.        | declarative | h1 + .lede | 0 | 00:33–01:10 | … |
```

Rules: 12–35 slides for a 30–50 min talk; every claim is a sentence; `Frags` must match the pattern's fragment count (each pattern's header says how many); the pulse alternates figures and typography. Then ask the user **once** with AskUserQuestion — "Plan approved as is?" (options: approve / adjust) — and proceed autonomously after approval.

### Phase 3 — Author

Read `references/authoring-rules.md`. For each planned slide, in order:

1. Add the `<section class="scene-frame clip" …>` in its 10 s slot with the layout block from the catalogue; `data-anim` on eyebrow/headline/lede; `data-fragment` on rows/cards; patterns via `data-pattern` + JSON props (copy the needed `assets/patterns/*.js` into `composition/patterns/` and add its `<script>` after `deck.js`).
2. Add the island entry: `sceneId`, `notes` (2–4 sentences from the source passage), `fragments` = `[start+0.3, start+0.6, …]`.
3. Keep `#root[data-duration]` = 10 × scenes. `bun run check` mirrors the island into the wrapper `index.html` automatically.

Author in batches of 3–5 slides, then Phase 4. Do not author the whole deck blind.

### Phase 4 — Validate (per batch)

Read `references/validation.md` once. `bun run check` → fix lint → read the layout/contrast findings → open `composition/snapshots/contact-sheet.jpg` **and every new `frame-NN` PNG with the Read tool** → fix → repeat until green and the slides look right. Then back to Phase 3.

### Phase 5 — Final pass

`bun run check:all` (every fragment state) → read the contact sheet → `bun run pdf` → `bun run dev` and walk the deck with → only, press `P` to confirm presenter notes. Report to the user: URL, PDF path, slide count, anything you could not verify. Branching/hotspots only on request (`references/branching.md`).

## Hard rules

- Headline = claim (sentence). One idea, one visual, one accent per slide. Body ≥ 40 px, captions ≥ 32 px.
- A figure needs a written answer to "what does text alone fail to convey?" — otherwise typography.
- Island in composition and wrapper are identical; fragment count = markup count = pattern count.
- Never `</script>` inside a `.js` file; never a `<video>` background inside the composition; never edit `deck.css` inside a deck (override in the page `<style>`).
- Green `check` + PNGs read = done. A slide nobody looked at is not finished.

## Files in this skill

| Path | What |
|---|---|
| `assets/template/` | deck scaffold: wrapper `index.html`, `composition/{index.html,deck.css,deck.js,assets/}`, `scripts/validate.mjs`, `package.json`, `.gitignore` |
| `assets/patterns/*.js` | `timeline` · `nested-sets` · `cycle-loop` · `tree` · `convergence` · `curve` · `chart` · `comparison-grid` (usage + fragment count in each header) |
| `references/contract.md` | deck wiring, engine attributes, foot-gun table |
| `references/visual-forms.md` | shape → form → block/pattern rubric |
| `references/authoring-rules.md` | writing, layout catalogue, motion, time arithmetic, media |
| `references/themes.md` | four themes, accent override, ambient preset, R&S notes |
| `references/validation.md` | the loop, reading findings, mandatory visual review |
| `references/branching.md` | sequences and hotspots |
| `scripts/transcribe.py` | faster-whisper → timestamped Markdown |
| `scripts/icons.mjs` | rebuild `icons.svg` from lucide-static (add icons by name) |
