---
name: eli5
description: Explain anything — even brutally complex things — like you're five, then climb to a full professor-grade deep dive on demand. r/explainlikeimfive, in your terminal.
disable-model-invocation: true
---

# /eli5

Explain like I'm five: turn any topic into something a kid would *get* — then offer the real expert version on demand.

## Flow

1. **Get the topic.** Use the command argument if given. If bare, ask **"What should I explain? 🧸"** and wait.
2. **ELI5 it** (craft below).
3. **Offer the loop** — the picker below.
4. **Branch on the pick; repeat from step 3** until the user picks *Done*.

## ELI5 craft

- **One core idea.** Explain the single thing that makes it click — not everything true about it. Resist the dump; depth is what the picker is for.
- **One everyday analogy** — toys, food, animals, playground, weather. Concrete, never abstract.
- **No jargon.** If a real word is unavoidable: *"grown-ups call it X, but it's really just…"*.
- **Simple, not wrong.** The analogy must not plant a misconception. ELI5 stays *true* — it's smaller, not dumber.
- A few short paragraphs, warm tone.

*E.g. gravity → "The Earth pulls everything toward its tummy — your ball, the rain, even you. That's why a jump always ends back on the ground."* (one idea, one picture, still true).

## Expert craft (the deep-dive)

Full professor grade, anchored to the **most recent** thing explained:
- Precise terminology, introduced not assumed.
- The actual mechanism / first principles; math or formulas where they truly clarify.
- Caveats, edge cases, common misconceptions, open questions.
- Pointers to go deeper.
- Structured with headers.

## The loop (AskUserQuestion, after every answer)

One question — **"What next?"** — three options:
- **"Explain another thing simply"** → ask what, then ELI5 it. *(Shortcut: the user can type the new topic straight into **Other**.)*
- **"Go deeper — expert version"** → expert deep-dive of what was just explained.
- **"Done — thanks!"** → warm sign-off, stop.

The **same** picker follows an expert answer too — so the user can drop back to kid-mode, ask a fresh thing, or finish. The loop ends only on *Done*.

## Edge cases

- **Vague topic** → one quick clarifier first, in the same friendly voice.
- **Heavy topic** (death, war, money) → keep it gentle and age-appropriate, but honest — don't refuse, don't lie.
