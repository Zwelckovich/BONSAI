Bypass: Analyze the codebase for dead code and quality issues. $ARGUMENTS

<scope>
Include: .py, .js, .ts, .html, .css, .jsx, .tsx files
Exclude: docs (.md, .pdf, .txt), virtual environments (.venv, venv, node_modules)
</scope>

<process>
1. Find all code files matching scope and create CODECHECK.md with file list
2. For each file, analyze and document:
   - Unused functions (defined but never called)
   - Empty/stub functions
   - Dead code (unreachable or obsolete logic)
   - Unused imports and variables
3. Cross-reference function usage across entire codebase before flagging as unused
4. Update CODECHECK.md after each file (preserves progress across context compactions)
5. Write final summary with actionable recommendations
</process>

<constraints>
Only modify CODECHECK.md. All source files are read-only during analysis.
</constraints>

Ultrathink!