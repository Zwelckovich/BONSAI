---
name: bonsai-check
description: >
  Comprehensive BONSAI best practices compliance audit. Checks Python and JavaScript
  tool choices, package managers, formatters, linters, type checkers, and framework
  choices against BONSAI standards. Creates a detailed compliance report with
  migration guidance. Use for auditing tool usage, checking compliance, or when the
  user says "check compliance", "audit", "bonsai check", or "are we using the right tools".
disable-model-invocation: true
---

# BONSAI Best Practices Compliance Audit

Audit the codebase against BONSAI guidelines and report compliance status.

## Output Format

```markdown
## 🌱 BONSAI Best Practices Compliance Audit

### 📦 Package Compliance Table

| Category | BONSAI Package | Status | Old Package Detected | Notes |
```

**Status values:**
- ✅ COMPLIANT — Using BONSAI-preferred package
- ⚠️ OLD PACKAGE — Using deprecated package, should replace
- ❌ WRONG USAGE — Using wrong pattern or package
- ➖ NOT NEEDED — Not applicable to this project
- 🔍 NOT USED — Available but not needed yet

## What to Check

### Python
| Category | BONSAI Tool | Check Against |
|----------|------------|---------------|
| Package Manager | uv | pip, pipenv, poetry |
| Formatter | ruff | black, isort, flake8 |
| Type Checker | ty | mypy |
| Testing | pytest | unittest |
| Data Validation | pydantic | plain dataclasses |
| Data Processing | polars | pandas (as primary) |
| Logging | loguru | logging module |
| Console Output | rich | print statements |
| File Operations | pathlib | os.path |
| HTTP Client | httpx | requests |
| Web Framework | FastAPI | Flask |
| CLI Tools | typer | argparse |

### JavaScript/React
| Category | BONSAI Tool | Check Against |
|----------|------------|---------------|
| Package Manager | bun | npm, yarn, pnpm |
| Build Tool | vite 8+ | webpack, parcel, older vite |
| CSS Framework | Tailwind CSS v4+ | older CSS frameworks |
| Vite Config | tailwindcss() + react() plugins | missing @tailwindcss/vite |
| Formatter/Linter | biome | eslint + prettier |
| State Management | zustand | Redux |

### Project Navigation (Python)
| Category | BONSAI Tool | Check Against |
|----------|------------|---------------|
| Code map | graphify — `graphify-out/` present | no map (navigation falls back to grep/read) |

If `graphify-out/` is absent on a Python project, surface it as a Priority 3 (optional) improvement: `uv add --dev graphifyy && uv run graphify install` (package `graphifyy`, double "y"; CLI `graphify`). Audit-only — never run it. If `graphify-out/` is present but its newest file predates recent commits, note it may be stale. Also verify a present `graphify-out/` is listed in `.gitignore` — a map must never be committed; flag a tracked `graphify-out/` as a Priority 2 fix.

### Full-Stack Dev Runner (Python + React/Vite)
| Category | BONSAI Tool | Check Against |
|----------|------------|---------------|
| One-command runner | root `dev.py` (`uv run python dev.py`) | separate backend/frontend start scripts, or no runner |

For a project with a Python backend **and** a React/Vite frontend:
- **Priority 2 — Should Fix** if a root `dev.py` is missing (runnable via `uv run python dev.py`, spawning uvicorn + `bun run dev`, tearing both down on Ctrl+C — see `structure.md` "Full-Stack Unified Dev Runner").
- **Priority 3 — Consider** if `dev.py` exists but `vite.config.ts` lacks `server.host: "127.0.0.1"` (Vite IPv6-bind gotcha on Windows — see `tools.md`).

### Files to Scan
1. All `.py` files for imports
2. `pyproject.toml` dependencies and tool configs
3. `package.json` for dependencies and lock files
4. `vite.config.ts/js` for plugin setup
5. Check for forbidden lock files (`package-lock.json`, `yarn.lock`)
6. `.gitignore` — confirm `graphify-out/` is ignored when a map is present

## Report Sections

### 📊 Detailed Findings
For each non-compliant item:
- File location with line numbers
- Current usage pattern
- Recommended BONSAI replacement
- Migration complexity: SIMPLE / MEDIUM / COMPLEX

### 🎯 Summary
- **Compliance Score**: X/Y checks passed (Z%)
- **Priority 1 — Must Fix**: Critical violations
- **Priority 2 — Should Fix**: Recommended improvements
- **Priority 3 — Consider**: Optional improvements
- **Acceptable Deviations**: Justified current approach

$ARGUMENTS
