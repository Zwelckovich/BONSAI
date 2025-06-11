# 🌱 BONSAI - Build Only Necessary Software, Adapt Intelligently

# 🚨🚨🚨 MANDATORY FIRST ACTION - READ THIS BEFORE ANY RESPONSE 🚨🚨🚨

## **ABSOLUTE REQUIREMENT: COMPLIANCE CHECK MUST BE FIRST**

**EVERY SINGLE RESPONSE MUST START WITH THIS EXACT FORMAT:**

```
🔒 MANDATORY COMPLIANCE CHECK:
- Request starts with "Bypass:": [YES/NO]
- Meta-question about CLAUDE.md: [YES/NO]
- Any other request type: [YES/NO]
- BONSAI workflow required: [YES/NO]
- Next action: [NORMAL BEHAVIOR / START TASK 0]
```

**🚨 ZERO TOLERANCE - NO EXCEPTIONS 🚨**

- ❌ **INSTANT VIOLATION**: Responding without compliance check
- ❌ **INSTANT VIOLATION**: Skipping compliance check for any reason
- ❌ **INSTANT VIOLATION**: Starting technical work without compliance check
- ❌ **INSTANT VIOLATION**: Assuming bypass status without explicit check
- ❌ **INSTANT VIOLATION**: Using Task tool when "Bypass:" is detected
- ❌ **INSTANT VIOLATION**: Starting BONSAI workflow when "Bypass:" prefix exists

**ENFORCEMENT LOGIC:**
- **"Bypass:" prefix detected** → IMMEDIATE normal Claude Code behavior (NO BONSAI, NO TASK TOOL)
- **Meta-question about CLAUDE.md** → IMMEDIATE normal Claude Code behavior (NO BONSAI, NO TASK TOOL)
- **ANY OTHER REQUEST** → IMMEDIATE Task 0 start and full 18-task BONSAI workflow

**CRITICAL BYPASS DETECTION:**
- **ANY MESSAGE starting with "Bypass:"** = 100% GUARANTEED normal Claude Code behavior
- **FORBIDDEN with "Bypass:"**: Task tool, BONSAI workflow, compliance escalation
- **REQUIRED with "Bypass:"**: Direct execution using appropriate tools (Bash, Read, Edit, etc.)

**IF YOU SKIP THIS CHECK = IMMEDIATE RESTART REQUIRED**

**ADDITIONAL ENFORCEMENT MEASURES:**

**PRE-RESPONSE VERIFICATION PROTOCOL:**
Before writing ANY response, Claude MUST internally verify:
1. ✅ Did I read the mandatory compliance check requirement?
2. ✅ Am I starting with the exact compliance check format?
3. ✅ Have I determined the correct action (NORMAL/TASK 0)?
4. ✅ Am I following through with that determined action?

**AUTOMATIC TRIGGERS:**
- Any file modification request → COMPLIANCE CHECK REQUIRED
- Any code analysis request → COMPLIANCE CHECK REQUIRED  
- Any debugging request → COMPLIANCE CHECK REQUIRED
- Any implementation request → COMPLIANCE CHECK REQUIRED
- ANY technical work → COMPLIANCE CHECK REQUIRED

**ONLY THESE BYPASS COMPLIANCE CHECK:**
- Message starts with "Bypass:" → Skip compliance, normal behavior
- Meta-questions about CLAUDE.md itself → Skip compliance, normal behavior

## 🚨 STRUCTURAL OVERSIGHT ENFORCEMENT - MANDATORY TASK-BY-TASK EXECUTION

**CRITICAL CHANGE**: The oversight system now requires **INDIVIDUAL TASK EXECUTION** instead of batch completion.

### **MANDATORY TASK EXECUTION PROTOCOL**:

**RULE 1: CONTINUOUS SINGLE-TASK EXECUTION**
- Execute all tasks (0-17) in a continuous workflow
- NO batch completion of multiple tasks allowed
- Process one task at a time with automatic progression
- NO stopping between tasks - complete workflow runs from Task 0 through Task 17 automatically

**RULE 2: TASK EVIDENCE REQUIREMENT**
Every task completion must show:
```
🔧 TASK X EVIDENCE:
- Tool used: [specific tool name]
- Action taken: [specific action performed]  
- Output shown: [actual command output/file changes]
- Verification: [proof task was completed]
- BONSAI.md summary: [detailed template content added]
- Instance 1 verification: Evidence confirmed automatically
```

**CRITICAL BONSAI.md SUMMARY ENFORCEMENT**:
- **MANDATORY**: Every task MUST update BONSAI.md with the detailed template summary
- **FORBIDDEN**: Completing task without adding detailed summary to BONSAI.md
- **TEMPLATE REQUIRED**: Use exact template format specified in each task's ACTION section
- **INSTANCE 1 VERIFICATION**: Must confirm BONSAI.md contains proper detailed summary

**RULE 3: AUTOMATIC INTERNAL PROGRESSION**
After each task, Instance 1 automatically verifies completion and continues immediately:
```
✅ Task X Complete: [brief description]
🔍 Instance 1 Verification: Evidence confirmed - executing Task X+1 immediately
```

**ABSOLUTELY NO USER INTERACTION**: The workflow executes all 18 tasks continuously without any stops or pauses

**CRITICAL IMPLEMENTATION RULE**: After completing any task (1-17), immediately proceed to the next task. DO NOT:
- Wait for user input
- Ask for confirmation  
- Stop execution
- Request "continue" commands
- End the response after a single task

The workflow must run continuously from Task 0 → Task 17 in one uninterrupted execution flow.

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

## Task Workflow (STRICT - Follow for EVERY operation)

### **MANDATORY BONSAI.md SUMMARY REQUIREMENT**

**ABSOLUTE REQUIREMENT**: Every task completion MUST include detailed summary in BONSAI.md using the EXACT template provided. This is NON-NEGOTIABLE.

**FORBIDDEN SHORTCUTS**:
- ❌ NEVER just mark task as complete without detailed summary
- ❌ NEVER skip the ACTION: Update BONSAI.md step
- ❌ NEVER provide only user confirmation without BONSAI.md update
- ❌ NEVER use Edit tool instead of the full template content

**MANDATORY WORKFLOW FOR EACH TASK**:
1. **Execute the task actions**
2. **Update BONSAI.md with EXACT template content** (using Edit tool)
3. **Provide user confirmation message**

**ENFORCEMENT**: Instance 1 MUST verify that BONSAI.md contains the detailed summary for each task before allowing progression to next task.

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
- **If "BONSAI it!" command**: Add BONSAI_IT_PROCESS.md to .gitignore

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

**ERROR HANDLING PROTOCOL (MANDATORY)**:
When running created code and facing errors/warnings, follow this systematic analysis:

**STEP 1: Error Source Classification**
- **Interpreter/Compiler Errors** (syntax, import, type errors, validation errors, exceptions)
  - These CANNOT be ignored - always fix immediately
  - Re-run after each fix until clean
  - **INCLUDES**: Pydantic validation errors, TypeError, ValueError, any exception in traceback
  - **NO EXCEPTIONS**: If program crashes or shows traceback, it MUST be fixed
- **Program Output Messages** (prints, logs, warnings from your code)
  - Requires behavioral analysis (proceed to Step 2)

**STEP 2: Program Behavior Analysis**
For program-generated messages, ask:
- **Is the behavior expected for current circumstances?**
  - Expected behavior + expected messages = ✅ Continue
  - Expected behavior + unexpected warnings = 🔍 Investigate context
  - Unexpected behavior = 🚨 Fix required

**STEP 3: Fix-and-Verify Loop**
- Fix identified issues
- Re-run program
- Repeat analysis until all aspects behave as expected
- Document any environment-specific discoveries
- **MANDATORY**: If any exception/traceback occurs, workflow MUST stop until fixed
- **NO PROGRESSION**: Cannot proceed to next task while interpreter errors exist

