---
name: bonsai
description: >
  Adaptive development workflow with 10 tasks and 3 modes (Grow/Shape/Prune).
  Supports `--tdd` flag for test-driven development (tracer-bullet inner loop:
  one failing test → minimal code → next test). Use this skill whenever the user
  wants structured, systematic development — new features, bug fixes, refactoring,
  or any code change that benefits from planning, testing, linting, and cleanup.
  Trigger on /bonsai, /bonsai --tdd, or when the user explicitly asks for "the
  BONSAI workflow" or "full workflow".
---

# BONSAI Adaptive Development Workflow

You are executing the BONSAI structured development workflow. This is a systematic, evidence-based process that ensures every change is planned, implemented, verified, tested, and cleaned up.

## How It Works

The workflow has **10 tasks** organized into **3 adaptive modes**. The mode is selected in Task 1 based on the scope of changes, but the user can override it.

| Mode | Tasks | When to Use |
|------|-------|-------------|
| **Grow** | 1-10 (all) | New features, new files, new dependencies, significant additions |
| **Shape** | 1, 2, 3, 4, 5, 7, 10 | Bug fixes, small modifications to existing code |
| **Prune** | 1, 2, 3, 5, 8 | Documentation-only or config-only changes |

## Before Starting

1. **Read CLAUDE.local.md** if it exists — check for a `## BONSAI Workflow Customization` section with overrides like `skip_precommit: true`, `skip_concept_alignment: true`, or `test_framework: vitest`.
2. **Use TaskCreate** to create all tasks for the selected mode at the start. Use TaskUpdate to mark each as `in_progress` when starting and `completed` when done.
3. **Execute continuously** — after completing each task, immediately proceed to the next. Never stop to ask the user between tasks unless you hit a genuine blocker.

## The Request

$ARGUMENTS

---

## Task 1: Plan and Scope

Determine what needs to happen and select the appropriate mode.

1. Analyze the user's request — what are they asking for?
2. Read `concept.md` if it exists — understand project goals and constraints
3. **Classify the mode**:
   - Changes add new files, public interfaces, or dependencies → **Grow**
   - Changes modify existing code without new files/interfaces → **Shape**
   - Changes touch only `.md`, `.json`, `.toml`, `.yaml`, `.gitignore`, config → **Prune**
   - User says "use full workflow" → **Grow** regardless
   - User says "this is just a prune" → **Prune** regardless
   - **User passes `--tdd` flag** → activate TDD mode on top of the chosen mode (see "TDD Mode" below)
4. Identify all files to modify/create. **In TDD mode**: also produce a prioritized list of *behaviors to test* (e.g. "user can checkout with valid cart", "checkout fails with empty cart") — not just file names. The behavior list drives the inner loop.
5. Verify BONSAI tools are available (only if code files involved):
   - Python: `uv --version` (never pip/pipenv/poetry)
   - Python dev tools: `uv run ruff --version && uv run ty --version` — if missing, run `uv add --dev ruff ty`
   - Python testing: `uv run pytest --version` — if missing, run `uv add --dev pytest`
   - JavaScript: `bun --version` (never npm/yarn/pnpm)
6. **Read `CLEANUP.md`** if it exists — you must Read before you can Edit it later. If it doesn't exist, you'll Write it fresh.
7. Create or update `CLEANUP.md` with new session timestamp

Output: State the selected mode and task list clearly. If `--tdd` is active, say so explicitly.

### TDD Mode (`--tdd` flag)

When `--tdd` is active, Tasks 3 and 7 fuse into a single **inner loop driven by the behavior list from Task 1**. For each behavior, in priority order:

1. **Write ONE failing test** that exercises the behavior via the *public interface* (never private methods or internal state).
2. Run the test → confirm it fails for the *right reason* (RED).
3. Write the **minimal** code that makes it pass (GREEN). No extra functionality, no anticipating future tests.
4. Optional: refactor while keeping the test green. Tests must stay green throughout.
5. Run `uv run ruff format <file> && uv run ruff check --fix <file>` (or `bun run biome check --write <file>`) on the changed files — *now*, not at the end.
6. Move to the next behavior.

**Hard constraints:**
- **Never write two tests without implementing each between them.** That is horizontal slicing — it produces tests that describe imagined behavior, not actual behavior. Stop, write the code for test 1, then write test 2.
- **Tests test behavior via public interfaces.** If your test breaks when you rename a private function, the test was wrong.
- **If a test fails: fix the code, never the test.** Adjusting the test to make it pass defeats the purpose.

Under `--tdd`:
- **Task 3 (Implement)** becomes step 3 of the inner loop (minimal code per test).
- **Task 4 (Run)** is the test runner — verification flows through tests.
- **Task 5 (Lint)** runs inside the loop after each cycle, not as a final batch.
- **Task 7 (Test)** is no longer "now write tests" — tests already exist. It becomes "run all tests, generate coverage report, confirm green."

## Task 2: Read and Understand

Read every file that will be modified before touching anything.

1. Read ALL files identified in Task 1
2. Understand current structure, dependencies, and patterns
3. Note anything in CLEANUP.md from previous sessions

This prevents blind modifications and ensures you understand the codebase context.

## Task 3: Implement

*Under `--tdd`, this task is the GREEN step of the inner loop — see "TDD Mode" above. Write the minimal code to pass the current failing test, nothing more.*

