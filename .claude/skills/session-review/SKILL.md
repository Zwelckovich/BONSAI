---
name: session-review
description: >
  Post-session retrospective that audits the current conversation for failures,
  wasted round-trips, and missed guidance. Traces each failure to a specific rule,
  skill, or agent that should have prevented it. Produces a SESSION_REVIEW.md report
  with root cause analysis and concrete improvement recommendations. Displays the
  report directly in the conversation, then asks the user if they want to apply
  the fixes. Use this skill whenever the user
  asks "what went wrong", "session review", "retro", "retrospective", "review the
  session", "analyze failures", or wants to understand why mistakes happened during
  a development session. Also use when the user asks what rules or skills need
  improving after a session.
disable-model-invocation: true
---

# Session Retrospective Analysis

Audit the current conversation for failures and trace them back to gaps in rules, skills, and agents. The report is displayed directly in the conversation — no files are written during analysis. After presenting the report, ask the user if they want to apply the recommended fixes.

The goal is to produce actionable intelligence: not just "what went wrong" but "what specific file on line N should say what to prevent this next time."

## Why This Matters

Every failure in a BONSAI session is a signal that the guidance system has a gap. A tool rejection means a skill didn't warn about a prerequisite. A crashed command means a rule didn't document a platform caveat. A forgotten import means the workflow didn't include an early check. By systematically tracing failures to their root cause in the guidance files, we turn one-off mistakes into permanent improvements.

## Process

### 1. Scan the Conversation

Walk through the entire conversation chronologically and identify every instance of:

**Hard failures** (tool rejected, command crashed, wrong output):
- Tool use rejections (e.g., Write before Read, permission denied)
- Commands that returned non-zero exit codes or tracebacks
- Outputs that were incorrect and required a fix-and-retry

**Soft failures** (inefficiency, wrong order, forgotten steps):
- Things done in the wrong order that caused rework
- Missing imports, missing dependencies, or missing configuration discovered late
- Unnecessary operations (e.g., adding a dep that was already installed)
- Workarounds needed because the direct approach didn't work

**Workflow failures** (skill/rule gaps):
- Times when a skill's instructions conflicted with the environment (e.g., plan mode conflicts)
- Times when guidance was missing and the agent had to improvise
- Times when a rule existed but wasn't specific enough to prevent the issue

For each failure, record:
- **What happened**: The exact error or wasted action
- **Where**: Which BONSAI task number (if in `/bonsai` workflow) or which skill step
- **Round-trips wasted**: How many tool calls were spent on the failure + fix (1 = caught immediately, 2+ = required retries)

### 2. Read the Guidance Files

Read all rules, skills, and agent definitions to understand what guidance currently exists:

- `.claude/rules/*.md` — All rule files
- `.claude/skills/*/SKILL.md` — All skill files (just the ones that were used or relevant to the session)
- `.claude/agents/*.md` — All agent definitions

For each failure from Step 1, search these files for guidance that should have prevented it. Note whether:
- **No guidance exists** — The rule/skill simply doesn't cover this case
- **Guidance exists but is insufficient** — The rule mentions the topic but not specifically enough
- **Guidance exists but was ignored** — The instructions are clear but weren't followed (this points to a clarity or emphasis problem)

### 3. Classify Severity

Rate each failure by how much waste it caused:

| Severity | Criteria |
|----------|----------|
| **HIGH** | 3+ wasted round-trips, or caused a cascade of follow-up errors, or required a fundamental approach change |
| **MEDIUM** | 2 wasted round-trips, or required a workaround that added complexity |
| **LOW** | 1 wasted round-trip, caught and fixed quickly with no cascade |

### 4. Draft Improvements

For each failure, write a specific improvement recommendation:
- **Which file** to edit (exact path)
- **What to add or change** (before/after, or new content to insert)
- **Where in the file** (after which section or line)
- **Why this prevents the failure** (the causal link)

Good recommendations are minimal and targeted — don't rewrite an entire skill to fix one gap. Add the smallest change that would have prevented the failure.

### 5. Calculate Session Score

Count the total number of tool calls in the session and the number that were wasted on failures. The session efficiency score is:

```
Score = (total_tool_calls - wasted_tool_calls) / total_tool_calls × 100%
```

Also provide a qualitative rating:
- **95-100%**: Excellent — guidance system is working well
- **85-94%**: Good — minor gaps to address
- **70-84%**: Fair — several gaps need attention
- **Below 70%**: Needs work — significant guidance gaps

## Output Format

Display the report directly in the conversation as markdown. Do NOT write it to a file. Use this exact structure:

```markdown
# Session Review — [date]

## Session Summary
- **Workflow**: [which skills/modes were used]
- **Deliverables**: [what was built]
- **Total tool calls**: [count]
- **Wasted round-trips**: [count]
- **Session score**: [percentage] — [rating]

## Failure Log

### [#1] [Short failure title]
- **Severity**: HIGH / MEDIUM / LOW
- **Task**: [BONSAI task # or skill step]
- **What happened**: [description]
- **Round-trips wasted**: [count]
- **Root cause**: [which file should have prevented this]
  - File: `[path]`
  - Gap: [no guidance / insufficient / unclear]
  - Current content: [quote the relevant section, or "none"]

### [#2] [Next failure]
...

## Improvement Recommendations

### [Rec #1] [file path]
- **Fixes failure(s)**: #1, #3
- **Change type**: Add / Modify / Clarify
- **Location**: [section or after which line]
- **Before**: [current text, or "N/A" if adding new]
- **After**: [proposed text]
- **Why**: [how this prevents the failure]

### [Rec #2] [next file]
...

## Patterns

[Optional section — if multiple failures share a common theme, call it out. For example: "3 of 5 failures were caused by missing platform-specific caveats in tools.md" or "The /bonsai skill doesn't enforce lint-after-write, causing late error detection in 2 cases."]

## What Went Well

[List 2-3 things that worked smoothly — this helps identify which guidance is effective and should be preserved.]
```

## After the Report

Once the report is displayed, ask the user:

> "Want me to apply these fixes? I can update the referenced files now, or you can cherry-pick which recommendations to apply."

If the user says yes (or picks specific recommendations):
1. Read each target file
2. Apply the recommended edits using the Edit tool
3. Show a summary of what was changed

If the user says no, do nothing — the report stands on its own as documentation.

## Constraints

- Do NOT write report files. Display everything in the conversation.
- Base the analysis on what actually happened in the conversation — don't speculate about hypothetical failures.
- If a failure was caused by a genuine bug (e.g., a library crash) rather than a guidance gap, note it but don't recommend a guidance change — recommend documenting the workaround instead.
- Keep recommendations minimal and targeted. One surgical edit per failure, not a rewrite.
- When the user has the BONSAI source repo at a different path than the project (e.g., the project uses copied skills from a central repo), ask which location to apply fixes to.

$ARGUMENTS
