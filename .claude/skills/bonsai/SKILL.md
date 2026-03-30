---
name: bonsai
description: >
  Adaptive development workflow with 10 tasks and 3 modes (Grow/Shape/Prune).
  Use this skill whenever the user wants structured, systematic development —
  new features, bug fixes, refactoring, or any code change that benefits from
  planning, testing, linting, and cleanup. Trigger on /bonsai or when the user
  explicitly asks for "the BONSAI workflow" or "full workflow".
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
4. Identify all files to modify/create
5. Verify BONSAI tools are available (only if code files involved):
   - Python: `uv --version` (never pip/pipenv/poetry)
   - JavaScript: `bun --version` (never npm/yarn/pnpm)
6. Create or update `CLEANUP.md` with new session timestamp

Output: State the selected mode and task list clearly.

## Task 2: Read and Understand

Read every file that will be modified before touching anything.

1. Read ALL files identified in Task 1
2. Understand current structure, dependencies, and patterns
3. Note anything in CLEANUP.md from previous sessions

This prevents blind modifications and ensures you understand the codebase context.

## Task 3: Implement

Write the actual code changes. The BONSAI philosophy applies: minimal, justified, purposeful.

1. Write minimal code that solves the problem — no premature optimization
2. Add every new file to `CLEANUP.md` immediately upon creation
3. Use `pathlib` for Python file operations (cross-platform)
4. Update `.gitignore` if new tools or generated files are added
5. No unused imports, no unused variables, no dead code

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
2. Use Grep to find all files that reference modified functions/classes
3. Update all references if signatures or names changed
4. Check backward compatibility where relevant
5. For thorough analysis, consider invoking `@dead-code-detector`

## Task 7: Test

*Skipped in Prune mode.*

Write and run tests to verify the implementation is correct.

1. **Python**: Use pytest (or custom framework from CLAUDE.local.md)
2. **JavaScript**: Use vitest (or custom framework from CLAUDE.local.md)
3. Mirror source structure in `tests/` directory
4. Write minimal but comprehensive tests — cover the happy path and key edge cases
5. Run tests: `uv run pytest` or `bun run vitest`
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
