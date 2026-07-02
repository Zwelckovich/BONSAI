# BONSAI Project Structure Rules

## Structure Decision Hierarchy

When determining project structure, follow this priority:

1. **User's Existing Structure** (if user wrote >60% of code)
   - Detect and document in CLAUDE.local.md
   - Preserve their organization patterns
   - Make minimal changes for compliance

2. **CONCEPT.md Specifications** (if defined)
   - Follow explicit structure guidelines
   - Overrides BONSAI defaults

3. **BONSAI Minimal Structure** (default)
   - Start with single files
   - Split only when complexity demands
   - Feature-based, not type-based organization

## Structure Persistence

Once a structure decision is recorded in CLAUDE.local.md, it MUST NOT change unless:
- No structure decision exists yet
- User explicitly requests a change

## Progressive Evolution Patterns

### Single Technology Projects

```
project/
├── .venv/              # Python venv at root
├── main.py             # Or index.js
└── README.md
```

**Flat root + tests/ caveat**: When Python modules live at root and tests live in `tests/`, pytest cannot import root modules by default. Add to pyproject.toml:
```toml
[tool.pytest.ini_options]
pythonpath = ["."]
```
Also omit `[tool.ty.src] include` — ty auto-discovers `.py` files without it. Only set `include = ["src"]` for src/ layouts.

### Full-Stack Unified Dev Runner (Python + React/Vite) — MANDATORY

Any project with a Python backend **and** a React/Vite frontend MUST ship a single root `dev.py` that starts the whole stack with one command: `uv run python dev.py`. No separate "start the backend" / "start the frontend" dance. `/bonsai-init` generates it for new full-stack projects; `/bonsai-check` flags its absence.

