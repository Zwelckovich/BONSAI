# 🌱 BONSAI Flow - Optimal Claude Flow Commands

This document provides the best Claude Flow command configurations for implementing the BONSAI methodology with maximum efficiency.

## 🎯 Understanding Claude Flow Parameters

### Strategy Options
- **`balanced`**: Best for BONSAI's comprehensive 18-task workflow
- **`specialized`**: Best for GROW! mode with phase-specific optimization
- **`development`**: Only for pure building tasks (not recommended for full BONSAI)
- **`research`**: Only for pure analysis tasks

### Mode Options
- **`hierarchical`**: Supports BONSAI's 3-instance architecture
- **`centralized`**: Legacy option - incompatible with BONSAI's design
- **`distributed`**: For fault-tolerant large projects
- **`mesh`**: For experimental self-organizing workflows

### Max Agents
- **Range**: 4-16 agents (dynamically scaled)
- **BONSAI Standard**: 10 agents
- **BONSAI it!**: 8 agents  
- **GROW!**: 12-16 agents

## 📋 BONSAI Standard Workflow Command

For implementing the full 18-task BONSAI workflow:

```bash
npx claude-flow@alpha swarm \
  --strategy balanced \
  --mode hierarchical \
  --max-agents 10 \
  --prompt "Execute complete BONSAI workflow for: [YOUR TASK DESCRIPTION]"
```

### Why This Configuration?
- **Strategy: balanced** - Properly supports all 18 BONSAI tasks (planning + implementation + quality)
- **Mode: hierarchical** - Enables the 3-instance model (Overseer → Executor → Orchestrator)
- **Max Agents: 10** - Optimal distribution across all task phases
- **Explicit BONSAI mention** - Ensures workflow recognition and compliance

### Proper Agent Distribution (Hierarchical Mode)
With 10 agents in hierarchical mode:
- 1 Overseer (Instance 1) - Compliance monitoring
- 1 Lead Executor (Instance 2) - Technical coordination
- 2 Researcher agents - Tasks 1-3 (planning, concept alignment)
- 3 Coder agents - Tasks 4-7 (implementation, minimalism)
- 2 Tester agents - Tasks 8-11 (testing, validation)
- 1 Quality agent - Tasks 12-17 (documentation, cleanup)

## 🔄 BONSAI it! Transformation Command

For transforming existing projects to BONSAI style:

```bash
npx claude-flow@alpha swarm \
  --strategy balanced \
  --mode hierarchical \
  --max-agents 8 \
  --prompt "BONSAI it! - Transform this project to follow BONSAI principles with full analysis and careful modifications"
```

### Why This Configuration?
- **Strategy: balanced** - Equal emphasis on analysis and transformation
- **Mode: hierarchical** - Ensures proper oversight during transformation
- **Max Agents: 8** - Sufficient for controlled transformation
- **Explicit "BONSAI it!"** - Triggers transformation workflow

## 🌱 GROW! Orchestration Commands

### Standard GROW! (Phase-by-Phase)

```bash
npx claude-flow@alpha swarm \
  --strategy specialized \
  --mode hierarchical \
  --max-agents 12 \
  --prompt "GROW! - Execute next development phase based on concept.md with intelligent orchestration"
```

### GROW! --ALL (Complete Project)

```bash
npx claude-flow@alpha swarm \
  --strategy specialized \
  --mode hierarchical \
  --max-agents 16 \
  --timeout 7200 \
  --prompt "GROW! --ALL - Execute all development phases continuously from concept.md to completion"
```

### Why This Configuration?
- **Strategy: specialized** - Adapts to each phase's specific needs
- **Mode: hierarchical** - Fully activates the 3-instance system including Orchestrator
- **Max Agents: 12-16** - Scales with project complexity
- **Timeout: 7200** - 120 minutes for complete project development (timeout is in seconds)

## 📝 Commit & Push Workflow Command

For committing and pushing BONSAI-compliant code changes:

```bash
npx claude-flow@alpha swarm \
  --strategy balanced \
  --mode hierarchical \
  --max-agents 6 \
  --prompt "Execute BONSAI commit and push workflow with proper template formatting and compliance checks"
```

### Why This Configuration?
- **Strategy: balanced** - Ensures both code analysis and commit message quality
- **Mode: hierarchical** - Maintains BONSAI compliance during commit process
- **Max Agents: 6** - Sufficient for code review, formatting, and push operations
- **Explicit workflow mention** - Triggers proper commit template usage

### Commit Template Integration
This command automatically:
- Uses the BONSAI git commit template format
- Selects appropriate commit type (feat, fix, refactor, etc.)
- Ensures Claude Code attribution in footer
- Validates changes against BONSAI principles before push

### Workflow Alignment
- Integrates with Task 13 (Pre-commit Validation)
- Follows minimalism principle in commit messages
- Maintains project consistency through hierarchical oversight
- Supports the "c/p" alias functionality

## 🧮 Agent Scaling Guidelines

**Note**: Claude Flow doesn't automatically detect BONSAI modes. You must manually specify agent counts based on your task:

