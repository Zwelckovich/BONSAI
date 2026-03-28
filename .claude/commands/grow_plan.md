Plan phase $ARGUMENTS using the phase prompt from GROW.md.

<behavior>
Be interactive and collaborative. Ask clarifying questions before committing to an approach.
</behavior>

<phase-requirements>
Every phase MUST produce a runnable, testable deliverable that the end user can use immediately:

1. **Single-command runnable** — the phase must work with ONE terminal command (e.g., `uv run python main.py`, `bun run dev`, `./run.sh`). No multi-step setup.
2. **Immediately testable** — the end user can interact with, verify, and use the result without extra configuration or wiring.
3. **Self-contained** — no dangling imports, half-wired features, or placeholder TODOs. Everything the phase delivers works end-to-end.
4. **Run command defined** — the plan MUST specify the exact command to run and test the phase. This command goes into GROW.md under the phase entry.
5. **BONSAI minimal** — the simplest possible way to run it. Prefer `uv run` / `bun run` over complex scripts. No unnecessary build steps.
</phase-requirements>

<workflow>
1. Read the phase prompt from GROW.md
2. Analyze the phase requirements and identify what needs clarification
3. Ask 3-5 clarifying questions about scope, constraints, preferences, and trade-offs for this phase
4. After receiving answers, present 2-3 approach options:
   - Option 1: [approach] — [trade-off summary]
   - Option 2: [approach] — [trade-off summary]
   - Option 3: [approach] — [trade-off summary]
5. Once an approach is selected, present the detailed plan including:
   - The exact run command for this phase
   - What the user will see/interact with when they run it
   - How to verify it works
6. On approval, execute the full GROW! BONSAI workflow for this phase
7. After implementation, verify the run command works and document it in GROW.md
</workflow>

<post-completion>
- Verify the phase is runnable with the documented single command
- Update GROW.md with process results and the verified run command
- Create an example in dev_examples/ matching existing examples
- Update GROW_CROSSWALK.md
- Check all documentation for inconsistencies (outdated phase references, missing updates)
</post-completion>

<output-format>
Use numbered lists and clear headers. Keep each option to 2-3 sentences.
Include the run command for each option.
End options with: "Which option do you prefer, or would you like to explore a different direction?"
</output-format>

Ultrathink!
