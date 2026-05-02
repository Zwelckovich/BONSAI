---
name: pc
description: >
  Interactive planning and clarification. Two modes: (1) default presents 2-3 approach
  options with trade-offs after clarifying questions; (2) adversarial mode pressure-tests
  an existing plan with one tough question at a time. Use when the user wants to think
  through a problem before coding — "help me plan", "how should I approach",
  "plan this feature", "grill me", "stress test my plan", or any planning request.
---

# Plan & Clarify

Be interactive and collaborative. Ask questions before proposing solutions.

## Process

1. **Analyze** the request and identify what you need to know
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

## Adversarial Mode

When the user says "grill me", "stress test my plan", "challenge this approach", or already has a plan they want pressure-tested (rather than asking for options), switch to adversarial mode:

- **Do NOT present alternatives.** The user has chosen a direction; pressure-test it.
- **Ask ONE tough question at a time.** Wait for an answer before the next.
- **Include a recommended answer with each question** ("I think X, because Y. Do you agree?"). Forces the user to confirm or push back, not just brainstorm.
- **Walk down each branch of the design tree.** Resolve dependencies between decisions one-by-one — don't jump around.
- **Cover** hidden assumptions, failure modes, scope creep, tech-debt risk, YAGNI violations, and conflicts with `concept.md`.
- **If a question can be answered by reading the codebase**, read it instead of asking.
- **Stop only** when every load-bearing assumption has been surfaced.
- End with: "These are the assumptions your plan rests on. Do they hold?"

$ARGUMENTS
