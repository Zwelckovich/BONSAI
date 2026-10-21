# Upstream

BONSAI adopts ideas from other skill collections. This file records where each sync stopped and
what was deliberately left out, so the next sync diffs from the right commit and does not
re-litigate settled choices.

## mattpocock/skills

- **Repo:** https://github.com/mattpocock/skills (local clone: `C:\Git\mattpocock_skills`)
- **Last synced:** `5beb35b` (2026-10-21). Next sync: `git log --oneline 5beb35b..HEAD`.

### Adopted in the 2026-10-21 sync

- `pr` skill (repo template wins over the upstream template)
- `retro` guardrail check and mechanical vs judgement split → `session-review`
- `CONTEXT.md` → `GLOSSARY.md` rename (legacy name still read)
- `tdd` seam note, `diagnosing-bugs` mutation proof → `bonsai --tdd`
- `teach` quiz answer position and workspace path anchoring
- `gh issue view --json` (non-TTY `--comments` drops the title and body; `gh pr view --comments`
  has the same bug) → `github` flows

### Deliberate divergences

| Upstream | BONSAI | Why |
|----------|--------|-----|
| Grilling asks in plain chat; `AskUserQuestion` is out of scope (`.out-of-scope/native-question-tool.md`) | `/grill` asks via `AskUserQuestion` pickers, recommended answer first | Clickable pickers are the BONSAI interaction contract |
| `GLOSSARY.md` + ADRs carry the domain | `CONCEPT.md` is THE MASTER above both | BONSAI doc hierarchy |
| No em dashes, no emojis in prose | Em dashes allowed; emoji commit template | BONSAI style |
| `implement-spec` (ticket task graph, parallel worktree implementers) | Not adopted | BONSAI plans in GROW.md phases, not tickets (YAGNI) |
| `grilling`: word questions so "yes" accepts the recommendation | Not adopted | No-op with pickers |
| `handoff`: fixed temp-dir resolution order | Not adopted | User decision |
| `claude-handoff`: launch a `claude --bg` agent from the handoff | Not adopted | User decision |
| Built-in `/prototype` name collision (`.out-of-scope/harness-name-collisions.md`) | Ignored | User decision |
| `pr` template only | Repo PR/MR template takes precedence | Respect existing team templates |

### Watch list

Revisit when an observed failure asks for it.

- `chief-of-staff` (in-progress): date every wiki claim, cite the commit for code claims, mark
  old claims superseded instead of rewriting — candidate for `CLAUDE.local.md`.

## Other sources

Scouted on 2026-10-21; nothing adopted unless listed under the sync above.

- **humanlayer/skills** — `show-me` (origin of the `pr` visuals), `visual-pr` ("Why: one
  sentence", "Special things to note: 1–3 bullets or None." — watch), `improve-claude-md`
  (`<important if="…">` blocks for rules that only sometimes apply — watch).
- **cursor/plugins `pstack`** — enforcement ladder from `correct` /
  `principle-encode-lessons-in-structure` (adopted → `session-review`), `principle-attack-the-premise`
  (adopted → `philosophy.md`), `unslop` writing rules (watch: a `/unslop` command for
  human-facing prose only; conflicts with em dashes, emoji commits and leading words).
