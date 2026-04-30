---
name: grow-plan
description: >
  Interactive planning for a single GROW! phase. Reads the phase from GROW.md,
  asks clarifying questions, presents approach options, and requires approval
  before executing. Use when the user wants to plan a specific phase interactively
  before implementing it. Trigger on "grow plan", "plan phase", or "help me plan phase N".
---

# GROW! Interactive Phase Planning

Plan a single GROW! phase interactively before implementation.

## Process

### 1. Read the Phase

Read `GROW.md` and find phase $ARGUMENTS (the phase number).

If no phase number given, find the next incomplete phase.

### 2. Analyze Requirements

Read the phase prompt and identify:
- What needs to be built
- What's unclear or ambiguous
- Dependencies on previous phases
- Technical decisions that need user input

### 3. Ask Clarifying Questions

Ask 3-5 focused questions about:
- Scope — What's in and out of scope for this phase?
- Constraints — Any technical limitations or preferences?
- Trade-offs — Performance vs simplicity? Feature completeness vs speed?
- Integration — How should this connect to existing code?

### 4. Present Approach Options

After receiving answers, present 2-3 options:

```
Option 1: [approach] — [trade-off summary]
Option 2: [approach] — [trade-off summary]
Option 3: [approach] — [trade-off summary]
```

Each option must include:
- The exact run command for this phase
- What the user will see when they run it
- How to verify it works

End with: "Which option do you prefer, or would you like to explore a different direction?"

### 5. Phase Requirements Check

Every phase MUST produce a deliverable that is:
1. **Single-command runnable** — Works with ONE terminal command (e.g., `uv run python main.py`)
2. **Immediately testable** — User can interact with and verify the result
3. **Self-contained** — No dangling imports, placeholder TODOs, or half-wired features
4. **Run command defined** — The exact command is documented in GROW.md

### 6. On Approval

Once the user selects an approach, the default flow is **plan-then-implement in one shot** — `/bonsai` is invoked automatically as the handoff. The user does not need to say "use bonsai skill" or "now build it"; the handoff is unconditional unless the user explicitly says otherwise (e.g., "just plan, don't build" / "stop after planning").

1. Update GROW.md with the refined phase plan and selected approach.
2. **If in plan mode**:
   a. Write the refined plan to the plan file (per plan-mode constraints — only the plan file is editable in this state).
   b. Call `ExitPlanMode`.
   c. After the user approves the exit, **immediately invoke the `/bonsai` skill in the same turn** via the Skill tool, passing the refined phase prompt (Goal, Deliverable, function signatures, acceptance criteria, anti-scope) as the `args`. Do NOT wait for the user to confirm again.
3. **If not in plan mode**: Immediately invoke the `/bonsai` skill with the refined phase prompt as the directive — same payload as the plan-mode case.
4. After `/bonsai` finishes implementation, verify the run command works.
5. Update GROW.md with completion status and verified run command.

**Opt-out:** if the user's message contains language like "just plan", "don't build yet", "stop after planning", or "I want to review before implementing", honor that — present the plan summary and stop. Do not invoke `/bonsai`. This is the override for the default handoff.

$ARGUMENTS
