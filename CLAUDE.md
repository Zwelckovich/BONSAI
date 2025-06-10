# 🌱 BONSAI - Build Only Necessary Software, Adapt Intelligently

> **BONSAI**: This template provides systematic development workflow with task tracking and progress confirmation to ensure thorough software development.

**Note**: BONSAI is the name of this development template/methodology, NOT your project name. Your project can be named anything you want!

---

# CLAUDE.md - Dynamic Minimal Development Guide

## ⚠️ CRITICAL: DO NOT MODIFY THIS FILE

**CLAUDE.md is a TEMPLATE - it should NEVER be modified during normal development**

- ❌ **NEVER** update CLAUDE.md with project-specific information
- ❌ **NEVER** add your project's learnings, status, or configurations here
- ❌ **NEVER** modify CLAUDE.md unless explicitly instructed by the user
- ✅ **ALWAYS** use CLAUDE.local.md for project-specific learnings
- ✅ **ALWAYS** use concept.md for project vision and decisions
- ✅ **ONLY** update CLAUDE.md when user explicitly says "update CLAUDE.md" or "change the template"

**If you need to document something project-specific**:
- Environment learnings → CLAUDE.local.md
- Project decisions → concept.md
- Session tracking → CLEANUP.md
- User documentation → README.md
- **Task tracking → BONSAI.md (DEBUG)**

## Quick Reference

### Core Documents
- **concept.md**: THE MASTER - Project vision and decisions (overrides all other configs)
- **CLAUDE.md**: Template for workflow and practices (READ-ONLY - NEVER MODIFY)
- **CLAUDE.local.md**: Auto-generated environment learnings (created by Claude Code)
- **BONSAI.md**: Task execution tracker (add to .gitignore for local workflow tracking)

### Session Management
- **CLEANUP.md**: Persistent session tracker - Always in .gitignore
- **BONSAI.md**: Task progress tracker - Reset content per operation (file persists)

### User-Facing Documents  
- **README.md**: Manual for end users of your software
- **.gitignore**: CRITICAL - Update immediately when adding tools/generating files

