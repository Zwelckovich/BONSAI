---
name: code-analyser
description: >
  Analyze the codebase for dead code, unused functions, empty stubs, unused imports,
  and quality issues. Creates a CODECHECK.md report. Read-only — does not modify
  source files. Use when the user wants a code audit, dead code detection, or
  quality analysis. Trigger on "analyze code", "find dead code", "unused functions",
  or "code quality check".
---

# Code Quality Analysis

Analyze the codebase for dead code and quality issues. This is a read-only analysis — source files are never modified.

## Scope

**Include**: `.py`, `.js`, `.ts`, `.html`, `.css`, `.jsx`, `.tsx` files
**Exclude**: docs (`.md`, `.pdf`), virtual environments (`.venv`, `node_modules`)

## Process

1. **Find all code files** matching scope and create `CODECHECK.md` with the file list
2. **For each file**, analyze and document:
   - Unused functions (defined but never called)
   - Empty/stub functions
   - Dead code (unreachable or obsolete logic)
   - Unused imports and variables
3. **Cross-reference** function usage across the entire codebase before flagging as unused
4. **Update CODECHECK.md** after each file (preserves progress if context compacts)
5. **Write final summary** with actionable recommendations

## Output Format (CODECHECK.md)

```markdown
# Code Quality Analysis Report

## Files Analyzed: [count]

### [filename]
- ⚠️ Unused function: `function_name` (line X) — not called anywhere
- ⚠️ Unused import: `module` (line X)
- ⚠️ Empty stub: `function_name` (line X)

### Summary
- Total issues: [count]
- Unused functions: [count]
- Unused imports: [count]
- Dead code blocks: [count]

### Recommendations
1. [actionable recommendation]
2. [actionable recommendation]
```

## Constraints

Only modify `CODECHECK.md`. All source files are read-only during analysis.

$ARGUMENTS