**EXAMPLES**:
- ❌ Code says "Driving Left" when instructed to drive right → Fix required
- ✅ Code says "Driving Right" with warning "Long Road" → Investigate if expected
- ❌ ImportError: No module named 'requests' → Install missing dependency
- ❌ Pydantic ValidationError: Input should be a valid number → Fix immediately (interpreter error)
- ❌ Any traceback or exception → Fix immediately (interpreter error)
- ✅ "Warning: Using simulation mode" when using test data → Expected behavior

**ACTION**: Update BONSAI.md
```markdown
- [x] Task 5: Environment Execution ✓ [timestamp]
  - Virtual env used: [yes/no]
  - Environment type: [.venv/node_modules/etc]
  - Interpreter errors: [count fixed]
  - Program behavior: [expected/issues found]
  - Error handling: [systematic analysis completed]
  - New discoveries: [list]
  - CLAUDE.local.md updated: [yes/no]
```

**CONFIRM TO USER**: "🌱 Task 5 Complete: Environment properly configured, code executed with systematic error analysis ✅"

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

## 🚨 ENHANCED DUAL-INSTANCE OVERSIGHT SYSTEM

**MANDATORY PROTOCOL**: Claude Code operates with a strict dual-instance system with ZERO-TOLERANCE compliance enforcement.

### **Instance 1: BONSAI Compliance Overseer**
**ROLE**: ZERO-TOLERANCE rule enforcer with NO creative flexibility
**RESPONSIBILITIES**:
- **MANDATORY**: Execute COMPLIANCE CHECK before ANY response
- **MANDATORY**: Allow only ONE task per response maximum
- **MANDATORY**: Verify task completion automatically before proceeding
- **MANDATORY**: Verify tool usage evidence for each task
- **FORBIDDEN**: Any batch task completion
- **FORBIDDEN**: Any problem-solving without proper task structure
- **REQUIRED**: Force response termination after single task completion

**ENHANCED INTERVENTION TRIGGERS**:
- Missing START PROTOCOL check in response
- Any task marked complete without evidence
- Multiple tasks completed simultaneously (BATCH COMPLETION FRAUD)
- BONSAI.md not updated for individual tasks
- Missing Instance 1 verification between tasks
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
CONTINUOUS EXECUTION LOOP:
Task 0 → Evidence → Verify → Task 1 → Evidence → Verify → Task 2 → Evidence → Verify →
... → Task 17 → Evidence → Verify → COMPLETE
            ↓
Final Result Delivered (NO STOPS DURING EXECUTION)
```

**KEY CHANGE**: Continuous automatic execution with verification prevents batch fraud while maintaining workflow efficiency.

**ZERO-TOLERANCE RULE**: Every task must be completed individually with evidence verification, but workflow NEVER stops until all 18 tasks complete. NO EXCEPTIONS.

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

---

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
- **BONSAI_IT_PROCESS.md**: BONSAI it! transformation report - Always in .gitignore

### User-Facing Documents  
- **README.md**: Manual for end users of your software
- **.gitignore**: CRITICAL - Update immediately when adding tools/generating files

### Special Cases
- **PROJECT-TRANSFER.md**: Guide for migrating existing projects (user provides path)
- **migration/**: Temporary analysis during project transfers (rarely needed)
- **CLEANUP.md**: Always present (in .gitignore), shows session history
- **BONSAI.md**: Task execution tracker (add to .gitignore for local debugging)
- **BONSAI_IT_PROCESS.md**: BONSAI it! transformation report (add to .gitignore)
- **Don'ts Section**: User-defined patterns/tools to avoid (check before adding anything)
- **Command Aliases**: User-defined shortcuts - type exactly (e.g., just "c/p" not "please c/p")
- **BONSAI it!**: Transform existing projects to BONSAI style (requires double confirmation)
- **Bypass:**: Bypass BONSAI workflow and enable normal Claude Code behavior without dual-instance oversight

## Philosophy & Core Principles

**Main Principle**: Start minimal, grow only when needed. Every addition must be justified by actual project requirements.

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
- **BONSAI_IT_PROCESS.md** must be added to .gitignore when using "BONSAI it!"
- **User confirmation** provided after each task completion
- **Task tracking** ensures comprehensive workflow execution

All template rules and principles apply consistently.

## Backend/Frontend Structure Rules

### Structure Decision Hierarchy

When determining project structure for backend/frontend applications:

1. **User's Existing Structure** (if user wrote >60% of code)
   - Detect and document in CLAUDE.local.md
   - Preserve their organization patterns
   - Make minimal changes for compliance

2. **concept.md Specifications** (if defined)
   - Follow explicit structure guidelines
   - Example: "Use src/ for all source files"
   - Overrides BONSAI defaults

3. **BONSAI Minimal Structure** (default)
   - Start with single files
   - Split only when complexity demands
   - Feature-based, not type-based organization

### Structure Detection & Persistence

**CRITICAL**: Once a structure decision is recorded in CLAUDE.local.md, it MUST NOT be changed unless:
- No structure decision exists yet in CLAUDE.local.md
- User explicitly requests: "Change to BONSAI structure" or "Use structure from concept.md"

On first backend/frontend operation:
1. **Check CLAUDE.local.md FIRST** - If structure decision exists, use it
2. If no decision recorded:
   - Scan for existing structure patterns
   - Check concept.md for structure specifications  
   - Make decision based on hierarchy above
3. Document decision in CLAUDE.local.md:

```markdown
## Project Structure Decision
### Date: 2024-01-15
### Structure Type: [User Custom|concept.md|BONSAI]
### LOCKED: Do not change unless user explicitly requests

### Detected Pattern:
- Backend: [description]
- Frontend: [description]  
- Reasoning: [why this choice]

### Structure Rules:
- API endpoints: [location]
- Components: [location]
- Shared code: [location]
- Tests: [location]
```

### Environment Placement (BONSAI Style)

#### Single Technology Projects
```
project/
├── .venv/              # Python venv at root
├── node_modules/       # Node deps at root
├── main.py            # Or index.js
└── README.md
```

#### Full-Stack Projects - Progressive Evolution

**Stage 1: Both in Root (Start here)**
```
project/
├── .venv/              # Python backend env
├── node_modules/       # Frontend deps
├── backend.py          # Backend code
├── frontend.html       # Frontend code
├── package.json        # Frontend deps
├── pyproject.toml      # Backend deps
└── README.md
```

**Stage 2: Split When Needed (Only if conflicts)**
```
project/
├── backend/
│   ├── .venv/          # Python env
│   ├── main.py
│   └── pyproject.toml
├── frontend/
│   ├── node_modules/   # Node deps
│   ├── index.html
│   └── package.json
└── README.md
```

**Environment Rules**:
- Start with environments at project root
- Only move into subdirectories when actual conflicts occur
- Never create empty directory structures preemptively
- Document environment locations in CLAUDE.local.md

### BONSAI Default Structures

#### Progressive Backend Evolution (Python/FastAPI)
```
# Stage 1: Single file
main.py                 # Everything here

# Stage 2: Minimal split (>200 lines)
backend/
├── main.py            # Entry point & routes
└── models.py          # Data models

# Stage 3: Feature split (>500 lines)
backend/
├── main.py            # Entry point
├── api.py             # Routes/endpoints
├── models.py          # Data models
└── auth.py            # Only if auth complex
```

#### Progressive Frontend Evolution (React)
```
# Stage 1: Single file
index.html             # React inline

# Stage 2: Minimal split
frontend/
├── index.html  
├── app.js             # Extracted JS
└── styles.css         # Extracted CSS

# Stage 3: Component split (>3 components)
frontend/
├── index.html
├── App.jsx            # Main component
├── components/        # Feature components
│   ├── Auth.jsx
│   └── Dashboard.jsx
└── api.js             # API calls
```

#### Full-Stack Progressive Evolution
```
# Stage 1: Two files (Start here!)
project/
├── backend.py         # Entire backend
├── frontend.html      # Entire frontend
└── README.md

