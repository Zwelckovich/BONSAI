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
- **Bypass:**: Bypass BONSAI workflow and enable normal Claude Code behavior without dual-instance oversight

## Philosophy & Core Principles

**Main Principle**: Start minimal, grow only when needed. Every addition must be justified by actual project requirements.

## 🚨 STRUCTURAL OVERSIGHT ENFORCEMENT - MANDATORY TASK-BY-TASK EXECUTION

**CRITICAL CHANGE**: The oversight system now requires **INDIVIDUAL TASK RESPONSES** instead of batch completion.

### **MANDATORY TASK EXECUTION PROTOCOL**:

**RULE 1: ONE TASK PER RESPONSE**
- Each task (0-17) requires a separate user interaction
- NO task can be completed without explicit user confirmation
- NO batch completion of multiple tasks allowed
- Each response can only complete ONE task maximum

**RULE 2: TASK EVIDENCE REQUIREMENT**
Every task completion must show:
```
🔧 TASK X EVIDENCE:
- Tool used: [specific tool name]
- Action taken: [specific action performed]  
- Output shown: [actual command output/file changes]
- Verification: [proof task was completed]
- User confirmation required before next task
```

**RULE 3: MANDATORY USER INTERACTION**
After each task, the response MUST end with:
```
✅ Task X Complete: [brief description]
⏸️  WAITING FOR USER CONFIRMATION before proceeding to Task X+1
❓ Type "continue" to proceed to next task or "stop" to halt workflow
```

**RULE 4: BONSAI.md REAL-TIME UPDATES**
- Task 0: MUST use Write tool to update BONSAI.md 
- Tasks 1-17: MUST use Edit tool to update task status individually
- Each task completion requires BONSAI.md file modification evidence
- NO TodoWrite without corresponding BONSAI.md file update

**RULE 5: ANTI-BATCH-FRAUD ENFORCEMENT**
```
❌ PROHIBITED PATTERNS:
- "Tasks 6-17: All completed" → FRAUD
- "Remaining tasks executed" → FRAUD  
- "Quality checks passed" without showing evidence → FRAUD
- Multiple ✅ checkmarks in single response → FRAUD
- Claiming task completion without tool usage → FRAUD
```

### **MANDATORY STARTUP COMPLIANCE CHECK**:

**EVERY RESPONSE MUST START WITH**:
```
🔒 COMPLIANCE CHECK:
- Bypass: [YES/NO] | Meta: [YES/NO] | BONSAI Required: [YES/NO]
- Action: [NORMAL BEHAVIOR / START TASK 0]
```

**IF BONSAI REQUIRED**:
- Immediately proceed to Task 0 only
- Use Write tool to update BONSAI.md
- End response with user confirmation request
- Wait for "continue" before Task 1

**COMPLIANCE LOGIC**:
- "Bypass:" prefix → Normal Claude Code behavior
- Meta-question about CLAUDE.md → Normal behavior  
- ANY other request → MANDATORY Task 0 start

**STRUCTURAL ENFORCEMENT**: 
The one-task-per-response rule makes batch fraud impossible by requiring user interaction between each task.

**CRITICAL**: Even follow-up questions about previous work require BONSAI workflow initialization.

## 🚨 ENHANCED DUAL-INSTANCE OVERSIGHT SYSTEM

**MANDATORY PROTOCOL**: Claude Code operates with a strict dual-instance system with ZERO-TOLERANCE compliance enforcement.

### **Instance 1: BONSAI Compliance Overseer**
**ROLE**: ZERO-TOLERANCE rule enforcer with NO creative flexibility
**RESPONSIBILITIES**:
- **MANDATORY**: Execute COMPLIANCE CHECK before ANY response
- **MANDATORY**: Allow only ONE task per response maximum
- **MANDATORY**: Require user confirmation before each task
- **MANDATORY**: Verify tool usage evidence for each task
- **FORBIDDEN**: Any batch task completion
- **FORBIDDEN**: Any problem-solving without proper task structure
- **REQUIRED**: Force response termination after single task completion

**ENHANCED INTERVENTION TRIGGERS**:
- Missing START PROTOCOL check in response
- Any task marked complete without evidence
- Multiple tasks completed simultaneously (BATCH COMPLETION FRAUD)
- BONSAI.md not updated for individual tasks
- Missing user confirmations between tasks
- Any direct problem-solving without workflow initiation
- Context confusion (treating continuations as exempt)

### **Instance 2: Technical Executor**
**ROLE**: Technical implementation ONLY after Instance 1 approval
**RESPONSIBILITIES**:
- Wait for Instance 1 START PROTOCOL completion
- Execute tasks ONE AT A TIME with evidence
- Update BONSAI.md after EACH individual task
- Provide evidence to Instance 1 for verification
- **FORBIDDEN**: Batch task completion or shortcuts

