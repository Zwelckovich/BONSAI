# 🌱 BONSAI - Build Only Necessary Software, Adapt Intelligently

> Like a bonsai tree, every branch (feature) is carefully considered. This template embodies minimal yet beautiful and functional software development through careful pruning of unnecessary code. Projects grow slowly and deliberately, making development an art form of constraint and intention.

**Note**: BONSAI is the name of this development template/methodology, NOT your project name. Your project can be named anything you want!

---

# CLAUDE.md - Dynamic Minimal Development Guide

## Quick Reference

### Core Documents
- **concept.md**: THE MASTER - Project vision and decisions (overrides all other configs)
- **CLAUDE.md**: Default workflow and practices (this file - follows concept.md)
- **CLAUDE.local.md**: Auto-generated environment learnings (created by Claude Code)

### User-Facing Documents  
- **README.md**: Manual for end users of your software
- **.gitignore**: CRITICAL - Update immediately when adding tools/generating files

### Special Cases
- **PROJECT-TRANSFER.md**: Guide for migrating existing projects (user provides path)
- **migration/**: Temporary analysis during project transfers (rarely needed)
- **Don'ts Section**: User-defined patterns/tools to avoid (check before adding anything)

## Philosophy & Core Principles

**Main Principle**: Start minimal, grow only when needed. Every addition must be justified by actual project requirements.

- **Zero Waste**: No unused dependencies, no boilerplate, no "just in case" additions
- **Progressive Enhancement**: Tools are added when complexity demands them, not before
- **Single Responsibility**: Each file/function does one thing well
- **Continuous Alignment**: Every change is validated against `concept.md`
- **Respect Preferences**: Honor user's Don'ts - use specified alternatives
- **Cross-Platform First**: Code must work on Windows, Linux, and macOS

### Hierarchy of Authority
1. **concept.md** - The ultimate source of truth
   - Overrides all other configurations
   - Example: If CLAUDE.md says "use yarn" but concept.md says "use npm", use npm
2. **User's existing code style** - When user writes majority of code
3. **CLAUDE.md guidelines** - Default practices when starting fresh
4. **CLAUDE.local.md** - Environment-specific learnings

## Best Practices & Preferred Tools

### Python
- **Package Manager**: uv (always use `uv add`, `uv sync`)
- **Formatter**: ruff
- **Type Checker**: pyright (only when needed)
- **Testing**: pytest + hypothesis (when complexity justifies)

#### Ruff Configuration (add to pyproject.toml when needed):
```toml
[tool.ruff]
line-length = 100
indent-width = 4
target-version = "py311"

[tool.ruff.lint]
select = [
    "E",    # pycodestyle errors
    "W",    # pycodestyle warnings
    "F",    # pyflakes
    "I",    # isort
    "B",    # flake8-bugbear
    "C4",   # flake8-comprehensions
    "UP",   # pyupgrade
    "ARG",  # flake8-unused-arguments
    "SIM",  # flake8-simplify
    "TID",  # flake8-tidy-imports
    "PTH",  # flake8-use-pathlib
    "ERA",  # flake8-eradicate
    "PD",   # pandas-vet
    "PGH",  # pygrep-hooks
    "PL",   # pylint
    "TRY",  # tryceratops
    "FLY",  # flynt
    "NPY",  # NumPy-specific rules
    "AIR",  # Airflow
    "PERF", # Perflint
    "RUF",  # Ruff-specific rules
    "N",    # pep8-naming
    "D",    # pydocstyle
    "S",    # flake8-bandit (security)
    "DTZ",  # flake8-datetimez
    "RSE",  # flake8-raise
    "RET",  # flake8-return
]
ignore = [
    "D107",   # Missing docstring in __init__
    "PD011",  # pandas-use-of-dot-values
]
fixable = ["ALL"]
unfixable = []

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "auto"

[tool.ruff.lint.pydocstyle]
convention = "google"

[tool.ruff.lint.per-file-ignores]
"tests/*" = ["D", "S101", "ARG", "PLR2004", "S105", "S106", "S107"]
"**/__init__.py" = ["F401", "D100", "D104"]
"*/migrations/*" = ["D100", "D101", "D102", "D103", "D104"]
"scripts/*" = ["D100", "D103"]
```

#### Pyright Configuration (add when type safety needed):
```toml
[tool.pyright]
include = ["src"]  # Adapt to actual structure
exclude = ["**/__pycache__"]
pythonVersion = "3.11"
typeCheckingMode = "strict"
reportMissingImports = true
reportMissingTypeStubs = false
reportUnknownParameterType = true
reportUnknownMemberType = true
reportUnknownVariableType = true
reportUnknownLambdaType = true
reportGeneralTypeIssues = true
reportPrivateUsage = true
reportUnnecessaryTypeIgnoreComment = true
reportUnusedImport = true
reportUnusedVariable = true
reportOptionalMemberAccess = true
useLibraryCodeForTypes = true
```

### JavaScript/React
- **Package Manager**: yarn
- **Formatter**: prettier
- **Linter**: eslint (minimal rules)
- **Bundler**: vite (when needed)
- **Scripts**: Use `node scripts/build.js` not shell scripts

#### Cross-Platform package.json scripts:
```json
{
  "scripts": {
    "dev": "node scripts/dev.js",
    "build": "node scripts/build.js",
    "clean": "node scripts/clean.js"
  }
}
```

**Note**: Never use `&&` or `;` in npm scripts (platform-specific). Instead, use Node.js scripts that work everywhere.

#### Prettier Configuration (.prettierrc):
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5"
}
```

