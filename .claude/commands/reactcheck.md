Bypass: Run full React/TypeScript linting and type checking, then fix all errors.

<commands>
bun run biome check --write .
bun run tsc --noEmit
</commands>

<process>
1. Run both commands
2. Read the complete output
3. Fix all reported errors
4. Re-run both commands to verify fixes
5. Repeat until clean
</process>

Ultrathink!