Bypass: Initialize BONSAI context by reading CLAUDE.md in 4 chunks.

<process>
1. Read CLAUDE.md to determine total line count
2. Calculate chunk_size = total_lines ÷ 4 (integer division)
3. Read 4 sequential chunks:
   - Chunk 1: offset=1, limit=chunk_size
   - Chunk 2: offset=chunk_size+1, limit=chunk_size
   - Chunk 3: offset=2×chunk_size+1, limit=chunk_size
   - Chunk 4: offset=3×chunk_size+1, limit=remaining_lines
4. Display progress after each chunk:
   "🌱 Initializing BONSAI context... [████░░░░░░] 2/4"
5. Verify sum of all chunks equals total line count
</process>

<output>
Display only progress bars during loading.
Final message: "🌱 BONSAI context loaded successfully\nReady for commands."
Do not output CLAUDE.md content.
</output>