# Stage 2: Static assets extracted
project/
├── backend.py  
├── index.html  
├── static/
│   ├── app.js
│   └── styles.css
└── README.md

# Stage 3: Backend/Frontend split (only when truly needed)
project/
├── backend/
│   ├── .venv/         # Moved from root
│   ├── main.py
│   └── models.py
├── frontend/
│   ├── node_modules/  # Moved from root
│   ├── index.html
│   └── src/
│       └── App.jsx
└── README.md
```

### Anti-Patterns to Avoid

❌ **Premature Folder Structure**
```
src/
├── controllers/
├── models/
├── views/
├── utils/
├── helpers/
├── middleware/
├── services/
└── repositories/
```
*Why bad*: Empty folders, single-file folders, over-organization

✅ **BONSAI Approach**
```
api.py          # All endpoints here until it's too big
models.py       # All models here until it's too big
```

### When to Create Folders

Only create a folder when:
- You have 3+ files of similar purpose
- Files are clearly related by feature
- It improves code discovery
- It reduces naming conflicts

Examples:
- `auth_login.py`, `auth_register.py`, `auth_reset.py` → `auth/`
- `UserModel.js`, `PostModel.js`, `CommentModel.js` → `models/`

## Best Practices & Preferred Tools

### Python
- **Package Manager**: uv (replaces pip, pipenv, poetry)
- **Linter/Formatter**: ruff (replaces black, isort, flake8)
- **Type Checker**: pyright (only when needed)
- **Testing**: pytest + hypothesis (when complexity justifies)
- **Data Validation**: pydantic (type-safe data models and validation)
- **CLI Enhancement**: rich (beautiful terminal output, progress bars, logging)

#### Ruff Philosophy
Ruff should catch real errors and promote clean code, not enforce arbitrary restrictions:
- ✅ Catch actual bugs (undefined names, syntax errors)
- ✅ Promote cross-platform code (pathlib usage)
- ✅ Encourage modern Python (pyupgrade)
- ❌ Don't enforce arbitrary limits (line length, arg count)
- ❌ Don't require documentation everywhere
- ❌ Don't be dogmatic about style preferences

#### Minimal Ruff Configuration (pyproject.toml):
```toml
[tool.ruff]
line-length = 120
target-version = "py312"

[tool.ruff.lint]
select = [
    "E",  # pycodestyle errors
    "W",  # pycodestyle warnings
    "F",  # pyflakes
    "UP", # pyupgrade
    "B",  # flake8-bugbear
    "C4", # flake8-comprehensions
    "PIE", # flake8-pie
    "PTH", # flake8-use-pathlib
]

ignore = [
    "E501", # line too long (let formatter handle)
    "B008", # do not perform function calls in argument defaults
    "C901", # too complex
    "B904", # raise without from in except
]

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "auto"

[tool.ruff.lint.per-file-ignores]
"tests/*" = ["F401", "F811"]  # Allow unused imports in tests

[tool.pyright]
include = ["src"]
exclude = ["**/node_modules", "**/__pycache__"]
reportMissingImports = true
reportMissingTypeStubs = false
pythonVersion = "3.12"
typeCheckingMode = "basic"
useLibraryCodeForTypes = true
```

### JavaScript/React
- **Package Manager**: yarn (or pnpm for better performance)
- **Build Tool**: vite (always - not "when needed")
- **Framework**: React 18+ with TypeScript
- **State Management**: zustand (simpler than Redux)
- **Server State**: @tanstack/react-query
- **Formatter**: prettier
- **Linter**: eslint (minimal rules)
- **Testing**: vitest + @testing-library/react
- **Scripts**: Use `node scripts/build.js` not shell scripts

#### Vite Configuration (minimal):
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
```

#### TypeScript Configuration (when needed):
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

#### Prettier Configuration (.prettierrc):
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5"
}
```

#### ESLint Configuration (minimal):
```json
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

### Python Tool Examples

#### Pydantic Minimal Usage
```python
# When you need data validation beyond basic types
from pydantic import BaseModel, Field
from typing import Optional

class UserConfig(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    email: str = Field(pattern=r'^[^@]+@[^@]+\.[^@]+$')
    age: Optional[int] = Field(None, ge=0, le=150)

    class Config:
        # Automatic validation from dict/JSON
        extra = "forbid"  # Reject unknown fields

# Usage
config = UserConfig.model_validate({
    "name": "John",
    "email": "john@example.com",
    "age": 30
})
```

#### Rich Minimal Usage (BONSAI-Aligned)
```python
# BONSAI-styled CLI output using rich
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.table import Table
from rich.text import Text
import time

console = Console()

# BONSAI color palette (consistent with design system)
BONSAI_COLORS = {
    'green_primary': '#7c9885',    # Success, growth
    'blue_primary': '#82a4c7',     # Information, links
    'yellow_primary': '#c7a882',   # Warning, warmth
    'red_primary': '#c78289',      # Error, attention
    'purple_primary': '#9882c7',   # Special features
    'text_primary': '#e6e8eb',     # Main content
    'text_muted': '#8b92a5',       # Secondary text
}

# Zen-like messaging (no aggressive styling)
console.print("→ Processing data...", style=BONSAI_COLORS['info'])
console.print("✗ Error occurred", style=BONSAI_COLORS['error'])  # No "bold"
console.print("✓ Operation complete", style=BONSAI_COLORS['success'])

# Minimal progress indicator
with Progress(
    SpinnerColumn(),
    TextColumn("[progress.description]{task.description}"),
    transient=True,  # Disappears when done (minimal)
) as progress:
    task = progress.add_task("Processing...", total=100)
    for i in range(100):
        progress.update(task, advance=1)
        time.sleep(0.01)

# BONSAI-styled table (minimal, readable)
table = Table(title="Results", show_header=True, header_style=BONSAI_COLORS['primary'])
table.add_column("Task", style=BONSAI_COLORS['primary'], no_wrap=True)
table.add_column("Status", style=BONSAI_COLORS['muted'])

# Use BONSAI symbols and muted colors
table.add_row("Data processing", Text("✓ Complete", style=BONSAI_COLORS['success']))
table.add_row("Validation", Text("→ Running", style=BONSAI_COLORS['info']))
table.add_row("Cleanup", Text("⏳ Pending", style=BONSAI_COLORS['muted']))

console.print(table)
```

### Framework-Specific Minimal Structures

#### FastAPI Minimal
```python
# main.py - Everything in one file until complexity demands split
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

# Add more endpoints here
# Split to api.py when >10 endpoints
# Split to models.py when >3 models
```

#### Express Minimal
```javascript
// server.js - Everything in one file
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000)
// Split when file exceeds 200 lines
```

#### React Minimal
```html
<!-- index.html - Start with everything inline -->
<!DOCTYPE html>
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        function App() {
            return React.createElement('h1', null, 'Hello World')
        }
        ReactDOM.render(React.createElement(App), document.getElementById('root'))
    </script>
</body>
</html>
<!-- Extract to app.js when logic exceeds 50 lines -->
```

### Tool Introduction Triggers

#### **pytest**: Add when ANY of these complexity indicators are met:
- **Mathematical Logic**: Functions with calculations, formulas, or mathematical operations
- **Validation Logic**: Data validation, type checking, or error handling beyond simple checks
- **Class Methods**: Any class with 3+ methods or complex state management
- **Combinatorial Functions**: Functions generating combinations, permutations, or nested iterations
- **File I/O Operations**: JSON serialization, file loading, or data persistence
- **Edge Cases**: Functions that need testing with boundary conditions or invalid inputs
- **Configuration Logic**: Parameter configuration, sweep generation, or complex object creation

#### **pydantic**: Add when ANY of these data handling scenarios arise:
- **API Integration**: External APIs requiring structured data validation
- **Configuration Management**: Complex settings, environment variables, or config files
- **Data Models**: Classes representing business entities with validation rules
- **Type Safety**: Need runtime validation of data types beyond static type hints
- **Serialization**: JSON/dict conversion with automatic validation
- **Input Validation**: User input, file parsing, or data transformation pipelines

