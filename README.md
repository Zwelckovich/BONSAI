# BONSAI

> **Build Only Necessary Software, Adapt Intelligently.**

A Claude Code plugin that turns minimalism into a default. Ships a philosophy, a set of rules, 14 slash-command skills, and an output style — drop it into your `.claude/` directory and Claude Code starts writing less code, asking better questions, and pruning what doesn't belong.

## What is this?

BONSAI is **not a runtime, library, or CLI**. It is a collection of configuration files that teach Claude Code how to develop software the way you'd tend a bonsai tree — deliberately, minimally, and with every addition justified by an actual need.

The repository contains:

- `CLAUDE.md` — the methodology overview Claude loads into every session
- `.claude/rules/` — the guidelines (philosophy, tool choices, structure, design system)
- `.claude/skills/` — 14 invocable skills (`/bonsai`, `/grow`, `/cp`, `/pycheck`, …)
- `.claude/output-styles/bonsai.md` — the conversational tone Claude adopts

No dependencies. No build step. Just Markdown.

## Quickstart

### Global install (recommended)

Symlink the contents into your user-level Claude config. This keeps the repo as the source of truth — `git pull` updates your rules and skills everywhere.

```bash
git clone https://github.com/your-org/BONSAI.git ~/BONSAI

# Symlink the artifacts
ln -s ~/BONSAI/CLAUDE.md              ~/.claude/CLAUDE.md
ln -s ~/BONSAI/.claude/rules          ~/.claude/rules
ln -s ~/BONSAI/.claude/skills         ~/.claude/skills
ln -s ~/BONSAI/.claude/output-styles  ~/.claude/output-styles
```

On Windows, run Git Bash as admin and use the same commands, or use `mklink /D` from `cmd`.

### Per-project install

If you only want BONSAI on one repo, symlink (or copy) into that project's `.claude/` directory instead:

```bash
cd your-project
ln -s ~/BONSAI/.claude/rules          .claude/rules
ln -s ~/BONSAI/.claude/skills         .claude/skills
ln -s ~/BONSAI/.claude/output-styles  .claude/output-styles
cp   ~/BONSAI/CLAUDE.md               .
```

### Copy instead of symlink

If symlinks aren't an option, replace every `ln -s` with `cp -r`. You'll have to re-copy after each `git pull`.

### Verify

In a new Claude Code session, type `/bonsai-init`. If the skill appears in the command list, you're done.

## Philosophy in 30 seconds

Three pillars:

1. **Minimalism First** — Start with nothing. Add only when necessity demands. Prefer deletion over addition.
2. **Purposeful Growth** — Evidence-based decisions. Progressive enhancement. YAGNI enforcement.
3. **Systematic Verification** — Test assumptions at every step. `concept.md` is THE MASTER and overrides every other config.

When facing any decision, ask in order:

1. **Avoid** — Can we skip this entirely? The best code is no code.
2. **Remove** — Can we delete something instead of adding?
3. **Reuse** — Can we use what already exists?
4. **Minimize** — What's the absolute minimum addition needed?

Full version in [`.claude/rules/philosophy.md`](.claude/rules/philosophy.md).

## Skills

Fourteen slash commands, grouped by purpose.

### Workflow

| Skill | Purpose |
|-------|---------|
| [`/bonsai`](.claude/skills/bonsai/SKILL.md) | Adaptive development workflow — 10 tasks, 3 modes (Grow / Shape / Prune) |
| [`/bonsai-init`](.claude/skills/bonsai-init/SKILL.md) | Onboard a project — detect type, create `concept.md`, configure tools |
| [`/bonsai-it`](.claude/skills/bonsai-it/SKILL.md) | Transform an existing project to BONSAI (pip→uv, eslint→biome, …) |
| [`/grow`](.claude/skills/grow/SKILL.md) | Execute the next GROW! development phase (`--ALL` for continuous) |
| [`/grow-create`](.claude/skills/grow-create/SKILL.md) | Generate a `GROW.md` plan from `concept.md` |
| [`/grow-plan`](.claude/skills/grow-plan/SKILL.md) | Interactive planning for a single GROW phase |

### Planning

| Skill | Purpose |
|-------|---------|
| [`/pc`](.claude/skills/pc/SKILL.md) | Plan & Clarify — ask questions, propose options, then plan |
| [`/qa`](.claude/skills/qa/SKILL.md) | Answer questions without editing files |

### Quality

| Skill | Purpose |
|-------|---------|
| [`/pycheck`](.claude/skills/pycheck/SKILL.md) | Python pipeline: `ruff format` → `ruff check` → `ty check` |
| [`/reactcheck`](.claude/skills/reactcheck/SKILL.md) | React/TS pipeline: `biome check` → `tsc --noEmit` |
| [`/code-analyser`](.claude/skills/code-analyser/SKILL.md) | Dead-code detection and quality audit (read-only) |
| [`/bonsai-check`](.claude/skills/bonsai-check/SKILL.md) | BONSAI best-practices compliance audit |

### Maintenance

