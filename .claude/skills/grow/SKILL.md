---
name: grow
description: >
  Execute the next GROW! development phase from GROW.md. Reads the phase plan,
  runs the full /bonsai workflow for that phase, and updates GROW.md with results.
  Use --ALL flag for continuous execution of all remaining phases.
  Trigger when user says "grow", "next phase", "execute phase", or "GROW! --ALL".
disable-model-invocation: true
---

# GROW! Phase Execution

Execute development phases from GROW.md using the BONSAI workflow.

## Modes

- **Standard** (`/grow`): Execute the next incomplete phase, then stop
- **Continuous** (`/grow --ALL`): Execute all remaining phases without stopping

## Process

### 1. Read GROW.md

Read `GROW.md` to find the current state:
- Which phases are completed (marked ✅)
- Which phase is next (first without ✅)
- The phase prompt and deliverables

If GROW.md doesn't exist, tell the user to run `/grow-create` first.

### 2. Execute the Phase

For the current phase:
1. Read the phase prompt from GROW.md
2. Execute it using the `/bonsai` skill (invoke the full adaptive workflow)
3. The phase prompt becomes the `$ARGUMENTS` for `/bonsai`

### 3. Update GROW.md

After the `/bonsai` workflow completes for the phase:
1. Mark the phase as ✅ COMPLETED with timestamp
2. Record files modified and summary of changes
3. Verify the phase deliverable is functional (runs with one command)

### 4. Mode Check

- **Standard mode**: Stop and inform the user. They can run `/grow` again for the next phase.
- **Continuous mode** (`--ALL`): Immediately proceed to the next incomplete phase. Repeat steps 2-4 until all phases are complete.

### 5. Completion

When all phases are done (or standard mode stops after one):
```
🌱 Phase [N] Complete: [phase name]
  Files: [count] modified, [count] created
  Run command: [the command to test this phase]

  [Standard mode]: Run /grow for the next phase
  [Continuous mode]: Proceeding to Phase [N+1]...
```

## Error Handling

If a phase fails:
1. Mark it as ❌ FAILED in GROW.md with the error
2. Stop execution (even in --ALL mode — phases have dependencies)
3. Tell the user what went wrong and suggest fixes
4. Next `/grow` invocation retries the failed phase

$ARGUMENTS