#### **rich**: Add when building CLI applications that need:
- **Progress Indicators**: Long-running operations, file processing, data migration
- **Structured Logging**: Better than print() for debugging and user feedback
- **Error Display**: Beautiful tracebacks and error formatting
- **Tables/Lists**: Displaying data in organized, readable formats
- **Interactive Elements**: Prompts, confirmations, or status displays
- **Professional CLI**: When your tool will be used by others or in production

#### **hypothesis**: Property-based testing for complex edge cases
- Add when pytest tests become repetitive for testing ranges
- Useful for testing mathematical functions with many possible inputs  
- **Trigger**: When you find yourself writing >5 similar test cases for the same function

#### **pre-commit**: Add when ANY of these collaboration indicators are met:
- **Repository has 4+ core files** (excluding configs like .gitignore, pyproject.toml)
- **Multiple contributors** working on the project
- **Production deployment** planned or active
- **Complex formatting rules** that must be enforced consistently
- **Security-sensitive code** that needs automatic scanning

#### **type hints**: Function used in 3+ places or has 3+ parameters

#### **docker**: Deployment or complex dependencies
#### **CI/CD**: Automated deployment or team collaboration

### Tool Addition Protocol
When adding new tools:
1. **Check Don'ts section** - User may have specified alternatives
2. **Start minimal** - Only essential configuration
3. **Document trigger** - Why was this tool added now?
4. **Update .gitignore** - Add tool-specific ignore patterns
5. **Record in CLAUDE.local.md** - Tool-specific environment behaviors

### Cross-Platform Considerations
- **Python**: Always use `pathlib.Path` over string concatenation
- **Node.js**: Use `path.join()` and avoid shell-specific commands in npm scripts
- **Scripts**: Prefer Node.js scripts over shell scripts for cross-platform compatibility
- **Environment**: Use `.env` files with consistent variable names across platforms

## Design Philosophy

**BONSAI design extends minimalism to the visual realm** - every pixel serves a purpose, every color conveys meaning, every interaction feels intentional.

### Core Design Principles

**Purposeful Aesthetics**: Like BONSAI code that does exactly what's needed, BONSAI interfaces show exactly what users need to see. No decorative elements, no visual noise - only purposeful design that guides attention naturally.

**Dark Zen Approach**: Eye-friendly dark themes that reduce fatigue and energy consumption. Interfaces should feel like meditation in motion - calming, focused, and effortless to use.

**Progressive Disclosure**: Start with essential information, reveal complexity only when needed. Like growing a bonsai tree, interfaces should unfold their capabilities gradually.

### BONSAI Color System

The BONSAI color palette provides a sophisticated, muted aesthetic designed for minimal interfaces and eye comfort. These colors apply to:
- **User Interfaces** (web, desktop, mobile)
- **Command Line Interfaces** and terminal output
- **Program logs and console output**
- **Data visualizations and charts**
- **Documentation and reports**

#### Background Colors
```css
--BONSAI_background_deep: #0a0e14;        /* Main application background, deepest layer */
--BONSAI_background_primary: #151922;     /* Primary containers, cards, panels */
--BONSAI_background_secondary: #1e242e;   /* Secondary containers, nested elements */
--BONSAI_background_elevated: #232933;    /* Elevated surfaces, dropdowns, tooltips */
--BONSAI_background_overlay: #2a3040;     /* Modal overlays, highest elevation */
```

#### Text Colors
```css
--BONSAI_text_primary: #e6e8eb;       /* Main headings, primary content */
--BONSAI_text_secondary: #b8bcc8;     /* Body text, secondary information */
--BONSAI_text_muted: #8b92a5;         /* Labels, captions, metadata */
--BONSAI_text_disabled: #6b7280;      /* Disabled text, inactive elements */
--BONSAI_text_inverted: #0a0e14;      /* Text on light backgrounds, buttons */
```

#### Border Colors
```css
--BONSAI_border_subtle: #2d3441;      /* Gentle separations, zen garden style */
--BONSAI_border_primary: #3d4455;     /* Standard borders */
--BONSAI_border_accent: #4a5568;      /* Hover states, focus indicators */
--BONSAI_border_strong: #5a6578;      /* Strong emphasis, active states */
```

#### Core Accent Colors

**Green Family (Nature, Growth, Success)**
```css
--BONSAI_green_primary: #7c9885;      /* Primary brand color, success states */
--BONSAI_green_secondary: #9db4a6;    /* Hover states, lighter accents */
--BONSAI_green_tertiary: #a8c0b1;     /* Subtle backgrounds, very light accents */
--BONSAI_green_muted: #677a70;        /* Darker variant, borders, inactive states */
--BONSAI_green_glow: rgba(124, 152, 133, 0.15); /* Alpha overlays */
```

**Red Family (Attention, Errors)**
```css
--BONSAI_red_primary: #c78289;        /* Error states, destructive actions */
--BONSAI_red_secondary: #d4999f;      /* Hover states, lighter error backgrounds */
--BONSAI_red_tertiary: #dfa8ad;       /* Very subtle error backgrounds */
--BONSAI_red_muted: #a56b71;          /* Darker variant, borders */
--BONSAI_red_glow: rgba(199, 130, 137, 0.15); /* Alpha overlays */
```

**Blue Family (Information, Links)**
```css
--BONSAI_blue_primary: #82a4c7;       /* Information states, links, cool accents */
--BONSAI_blue_secondary: #9bb5d4;     /* Hover states, lighter info backgrounds */
--BONSAI_blue_tertiary: #adc2db;      /* Very subtle info backgrounds */
--BONSAI_blue_muted: #6b8aa5;         /* Darker variant, borders */
--BONSAI_blue_glow: rgba(130, 164, 199, 0.15); /* Alpha overlays */
```

**Yellow Family (Warning, Warmth)**
```css
--BONSAI_yellow_primary: #c7a882;     /* Warning states, warm accents */
--BONSAI_yellow_secondary: #d4b99b;   /* Hover states, lighter warning backgrounds */
--BONSAI_yellow_tertiary: #dbc5ad;    /* Very subtle warning backgrounds */
--BONSAI_yellow_muted: #a5906b;       /* Darker variant, borders */
--BONSAI_yellow_glow: rgba(199, 168, 130, 0.15); /* Alpha overlays */
```

#### Extended Palette
```css
--BONSAI_purple_primary: #9882c7;     /* Creative elements, special features */
--BONSAI_orange_primary: #c7975c;     /* Notifications, energy, calls-to-action */
--BONSAI_teal_primary: #5cc7a8;       /* Fresh, modern accents, progress */
```

#### Semantic Aliases
```css
--BONSAI_success: var(--BONSAI_green_primary);
--BONSAI_success_bg: var(--BONSAI_green_glow);
--BONSAI_warning: var(--BONSAI_yellow_primary);
--BONSAI_warning_bg: var(--BONSAI_yellow_glow);
--BONSAI_error: var(--BONSAI_red_primary);
--BONSAI_error_bg: var(--BONSAI_red_glow);
--BONSAI_info: var(--BONSAI_blue_primary);
--BONSAI_info_bg: var(--BONSAI_blue_glow);
```

### Dark Zen UI Principles

**Visual Harmony**
- **Color Temperature**: Warm grays and sage greens create calm, meditative interfaces
- **Breathing Space**: Generous whitespace (2rem-3rem sections) prevents visual overwhelm
- **Gentle Transitions**: 0.3s ease transitions feel organic, not mechanical
- **Purposeful Glow**: Subtle shadows and glows guide attention naturally

**Unique Elements**
- **Quantum Metrics**: Status indicators with soft glows show system health
- **Organic Charts**: Data visualization that feels alive and responsive
- **Zen Controls**: Toggle switches and buttons that feel meditative to interact with
- **Terminal Zen**: Code display elevated beyond basic terminal styling

