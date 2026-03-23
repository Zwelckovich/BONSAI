Bypass: Run full Python formatting, linting, and type checking, then fix all errors.

<commands>
uv run ruff format
uv run ruff check
uv run ty check
</commands>

<process>
1. Run all three commands in order (format first to avoid conflicts)
2. Read the complete output from each
3. Fix all reported errors
4. Re-run all commands to verify fixes
5. Repeat until clean
</process>

Ultrathink!