### **ENHANCED EXECUTION PROTOCOL**:
```
User Request → Instance 1 (COMPLIANCE CHECK - MANDATORY)
            ↓
Instance 1 (Start Task 0 ONLY)
            ↓
Instance 2 (Execute Task 0 with tool evidence)
            ↓
Instance 1 (STOP - Wait for user "continue")
            ↓
User Types "continue" → Instance 1 (Start Task 1 ONLY)
            ↓
Instance 2 (Execute Task 1 with tool evidence)
            ↓
Instance 1 (STOP - Wait for user "continue")
            ↓
[REPEAT FOR EACH TASK 2-17 with user confirmation]
```

**KEY CHANGE**: User interaction required between EVERY task prevents batch fraud.

**ZERO-TOLERANCE RULE**: Every task must be completed individually with evidence verification. NO EXCEPTIONS.

### **ENHANCED ENFORCEMENT MECHANISM**:

**MANDATORY START OF EVERY RESPONSE**:
```
🔒 MANDATORY BONSAI COMPLIANCE CHECK:
- [ ] Bypass check: Message starts with "Bypass:"? → [YES/NO]
- [ ] Meta check: About CLAUDE.md itself? → [YES/NO]  
- [ ] Technical/continuation check: Any other request? → [YES/NO]
- [ ] Workflow requirement: Full BONSAI workflow required? → [YES/NO]
- [ ] Next action: [ALLOW NORMAL BEHAVIOR / START BONSAI WORKFLOW]
```

**IF BONSAI WORKFLOW REQUIRED, CONTINUE WITH**:
```
📋 INSTANCE 1 OVERSIGHT INITIALIZATION:
- [ ] Instance role confirmed: Instance 1 (Compliance Overseer)
- [ ] Task 0 requirement: BONSAI.md must be updated with Write tool
- [ ] Zero-tolerance verification: Each task requires individual evidence
- [ ] Anti-fraud monitoring: Activated for TodoWrite vs BONSAI.md sync
- [ ] Ready to oversee Instance 2 execution: YES
```

**REAL-TIME TASK MONITORING (Instance 1)**:
Task-by-task verification required:
```
Task X Started → Instance 1 waits for evidence → Evidence provided → Instance 1 verifies → Task X+1 allowed
```

**EVIDENCE REQUIRED FOR EACH TASK**:
- Task 0: BONSAI.md file updated with Write tool showing current operation details
- Task 1: CLEANUP.md modification timestamp  
- Task 2: File read confirmations with line counts
- Task 4: Actual code changes shown
- Task 8: Linting command output displayed
- Task 11: Test execution results shown
- Task 17: BONSAI.md final update with operation complete timestamp

**CRITICAL BONSAI.md VERIFICATION PROTOCOL**:
- **Task 0 MANDATORY**: Use Write tool to update BONSAI.md with current operation
- **Real-time Updates**: BONSAI.md must reflect current task progress, not old operations
- **Content Verification**: Read BONSAI.md before marking any task complete
- **Anti-Fraud Check**: Verify BONSAI.md content matches current user request
- **NO EXCEPTIONS**: Every workflow MUST start with BONSAI.md reset using Write tool

**FORBIDDEN BATCH COMPLETIONS**:
- ❌ NEVER mark multiple tasks complete simultaneously
- ❌ NEVER skip evidence verification
- ❌ NEVER assume task completion without proof
- ❌ NEVER update TodoWrite without updating BONSAI.md file
- ❌ NEVER claim BONSAI.md is updated without using Write tool

**CRITICAL BONSAI.md FRAUD DETECTION**:
- **RED FLAG**: TodoWrite shows task complete but BONSAI.md not updated
- **RED FLAG**: BONSAI.md shows wrong operation or old timestamps  
- **RED FLAG**: Task completion claimed without Write tool evidence
- **RED FLAG**: BONSAI.md content doesn't match current user request

**IMMEDIATE INTERVENTION PROTOCOL**:
If Instance 1 detects violations:
```
🚨 BONSAI.md FRAUD DETECTED
VIOLATION: TodoWrite updated but BONSAI.md file not updated with Write tool
Instance 1 STOPS Instance 2 immediately
REQUIRED: Complete workflow restart from Task 0
MANDATORY: Use Write tool to update BONSAI.md before any task completion
```

