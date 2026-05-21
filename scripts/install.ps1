#!/usr/bin/env pwsh
# BONSAI install lifecycle: install / status / update / uninstall

[CmdletBinding()]
param(
    [Parameter(Position=0)]
    [ValidateSet('install', 'status', 'update', 'uninstall', 'help', '')]
    [string]$Command = '',

    [switch]$Project,
    [switch]$CursorGlobal,
    [switch]$CursorProject
)

$ErrorActionPreference = 'Stop'

$RepoRoot = (Resolve-Path "$PSScriptRoot\..").Path

# BONSAI palette (24-bit VT100)
$esc = [char]27
$G = "$esc[38;2;124;152;133m"  # green  #7c9885
$R = "$esc[38;2;199;130;137m"  # red    #c78289
$B = "$esc[38;2;130;164;199m"  # blue   #82a4c7
$Y = "$esc[38;2;199;168;130m"  # yellow #c7a882
$M = "$esc[38;2;139;146;165m"  # muted  #8b92a5
$N = "$esc[0m"

function Show-CursorHint([string]$Verb) {
    if ($Target -notlike 'cursor-*') { return }
    $action = switch ($Verb) {
        'install'   { 'paste' }
        'status'    { 're-check' }
        'update'    { 're-paste after this update' }
        'uninstall' { 'clear from' }
    }
    Write-Host ""
    Write-Host "${Y}⚠${N}  Cursor User Rules are manual — ${action}:"
    Write-Host "   Cursor → Settings → Rules → User Rules"
    Write-Host "   ${M}$RepoRoot\.claude\output-styles\bonsai.md${N}"
}

function Show-Usage {
    @"
BONSAI install lifecycle

Usage: .\scripts\install.ps1 <command> [target-flag]

Commands:
  install        Create symlinks (and copies) for the chosen target
  status         Show what is linked, drifted, or missing
  update         git pull --ff-only the BONSAI repo (refuses if dirty)
  uninstall      Remove symlinks safely (only ones pointing into BONSAI)

Targets (default: Claude Code global):
  -Project        Claude Code in the current directory (.\.claude\)
  -CursorGlobal   Cursor user-level (~\.cursor\)
  -CursorProject  Cursor in the current directory (.\.cursor\)
"@ | Write-Host
}

$flagCount = @($Project, $CursorGlobal, $CursorProject | Where-Object { $_ }).Count
if ($flagCount -gt 1) {
    Write-Host "${R}Pick only one of -Project, -CursorGlobal, -CursorProject${N}"
    exit 1
}
$Target = if ($Project)             { 'claude-project' }
          elseif ($CursorGlobal)    { 'cursor-global' }
          elseif ($CursorProject)   { 'cursor-project' }
          else                      { 'claude-global' }

function Get-Artifacts {
    $h = $HOME
    $cwd = (Get-Location).Path
    switch ($Target) {
        'claude-global' {
            @{ Kind='link'; Src="$RepoRoot\CLAUDE.md";             Dest="$h\.claude\CLAUDE.md" }
            @{ Kind='link'; Src="$RepoRoot\.claude\rules";         Dest="$h\.claude\rules" }
            @{ Kind='link'; Src="$RepoRoot\.claude\skills";        Dest="$h\.claude\skills" }
            @{ Kind='link'; Src="$RepoRoot\.claude\output-styles"; Dest="$h\.claude\output-styles" }
        }
        'claude-project' {
            @{ Kind='link'; Src="$RepoRoot\.claude\rules";         Dest="$cwd\.claude\rules" }
            @{ Kind='link'; Src="$RepoRoot\.claude\skills";        Dest="$cwd\.claude\skills" }
            @{ Kind='link'; Src="$RepoRoot\.claude\output-styles"; Dest="$cwd\.claude\output-styles" }
            @{ Kind='copy'; Src="$RepoRoot\CLAUDE.md";             Dest="$cwd\CLAUDE.md" }
        }
        'cursor-global' {
            @{ Kind='link'; Src="$RepoRoot\.claude\rules";         Dest="$h\.cursor\rules" }
            @{ Kind='link'; Src="$RepoRoot\.claude\skills";        Dest="$h\.cursor\skills" }
            @{ Kind='copy'; Src="$RepoRoot\CLAUDE.md";             Dest="$h\AGENTS.md" }
        }
        'cursor-project' {
            @{ Kind='link'; Src="$RepoRoot\.claude\rules";         Dest="$cwd\.cursor\rules" }
            @{ Kind='link'; Src="$RepoRoot\.claude\skills";        Dest="$cwd\.cursor\skills" }
            @{ Kind='copy'; Src="$RepoRoot\CLAUDE.md";             Dest="$cwd\AGENTS.md" }
        }
    }
}

