# 🌱 BONSAI - PROJECT-TRANSFER.md

## Legacy Project Migration to BONSAI Philosophy

### Overview
This document guides the migration of existing projects to the BONSAI approach - a dynamic minimal development philosophy defined in CLAUDE.md.

**Input**: Path to existing project directory (prepared by user)  
**Output**: Minimally rebuilt project following BONSAI principles  
**New Project Name**: Choose any name you want - NOT "bonsai"! (BONSAI is just the template name)  
**concept.md**: THE MASTER - Preserved from old project if exists, guides all decisions!

## Preparation (For Users)

Before starting the migration, prepare your workspace:

### Step 1: Prepare Old Project
```bash
# If you have a GitHub URL:
cd ~/projects  # or wherever you keep projects
git clone [GITHUB_URL] old-project-to-migrate

# If you have a local project:
# Just note its path, e.g., ~/projects/my-legacy-app
```

### Step 2: Create New Project Directory
```bash
# Create a fresh directory for your minimal rebuild
# Name it after YOUR PROJECT, not "bonsai" (that's just the template name)

# Good examples:
mkdir ~/projects/todo-app              # ✓ Your app's actual name
mkdir ~/projects/myapp-v2              # ✓ Version of your app
mkdir ~/projects/backend-minimal       # ✓ Descriptive name
mkdir ~/projects/project-clean         # ✓ Your choice!

# Not recommended:
# mkdir ~/projects/bonsai              # ✗ That's the template name

# Navigate to YOUR new project (whatever you named it)
cd ~/projects/[your-project-name]
```

### Step 3: Start Migration
From inside your new project directory, run:
```bash
claude-code "Please migrate the project at ~/projects/old-project-to-migrate following PROJECT-TRANSFER.md"
```

## Important: Directory Structure

Keep old and new projects completely separate:

```
~/projects/
├── old-project-to-migrate/    # Your original project
│   ├── concept.md             # If exists, copy this FIRST!
│   └── [original files...]     # Never modified by Claude Code
│
└── [your-project-name]/       # YOUR project name (NOT "bonsai")
    ├── concept.md             # COPIED/CREATED FIRST (guides everything)
    ├── CLAUDE.md              # The BONSAI template instructions
    ├── CLAUDE.local.md        # Auto-generated
    ├── migration/             # Analysis documents
    │   ├── analysis.md
    │   ├── dependency-map.md
    │   ├── concept-analysis.md  # If concept.md needed updates
    │   └── ...
    └── [minimal code files]   # Built incrementally

**Critical**: concept.md must exist in new project before any code is written!
```

**Note**: Your project gets its own name. "BONSAI" is just what we call this minimal development approach.

## Migration Workflow

**CRITICAL**: If old project has concept.md, it must be copied FIRST before any analysis begins.

### Phase 1: Deep Analysis & Documentation

#### 1.1 Initial Analysis
When user provides path to old project:

1. **Check for concept.md FIRST**
   - If exists in old project: Copy to new project immediately
   - This is THE MASTER - concept.md overrides all other configurations
   - If concept.md conflicts with CLAUDE.md, follow concept.md
   - If not exists: Create minimal one from README or project description
   
   ```bash
   # If no concept.md in old project:
   echo "# Project Concept" > concept.md
   echo "" >> concept.md
   echo "## Vision" >> concept.md
   echo "[Extracted from README/package.json description]" >> concept.md
   echo "" >> concept.md
   echo "## Core Purpose" >> concept.md
   echo "[Inferred from main functionality]" >> concept.md
   echo "" >> concept.md
   echo "## Essential Features" >> concept.md
   echo "- [Analyze code to find core features]" >> concept.md
   ```

2. **Access Old Project**
   - User provides path to existing project
   - Verify access to the directory
   - Respect .gitignore patterns
   - **DO NOT modify the original project**

3. **Create Analysis Structure** (in current/new project directory)
   ```bash
   # Claude Code will:
   # 1. Check if old-project/concept.md exists
   cp [old-project]/concept.md ./concept.md  # If exists
   
   # 2. Create migration folder
   mkdir migration
   
   # Structure:
   [your-project-name]/    # Whatever you named it
   ├── concept.md         # COPIED FIRST if exists
   ├── migration/         # Analysis goes here
   │   ├── analysis.md
   │   ├── dependency-map.md
   │   ├── file-purposes.md
   │   ├── growth-timeline.md
   │   └── technical-debt.md
   └── CLAUDE.md         # Will add files during rebuild
   ```