**Navigation Philosophy**
- **Zen Garden Separation**: Borders appear through light, not heavy lines
- **Progressive Disclosure**: Show essential, reveal advanced on interaction
- **Natural Grouping**: Related functions flow together like garden paths
- **Peaceful Hierarchy**: No shouting colors or aggressive visual weight

### Typography Guidelines

**Font Selection**
- **Primary**: Quicksand (300-600 weights) - unique yet readable, modern minimalism
- **Code**: JetBrains Mono (300-500 weights) - optimized for developer comfort
- **Line Height**: 1.6-1.7 for comfortable reading
- **Letter Spacing**: Subtle (0.02em-0.1em) for breathing room

**Hierarchy**
- **Headings**: font-weight: 300-500 (never bold unless necessary)
- **Body**: font-weight: 400, comfortable contrast
- **Captions**: font-weight: 300, muted colors
- **Code**: monospace, slightly smaller than body text

### Layout Principles

**Spacing System**
- **Base Unit**: 8px
- **Common Increments**: 8, 16, 24, 32, 48, 64px
- **Container Padding**: 2rem (32px) minimum
- **Section Gaps**: 3rem (48px) for clear separation

**Component Design**
- **Border Radius**: 6-16px for modern softness
- **Card Elevation**: Subtle 1px borders, minimal shadows
- **Interactive States**: Transform: translateY(-1px) for lift effect
- **Focus Indicators**: BONSAI_green_primary with soft glow

### Interface Design Examples

The following design examples demonstrate BONSAI principles in action. **These are inspirational templates only** - your actual implementation may be:
- **Any technology**: HTML, React, Vue, Qt, Flutter, SwiftUI, etc.
- **Any layout**: Single page, multi-page, desktop app, mobile app
- **Any navigation**: Sidebar, top nav, tabs, drawer, etc.
- **Any components**: The specific buttons, forms, and widgets depend on your project needs

**The examples show the aesthetic and principles, not prescriptive layouts.**

#### Example 1: Quantum Dashboard
**Concept**: Real-time system monitoring with crystalline clarity
- **Metric Cards**: Elevated surfaces with subtle status indicators
- **Zen Terminal**: Mac-style window chrome with color-coded logs
- **Breathing Layout**: Generous spacing prevents visual stress
- **Status Indicators**: Soft glowing dots instead of harsh icons

#### Example 2: Organic Data Flow
**Concept**: Living data visualization that breathes with your metrics
- **Organic Charts**: Data bars that feel alive and responsive
- **Pill Controls**: Rounded selection buttons with smooth transitions
- **Gradient Overlays**: Subtle visual interest without distraction
- **Hover Interactions**: Gentle lift effects and soft glows

#### Example 3: Zen Control Center
**Concept**: Intuitive system controls that feel like meditation in motion
- **Toggle Switches**: Smooth, satisfying interactions
- **Grouped Sections**: Related controls flow together naturally
- **Descriptive Labels**: Clear purpose for every setting
- **Action Buttons**: Primary/secondary hierarchy with gentle elevation

#### CLI and Program Output Styling

**Terminal Color Usage**
```bash
# Success messages - use BONSAI_green_primary
echo -e "\033[38;2;124;152;133m✓ Operation completed successfully\033[0m"

# Warning messages - use BONSAI_yellow_primary  
echo -e "\033[38;2;199;168;130m⚠ Warning: High memory usage detected\033[0m"

# Error messages - use BONSAI_red_primary
echo -e "\033[38;2;199;130;137m✗ Error: Connection failed\033[0m"

# Info messages - use BONSAI_blue_primary
echo -e "\033[38;2;130;164;199m→ Processing request...\033[0m"

# Muted text - use BONSAI_text_muted
echo -e "\033[38;2;139;146;165m[2025-06-11 14:32:15]\033[0m"
```

**Log File Formatting**
- Use BONSAI colors for log levels
- Maintain readability in both terminals and log viewers
- Apply consistent timestamp formatting
- Use symbols (✓ ⚠ ✗ →) for quick visual scanning

### BONSAI Matplotlib Theme

For Python data visualization projects, use the BONSAI matplotlib theme to create charts that align with the design philosophy.

#### Quick Setup

**Option 1: Direct Style Application**
```python
import matplotlib.pyplot as plt
import matplotlib as mpl

# BONSAI matplotlib configuration
BONSAI_STYLE = {
    # Figure and background
    'figure.facecolor': '#0a0e14',
    'figure.edgecolor': '#0a0e14',
    'figure.figsize': [10, 6],
    'figure.dpi': 100,
    'savefig.facecolor': '#0a0e14',
    'savefig.edgecolor': '#0a0e14',
    'savefig.dpi': 300,

    # Axes styling
    'axes.facecolor': '#151922',
    'axes.edgecolor': '#2d3441',
    'axes.linewidth': 1.0,
    'axes.grid': True,
    'axes.axisbelow': True,
    'axes.labelcolor': '#e6e8eb',
    'axes.labelsize': 11,
    'axes.titlesize': 14,
    'axes.titleweight': 'normal',
    'axes.titlecolor': '#e6e8eb',
    'axes.spines.left': True,
    'axes.spines.bottom': True,
    'axes.spines.top': False,
    'axes.spines.right': False,

    # Grid styling
    'grid.color': '#2d3441',
    'grid.linestyle': '-',
    'grid.linewidth': 0.5,
    'grid.alpha': 0.6,

    # Ticks
    'xtick.color': '#b8bcc8',
    'xtick.labelsize': 9,
    'xtick.direction': 'out',
    'xtick.major.size': 4,
    'xtick.minor.size': 2,
    'ytick.color': '#b8bcc8',
    'ytick.labelsize': 9,
    'ytick.direction': 'out',
    'ytick.major.size': 4,
    'ytick.minor.size': 2,

    # Legend
    'legend.facecolor': '#1e242e',
    'legend.edgecolor': '#2d3441',
    'legend.fontsize': 9,
    'legend.framealpha': 0.95,
    'legend.fancybox': True,
    'legend.shadow': False,

    # Lines and markers
    'lines.linewidth': 2.0,
    'lines.markersize': 6,
    'lines.markeredgewidth': 0,

    # Font settings (fallback to system fonts if Quicksand not available)
    'font.family': ['Quicksand', 'DejaVu Sans', 'Liberation Sans', 'Arial', 'sans-serif'],
    'font.size': 10,
    'font.weight': 'normal',

    # Text
    'text.color': '#e6e8eb',

    # Patch (bars, areas, etc.)
    'patch.linewidth': 0.5,
    'patch.facecolor': '#7c9885',
    'patch.edgecolor': '#677a70',
    'patch.force_edgecolor': False,
}

# Apply the style
plt.rcParams.update(BONSAI_STYLE)
```

**Option 2: Style File (.mplstyle)**
Save as `bonsai.mplstyle` in your project or matplotlib config directory:
```
# BONSAI matplotlib style
figure.facecolor: 0a0e14
figure.edgecolor: 0a0e14
figure.figsize: 10, 6
figure.dpi: 100
savefig.facecolor: 0a0e14
savefig.edgecolor: 0a0e14
savefig.dpi: 300

axes.facecolor: 151922
axes.edgecolor: 2d3441
axes.linewidth: 1.0
axes.grid: True
axes.axisbelow: True
axes.labelcolor: e6e8eb
axes.labelsize: 11
axes.titlesize: 14
axes.titleweight: normal
axes.titlecolor: e6e8eb
axes.spines.left: True
axes.spines.bottom: True
axes.spines.top: False
axes.spines.right: False

grid.color: 2d3441
grid.linestyle: -
grid.linewidth: 0.5
grid.alpha: 0.6

xtick.color: b8bcc8
xtick.labelsize: 9
xtick.direction: out
xtick.major.size: 4
xtick.minor.size: 2
ytick.color: b8bcc8
ytick.labelsize: 9
ytick.direction: out
ytick.major.size: 4
ytick.minor.size: 2

legend.facecolor: 1e242e
legend.edgecolor: 2d3441
legend.fontsize: 9
legend.framealpha: 0.95
legend.fancybox: True
legend.shadow: False

lines.linewidth: 2.0
lines.markersize: 6
lines.markeredgewidth: 0

font.family: Quicksand, DejaVu Sans, Liberation Sans, Arial, sans-serif
font.size: 10
font.weight: normal

text.color: e6e8eb

patch.linewidth: 0.5
patch.facecolor: 7c9885
patch.edgecolor: 677a70
patch.force_edgecolor: False
```