### Special Cases
- **PROJECT-TRANSFER.md**: Guide for migrating existing projects (user provides path)
- **migration/**: Temporary analysis during project transfers (rarely needed)
- **CLEANUP.md**: Always present (in .gitignore), shows session history
- **BONSAI.md**: Task execution tracker (add to .gitignore for local debugging)
- **Don'ts Section**: User-defined patterns/tools to avoid (check before adding anything)
- **Command Aliases**: User-defined shortcuts - type exactly (e.g., just "c/p" not "please c/p")

## Philosophy & Core Principles

**Main Principle**: Start minimal, grow only when needed. Every addition must be justified by actual project requirements.

**CRITICAL RULE**: Every single user interaction MUST follow the complete 18-task BONSAI workflow. No exceptions. No shortcuts. No direct problem-solving without the workflow.

[Previous philosophy section remains unchanged...]

## Task Workflow (STRICT - Follow for EVERY operation)

### Task 0: Initialize Task Tracking
**ACTION**: Reset BONSAI.md content for new operation (persistent file for workflow tracking)
```markdown
# BONSAI Task Execution Tracker
## Operation Started: [timestamp]
## User Request: "[brief summary of request]"

### Task Checklist
- [ ] Task 0: Initialize Task Tracking ⏳
- [ ] Task 1: Plan Creation & Cleanup Tracking
- [ ] Task 2: File Reading
- [ ] Task 3: Concept Alignment
- [ ] Task 4: Implementation
- [ ] Task 5: Environment Execution
- [ ] Task 6: Code Minimalism Check
- [ ] Task 7: Dependency Check
- [ ] Task 8: Formatting & Linting
- [ ] Task 9: Test Preparation
- [ ] Task 10: Test Organization
- [ ] Task 11: Test Execution
- [ ] Task 12: Concept Re-alignment
- [ ] Task 13: Pre-commit Validation
- [ ] Task 14: Documentation Updates
- [ ] Task 15: File Usage Scanning
- [ ] Task 16: Naming Consistency Review
- [ ] Task 17: Cleanup Review & Execution

### Execution Log
```

**CONFIRM TO USER**: "🔧 Task tracking initialized in BONSAI.md"

### Task 1: Plan Creation & Cleanup Tracking
- **MANDATORY**: ALWAYS execute full BONSAI workflow regardless of request type
- **FIRST PRIORITY**: Check if user's prompt exactly matches an alias
  - If "c/p" → Execute commit and push sequence WITHIN workflow
  - If "cleanup" → Execute full project cleanup WITHIN workflow
  - If other alias → Execute defined commands WITHIN workflow
  - NEVER STOP workflow early - aliases execute as part of implementation
- Analyze the user's request
- **VERIFY**: Is user asking to modify CLAUDE.md itself? If not, NEVER modify it!
- **CHECK for existing CLEANUP.md** from previous session
- **CREATE/UPDATE CLEANUP.md** to track all files created in this session
- **Check CLAUDE.local.md for environment-specific patterns**
- **Check Don'ts section to avoid prohibited tools/patterns**
- Identify files to modify/create
- List required tools (only if not present and not in Don'ts)

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 1: Plan Creation & Cleanup Tracking ✓ [timestamp]
  - Alias check: [result]
  - CLEANUP.md: [created/updated]
  - Files to modify: [list]
  - Tools needed: [list]
```

**CONFIRM TO USER**: "🌱 Task 1 Complete: Plan created, CLEANUP.md initialized, files identified ✅"

### Task 2: File Reading
- Read ALL files that will be modified
- Understand current structure and dependencies
- **Check CLEANUP.md status**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 2: File Reading ✓ [timestamp]
  - Files read: [list]
  - Dependencies found: [list]
  - Structure understood: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 2 Complete: Read [X] files, understood structure ✅"

### Task 3: Concept Alignment
- Cross-check plan with `concept.md` (THE MASTER)
- If conflict between CLAUDE.md and concept.md, follow concept.md
- Ensure changes align with project goals
- Verify no Don'ts patterns are being introduced
- Abort if misaligned with concept.md

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 3: Concept Alignment ✓ [timestamp]
  - concept.md checked: [yes/no]
  - Conflicts found: [none/list]
  - Alignment verified: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 3 Complete: Concept alignment verified ✅"

### Task 4: Implementation
- Write minimal code that solves the problem
- **ADD every new file to CLEANUP.md immediately upon creation**
- No premature optimization
- No unused imports or variables
- **Ensure code is cross-platform**
- **If new tool added**: Create minimal config
- **If new tool added**: Update .gitignore immediately

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 4: Implementation ✓ [timestamp]
  - Files created: [list]
  - CLEANUP.md updated: [yes/no]
  - Cross-platform verified: [yes/no]
  - .gitignore updated: [yes/no if applicable]
```

**CONFIRM TO USER**: "🌱 Task 4 Complete: Implementation done, [X] files created/modified ✅"

### Task 5: Environment Execution
- **CRITICAL**: Always use virtual environment (never global Python/Node)
- **Python**: Ensure `.venv` is active before any python/uv commands
- **JavaScript**: Ensure node_modules exists before any npm/yarn commands
- **Apply patterns from CLAUDE.local.md**
- **Record new discoveries in CLAUDE.local.md**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 5: Environment Execution ✓ [timestamp]
  - Virtual env used: [yes/no]
  - Environment type: [.venv/node_modules/etc]
  - New discoveries: [list]
  - CLAUDE.local.md updated: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 5 Complete: Environment properly configured and used ✅"

### Task 6: Code Minimalism Check
- Remove any redundant code
- Ensure every line has a purpose
- Check if code is actually used

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 6: Code Minimalism Check ✓ [timestamp]
  - Redundant code removed: [yes/no]
  - Lines removed: [count]
  - All code justified: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 6 Complete: Code minimalism verified ✅"

### Task 7: Dependency Check
- Find all files using modified functions
- Update all references
- Maintain backward compatibility if possible

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 7: Dependency Check ✓ [timestamp]
  - Dependencies checked: [count]
  - References updated: [count]
  - Breaking changes: [none/list]
```

**CONFIRM TO USER**: "🌱 Task 7 Complete: Dependencies checked and updated ✅"

### Task 8: Formatting & Linting (MANDATORY - NEVER SKIP)
- **STOP** - This step is NOT optional
- **CRITICAL**: Always use local environment (virtual environment/local installation)
- **Python Example**: `uv add ruff` → `uv run ruff check` → `uv run ruff format`
- **JavaScript Example**: `npm install eslint prettier --save-dev` → `npm run lint` → `npm run format`
- **Rust Example**: `cargo install rustfmt clippy` → `cargo fmt` → `cargo clippy`
- **General**: Install formatter/linter locally, run with local environment
- **READ THE ENTIRE OUTPUT**
- **FIX ALL ISSUES**
- **RE-RUN THE LINTER** to verify
- **VERIFY SUCCESS**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 8: Formatting & Linting ✓ [timestamp]
  - Formatter run: [command used]
  - Linter run: [command used]
  - Issues found: [count]
  - Issues fixed: [count]
  - Final status: [clean/issues remaining]
```

**CONFIRM TO USER**: "🌱 Task 8 Complete: Formatting and linting passed with 0 issues ✅"

### Task 9: Test Preparation
- Check if functions are testable
- Use pytest, hypothesis, pydantic when appropriate
- Write minimal but comprehensive tests

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 9: Test Preparation ✓ [timestamp]
  - Testable functions: [count]
  - Test framework: [pytest/none/other]
  - Tests written: [count]
```

**CONFIRM TO USER**: "🌱 Task 9 Complete: Tests prepared ✅"

### Task 10: Test Organization
- Mirror source structure in tests/
- Name test files clearly
- Group related tests

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 10: Test Organization ✓ [timestamp]
  - Test structure: [description]
  - Test files: [list]
```

**CONFIRM TO USER**: "🌱 Task 10 Complete: Tests organized ✅"

### Task 11: Test Execution
- Run all tests
- No workarounds or test manipulation
- Fix code until tests pass naturally

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 11: Test Execution ✓ [timestamp]
  - Tests run: [count]
  - Tests passed: [count]
  - Tests failed: [count]
  - All passing: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 11 Complete: All tests passing ✅"

### Task 12: Concept Re-alignment
- Review all changes against `concept.md`
- Ensure no scope creep occurred
- **Verify .gitignore is complete**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 12: Concept Re-alignment ✓ [timestamp]
  - Concept alignment: [verified/issues]
  - Scope creep: [none/detected]
  - .gitignore complete: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 12 Complete: Concept re-alignment verified ✅"

### Task 13: Pre-commit Validation
- **CRITICAL**: Always use local environment (virtual environment/local installation)
- **Python Example**: `uv add pre-commit --dev` → `uv run pre-commit install` → `uv run pre-commit run --all-files`
- **JavaScript Example**: `npm install --save-dev pre-commit` → `npx pre-commit install` → `npx pre-commit run --all-files`
- **Any Language**: Install in project's local environment, never globally
- Run pre-commit hooks (if configured)
- Fix any issues
- Only proceed when clean

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 13: Pre-commit Validation ✓ [timestamp]
  - Pre-commit configured: [yes/no]
  - Hooks run: [list/none]
  - Status: [clean/N/A]
```

**CONFIRM TO USER**: "🌱 Task 13 Complete: Pre-commit validation passed ✅"

### Task 14: Documentation Updates
- Update `concept.md` if fundamental changes made
- Update `README.md` with new user-facing functions
- **Update CLAUDE.local.md with session learnings**
- **NEVER update CLAUDE.md**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 14: Documentation Updates ✓ [timestamp]
  - concept.md updated: [yes/no]
  - README.md updated: [yes/no]
  - CLAUDE.local.md updated: [yes/no]
  - CLAUDE.md modified: [NO - as expected]
```

**CONFIRM TO USER**: "🌱 Task 14 Complete: Documentation updated appropriately ✅"

### Task 15: File Usage Scanning (MANDATORY - Before ANY deletion)
- **STOP** - NEVER delete a file without checking usage first
- **Use Grep tool** to scan entire codebase
- **Check ALL file types**
- **If ANY usage found**: Update references BEFORE deleting
- **Document findings**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 15: File Usage Scanning ✓ [timestamp]
  - Files to check: [list]
  - Grep searches run: [count]
  - Usage found: [yes/no]
  - Safe to delete: [list]
```

**CONFIRM TO USER**: "🌱 Task 15 Complete: File usage scanning done ✅"

### Task 16: Naming Consistency Review (MANDATORY)
- **STOP** - Review all class/function/file names
- **Remove confusing prefixes**
- **Eliminate duplicate names**
- **Use simple, direct names**
- **Delete unused files immediately** (after scanning)
- **Update all imports and references**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 16: Naming Consistency Review ✓ [timestamp]
  - Confusing names found: [count]
  - Names cleaned: [list]
  - References updated: [count]
  - Unused files deleted: [list]
```

**CONFIRM TO USER**: "🌱 Task 16 Complete: Naming consistency verified ✅"

### Task 17: Cleanup Review & Execution (MANDATORY)
- **STOP** - Do not skip this step
- **Open CLEANUP.md** and review EVERY file listed
- **Mark decisions** in CLEANUP.md
- **Execute cleanup**
- **Verify cleanup**
- **Update CLEANUP.md with session summary**

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 17: Cleanup Review & Execution ✓ [timestamp]
  - Files reviewed: [count]
  - Files kept: [count]
  - Files deleted: [count]
  - Artifacts cleaned: [list]
  - CLEANUP.md finalized: [yes/no]

## Operation Complete: [timestamp]
## Total Duration: [time]
## Result: SUCCESS ✓
```

**CONFIRM TO USER**: "🌱 Task 17 Complete: Cleanup executed, project is clean ✅"

**FINAL CONFIRMATION**: 
```
🎉 All 18 tasks completed successfully!
📊 Task Summary saved in BONSAI.md
🧹 Project is clean and minimal
```

## BONSAI Execution Features

### BONSAI.md Structure
The BONSAI.md file tracks task execution and provides workflow debugging:

```markdown
# BONSAI Task Execution Tracker
## Operation Started: 2024-01-15 10:30:45
## User Request: "Add API endpoint for user authentication"

### Task Checklist
- [x] Task 0: Initialize Task Tracking ✓ 10:30:45
- [x] Task 1: Plan Creation & Cleanup Tracking ✓ 10:30:50
  - Alias check: No alias matched
  - CLEANUP.md: Created new
  - Files to modify: main.py, models.py
  - Tools needed: None (using stdlib)
- [x] Task 2: File Reading ✓ 10:31:00
  - Files read: main.py, models.py, concept.md
  - Dependencies found: fastapi, pydantic
  - Structure understood: yes
[... continues for all tasks ...]

### Execution Log
10:30:45 - Started operation
10:30:50 - Plan created, no aliases matched
10:31:00 - Read 3 files successfully
[... continues with timestamps ...]
10:35:30 - Operation complete

## Operation Complete: 10:35:30
## Total Duration: 5 minutes
## Result: SUCCESS ✓
```

### Task Progress Commands
These commands help track workflow execution:

- **"show task progress"** → Display current BONSAI.md
- **"verify task X"** → Confirm specific task was executed
- **"reset task tracker"** → Reset BONSAI.md content and start fresh (file persists)

### Common Workflow Issues

1. **Skipped Linting** (Task 8)
   - Critical task often bypassed
   - BONSAI tracking ensures execution

2. **Missing Cleanup** (Task 17)
   - Frequently forgotten at session end
   - Mandatory task completion required

3. **Ignored File Scanning** (Task 15)
   - Files deleted without usage check
   - Grep confirmation required

4. **Concept Misalignment** (Tasks 3 & 12)
   - Changes drift from concept.md
   - Dual verification checkpoints

## Remember

- **Every task must be executed** - all 18 tasks are mandatory
- **No task can be skipped** - complete workflow required
- **BONSAI.md content resets** at Task 0 for each operation (file persists for debugging)
- **User confirmation** provided after each task completion
- **Task tracking** ensures comprehensive workflow execution

All template rules and principles apply consistently.