#### 1.2 File-by-File Analysis
For EVERY file in the old project (not in .gitignore):

**Read from**: [provided path]/[file]  
**Document in**: ./migration/file-purposes.md

```markdown
## [filename]
- **Purpose**: [What this file does]
- **Dependencies**: [What it imports/requires]
- **Dependents**: [What files use this]
- **Core Functionality**: [Is this essential? Y/N]
- **Complexity Score**: [1-10]
- **Test Coverage**: [Exists? Comprehensive?]
- **Platform Issues**: [Any OS-specific code to fix?]
- **Concept Alignment**: [Does this align with concept.md?]
- **User Patterns**: [Note file organization style for preservation]
```

**Special Analysis for concept.md**:
- Is it up to date with actual project?
- Are all mentioned features implemented?
- Any features in code not in concept.md?
- Document discrepancies in migration/concept-analysis.md

**Special Analysis for User Patterns**:
- How does user organize files? (flat vs nested)
- Naming conventions used
- Code style preferences
- If user wrote majority, preserve their patterns

**If concept.md is outdated**:
1. Copy it anyway (shows original intent)
2. Create migration/concept-analysis.md noting discrepancies
3. Update concept.md during migration to reflect actual MVP
4. Keep both versions for reference

#### 1.3 Dependency Analysis
Create `dependency-map.md`:

```markdown
## Direct Dependencies
- [package]: Used in [X] files, purpose: [...]
  - Essential: [Y/N]
  - Could be replaced with stdlib: [Y/N]
  - Last updated: [date]
  - Gitignore patterns needed: [e.g., node_modules/, .cache/]

## Development Dependencies
- [package]: Purpose: [...]
  - Still needed: [Y/N]
  - CLAUDE.md equivalent: [...]
  - Generated files to ignore: [...]

## Unused Dependencies
- [package]: No usage found - REMOVE
```

**Common patterns to note for .gitignore:**
- Python: `__pycache__/`, `.pytest_cache/`, `*.pyc`, `.venv/`
- Node.js: `node_modules/`, `dist/`, `build/`, `*.log`
- Build tools: `.cache/`, `coverage/`, `.parcel-cache/`
- IDEs: `.vscode/`, `.idea/`, `*.swp`

#### 1.4 Growth Timeline Reconstruction
Analyze logical dependency order and structure:

```markdown
## Reconstructed Growth Path
1. **Core Seed**: [Identify the absolute minimum - usually 1 file]
2. **First Growth**: [What feature was likely added first]
3. **Second Growth**: [Next logical addition]
...

## Ideal Growth Path (Following BONSAI)
1. **Minimal Start**: [What should have been step 1]
2. **First Need**: [When first tool should be added]
...

## Patterns to Replace (Check CLAUDE.md Don'ts)
- Makefiles → Python scripts
- Shell scripts (.sh/.bat) → Python/Node scripts  
- Hardcoded paths → pathlib.Path()
- OS-specific commands → Cross-platform alternatives
- [Other patterns from Don'ts section]

Note: Based on code structure analysis, not git history
```

### Phase 2: Core Extraction

#### 2.1 Identify Minimal Viable Project (MVP)
```markdown
## MVP Components
- Entry point: [main.py / index.js]
- Core functionality: [List absolute essentials]
- Minimum dependencies: [Only what MVP needs]
- Basic test: [One test to verify MVP works]
```

#### 2.2 Create Migration Strategy
```markdown
## Migration Order
1. **Foundation** (Day 1)
   - Create [main file]
   - Implement [core function]
   - Zero dependencies

2. **First Enhancement** (When needed)
   - Add [feature]
   - Introduce [tool] because [reason]
   
3. **Progressive Additions**
   - [Continue until feature parity]
```

### Phase 3: Execution - The Rebuild

#### 3.1 Setup New Environment
```bash
# Working structure (user has already prepared):
~/projects/
├── old-project-to-migrate/    # Original reference
│   └── [original files]       # Never modify these
│
└── [your-new-project]/       # Your chosen name
    ├── .gitignore           # Create FIRST
    ├── CLAUDE.md            # Copy from template
    ├── CLAUDE.local.md      # Will be auto-generated
    ├── concept.md           # ALREADY COPIED in Phase 1 if existed
    ├── README.md            # Minimal start
    ├── migration/           # Analysis from Phase 1
    │   ├── analysis.md
    │   └── ...
    └── [main file]          # Single entry point

# If concept.md wasn't in old project, create it now:
if [ ! -f concept.md ]; then
  echo "# Project Concept" > concept.md
  echo "" >> concept.md
  echo "## Vision" >> concept.md
  echo "[Extract from old README or define new vision]" >> concept.md
  echo "" >> concept.md
  echo "## Core Features" >> concept.md
  echo "- [Feature 1]" >> concept.md
  echo "- [Feature 2]" >> concept.md
fi

# Initialize git for new project (if desired):
git init

# Create .gitignore IMMEDIATELY
echo "# Local files" > .gitignore
echo "CLAUDE.local.md" >> .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "" >> .gitignore
echo "# Migration artifacts (optional)" >> .gitignore
echo "# migration/" >> .gitignore

echo "# [Your Project Name]" > README.md
git add .gitignore README.md concept.md
git commit -m "Initial commit - minimal rebuild with concept"
```

