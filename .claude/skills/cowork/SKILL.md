---
name: cowork
description: Coordinate project work with Codex (GPT-6 Astra) as worker and reviewer — write a brief, run Codex through the bundled runner, freeze the reviewed state with SHA-256, check the run, and close the work run. Use when the user asks to work together with Codex or Astra, wants a Codex review or a Codex implementation, or says "cowork", "mit Codex zusammen" or "nach cowork.md".
---

# cowork — Claude coordinates, Codex works and reviews

Claude is the **coordinator**: it writes briefs, starts Codex, reads logs and changed files, runs the tests, and
merges the result. Codex GPT-6 Astra is the **worker**: it implements bounded briefs or reviews a frozen state.
One coordinator per work run; Codex never starts further agents. Background, failure analyses, the CLI flag
reference and the reverse direction (Codex coordinates Claude): [cowork.md](cowork.md) — read it when a run fails
in a way this page does not cover.

`<SKILL>` below is the directory of this file (global install: `~/.claude/skills/cowork`). Run every command from
inside the project; the runner takes the git root of the current directory as the project.

## Work-run layout

```
<project>/.collaboration/
  <YYYY-MM-DD>-<topic>/        # checked in
    codex-<kind>.md            # brief, e.g. codex-review-grow.md; corrections: codex-<kind>-r2.md
    codex-<kind>-result.md     # Codex's last answer, written by the runner
    review-freeze.sha256       # state for the content review
    final.sha256               # state after corrections, refreshed after the last edit
    README.md                  # runs, verdicts, thread id, what stays unverified
  .runs/                       # raw logs (events, stderr, meta) — must be git-ignored
```

## Steps

1. **Baseline.** Read the project rules for the task and run `git status`; keep every user change. Make sure
   `.collaboration/.runs/` is in the project's `.gitignore`. If the working tree is dirty, snapshot it before
   anyone writes — staged, unstaged and untracked, into the ignored `.runs/`:
   `git diff HEAD --binary > .collaboration/.runs/<run>-baseline.diff` and
   `git ls-files -o --exclude-standard -z | tar --null -T - -cf .collaboration/.runs/<run>-baseline-untracked.tar`.
   Done when you can name the files in scope, who writes each one, and which changes predate the run.
2. **Contract.** Fix the user outcome, concrete blockers, non-goals and accepted uncertainty. Exactly one writer
   per file; Codex and Claude work in parallel only on disjoint files.
3. **Brief.** Write it in the user's working language with these sections: context, frozen state (reviews), scope
   of change, review task or task with acceptance criteria, handover. Codex runs with `--ignore-user-config` and
   knows nothing of this chat or CLAUDE.md: name every rule file it must read by absolute path and restate the
   decisions it must respect. Skills go in as `$name`. Reviews say: read only, no installs, no sub-agents, no
   commit; a blocker needs a concrete failure case; disagreement with reasons is welcome; findings numbered with
   file/line, severity (blocker / important / minor), impact, proposal; verdict APPROVE or CHANGES REQUESTED; list
   executed commands. Implementations say: allowed files, files that must stay unchanged, checks to run, and "name
   the commands you actually ran, their results and the checks your sandbox blocked".
4. **Freeze** (reviews only, after tests are green): `sha256sum <files> > <run-dir>/review-freeze.sha256` and, for
   code, `git diff HEAD --binary > <run-dir>/review.diff` (staged and unstaged). The brief names the manifest, the
   diff, the new untracked files in scope, the baseline and the test commands with their results. Leave the frozen
   files untouched until the review returns — a review of a moving state is worthless.
5. **Run** with Bash `run_in_background: true`, then wait for the notification:

   ```bash
   uv run --no-project python <SKILL>/scripts/run_codex.py <brief.md> <run-name> --sandbox read-only
   ```

   - `--sandbox read-only` for reviews, `workspace-write` for implementations and for headless-Chrome rendering.
   - `--effort high` is the default; `max` only when the user asks (a max turn takes 11–30 minutes).
   - `--resume <THREAD-ID>` continues a session: the id from your own run's summary, never `--last`.
   - Each run name is new; the runner refuses a reused name.
   - Codex binary: `$CODEX_EXE`, else the Codex desktop install on Windows, else `codex` on `PATH`.
6. **Check the run.** The runner prints a JSON summary. Done when all hold: `exit` 0, exactly one thread id (the
   same one on resume), `turn_completed` true, `errors` empty, `result_exists` true, and `stderr_tail` read.
   `models` stays empty — Codex events carry no model field, so only the passing of `-m gpt-6-astra` is proven.
   Then read the result file and every changed file yourself; `exit 0` alone is no handover.
7. **Weigh the findings.** Verify each one against the code or a reproducible case before acting. Fix the valid
   ones; answer the rest with reasons. Corrections stay with the author of the change set.
8. **Correction review.** Run the tests, write `final.sha256`, resume the same thread with a brief that lists only
   the fixes and asks: fixed? new errors? verdict? **Limit: one content review plus one correction review.** A
   further round only for a concrete open blocker. When two fixes on one premise fail, check the scope instead of
   writing a third fix.
9. **Close.** The approved state is the one in `final.sha256` at the time of APPROVE. Done when the acceptance
   criteria hold, final artifacts are rebuilt from that state, and `sha256sum -c <run-dir>/final.sha256` passes.
   An edit after APPROVE gets its own correction review, or — if trivial — a new manifest plus a README line
   "changed after approval, not reviewed: …"; a manifest alone never grants approval. Write `README.md` (table:
   run → verdict; thread id; what stays unverified, e.g. browser or live checks). Commit, push and publish only on
   the user's request.

## Guardrails

- Leave the Codex desktop conversation alone: no resume, no steering, no writes into it.
- End a hanging Codex run by its command line, never by image name (that hits the desktop app):
  `Get-CimInstance Win32_Process -Filter "Name='codex.exe'" | Where-Object { $_.CommandLine -like '*<run-name>-result.md*' } | Stop-Process -Force -Confirm:$false`
- Delete a Codex test session only on the user's request: `codex delete --force <THREAD-ID>`.
- On Windows Codex runs under another identity: git inside Codex needs `git -c safe.directory=<project> …`.
- If auto mode blocks the runner, the narrow allow rule is
  `Bash(uv run --no-project python ~/.claude/skills/cowork/scripts/run_codex.py *)` in the project's
  `.claude/settings.local.json` — then write the command with exactly that path.