### General Tools
- **Version Control**: git (with minimal .gitignore)
- **Pre-commit**: Only after 3+ files or multiple contributors
- **CI/CD**: GitHub Actions (only when deployment needed)

## Don'ts - Patterns to Avoid

### Platform-Specific Code
- **NO OS-specific code**: All code must be cross-platform (Windows, Linux, macOS)
  - Instead: Use pathlib for paths, not hardcoded `/` or `\`
  - Instead: Use `sys.platform` checks only when absolutely necessary
  - Instead: Use Python's `os` and `subprocess` for system operations
  - Example: Use `Path.home() / "documents"` not `"/home/user/documents"`

### Build Tools
- **NO Makefiles**: Linux-specific and not cross-platform
  - Instead: Use Python scripts (e.g., `scripts/build.py`, `scripts/clean.py`)
  - Reason: Works on all platforms where Python runs

### Cross-Platform Best Practices:
```python
# ❌ BAD - Platform specific
os.system("rm -rf build/")  # Linux only
os.system("del /s build\\")  # Windows only
config_path = "/home/user/.config/app"  # Linux only

# ✅ GOOD - Cross-platform
from pathlib import Path
import shutil

# Works everywhere
shutil.rmtree("build", ignore_errors=True)
config_path = Path.home() / ".config" / "app"
config_path.mkdir(parents=True, exist_ok=True)

# Use subprocess with proper args
import subprocess
subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
```

### Example Python Script Instead of Makefile:
```python
#!/usr/bin/env python3
"""Development tasks - cross-platform alternative to Make"""

import subprocess
import sys
import shutil
from pathlib import Path

def clean():
    """Remove generated files - works on all platforms"""
    patterns = ['__pycache__', '*.pyc', '.pytest_cache', '.coverage']
    for pattern in patterns:
        for path in Path('.').rglob(pattern):
            if path.is_file():
                path.unlink()
            elif path.is_dir():
                shutil.rmtree(path)
    print("✓ Cleaned")

def format():
    """Format code with ruff"""
    subprocess.run([sys.executable, "-m", "ruff", "format", "."])
    print("✓ Formatted")

def lint():
    """Lint code with ruff"""
    subprocess.run([sys.executable, "-m", "ruff", "check", ".", "--fix"])
    print("✓ Linted")

def test():
    """Run tests - cross-platform"""
    subprocess.run([sys.executable, "-m", "pytest"])

def install():
    """Install dependencies - works everywhere"""
    subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])

if __name__ == "__main__":
    tasks = {
        "clean": clean,
        "format": format,
        "lint": lint,
        "test": test,
        "install": install,
    }
    
    if len(sys.argv) > 1 and sys.argv[1] in tasks:
        tasks[sys.argv[1]]()
    else:
        print(f"Usage: python scripts/dev.py {{{','.join(tasks.keys())}}}")
