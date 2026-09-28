# Branching (only on explicit request)

Decks are linear by default. Use a branch when the user asks for a backup path — "if they ask about the method, I want to jump into the maths and come back".

## Island

```json
{
  "slides": [
    { "sceneId": "market", "notes": "…",
      "hotspots": [ { "id": "h-method", "label": "How was this sized?", "target": "method",
                      "region": { "x": 55, "y": 60, "w": 40, "h": 25 } } ] }
  ],
  "slideSequences": [
    { "id": "method", "label": "Sizing method",
      "slides": [ { "sceneId": "method-1", "notes": "…" }, { "sceneId": "method-2", "notes": "…", "fragments": [92.3] } ] }
  ]
}
```

- Branch scenes are ordinary `.scene-frame` sections placed **after** the main line in time (next free 10 s slots) and listed **only** under `slideSequences`, never in `slides`.
- `region` is a percentage box on the slide; the player draws a pulsing pill with the label there. Clicking pushes the sequence; `Backspace` at its start (or finishing it) returns to the parent slide. The counter is scoped to the branch; a breadcrumb shows `Main deck › Sizing method › 2`.
- Copy the island to the wrapper as always. `validate.mjs` includes branch scenes in the hold times.

## Rules

- One hotspot per slide, two branches per deck at most. More than that is a website, not a talk.
- A branch must return the presenter to the exact slide they left with nothing changed — do not put the deck's conclusion inside a branch.
- Keep branch slides shorter and plainer than main-line slides (they are answers, not acts).
