<!-- BONSAI Codex adapter v1 -->
# BONSAI shared instructions for Codex

Use the existing BONSAI sources through these live symbolic links. At the start
of a session, read and apply:

1. `C:/Users/engels/.codex/CLAUDE.md` for the shared methodology.
2. All top-level Markdown files in `C:/Users/engels/.codex/bonsai-rules/` for the general rules.
3. `C:/Users/engels/.codex/output-styles/bonsai.md` for communication and output style.

For nested rule files, inspect their YAML `paths` patterns and read their body
when working on matching project-relative paths. In particular, Python files use
`python/visualization.md`; frontend files use `frontend/react-tailwind.md`.
Unscoped Markdown rules also apply generally. These paths are relative to
`C:/Users/engels/.codex/bonsai-rules/`. Claude's automatic rule loading is implemented here
as explicit reading instructions; linking the folders alone does not load them.

Read project-specific `CLAUDE.md` and `CLAUDE.local.md` when present and relevant.
Apply shared guidance as user preferences, subject to the current task and
Codex's instruction hierarchy. Project AGENTS.md files keep their normal scope.

## Shared skill compatibility

Shared skills are linked under `C:/Users/engels/.agents/skills/<skill>/SKILL.md`. Read the relevant
SKILL.md and its referenced resources before executing its workflow.

- Claude's `/skill-name` notation corresponds to Codex's `$skill-name` notation.
  Treat explicit user requests using either spelling as requests for that skill.
- If a shared workflow calls Claude's `Skill` tool, load the named skill's
  SKILL.md and follow it using available Codex tools. Do not invent a Skill tool.
- Use the available Codex question tool for `AskUserQuestion`; if unavailable,
  ask the user in text when an answer is required. Map other Claude tools to
  available Codex equivalents. Claude hooks and MCP connections are not installed
  by these links, so check actual tool availability before relying on them.
- Before starting a shared workflow, check its current SKILL.md frontmatter.
  Respect `disable-model-invocation: true`: run those workflows only when the
  user explicitly names or requests them.
- Normal Codex behavior remains the default; use the full BONSAI workflow when
  the user requests it.

`C:/Users/engels/.codex/rules/` contains Codex command execution policies. The shared Markdown
guidelines live in `bonsai-rules/` and must not replace those execution policies.
