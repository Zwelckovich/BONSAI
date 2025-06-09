# 🌱 BONSAI - Build Only Necessary Software, Adapt Intelligently

> Like a bonsai tree, every branch (feature) is carefully considered. This template embodies minimal yet beautiful and functional software development through careful pruning of unnecessary code. Projects grow slowly and deliberately, making development an art form of constraint and intention.

**Note**: BONSAI is the name of this development template/methodology, NOT your project name. Your project can be named anything you want!

---

# CLAUDE.md - Dynamic Minimal Development Guide

## ⚠️ CRITICAL: DO NOT MODIFY THIS FILE

**CLAUDE.md is a TEMPLATE - it should NEVER be modified during normal development**

- ❌ **NEVER** update CLAUDE.md with project-specific information
- ❌ **NEVER** add your project's learnings, status, or configurations here
- ❌ **NEVER** modify CLAUDE.md unless explicitly instructed by the user
- ✅ **ALWAYS** use CLAUDE.local.md for project-specific learnings
- ✅ **ALWAYS** use concept.md for project vision and decisions
- ✅ **ONLY** update CLAUDE.md when user explicitly says "update CLAUDE.md" or "change the template"

**If you need to document something project-specific**:
- Environment learnings → CLAUDE.local.md
- Project decisions → concept.md
- Session tracking → CLEANUP.md
- User documentation → README.md

## Quick Reference

### Core Documents
- **concept.md**: THE MASTER - Project vision and decisions (overrides all other configs)
- **CLAUDE.md**: Template for workflow and practices (READ-ONLY - NEVER MODIFY)
  - ⚠️ This file is a template - do not add project-specific information
  - ⚠️ Only modify when user explicitly requests template updates
- **CLAUDE.local.md**: Auto-generated environment learnings (created by Claude Code)
  - ✅ This is where ALL project-specific discoveries go
  - ✅ Update this file, NOT CLAUDE.md

### Session Management
- **CLEANUP.md**: Persistent session tracker - Always in .gitignore
  - Track all files created during development
  - Review and clean at session end
  - Persists for debugging history
  - See "CLEANUP.md - Session Hygiene Tracker" section for details

### User-Facing Documents  
- **README.md**: Manual for end users of your software
- **.gitignore**: CRITICAL - Update immediately when adding tools/generating files

