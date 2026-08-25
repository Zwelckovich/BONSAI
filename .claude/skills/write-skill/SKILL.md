---
name: write-skill
description: Author or sharpen any agent-facing document the BONSAI way — a skill, a CLAUDE.md, a rules/*.md. The craft behind a predictable document — context pointers, the information hierarchy, the two loads, leading words, and no-op pruning. Skill mechanics live in rules/philosophy.md "Skill Standards", and this is the doctrine on top.
disable-model-invocation: true
argument-hint: "What should the document do — or which skill, rule, or CLAUDE.md to sharpen?"
---

# /write-skill

You are authoring or sharpening a document an agent consumes — a `SKILL.md`, a `CLAUDE.md`, a `rules/*.md`, a doc reached by a pointer. The packaging differs; the writing does not: the same levers make each one predictable. The mechanical rules for skills specifically — description-is-the-gate, `disable-model-invocation`, the command-vs-skill split, cross-skill invocation, single-file-under-200-lines, retiring skills — live in `rules/philosophy.md` "Skill Standards" and are the single source of truth. Do not restate them here. This skill is the *craft* on top of those rules.

## The one virtue: predictability

A document written for an agent exists to wrangle determinism out of a stochastic system. **Predictability** — the agent taking the same *process* every run, not producing the same output — is the root virtue; every lever below serves it. Cost and maintainability are symptoms of it, not rivals. A brainstorming skill should *predictably* diverge: its tokens vary, its behavior doesn't.

## Context pointers

A **context pointer** is a reference held in the agent's context that names out-of-context material and encodes the condition for reaching it. A skill's description is one. So is a line in `CLAUDE.md` naming a rules file, and a link from a `SKILL.md` to a sibling reference — the same object in three wrappers. The pointer's *wording*, not its target, decides when the agent reaches the material and how reliably: a must-have behind a weakly worded pointer is a variance bug, so sharpen the wording before you consider inlining.

A pointer does two jobs: say what the material is, and name the **branches** that should trigger reaching it. An always-loaded pointer costs on every turn, so it earns harder pruning than the body:

- **Front-load the leading word** — the pointer is where it does its triggering work.
- **One trigger per branch.** Synonyms renaming a single branch are one branch written twice; collapse them.
- **Cut identity the body already carries.**

## The two loads (when to split)

Every document and pointer you add spends one of two budgets, and each is the brake on the other kind of splitting:

- **context load** — always-loaded material: a model-invoked skill's description, a `CLAUDE.md` line, anything sitting in the window *every turn*, spending tokens and attention whether or not it fires. The brake on splitting into more model-invoked skills.
- **cognitive load** — the cost on *you*: which documents exist and when to reach for each. A command (user-invoked) has no description, so you are the index that must remember it exists. Not a cost to minimise — it is the price of human agency. Spend it where your judgement matters, remove it where it does not; when commands multiply past what you can hold, cure it with a router skill that *lists* the others.

Material reached only through a pointer escapes context load at the price of the pointer's own line; material with no pointer at all rides entirely on cognitive load. Cut only when the cut earns the load — the sharp version of philosophy.md's length-based split rule: length is a hint, the loads are the reason.

**Shared reference between two commands can live in neither.** With no descriptions, neither can fire the other. Push it to a plain file outside the skill system — which is exactly what `rules/*.md` is.

## Information hierarchy (what goes where)

A document's content is **steps** (ordered actions, the primary tier) and **reference** (consulted on demand). The two mix freely — all steps, all reference, or both. Rank each piece by how immediately the agent needs it:

1. **In-file step** — an action, in order.
2. **In-file reference** — a rule or fact consulted on demand. A flat peer-set (every rule on one rung) is a fine arrangement, not a smell.
3. **Disclosed reference** — pushed into a separate file reached by a **context pointer**, loaded only when the pointer fires. Spans a sibling `.md` through fully external reference any document can point at.

**Progressive disclosure** is the move down the ladder so the top stays legible — not a token optimisation but how the hierarchy is protected. The test is the **branch**: inline what every path needs; push behind a pointer what only some paths reach. Where a document has steps, in-file reference that should have been disclosed buries them and turns attending to them into a coin-flip. Then **co-locate**: keep a concept's definition, rules, and caveats under one heading so reading one part brings its neighbours. (Distinct from duplication: that repeats one meaning in two places; scattering fragments one meaning across many.)

## Completion criteria

Every step ends on a **completion criterion**, the condition that tells the agent the work is done. Two properties make it a lever:

- **Clarity** — can the agent tell done from not-done? A vague bound ("understanding reached") invites premature completion.
- **Demand** — how much it requires. "Every modified file accounted for" forces thorough work where "produce a change list" does not. Demand drives **legwork**: the digging latent in the wording rather than written as its own step.

Demand is not step-bound. "Every rule applied" binds a body of flat reference exactly as "every step done" binds a sequence — which is how an all-reference document still carries an exhaustiveness bar. The strongest criteria are both checkable and demanding.

## Leading words

A **leading word** (Leitwort) is a compact concept already in the model's pretraining that the agent thinks with while running the document — *tracer bullet*, *fog of war*, *lesson*, *tight* loop, *red*. It encodes a behavioral principle in the fewest tokens by recruiting priors the model already holds. Repeated as a token, never as a sentence, it accumulates a distributed definition.

It serves predictability twice: in the body it anchors *execution* (same word → same behavior every time, and inside flat reference it focuses attention on a class of thing to look for); in a pointer it anchors *invocation* (when the same word lives in your prompts, docs, and code, the agent links that language to the material and reaches it more reliably).

Hunt for restatements a leading word retires: "fast, deterministic, low-overhead" → a *tight* loop; "a loop you believe in" → the loop goes *red* or it doesn't. Reach for an existing word first — a coined word recruits no priors, so you pay in definition tokens what a pretrained word gives free.

## Pruning

- **Single source of truth** — each meaning lives in exactly one authoritative place, so changing the behavior is a one-place edit.
- **The environment is a source of truth too** — `pyproject.toml`, `package.json` scripts, the directory layout, `--help` output. A document restating it is a **cache**: a copy of a lookup, earning its load only when the lookup is expensive. Cache what the agent cannot find by looking — the unwritten convention, the reason behind a choice, the gotcha no config confesses. Leave the one-file, one-command lookups to the environment, where they cannot go stale.
- **Relevance** — does the line still bear on what the document does? Cut exposition and stale lines.
- **No-op hunt, sentence by sentence** — one test per sentence in isolation: *does it change behavior versus the default?* If not, delete the whole sentence — don't trim words. Be aggressive; most prose that fails should go, not be rewritten.

## Failure modes (diagnose a flaky document)

- **Premature completion** — a step ends before it's done, attention slipping to *being done*. Defence in order: sharpen the completion criterion first (cheap, local); only if it's irreducibly fuzzy *and* you observe the rush, hide the later steps by splitting across a real context boundary (an inline call leaves them in context and clears nothing).
- **Duplication** — the same meaning in more than one place. Costs maintenance and tokens, and inflates the meaning's rank on the ladder.
- **Sediment** — stale layers that settle because adding feels safe and removing feels risky. The default fate of any document without a pruning discipline.
- **Sprawl** — simply too long, even when every line is live and unique. Attention thins across the excess. Cure: the information hierarchy — disclose reference behind pointers, split by branch or sequence.
- **No-op** — a line the model obeys by default. A weak leading word (*be thorough* when the agent already is) is a no-op; the fix is a stronger word (*relentless*), not a different technique.
- **Negation** — steering by prohibition backfires: *don't think of an elephant* names the elephant and makes it *more* available, not less. Prompt the *positive* — state the target behavior so the banned one is never spoken; keep a prohibition only as a hard guardrail you can't phrase positively, and even then pair it with what to do instead.

## Workflow

1. **Pointer first** — the skill description, or the `CLAUDE.md` line that names the file. Apply the pointer rules above. (See philosophy.md "Skill Standards" for description-is-the-gate and the command-vs-skill split.)
2. **Body** — place steps and reference on the ladder; co-locate; reach for leading words; end every step on a criterion that is checkable and demanding.
3. **Prune** — no-op hunt, cache test, relevance check, single source of truth.
4. **Predictability check** — would the document drive the same process twice? If a step could go two ways, sharpen its criterion or its leading word.

## Relation to skill-creator

The `skill-creator` plugin does the mechanical work — scaffolding, evals, benchmarking, description tuning. `/write-skill` is the doctrine and the sharpening of the *content*. Low ceiling, no walls: use `skill-creator` for the scaffold, apply this doctrine to the prose.
