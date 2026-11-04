"""Codex worker runner for the BONSAI skill `cowork` (procedure: SKILL.md next to scripts/).

Starts or resumes one Codex CLI session with a fixed model, sends the brief via stdin,
writes raw logs to <project>/.collaboration/.runs/ and the last answer next to the brief.
The project is the git root of the current directory (else the current directory).

Usage (run from inside the project):
    uv run --no-project python <SKILL>/scripts/run_codex.py <brief.md> <run-name>
        [--resume <THREAD-ID>] [--sandbox read-only|workspace-write] [--effort low|medium|high|max]

Codex binary: $CODEX_EXE, else the Codex desktop install on Windows, else `codex` on PATH.
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

MODEL = "gpt-6-astra"  # fixed: no fallback model
EFFORTS = ("low", "medium", "high", "max")
IS_WINDOWS = sys.platform == "win32"


def _project() -> Path:
    try:
        top = subprocess.run(["git", "rev-parse", "--show-toplevel"], capture_output=True, text=True, check=False)
    except OSError:  # no git on PATH
        return Path.cwd()
    return Path(top.stdout.strip()).resolve() if top.returncode == 0 and top.stdout.strip() else Path.cwd()


def _codex() -> str | None:
    if exe := os.environ.get("CODEX_EXE"):
        return exe
    desktop = Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "OpenAI" / "Codex" / "bin" / "codex.exe"
    if IS_WINDOWS and desktop.is_file():
        return str(desktop)
    return shutil.which("codex")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("brief", type=Path)
    ap.add_argument("name")
    ap.add_argument("--resume", metavar="THREAD_ID")
    ap.add_argument("--sandbox", default="workspace-write", choices=["read-only", "workspace-write"])
    ap.add_argument("--effort", default="high", choices=EFFORTS)
    a = ap.parse_args()

    brief = a.brief.resolve()
    project = _project()
    codex = _codex()
    if codex is None:
        print("codex not found: set CODEX_EXE or put codex on PATH", file=sys.stderr)
        return 2
    runs = project / ".collaboration" / ".runs"
    runs.mkdir(parents=True, exist_ok=True)
    events, stderr, meta = (runs / f"{a.name}.{s}" for s in ("events.jsonl", "stderr.log", "meta.json"))
    result = brief.with_name(f"{a.name}-result.md")
    if events.exists() or meta.exists():
        print(f"run name already used: {a.name}", file=sys.stderr)
        return 2

    args = [codex, "-a", "never", "exec"]
    if IS_WINDOWS:
        args += ["-c", 'windows.sandbox="elevated"']
    args += [
        "--ignore-user-config",
        "-C",
        str(project),
        "--sandbox",
        a.sandbox,
        "-m",
        MODEL,
        "-c",
        f'model_reasoning_effort="{a.effort}"',
        "-c",
        "agents.enabled=false",
        "--skip-git-repo-check",
    ]
    if a.resume:
        args += ["resume", "--json", "-o", str(result), a.resume, "-"]
    else:
        args += ["--json", "-o", str(result), "-"]

    meta.write_text(
        json.dumps(
            {
                "brief": str(brief),
                "model": MODEL,
                "effort": a.effort,
                "sandbox": a.sandbox,
                "resume": a.resume,
                "args": args,
            },
            indent=2,
        ),
        encoding="utf-8",
    )
    with events.open("wb") as out, stderr.open("wb") as err:
        proc = subprocess.Popen(
            args,
            cwd=project,
            stdin=subprocess.PIPE,
            stdout=out,
            stderr=err,
            shell=False,
            creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0),
        )
        proc.communicate(brief.read_bytes())

    threads, completed, errors, models = [], False, [], set()
    for line in events.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            ev = json.loads(line)
        except json.JSONDecodeError:
            continue
        t = ev.get("type", "")
        if t == "thread.started":
            threads.append(ev.get("thread_id"))
        elif t == "turn.completed":
            completed = True
        elif t in ("turn.failed", "error"):
            errors.append(ev)
        if "model" in ev:
            models.add(str(ev["model"]))
    tail = stderr.read_text(encoding="utf-8", errors="replace")[-1500:]
    print(
        json.dumps(
            {
                "exit": proc.returncode,
                "threads": threads,
                "turn_completed": completed,
                "errors": errors,
                "models": sorted(models),
                "result": str(result),
                "result_exists": result.exists(),
                "stderr_tail": tail,
            },
            indent=2,
            ensure_ascii=False,
        )
    )
    return proc.returncode


if __name__ == "__main__":
    sys.exit(main())
