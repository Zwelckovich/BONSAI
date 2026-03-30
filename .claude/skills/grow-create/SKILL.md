---
name: grow-create
description: >
  Create a GROW.md development plan from concept.md. Analyzes the project vision
  and generates intelligent, sequential development phases with prompts for each.
  Does NOT implement anything — just creates the plan. Trigger when user says
  "grow create", "create grow plan", "generate phases", or "plan my project".
---

# GROW! Plan Creation

Analyze `concept.md` and generate a smart, phase-based development plan in `GROW.md`.

## Process

### 1. Analyze concept.md

Read `concept.md` and extract:
- Project type (web app, CLI tool, library, API, etc.)
- Core technology (Python, JavaScript, etc.)
- Key requirements and features
- Complexity level

If `concept.md` doesn't exist, ask the user to create one first (or run `/bonsai-init`).

### 2. Generate Development Phases

Think like a developer: what would you build first to validate the concept? Create phases that follow a natural progression:

**Phase planning principles:**
- **Foundation first** — Core data structures and basic operations
- **Incremental value** — Each phase adds working features
- **Natural dependencies** — Backend before frontend, core before extensions
- **Testable milestones** — Every phase produces verifiable functionality
- **Single-command runnable** — Each phase must work with ONE terminal command

**Typical progressions:**
- CLI tool: Core logic → Persistence → CLI interface → Testing
- Web app: Backend API → Database → Auth → Frontend → Integration tests
- Library: Core algorithms → Public API → Test suite → Docs → Packaging

Maximum 10 phases. Most projects need 4-7.

### 3. Create GROW.md

Write `GROW.md` with this structure:

```markdown
# GROW! Intelligent Development Plan

## Project Analysis
- **Project Type**: [detected type]
- **Core Technology**: [language/framework]
- **Complexity**: [Simple/Medium/Complex]
- **Source**: concept.md

## Development Phases

### Phase 1: [Foundation Phase Name]
- **Goal**: [what this phase achieves]
- **Deliverable**: [functional component]
- **Run Command**: [exact command to run and test]
- **Status**: ⏳ PENDING

#### Phase 1 Prompt:
[Detailed prompt that will be passed to /bonsai]

### Phase 2: [Next Phase Name]
- **Goal**: [builds upon Phase 1]
- **Deliverable**: [next functional increment]
- **Dependencies**: Phase 1
- **Run Command**: [exact command]
- **Status**: ⏳ PENDING

#### Phase 2 Prompt:
[Detailed prompt for Phase 2]

[... additional phases ...]
```

### 4. Present the Plan

Show the user the generated plan and ask if they want to:
- Modify any phases
- Add or remove phases
- Adjust the order
- Start execution with `/grow`

**Important**: Do NOT start implementing any phase. This skill only creates the plan.

$ARGUMENTS
