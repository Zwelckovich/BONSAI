#!/usr/bin/env bash
# BONSAI install lifecycle: install / status / update / uninstall
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# BONSAI palette (24-bit VT100)
G=$'\033[38;2;43;217;138m'  # ok     #2bd98a
R=$'\033[38;2;232;72;62m'  # err    #e8483e
B=$'\033[38;2;124;201;242m'  # info   #7cc9f2
Y=$'\033[38;2;255;162;60m'  # warn   #ffa23c
M=$'\033[38;2;170;181;190m'  # muted  #aab5be
N=$'\033[0m'

cursor_hint() {
    [[ "$TARGET" == cursor-* ]] || return 0
    local action
    case "$1" in
        install)   action="paste" ;;
        status)    action="re-check" ;;
        update)    action="re-paste after this update" ;;
        uninstall) action="clear from" ;;
    esac
    printf "\n%s⚠%s  Cursor User Rules are manual — %s:\n" "$Y" "$N" "$action"
    printf "   Cursor → Settings → Rules → User Rules\n"
    printf "   %s%s/.claude/output-styles/bonsai.md%s\n" "$M" "$REPO_ROOT" "$N"
}

usage() {
    cat <<EOF
BONSAI install lifecycle

Usage: ./scripts/install.sh <command> [target-flag]

Commands:
  install        Create symlinks (and copies) for the chosen target
  status         Show what is linked, drifted, or missing
  update         git pull --ff-only the BONSAI repo (refuses if dirty)
  uninstall      Remove symlinks safely (only ones pointing into BONSAI)

Targets (default: Claude Code global):
  --project          Claude Code in the current directory (./.claude/)
  --cursor-global    Cursor user-level (~/.cursor/)
  --cursor-project   Cursor in the current directory (./.cursor/)
EOF
}

SUBCOMMAND="${1:-}"
[[ $# -gt 0 ]] && shift
TARGET="claude-global"
while [[ $# -gt 0 ]]; do
    case "$1" in
        --project)        TARGET="claude-project" ;;
        --cursor-global)  TARGET="cursor-global" ;;
        --cursor-project) TARGET="cursor-project" ;;
        -h|--help)        usage; exit 0 ;;
        *) printf "%sUnknown flag: %s%s\n" "$R" "$1" "$N" >&2; exit 1 ;;
    esac
    shift
done

# Artifact table — one line per artifact: "kind|source|dest"
artifacts() {
    case "$TARGET" in
        claude-global)
            echo "link|$REPO_ROOT/CLAUDE.md|$HOME/.claude/CLAUDE.md"
            echo "link|$REPO_ROOT/.claude/rules|$HOME/.claude/rules"
            echo "link|$REPO_ROOT/.claude/skills|$HOME/.claude/skills"
            echo "link|$REPO_ROOT/.claude/output-styles|$HOME/.claude/output-styles"
            ;;
        claude-project)
            echo "link|$REPO_ROOT/.claude/rules|$PWD/.claude/rules"
            echo "link|$REPO_ROOT/.claude/skills|$PWD/.claude/skills"
            echo "link|$REPO_ROOT/.claude/output-styles|$PWD/.claude/output-styles"
            echo "copy|$REPO_ROOT/CLAUDE.md|$PWD/CLAUDE.md"
            ;;
        cursor-global)
            echo "link|$REPO_ROOT/.claude/rules|$HOME/.cursor/rules"
            echo "link|$REPO_ROOT/.claude/skills|$HOME/.cursor/skills"
            echo "copy|$REPO_ROOT/CLAUDE.md|$HOME/AGENTS.md"
            ;;
        cursor-project)
            echo "link|$REPO_ROOT/.claude/rules|$PWD/.cursor/rules"
            echo "link|$REPO_ROOT/.claude/skills|$PWD/.cursor/skills"
            echo "copy|$REPO_ROOT/CLAUDE.md|$PWD/AGENTS.md"
            ;;
    esac
}

# True if $1 is a symlink whose resolved target lives inside $REPO_ROOT
is_link_to_repo() {
    [[ -L "$1" ]] || return 1
    local resolved
    resolved="$(readlink -f "$1" 2>/dev/null || readlink "$1")"
    [[ "$resolved" == "$REPO_ROOT"* ]]
}

