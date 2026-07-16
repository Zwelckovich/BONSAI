---
name: grill
description: >
  The central BONSAI planning skill: an adversarial grilling session that pressure-tests a
  plan one tough question at a time via AskUserQuestion pickers (recommended answer first),
  drafts a strawman approach when no plan exists yet, plans GROW.md phases, sharpens domain
  terminology against a CONTEXT.md glossary, cross-checks claims against the code, and records
  crystallized decisions as ADRs. Closes with a picker: execute the refined plan via /bonsai,
  capture it in the doc in play, or leave it in the conversation. Use for any planning ask —
  "grill me", "pressure-test this plan", "help me plan", "plan this feature", "how should I
  approach", "plan phase N", "fix bug X" when the user wants a plan first.
---

# Grill

Adapted from Matt Pocock's `grill-with-docs` skill. The central BONSAI planning skill: it
attacks a plan — given, found in a doc, or strawman-drafted — until every load-bearing
decision is confirmed, then routes the outcome (execute, capture, or nothing).

<what-to-do>

Interview the user relentlessly about every aspect of this plan until you reach a shared
understanding. Walk down each branch of the design tree, resolving dependencies between
decisions one-by-one — don't jump around.

- **Start from what you're given** — a plan, a doc, a GROW.md phase, or a bare task. See
  **Entry modes** below for how each session begins.
- **Do NOT present alternatives.** One direction is on the table — given by the user or
  drafted as the strawman; pressure-test it. Alternatives surface per-decision, as the
  non-recommended choices in each picker — never as upfront option menus.
