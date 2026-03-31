---
name: cp
description: >
  Commit and push using the BONSAI emoji format. Smart staging with secret
  scanning, pre-flight checks, conflict detection, and error recovery. Supports
  flags: --amend, --no-push, --wip, --dry-run, or a quoted message override.
  Use when the user says "commit", "push", "c/p", "cp", or "commit and push".
---

# Seal the Ring — BONSAI Commit & Push

Every commit seals a ring of growth — deliberate, minimal, traceable.

## Arguments

Parse `$ARGUMENTS` for flags and message overrides:

| Flag | Effect |
|------|--------|
| `--amend` | Amend the previous commit instead of creating a new one |
| `--no-push` | Commit only, skip push to remote |
| `--wip` | Use `⚙️ wip` prefix, skip pre-flight lint, skip push |
| `--dry-run` | Show what would be committed without executing |
| `"quoted text"` | Use as commit message (auto-prepend emoji if missing) |

If no flags, run the full commit-and-push flow.

---

## Phase 1: Gather

Assess the working tree:

1. `git status` — staged, unstaged, and untracked changes
2. `git diff --stat` — summary of what changed
3. `git diff --cached --stat` — what is already staged
4. `git log --oneline -5` — recent commit style
5. `git stash list` — inform user if stashes exist

If nothing to commit, stop: "Nothing to commit — working tree is clean."

---

## Phase 2: Scan

Run pre-flight checks. Report all findings before proceeding.

### Secret Detection

Flag and **exclude** any file matching:

| Pattern | Risk |
|---------|------|
| `.env`, `.env.*` | Environment secrets |
| `*credentials*`, `*secret*`, `*token*` | Credential files |
| `*.pem`, `*.key`, `*.p12` | Private keys |
| `id_rsa*`, `id_ed25519*` | SSH keys |
| Files containing `API_KEY=`, `SECRET=`, `PASSWORD=`, `TOKEN=` | Embedded secrets |

### Conflict Detection

Search changed files for `<<<<<<<`, `=======`, `>>>>>>>` markers.
If found, **stop entirely** — do not proceed until resolved.

### Large File Warning

Flag any changed file over 1 MB. Warn but do not auto-exclude.

---

## Phase 3: Stage

**Never use `git add -A` or `git add .`** unless the user explicitly requests it.

| Situation | Action |
|-----------|--------|
| Files already staged | Respect existing staging, add only unstaged tracked changes |
| Only tracked files changed | `git add -u` |
| Mix of tracked and untracked | `git add -u`, then list untracked for user review |
| Only untracked files | Stage each by name, excluding secret-pattern files |
| `--dry-run` flag | Show what would be staged, then stop |

After staging, run `git diff --cached --stat` to confirm.

---

## Phase 4: Compose

### BONSAI Emoji Format

```
<emoji> <description>

<optional body — what and why>

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Emoji Selection

Analyze the diff to select the right emoji:

| Emoji | Mode | When | Example |
|-------|------|------|---------|
| 🌿 | Grow | New files with functionality, new features, new tests | `🌿 add user authentication flow` |
| 🔧 | Shape | Same behavior better structure, perf, formatting | `🔧 extract validation into shared module` |
| ✂️ | Prune | Removing dead code, unused files, deprecations | `✂️ remove deprecated API client` |
| 🩹 | Fix | Bug repair, error correction | `🩹 resolve null pointer in parser` |
| 📜 | Docs | Documentation only | `📜 update API reference for v2` |
| ⚙️ | Ops | Tooling, config, CI, dependencies | `⚙️ update ruff to 0.8.x` |

Optional scope in parentheses: `🌿(auth) add OAuth2 login flow`

### Inference Rules

- New files with code = 🌿
- Deleted files/functions = ✂️
- Only `.md` files changed = 📜
- Only config/CI files = ⚙️
- Bug keyword in context = 🩹
- Restructured but same behavior = 🔧

### Message Rules

- Present tense, imperative mood ("add" not "added")
- Subject under 50 characters
- Body explains what and why, not how
- One commit = one logical change

### User-provided message

If the user passed a quoted message, use it directly. Auto-prepend the best
emoji if missing (e.g., user says `"add login page"` becomes `🌿 add login page`).

### WIP mode

Use: `⚙️ wip — <brief description of state>`

---

## Phase 5: Commit

```bash
git commit -m "<emoji> <message>

Co-Authored-By: Claude <noreply@anthropic.com>"
```

If `--amend`: use `git commit --amend`.

### Hook Failure Recovery

1. Read the hook output — identify what failed
2. Fix the issues (formatting, lint, etc.)
3. Re-stage fixed files with `git add <files>`
4. Create a **NEW commit** (the failed commit never happened — do NOT amend)
5. Maximum **3 attempts** — after that, stop and report full error to user

---

## Phase 6: Push

Skip if `--no-push` or `--wip`.

1. Run `git push`
2. If rejected:

| Rejection | Recovery |
|-----------|----------|
| non-fast-forward | `git pull --rebase`, resolve conflicts, retry |
| no upstream branch | `git push -u origin <current-branch>` |
| permission denied | Stop — authentication issue |
| branch protection | Stop — suggest creating a PR instead |

3. **Never force push** unless the user explicitly says "force push"

---

## Phase 7: Verify

After commit (and push if applicable), show:

```
Sealed: <emoji> <description>
Branch: <branch-name>
   Sha: <short-sha>
 Files: <N> changed, +<insertions>, -<deletions>
Pushed: <remote/branch> | skipped (--no-push)
```

Run `git status` to confirm clean tree or show remaining changes.

$ARGUMENTS
