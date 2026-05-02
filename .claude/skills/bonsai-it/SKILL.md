---
name: bonsai-it
description: >
  Transform an existing project to follow BONSAI principles. Replaces tools
  (pip→uv, npm→bun, black→ruff, eslint→biome), restructures directories,
  migrates the design system, and updates concept.md. Requires double confirmation
  before executing. Use when user says "BONSAI it!", "transform to BONSAI",
  or "convert this project".
disable-model-invocation: true
---

# BONSAI it! — Project Transformation

Transform an existing project to follow BONSAI principles: minimal tools, clean structure, consistent design.

## Warning Protocol

**Before ANY changes**, display this warning and require DOUBLE confirmation:

```
⚠️ BONSAI TRANSFORMATION WARNING

This will modify your project:
- Tool replacements (black → ruff, npm → bun, etc.)
- Directory restructuring toward minimal layout
- Design system migration to BONSAI colors/typography
- Configuration file modifications

RECOMMENDATION: Commit all changes before proceeding.

Type "I understand and want to proceed" to continue.
```

After first confirmation:
```
⚠️ FINAL CONFIRMATION
Type "BONSAI transform my project" to begin.
```

## Execution Logic

Detect what exists and act accordingly:

| concept.md | Code Files | Action |
|------------|------------|--------|
| Yes | Yes | Modify concept.md + transform code |
| Yes | No | Only modify concept.md |
| No | Yes | Only transform code (don't create concept.md) |
| No | No | Do nothing — inform user |

Code detection: `.py`, `.js`, `.ts`, `.html`, `.css`, `package.json`, `pyproject.toml`, `src/`, `lib/`, `app/`

## Phase 1: Concept Alignment

If `concept.md` exists:
1. Back up: `concept.md.bonsai_backup_[timestamp]`
2. Remove embedded directory structures and tooling choices
3. Preserve project-specific requirements
4. Add reference to BONSAI guidelines
5. Add BONSAI design system requirements section

## Phase 2: Directory Reconstruction

Only if existing code structure detected:
1. Detect current structure and framework patterns
2. Apply BONSAI progressive structure (simplify over-organized layouts)
3. Fix imports and path references
4. Maintain all functionality

## Phase 3: Deep Integration

Only if existing code structure detected:

**Tool Migration:**
| From | To |
|------|----|
| black + isort + flake8 | ruff |
| eslint + prettier | biome |
| pip/pipenv/poetry | uv |
| npm/yarn/pnpm | bun |
| Material-UI | BONSAI design + Tailwind |
| Redux | zustand |
| webpack | vite 8+ |
| mypy | ty |
| unittest | pytest |
| matplotlib (default) | BONSAI matplotlib theme |
| rich (default colors) | BONSAI Rich palette |

**Design System Migration:**
- Replace all color schemes with BONSAI palette
- Update typography to Inter Variable / Quicksand / JetBrains Mono
- Apply dark zen principles
- Integrate BONSAI matplotlib theme if matplotlib is used
- Integrate BONSAI Rich colors if Rich is used

## Documentation

Generate `BONSAI_IT_PROCESS.md` (add to .gitignore) documenting:
- What was changed
- Tools migrated
- Files modified
- Rollback instructions
- Issues requiring manual attention

## Post-Transform

Run the `/bonsai` workflow (Shape mode) to verify everything works:
- Format/lint/type-check with new tools
- Run existing tests
- Verify the project builds and runs

$ARGUMENTS
