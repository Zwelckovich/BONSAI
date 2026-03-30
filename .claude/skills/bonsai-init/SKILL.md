---
name: bonsai-init
description: >
  Initialize a project with BONSAI methodology. Sets up concept.md, tool configs,
  .gitignore, and environment. Use when starting a new project, onboarding an
  existing project to BONSAI, or when the user says "init", "setup BONSAI",
  or "get started with BONSAI".
---

# BONSAI Project Initialization

Set up a project with BONSAI methodology — detect the project type, create essential files, and configure the development environment.

## Process

### 1. Detect Project Type

Scan the current directory to classify the project:

- **Python**: `.py` files, `pyproject.toml`, `requirements.txt`
- **JavaScript/TypeScript**: `package.json`, `.js`/`.ts`/`.jsx`/`.tsx` files
- **Mixed**: Both Python and JS/TS files present
- **Empty**: No code files yet

Report what you found.

### 2. Interactive concept.md Creation

If `concept.md` doesn't exist, ask the user 3-5 questions to create one:

1. What does this project do? (one sentence)
2. Who is the target user?
3. What are the core features? (list 3-5)
4. What technology stack? (or should BONSAI choose?)
5. Any constraints or requirements?

Create `concept.md` from the answers — keep it concise and focused.

If `concept.md` already exists, read it and confirm alignment.

### 3. Configure Environment

**For Python projects:**
- Verify `uv` is available: `uv --version`
- Create `pyproject.toml` with BONSAI ruff + ty config if it doesn't exist
- Create `.venv` if not present: `uv venv .venv`

**For JavaScript projects:**
- Verify `bun` is available: `bun --version`
- Create `biome.json` with BONSAI config if it doesn't exist
- Run `bun install` if `package.json` exists but `node_modules` doesn't

### 4. Create Essential Files

Create these if they don't exist:

- **`.gitignore`** with BONSAI entries:
  ```
  CLEANUP.md
  BONSAI_IT_PROCESS.md
  .venv/
  node_modules/
  __pycache__/
  .coverage
  htmlcov/
  ```
- **`CLAUDE.local.md`** with detected environment info (Python version, Node version, OS, detected patterns)
- **`.claude/settings.local.json`** with `{"outputStyle": "BONSAI"}` if not present

### 5. Getting Started Summary

Output a summary:
```
🌱 BONSAI project initialized!

Project type: [Python/JavaScript/Mixed/Empty]
concept.md: [Created/Already exists]
Environment: [uv ready / bun ready / both]

Available commands:
  /bonsai <request>  — Adaptive development workflow
  /grow-create       — Generate development phases from concept.md
  /pc <topic>        — Plan & clarify before building
  /pycheck           — Python quality checks
  /reactcheck        — React/TS quality checks
  /bonsai-check      — Best practices audit
```

$ARGUMENTS
