---
name: pycheck
description: >
  Run the full Python quality pipeline: format with ruff, lint with ruff check,
  and type check with ty. Fixes all errors iteratively until clean. Use after
  writing Python code, before committing, or when the user says "check python",
  "lint", "format", or "type check".
---

# Python Quality Check

Run the complete Python formatting, linting, and type checking pipeline.

## Prerequisites

Before running the pipeline, verify ruff and ty are installed as dev dependencies:
```bash
uv run ruff --version && uv run ty --version
```
If either is missing (`program not found`), install them:
```bash
uv add --dev ruff ty
```

## Pipeline (execute in this order)

### 1. Format
```bash
uv run ruff format
```
Run format first to prevent formatting changes from conflicting with lint fixes.

### 2. Lint
```bash
uv run ruff check
```
Read the complete output. Fix all reported errors.

### 3. Type Check
```bash
uv run ty check
```
ty catches errors ruff doesn't: type mismatches, missing attributes, incompatible returns.
Fix type errors. If a suppression is genuinely needed, use ty's native syntax `# ty: ignore[<diagnostic-name>]` (e.g., `# ty: ignore[invalid-assignment]`) with a one-line justification. Note: `# type: ignore` is mypy syntax and has **no effect** with ty.

## Iteration

After fixing issues, re-run ALL three commands to verify:
1. `uv run ruff format`
2. `uv run ruff check`
3. `uv run ty check`

Repeat until all three pass clean. Show the final clean output as evidence.

$ARGUMENTS
