# BONSAI Preferred Tools & Configurations

## Python

| Category | BONSAI Tool | Replaces |
|----------|------------|----------|
| Package Manager | **uv** | pip, pipenv, poetry |
| Linter/Formatter | **ruff** | black, isort, flake8 |
| Type Checker | **ty** (Astral) | mypy |
| Testing | **pytest** + hypothesis | unittest |
| Coverage | **coverage.py** + pytest-cov | — |
| Data Validation | **pydantic** | dataclasses (for validation) |
| Data Processing | **polars** (primary), pandas (fallback for HDF5, complex Excel) | — |
| AI/ML Platform | **mlflow** | — |
| HTTP Client | **httpx** | requests |
| Web Framework | **FastAPI** | Flask |
| Web Scraping | **requests_html2** | — |
| CLI Tools | **typer** | argparse |
| Terminal UIs | **textual** | — |
| Progress Bars | **tqdm** | — |
| Logging | **loguru** | logging module |
| Console Output | **rich** | print statements |
| File Operations | **pathlib** | os.path |
| Process Execution | **subprocess** (stdlib) + rich | — |
| Nested Data | **glom** | — |
| Utilities | **boltons** | — |
| Date Parsing | **dateparser** | — |
| Debug Printing | **icecream** | — |
| Data Cleaning | **janitor** (with pandas, then convert to polars) | — |

### Python Workflows

```bash
# Environment setup
uv venv .venv
source .venv/bin/activate
uv add package1 package2          # Runtime dependencies
uv add --dev pytest ruff ty       # Development dependencies
uv run python script.py           # Execute with uv

# Quality checks
uv run ruff format                # Format first
uv run ruff check                 # Lint second
uv run ty check                   # Type check third
```

### Ruff Configuration (pyproject.toml)

```toml
[tool.ruff]
line-length = 120
target-version = "py312"

[tool.ruff.lint]
select = ["E", "W", "F", "UP", "B", "C4", "PIE", "PTH", "I"]
ignore = ["E501", "B008", "C901", "B904"]

[tool.ruff.lint.isort]
combine-as-imports = true
force-single-line = false

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "auto"

[tool.ruff.lint.per-file-ignores]
"tests/*" = ["F401", "F811"]

[tool.ty.environment]
python-version = "3.13"

[tool.ty.src]
# Do NOT set `include` for flat root layouts — ty auto-discovers .py files.
# Only set `include = ["src"]` if using an src/ layout.
exclude = ["**/node_modules", "**/__pycache__", "**/.venv"]

[tool.pytest.ini_options]
# Required when tests/ imports root-level modules (flat root layout).
# Remove if using an src/ layout with proper packaging.
pythonpath = ["."]
```

## JavaScript / React

| Category | BONSAI Tool | Replaces |
|----------|------------|----------|
| Package Manager | **bun** | npm, yarn, pnpm |
| Build Tool | **vite 8+** (rolldown) | webpack, parcel |
| CSS Framework | **Tailwind CSS v4+** | older CSS frameworks |
| Framework | **React 19.2+** with TypeScript | — |
| Formatter/Linter | **biome** | eslint + prettier |
| State Management | **zustand** | Redux |
| Server State | **@tanstack/react-query** | — |
| Testing | **vitest** + @testing-library/react | jest |

### JavaScript Workflows

```bash
bun install                       # Install dependencies
bun add package1 package2         # Runtime dependencies
bun add -d @biomejs/biome         # Dev dependencies
bun run dev                       # Start dev server

# Quality checks
bun run biome check --write .     # Lint + format
bun run tsc --noEmit              # Type check
```

### Vite + Tailwind v4 (Mandatory Wiring)

- **vite must be 8.x** (`^8.0.0` or newer)
- **Register `@tailwindcss/vite`** in vite.config — Tailwind v4 is plugin-driven
- **Plugin order**: `[tailwindcss(), react()]` (Tailwind first)
- **CSS**: Use `@import "tailwindcss"` (single import, no `@tailwind` directives)
- **Tokens**: Use `@theme { }` in CSS (no `tailwind.config.js`)
- Missing plugin symptom: unstyled UI, white background