```

### Other Don'ts (Add Your Own):
- **NO [tool]**: [Reason]
  - Instead: [Alternative]
- **NO [pattern]**: [Reason]
  - Instead: [Better approach]

**Note**: The items below are EXAMPLES only - customize this section with YOUR preferences. Claude Code will check YOUR actual Don'ts, not these examples.

### Example Don'ts Others Have Used:
```
# THESE ARE JUST EXAMPLES - Replace with your own preferences!
- NO Poetry: Some prefer uv for Python package management
- NO CSS-in-JS: Some prefer separate CSS files or Tailwind
- NO class components: Some use functional React components only
- NO nested ternaries: Some prefer if/else for clarity
- NO single-letter variables: Except for common cases (i, j for loops, e for events)
```

**Remember**: These are examples only. Add your actual preferences above.

## Dynamic Growth Rules

### Tool Introduction Triggers

#### **pytest**: Add when ANY of these complexity indicators are met:
- **Mathematical Logic**: Functions with calculations, formulas, or mathematical operations (e.g., linear sweeps, parameter combinations)
- **Validation Logic**: Data validation, type checking, or error handling beyond simple checks
- **Class Methods**: Any class with 3+ methods or complex state management
- **Combinatorial Functions**: Functions generating combinations, permutations, or nested iterations
- **File I/O Operations**: JSON serialization, file loading, or data persistence
- **Edge Cases**: Functions that need testing with boundary conditions or invalid inputs
- **Configuration Logic**: Parameter configuration, sweep generation, or complex object creation

#### **pydantic**: Data validation needed or external API integration

#### **hypothesis**: Property-based testing for complex edge cases
- Add when pytest tests become repetitive for testing ranges
- Useful for testing mathematical functions with many possible inputs  
- **Trigger**: When you find yourself writing >5 similar test cases for the same function

#### **pre-commit**: Add when ANY of these collaboration indicators are met:
- **Repository has 4+ core files** (excluding configs like .gitignore, pyproject.toml)
- **Multiple contributors** working on the project
- **Production deployment** planned or active
- **Complex formatting rules** that must be enforced consistently
- **Security-sensitive code** that needs automatic scanning

**Current Project Status**: 🟡 **APPROACHING TRIGGER** - We have 6 core files (main.py, examples.py, validation_examples.py, concept.md, README.md, CLAUDE.md) but single contributor

#### **type hints**: Function used in 3+ places or has 3+ parameters
**Current Status**: ✅ Already using comprehensive type hints with pydantic

#### **docker**: Deployment or complex dependencies
#### **CI/CD**: Automated deployment or team collaboration

### Tool Addition Protocol

When adding ANY new tool:

1. **Create/Update Configuration**
   - Add tool-specific config (pyproject.toml, package.json, etc.)
   - Use minimal configuration first
   - Document why tool was added in commit message

2. **Update .gitignore IMMEDIATELY**
   ```bash
   # Python tools
   __pycache__/
   *.py[cod]
   .pytest_cache/
   .coverage
   .mypy_cache/
   .ruff_cache/
   .venv/
   venv/
   
   # JavaScript tools  
   node_modules/
   .next/
   dist/
   build/
   *.log
   
   # IDE
   .vscode/
   .idea/
   *.swp
   .DS_Store
   
   # Project specific
   *.db
   *.sqlite
   .env
   .env.local
   ```

3. **Update Documentation**
   - Add tool to "Current Tools" in README.md
   - Update CLAUDE.local.md with tool-specific learnings

### Order of Operations (CRITICAL)

When introducing a new tool:
1. **FIRST**: Update .gitignore with tool patterns
2. **THEN**: Install/initialize the tool
3. **FINALLY**: Generate any files

This prevents accidentally committing generated files!

### File Structure Evolution

1. **Single File Stage**
   - Start with everything in one file (e.g., `main.py` or `index.js`)
   - Create `.gitignore` immediately with basic patterns
   - Split when it makes logical sense, not at arbitrary line counts
   
2. **Minimal Split Stage**
   - Split by responsibility when complexity demands it
   - Example: `main.py`, `helpers.py` NOT `models.py`, `views.py`, `utils.py`
   - Follow user's existing patterns if they're writing majority of code

3. **Organized Stage**
   - Create folders only when necessary
   - Prefer flat structure over deep nesting
   - Respect how user organizes their code

### When to Split Files
- When distinct responsibilities emerge
- When multiple features need the same functionality
- When it improves user's workflow
- When testing becomes easier with separation
- NOT based on arbitrary line counts

### Initial Project Setup

**CRITICAL: Follow this exact order for every new project:**

1. **Create .gitignore FIRST** (before any code):
```bash
# In YOUR project directory (not named "bonsai")
echo "# Environment" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "CLAUDE.local.md" >> .gitignore

