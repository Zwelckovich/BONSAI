# BONSAI Project Navigation

A code map lets Claude navigate a project by reading a compact index instead of grepping and reading source — saving tokens on every "where is X / how does Y connect" question. BONSAI's recommended map tool is **graphify** (Python-only). BONSAI never generates, installs, or refreshes a map autonomously; it only *consumes* one the user produced (`/bonsai-init` offers install as an explicit opt-in).

## Detect before navigating (mandatory first action)

Before answering the **first** structure / "where is X" / dependency / "how does Y connect" question of a session — and before any grep/read done to answer it — glob the project root for `graphify-out/`. Do this even when the task looks like a quick one-liner; it is a single cheap glob, and skipping it silently forfeits the token savings the map exists for. (BONSAI ships no session-start hook — by design, so it never touches a user's `settings.json` — so this check is yours to run, not the harness's.)

- **Absent** → navigate normally with grep/read.
- **Present** → navigate graph-first (see below) — do not fall back to grepping until the map has been consulted.

## Graph-first navigation

When a structure, "where is X", or dependency question arises and `graphify-out/` exists:

1. **Manifest first** — `ls graphify-out/`, open the top-level index (JSON or Markdown), follow its pointers. Don't assume file names; discover them.
2. **Drill to one node** — read only the JSON/MD node(s) you need. Never bulk-load the directory; that wastes the tokens the map exists to save.
3. **Fall back to live files** — grep/read when the map lacks the answer or conflicts with what you find.

## Which mode: read the map (default) vs. query the engine

`graphify-out/` is consumed two ways. Default to reading the map; escalate to the query engine only when the question is genuinely multi-hop.

- **Mode A — read the map (default).** The "Graph-first navigation" steps above: `GRAPH_REPORT.md` for orientation (god nodes, communities, surprising connections), drill `graph.json` for a specific node. No skill call, no CLI — the BONSAI-minimal, token-cheap path. Use for orientation, "where is X", "core abstraction", single-hop "what connects to X".
- **Mode B — query the engine (escalate).** Invoke the graphify skill's traversal subcommands when Mode A is clumsy or came up short:
  - `/graphify query "…"` — multi-hop trace ("how does X reach Y"); add `--dfs` for one specific chain.
  - `/graphify path "A" "B"` — shortest link between two named nodes.
  - `/graphify explain "X"` — full neighborhood of one node.
  Also escalate on a Mode-A miss (vocabulary mismatch — the CLI's constrained expansion beats ad-hoc grep), or to record the answer for reuse (only Mode B feeds `save-result` → `reflect` → `reflections/LESSONS.md`).

**Decision rule:** orientation / "where is X" → Mode A; multi-hop / path / explain, or Mode A fell short → Mode B; **editing a specific line → always open the live file** (the graph routes you to the file, it does not replace reading it).

Do not default to Mode B — running the traversal engine for "where is X" is over-tooling. Neither mode is ground truth: fall back to live files when the map is stale or conflicts (see Staleness).

## Staleness

A map drifts as code changes. Compare the newest mtime under `graphify-out/` against the latest commit (`git log -1 --format=%cI`) or recently changed files. If the map predates real changes, treat it as a hint — verify specifics against live files — and tell the user once that the map looks stale and may need regenerating.

## Boundary

Never write into `graphify-out/`, rebuild it, or run install without the user's explicit go-ahead. If a map would help and is absent, suggest the user generate one (see `tools.md`).
