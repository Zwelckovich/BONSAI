---
name: session-review
description: Post-session retrospective — audit the session for failures and environment gaps, trace each to the rule or skill that should have prevented it, and offer to apply the fixes.
disable-model-invocation: true
---

# Session Retrospective Analysis

Audit the session for failures **and** for environment gaps, then trace each finding to the guidance file that should have prevented it. The report is displayed in the conversation — no files are written during analysis. After presenting it, ask the user whether to apply the fixes.

The goal is actionable intelligence: not "what went wrong" but "what specific file should say what, to prevent this next time."

Every failure is a signal that the guidance system has a gap. A tool rejection means a skill didn't warn about a prerequisite. A crashed command means a rule didn't document a platform caveat. But a session with **no** failures is not a session with nothing to learn — Step 2 exists because the expensive problems are usually the quiet ones.

## Process

### 1. Scan the conversation for failures

Walk the session chronologically and identify every instance of:

**Hard failures** — tool use rejections (Write before Read, permission denied), commands returning non-zero or a traceback, outputs that were wrong and needed a fix-and-retry.

**Soft failures** — work done in the wrong order that caused rework; missing imports, dependencies, or configuration discovered late; unnecessary operations (adding a dep already installed); workarounds needed because the direct approach didn't work.

**Workflow failures** — a skill's instructions conflicting with the environment; guidance missing so the agent improvised; a rule that existed but wasn't specific enough.

For each: **what happened** (the exact error or wasted action), **where** (BONSAI task number or skill step), and **round-trips wasted** (1 = caught immediately, 2+ = required retries).

### 2. Scan the environment for gaps

These fire whether or not the session had failures. Work every category, and say so explicitly where one is clean — a category silently skipped is indistinguishable from a category with nothing in it.

- **Navigation** — how hard was it to find the right files? Hidden dependencies between files? Would a navigation pointer in `CLAUDE.md` or a rules file have helped? *Fires when the session spent many tool calls locating information.*
- **Tool economy** — expensive or token-inefficient tool calls. A custom CLI or MCP that returns far more than the agent needed, a command run repeatedly that could be one script. *Fires when a single call dominated the token spend.*
- **No-ops** — instructions in rules or skills that don't change behavior versus the model's default. They pay context load to say nothing. *Fires when steering files are large.*
- **Information access** — a crucial fact the agent never had access to: dev-server logs not teed to a file, read-only access to a service, a config the agent had to guess at. *Fires when the agent worked around missing information rather than reading it.*
- **Automated checks** — could a linter, type check, test, or hook have caught a mistake the agent made? *Fires when a failure in Step 1 was mechanically detectable.*

### 3. Read the guidance files

Read what guidance currently exists: `.claude/rules/*.md`, the `.claude/skills/*/SKILL.md` files used or relevant to the session, and `.claude/agents/*.md`.

For each finding from Steps 1 and 2, search these for the guidance that should have prevented it, and classify the gap:

- **No guidance exists** — the rule or skill doesn't cover this case.
- **Guidance exists but is insufficient** — it mentions the topic, not specifically enough.
- **Guidance exists but was ignored** — the instructions are clear but weren't followed. This is a clarity or emphasis problem, not a coverage one.

### 4. Classify severity

| Severity | Criteria |
|----------|----------|
| **HIGH** | 3+ wasted round-trips, caused a cascade of follow-up errors, or forced a fundamental approach change |
| **MEDIUM** | 2 wasted round-trips, or a workaround that added lasting complexity |
| **LOW** | 1 wasted round-trip, caught and fixed with no cascade |

Environment-gap findings carry no round-trips. Rate them by what they cost *per future session*: HIGH for a gap that will recur every session, LOW for a one-off.

### 5. Draft improvements

For each finding write a recommendation naming: **which file** (exact path), **what to add or change** (before/after, or the new content), **where in the file** (after which section), and **why this prevents it** (the causal link).

Recommendations are minimal and targeted — the smallest change that would have prevented the finding, never a rewrite of a whole skill to fix one gap.

**Done when** every finding from Steps 1 and 2 is traced to a named file or explicitly marked "no guidance gap — genuine bug", and every Step 2 category is reported, including the clean ones.

## Report

Display the report in the conversation as markdown. Do NOT write it to a file. It carries, in this order:

1. **Session summary** — which skills and modes ran, what was built, total tool calls, round-trips wasted.
2. **Failure log** — one entry per Step 1 finding: title, severity, task/step, what happened, round-trips wasted, and the root cause (file path, gap type, the current content quoted or "none").
3. **Environment gaps** — one entry per Step 2 finding, same shape minus round-trips. Name every category, including the ones that came back clean.
4. **Recommendations** — one per target file, listing which findings it fixes, change type (add/modify/clarify), location, before/after, and why.
5. **Patterns** — only where several findings share a theme worth naming ("3 of 5 failures were missing platform caveats in `tools.md`").
6. **What went well** — 2-3 things that worked, so effective guidance is preserved rather than pruned by accident.

## After the report

Ask: "Want me to apply these fixes? I can update the referenced files now, or you can cherry-pick which recommendations to apply."

If yes (or a subset is picked): read each target file, apply the edits, and show a summary of what changed. If no, the report stands on its own.

## Constraints

- Base the analysis on what actually happened in the session — findings come from the trace, not from speculation about hypothetical failures.
- Where a failure was a genuine bug (a library crash) rather than a guidance gap, note it and recommend documenting the workaround instead of changing a rule.
- When the user's BONSAI source repo is at a different path than the project (the project uses copied skills from a central repo), ask which location to apply fixes to.

$ARGUMENTS
