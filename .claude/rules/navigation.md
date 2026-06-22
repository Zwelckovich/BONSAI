# BONSAI Project Navigation

A code map lets Claude navigate a project by reading a compact index instead of grepping and reading source — saving tokens on every "where is X / how does Y connect" question. BONSAI's recommended map tool is **graphify** (Python-only). BONSAI never generates, installs, or refreshes a map autonomously; it only *consumes* one the user produced (`/bonsai-init` offers install as an explicit opt-in).

## Detect at session start

Check whether a `graphify-out/` directory exists at the project root (a cheap `ls`/glob). Absent → navigate normally with grep/read. Present → navigate graph-first.

## Graph-first navigation

When a structure, "where is X", or dependency question arises and `graphify-out/` exists:

1. **Manifest first** — `ls graphify-out/`, open the top-level index (JSON or Markdown), follow its pointers. Don't assume file names; discover them.
2. **Drill to one node** — read only the JSON/MD node(s) you need. Never bulk-load the directory; that wastes the tokens the map exists to save.
3. **Fall back to live files** — grep/read when the map lacks the answer or conflicts with what you find.

## Staleness

A map drifts as code changes. Compare the newest mtime under `graphify-out/` against the latest commit (`git log -1 --format=%cI`) or recently changed files. If the map predates real changes, treat it as a hint — verify specifics against live files — and tell the user once that the map looks stale and may need regenerating.

## Boundary

Never write into `graphify-out/`, rebuild it, or run install without the user's explicit go-ahead. If a map would help and is absent, suggest the user generate one (see `tools.md`).
