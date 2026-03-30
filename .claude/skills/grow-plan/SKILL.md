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

Once the user selects an approach:
1. Update GROW.md with the refined phase plan and selected approach
2. Execute the phase using the `/bonsai` workflow
3. After implementation, verify the run command works
4. Update GROW.md with completion status and verified run command

$ARGUMENTS
