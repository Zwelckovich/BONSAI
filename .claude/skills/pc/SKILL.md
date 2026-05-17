---
name: pc
description: >
  Interactive planning and clarification: after a few clarifying questions, presents 2-3
  approach options with trade-offs as a picker, then delivers a detailed plan. Use when the
  user wants to think through a problem and weigh approaches before coding — "help me plan",
  "how should I approach", "plan this feature", "what are my options". For pressure-testing
  an existing plan, use /grill instead.
---

# Plan & Clarify

Be interactive and collaborative. Ask questions before proposing solutions.

## Process

1. **Analyze** the request and identify what you need to know. Read `CONTEXT-MAP.md` (multi-context) or root `CONTEXT.md` if either exists — use the project glossary in your questions and plan (read-only; `/grill`-authored, subordinate to `CONCEPT.md`).
2. **Ask 3-5 clarifying questions** about scope, constraints, preferences, and trade-offs.
   - Use the `AskUserQuestion` tool when the questions have discrete answers — clickable picker beats free text.
   - Use plain text questions only when the answer is genuinely open-ended (e.g. "what is the existing data shape?").
3. **Present 2-3 approach options** after receiving answers, both as text (for trade-off context) AND as an `AskUserQuestion` picker so the user clicks their choice:
   - Option 1: [approach] — [trade-off summary]
   - Option 2: [approach] — [trade-off summary]
   - Option 3: [approach] — [trade-off summary]
   - Always include an "Other / explore a different direction" choice so the user can deviate.
4. **Deliver a detailed plan** once an approach is selected.

Use numbered lists and clear headers. Keep each option to 2-3 sentences. Do NOT end the option presentation with a free-text question like "Which option do you prefer?" — the `AskUserQuestion` picker is the way the user answers.

This skill is for planning only — it does NOT start any implementation or BONSAI workflow.

$ARGUMENTS
