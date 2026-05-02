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

## Bug Discovery Protocol

When facing a hard bug or performance regression, build a feedback loop *before* hypothesizing. The discipline:

**Phase 0 — Build a feedback loop. This is the skill.**

If you have a fast, deterministic, agent-runnable pass/fail signal for the bug, you will find the cause — bisection, hypothesis-testing, and instrumentation all just consume that signal. If you don't have one, no amount of staring at code will save you.

Ten ways to construct a loop, in roughly priority order:

1. **Failing test** at any seam (unit, integration, e2e) that reaches the bug.
2. **Curl / HTTP script** against a running dev server.
3. **CLI invocation** with fixture input, diffing stdout against a known-good snapshot.
4. **Headless browser** (Playwright/Puppeteer) — drives UI, asserts on DOM/console/network.
5. **Replay a captured trace** — save a real network request/payload/event log, replay through the code path.
6. **Throwaway harness** — minimal subset of the system (one service, mocked deps) exercising the bug code path with one function call.
7. **Property/fuzz loop** — for "sometimes wrong output" bugs, run many random inputs and watch for the failure mode.
8. **Bisection harness** — automate "boot at state X, check, repeat" for `git bisect run`.
9. **Differential loop** — same input through old vs. new (or two configs), diff outputs.
10. **HITL bash script** — last resort if a human must click; structure the loop with a template script so captured output feeds back.

**Iterate on the loop itself.** A 30-second flaky loop is barely better than no loop. A 2-second deterministic loop is a debugging superpower. Make it faster (cache setup, narrow scope), sharper (assert specific symptoms, not "didn't crash"), more deterministic (pin time, seed RNG, isolate filesystem).

**Non-deterministic bugs.** Don't aim for clean repro — raise the reproduction rate. A 50%-flake bug is debuggable; 1% is not. Loop the trigger many times, parallelize, add stress, narrow timing windows.

**When you genuinely cannot build a loop**, stop and say so explicitly. List what you tried. Ask the user for environment access, captured artifacts, or permission to add temporary instrumentation. Do **not** proceed to hypothesise without a loop.

Only after the loop exists: rank 3-5 falsifiable hypotheses *before* instrumenting, write the regression test *before* the fix, and remove probes/temp logs after the fix lands.

## Wrapping complex systems (DSLs and ergonomic shells)

When the underlying tool is too complex for direct daily use — verbose API, multi-step rituals, GUI-only workflows, brittle command sequences — wrap it in a thinner, opinionated layer **without removing the user's ability to drop down to the raw tool when needed**.

The pattern: **low ceiling, no walls**.
- **Low ceiling** — common operations should be 1-3 lines of code (or one button click). The 80% case is fast.
- **No walls** — every wrapper exposes its underlying handles. The user can always reach the original API when the wrapper doesn't cover a niche case.

Concrete shape for a Python DSL wrapper:
- A small set of verbs covering 80% of daily tasks (`connect`, `do_thing`, `get_result`).
- An escape-hatch accessor that returns the raw underlying objects (`session()`, `.client`, `.handle`).
- Module-internal handles exposed (underscore-prefixed but reachable: `_db`, `_client`, `_state`) so tests can mock and advanced users can patch.
- Implicit session state when it matches the user's mental model (matplotlib's `pyplot` is the canonical example: `plt.plot()` "knows" the current figure).
- Logging on every user-visible action so the user sees what the wrapper did on their behalf — no "magic" they can't trace.

Concrete shape for a GUI / TUI:
- One primary action prominently surfaced; everything else accessible via menus or keyboard.
- Never hide options — collapse them, but keep them reachable.
- A "drop to terminal/script" path so power users can automate.

The hardest part is the second clause. It's tempting to hide complexity entirely; resist. A wrapper that locks the user out of the underlying tool is worse than no wrapper, because they hit a wall the moment they outgrow your verbs. **Wrap, don't replace.**

When to apply: any time the user describes a tool as "too painful to use directly," "I keep forgetting the steps," or "I need to write the same boilerplate every time." When NOT to apply: tools the user invokes once a quarter — wrappers cost maintenance, and a one-off script in their notebook is cheaper than a permanent abstraction.

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

## Skill Standards

Skills (`~/.claude/skills/<name>/SKILL.md`) are user-defined workflows that the agent loads on demand. The trigger mechanism is simple but unforgiving:

### Description is the gate

The `description` field in the YAML frontmatter is the **only** content the agent reads when deciding whether to load a skill. Everything else in SKILL.md is invisible at trigger time.

Rules for descriptions:
- Under 1024 characters
- Third-person ("Execute the...", "Answer questions...", "Run the...")
- First sentence: what the skill does
- Second sentence: `Use when [specific trigger phrases or conditions]`
- 2-4 concrete trigger phrases
- Distinct enough to separate from similar skills (e.g., `/pc` vs. `/grow-plan`)

### `disable-model-invocation: true` for explicit-only skills

Add this YAML flag to skills that should *never* auto-trigger via description match — only when the user explicitly invokes them. Use for:
- Heavy operations (transformations, audits, pushes)
- Setup/init commands (run rarely, deliberately)
- Workflow entry points where accidental invocation is costly

Skills that *should* auto-trigger (e.g., `/qa` on questions, `/pycheck` after Python edits) leave the flag off.

### Skill structure

- **Single file** under ~200 lines: keep everything in `SKILL.md`.
- **Over 200 lines**: split into `SKILL.md` (main) + thematic `*.md` references (`tests.md`, `mocking.md`, `examples.md`). `SKILL.md` links to them.
- **Deterministic operations** (hooks, generators, repeated commands): bundle as a script in `scripts/` next to `SKILL.md`, not as an inline Markdown block. The skill calls the script.

### Deprecated skills

When a skill is no longer used, move it to `~/.claude/skills/deprecated/<name>/` rather than deleting. Keeps history visible, allows reactivation, and signals intent during audits. Categorization into subdirectories (engineering/, productivity/, etc.) only becomes useful past ~20 skills.
