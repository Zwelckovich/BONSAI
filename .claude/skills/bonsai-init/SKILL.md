---
name: bonsai-init
description: >
  Initialize a project with BONSAI methodology. Sets up CONCEPT.md, tool configs,
  .gitignore, and environment. Use when starting a new project, onboarding an
  existing project to BONSAI, or when the user says "init", "setup BONSAI",
  or "get started with BONSAI".
disable-model-invocation: true
---

# BONSAI Project Initialization

Set up a project with BONSAI methodology — detect the project type, create essential files, and configure the development environment.

## Process

### 1. Detect Project Type

Use platform-appropriate listing commands — on Windows PowerShell use `Get-ChildItem -Force`, on Unix shells use `ls -la`. Check the `<user_info>` block's `Shell:` field if unsure.

Scan the current directory to classify the project:

- **Python**: `.py` files, `pyproject.toml`, `requirements.txt`
- **JavaScript/TypeScript**: `package.json`, `.js`/`.ts`/`.jsx`/`.tsx` files
- **Mixed**: Both Python and JS/TS files present
- **Empty**: No code files yet

Report what you found.

### 2. Interactive CONCEPT.md Creation

If `CONCEPT.md` doesn't exist, ask the user 3-5 questions to create one:

1. What does this project do? (one sentence)
2. Who is the target user?
3. What are the core features? (list 3-5)
4. What technology stack? (or should BONSAI choose?)
5. Any constraints or requirements?

Create `CONCEPT.md` from the answers — keep it concise and focused.

If `CONCEPT.md` already exists, read it and confirm alignment.

### 3. Configure Environment

**For Python projects:**
- Verify `uv` is available: `uv --version`
- Create `pyproject.toml` with BONSAI ruff + ty config if it doesn't exist
- If the project will use a `src/<package>/` layout (default BONSAI convention), the `pyproject.toml` **must** include a `[build-system]` block and package declaration, otherwise `uv sync` will not install the package and `from <package> import …` will fail. Minimal config:
  ```toml
  [build-system]
  requires = ["hatchling"]
  build-backend = "hatchling.build"

  [tool.hatch.build.targets.wheel]
  packages = ["src/<package>"]
  ```
- Create `.venv` if not present: `uv venv .venv`
- Install core dev tools: `uv add --dev pytest ruff ty` (config without installation causes runtime failures)
- **Offer graphify** (optional, token-efficient navigation — Python-only). If no `graphify-out/` directory exists, ask with `AskUserQuestion`:
  - **Yes, set it up now** → run `uv add --dev graphifyy && uv run graphify install` (package `graphifyy` has a double "y"; the CLI is `graphify`), then add `graphify-out/` to `.gitignore`
  - **Just show me the command** → print `uv add --dev graphifyy && uv run graphify install`; do not execute it
  - **Skip** → continue; graphify can be added later

  This opt-in is the only place BONSAI runs graphify — never install it without the user choosing "Yes".

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
  graphify-out/
  ```
  Include `graphify-out/` whenever a map is (or may be) present — it must never be committed. The graphify offer's "Yes" branch also adds it, but listing it here covers a project that already carries a map (where the offer is skipped).
- **`CLAUDE.local.md`** with detected environment info (Python version, Node version, OS, detected patterns)
- **`.claude/settings.local.json`** with `{"outputStyle": "BONSAI"}` if not present

### 5. Getting Started Summary

Output a summary:
```
🌱 BONSAI project initialized!

Project type: [Python/JavaScript/Mixed/Empty]
CONCEPT.md: [Created/Already exists]
Environment: [uv ready / bun ready / both]
graphify: [installed / command shown / declined / N/A (non-Python)]

Available commands:
  /bonsai <request>  — Adaptive development workflow
  /grow-create       — Generate development phases from CONCEPT.md
  /pc <topic>        — Plan & clarify before building
  /pycheck           — Python quality checks
  /reactcheck        — React/TS quality checks
  /bonsai-check      — Best practices audit
```

For Python projects the **`graphify:` line is mandatory** — it records the outcome of the Step 3 offer. If you reach this summary without having presented the graphify `AskUserQuestion`, go back and present it now; the line must read `installed`, `command shown`, or `declined` — never be omitted. This is the forcing function that guarantees the offer was actually made, not silently skipped.

$ARGUMENTS
