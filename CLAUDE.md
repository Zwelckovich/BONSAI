<!-- BONSAI v2.0.0 -->

# BONSAI - Build Only Necessary Software, Adapt Intelligently

BONSAI is a development methodology that values minimal, purposeful software development. Every addition must be justified by actual need. Like tending a bonsai tree — deliberate, minimal, and purposeful.

Normal Claude Code behavior is the default. Invoke `/bonsai` explicitly when you want the full adaptive workflow.

## Core Documents

| Document | Purpose | Modify? |
|----------|---------|---------|
| **concept.md** | THE MASTER — Project vision, requirements, decisions. Overrides all other configs. | Yes, when fundamental changes made |
| **CLAUDE.md** | BONSAI methodology template. | Never (unless user explicitly requests) |
| **CLAUDE.local.md** | Auto-generated environment learnings, project-specific patterns. | Yes, auto-maintained |
| **README.md** | Manual for end users of your software. | Yes, when user-facing changes made |
| **CLEANUP.md** | Persistent session file tracker. Always in .gitignore. | Yes, auto-maintained per session |
| **GROW.md** | GROW! intelligent development plan and execution log. | Yes, during GROW! execution |
| **.gitignore** | Update immediately when adding tools or generating files. | Yes, proactively |

## Commit Template

Format: `<type>: <description>`

Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`, `perf`, `clean`

Guidelines:
- Present tense, imperative mood ("Add feature" not "Added feature")
- Subject line under 50 characters
- Body explains what and why, not how
- Always include Claude Code attribution footer

```
<type>: <description>

<optional body>

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Available Skills

| Skill | Description |
|-------|-------------|
| `/bonsai` | Adaptive development workflow (10 tasks, 3 modes: Grow/Shape/Prune) |
| `/bonsai-init` | Project onboarding — detect type, create concept.md, configure tools |
| `/grow` | Execute next GROW! phase (or `--ALL` for continuous) |
| `/grow-create` | Create GROW.md from concept.md analysis |
| `/grow-plan` | Interactive phase planning with approach options |
| `/bonsai-it` | Transform existing project to BONSAI principles |
| `/pc` | Plan & Clarify — interactive planning with options |
| `/qa` | Answer questions without editing files |
| `/cp` | Commit and push with BONSAI template |
| `/pycheck` | Python quality: ruff format + ruff check + ty check |
| `/reactcheck` | React/TS quality: biome check + tsc |
| `/code-analyser` | Dead code detection and quality analysis |
| `/bonsai-check` | Best practices compliance audit |

## Available Agents

| Agent | Model | Description |
|-------|-------|-------------|
| `@quality-auditor` | haiku | Linting, formatting, type checking on modified files |
| `@compliance-reviewer` | sonnet | Tool usage and best practices validation |
| `@dead-code-detector` | haiku | Unused functions, imports, variables detection |

## Rules Reference

Guidelines are loaded automatically from `.claude/rules/`:
- **philosophy.md** — Core principles, decision framework
- **tools.md** — Preferred tools and configurations
- **structure.md** — Progressive project structure
- **design-system.md** — Colors, typography, dark zen UI
- **python/visualization.md** — matplotlib/Rich BONSAI themes (loaded when working on .py files)
- **frontend/react-tailwind.md** — React+Tailwind+Vite templates (loaded when working on frontend files)