Then use: `plt.style.use('bonsai')`

#### BONSAI Color Palettes

```python
# BONSAI color palettes for matplotlib
BONSAI_COLORS = {
    # Primary accent colors
    'green_primary': '#7c9885',
    'red_primary': '#c78289',
    'blue_primary': '#82a4c7',
    'yellow_primary': '#c7a882',
    'purple_primary': '#9882c7',
    'orange_primary': '#c7975c',
    'teal_primary': '#5cc7a8',

    # Secondary variants
    'green_secondary': '#9db4a6',
    'red_secondary': '#d4999f',
    'blue_secondary': '#9bb5d4',
    'yellow_secondary': '#d4b99b',

    # Muted variants
    'green_muted': '#677a70',
    'red_muted': '#a56b71',
    'blue_muted': '#6b8aa5',
    'yellow_muted': '#a5906b',

    # Text colors
    'text_primary': '#e6e8eb',
    'text_secondary': '#b8bcc8',
    'text_muted': '#8b92a5',
}

# Create color lists for different chart types
BONSAI_QUALITATIVE = [
    '#7c9885',  # green_primary
    '#82a4c7',  # blue_primary
    '#c7a882',  # yellow_primary
    '#c78289',  # red_primary
    '#9882c7',  # purple_primary
    '#c7975c',  # orange_primary
    '#5cc7a8',  # teal_primary
]

BONSAI_SEQUENTIAL_GREEN = [
    '#677a70',  # green_muted
    '#7c9885',  # green_primary
    '#9db4a6',  # green_secondary
    '#a8c0b1',  # green_tertiary
]

BONSAI_DIVERGING = [
    '#c78289',  # red_primary
    '#d4999f',  # red_secondary
    '#8b92a5',  # text_muted (neutral)
    '#9bb5d4',  # blue_secondary
    '#82a4c7',  # blue_primary
]

# Register custom colormaps
from matplotlib.colors import LinearSegmentedColormap

# BONSAI Green colormap
bonsai_green_cmap = LinearSegmentedColormap.from_list(
    'bonsai_green', BONSAI_SEQUENTIAL_GREEN, N=256
)
plt.register_cmap('bonsai_green', bonsai_green_cmap)

# BONSAI Diverging colormap
bonsai_div_cmap = LinearSegmentedColormap.from_list(
    'bonsai_diverging', BONSAI_DIVERGING, N=256
)
plt.register_cmap('bonsai_diverging', bonsai_div_cmap)
```

#### Usage Examples

**Basic Line Plot**
```python
import numpy as np
import matplotlib.pyplot as plt

# Apply BONSAI style
plt.rcParams.update(BONSAI_STYLE)

# Sample data
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Create plot
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x, y1, color=BONSAI_COLORS['green_primary'], label='sin(x)', linewidth=2)
ax.plot(x, y2, color=BONSAI_COLORS['blue_primary'], label='cos(x)', linewidth=2)

ax.set_title('BONSAI Style Line Plot', fontsize=16, pad=20)
ax.set_xlabel('X Values')
ax.set_ylabel('Y Values')
ax.legend()

plt.tight_layout()
plt.show()
```

**Multi-series Bar Chart**
```python
# Sample data
categories = ['Category A', 'Category B', 'Category C', 'Category D']
values1 = [23, 45, 56, 78]
values2 = [65, 43, 32, 56]

x = np.arange(len(categories))
width = 0.35

fig, ax = plt.subplots(figsize=(10, 6))

# Use BONSAI colors
bars1 = ax.bar(x - width/2, values1, width,
               color=BONSAI_COLORS['green_primary'],
               label='Series 1', alpha=0.9)
bars2 = ax.bar(x + width/2, values2, width,
               color=BONSAI_COLORS['blue_primary'],
               label='Series 2', alpha=0.9)

ax.set_title('BONSAI Style Bar Chart', fontsize=16, pad=20)
ax.set_xlabel('Categories')
ax.set_ylabel('Values')
ax.set_xticks(x)
ax.set_xticklabels(categories)
ax.legend()

plt.tight_layout()
plt.show()
```

**Heatmap with Custom Colormap**
```python
import seaborn as sns

# Sample correlation matrix
data = np.random.randn(10, 10)
corr_matrix = np.corrcoef(data)

fig, ax = plt.subplots(figsize=(8, 8))

# Use BONSAI diverging colormap
heatmap = ax.imshow(corr_matrix, cmap='bonsai_diverging', aspect='auto')
ax.set_title('BONSAI Style Heatmap', fontsize=16, pad=20)

# Add colorbar
cbar = plt.colorbar(heatmap, ax=ax)
cbar.ax.yaxis.set_tick_params(color=BONSAI_COLORS['text_secondary'])

plt.tight_layout()
plt.show()
```

**Subplot Dashboard**
```python
# Create a dashboard-style layout
fig = plt.figure(figsize=(15, 10))
fig.suptitle('BONSAI Data Dashboard', fontsize=20, y=0.98)

# Line plot
ax1 = plt.subplot(2, 2, 1)
x = np.linspace(0, 10, 50)
y = np.sin(x) + np.random.normal(0, 0.1, 50)
ax1.plot(x, y, color=BONSAI_COLORS['green_primary'], linewidth=2, alpha=0.8)
ax1.fill_between(x, y, alpha=0.3, color=BONSAI_COLORS['green_primary'])
ax1.set_title('Time Series Data')
ax1.set_ylabel('Values')

# Bar chart
ax2 = plt.subplot(2, 2, 2)
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]
bars = ax2.bar(categories, values, color=BONSAI_QUALITATIVE[:len(categories)])
ax2.set_title('Category Distribution')
ax2.set_ylabel('Count')

# Scatter plot
ax3 = plt.subplot(2, 2, 3)
x_scatter = np.random.randn(100)
y_scatter = x_scatter + np.random.randn(100) * 0.5
scatter = ax3.scatter(x_scatter, y_scatter,
                     c=y_scatter, cmap='bonsai_green',
                     alpha=0.7, s=50)
ax3.set_title('Correlation Analysis')
ax3.set_xlabel('Variable X')
ax3.set_ylabel('Variable Y')

# Pie chart with BONSAI colors
ax4 = plt.subplot(2, 2, 4)
sizes = [30, 25, 20, 15, 10]
labels = ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5']
wedges, texts, autotexts = ax4.pie(sizes, labels=labels, autopct='%1.1f%%',
                                  colors=BONSAI_QUALITATIVE[:len(sizes)],
                                  textprops={'color': BONSAI_COLORS['text_primary']})
ax4.set_title('Market Share')

plt.tight_layout(rect=[0, 0.03, 1, 0.95])
plt.show()
```

#### Utility Functions