#### 3.2 Incremental Implementation
Follow the strict workflow for EACH addition:

1. **Start with MVP**
   - **Verify concept.md exists** (copied or created)
   - Single file, core functionality only
   - Must run successfully
   - Must align with concept.md vision

2. **Add Features One by One**
   - Follow CLAUDE.md task workflow (15 steps)
   - Only add tools when threshold reached
   - Update CLAUDE.local.md with discoveries
   - **Update .gitignore BEFORE adding each tool**
   - **Check configs match project structure**
   - **Replace Don'ts patterns with approved alternatives**

3. **Continuous Verification**
   ```bash
   # From new project directory:
   
   # After each addition:
   - Run the program (your new minimal version)
   - Run tests (ported to new structure)
   - Verify no regression
   - Document in migration/progress.md
   
   # Reference old project for comparison:
   - Compare output with old project
   - Ensure feature parity where needed
   ```

#### 3.3 Environment Learning Capture
During migration, populate CLAUDE.local.md:

```markdown
## Discovered from Legacy Project
### Path Structures
- Old: src/lib/utils/helpers.py
- Better: helpers.py (flat until needed)

### Working Patterns
- ✅ pytest runs from root with: `python -m pytest`
- ❌ `pytest` alone fails due to import paths

### Legacy Quirks to Avoid
- Circular imports in [old structure]
- Over-engineered [pattern] for simple [task]
```

### Phase 4: Feature Parity Verification

#### 4.1 Comparison Checklist
```markdown
## Feature Comparison
| Feature | Old Project | New Project | Status |
|---------|------------|-------------|--------|
| [Feature 1] | ✓ | ✓ | Simplified |
| [Feature 2] | ✓ | ✓ | Identical |
| [Feature 3] | ✓ | ✗ | Not needed |
```

#### 4.2 Test Migration
- Port tests incrementally
- Refactor to match new structure
- Ensure all pass

#### 4.3 Performance Verification
- Compare key metrics
- Document any improvements
- Note any regressions

### Phase 5: Finalization

#### 5.1 Documentation Update
- Update README.md with actual functionality
- Finalize concept.md
- Create migration-summary.md

#### 5.2 Cleanup Decision
```markdown
## Old Project Disposition
- Keep as reference: [User maintains at original location]
- Document: [Lessons learned in migration/lessons.md]
- Update README: [Add note about minimal version if desired]
```

## Special Considerations

### For Large Projects (>10k LOC)
1. Consider module-by-module migration
2. Maintain parallel operation during transition
3. Create compatibility layer if needed

### For Projects with Databases
1. Extract schema first
2. Migrate data layer minimally
3. Add ORM only if complexity demands

### For Projects with External APIs
1. Identify core endpoints used
2. Start with direct requests
3. Add SDK only if extensively used

## Migration Execution

### The Complete Command
From inside your new project directory (whatever you named it):
```bash
cd ~/projects/[your-project-name]
claude-code "Please migrate the project at ~/projects/old-project-to-migrate following PROJECT-TRANSFER.md"
```

Claude Code will:
1. **FIRST**: Check for and copy concept.md from old project
2. Analyze the old project at the path you provided
3. Create migration/ folder in current directory
4. Document everything it finds
5. Rebuild minimally following BONSAI principles
6. Check every decision against concept.md
7. Never modify the original project

### Progress Commands
```bash
# Check migration progress
claude-code "Show migration progress and next steps"

# Verify concept.md alignment
claude-code "Check if current implementation matches concept.md"

# Compare features
claude-code "Compare old and new project features"

# Test specific functionality
claude-code "Test if [feature] works like in the old project"
```

## Success Criteria