Requirements:
- `subprocess` only (stdlib) — no new deps.
- Free the required ports first (cross-platform: `lsof` on Linux/macOS, `netstat` + `taskkill` on Windows) so a stale run doesn't block the bind.
- Spawn `uv run python -m uvicorn <module>:app` — use `python -m uvicorn`, NOT the `uvicorn` console-script (uv's exe trampoline can fail under some shells / when spawned from a subprocess).
- Pin Vite to IPv4: `server.host: "127.0.0.1"` in `vite.config.ts` (Vite defaults `localhost`→`::1` on Windows; without the pin the readiness probe and `127.0.0.1:<port>` are connection-refused — see `tools.md` "Windows (Git Bash) Caveats").
- Open the browser once Vite accepts connections (poll the port).
- Handle Ctrl+C: terminate the whole child tree (`taskkill /T /F` on Windows, `terminate()` elsewhere).

Canonical template (adjust `<module>` to the detected entry, e.g. `app` or `main`):

```python
"""Full-stack dev runner — start the backend and the Vite dev server together.

One command for full-stack development (BONSAI full-stack rule). Frees the
required ports, spawns uvicorn (FastAPI backend) and ``bun run dev`` (Vite
frontend), opens the browser to the Vite URL, and terminates both children on
Ctrl+C. Windows is the target: ports are freed with netstat + taskkill and the
backend uses ``python -m uvicorn`` (never the uvicorn console-script / fastapi dev).

Run with: uv run python dev.py
"""

from __future__ import annotations

import socket
import subprocess
import sys
import threading
import time
import webbrowser
from pathlib import Path

HOST = "127.0.0.1"
BACKEND_PORT = 8000
FRONTEND_PORT = 5173
FRONTEND_DIR = Path(__file__).parent / "frontend"
FRONTEND_URL = f"http://{HOST}:{FRONTEND_PORT}"
# Adjust to the project's FastAPI entry: "<module>:app" (e.g. "app:app" or "main:app").
BACKEND_TARGET = "app:app"
IS_WINDOWS = sys.platform == "win32"


def _free_port(port: int) -> None:
    """Kill whatever is listening on ``port`` so the dev servers can bind it."""
    if not IS_WINDOWS:
        subprocess.run(
            ["bash", "-c", f"lsof -ti tcp:{port} | xargs -r kill -9"],
            check=False,
            capture_output=True,
        )
        return
    netstat = subprocess.run(["netstat", "-ano", "-p", "tcp"], capture_output=True, text=True, check=False).stdout
    pids = {
        parts[4]
        for line in netstat.splitlines()
        if len(parts := line.split()) >= 5 and parts[1].endswith(f":{port}") and parts[3] == "LISTENING"
    }
    for pid in pids:
        subprocess.run(["taskkill", "/PID", pid, "/F"], check=False, capture_output=True)


def _spawn(cmd: list[str], cwd: Path | None = None) -> subprocess.Popen:
    """Start a child process in its own group so the whole tree can be killed."""
    flags = subprocess.CREATE_NEW_PROCESS_GROUP if IS_WINDOWS else 0
    return subprocess.Popen(cmd, cwd=cwd, creationflags=flags)


def _terminate(proc: subprocess.Popen) -> None:
    """Terminate a child and its descendants (Vite/uvicorn spawn workers)."""
    if proc.poll() is not None:
        return
    if IS_WINDOWS:
        subprocess.run(["taskkill", "/PID", str(proc.pid), "/T", "/F"], check=False, capture_output=True)
    else:
        proc.terminate()


def _open_when_ready() -> None:
    """Open the browser once the Vite server accepts connections (poll ~20s)."""
    for _ in range(100):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
            if probe.connect_ex((HOST, FRONTEND_PORT)) == 0:
                break
        time.sleep(0.2)
    webbrowser.open(FRONTEND_URL)


def main() -> None:
    for port in (BACKEND_PORT, FRONTEND_PORT):
        _free_port(port)

    backend = _spawn(
        ["uv", "run", "python", "-m", "uvicorn", BACKEND_TARGET, "--host", HOST, "--port", str(BACKEND_PORT)]
    )
    frontend = _spawn(["bun", "run", "dev"], cwd=FRONTEND_DIR)

    threading.Thread(target=_open_when_ready, daemon=True).start()
    print(f"dev: backend :{BACKEND_PORT}, frontend {FRONTEND_URL} — Ctrl+C to stop")

    try:
        while backend.poll() is None and frontend.poll() is None:
            time.sleep(0.3)
    except KeyboardInterrupt:
        pass
    finally:
        _terminate(frontend)
        _terminate(backend)


if __name__ == "__main__":
    main()
```

### Full-Stack Progressive Evolution

**Stage 1: Both in Root (Start here)**
```
project/
├── backend.py          # Backend code
├── frontend.html       # Frontend code
├── pyproject.toml
├── package.json
└── README.md
```

**Stage 2: Split When Needed (Only if conflicts)**
```
project/
├── backend/
│   ├── .venv/
│   ├── main.py
│   └── pyproject.toml
├── frontend/
│   ├── node_modules/
│   ├── index.html
│   └── package.json
└── README.md
```

### Progressive Backend (Python/FastAPI)

```
# Stage 1: Single file
main.py                 # Everything here

# Stage 2: Minimal split (>200 lines)
backend/
├── main.py            # Entry point & routes
└── models.py          # Data models

# Stage 3: Feature split (>500 lines)
backend/
├── main.py            # Entry point
├── api.py             # Routes/endpoints
├── models.py          # Data models
└── auth.py            # Only if auth complex
```

### Progressive Frontend (React)

```
# Stage 1: Minimal split
frontend/
├── index.html
├── App.jsx            # Main component
└── api.js             # API calls

# Stage 2: Component split (>3 components)
frontend/
├── index.html
├── App.jsx
├── components/
│   ├── Auth.jsx
│   └── Dashboard.jsx
└── api.js
```

## When to Create Folders

Only create a folder when:
- You have **3+ files** of similar purpose
- Files are clearly related by feature
- It improves code discovery
- It reduces naming conflicts

Examples:
- `auth_login.py`, `auth_register.py`, `auth_reset.py` -> `auth/`
- `UserModel.js`, `PostModel.js`, `CommentModel.js` -> `models/`

## Environment Placement

- Start with environments at project root
- Only move into subdirectories when actual conflicts occur
- Never create empty directory structures preemptively
- Document environment locations in CLAUDE.local.md

## Anti-Patterns

**Never do this:**
```
src/
├── controllers/
├── models/
├── views/
├── utils/
├── helpers/
├── middleware/
├── services/
└── repositories/
```
Why bad: Empty folders, single-file folders, over-organization.

**BONSAI approach:**
```
api.py          # All endpoints here until it's too big
models.py       # All models here until it's too big
```

## Framework-Specific Minimal Structures

### FastAPI
```python
# main.py - Everything in one file until >10 endpoints
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
```

### Express
```javascript
// server.js - Everything in one file until >200 lines
const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ message: 'Hello World' }));
app.listen(3000);
```