- **Ask ONE question at a time.** Wait for the answer before the next.
- **Ask via `AskUserQuestion`.** Every question goes through the picker, with your
  recommended answer FIRST, labeled "(Recommended)" and carrying the reason in its
  description. A plain-text question is allowed ONLY when the answer is genuinely
  open-ended and predefined options would be fabricated (e.g. "what is the existing data
  shape?").
- **Look up *facts* in the codebase; never look up *decisions*.** If a fact can be found by reading the code, read it instead of asking. But every decision is the user's — put each one to them and wait; do not answer your own decision question from the code.
- **Stop only** when every load-bearing assumption has been surfaced.
- **Never build during grilling.** While the session runs, don't write code, edit source,
  run a build, or start a build workflow — even when the plan feels "obviously ready."
  Execution happens only when the user picks it in the closing picker (see **After the
  session** below).
- **Close the session** as described in **After the session** below — recap the assumptions,
  then ask what happens next. Never slide from grilling into building on your own judgment.

</what-to-do>

<supporting-info>

## Entry modes

- **A plan or doc** (`/grill @IDEA.md`, `/grill @CONCEPT.md`, a pasted plan) — grill it
  directly.
- **A GROW.md phase** (`/grill Phase 4`) — "Phase N" almost always means GROW.md: read it,
  find phase N (or the next incomplete phase if no number given), and grill that phase's
  plan against its Goal, Deliverable, and acceptance criteria.
- **A bare task, no plan yet** (`/grill Fix bug xyz`) — explore the code first, draft ONE
  recommended approach as a strawman, then grill its load-bearing decisions one at a time.

## What to attack

Beyond domain modelling (below), pressure-test: hidden assumptions, failure modes, scope
creep, tech-debt risk, YAGNI violations, and conflicts with `CONCEPT.md`.

## CONCEPT.md is THE MASTER

BONSAI doc hierarchy — respect it during grilling:

- **`CONCEPT.md`** — project vision, requirements, and decisions. It wins **every** conflict.
- **`CONTEXT.md`** — a subordinate glossary: terminology only. No vision, no decisions, no
  implementation details. Never treat it as a spec or scratch pad.
- **ADRs** (`docs/adr/`) — record individual decisions, but defer to `CONCEPT.md`.

If a resolved term or decision contradicts `CONCEPT.md`, surface the conflict and ask whether
to update `CONCEPT.md` — don't silently diverge from THE MASTER.

## Domain awareness

During codebase exploration, also look for existing documentation.

### File structure

Most repos have a single context:

```
/
├── CONCEPT.md          ← THE MASTER (vision/requirements/decisions)
├── CONTEXT.md          ← subordinate glossary (terms only)
├── docs/
│   └── adr/
│       ├── 0001-event-sourced-orders.md
│       └── 0002-postgres-for-write-model.md
└── src/
```

If a `CONTEXT-MAP.md` exists at the root, the repo has multiple contexts. The map points to
where each one lives:

```
/
├── CONTEXT-MAP.md
├── docs/
│   └── adr/                          ← system-wide decisions
├── src/
│   ├── ordering/
│   │   ├── CONTEXT.md
│   │   └── docs/adr/                 ← context-specific decisions
│   └── billing/
│       ├── CONTEXT.md
│       └── docs/adr/
```

Create files lazily — only when you have something to write. If no `CONTEXT.md` exists,
create one when the first term is resolved. If no `docs/adr/` exists, create it when the
first ADR is needed.

## During the session

### Challenge against the glossary

When the user uses a term that conflicts with the existing language in `CONTEXT.md`, call it
out immediately. "Your glossary defines 'cancellation' as X, but you seem to mean Y — which?"

### Sharpen fuzzy language

When the user uses vague or overloaded terms, propose a precise canonical term. "You're
saying 'account' — do you mean the Customer or the User? Those are different things."

### Discuss concrete scenarios

When domain relationships are being discussed, stress-test them with specific scenarios.
Invent scenarios that probe edge cases and force the user to be precise about the boundaries
between concepts.

### Cross-reference with code

When the user states how something works, check whether the code agrees. If you find a
contradiction, surface it: "Your code cancels entire Orders, but you just said partial
cancellation is possible — which is right?"

### Update CONTEXT.md inline

When a term is resolved, update `CONTEXT.md` right there. Don't batch these up — capture them
as they happen. Use the format in [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md). `CONTEXT.md` is a
glossary and nothing else: record only the resolved term and its `_Avoid_` aliases.
Relationship reasoning and ambiguity resolutions stay in the conversation — if one is
hard-to-reverse and surprising, capture it as an ADR instead.

### Offer ADRs sparingly

Only offer to create an ADR when all three are true:

1. **Hard to reverse** — the cost of changing your mind later is meaningful
2. **Surprising without context** — a future reader will wonder "why did they do it this way?"
3. **The result of a real trade-off** — there were genuine alternatives and you picked one for specific reasons

If any of the three is missing, skip the ADR. Use the format in [ADR-FORMAT.md](./ADR-FORMAT.md).

</supporting-info>

<closing>

## After the session — recap, then route

When the grilling ends, close in two moves:

1. **Recap the assumptions.** Say: "These are the assumptions your plan rests on. Do they hold?"
2. **Ask what happens next** — via `AskUserQuestion`, single choice, in this fixed order:

   1. **Execute via `/bonsai`** — invoke the `/bonsai` skill in this session, passing the
      full refined plan as args. Suggest `--tdd` in the option description when the plan is
      test-shaped (testable behaviors, a bug with a reproducible symptom). Execution writes
      no planning doc — with one exception: when the grilled subject is a **GROW.md phase**,
      first write the refined plan into that phase's section, then invoke `/bonsai`, and
      after it finishes mark the phase ✅ COMPLETED in GROW.md with the verified run command.
   2. **Update the doc in play** — capture the refined plan without building. The target is
      context-sensitive: the doc the user referenced (`@IDEA.md` → `IDEA.md`, `@GROW.md` or
      "Phase N" → `GROW.md`, `@CONCEPT.md` → `CONCEPT.md`); when none was referenced, infer
      from what the session touched (`CONCEPT.md` if project-level decisions crystallised,
      `IDEA.md` if it was pre-CONCEPT brainstorming). **Drop this option entirely when
      nothing fits** — never invent a doc for a routine fix.
   3. **Nothing** — leave the outcome in the conversation only.

Until the user picks, nothing is written and nothing is built. The picker is the only door
to implementation: the user picking "Execute via `/bonsai`" IS the explicit go — honor it
in this session. Any other pick stays plan-only.

</closing>

$ARGUMENTS