# Python projects - add immediately
echo ".venv/" >> .gitignore
echo "venv/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore

# JavaScript projects - add immediately  
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
```

2. **Create Virtual Environment IMMEDIATELY** (never use global):
```bash
# Python projects
uv venv                    # Creates .venv/ 
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

# JavaScript projects  
yarn install              # Creates node_modules/
```

3. **Create minimal project files**:
- `main.py` or `index.js` (single entry point)
- `pyproject.toml` or `package.json` (minimal config)
- `README.md` (basic description)

**Why this order matters:**
- .gitignore prevents accidental commits of generated files
- Virtual environments ensure reproducible, isolated development
- Both are essential infrastructure, not "tools to add later"

**For language-specific patterns**, refer to:
- Python: https://github.com/github/gitignore/blob/main/Python.gitignore
- Node: https://github.com/github/gitignore/blob/main/Node.gitignore
- But start minimal - only add patterns you actually need!

### Documentation Thresholds

- **Docstrings**: Functions with >2 parameters or non-obvious logic
- **Type hints**: Functions used in >2 places
- **README updates**: Only user-facing functions
- **Comments**: Only for non-obvious implementations

## Task Workflow (STRICT - Follow for EVERY operation)

1. **Plan Creation**
   - Analyze the user's request
   - **Check CLAUDE.local.md for environment-specific patterns**
   - **Check Don'ts section to avoid prohibited tools/patterns**
   - Identify files to modify/create
   - List required tools (only if not present and not in Don'ts)

2. **File Reading**
   - Read ALL files that will be modified
   - Understand current structure and dependencies

3. **Concept Alignment**
   - Cross-check plan with `concept.md` (THE MASTER)
   - If conflict between CLAUDE.md and concept.md, follow concept.md
   - Ensure changes align with project goals
   - Verify no Don'ts patterns are being introduced
   - Abort if misaligned with concept.md

4. **Implementation**
   - Write minimal code that solves the problem
   - No premature optimization
   - No unused imports or variables
   - **Ensure code is cross-platform** (use pathlib, not hardcoded paths)
   - **If new tool added**: Create minimal config
   - **If new tool added**: Update .gitignore immediately

5. **Environment Execution**
   - **CRITICAL**: Always use virtual environment (never global Python/Node)
   - **Python**: Ensure `.venv` is active before any python/uv commands
   - **JavaScript**: Ensure node_modules exists before any npm/yarn commands
   - **Verification**: `which python` should show `.venv/bin/python`
   - **If missing**: Create venv immediately (`uv venv` + activate)
   - **Apply patterns from CLAUDE.local.md**
   - **Record new discoveries in CLAUDE.local.md**
   - **Check .gitignore covers all generated files**

6. **Code Minimalism Check**
   - Remove any redundant code
   - Ensure every line has a purpose
   - Check if code is actually used

7. **Dependency Check**
   - Find all files using modified functions
   - Update all references
   - Maintain backward compatibility if possible

8. **Formatting & Linting**
   - Run formatter (ruff format, prettier)
   - Run linter (ruff check, eslint)
   - Fix ALL warnings and errors (ZERO tolerance)
   - **Update CLAUDE.local.md if tool behavior differs**

9. **Test Preparation**
   - Check if functions are testable
   - Use pytest, hypothesis, pydantic when appropriate
   - Write minimal but comprehensive tests

10. **Test Organization**
    - Mirror source structure in tests/
    - Name test files clearly (test_[functionality].py)
    - Group related tests

11. **Test Execution**
    - Run all tests
    - No workarounds or test manipulation
    - Fix code until tests pass naturally
    - **Document test runner specifics in CLAUDE.local.md**

12. **Concept Re-alignment**
    - Review all changes against `concept.md`
    - Ensure no scope creep occurred
    - **Verify .gitignore is complete**

13. **Pre-commit Validation**
    - Run pre-commit hooks (if configured)
    - Fix any issues
    - Only proceed when clean
    - **Final check**: `git status` shows no untracked files that should be ignored

14. **Documentation Updates**
    - Update `concept.md` if fundamental changes made
    - Update `README.md` with new user-facing functions
    - Keep documentation minimal but complete
    - **Update CLAUDE.local.md with session learnings**

15. **Cleanup**
    - Remove ALL temporary files
    - Delete unused imports
    - Clean up debug prints/logs
    - Remove .pyc, __pycache__, node_modules (if not needed)
    - Clear any test artifacts
    - **Update .gitignore if new patterns discovered**
    - **Verify no generated files are tracked by git**

## Tool-Specific Rules

### When NOT to Add Tools

- User asks for a feature that can be done with stdlib
- Current tools can handle the task with minor adjustments
- The complexity doesn't justify the dependency

### When to Add Tools

- Manual implementation would exceed 50 lines
- Industry standard for specific task (e.g., requests for HTTP)
- Security or performance critical features
- **BUT FIRST**: Check Don'ts section - use alternatives if listed

### Tool Addition Checklist

When adding any new tool, ALWAYS:
- [ ] Check Don'ts section for prohibited tools/patterns
- [ ] Create minimal configuration file
- [ ] Update .gitignore with tool-specific patterns  
- [ ] Document in README.md why it was added
- [ ] Update pyproject.toml or package.json
- [ ] Test that ignored files aren't tracked
- [ ] Commit config changes separately from code

## Dynamic Environment Learning (CLAUDE.local.md)

### Purpose
CLAUDE.local.md is a dynamically generated file that stores environment-specific learnings. It starts empty and grows as Claude Code discovers local system behaviors.

### What Gets Recorded
- Command variations that work/don't work (e.g., `cd` vs direct path usage)
- Virtual environment locations (e.g., `.venv` vs `venv` vs custom paths)
- System-specific command flags or options
- Path separators and file system quirks
- Permission requirements
- Shell-specific behaviors
- Package manager peculiarities
- **Platform differences** (Windows vs Linux vs macOS behaviors)

### Recording Format
```markdown
## Environment Learnings