### Biome Configuration (biome.json)

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": { "noUnusedVariables": "error", "noUnusedImports": "error" },
      "style": { "noParameterAssign": "off" }
    }
  },
  "formatter": {
    "enabled": true, "indentStyle": "space", "indentWidth": 2, "lineWidth": 100
  },
  "javascript": {
    "formatter": { "quoteStyle": "single", "semicolons": "always", "trailingCommas": "es5" }
  }
}
```

## Tool Introduction Triggers

Only add tools when evidence demands it:

| Tool | Add When |
|------|----------|
| **pytest** | Mathematical logic, validation, 3+ class methods, combinatorial functions, file I/O, edge cases |
| **pydantic** | API integration, config management, data models with validation, serialization |
| **rich** | Progress indicators, error display, tables, interactive CLI, formatted output |
| **hypothesis** | >5 similar test cases for same function, property-based testing needed |
| **pre-commit** | 4+ core files, multiple contributors, production deployment, security-sensitive code |
| **type hints** | Function used in 3+ places or has 3+ parameters |
| **docker** | Deployment or complex dependencies |

## Domain-Specific External Tools

Not BONSAI defaults — install or load only when the specific trigger fires.

### Remotion (React-Based Video Generation)

**Step 0 — before writing any Remotion code:** the official Remotion skill MUST be present at the project's `.claude/skills/remotion/`. If it isn't, copy it (steps below) and read its `SKILL.md` first. Do not scaffold `package.json`, compositions, or scenes from memory — version pins, current API surface, and platform caveats live in the skill, and training-time knowledge of Remotion may be stale.

When creating programmatic videos with Remotion, copy the official Remotion skill into the **project's** `.claude/skills/` directory (not user-global) so the skill ships with the project:

1. Source: [`remotion-dev/remotion/packages/skills/skills/remotion`](https://github.com/remotion-dev/remotion/tree/main/packages/skills/skills/remotion)
2. Copy the entire `remotion/` directory (`SKILL.md` + the `rules/` subdirectory with all 38 rule files) into `.claude/skills/remotion/` at the project root.
3. Verify Remotion's license fits the project (free for individuals and companies under $1M revenue; commercial license required above that — see [remotion.dev/license](https://www.remotion.dev/license)).
4. After copying, the skill is invocable inside the project for Remotion-specific guidance (assets, animations, transitions, FFmpeg usage, etc.).

## Tool Selection Hierarchy

1. **Standard library** — No dependencies is the best dependency
2. **Single proven tool** — One tool that does the job well
3. **Minimal configuration** — Convention over configuration
4. **Local solutions** — Solve locally before reaching for external services

## Windows (Git Bash) Caveats

- `fastapi dev` crashes due to Rich console rendering (`LegacyWindowsTerm`) — use `uv run uvicorn main:app --host 127.0.0.1 --port 8000` instead
- Always check `CLAUDE.local.md` for OS before generating run commands in GROW.md phases

## Forbidden Tools

Never use these — always use the BONSAI alternative:
- `pip`, `pipenv`, `poetry` -> use `uv`
- `npm`, `yarn`, `pnpm` -> use `bun`
- `black`, `isort`, `flake8` -> use `ruff`
- `eslint` + `prettier` -> use `biome`
- `mypy` -> use `ty`
- `unittest` -> use `pytest`
- `os.path` -> use `pathlib`
- `sh` (Unix-only, breaks on Windows) -> use `subprocess` from stdlib
- `delegator.py` (abandoned since 2018, depends on pexpect which is broken on Windows) -> use `subprocess` from stdlib

## External Skill Commands Take Precedence

When an adopted external skill (e.g., the official Remotion skill in `.claude/skills/remotion/`) prescribes specific commands such as `npx create-video`, `npx remotion render`, or `npm install`, follow them **verbatim**. Do NOT rewrite those commands to use BONSAI's preferred package manager:

- `npx create-video@latest …` — keep as `npx`, do not change to `bunx`
- `npx remotion add <pkg>` — keep as `npx`
- `npm i` after scaffolding — keep as `npm`, do not run `bun install`

The BONSAI "Forbidden Tools" list applies to **your own code's runtime/build tooling**, not to the bootstrapping commands of an external authoring skill. Skill-prescribed commands are tested as written; substituting package managers may break behavior, change which lockfile is generated, or invalidate version pins. The skill's toolchain wins for the skill's toolchain.
