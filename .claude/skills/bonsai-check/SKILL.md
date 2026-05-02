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

### Files to Scan
1. All `.py` files for imports
2. `pyproject.toml` dependencies and tool configs
3. `package.json` for dependencies and lock files
4. `vite.config.ts/js` for plugin setup
5. Check for forbidden lock files (`package-lock.json`, `yarn.lock`)

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