### Working Directory Navigation
- ❌ `cd directory && command` - Doesn't persist between commands
- ✅ Use direct paths: `./directory/script.py`

### Virtual Environment Location
- Python venv: `./.venv/bin/python` (Linux/macOS)
- Python venv: `.\.venv\Scripts\python.exe` (Windows)
- ✅ Better: Use `sys.executable` when in activated venv

### System Commands
- ✅ Cross-platform: `Path.home()`, `shutil.rmtree()`
- ❌ Platform-specific: `rm -rf`, `del /s`

### Path Handling
- ✅ Always use: `Path()` from pathlib
- ✅ Join paths: `Path("folder") / "file.txt"`
- ❌ Never: `"folder/file.txt"` or `"folder\\file.txt"`
```

### Update Trigger
Whenever Claude Code:
1. Encounters an error and finds a working alternative
2. Discovers a system-specific path or command
3. Learns about local tool behavior
4. Finds environment variables or configurations

### Usage
- Check CLAUDE.local.md before attempting system operations
- Update immediately upon discovering new behaviors
- Use learned patterns in future operations

### Lifecycle
1. **Initial State**: File doesn't exist
2. **First Discovery**: Create CLAUDE.local.md with first learning
3. **Continuous Growth**: Append new discoveries as they occur
4. **Before Each Operation**: Check existing patterns
5. **After Errors**: Document what didn't work and what did

### Example Evolution
```markdown
## Day 1
### Virtual Environment
- ❌ `python -m venv venv` - Permission denied
- ✅ `python3 -m venv .venv` - Works

## Day 2  
### Command Execution
- ❌ `cd tests && pytest` - Directory change doesn't persist
- ✅ `pytest tests/` - Direct path works

