# BONSAI Project Structure Rules

## Structure Decision Hierarchy

When determining project structure, follow this priority:

1. **User's Existing Structure** (if user wrote >60% of code)
   - Detect and document in CLAUDE.local.md
   - Preserve their organization patterns
   - Make minimal changes for compliance

2. **concept.md Specifications** (if defined)
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