cmd_install() {
    printf "%s→%s Installing BONSAI (%s)\n" "$B" "$N" "$TARGET"
    while IFS='|' read -r kind src dest; do
        mkdir -p "$(dirname "$dest")"
        if [[ "$kind" == "link" ]]; then
            if [[ -L "$dest" ]]; then
                rm "$dest"
            elif [[ -e "$dest" ]]; then
                printf "  %s✗%s %s exists and is not a symlink — back up & remove first\n" "$R" "$N" "$dest"
                continue
            fi
            ln -s "$src" "$dest"
            printf "  %s✓%s linked %s\n" "$G" "$N" "$dest"
        else
            cp -f "$src" "$dest"
            printf "  %s✓%s copied %s %s(local, not tracked)%s\n" "$G" "$N" "$dest" "$M" "$N"
        fi
    done < <(artifacts)

    cursor_hint install
}

cmd_status() {
    printf "%s→%s BONSAI status (%s)\n" "$B" "$N" "$TARGET"
    local rc=0
    while IFS='|' read -r kind src dest; do
        if [[ ! -e "$dest" && ! -L "$dest" ]]; then
            printf "  %s✗%s missing      %s\n" "$R" "$N" "$dest"
            rc=1
        elif [[ "$kind" == "link" ]]; then
            if is_link_to_repo "$dest"; then
                printf "  %s✓%s linked       %s\n" "$G" "$N" "$dest"
            elif [[ -L "$dest" ]]; then
                printf "  %s⚠%s wrong target %s → %s\n" "$Y" "$N" "$dest" "$(readlink "$dest")"
                rc=1
            else
                printf "  %s⚠%s not a link   %s\n" "$Y" "$N" "$dest"
                rc=1
            fi
        else
            if cmp -s "$src" "$dest"; then
                printf "  %s✓%s in sync      %s %s(copy)%s\n" "$G" "$N" "$dest" "$M" "$N"
            else
                printf "  %s⚠%s drifted      %s %s(copy)%s\n" "$Y" "$N" "$dest" "$M" "$N"
            fi
        fi
    done < <(artifacts)
    cursor_hint status
    exit $rc
}

cmd_update() {
    printf "%s→%s Updating BONSAI repo at %s\n" "$B" "$N" "$REPO_ROOT"
    local dirty
    dirty="$(git -C "$REPO_ROOT" status --porcelain)"
    if [[ -n "$dirty" ]]; then
        printf "%s✗%s repo has uncommitted changes — commit or stash before updating:\n" "$R" "$N"
        printf "%s\n" "$dirty"
        exit 1
    fi
    git -C "$REPO_ROOT" pull --ff-only
    printf "%s✓%s updated\n" "$G" "$N"
    cursor_hint update
}

cmd_uninstall() {
    printf "%s→%s Uninstalling BONSAI (%s)\n" "$B" "$N" "$TARGET"
    while IFS='|' read -r kind src dest; do
        if [[ "$kind" == "link" ]]; then
            if is_link_to_repo "$dest"; then
                rm "$dest"
                printf "  %s✓%s removed link %s\n" "$G" "$N" "$dest"
            elif [[ -L "$dest" || -e "$dest" ]]; then
                printf "  %s⚠%s skipped      %s %s(not a link into BONSAI repo)%s\n" "$Y" "$N" "$dest" "$M" "$N"
            else
                printf "  %s—%s absent       %s\n" "$M" "$N" "$dest"
            fi
        else
            printf "  %s—%s kept copy    %s %s(delete manually if desired)%s\n" "$M" "$N" "$dest" "$M" "$N"
        fi
    done < <(artifacts)
    cursor_hint uninstall
}

case "$SUBCOMMAND" in
    install)   cmd_install ;;
    status)    cmd_status ;;
    update)    cmd_update ;;
    uninstall) cmd_uninstall ;;
    ""|-h|--help) usage ;;
    *) printf "%sUnknown command: %s%s\n" "$R" "$SUBCOMMAND" "$N" >&2; usage; exit 1 ;;
esac
