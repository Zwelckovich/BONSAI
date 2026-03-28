Bypass: Perform comprehensive BONSAI Best Practices compliance audit of the codebase against @CLAUDE.md guidelines.

**OUTPUT FORMAT REQUIREMENTS:**

## 🌱 BONSAI Best Practices Compliance Audit

### 📦 Package Compliance Table

Create a detailed table with these columns:
| Category | BONSAI Package | Status | Old Package Detected | Usage Count | Notes |

Status values:
- ✅ COMPLIANT: Using BONSAI-preferred package correctly
- ⚠️ OLD PACKAGE: Using deprecated package that should be replaced
- ❌ WRONG USAGE: Using wrong pattern or package
- ➖ NOT NEEDED: Package not applicable to this project
- 🔍 NOT USED: BONSAI package available but not needed yet

Check these categories:

**Python Core:**
- Package Manager: uv vs pip/pipenv/poetry
- Formatter: ruff vs black/isort/flake8
- Type Checker: pyright vs mypy/no type checking
- Testing: pytest vs unittest
- Data Validation: pydantic vs dataclasses
- Data Processing: polars vs pandas (pandas only for fallback operations)
- Logging: loguru vs logging module
- Console Output: rich vs print statements
- File Operations: pathlib vs os.path
- Process Execution: sh + rich vs subprocess
- HTTP Client: httpx vs requests
- Web Framework: FastAPI vs Flask
- CLI Tools: typer vs argparse

**JavaScript/React Frontend:**
- Package Manager: bun vs npm/yarn/pnpm
- Build Tool: vite 8+ with rolldown (Rust-based bundler) vs webpack/parcel/older vite
- CSS Framework: Tailwind CSS v4+ with @tailwindcss/vite plugin vs older CSS frameworks
- Vite Config: Must include both tailwindcss() and react() plugins (Tailwind first)
- Formatter/Linter: biome vs eslint+prettier
- State Management: zustand vs Redux
- Server State: @tanstack/react-query

**Check these files:**
1. Scan all .py files for imports
2. Check pyproject.toml dependencies
3. Check pyproject.toml for [tool.pyright] configuration
4. Verify usage patterns in code
5. Run `uv run pyright` and report any type errors
6. Check package.json for bun lockfile (bun.lock vs package-lock.json/yarn.lock)
7. Check package.json for vite version (must be ^8.0.0+) and rolldown usage
8. Check vite.config.ts/js for @tailwindcss/vite plugin and correct plugin order
9. Check for forbidden package managers (npm/yarn/pnpm lock files)

### 📊 Detailed Findings

For each non-compliant item, provide:
- File location (with line numbers)
- Current usage pattern
- Recommended BONSAI replacement
- Migration complexity (SIMPLE/MEDIUM/COMPLEX)

### 🎯 Summary & Action Items

**Compliance Score:** X/Y checks passed (Z%)

**Priority 1 - Must Fix:**
- [List critical violations that break BONSAI principles]

**Priority 2 - Should Fix:**
- [List recommended improvements for better compliance]

**Priority 3 - Consider:**
- [List optional improvements for future consideration]

**Acceptable Deviations:**
- [List cases where current approach is justified per BONSAI guidelines]

**Overall Assessment:** [1-2 sentence summary of compliance state]

---

Scan the entire codebase and provide the complete audit report. $ARGUMENTS