function Test-LinkToRepo([string]$Path) {
    $item = Get-Item -LiteralPath $Path -Force -ErrorAction SilentlyContinue
    if (-not $item -or -not $item.LinkType) { return $false }
    $target = @($item.Target)[0]
    if (-not $target) { return $false }
    try {
        $resolved = (Resolve-Path -LiteralPath $target -ErrorAction Stop).Path
    } catch { return $false }
    return $resolved.StartsWith($RepoRoot, [StringComparison]::OrdinalIgnoreCase)
}

function Invoke-Install {
    Write-Host "${B}→${N} Installing BONSAI ($Target)"
    foreach ($a in Get-Artifacts) {
        $parent = Split-Path $a.Dest -Parent
        if (-not (Test-Path -LiteralPath $parent)) {
            New-Item -ItemType Directory -Path $parent -Force | Out-Null
        }
        if ($a.Kind -eq 'link') {
            if (Test-Path -LiteralPath $a.Dest) {
                $existing = Get-Item -LiteralPath $a.Dest -Force
                if ($existing.LinkType) {
                    Remove-Item -LiteralPath $a.Dest -Force
                } else {
                    Write-Host "  ${R}✗${N} $($a.Dest) exists and is not a symlink — back up & remove first"
                    continue
                }
            }
            try {
                New-Item -ItemType SymbolicLink -Path $a.Dest -Target $a.Src -ErrorAction Stop | Out-Null
                Write-Host "  ${G}✓${N} linked $($a.Dest)"
            } catch {
                Write-Host "  ${R}✗${N} symlink failed: $($_.Exception.Message)"
                Write-Host "     ${M}Enable Settings → For developers → Developer Mode, or run as admin${N}"
                exit 1
            }
        } else {
            Copy-Item -LiteralPath $a.Src -Destination $a.Dest -Force
            Write-Host "  ${G}✓${N} copied $($a.Dest) ${M}(local, not tracked)${N}"
        }
    }
    Show-CursorHint 'install'
}

function Invoke-Status {
    Write-Host "${B}→${N} BONSAI status ($Target)"
    $rc = 0
    foreach ($a in Get-Artifacts) {
        $exists = Test-Path -LiteralPath $a.Dest
        if (-not $exists) {
            Write-Host "  ${R}✗${N} missing      $($a.Dest)"
            $rc = 1
            continue
        }
        if ($a.Kind -eq 'link') {
            $item = Get-Item -LiteralPath $a.Dest -Force
            if (Test-LinkToRepo $a.Dest) {
                Write-Host "  ${G}✓${N} linked       $($a.Dest)"
            } elseif ($item.LinkType) {
                Write-Host "  ${Y}⚠${N} wrong target $($a.Dest) → $(@($item.Target)[0])"
                $rc = 1
            } else {
                Write-Host "  ${Y}⚠${N} not a link   $($a.Dest)"
                $rc = 1
            }
        } else {
            $srcHash = (Get-FileHash -LiteralPath $a.Src).Hash
            $dstHash = (Get-FileHash -LiteralPath $a.Dest).Hash
            if ($srcHash -eq $dstHash) {
                Write-Host "  ${G}✓${N} in sync      $($a.Dest) ${M}(copy)${N}"
            } else {
                Write-Host "  ${Y}⚠${N} drifted      $($a.Dest) ${M}(copy)${N}"
            }
        }
    }
    Show-CursorHint 'status'
    exit $rc
}

function Invoke-Update {
    Write-Host "${B}→${N} Updating BONSAI repo at $RepoRoot"
    $dirty = git -C $RepoRoot status --porcelain
    if ($dirty) {
        Write-Host "${R}✗${N} repo has uncommitted changes — commit or stash before updating:"
        Write-Host $dirty
        exit 1
    }
    git -C $RepoRoot pull --ff-only
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    Write-Host "${G}✓${N} updated"
    Show-CursorHint 'update'
}

function Invoke-Uninstall {
    Write-Host "${B}→${N} Uninstalling BONSAI ($Target)"
    foreach ($a in Get-Artifacts) {
        if ($a.Kind -eq 'link') {
            if (Test-LinkToRepo $a.Dest) {
                Remove-Item -LiteralPath $a.Dest -Force
                Write-Host "  ${G}✓${N} removed link $($a.Dest)"
            } elseif (Test-Path -LiteralPath $a.Dest) {
                Write-Host "  ${Y}⚠${N} skipped      $($a.Dest) ${M}(not a link into BONSAI repo)${N}"
            } else {
                Write-Host "  ${M}—${N} absent       $($a.Dest)"
            }
        } else {
            Write-Host "  ${M}—${N} kept copy    $($a.Dest) ${M}(delete manually if desired)${N}"
        }
    }
    Show-CursorHint 'uninstall'
}

switch ($Command) {
    'install'   { Invoke-Install }
    'status'    { Invoke-Status }
    'update'    { Invoke-Update }
    'uninstall' { Invoke-Uninstall }
    default     { Show-Usage }
}