### Special Cases
- **PROJECT-TRANSFER.md**: Guide for migrating existing projects (user provides path)
- **migration/**: Temporary analysis during project transfers (rarely needed)
- **CLEANUP.md**: Always present (in .gitignore), shows session history
- **Don'ts Section**: User-defined patterns/tools to avoid (check before adding anything)
- **Command Aliases**: User-defined shortcuts - type exactly (e.g., just "c/p" not "please c/p")

## Philosophy & Core Principles

**Main Principle**: Start minimal, grow only when needed. Every addition must be justified by actual project requirements.

- **Zero Waste**: No unused dependencies, no boilerplate, no "just in case" additions
- **Progressive Enhancement**: Tools are added when complexity demands them, not before
- **Single Responsibility**: Each file/function does one thing well
- **Continuous Alignment**: Every change is validated against `concept.md`
- **Respect Preferences**: Honor user's Don'ts - use specified alternatives
- **Cross-Platform First**: Code must work on Windows, Linux, and macOS
- **Session Hygiene**: Track all created files with CLEANUP.md, remove what's not needed
- **Template Purity**: CLAUDE.md remains unmodified - it's a template, not a workspace
- **Clean Naming**: Use simple, clear names without confusing prefixes
  - ❌ Don't use temporary prefixes: "HybridManager", "NewService", "TempHandler", "EnhancedProcessor"
  - ✅ Use direct names: "Manager", "Service", "Handler", "Processor"
  - ❌ Don't keep multiple names for the same thing: both "PlottingManager" and "HybridPlottingManager"
  - ✅ Consolidate to single, clear name as soon as implementation stabilizes
- **Immediate Cleanup**: Remove unused files immediately, don't accumulate "old" versions
  - ❌ Don't keep: "file_old.py", "backup_service.py", "previous_version.js", "system_v2.py"
  - ✅ Delete unused files immediately after consolidation - BUT ONLY after usage scanning
  - ❌ Don't create "for reference" copies unless explicitly requested by user
  - ✅ Use git history for reference - that's what version control is for
  - ⚠️ **CRITICAL**: Always scan for usage with Grep tool before deleting ANY file

The CLEANUP.md approach embodies BONSAI philosophy - like pruning a bonsai tree, we actively remove what doesn't belong. Every file must justify its existence or be removed. The cleanup record persists as a valuable debugging tool, showing the history of careful maintenance.

**Remember**: Just as a bonsai master never confuses the care instructions with the tree itself, never confuse CLAUDE.md (the instructions) with your project files.

### Hierarchy of Authority
0. **Command Aliases** - If user input matches exactly, execute immediately
1. **concept.md** - The ultimate source of truth
   - Overrides all other configurations
   - Example: If CLAUDE.md says "use yarn" but concept.md says "use npm", use npm
2. **User's existing code style** - When user writes majority of code
3. **CLAUDE.md guidelines** - Default practices when starting fresh (NEVER MODIFY)
4. **CLAUDE.local.md** - Environment-specific learnings

**Important**: CLAUDE.md is a read-only template. All project-specific discoveries, learnings, or modifications go in CLAUDE.local.md or concept.md. Only update CLAUDE.md when the user explicitly requests template improvements.

## Backend/Frontend Structure Rules

### Structure Decision Hierarchy

When determining project structure for backend/frontend applications:

1. **User's Existing Structure** (if user wrote >60% of code)
   - Detect and document in CLAUDE.local.md
   - Preserve their organization patterns
   - Make minimal changes for compliance

2. **concept.md Specifications** (if defined)
   - Follow explicit structure guidelines
   - Example: "Use src/ for all source files"
   - Overrides BONSAI defaults

3. **BONSAI Minimal Structure** (default)
   - Start with single files
   - Split only when complexity demands
   - Feature-based, not type-based organization

### Structure Detection & Persistence

**CRITICAL**: Once a structure decision is recorded in CLAUDE.local.md, it MUST NOT be changed unless:
- No structure decision exists yet in CLAUDE.local.md
- User explicitly requests: "Change to BONSAI structure" or "Use structure from concept.md"

On first backend/frontend operation:
1. **Check CLAUDE.local.md FIRST** - If structure decision exists, use it
2. If no decision recorded:
   - Scan for existing structure patterns
   - Check concept.md for structure specifications  
   - Make decision based on hierarchy above
3. Document decision in CLAUDE.local.md:

```markdown
## Project Structure Decision
### Date: 2024-01-15
### Structure Type: [User Custom|concept.md|BONSAI]
### LOCKED: Do not change unless user explicitly requests

### Detected Pattern:
- Backend: [description]
- Frontend: [description]  
- Reasoning: [why this choice]

### Structure Rules:
- API endpoints: [location]
- Components: [location]
- Shared code: [location]
- Tests: [location]
```

### Environment Placement (BONSAI Style)

#### Single Technology Projects
```
project/
├── .venv/              # Python venv at root
├── node_modules/       # Node deps at root
├── main.py            # Or index.js
└── README.md
```

#### Full-Stack Projects - Progressive Evolution

**Stage 1: Both in Root (Start here)**
```
project/
├── .venv/              # Python backend env
├── node_modules/       # Frontend deps
├── backend.py          # Backend code
├── frontend.html       # Frontend code
├── package.json        # Frontend deps
├── pyproject.toml      # Backend deps
└── README.md
```

**Stage 2: Split When Needed (Only if conflicts)**
```
project/
├── backend/
│   ├── .venv/          # Python env
│   ├── main.py
│   └── pyproject.toml
├── frontend/
│   ├── node_modules/   # Node deps
│   ├── index.html
│   └── package.json
└── README.md
```

**Environment Rules**:
- Start with environments at project root
- Only move into subdirectories when actual conflicts occur
- Never create empty directory structures preemptively
- Document environment locations in CLAUDE.local.md

### Structure Migration

When user explicitly requests structure change:
```bash
"Migrate this project to BONSAI structure"
"Follow the structure defined in concept.md"
"Keep my custom structure"
```

Process:
1. Confirm user wants to override CLAUDE.local.md decision
2. Document current structure
3. Plan migration with file mappings
4. Update all imports and references
5. Move environments if needed
6. Test everything still works
7. Update CLAUDE.local.md with new decision (marked as explicit user choice)

### BONSAI Default Structures

#### Progressive Backend Evolution (Python/FastAPI)
```
# Stage 1: Single file
main.py                 # Everything here

# Stage 2: Minimal split (>200 lines)
backend/
├── main.py            # Entry point & routes
└── models.py          # Data models

# Stage 3: Feature split (>500 lines)
backend/
├── main.py            # Entry point
├── api.py             # Routes/endpoints
├── models.py          # Data models
└── auth.py            # Only if auth complex
```

#### Progressive Frontend Evolution (React)
```
# Stage 1: Single file
index.html             # React inline

# Stage 2: Minimal split
frontend/
├── index.html         
├── app.js             # Extracted JS
└── styles.css         # Extracted CSS

# Stage 3: Component split (>3 components)
frontend/
├── index.html
├── App.jsx            # Main component
├── components/        # Feature components
│   ├── Auth.jsx
│   └── Dashboard.jsx
└── api.js             # API calls
```

#### Full-Stack Progressive Evolution
```
# Stage 1: Two files (Start here!)
project/
├── backend.py         # Entire backend
├── frontend.html      # Entire frontend
└── README.md

# Stage 2: Static assets extracted
project/
├── backend.py         
├── index.html         
├── static/
│   ├── app.js
│   └── styles.css
└── README.md

# Stage 3: Backend/Frontend split (only when truly needed)
project/
├── backend/
│   ├── .venv/         # Moved from root
│   ├── main.py
│   └── models.py
├── frontend/
│   ├── node_modules/  # Moved from root
│   ├── index.html
│   └── src/
│       └── App.jsx
└── README.md
```

### Anti-Patterns to Avoid

❌ **Premature Folder Structure**
```
src/
├── controllers/
├── models/
├── views/
├── utils/
├── helpers/
├── middleware/
├── services/
└── repositories/
```
*Why bad*: Empty folders, single-file folders, over-organization

✅ **BONSAI Approach**
```
api.py          # All endpoints here until it's too big
models.py       # All models here until it's too big
```

### When to Create Folders

Only create a folder when:
- You have 3+ files of similar purpose
- Files are clearly related by feature
- It improves code discovery
- It reduces naming conflicts

Examples:
- `auth_login.py`, `auth_register.py`, `auth_reset.py` → `auth/`
- `UserModel.js`, `PostModel.js`, `CommentModel.js` → `models/`

### Framework-Specific Minimal Structures

#### FastAPI Minimal
```python
# main.py - Everything in one file until complexity demands split
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

# Add more endpoints here
# Split to api.py when >10 endpoints
# Split to models.py when >3 models
```

#### Express Minimal
```javascript
// server.js - Everything in one file
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000)
// Split when file exceeds 200 lines
```

#### React Minimal
```html
<!-- index.html - Start with everything inline -->
<!DOCTYPE html>
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        function App() {
            return React.createElement('h1', null, 'Hello World')
        }
        ReactDOM.render(React.createElement(App), document.getElementById('root'))
    </script>
</body>
</html>
<!-- Extract to app.js when logic exceeds 50 lines -->
```

### Structure Decision Examples in CLAUDE.local.md

```markdown
## Project Structure Decision
### Date: 2024-01-15
### Structure Type: User Custom
### LOCKED: Do not change unless user explicitly requests

### Detected Pattern:
- Backend: Flask app in /server with blueprints
- Frontend: React app in /client with standard CRA structure
- Reasoning: User has existing 50+ file project with established patterns

### Structure Rules:
- API endpoints: /server/api/*.py
- React components: /client/src/components/
- Shared types: /shared/types.ts
- Tests: Alongside source files as *.test.py/js
- Environments: /server/.venv and /client/node_modules

### DO NOT CHANGE unless user explicitly requests migration
```

## Best Practices & Preferred Tools

### Python
- **Package Manager**: uv (always use `uv add`, `uv sync`)
- **Formatter**: ruff
- **Type Checker**: pyright (only when needed)
- **Testing**: pytest + hypothesis (when complexity justifies)

#### Ruff Philosophy
Ruff should catch real errors and promote clean code, not enforce arbitrary restrictions:
- ✅ Catch actual bugs (undefined names, syntax errors)
- ✅ Promote cross-platform code (pathlib usage)
- ✅ Encourage modern Python (pyupgrade)
- ❌ Don't enforce arbitrary limits (line length, arg count)
- ❌ Don't require documentation everywhere
- ❌ Don't be dogmatic about style preferences

**Note on Linting**: BONSAI uses linting to catch bugs and promote clean code, not to enforce arbitrary restrictions. The configuration should help, not hinder development. Start minimal and add rules only when they provide clear value.

#### Ruff Configuration (add to pyproject.toml when needed):
```toml
[tool.ruff]
line-length = 100
indent-width = 4
target-version = "py311"

[tool.ruff.lint]
select = [
    "E",    # pycodestyle errors (essential)
    "W",    # pycodestyle warnings (essential)
    "F",    # pyflakes (catches real errors)
    "I",    # isort (import organization)
    "B",    # flake8-bugbear (catches common bugs)
    "C4",   # flake8-comprehensions (performance)
    "UP",   # pyupgrade (modernization)
    "SIM",  # flake8-simplify (cleaner code)
    "PTH",  # flake8-use-pathlib (cross-platform)
    "RUF",  # Ruff-specific rules
]
ignore = [
    # Complexity limits - BONSAI is about minimal code, not arbitrary limits
    "PLR0913",  # Too many arguments (let the user decide)
    "PLR0912",  # Too many branches (sometimes necessary)
    "PLR0915",  # Too many statements (organic growth)

    # Pragmatic development
    "F401",     # Imported but unused (for availability checks)
    "E501",     # Line too long (some lines need length)
    "SIM108",   # Ternary operator (readability preference)
    "B008",     # Function calls in defaults (sometimes needed)

    # User preference
    "UP038",    # Use X | Y in isinstance (readability)
    "PTH123",   # Path.open vs open() (both are fine)
]
fixable = ["ALL"]
unfixable = []

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "auto"

[tool.ruff.lint.per-file-ignores]
"tests/*" = ["S101", "ARG", "PLR2004"]  # Allow assert, unused args, magic values
"examples/*" = ["T201"]  # Allow print statements
"scripts/*" = ["T201"]  # Allow print in scripts
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
- **Package Manager**: yarn (or pnpm for better performance)
- **Build Tool**: vite (always - not "when needed")
- **Framework**: React 18+ with TypeScript
- **State Management**: zustand (simpler than Redux)
- **Server State**: @tanstack/react-query
- **Formatter**: prettier
- **Linter**: eslint (minimal rules)
- **Testing**: vitest + @testing-library/react
- **Scripts**: Use `node scripts/build.js` not shell scripts

#### Vite Configuration (minimal):
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
```

#### TypeScript Configuration (when needed):
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "skipLibCheck": true
  },
  "include": ["src"]
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

### Overly Restrictive Linting
- **NO arbitrary parameter limits**: Functions can have as many parameters as needed
- **NO forced docstrings**: Document only when it adds value
- **NO line length dogma**: Some lines (URLs, data) need to be long
  - Instead: Use judgment - split lines for readability, not rules

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

### Universal Check Script (Optional)
For projects with multiple languages or complex linting, create a universal check script:

```python
#!/usr/bin/env python3
"""Universal linting check - works for any project"""
import subprocess
import sys
from pathlib import Path

def run_check(cmd, description):
    """Run a check command and report results"""
    print(f"\n{'='*60}")
    print(f"Running: {description}")
    print(f"Command: {cmd}")
    print(f"{'='*60}")

    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)

    return result.returncode == 0

# Define checks based on project files
checks = []

# Python
if Path("pyproject.toml").exists() or Path("setup.py").exists():
    checks.extend([
        ("uv run ruff format --check .", "Python formatting check"),
        ("uv run ruff check .", "Python linting"),
    ])

# JavaScript/TypeScript  
if Path("package.json").exists():
    checks.extend([
        ("npm run lint", "JavaScript linting"),
        ("npm run format:check", "JavaScript formatting check"),
    ])

# Go
if Path("go.mod").exists():
    checks.extend([
        ("gofmt -l .", "Go formatting check"),
        ("go vet ./...", "Go linting"),
    ])

# Add more languages as needed...

# Run all checks
all_passed = True
for cmd, description in checks:
    if not run_check(cmd, description):
        all_passed = False

# Summary
print(f"\n{'='*60}")
if all_passed:
    print("✅ All checks passed!")
else:
    print("❌ Some checks failed! Fix the issues above.")
    sys.exit(1)
```

### Example Python Script Instead of Makefile:
```python
#!/usr/bin/env python3
"""Development tasks - cross-platform alternative to Make"""

import subprocess
import sys
import shutil
from pathlib import Path
from datetime import datetime

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

def cleanup_session():
    """Clean temporary session files based on CLEANUP.md"""
    cleanup_file = Path("CLEANUP.md")
    if not cleanup_file.exists():
        print("No CLEANUP.md found - creating one now to track current files")
        # Could auto-generate based on git status
        return

    # Parse CLEANUP.md and remove files marked for deletion
    content = cleanup_file.read_text()
    deleted_count = 0

    for line in content.split('\n'):
        if line.strip().startswith('- [ ] Delete:') or '(to delete)' in line.lower():
            # Extract filename and delete if exists
            # Implementation depends on CLEANUP.md format
            deleted_count += 1

    # Update CLEANUP.md with completion status instead of deleting
    with open(cleanup_file, 'a') as f:
        f.write(f"\n\n## Cleanup Complete: {datetime.now()}\n")
        f.write(f"- Deleted {deleted_count} temporary files\n")
        f.write("- Session ended cleanly ✓\n")

    print(f"✓ Session cleanup complete - {deleted_count} files removed")
    print("  CLEANUP.md preserved for debugging")

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

def commit_push():
    """Commit all changes and push - alias: c/p"""
    subprocess.run(["git", "add", "-A"])
    # Generate commit message based on changes
    subprocess.run(["git", "commit", "-m", "Update project files"])
    subprocess.run(["git", "push", "origin", "main"])
    print("✓ Committed and pushed")

if __name__ == "__main__":
    tasks = {
        "clean": clean,
        "cleanup": cleanup_session,
        "format": format,
        "lint": lint,
        "test": test,
        "install": install,
        "c/p": commit_push,  # Alias support
    }

    if len(sys.argv) > 1 and sys.argv[1] in tasks:
        tasks[sys.argv[1]]()
    else:
        print(f"Usage: python scripts/dev.py {{{','.join(tasks.keys())}}}")
```

### Other Don'ts (Add Your Own)
- **NO [tool]**: [Reason]
  - Instead: [Alternative]
- **NO [pattern]**: [Reason]  
  - Instead: [Better approach]

**Instructions**: Replace the above with your actual preferences. Every project has different needs - add the tools, patterns, or approaches you want to avoid in YOUR project.

## Command Aliases (User-Defined Shortcuts)

When the user sends a prompt that matches an alias exactly, execute the corresponding action:

**⚠️ Customization Note**: The default aliases below are starting suggestions. Add your own aliases that match your workflow. This section is meant to be customized per project!

**🤖 For Claude Code**: If user input is EXACTLY one of these aliases (nothing more, nothing less), immediately execute the defined commands without asking for clarification. Aliases take priority over all other interpretations.

### Default Aliases

- **"c/p"** → Commit and push
  ```bash
  # Execute:
  git add -A
  git commit -m "[generate appropriate commit message from recent changes]"
  git push origin main  # or current branch
  ```

- **"cleanup"** → Full project cleanup scan
  ```markdown
  # Process:
  1. Scan ALL project files (except .gitignore entries)
  2. Create/update CLEANUP.md with every non-essential file found
  3. Identify temporary files, build artifacts, debug scripts
  4. Show preview: "Found X files to potentially remove"
  5. Execute standard cleanup review process
  6. Remove all files marked for deletion
  7. Update CLEANUP.md with results

  # Common patterns to find:
  - debug_*.py, test_*.py (unless in tests/)
  - *.tmp, *.log, *.bak, *~
  - old_*, backup_*, copy_of_*
  - __pycache__/, .pytest_cache/, htmlcov/
  - Any file not serving current functionality
  ```

**Note**: Aliases are case-sensitive. Type them exactly as defined.

### How Aliases Work
1. User types a single word/phrase that matches an alias
2. Claude Code recognizes it and executes the defined commands
3. No need to explain what you want - just type the alias
4. Aliases can chain multiple operations together
5. Create aliases for YOUR most common workflows

**Pro tip**: Start with the defaults, then add aliases for repetitive tasks you do often.

## Dynamic Growth Rules

### CLEANUP.md - Session Hygiene Tracker

Every coding session MUST use CLEANUP.md to track file creation:

#### Purpose
- Track ALL files created during each session
- Document why each file was created
- Make cleanup decisions explicit
- Ensure no temporary files pollute the project
- Provide audit trail for debugging (persists between sessions)
- Embody BONSAI's "every file has a purpose" principle

**Why this matters**: Just as a bonsai master carefully removes each unnecessary branch, we track and remove each unnecessary file. The act of documenting WHY each file exists forces us to think about whether it truly belongs in our minimal project.

#### Format
```markdown
# Cleanup Tracker - Current Session: 2024-01-15 14:30

## Previous Session: 2024-01-14 16:00
### Summary
- Created: 7 files + 3 artifact directories
- Kept: 2 files (api_client.py, test_api_client.py)
- Deleted: 5 temporary files + all artifacts
- Status: Clean ✓

## Current Session Files
- [ ] debug_connection.py - Testing API connection issue
- [ ] test_data.json - Sample data for parser testing  
- [ ] output.log - Debug output from failed run
- [ ] new_feature.py - Implementing user's requested feature
- [ ] test_new_feature.py - Tests for the new feature
- [ ] .env.test - Test environment variables
- [ ] migration_notes.md - Temporary migration planning

## Generated Artifacts
- [ ] __pycache__/ - Python bytecode
- [ ] .pytest_cache/ - Pytest temporary files
- [ ] htmlcov/ - Coverage report (180 files)
- [ ] dist/ - Build output

## Cleanup Decisions
- [x] Keep: new_feature.py (core functionality)
- [x] Keep: test_new_feature.py (needed tests)
- [ ] Delete: debug_connection.py (issue resolved)
- [ ] Delete: test_data.json (was temporary)
- [ ] Delete: output.log (debug complete)
- [ ] Delete: .env.test (use .env.example instead)
- [ ] Delete: migration_notes.md (info moved to docs)
- [ ] Delete: ALL generated artifacts
```

**Example: Completed session (file persists for next time)**:
```markdown
# Cleanup Tracker - Session Complete: 2024-01-15 16:45

## Session Summary
- Started: 2024-01-15 14:30
- Completed: 2024-01-15 16:45
- Created: 5 files + 2 generated directories
- Kept: 2 essential files
- Deleted: 3 temporary files + all artifacts
- Final status: Clean ✓

## Files Kept
✓ api_client.py - Core feature implementation
✓ test_api_client.py - Test coverage

## Files Deleted
✗ debug_api.py - Debugging complete
✗ sample_response.json - No longer needed
✗ old_client.py - Backup not needed
✗ __pycache__/ - Auto-generated
✗ .pytest_cache/ - Auto-generated

## Notes for Next Session
- API client working correctly
- All tests passing
- Ready for next feature

---
[This file persists for debugging - will be reviewed at next session start]
```

#### Rules
1. Check for existing CLEANUP.md at session start
2. If exists, review previous session's cleanup
3. Clear contents but keep file for new session
4. Add EVERY file immediately when created
5. Include generated directories and their file counts
6. Review thoroughly before session end
7. Execute cleanup but KEEP CLEANUP.md for history
8. NO exceptions - even "quick debug" files get tracked

**This is NOT optional** - CLEANUP.md is as essential as .gitignore. It's the difference between a carefully maintained bonsai and an overgrown shrub.

#### Lifecycle
1. **Session Start**: Check for existing CLEANUP.md
2. **Previous Cleanup**: If exists, verify previous cleanup was completed
3. **Archive/Clear**: Keep previous session summary, start new section
4. **During Session**: Add every created file immediately
5. **Session End**: Execute cleanup, mark complete with timestamp
6. **Persist**: Keep CLEANUP.md for debugging (never delete)
7. **Next Session**: Review and start fresh section

**Example lifecycle**:
```
Session 1: Create CLEANUP.md → Track files → Clean → Keep file
Session 2: Review previous → Clear → Track new → Clean → Keep file
Session 3: Review previous → Clear → Track new → Clean → Keep file
```

This creates a rolling history of what was created and cleaned in each session.

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

#### **type hints**: Function used in 3+ places or has 3+ parameters

#### **docker**: Deployment or complex dependencies
#### **CI/CD**: Automated deployment or team collaboration

#### **Linting Rules**: Add progressively
- **Start**: Only E, W, F (catch real errors)
- **Growing**: Add I, B, C4 (organization and common bugs)  
- **Mature**: Add UP, SIM, PTH (modernization and simplicity)
- **Never**: Arbitrary limits that restrict natural code growth

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

   # Session management
   CLEANUP.md

   # Temporary files (should be in CLEANUP.md)
   *.tmp
   *.bak
   *~
   debug_*
   test_*
   temp_*
   old_*
   ```
   **Note**: Even though temp files are in .gitignore, they should STILL be tracked in CLEANUP.md and removed at session end!

3. **Install Tool Dependencies**
   - For pre-commit: `uv add --dev pre-commit` THEN `uv run pre-commit install`
   - For pytest: `uv add --dev pytest`
   - For other tools: Install package first, then initialize/configure

4. **CRITICAL for Pre-commit: Install Git Hooks**
   - Configuration file (.pre-commit-config.yaml) ≠ Installed hooks
   - MUST run `uv run pre-commit install` to activate hooks in git
   - Verify installation: `ls -la .git/hooks/pre-commit` should exist
   - Test hooks: `uv run pre-commit run --all-files`

5. **Update Documentation**

### Order of Operations (CRITICAL)

When introducing a new tool:
1. **FIRST**: Update .gitignore with tool patterns
2. **THEN**: Install package dependencies (`uv add --dev toolname`)
3. **THEN**: Initialize/configure the tool (create config files)
4. **CRITICAL**: For pre-commit, run `uv run pre-commit install` to activate hooks
5. **FINALLY**: Generate any files and test tool works

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
echo "" >> .gitignore
echo "# Session tracking (persists for debugging)" >> .gitignore
echo "CLEANUP.md" >> .gitignore

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

- **Docstrings**: Only when the function name and parameters don't make the purpose clear
- **Type hints**: Functions used in >2 places
- **README updates**: Only user-facing functions
- **Comments**: Only for non-obvious implementations

## Task Workflow (STRICT - Follow for EVERY operation)

1. **Plan Creation & Cleanup Tracking**
   - **FIRST PRIORITY**: Check if user's prompt exactly matches an alias
     - If "c/p" → Execute commit and push sequence
     - If "cleanup" → Execute full project cleanup
     - If other alias → Execute defined commands
     - If match found, STOP here - don't continue workflow
   - Analyze the user's request (if not an alias)
   - **VERIFY**: Is user asking to modify CLAUDE.md itself? If not, NEVER modify it!
   - **CHECK for existing CLEANUP.md** from previous session:
     - If exists: Review it, ensure previous cleanup was completed
     - Archive or clear its contents (keep file for new session)
   - **CREATE/UPDATE CLEANUP.md** to track all files created in this session:
     ```markdown
     # Cleanup Tracker - Session Started: [timestamp]

     ## Previous Session Summary
     [If applicable, brief summary of what was cleaned in last session]

     ## Files Created This Session
     - [ ] filename.py - Purpose: [why created]
     - [ ] test_debug.py - Purpose: debugging X issue
     - [ ] temp_data.json - Purpose: testing data parsing

     ## Commands Run That Generate Files
     - `command` - Generates: [what files/folders]

     ## Cleanup Decisions
     - [x] Keep: filename.py (core functionality)
     - [ ] Delete: test_debug.py (debugging complete)
     - [ ] Delete: temp_data.json (no longer needed)
     ```
   - Example initial CLEANUP.md:
     ```markdown
     # Cleanup Tracker - Session Started: 2024-01-15 10:30

     ## Previous Session: 2024-01-14 15:00
     - Cleaned: 5 debug files, 2 test data files
     - Kept: api_handler.py, test_api_handler.py

     ## Files Created This Session
     (will be updated as files are created)

     ## Generated Artifacts Expected
     - [ ] __pycache__/ - Python bytecode (auto-generated)
     - [ ] .pytest_cache/ - If tests are run
     - [ ] .ruff_cache/ - If ruff is run

     ## Cleanup Decisions
     (to be completed at session end)
     ```
   - **Check CLAUDE.local.md for environment-specific patterns**
   - **Check Don'ts section to avoid prohibited tools/patterns**
   - Identify files to modify/create
   - List required tools (only if not present and not in Don'ts)

2. **File Reading**
   - Read ALL files that will be modified
   - Understand current structure and dependencies
   - **Check CLEANUP.md status**:
     - If exists with incomplete cleanup: Complete it first
     - If doesn't exist: Note for creation in step 1
     - If exists and complete: Ready to proceed

3. **Concept Alignment**
   - Cross-check plan with `concept.md` (THE MASTER)
   - If conflict between CLAUDE.md and concept.md, follow concept.md
   - Ensure changes align with project goals
   - Verify no Don'ts patterns are being introduced
   - Abort if misaligned with concept.md

4. **Implementation**
   - Write minimal code that solves the problem
   - **ADD every new file to CLEANUP.md immediately upon creation**
   - No premature optimization
   - No unused imports or variables
   - **Ensure code is cross-platform** (use pathlib, not hardcoded paths)
   - **If new tool added**: Create minimal config
   - **If new tool added**: Update .gitignore immediately
   - **Track in CLEANUP.md**: Any generated files, caches, or build artifacts

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

8. **Formatting & Linting (MANDATORY - NEVER SKIP)**
   - **STOP** - This step is NOT optional
   - Run the project's formatter (e.g., ruff format, prettier, gofmt, rustfmt)
   - Run the project's linter (e.g., ruff check, eslint, golint, clippy)
   - **READ THE ENTIRE OUTPUT** - Every warning, every error
   - **FIX ALL ISSUES** - Zero tolerance means ZERO issues remaining:
     - No unused imports
     - No unused variables  
     - No style violations
     - No complexity warnings you can reasonably fix
   - **RE-RUN THE LINTER** to verify all issues are resolved
   - **VERIFY SUCCESS** - Output must explicitly indicate success:
     - "All checks passed" / "No issues found" / exit code 0
     - NOT just silence - confirm positive success message
   - **DO NOT PROCEED** if any issues remain unfixed
   - **Update CLAUDE.local.md** with any tool-specific discoveries
   - **Common mistake**: Running the command but not reading output
   - **Remember**: Clean code is part of minimal philosophy

9. **Test Preparation**
   - Check if functions are testable
   - Use pytest, hypothesis, pydantic when appropriate
   - Write minimal but comprehensive tests
   - **Update CLEANUP.md**: Add any test files, test data, or coverage reports

10. **Test Organization**
    - Mirror source structure in tests/
    - Name test files clearly (test_[functionality].py)
    - Group related tests

11. **Test Execution**
    - Run all tests
    - No workarounds or test manipulation
    - Fix code until tests pass naturally
    - **Document test runner specifics in CLAUDE.local.md**
    - **Update CLEANUP.md**: Add any generated test artifacts (.pytest_cache, coverage reports)

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
    - **NEVER update CLAUDE.md** unless explicitly instructed by user
    - **Remember**: CLAUDE.md is a template, not a project document

15. **File Usage Scanning (MANDATORY - Before ANY deletion)**
    - **STOP** - NEVER delete a file without checking usage first
    - **Use Grep tool** to scan entire codebase for:
      - Filename: `grep -r "filename" .` 
      - Class names: `grep -r "ClassName" .`
      - Function names: `grep -r "function_name" .`
      - Import statements: `grep -r "from filename import" .`
    - **Check ALL file types**: .py, .js, .md, .txt, .json, .yaml, etc.
    - **If ANY usage found**: Update references BEFORE deleting the file
    - **If unsure**: Ask user before deletion - better safe than sorry
    - **Document findings**: Add scan results to CLEANUP.md

16. **Naming Consistency Review (MANDATORY)**
    - **STOP** - Review all class/function/file names before completing task
    - **Remove confusing prefixes**: "Hybrid", "New", "Temp", "Enhanced", "Old", "V2", etc.
    - **Eliminate duplicate names**: If you have both "Manager" and "HybridManager", consolidate to one
    - **Use simple, direct names**: What would a new developer expect this to be called?
    - **Delete unused files immediately**: Only AFTER step 15 usage scanning confirms no usage
    - **Update all imports and references** to use consistent naming
    - **Verify no references to old names remain** using Grep tool
    - **Remember**: Use git history for reference, not extra files

17. **Cleanup Review & Execution (MANDATORY)**
    - **STOP** - Do not skip this step
    - **Open CLEANUP.md** and review EVERY file listed
    - **For each file, ask**:
      - Is this file part of the core functionality?
      - Will the user need this file after this session?
      - Is this a debug/test/temporary file?
      - Is this already in .gitignore?
    - **Mark decisions** in CLEANUP.md:
      - ✓ Keep: Core files, configs, documentation
      - ✗ Delete: Debug scripts, test outputs, temporary files
    - **Execute cleanup**:
      - Delete ALL files marked for deletion
      - Remove empty directories
      - Clear caches (__pycache__, .pytest_cache, etc.)
      - Delete any generated files not in .gitignore
    - **Verify cleanup**:
      - Run `git status` - should only show intended changes
      - Check no temporary files remain
    - **Update CLEANUP.md with session summary**:
      ```markdown
      ## Session Complete: [timestamp]
      - Created: X files
      - Kept: Y files  
      - Deleted: Z files + artifacts
      - Project status: Clean ✓
      ```
    - **KEEP CLEANUP.md** - Do NOT delete (useful for debugging/history)
    - **Update .gitignore** if new patterns discovered
    - **Remember**: A clean project is a minimal project

## Tool-Specific Rules

### Linting is Mandatory for All Languages

Every programming language in the project MUST have:
1. **A formatter** (for consistent style)
2. **A linter** (for catching errors and code quality issues)
3. **Zero-tolerance enforcement** (all issues must be fixed)

Common linters by language:
- **Python**: ruff, flake8, pylint
- **JavaScript/TypeScript**: eslint, standard
- **Go**: gofmt, golint, go vet
- **Rust**: rustfmt, clippy
- **C/C++**: clang-format, clang-tidy
- **Java**: checkstyle, spotless
- **Ruby**: rubocop
- **PHP**: php-cs-fixer, phpstan

If working with a language not listed, research and use its standard linting tools.

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
- [ ] Add tool's generated files to CLEANUP.md

## Dynamic Environment Learning (CLAUDE.local.md)

### Purpose
CLAUDE.local.md is a dynamically generated file that stores environment-specific learnings. It starts empty and grows as Claude Code discovers local system behaviors.

**CRITICAL**: This is where ALL project-specific learnings go - NEVER put them in CLAUDE.md!

### What Gets Recorded
- Command variations that work/don't work (e.g., `cd` vs direct path usage)
- Virtual environment locations (e.g., `.venv` vs `venv` vs custom paths)
- System-specific command flags or options
- Path separators and file system quirks
- Permission requirements
- Shell-specific behaviors
- Package manager peculiarities
- **Platform differences** (Windows vs Linux vs macOS behaviors)
- **Backend/Frontend structure decisions** (LOCKED once made)

### What Does NOT Go Here
- ❌ Universal truths that apply to all projects → Those stay in CLAUDE.md (only if user requests)
- ❌ Project vision or decisions → Those go in concept.md
- ❌ Temporary file tracking → That goes in CLEANUP.md
- ❌ User documentation → That goes in README.md

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

## Project Structure Decision
### Date: 2024-01-15
### Structure Type: BONSAI
### LOCKED: Do not change unless user explicitly requests

### Structure Rules:
- Backend: Single file main.py until complexity demands split
- Frontend: Single file index.html with inline JS/CSS
- Environments: Both at project root
- Split point: >200 lines or >5 features
```

### Update Trigger
Whenever Claude Code:
1. Encounters an error and finds a working alternative
2. Discovers a system-specific path or command
3. Learns about local tool behavior
4. Finds environment variables or configurations
5. Makes a backend/frontend structure decision

### Usage
- Check CLAUDE.local.md before attempting system operations
- Update immediately upon discovering new behaviors
- Use learned patterns in future operations
- **Never change locked structure decisions without explicit user request**

### Lifecycle
1. **Initial State**: File doesn't exist
2. **First Discovery**: Create CLAUDE.local.md with first learning
3. **Continuous Growth**: Append new discoveries as they occur
4. **Before Each Operation**: Check existing patterns
5. **After Errors**: Document what didn't work and what did
6. **Structure Decisions**: Once made, they're LOCKED

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

### Project Structure Decision
- Date: 2024-01-15
- Type: BONSAI
- LOCKED: Do not change
- Reason: New project, following minimal approach

## Day 3
### Package Installation  
- uv stores cache in: `/home/user/.cache/uv`
- uv venv location: `./.venv` (not `venv`)
```

### Git Strategy
Add to `.gitignore`:
```
CLAUDE.local.md
CLEANUP.md
```

**Note**:
- CLEANUP.md persists between sessions for debugging/history
- It's ALWAYS in .gitignore (never committed)
- Review it at the start of each new session
- Clear contents after review but keep the file

## Emergency Procedures

### When Things Break

1. Document the exact error
2. Try fixing with current tools first
3. Check if it's a version conflict
4. Only add new dependencies as last resort
5. Always document why the tool was added
6. **NEW**: Record environment-specific solutions in CLAUDE.local.md (NOT in CLAUDE.md!)

### CLAUDE.md Contamination

If you accidentally modified CLAUDE.md with project-specific information:
1. **STOP** - Do not save or commit
2. **Revert** - Restore CLAUDE.md to its template state
3. **Move** - Put project learnings in CLAUDE.local.md
4. **Remember** - CLAUDE.md is a template, not a project file

Common contaminations to remove:
- Project names or paths
- Contributor names
- Status indicators
- Project-specific configurations
- Session-specific learnings

### When Claude Code Skips Linting

This is a known issue - Claude Code often rushes through or skips the linting step. To ensure proper linting:

1. **Be Explicit**: Always mention "run linter and fix ALL issues" in your requests
2. **Verify Manually**: Run the linter yourself to double-check
3. **Interrupt If Needed**: Stop Claude Code if it proceeds without linting
4. **Add to CLAUDE.local.md**:
   ```markdown
   ## Linting Enforcement
   - ALWAYS verify linting was actually run
   - Common missed issues: unused imports, long lines, unused variables
   - If CC skips linting, explicitly request: "Please run [linter] and fix all issues"
   ```

### Alias Not Working?

If an alias isn't being recognized:

1. **Check exact spelling** - Aliases are case-sensitive
2. **Ensure it's the entire prompt** - "c/p" works, "please c/p" doesn't
3. **Add to CLAUDE.local.md** if Claude Code keeps missing it:
   ```markdown
   ## Aliases to Remember
   - "c/p" = commit and push
   - "cleanup" = full project cleanup
   ```
4. **Define custom aliases clearly** in the Command Aliases section

### When Claude Code Forgets Cleanup

Claude Code often leaves behind temporary files. Common forgotten items:

1. **Debug Scripts**: `test_*.py`, `debug_*.py`, `check_*.py`
2. **Temporary Data**: `*.tmp`, `*.log`, `test.json`, `output.txt`
3. **Failed Attempts**: `old_*.py`, `backup_*.py`, `*_v2.py`
4. **Generated Artifacts**: `__pycache__/`, `.pytest_cache/`, `htmlcov/`
5. **Experimental Files**: `experiment.py`, `try_*.py`, `quick_test.py`

**Solution**: Always check CLEANUP.md was created and properly executed. If you see leftover files:
```
"I notice several temporary files weren't cleaned up. Please review and clean: [list files]"
```

**If CLEANUP.md exists at session start**: This means the previous session didn't clean up properly. Review it and clean up before starting new work:
```
"I found an existing CLEANUP.md from a previous session. Please review and complete the cleanup before we continue."
```

**Example CLEANUP.md from a real session**:
```markdown
# Cleanup Tracker - Session: Adding API Feature

## Files Created
- [x] api_handler.py - New API integration (KEEP)
- [ ] test_connection.py - Debug script for API testing
- [ ] response_sample.json - Sample API response
- [ ] old_api_handler.py - Backup before refactoring  
- [ ] debug_api.log - API debug output

## Cleanup Decision
After review, only api_handler.py is needed. All debug and temporary files should be removed.
```

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

### Structure Decision Changed Without Permission

If Claude Code changes a locked structure decision:
1. **STOP** - Revert any structural changes
2. **Check CLAUDE.local.md** - Verify decision is marked as LOCKED
3. **Restore original structure** - Follow the documented decision
4. **Add reminder**:
   ```markdown
   ## REMINDER: Structure Decision is LOCKED
   - Type: [User Custom|concept.md|BONSAI]
   - DO NOT CHANGE without explicit user request
   - User must say "change structure" or similar
   ```

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

**⚠️ NOT in this list**: CLAUDE.md - This is a template, not a config file!

## File Modification Rules

```
┌─────────────────────────────────────────────────────────────┐
│                    FILE MODIFICATION RULES                   │
├─────────────────────────────────────────────────────────────┤
│ ✅ MODIFY: concept.md      - Project vision & decisions      │
│ ✅ MODIFY: CLAUDE.local.md - Environment learnings          │
│ ✅ MODIFY: CLEANUP.md      - Session file tracking          │
│ ✅ MODIFY: README.md       - User documentation             │
│ ✅ MODIFY: Your code files - Actual implementation          │
│                                                             │
│ ❌ NEVER:  CLAUDE.md       - Template (READ-ONLY)          │
│            (unless user explicitly requests)                 │
│                                                             │
│ 🔧 CUSTOMIZE IN CLAUDE.md:                                  │
│    - Don'ts section (your avoided patterns)                 │
│    - Command Aliases (your shortcuts)                       │
└─────────────────────────────────────────────────────────────┘
```

## Remember

- **Check for aliases first** - If user types just "c/p" or "cleanup", execute the alias
- **CLAUDE.md is READ-ONLY** - Never modify unless user explicitly requests
- **concept.md is THE MASTER** - It overrides all other configurations
- **Structure decisions are LOCKED** - Once made in CLAUDE.local.md, don't change without explicit request
- **Every file has a purpose** - Track with CLEANUP.md, delete if not needed
- **Every line has a reason** (enforce via linting!)
- **Every tool has a trigger**
- **When in doubt, choose minimal**
- **Keep git history clean - update .gitignore before commits**
- **Write once, run everywhere - no OS-specific code**
- **Respect user's code when they're the primary author**
- **Linting is NOT optional** - Clean code is minimal code
- **Cleanup is MANDATORY** - A minimal project has no temporary files
- **CLEANUP.md persists** - Valuable debugging history, never delete
- **Project learnings go in CLAUDE.local.md** - Not in the template!

---

*Note: BONSAI is the name of this development template/methodology. Your actual project should have its own name. The BONSAI name and metaphor are for human understanding and GitHub presentation. Claude Code should focus on the actual guidelines and workflow described in this document.*

*The CLEANUP.md session tracking system is unique to BONSAI and represents the philosophy perfectly - just as a bonsai artist carefully considers each branch, we carefully track each file and remove what doesn't belong. The file persists between sessions as a valuable debugging tool, showing the history of what was created and cleaned.*

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

## Best Practices for Template Hygiene

### Keeping CLAUDE.md Clean

**NEVER add to CLAUDE.md**:
- ❌ Project names or specific implementations
- ❌ Contributor names or team information
- ❌ Status indicators (🟡 In Progress, ✅ Complete, etc.)
- ❌ File paths specific to a project
- ❌ Session learnings or discoveries
- ❌ Version numbers or dates (except in examples)
- ❌ TODO items or project-specific notes

**Where project information belongs**:
- Project vision and core decisions → `concept.md`
- Environment-specific learnings → `CLAUDE.local.md`
- Session file tracking → `CLEANUP.md`
- User documentation → `README.md`
- Project status → Project management tools (not in code)

**Only update CLAUDE.md when**:
- User explicitly says "update CLAUDE.md"
- User requests "change the template"
- User identifies a universal improvement that benefits ALL projects
- User reports a bug in the template itself

### Valid Reasons to Update CLAUDE.md

**User must explicitly request**, such as:
- "Update CLAUDE.md to include this new linting rule"
- "Change the template to use this better approach"
- "Fix this error in CLAUDE.md"
- "Add this universal best practice to the template"

**Never update for**:
- Project-specific discoveries
- Environment-specific issues
- Session learnings
- "This worked better for my project"
- Status updates or progress tracking

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