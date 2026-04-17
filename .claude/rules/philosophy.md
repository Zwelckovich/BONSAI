# BONSAI Development Philosophy

You are guided by BONSAI principles — minimal, purposeful software development where every addition must be justified by actual need.

## Core Principles

### Minimalism First
- **Start with nothing** — Add only when necessity demands
- **Question every addition** — "Does this solve an actual problem?"
- **Prefer deletion over addition** — Remove before adding
- **Single-file solutions** — Stay in one file until complexity forces a split
- **No premature abstraction** — Concrete first, abstract when patterns emerge

### Purposeful Growth
- **Evidence-based decisions** — Every tool, file, and line must justify its existence
- **Progressive enhancement** — Start simple, evolve only when needed
- **Feature-driven structure** — Organize by purpose, not by type
- **YAGNI enforcement** — You Aren't Gonna Need It until you actually do

### Systematic Verification
- **Adaptive workflow** — Use `/bonsai` skill for structured development (Grow/Shape/Prune modes)
- **Continuous validation** — Test assumptions at every step
- **Evidence over intuition** — Show proof, not predictions
- **Concept alignment** — Always check against concept.md (THE MASTER)
- **Verify-first for bugs** — Reproduce the bug in a test first, then fix. The test proves the bug existed and is gone.
- **Goal-driven criteria** — Transform vague requests ("add validation") into measurable criteria ("write tests for invalid inputs, make them pass"). Weak criteria force handholding; strong criteria enable autonomous iteration.

## Decision Framework

When facing any decision, ask in order:
1. **Avoid** — Can we skip this entirely? The best code is no code.
2. **Remove** — Can we delete something instead of adding?
3. **Reuse** — Can we use what already exists?
4. **Minimize** — What's the absolute minimum addition needed?

## Surgical Behavior

Default behavior for every change — not an opt-in workflow:

- **Surface assumptions** — Before coding, name any ambiguity. Present 2–3 interpretations with effort estimates when the request is unclear. Never guess silently.
- **Diff traceability** — Every changed line must trace back to the explicit request. No drive-by refactoring, no style normalization, no cleaning code you didn't break.
- **Style preservation** — Match the existing code style (quotes, spacing, docstring usage, type-hint consistency) even if you'd write it differently. Exception: explicit refactor request.
- **Clean only your own mess** — Remove only what your change orphaned. Nothing more, nothing less.

## Anti-Patterns to Avoid

- Creating empty directories — Folders only when files exist
- Adding "might need" dependencies — Add only when actively using
- Complex configurations — Start with defaults, customize when proven necessary
- Premature optimization — Make it work, profile, THEN optimize if needed
- Framework religion — Use the simplest tool that works

## concept.md is THE MASTER

- If conflict between any guideline and concept.md, **follow concept.md**
- concept.md defines project vision, requirements, and decisions
- All changes must align with concept.md goals
- Abort if a change is misaligned with concept.md

## Default Behavior

Normal Claude Code behavior is the default for all interactions. The `/bonsai` workflow is invoked explicitly when structured development is needed. BONSAI philosophy guides your thinking at all times, but does not impose rigid workflow on every response.

## Quality Standards

- **Works first** — Functional before optimal
- **Readable always** — Clarity over cleverness
- **Tested naturally** — Tests that make sense, not for coverage
- **Formatted consistently** — Use ruff/biome with minimal config

## Documentation Hierarchy

- **README.md** — For end users only
- **concept.md** — For project vision and decisions
- **CLAUDE.local.md** — For environment-specific learnings
- **Code is self-documenting** — Clear names over comments
