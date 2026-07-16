<!-- BONSAI v2.0.0 -->

# BONSAI - Build Only Necessary Software, Adapt Intelligently

BONSAI is a development methodology that values minimal, purposeful software development. Every addition must be justified by actual need. Like tending a bonsai tree — deliberate, minimal, and purposeful.

Normal Claude Code behavior is the default. Invoke `/bonsai` explicitly when you want the full adaptive workflow.

## Core Documents

| Document | Purpose | Modify? |
|----------|---------|---------|
| **CONCEPT.md** | THE MASTER — Project vision, requirements, decisions. Overrides all other configs. | Yes, when fundamental changes made |
| **CONTEXT.md** | Subordinate domain glossary (terms only), beneath CONCEPT.md. Optional; read if present. | Only via /grill |
| **CLAUDE.md** | BONSAI methodology template. | Never (unless user explicitly requests) |
| **CLAUDE.local.md** | Auto-generated environment learnings, project-specific patterns. | Yes, auto-maintained |
| **README.md** | Manual for end users of your software. | Yes, when user-facing changes made |
| **CLEANUP.md** | Persistent session file tracker. Always in .gitignore. | Yes, auto-maintained per session |
| **GROW.md** | GROW! intelligent development plan and execution log. | Yes, during GROW! execution |
| **.gitignore** | Update immediately when adding tools or generating files. | Yes, proactively |

## Commit Template

Format: `<emoji> <description>`

| Emoji | Mode | Meaning |
|-------|------|---------|
| 🌿 | Grow | New feature, capability, test |
| 🔧 | Shape | Refactor, improve, perf, style |
| ✂️ | Prune | Remove, clean, delete |
| 🩹 | Fix | Bug fix |
| 📜 | Docs | Documentation |
| ⚙️ | Ops | Config, CI, deps, chore |

Optional scope: `🌿(auth) add OAuth2 login flow`

Guidelines:
- Present tense, imperative mood ("add feature" not "added feature")
- Subject line under 50 characters
- Body explains what and why, not how

```
<emoji> <description>

<optional body>
```

## Available Skills

| Skill | Description |
|-------|-------------|
| `/bonsai` | Adaptive development workflow (10 tasks, 3 modes: Grow/Shape/Prune) |
| `/bonsai-init` | Project onboarding — detect type, create CONCEPT.md, configure tools |
| `/grow` | Create GROW.md development plan from CONCEPT.md analysis |
| `/grill` | THE planning skill — pressure-test any plan, phase, or idea; then execute via /bonsai or capture the outcome |
| `/qa` | Answer questions without editing files |
| `/handoff` | Compact current conversation into a handoff doc (OS temp) for a fresh agent to pick up |
| `/session-review` | Post-session retrospective — audits the conversation for failures and traces each to the rule/skill that should have prevented it |
| `/prototype` | Throwaway design prototype — runnable TUI for state/logic, or multi-variant UI from one route |
| `/write-skill` | Author or sharpen a skill the BONSAI way — leading words, the two loads, info hierarchy, no-op pruning |
| `/cp` | Commit and push with BONSAI template |
| `/pycheck` | Python quality: ruff format + ruff check + ty check |
| `/reactcheck` | React/TS quality: biome check + tsc |
| `/code-analyser` | Dead code detection and quality analysis |
| `/bonsai-check` | Best practices compliance audit |

## Rules Reference

Guidelines are loaded automatically from `.claude/rules/`:
- **philosophy.md** — Core principles, decision framework
- **tools.md** — Preferred tools and configurations
- **structure.md** — Progressive project structure
- **design-system.md** — Colors, typography, dark zen UI
- **navigation.md** — graphify-out detection + graph-first project navigation
- **python/visualization.md** — matplotlib/Rich BONSAI themes (loaded when working on .py files)
- **frontend/react-tailwind.md** — React+Tailwind+Vite templates (loaded when working on frontend files)
# graphify
- **graphify** (`~/.claude/skills/graphify/SKILL.md`) - any input to knowledge graph. Trigger: `/graphify`
When the user types `/graphify`, invoke the Skill tool with `skill: "graphify"` before doing anything else.