✅ concept.md exists and is THE MASTER guiding all decisions  
✅ New project runs with fewer dependencies  
✅ All essential features preserved  
✅ Code is minimal and purposeful  
✅ Each file/tool justified in concept.md  
✅ User's code patterns respected when they're primary author  
✅ CLAUDE.local.md captures environment specifics  
✅ Test coverage maintained or improved  
✅ Documentation is complete but minimal  
✅ Clean git history - no generated files committed  
✅ .gitignore properly configured for all tools  
✅ Cross-platform - works on Windows, Linux, macOS  

## Post-Migration

1. **Monitor for 1 week**
   - Document any missing features
   - Note any performance differences
   - Capture additional environment learnings

2. **Iterate if needed**
   - Add missed features minimally
   - Continue following CLAUDE.md workflow

3. **Share learnings**
   - Update CLAUDE.md with new insights
   - Document anti-patterns discovered
   - Create reusable patterns

## Common Issues & Solutions

### Access Issues

**Problem**: Can't access old project files
- Check if path is correct (use absolute paths for clarity)
- Ensure you have read permissions
- Verify the path from your current directory

**Problem**: Confusion about relative paths
```bash
# From new project, reference old project:
# If old project is at ~/projects/old-app
# And you're in ~/projects/new-app
# Use: ../old-app/[file] or absolute: ~/projects/old-app/[file]
```

### Migration Issues

**Problem**: No concept.md in old project
- Extract vision from README, docs, or main file comments
- Infer core purpose from main functionality
- Create minimal concept.md before proceeding
- Ask user to validate if unsure

**Problem**: concept.md conflicts with actual code
- Document discrepancies in migration/concept-analysis.md
- Follow concept.md for vision but note reality
- Update concept.md as you discover true core features
- Keep user informed of major differences

**Problem**: Too many files to analyze
- Focus on source code directories first
- Skip node_modules, vendor, build directories
- Use .gitignore as a guide for what to skip

**Problem**: Unclear dependencies
- Check package.json, requirements.txt, go.mod, etc.
- Look for import statements
- Run dependency analysis tools if available

**Problem**: Complex build process
- Document it but don't replicate initially
- Start with direct execution
- Add build tools only when needed

**Problem**: Old project uses tools from Don'ts list
- Replace with specified alternatives
- Example: Makefile → Python script
- Document the replacement in migration notes

**Problem**: Platform-specific code in old project
- Replace with cross-platform alternatives
- Use pathlib instead of hardcoded paths
- Use subprocess instead of os.system
- Test on multiple platforms if possible

## Remember

> "Every line of code is a liability. The best code is no code. The second best is minimal code that does exactly what's needed."

Like cultivating a bonsai tree, we're not just copying the old project - we're carefully pruning and shaping it into its ideal minimal form.

**concept.md is THE MASTER** - It overrides all other configurations. If concept.md says "use npm" but CLAUDE.md says "use yarn", follow concept.md.

**Respect the user's code** - If they wrote the majority, preserve their patterns while applying minimal necessary changes.

The goal is to rebuild the project as it should have been built - minimally, progressively, and purposefully.

## Complete Example

Here's a full example of migrating a project:

```bash
# 1. User prepares the old project
cd ~/projects
git clone https://github.com/example/bloated-app.git
# or just use existing: ~/projects/my-old-app

# 2. User creates new project with ANY name they want
# (NOT "bonsai" - that's just the template name!)
mkdir clean-backend         # ✓ Good - your app name
mkdir todoapp-v2           # ✓ Good - your app name  
mkdir my-awesome-rewrite   # ✓ Good - your app name
mkdir production-api       # ✓ Good - your app name
# mkdir bonsai             # ✗ Avoid - that's the template name

cd clean-backend  # (or whatever you named YOUR project)

# 3. User starts Claude Code with migration command
claude-code "Please migrate the project at ~/projects/bloated-app following PROJECT-TRANSFER.md"

# 4. Claude Code will FIRST:
#    - Check if ~/projects/bloated-app/concept.md exists
#    - If yes: Copy it immediately to guide all decisions
#    - If no: Create minimal concept.md from README/description

# 5. Then Claude Code will:
#    - Create migration/ folder in current directory
#    - Analyze and document everything
#    - Start rebuilding minimally
#    - Add tools only when needed
#    - Keep checking against concept.md

# 6. Result: A minimal, clean rebuild in YOUR named directory
```

**Key Points**: 
- BONSAI is the template/methodology name, NOT your project name
- concept.md is copied FIRST if it exists (it's the source of truth!)
- You control where both projects live
- You choose the new project name (anything except "bonsai")
- Claude Code just reads from the old and builds in the new
- No naming conventions required for your project!