### Recommended Agent Counts by Task Type:
- **GROW! --ALL**: Use `--max-agents 16` (complete project development)
- **GROW!**: Use `--max-agents 12` (phase-based development)
- **BONSAI it!**: Use `--max-agents 8` (transformation tasks)
- **Standard BONSAI**: Use `--max-agents 10` (default workflow)

### Complexity-Based Guidelines:
- **Simple tasks (1-3 files)**: Use `--max-agents 4-6`
- **Medium tasks (4-6 files)**: Use `--max-agents 8`
- **Standard tasks (7-10 files)**: Use `--max-agents 10`
- **Complex tasks (10+ files)**: Use `--max-agents 12-16`

**Important**: You must explicitly set the agent count in your command. Claude Flow cannot automatically determine the optimal count based on BONSAI modes or task complexity.

### Why Research Strategy?
- **Focused Analysis**: Prioritizes deep understanding over implementation
- **Thorough Documentation**: Generates detailed reports and findings
- **BONSAI Alignment**: Follows Tasks 1-3 research methodology
- **Hierarchical Benefits**: Ensures systematic coverage of all components

### Why Balanced Strategy?
- **Comprehensive Coverage**: Balances research with actionable planning
- **BONSAI Compliance**: Naturally follows the 18-task structure
- **Concept Alignment**: Ensures all planning follows BONSAI principles
- **Implementation Ready**: Creates artifacts that can feed into GROW!

### Strategy Selection Tips:
- **Use `research`** for analysis-only tasks
- **Use `development`** for quick fixes (not recommended for full BONSAI)
- **Use `balanced`** for most general-purpose tasks
- **Use `specialized`** only for GROW! mode

## 💡 Best Practices

### 1. Strategy Selection Guide
- **Standard BONSAI**: Use `--strategy balanced` (covers all 18 tasks)
- **Pure Research**: Use `--strategy research` (analysis only)
- **Quick Fix**: Use `--strategy development` (implementation only)
- **GROW! Mode**: Use `--strategy specialized` (phase-adaptive)

### 2. Mode Selection Is Critical
- **Always use `--mode hierarchical`** for BONSAI workflows
- This enables the 3-instance architecture
- Other modes are incompatible with BONSAI's design

### 3. Agent Scaling Philosophy
- Start with recommended defaults (10 for BONSAI)
- Let dynamic scaling adjust based on complexity
- More agents ≠ violation of minimalism (process vs output)

### 4. Hierarchical Mode Benefits
- Proper compliance oversight (Instance 1)
- Efficient task delegation (Instance 2)
- GROW! orchestration support (Instance 3)
- Natural parallel execution within constraints

### 5. Timeout Recommendations
- **Standard BONSAI tasks**: Default timeout is usually sufficient
- **Complex projects**: Add `--timeout 3600` (60 minutes)
- **GROW! --ALL**: Always use `--timeout 7200` (120 minutes)
- **Note**: Timeout values are in seconds, not minutes

## 📊 Expected Outcomes

With these configurations:

### Standard BONSAI Workflow
- Better balance between planning and implementation
- Proper 3-instance oversight model
- More thoughtful, minimal solutions
- Enhanced compliance tracking

### BONSAI it! Transformation
- Deeper analysis before transformation
- Better preservation of existing value
- More systematic minimalism application

### GROW! Orchestration
- Full orchestrator activation
- Better phase transitions
- Adaptive strategy per phase
- Natural progression tracking

## 🎨 Architecture Visualization

**Important**: The "3-instance model" below is a conceptual mapping of BONSAI's philosophy to claude-flow's hierarchical mode, not a strict technical implementation. Claude-flow's hierarchical mode provides a tree structure where agents can have parent-child relationships, but the specific roles (Overseer, Executor, Orchestrator) are interpreted through the prompts and agent behaviors, not enforced by the system.

```
Conceptual BONSAI Mapping to Hierarchical Mode:
┌─────────────────────────────────┐
│   Instance 1: Overseer          │ ← Compliance & Philosophy (conceptual role)
├─────────────────────────────────┤
│   Instance 2: Lead Executor     │ ← Technical Coordination (conceptual role)
├─────────────────────────────────┤
│   Worker Agents (4-14)          │ ← Parallel Task Execution
│   • Researchers (Tasks 1-3)     │
│   • Coders (Tasks 4-7)          │
│   • Testers (Tasks 8-11)        │
│   • Quality (Tasks 12-17)       │
└─────────────────────────────────┘
    ↓ (GROW! mode only)
┌─────────────────────────────────┐
│   Instance 3: Orchestrator      │ ← Phase Management (conceptual role)
└─────────────────────────────────┘
```

**What actually happens**: In hierarchical mode, claude-flow creates a tree structure where some agents can spawn and manage other agents. The BONSAI "instances" are conceptual roles that emerge from how we configure and prompt the agents, not hard-coded system features.

## 🌟 Conclusion

These configurations properly align Claude Flow with BONSAI's philosophy and architecture. The balanced strategy and hierarchical mode ensure that BONSAI's comprehensive 18-task workflow and 3-instance oversight model function as designed.

Remember: BONSAI is about thoughtful, minimal implementation - not just rapid building. These configurations support that philosophy by providing proper balance between analysis, implementation, and quality assurance.