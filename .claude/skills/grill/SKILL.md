---
name: grill
description: >
  Adversarial grilling session that pressure-tests an existing plan one tough question at a
  time, sharpens domain terminology against a CONTEXT.md glossary, cross-checks claims against
  the code, and records crystallized decisions as ADRs. Use when the user has a plan they want
  stress-tested rather than options — "grill me", "stress test my plan", "challenge this
  approach", "pressure-test this plan".
---

# Grill

Adapted from Matt Pocock's `grill-with-docs` skill. This is the adversarial counterpart to
`/pc`: `/pc` presents options before a plan exists; `/grill` attacks a plan that already does.

<what-to-do>

Interview the user relentlessly about every aspect of this plan until you reach a shared
understanding. Walk down each branch of the design tree, resolving dependencies between
decisions one-by-one — don't jump around.

- **Do NOT present alternatives.** The user has chosen a direction; pressure-test it.
- **Ask ONE question at a time.** Wait for the answer before the next.
- **Include your recommended answer with each question** ("I think X, because Y — agree?").
  Forces the user to confirm or push back, not just brainstorm.
- **Look up *facts* in the codebase; never look up *decisions*.** If a fact can be found by reading the code, read it instead of asking. But every decision is the user's — put each one to them and wait; do not answer your own decision question from the code.
- **Stop only** when every load-bearing assumption has been surfaced.
- **Never build.** `/grill` pressure-tests a plan — it never writes code, edits source, runs a build, or hands off to a BONSAI build workflow. Not even when the plan feels "obviously ready." Implementation is a separate, explicitly user-initiated step that happens *after* this session, never inside it.
- **Close the session** as described in **After the session** below — recap the assumptions, then ask where to capture the outcome. Never slide from grilling into building.

</what-to-do>

<supporting-info>

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

## After the session — capture, don't code

`/grill` is a **pure planning phase**. When the grilling ends, stop. Do NOT start
implementing, edit source files, run anything, or invoke a BONSAI build workflow — even
if the shared understanding feels ready to code. Enacting the plan is a separate step the
user starts explicitly, later.

Close in two moves:

1. **Recap the assumptions.** Say: "These are the assumptions your plan rests on. Do they hold?"
2. **Ask where to capture the outcome** — via `AskUserQuestion`, single choice:
   - **Update `CONCEPT.md`** — write/update THE MASTER when the plan has crystallised into
     ratified project vision, requirements, or decisions.
   - **Update `IDEA.md`** — write/update the informal pre-CONCEPT brainstorm doc when the
     idea isn't ready to become THE MASTER yet. `IDEA.md` is the holding pen; it graduates
     into `CONCEPT.md` once it matures.
   - **Nothing** — leave the outcome in the conversation only.

Only after the user picks does anything get written — and even then, only `CONCEPT.md` or
`IDEA.md`, never code.

</closing>

$ARGUMENTS