## Day 3
### Package Installation  
- uv stores cache in: `/home/user/.cache/uv`
- uv venv location: `./.venv` (not `venv`)
```

### Git Strategy
Add to `.gitignore`:
```
CLAUDE.local.md
```

## Emergency Procedures

### When Things Break

1. Document the exact error
2. Try fixing with current tools first
3. Check if it's a version conflict
4. Only add new dependencies as last resort
5. Always document why the tool was added
6. **NEW**: Record environment-specific solutions in CLAUDE.local.md

### Git/Gitignore Issues

**Problem**: Accidentally committed files that should be ignored
```bash
# Remove from git but keep locally
git rm --cached filename
# Add to .gitignore
echo "filename" >> .gitignore
# Commit the fix
git commit -m "Remove tracked file that should be ignored"
```

**Problem**: Generated files polluting git status
- Immediately update .gitignore
- Use patterns like `*.pyc`, `*.log`, `build/`
- Check if tool has standard ignore patterns

### Rollback Strategy

1. Keep changes atomic
2. Test after each significant change
3. Maintain working state between features

## Configuration Adaptation

All tool configurations should dynamically adapt to project structure:

- If Python files are in `app/` instead of `src/`, update configs
- If tests are in `spec/` instead of `tests/`, update configs
- Always scan project structure before applying configurations
- **Keep configs in sync with actual file structure**
- **Update .gitignore when directory structure changes**

### Configuration Files to Maintain

As project grows, keep these configs updated:
- `.gitignore` - CRITICAL: Update with every new tool/pattern
- `pyproject.toml` - Python dependencies and tool configs
- `package.json` - JavaScript dependencies
- `.prettierrc` - Code formatting rules
- `tsconfig.json` - TypeScript configuration (if needed)
- `.env.example` - Document required environment variables

## Remember

- **concept.md is THE MASTER** - It overrides all other configurations
- **Every file has a purpose**
- **Every line has a reason**  
- **Every tool has a trigger**
- **When in doubt, choose minimal**
- **Keep git history clean - update .gitignore before commits**
- **Write once, run everywhere - no OS-specific code**
- **Respect user's code when they're the primary author**

---

*Note: BONSAI is the name of this development template/methodology. Your actual project should have its own name. The BONSAI name and metaphor are for human understanding and GitHub presentation. Claude Code should focus on the actual guidelines and workflow described in this document.*

## Working with Existing User Code

When user asks to "check my code" or similar:

1. **Respect Existing Structure**
   - If user wrote 80%+ of code, follow their patterns
   - Make minimal changes to achieve compliance
   - Preserve user's file organization and naming conventions

2. **Apply Guidelines Gently**
   - Fix critical issues (security, cross-platform compatibility)
   - Suggest improvements without restructuring
   - Add missing configs (.gitignore, tool configs) if needed
   - Update only what's necessary for CLAUDE.md compliance

3. **Priority Order for Changes**
   - 🔴 Critical: Security issues, platform-specific code
   - 🟡 Important: Missing .gitignore, incorrect tool usage
   - 🟢 Optional: Style improvements, minor optimizations

4. **Communication**
   - Explain why changes are needed
   - Offer alternatives that preserve user's approach
   - Ask before making structural changes

Example: If user has 10 files in `src/utils/helpers/`, don't suggest flattening to single `helpers.py` just because it's "minimal" - their structure likely has a purpose.

## Working with Existing Projects

When migrating an existing project:

1. **User prepares the project**:
   - Clone from GitHub or locate existing project
   - Keep it completely separate from new project
   
2. **User creates new directory** for minimal rebuild
   ```bash
   # Name it after YOUR project, not "bonsai"
   mkdir my-app-minimal  # ✓ Good
   mkdir my-app-v2      # ✓ Good
   # mkdir bonsai       # ✗ Wrong - that's the template name
   ```

3. **User provides path** to old project:
   ```bash
   cd new-minimal-project
   claude-code "Please migrate the project at /path/to/old-project following PROJECT-TRANSFER.md"
   ```

4. **Claude Code rebuilds** following PROJECT-TRANSFER.md workflow:
   - **FIRST**: Copy concept.md if it exists (crucial for guidance)
   - Analyzes without modifying original
   - Creates migration/ documentation
   - Rebuilds minimally from ground up (BONSAI style)
   - Preserves only essential functionality
   - All decisions guided by concept.md

The goal is not to copy, but to recreate as it should have been built - like pruning a tree into a bonsai.