| Skill | Purpose |
|-------|---------|
| [`/cp`](.claude/skills/cp/SKILL.md) | Commit + push with the BONSAI emoji template |
| [`/session-review`](.claude/skills/session-review/SKILL.md) | Post-session retro — trace failures to missing rules |

## Rules

Rules auto-load into every Claude Code session. They are the enforcement arm of the philosophy.

| Rule | Loaded | Covers |
|------|--------|--------|
| [`philosophy.md`](.claude/rules/philosophy.md) | Always | Core principles, decision framework, anti-patterns |
| [`tools.md`](.claude/rules/tools.md) | Always | Preferred tools (uv, ruff, ty, bun, biome, …) and forbidden ones |
| [`structure.md`](.claude/rules/structure.md) | Always | Progressive project structure — single file first, split when forced |
| [`design-system.md`](.claude/rules/design-system.md) | Always | Dark-zen palette, typography, spacing, UI principles |
| [`python/visualization.md`](.claude/rules/python/visualization.md) | On `.py` edits | matplotlib / Rich BONSAI themes |
| [`frontend/react-tailwind.md`](.claude/rules/frontend/react-tailwind.md) | On frontend edits | React 19 + Tailwind v4 + Vite 8 templates |

## Output style

[`.claude/output-styles/bonsai.md`](.claude/output-styles/bonsai.md) sets how Claude communicates under this methodology: concise, action-oriented, evidence-based, no verbose preamble. Activate with `/output-style bonsai` in Claude Code.

## Commit template

BONSAI uses emoji prefixes to make the intent of every commit readable at a glance. Format: `<emoji> <description>`.

| Emoji | Mode | Meaning |
|-------|------|---------|
| 🌿 | Grow | New feature, capability, test |
| 🔧 | Shape | Refactor, improve, perf, style |
| ✂️ | Prune | Remove, clean, delete |
| 🩹 | Fix | Bug fix |
| 📜 | Docs | Documentation |
| ⚙️ | Ops | Config, CI, deps, chore |

Optional scope: `🌿(auth) add OAuth2 login flow`. The `/cp` skill handles staging, safety checks, and formatting automatically.

## Preferred tools (condensed)

BONSAI is opinionated. Full matrix in [`.claude/rules/tools.md`](.claude/rules/tools.md).

| Stack | Tools |
|-------|-------|
| Python | **uv** (packages) · **ruff** (lint/format) · **ty** (types) · **pytest** (tests) · **pathlib** · **loguru** · **rich** · **typer** · **FastAPI** |
| JavaScript / React | **bun** (packages) · **vite 8+** (build) · **biome** (lint/format) · **React 19.2+** · **Tailwind v4+** · **zustand** · **vitest** |

Forbidden: `pip`, `npm`, `black`, `eslint + prettier`, `mypy`, `unittest`, `os.path`. Always use the BONSAI alternative.

## Customization

BONSAI is a default, not a cage.

- **`concept.md`** is THE MASTER. If any rule conflicts with `concept.md`, the rule loses. Define your project vision there and every skill aligns to it.
- **Per-project overrides** — drop files into the project's `.claude/rules/` to shadow a global rule for that repo only.
- **`CLAUDE.local.md`** — auto-maintained environment learnings (OS quirks, project patterns). Always in `.gitignore`.

Documentation hierarchy Claude follows:

| File | Audience | Modify? |
|------|----------|---------|
| `concept.md` | Project vision (THE MASTER) | Yes, when fundamental decisions change |
| `CLAUDE.md` | Claude Code (methodology template) | Rarely |
| `CLAUDE.local.md` | Claude Code (env-specific, gitignored) | Auto-maintained |
| `README.md` | End users of your software | Yes, when user-facing changes ship |
| `GROW.md` | Development plan and execution log | During `/grow` runs |

## Repo layout

```
BONSAI/
├── CLAUDE.md
├── README.md
└── .claude/
    ├── output-styles/
    │   └── bonsai.md
    ├── rules/
    │   ├── philosophy.md
    │   ├── tools.md
    │   ├── structure.md
    │   ├── design-system.md
    │   ├── python/
    │   │   └── visualization.md
    │   └── frontend/
    │       └── react-tailwind.md
    └── skills/
        ├── bonsai/          # Main workflow
        ├── bonsai-init/     # Onboard new projects
        ├── bonsai-it/       # Transform existing projects
        ├── bonsai-check/    # Compliance audit
        ├── code-analyser/   # Dead-code detection
        ├── cp/              # Commit + push
        ├── grow/            # GROW! phase executor
        ├── grow-create/     # Generate GROW.md
        ├── grow-plan/       # Interactive phase planning
        ├── pc/              # Plan & Clarify
        ├── pycheck/         # Python quality pipeline
        ├── qa/              # Read-only questions
        ├── reactcheck/      # React/TS quality pipeline
        └── session-review/  # Post-session retro
```

## The BONSAI way

Every line of code is a liability. Every dependency is a debt. Every abstraction is a bet.

Grow only what the tree needs.
