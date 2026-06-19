---
name: write-skill
description: Author or sharpen a Claude Code skill the BONSAI way — the craft behind a predictable skill: leading words, the information hierarchy, the two loads, and no-op pruning. Mechanics live in rules/philosophy.md "Skill Standards"; this is the doctrine on top.
disable-model-invocation: true
argument-hint: "What should the skill do — or which skill to sharpen?"
---

# /write-skill

You are authoring a new skill or sharpening an existing one. The mechanical rules — description-is-the-gate, `disable-model-invocation`, the command-vs-skill split, single-file-under-200-lines, retiring skills — live in `rules/philosophy.md` "Skill Standards" and are the single source of truth. Do not restate them here. This skill is the *craft* on top of those rules.

## The one virtue: predictability

A skill exists to wrangle determinism out of a stochastic system. **Predictability** — the agent taking the same *process* every run, not producing the same output — is the root virtue; every lever below serves it. Cost and maintainability are symptoms of it, not rivals. A brainstorming skill should *predictably* diverge: its tokens vary, its behavior doesn't.

## The two loads (when to split)

Every skill you cut spends one of two costs, and each is the brake on the other kind of splitting:

- **context load** — a model-invoked skill's description sits in the window *every turn*. The brake on splitting into more model-invoked skills.
- **cognitive load** — a command (user-invoked) has no description, so *you* are the index that must remember it exists. The brake on splitting into more commands; cured, when commands multiply, by a router skill that *lists* the others so you no longer have to remember they exist.

Cut only when the cut earns the load. This is the sharp version of philosophy.md's length-based split rule: length is a hint, the loads are the reason.

## Information hierarchy (what goes where)

A skill's content is **steps** (ordered actions, the primary tier) and **reference** (consulted on demand), ranked by how immediately the agent needs each:

1. **In-skill step** — an action in `SKILL.md`, in order. Each ends on a **completion criterion**: a *checkable* condition (can the agent tell done from not-done?), and where it matters an *exhaustive* one ("every modified file accounted for", not "produce a list"). A vague criterion invites premature completion.
2. **In-skill reference** — a rule or fact in `SKILL.md`, consulted on demand. A flat peer-set (every rule on one rung) is a fine arrangement, not a smell.
3. **External reference** — pushed into a sibling `.md` reached by a **context pointer**, loaded only when the pointer fires.

**Progressive disclosure** is the move down the ladder so the top stays legible. The test is the **branch**: inline what every path through the skill needs; push behind a pointer what only some paths reach. A pointer's *wording*, not its target, decides how reliably the agent reaches the material — a must-have behind a weak pointer is a variance bug, so sharpen the wording before inlining. Then **co-locate**: keep a concept's definition, rules, and caveats under one heading so reading one part brings its neighbours.

## Leading words

A **leading word** (Leitwort) is a compact concept already in the model's pretraining that the agent thinks with while running the skill — *tracer bullet*, *fog of war*, *lesson*, *tight* loop, *red*. It encodes a behavioral principle in the fewest tokens by recruiting priors the model already holds. Repeated as a token, never as a sentence, it accumulates a distributed definition.

It serves predictability twice: in the body it anchors *execution* (same word → same behavior every time); in the description it anchors *invocation* (when the same word lives in your prompts, docs, and code, the agent links that language to the skill and fires it more reliably).

Hunt for restatements a leading word retires: "fast, deterministic, low-overhead" → a *tight* loop; "a loop you believe in" → the loop goes *red* or it doesn't. Reach for an existing word first — a coined word recruits no priors, so you pay in definition tokens what a pretrained word gives free.

## Pruning

- **Single source of truth** — each meaning lives in exactly one authoritative place, so changing the behavior is a one-place edit.
- **Relevance** — does the line still bear on what the skill does? Cut exposition and stale lines.
- **No-op hunt, sentence by sentence** — run one test on each sentence in isolation: *does it change behavior versus the default?* If not, delete the whole sentence — don't trim words. Be aggressive; most prose that fails should go, not be rewritten.

## Failure modes (diagnose a flaky skill)

- **Premature completion** — a step ends before it's done, attention slipping to *being done*. Defence in order: sharpen the completion criterion first (cheap, local); only if it's irreducibly fuzzy *and* you observe the rush, hide the later steps by splitting across a real context boundary (an inline call leaves them in context and clears nothing).
- **Duplication** — the same meaning in more than one place. Costs maintenance and tokens, and inflates the meaning's rank on the ladder.
- **Sediment** — stale layers that settle because adding feels safe and removing feels risky. The default fate of any skill without a pruning discipline.
- **Sprawl** — simply too long, even when every line is live. Cure: the information hierarchy — disclose reference behind pointers, split by branch or sequence.
- **No-op** — a line the model obeys by default. A weak leading word (*be thorough* when the agent already is) is a no-op; the fix is a stronger word (*relentless*), not a different technique.

## Workflow

1. **Description first** — front-load the leading word; one trigger per branch (collapse synonyms — they're duplication); cut identity already in the body. (See philosophy.md "Skill Standards" for the description-is-the-gate and command-vs-skill rules.)
2. **Body** — place steps and reference on the ladder; co-locate; reach for leading words.
3. **Prune** — no-op hunt, relevance check, single source of truth.
4. **Predictability check** — would the skill take the same process twice? If a step could go two ways, sharpen its criterion or its leading word.

## Relation to skill-creator

The `skill-creator` plugin does the mechanical work — scaffolding, evals, benchmarking, description tuning. `/write-skill` is the doctrine and the sharpening of the *content*. Low ceiling, no walls: use `skill-creator` for the scaffold, apply this doctrine to the prose.