Write the actual code changes. The BONSAI philosophy applies: minimal, justified, purposeful.

1. Write minimal code that solves the problem — no premature optimization
2. **Lint after writing**: After writing each code file, run `uv run ruff format <file> && uv run ruff check --fix <file>` (Python) or `bun run biome check --write <file>` (JS/TS) to catch missing imports and auto-fix mechanical issues (import order, trailing whitespace) immediately — don't wait for Task 5. Only unfixable issues should require a manual edit.
3. Add every new file to `CLEANUP.md` immediately upon creation
4. Use `pathlib` for Python file operations (cross-platform)
5. Update `.gitignore` if new tools or generated files are added
6. No unused imports, no unused variables, no dead code

## Task 4: Run and Verify

*Skipped in Prune mode.*

Execute the code and verify it works correctly.

1. **Python**: Use `uv run python script.py` (never bare `python` or `pip`)
2. **JavaScript**: Use `bun run script` (never `npm run` or `node` directly)
3. Set up environment if needed: `uv venv .venv && uv add <deps>` or `bun install`
4. **Error analysis protocol**:
   - Interpreter/compiler errors (syntax, import, type) → always fix immediately
   - Program output messages → analyze if behavior is expected
   - Any traceback or exception → fix before proceeding
5. Fix-and-verify loop until the code runs correctly
6. Run dependency audit if available: `uv audit`

## Task 5: Format, Lint, Type Check

Run quality tools to ensure the code meets standards. This task composes with other skills.

**For Python projects**: Invoke `/pycheck`
- `uv run ruff format` → `uv run ruff check` → `uv run ty check`
- Fix all issues, re-run until clean

**For JavaScript/TypeScript projects**: Invoke `/reactcheck`
- `bun run biome check --write .` → `bun run tsc --noEmit`
- Fix all issues, re-run until clean

**For mixed projects**: Invoke both sequentially.

Show the actual command output as evidence that all tools pass clean.

## Task 6: Code Review and Dependencies

*Skipped in Shape and Prune modes.*

Review the implementation for quality and verify all references are updated.

1. Remove redundant code — every line must have a clear purpose
2. Use Grep to find all files that reference modified functions/classes — **including test fixtures and mock signatures**, which are the most common collateral when refactoring private function signatures (e.g., a mock's `_run(netlist, output_dir)` becomes invalid the moment you add a `working_dir` kwarg)
3. Update all references if signatures or names changed
4. Check backward compatibility where relevant
5. For thorough analysis, consider using `/code-analyser`

## Task 7: Test

*Skipped in Prune mode.*

*Under `--tdd`: tests already exist (written during the inner loop). This task collapses to: run the full suite, generate a coverage report, confirm everything green. Do NOT write new tests here — that would be horizontal slicing after the fact.*

Write and run tests to verify the implementation is correct.

1. **Python**: Use pytest (or custom framework from CLAUDE.local.md)
2. **JavaScript**: Use vitest (or custom framework from CLAUDE.local.md)
3. Mirror source structure in `tests/` directory
4. Write minimal but comprehensive tests — cover the happy path and key edge cases
5. **Lint test files**: After writing each test file, run `uv run ruff format <file> && uv run ruff check --fix <file>` (Python) or `bun run biome check --write <file>` (JS/TS) to auto-fix import order and catch missing imports before running tests
6. Run tests: `uv run pytest` or `bun run vitest`
6. Fix code (not tests) until all tests pass naturally — no workarounds
7. Configure coverage if not yet set up: `uv run pytest --cov=src --cov-report=term-missing`

Show actual test execution output as evidence.

## Task 8: Concept Alignment

*Skipped in Shape mode.*

Verify the changes align with the project's goals.

1. If `concept.md` exists: review ALL changes against it
2. Check for scope creep — did you add anything not requested?
3. Verify `.gitignore` is complete (no generated files tracked)
4. If `concept.md` doesn't exist or `skip_concept_alignment` is set: skip this task

## Task 9: Documentation

*Skipped in Shape and Prune modes.*

Update documentation to reflect the changes.

1. Update `concept.md` if fundamental changes were made
2. Update `README.md` with any new user-facing functions or features
3. Update `CLAUDE.local.md` with session learnings (environment quirks, patterns discovered)
4. **Never modify CLAUDE.md** — it's a template
5. If `.pre-commit-config.yaml` exists and `skip_precommit` is not set: run `uv run pre-commit run --all-files` or equivalent

## Task 10: Cleanup and Hygiene

*Skipped in Prune mode.*

Final cleanup pass to leave the codebase better than you found it.

1. **File usage scan**: Before deleting ANY file, use Grep to search the entire codebase for references. If usage found, update references first.
2. **Naming review**: Check all new/modified class, function, and file names for clarity. Remove confusing prefixes, eliminate duplicate names.
3. **CLEANUP.md review**: Open CLEANUP.md, review every file listed this session. Mark each as keep or delete with reasoning.
4. **Execute cleanup**: Delete files marked for deletion. Remove any temporary artifacts.
5. **Final verification**: Confirm the project builds/runs correctly after cleanup.

---

## Completion

After the final task completes, provide a brief summary:
- What was done (1-2 sentences)
- Mode used (Grow/Shape/Prune)
- Files created/modified/deleted
- Any items requiring future attention