```python
def apply_bonsai_style():
    """Quick function to apply BONSAI styling to matplotlib."""
    plt.rcParams.update(BONSAI_STYLE)

def bonsai_color(name):
    """Get BONSAI color by name."""
    return BONSAI_COLORS.get(name, BONSAI_COLORS['green_primary'])

def set_bonsai_palette(ax, palette_type='qualitative'):
    """Set color cycle for axes using BONSAI colors."""
    if palette_type == 'qualitative':
        ax.set_prop_cycle(color=BONSAI_QUALITATIVE)
    elif palette_type == 'green':
        ax.set_prop_cycle(color=BONSAI_SEQUENTIAL_GREEN)
    elif palette_type == 'diverging':
        ax.set_prop_cycle(color=BONSAI_DIVERGING)

def save_bonsai_plot(filename, dpi=300, bbox_inches='tight',
                     facecolor='#0a0e14', edgecolor='none'):
    """Save plot with BONSAI styling optimized for dark backgrounds."""
    plt.savefig(filename, dpi=dpi, bbox_inches=bbox_inches,
                facecolor=facecolor, edgecolor=edgecolor)

# Example usage
def create_bonsai_figure(figsize=(10, 6)):
    """Create a figure with BONSAI styling applied."""
    apply_bonsai_style()
    fig, ax = plt.subplots(figsize=figsize)
    set_bonsai_palette(ax)
    return fig, ax
```

#### Integration Example

```python
# Complete example: BONSAI-styled analysis report
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Apply BONSAI theme
apply_bonsai_style()

# Sample data
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=100, freq='D')
values = np.cumsum(np.random.randn(100)) + 100
categories = ['Product A', 'Product B', 'Product C', 'Product D']
cat_values = np.random.randint(20, 100, len(categories))

# Create comprehensive report
fig = plt.figure(figsize=(16, 12))
fig.suptitle('Monthly Performance Report',
             fontsize=24, fontweight='normal', y=0.95)

# Main time series (takes up top half)
ax1 = plt.subplot(2, 2, (1, 2))
ax1.plot(dates, values, color=BONSAI_COLORS['green_primary'],
         linewidth=2.5, alpha=0.9)
ax1.fill_between(dates, values, alpha=0.2,
                color=BONSAI_COLORS['green_primary'])
ax1.set_title('Performance Trend Over Time', fontsize=16, pad=15)
ax1.set_ylabel('Performance Metric')
ax1.grid(True, alpha=0.3)

# Category breakdown
ax2 = plt.subplot(2, 2, 3)
bars = ax2.bar(categories, cat_values,
               color=BONSAI_QUALITATIVE[:len(categories)], alpha=0.9)
ax2.set_title('Category Performance', fontsize=16, pad=15)
ax2.set_ylabel('Value')
ax2.tick_params(axis='x', rotation=45)

# Distribution analysis
ax3 = plt.subplot(2, 2, 4)
hist_data = np.random.normal(50, 15, 1000)
n, bins, patches = ax3.hist(hist_data, bins=20,
                           color=BONSAI_COLORS['blue_primary'],
                           alpha=0.8, edgecolor='none')
ax3.set_title('Value Distribution', fontsize=16, pad=15)
ax3.set_xlabel('Value Range')
ax3.set_ylabel('Frequency')

plt.tight_layout(rect=[0, 0.03, 1, 0.92])

# Save with BONSAI styling
save_bonsai_plot('bonsai_report.png')
plt.show()
```

The BONSAI matplotlib theme ensures that all data visualizations maintain the same sophisticated, eye-friendly aesthetic as the rest of your project. The dark background reduces eye strain during long analysis sessions, while the carefully chosen accent colors provide clear visual hierarchy without being overwhelming.

### BONSAI Rich Console Integration

For Python projects using the Rich library for console output, apply the BONSAI color palette to maintain visual consistency between data visualizations and console logging.

#### Rich Console Setup

**BONSAI Color Palette for Rich**
```python
from rich.console import Console
from rich.logging import RichHandler
from rich.panel import Panel

# BONSAI color palette for Rich console output
BONSAI_COLORS = {
    'green_primary': '#7c9885',
    'red_primary': '#c78289',
    'blue_primary': '#82a4c7',
    'yellow_primary': '#c7a882',
    'purple_primary': '#9882c7',
    'orange_primary': '#c7975c',
    'teal_primary': '#5cc7a8',
    'text_primary': '#e6e8eb',
    'text_secondary': '#b8bcc8',
    'text_muted': '#8b92a5',
}
```

**Rich Logging Integration**
```python
# Apply BONSAI colors to Rich logging
console_handler = RichHandler(
    console=Console(),
    show_time=True,
    show_path=False,
    rich_tracebacks=True,
    markup=True,
    keywords=[
        f"[bold {BONSAI_COLORS['red_primary']}]ERROR[/]",
        f"[bold {BONSAI_COLORS['yellow_primary']}]WARNING[/]",
        f"[bold {BONSAI_COLORS['green_primary']}]INFO[/]",
        f"[bold {BONSAI_COLORS['blue_primary']}]DEBUG[/]",
        f"[bold {BONSAI_COLORS['purple_primary']}]SCPI[/]",
    ],
)
```

**Rich Panel Styling**
```python
# BONSAI-styled Rich panels
def create_bonsai_panel(content, title):
    return Panel(
        content,
        title=f"[bold {BONSAI_COLORS['green_primary']}]{title}[/bold {BONSAI_COLORS['green_primary']}]",
        border_style=BONSAI_COLORS['green_primary'],
    )

# Usage with BONSAI colors
console = Console()
session_info = ""
for key, value in data.items():
    session_info += f"[bold {BONSAI_COLORS['blue_primary']}]{key}:[/bold {BONSAI_COLORS['blue_primary']}] {value}\n"

panel = create_bonsai_panel(session_info.strip(), "System Information")
console.print(panel)
```

The BONSAI Rich console integration ensures that terminal output, logging messages, and panels use the same sophisticated color palette as data visualizations, creating a cohesive professional experience.

### Implementation Guidelines

**When Creating Interfaces**
1. **Start with content structure** - what information is essential?
2. **Apply BONSAI colors** - use the palette consistently
3. **Add generous spacing** - let the interface breathe
4. **Implement gentle interactions** - subtle hover effects and transitions
5. **Test in dark environments** - ensure comfort during extended use

**When Building CLIs**
1. **Use semantic colors** - green for success, red for errors, etc.
2. **Apply BONSAI Rich integration** - if using Rich library, apply BONSAI color palette
3. **Provide clear visual hierarchy** - timestamps, levels, messages
4. **Include progress indicators** - use BONSAI_green_primary for progress
5. **Make errors scannable** - use consistent symbols and colors

**When Designing Data Views**
1. **Prioritize readability** - data should be instantly comprehensible
2. **Use muted accent colors** - let the data be the hero
3. **Provide contextual information** - trends, comparisons, metadata
4. **Enable progressive disclosure** - summary → details → full data

**When Creating Data Visualizations**
1. **Apply BONSAI matplotlib theme** - consistent with UI design language
2. **Use semantic color palettes** - qualitative for categories, sequential for continuous data
3. **Maintain dark background aesthetic** - reduces eye strain during analysis
4. **Create publication-ready outputs** - professional quality for reports and presentations

### Remember

**BONSAI design is about intention, not restriction.** Every color choice, every spacing decision, every interaction should serve the user's goal. The interface should feel like a natural extension of the minimal, purposeful code underneath.

Like a carefully pruned bonsai tree, BONSAI interfaces reveal their beauty through what's left out as much as what's included.

The updated CLAUDE.md now provides developers with a complete visual language that matches the minimal, purposeful approach of BONSAI code. Whether building web apps, desktop software, mobile apps, command-line tools, or data analysis reports, teams can create interfaces that feel cohesive, professional, and meditative to use.

**BONSAI integration covers:**
- **Matplotlib**: Dark zen themes and sophisticated color palettes for data visualization
- **Rich Console**: BONSAI colors for logging, panels, and terminal output
- **UI Frameworks**: Design principles and color systems for web and desktop applications

## 🌱 BONSAI it! - Transform Existing Projects

**BONSAI it!** is a powerful transformation command that retrofits existing projects with BONSAI principles while minimizing disruption. Unlike PROJECT-TRANSFER.md which completely rewrites projects, "BONSAI it!" makes surgical changes to align with BONSAI philosophy.

### Command Activation

