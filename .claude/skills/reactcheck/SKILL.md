---
name: reactcheck
description: >
  Run the full React/TypeScript quality pipeline: lint and format with biome,
  type check with TypeScript compiler. Fixes all errors iteratively until clean.
  Use after writing React/JS/TS code, or when the user says "check react",
  "check typescript", "lint frontend", or "biome check".
---

# React/TypeScript Quality Check

Run the complete React/TypeScript linting, formatting, and type checking pipeline.

## Pipeline

### 1. Lint & Format
```bash
bun run biome check --write .
```
Biome handles both linting and formatting in one pass.

### 2. Type Check
```bash
bun run tsc --noEmit
```
Catches type errors that biome doesn't: missing props, wrong types, incompatible interfaces.

## Iteration

After fixing issues, re-run both commands to verify:
1. `bun run biome check --write .`
2. `bun run tsc --noEmit`

Repeat until both pass clean. Show the final clean output as evidence.

$ARGUMENTS
