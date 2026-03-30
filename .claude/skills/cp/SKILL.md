---
name: cp
description: >
  Commit and push using the BONSAI commit template. Stages changes, creates a
  well-formatted commit message with proper type prefix, and pushes to remote.
  Use when the user says "commit", "push", "c/p", or "commit and push".
---

# Commit and Push

Commit staged and unstaged changes using the BONSAI commit format, then push.

## Process

1. Run `git status` to see all changes
2. Run `git diff` to understand what changed
3. Run `git log --oneline -5` to match commit message style
4. Stage relevant files (prefer specific files over `git add -A`)
5. Create commit with BONSAI format:

```
<type>: <description>

<optional body explaining what and why>

Co-Authored-By: Claude <noreply@anthropic.com>
```

Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`, `perf`, `clean`

6. Push to remote: `git push`

Do not commit files that likely contain secrets (`.env`, credentials).

$ARGUMENTS