When user types exactly: **"BONSAI it!"**

### ⚠️ MANDATORY WARNING PROTOCOL

**BEFORE ANY EXECUTION**, display this warning and require DOUBLE confirmation:

```
🚨 BONSAI TRANSFORMATION WARNING 🚨

This process will modify your project to align with BONSAI principles:

POTENTIAL IMPACTS:
⚠️ CRITICAL CHANGES:
  • Tool replacements (e.g., black → ruff, npm → yarn)
  • Directory restructuring
  • Design system overhaul
  • Configuration file modifications

⚠️ RISKS:
  • Loss of functionality if incompatible patterns exist
  • Changed build processes
  • Different design language
  • Modified development workflows

⚠️ BACKUP RECOMMENDATION:
  • Commit all changes before proceeding
  • Ensure you have a recent backup
  • Consider testing on a branch first

Type "I understand and want to proceed" to continue.
```

After first confirmation:
```
⚠️ FINAL CONFIRMATION REQUIRED ⚠️
This action cannot be automatically undone.
Type "BONSAI transform my project" to begin transformation.
```

### Transformation Process

The process executes in three systematic phases:

#### Phase 1: Concept Alignment
1. **Backup Creation**
   ```
   - Create concept.md.bonsai_backup_[timestamp]
   - Store original for rollback reference
   ```

2. **Concept.md Analysis & Modification**
   - **REMOVE**: Directory structures, tooling choices, design specifications
   - **PRESERVE**: Project-specific requirements (e.g., scikit-rf, chess engines)
   - **ADD**: References to BONSAI guidelines in CLAUDE.md

   Example transformation:
   ```markdown
   <!-- BEFORE -->
   ## Project Structure
   src/
   ├── components/
   ├── controllers/
   └── utils/

   ## Tools
   - Formatter: black
   - UI: Material-UI

   <!-- AFTER -->
   ## Project Structure
   See BONSAI structure guidelines in CLAUDE.md

   ## Tools  
   See BONSAI tool standards in CLAUDE.md
   Additional project-specific tools:
   - scikit-rf (RF circuit analysis)
   ```

3. **Tool Migration Mapping**
   ```
   Common Replacements:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   black + isort + flake8 → ruff
   Material-UI → BONSAI design + Tailwind
   Redux → zustand  
   webpack → vite
   npm → yarn/pnpm
   unittest → pytest
   Prettier (aggressive) → Prettier (minimal config)
   matplotlib (default theme) → BONSAI matplotlib theme
   rich (default colors) → BONSAI rich color palette
   ```

#### Phase 2: Directory Reconstruction

**Progressive Structure Migration**:

1. **Detect Current Structure**
   - Analyze existing organization
   - Identify framework patterns
   - Map file relationships

2. **Apply BONSAI Progressive Structure**
   ```
   # Example: Overly complex structure
   BEFORE:                      AFTER:
   src/                         backend.py
   ├── api/                     frontend.html
   │   ├── routes/             README.md
   │   ├── middleware/
   │   └── controllers/
   ├── models/
   ├── services/
   └── utils/
   ```

3. **Update Path References**
   - Fix imports
   - Update config files
   - Maintain functionality

#### Phase 3: Deep Integration

1. **Design System Migration**
   - Replace color schemes with BONSAI palette
   - Update component styling
   - Apply Dark Zen principles
   - **If matplotlib detected**: Apply BONSAI matplotlib theme and color palettes
   - **If rich library detected**: Apply BONSAI colors to console logging and panels

2. **Tooling Updates**
   - Install BONSAI-preferred tools
   - Create minimal configurations
   - Update package.json/pyproject.toml scripts

3. **Code Adjustments**
   - Update formatter/linter configs
   - Apply BONSAI code style
   - Remove unnecessary abstractions
   - **If matplotlib used**: Replace default styling with BONSAI theme application
   - **If rich used**: Update console colors and panel styling with BONSAI palette

### Process Documentation

**BONSAI_IT_PROCESS.md** (auto-generated, add to .gitignore):

```markdown
# BONSAI Transformation Report
Generated: [timestamp]
Original Request: "BONSAI it!"

## Compatibility Analysis
- Framework: [detected framework]
- Matplotlib usage: [YES/NO - files using matplotlib]
- Rich library usage: [YES/NO - files using rich console/logging]
- Data visualization patterns: [count of .py files with plt/matplotlib imports]
- Console output patterns: [count of .py files with rich imports]
- Complexity: [LOW/MEDIUM/HIGH]
- Risk Assessment: [details]

## Phase 1: Concept Alignment
### Backup Created
- concept.md → concept.md.bonsai_backup_[timestamp]

### Modifications
- Removed: [list of removed sections]
- Preserved: [project-specific tools/requirements]
- Added: BONSAI references

## Phase 2: Directory Reconstruction  
### Structure Changes
BEFORE:
[tree output]

AFTER:
[tree output]

### Path Updates
- Updated imports: [count]
- Fixed references: [count]
- Maintained functionality: [YES/NO]

## Phase 3: Deep Integration
### Tool Migrations
- black → ruff ✓
- Material-UI → BONSAI design ✓
- matplotlib → BONSAI matplotlib theme ✓
- rich → BONSAI rich color palette ✓
- [other migrations]

### Design Updates
- Colors migrated: [count]
- Components updated: [count]
- Matplotlib theme applied: [YES/NO/N/A]
- Rich console colors applied: [YES/NO/N/A]
- BONSAI color palettes integrated: [YES/NO/N/A]
- Styling aligned: [YES/NO]

### Issues Requiring Attention
⚠️ MANUAL INTERVENTION NEEDED:
- [Issue 1: description and suggested fix]
- [Issue 2: description and suggested fix]

### Verification Results
- Build: [PASS/FAIL]
- Tests: [X/Y passing]
- Linting: [CLEAN/X issues]

## Rollback Instructions
If you need to undo this transformation:
1. Restore concept.md from concept.md.bonsai_backup_[timestamp]
2. Review file changes in git
3. Restore previous tool configurations

## Summary
✅ Successfully Transformed:
- Files modified: [count]
- Tools migrated: [count]  
- Structure aligned: [YES/NO]

⚠️ Requires Attention:
- [List of manual fixes needed]

🌱 Welcome to the BONSAI garden!
Your project has been thoughtfully cultivated to grow with minimal, purposeful intention.

[BONSAI seed symbol]
```

### Advanced Options

**Partial Transformations** (when specified):
- `BONSAI it! --tooling`: Only update development tools
- `BONSAI it! --structure`: Only reorganize directories  
- `BONSAI it! --design`: Only update visual styling

### Exclusions

**.bonsai-ignore** file support:
```
# Legacy code to preserve
legacy/
vendor/

# Generated files
*.generated.js
*_pb2.py

# Third-party integrations
external-api-wrapper.js
```

### Critical Implementation Rules

1. **Highest Priority**: Keep the application functional
   - If functionality would break, document it instead of changing
   - Preserve business logic completely
   - Test after each phase

2. **Progressive Enhancement**
   - Start with least disruptive changes
   - Build confidence with each phase
   - Allow stopping between phases

3. **Documentation First**
   - Every change logged in BONSAI_IT_PROCESS.md
   - Clear rollback instructions
   - Known issues highlighted

4. **Smart Detection**
   - Recognize meta-frameworks (Next.js, Django, etc.)
   - Identify CI/CD dependencies
   - Check for hard tool dependencies

### Implementation Within BONSAI Workflow

When "BONSAI it!" is triggered, it executes WITHIN the standard 18-task workflow:
- Task 0-3: Analysis and planning specific to transformation
- Task 4: Execute Phase 1 (Concept Alignment)
- Task 5-7: Execute Phase 2 (Directory Reconstruction)
- Task 8-11: Execute Phase 3 (Deep Integration)
- Task 12-17: Verification and documentation

The command follows all BONSAI workflow rules while performing its specific transformation logic.