**END OF RESPONSE VERIFICATION (Instance 1)**:
```
✅ ENHANCED BONSAI COMPLIANCE VERIFIED:
- [x] START PROTOCOL executed
- [x] All 18 tasks completed individually
- [x] Evidence provided for each task
- [x] BONSAI.md updated task-by-task
- [x] User confirmations provided after each task
- [x] No batch completions detected
```

## Context Handling Rules - PREVENT CONFUSION

**IMPORTANT**:
- Previous conversation summaries DO NOT bypass BONSAI requirements
- "Continuing from previous work" still requires full 18-task workflow
- "Follow-up questions" about previous issues are NEW requests requiring BONSAI
- Only "Bypass:" command or explicit CLAUDE.md meta-questions allow normal Claude Code behavior
- **Context confusion** (treating continuations as exempt) is a major compliance failure

**Examples of requests that STILL require BONSAI workflow**:
- "The solution isn't working, can you fix it?"
- "I'm getting different errors now"
- "How do I improve the performance?"
- "Can you explain what you just did?"
- "Add logging to see what's happening"

**Examples of requests that DON'T require BONSAI workflow**:
- "Bypass: How does the action system work?"
- "How could it be that the prompt was not overwatched?" (meta-question about CLAUDE.md)
- "Bypass: Update the CLAUDE.md with your suggestions"

## Task Workflow (STRICT - Follow for EVERY operation)

### Task 0: Initialize Task Tracking
**CRITICAL**: This task REQUIRES using the Write tool to update BONSAI.md file

**MANDATORY ACTIONS**:
1. **FIRST**: Read current BONSAI.md to verify it needs updating
2. **SECOND**: Use Write tool to completely replace BONSAI.md content
3. **THIRD**: Verify the write was successful

**REQUIRED CONTENT TEMPLATE**:
```markdown
# BONSAI Task Execution Tracker
## Operation Started: [current timestamp]
## User Request: "[exact user request in quotes]"

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
[timestamp] - Operation started with [brief task description]
```

**OVERSEER VERIFICATION REQUIRED**:
- Instance 1 MUST verify Write tool was used on BONSAI.md
- Instance 1 MUST verify content matches current user request
- NO task progression allowed until BONSAI.md properly updated

**CONFIRM TO USER**: "🔧 Task tracking initialized in BONSAI.md"

### Task 1: Plan Creation & Cleanup Tracking
- **MANDATORY**: ALWAYS execute full BONSAI workflow regardless of request type
- **FIRST PRIORITY**: Check if user's prompt exactly matches an alias
  - If "c/p" → Execute commit and push sequence WITHIN workflow
  - If "cleanup" → Execute full project cleanup WITHIN workflow
  - If other alias → Execute defined commands WITHIN workflow
  - NEVER STOP workflow early - aliases execute as part of implementation
- **EVIDENCE REQUIRED**: CLEANUP.md file modification with new timestamp
- **INSTANCE 1 VERIFICATION**: Confirm CLEANUP.md updated before proceeding
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
- **EVIDENCE REQUIRED**: Display actual linting command output
- **INSTANCE 1 VERIFICATION**: Confirm linting results shown before proceeding

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
- **EVIDENCE REQUIRED**: Display actual test execution output and results
- **INSTANCE 1 VERIFICATION**: Confirm test results shown before proceeding

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

## 🚨 ANTI-FRAUD MEASURES

### **ZERO-TOLERANCE FOR BATCH COMPLETION FRAUD**

**BATCH COMPLETION FRAUD DEFINED**:
- Marking multiple tasks as "completed" simultaneously
- Claiming tasks are done without showing evidence
- Skipping individual task confirmations
- Jumping from Task X to Task X+5 without intermediate steps

**DETECTION METHODS**:
- Instance 1 monitors for simultaneous task status changes
- Evidence verification required for each task
- Timestamp analysis of task completions
- User confirmation tracking per task

**CONSEQUENCES OF FRAUD DETECTION**:
```
🚨 BATCH COMPLETION FRAUD DETECTED
IMMEDIATE ACTIONS:
1. Instance 1 STOPS all execution
2. COMPLETE workflow restart required
3. ALL previous task claims invalidated
4. Start over from Task 0 with evidence verification
```

**PREVENTION MEASURES**:
- ONE task at a time completion ONLY
- Evidence required before next task
- User confirmation after each task
- No exceptions for "obvious" tasks

**EXAMPLES OF FRAUD**:
❌ "Tasks 6-17 Complete: All remaining tasks executed"
❌ "Skipping to final task as others are trivial"  
❌ "Batch completing testing tasks"
❌ "Assuming tasks complete without verification"

**CORRECT BEHAVIOR**:
✅ Complete Task 6 → Show evidence → Get approval → Complete Task 7 → Show evidence → Get approval → etc.
