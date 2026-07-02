---
paths:
  - "src/**/*.{tsx,jsx,ts,js,css}"
  - "frontend/**/*.{tsx,jsx,ts,js,css}"
  - "vite.config.*"
  - "package.json"
---

# BONSAI React + Tailwind CSS Professional WebUI

## Project Setup

### package.json
```json
{
  "name": "bonsai-app",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "biome check .",
    "lint:fix": "biome check --write ."
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@tailwindcss/vite": "^4.3.0",
    "@vitejs/plugin-react": "^6.0.0",
    "babel-plugin-react-compiler": "^1.0.0",
    "vite": "^8.0.0",
    "@biomejs/biome": "^2.4.0",
    "tailwindcss": "^4.3.0"
  }
}
```

### Evidence-Triggered Dependencies

The scaffold ships core-only. Add each tool the moment its trigger fires — not before:

| Trigger (evidence) | Add |
|--------------------|-----|
| Second page/route appears | `react-router-dom` ^7 |
| Client state shared across unrelated components | `zustand` ^5 |
| Server state (caching, refetching, mutations) | `@tanstack/react-query` ^5 |
| First chart | `plotly.js` + `react-plotly.js` |

Data fetching uses native `fetch` (see API Service Pattern) — no axios.

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),  // TAILWIND FIRST
    react({ babel: { plugins: ['babel-plugin-react-compiler'] } }),
  ],
  // Pin IPv4: Vite's default host 'localhost' resolves to IPv6 ::1 on Windows,
  // so a browser / dev runner / proxy hitting 127.0.0.1 gets connection-refused
  // even though Vite logs "ready". Keep host AND proxy target on 127.0.0.1.
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: { '/api': 'http://127.0.0.1:8000' },
  },
});
// React Compiler is default-on: never hand-write useMemo/useCallback/memo.
```

## BONSAI @theme Block (src/index.css)

```css
@import "tailwindcss";

@theme {
  --color-bonsai-bg-deep: #0a0e14;
  --color-bonsai-bg-primary: #151922;
  --color-bonsai-bg-secondary: #1e242e;
  --color-bonsai-bg-elevated: #232933;
  --color-bonsai-bg-overlay: #2a3040;

  --color-bonsai-text-primary: #e6e8eb;
  --color-bonsai-text-secondary: #b8bcc8;
  --color-bonsai-text-muted: #8b92a5;
  --color-bonsai-text-disabled: #737b8a;
  --color-bonsai-text-inverted: #0a0e14;

  --color-bonsai-border-subtle: #2d3441;
  --color-bonsai-border-primary: #3d4455;
  --color-bonsai-border-accent: #4a5568;
  --color-bonsai-border-strong: #5a6578;

  --color-bonsai-green-primary: #7c9885;
  --color-bonsai-green-secondary: #9db4a6;
  --color-bonsai-green-tertiary: #a8c0b1;
  --color-bonsai-green-muted: #677a70;
  --color-bonsai-green-glow: rgba(124, 152, 133, 0.15);
  /* hover tokens: dark lightens (= secondary), light DARKENS — keeps AA on hovered button text */
  --color-bonsai-green-hover: #9db4a6;

  --color-bonsai-red-primary: #c78289;
  --color-bonsai-red-secondary: #d4999f;
  --color-bonsai-red-muted: #a56b71;
  --color-bonsai-red-hover: #d4999f;

  --color-bonsai-blue-primary: #82a4c7;
  --color-bonsai-blue-secondary: #9bb5d4;
  --color-bonsai-blue-muted: #6b8aa5;

  --color-bonsai-yellow-primary: #c7a882;
  --color-bonsai-yellow-secondary: #d4b99b;
  --color-bonsai-yellow-muted: #a5906b;

  --color-bonsai-purple-primary: #9882c7;
  --color-bonsai-purple-secondary: #ad9bd4;
  --color-bonsai-purple-muted: #7e6ba5;
  --color-bonsai-purple-glow: rgba(152, 130, 199, 0.15);

  --color-bonsai-orange-primary: #c7975c;
  --color-bonsai-orange-secondary: #d4ad78;
  --color-bonsai-orange-muted: #a57d4a;
  --color-bonsai-orange-glow: rgba(199, 151, 92, 0.15);

  --color-bonsai-teal-primary: #5cc7a8;
  --color-bonsai-teal-secondary: #7ed4b8;
  --color-bonsai-teal-muted: #4aa58a;
  --color-bonsai-teal-glow: rgba(92, 199, 168, 0.15);

  /* Glass tokens */
  --color-bonsai-glass-surface: rgba(21, 25, 34, 0.72);
  --color-bonsai-glass-surface-light: rgba(30, 36, 46, 0.65);
  --color-bonsai-glass-border: rgba(61, 68, 85, 0.45);

  /* Interactive state tokens */
  --color-bonsai-focus-ring: rgba(124, 152, 133, 0.5);
  --color-bonsai-active-overlay: rgba(124, 152, 133, 0.08);
  --color-bonsai-hover-overlay: rgba(255, 255, 255, 0.04);

  --font-sans: "Inter Variable", "Inter", system-ui, sans-serif;
  --font-display: "Quicksand", system-ui, sans-serif;
  --font-mono: "JetBrains Mono Variable", "JetBrains Mono", Monaco, monospace;

  /* Shadow COLOR lives in plain custom properties (defined in @layer base below):
     v4 inlines --shadow-* token values into utilities, so overriding --shadow-*
     under :root.light silently does nothing — the var() indirection is what
     makes light-mode shadows actually re-theme. */
  --shadow-glow-sm: 0 0 10px var(--bonsai-shadow-glow-sm);
  --shadow-glow: 0 0 20px var(--bonsai-shadow-glow);
  --shadow-glow-lg: 0 0 30px var(--bonsai-shadow-glow-lg);
  --shadow-bonsai: 0 8px 32px var(--bonsai-shadow-ambient);

  --animate-fade-in: fadeIn 0.5s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;

  /* @keyframes INSIDE @theme: emitted only when the matching --animate-* token is used */
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
}

@layer base {
  :root {
    color-scheme: dark; /* dark scrollbars, form controls, browser UI — UA default is light */
    --bonsai-shadow-glow-sm: rgba(124, 152, 133, 0.3);
    --bonsai-shadow-glow: rgba(124, 152, 133, 0.4);
    --bonsai-shadow-glow-lg: rgba(124, 152, 133, 0.5);
    --bonsai-shadow-ambient: rgba(10, 14, 20, 0.3);
  }
}

/* Accessibility: respect the user's explicit reduced-motion choice — always include */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In `index.html`, add `<meta name="theme-color" content="#0a0e14">` so browser chrome matches the dark shell.

## BONSAI-Light Mode Overrides (src/index.css)

Append AFTER the `@theme` block. Dark is always the default; light activates only via an explicit `:root.light` or `[data-theme="light"]` opt-in (e.g. a user toggle). No OS-preference auto-switching.

```css
@layer base {
  :root.light,
  :root[data-theme="light"] {
    color-scheme: light;

    --color-bonsai-bg-deep: #f5f2ec;
    --color-bonsai-bg-primary: #ebe7de;
    --color-bonsai-bg-secondary: #e2ddd1;
    --color-bonsai-bg-elevated: #d8d2c3;
    --color-bonsai-bg-overlay: #cec7b5;

    --color-bonsai-text-primary: #1a1f26;
    --color-bonsai-text-secondary: #3a4150;
    --color-bonsai-text-muted: #535a67;
    --color-bonsai-text-disabled: #8a91a0;
    --color-bonsai-text-inverted: #f5f2ec;

    --color-bonsai-border-subtle: #dfd9cb;
    --color-bonsai-border-primary: #c9c2b0;
    --color-bonsai-border-accent: #b5ad98;
    --color-bonsai-border-strong: #877d67;

    /* Accent primaries computed to >=5.15:1 on bg_primary (#ebe7de) — AA as
       normal text, AA for button labels, and >=4.5:1 inside /10 badge tints */
    --color-bonsai-green-primary: #4b6552;
    --color-bonsai-green-secondary: #7c9885;
    --color-bonsai-green-tertiary: #9db4a6;
    --color-bonsai-green-muted: #a8c0b1;
    --color-bonsai-green-glow: rgba(75, 101, 82, 0.15);
    --color-bonsai-green-hover: #415747;

    --color-bonsai-red-primary: #845156;
    --color-bonsai-red-secondary: #c78289;
    --color-bonsai-red-muted: #d4999f;
    --color-bonsai-red-hover: #71464a;

    --color-bonsai-blue-primary: #46627d;
    --color-bonsai-blue-secondary: #82a4c7;
    --color-bonsai-blue-muted: #9bb5d4;

    --color-bonsai-yellow-primary: #6d5d42;
    --color-bonsai-yellow-secondary: #c7a882;
    --color-bonsai-yellow-muted: #d4b99b;

    --color-bonsai-purple-primary: #68568d;
    --color-bonsai-purple-secondary: #9882c7;
    --color-bonsai-purple-muted: #ad9bd4;
    --color-bonsai-purple-glow: rgba(104, 86, 141, 0.15);

    --color-bonsai-orange-primary: #775a36;
    --color-bonsai-orange-secondary: #c7975c;
    --color-bonsai-orange-muted: #d4ad78;
    --color-bonsai-orange-glow: rgba(119, 90, 54, 0.15);

    --color-bonsai-teal-primary: #2f6958;
    --color-bonsai-teal-secondary: #5cc7a8;
    --color-bonsai-teal-muted: #7ed4b8;
    --color-bonsai-teal-glow: rgba(47, 105, 88, 0.15);

    --color-bonsai-glass-surface: rgba(245, 242, 236, 0.72);
    --color-bonsai-glass-surface-light: rgba(235, 231, 222, 0.65);
    --color-bonsai-glass-border: rgba(185, 175, 152, 0.45);

    --color-bonsai-focus-ring: rgba(75, 101, 82, 0.5);
    --color-bonsai-active-overlay: rgba(75, 101, 82, 0.08);
    --color-bonsai-hover-overlay: rgba(0, 0, 0, 0.04);

    --bonsai-shadow-glow-sm: rgba(75, 101, 82, 0.20);
    --bonsai-shadow-glow: rgba(75, 101, 82, 0.25);
    --bonsai-shadow-glow-lg: rgba(75, 101, 82, 0.30);
    --bonsai-shadow-ambient: rgba(30, 30, 30, 0.08);
  }

}
```

Both glass surfaces re-theme via their tokens — no per-class light overrides
(a `:root.light .class` override inside `@layer base` would silently LOSE to
the utility layer: Tailwind orders `theme, base, components, utilities`).

Note: v4 tree-shakes `@theme` tokens not referenced by any used utility or
`var()` — if JS reads a token via `getComputedStyle` (e.g. to theme Plotly),
make sure some CSS references it, or the read returns an empty string.

Component classes (`btn-primary`, `card`, `input-field`, …) follow the theme automatically — they reference `bonsai-*` tokens, so no duplication is needed.

## Theme Toggle (zustand)

```typescript
import { create } from 'zustand';

type Theme = 'dark' | 'light';

// Apply the stored preference at module init — without this, a returning
// light-mode user gets the dark UI on every reload until they toggle twice.
// (To also avoid the one-frame dark flash before the bundle runs, inline
// these two lines as a <script> in the index.html <head>.)
const stored = (localStorage.getItem('bonsai-theme') as Theme | null) ?? 'dark';
document.documentElement.classList.toggle('light', stored === 'light');

export const useThemeStore = create<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>((set) => ({
  theme: stored,
  setTheme: (t) => {
    localStorage.setItem('bonsai-theme', t);
    document.documentElement.classList.toggle('light', t === 'light');
    set({ theme: t });
  },
}));
```

## Component Classes

Define reusable classes with `@utility`, NOT `@layer components`: v4 treats author
`@layer` blocks as plain CSS — every class ships in every build (no tree-shaking)
and variants like `hover:btn-primary` or `md:card` silently compile to nothing.
`@utility` classes are tree-shaken when unused and compose with variants.

Focus styles use `focus-visible:` + `outline-hidden` (NOT `outline-none`): v4's
`outline-none` genuinely removes the outline, which kills focus indication in
forced-colors/High-Contrast mode where box-shadow rings don't render;
`outline-hidden` keeps a transparent outline that those modes make visible.

```css
@utility btn-primary {
  @apply bg-bonsai-green-primary text-bonsai-text-inverted px-6 py-3 rounded-xl font-medium
    transition duration-300 hover:bg-bonsai-green-hover hover:-translate-y-px
    hover:shadow-lg hover:shadow-bonsai-green-primary/25 active:translate-y-0
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bonsai-green-primary/50;
}

@utility btn-secondary {
  @apply bg-bonsai-bg-elevated text-bonsai-text-primary border border-bonsai-border-primary
    px-6 py-3 rounded-xl font-medium transition duration-300
    hover:bg-bonsai-bg-overlay hover:border-bonsai-border-accent hover:-translate-y-px active:translate-y-0
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bonsai-green-primary/50;
}

@utility btn-correct {
  @apply bg-bonsai-green-primary text-bonsai-text-inverted px-4 py-2 rounded-lg font-medium
    transition duration-300 hover:bg-bonsai-green-hover hover:-translate-y-px active:translate-y-0
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bonsai-green-primary/50;
}

@utility btn-wrong {
  @apply bg-bonsai-red-primary text-bonsai-text-inverted px-4 py-2 rounded-lg font-medium
    transition duration-300 hover:bg-bonsai-red-hover hover:-translate-y-px active:translate-y-0
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bonsai-red-primary/50;
}

@utility card {
  @apply bg-bonsai-bg-primary border border-bonsai-border-subtle rounded-2xl p-6
    transition duration-300 hover:border-bonsai-border-primary
    hover:shadow-xl hover:translate-y-[-2px] backdrop-blur-sm;
}

@utility card-elevated {
  @apply bg-bonsai-bg-elevated border border-bonsai-border-primary rounded-2xl p-6
    shadow-xl backdrop-blur-sm transition duration-300
    hover:shadow-2xl hover:translate-y-[-3px];
}

@utility input-field {
  @apply bg-bonsai-bg-secondary border border-bonsai-border-strong rounded-xl px-4 py-3
    text-bonsai-text-primary placeholder-bonsai-text-muted
    focus-visible:outline-hidden focus-visible:border-bonsai-green-primary
    focus-visible:ring-2 focus-visible:ring-bonsai-green-primary/30
    transition duration-300;
}

@utility nav-link {
  @apply text-bonsai-text-secondary hover:text-bonsai-text-primary transition duration-300
    px-4 py-2 rounded-lg hover:bg-bonsai-bg-secondary
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bonsai-green-primary/50;
}

@utility nav-link-active {
  @apply text-bonsai-green-primary bg-bonsai-bg-secondary shadow-inner
    border-l-2 border-bonsai-green-primary;
}

/* /10 tints, not /20 — at /20 the lightened pill background drops 12px badge
   text below 4.5:1 (computed: green 4.16, red 4.31); at /10 all pass */
@utility confidence-badge { @apply px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border; }
@utility confidence-high { @apply bg-bonsai-green-primary/10 text-bonsai-green-primary border-bonsai-green-primary/30; }
@utility confidence-medium { @apply bg-bonsai-yellow-primary/10 text-bonsai-yellow-primary border-bonsai-yellow-primary/30; }
@utility confidence-low { @apply bg-bonsai-red-primary/10 text-bonsai-red-primary border-bonsai-red-primary/30; }

@utility metric-card {
  @apply bg-gradient-to-br from-bonsai-bg-elevated to-bonsai-bg-secondary
    border border-bonsai-border-primary rounded-xl p-4 transition duration-300
    hover:from-bonsai-bg-overlay hover:border-bonsai-border-accent backdrop-blur-sm;
}

/* Glass surfaces — use sparingly on high-value elements */
@utility glass-surface {
  @apply backdrop-blur-[16px] border border-bonsai-border-subtle/45;
  background: var(--color-bonsai-glass-surface); /* re-themes via the token */
}

@utility glass-surface-elevated {
  @apply backdrop-blur-[24px] border border-bonsai-border-primary/40;
  background: var(--color-bonsai-glass-surface-light); /* re-themes via the token */
}
```

## Layout Pattern (Layout.jsx)

`NavLink` (not `Link` + manual `isActive`) — it applies `aria-current="page"`
automatically, which screen readers announce; the manual pattern is more code
AND less accessible. Emoji icons get `aria-hidden` (screen readers otherwise
read their Unicode names). The skip link is the first focusable element.

```jsx
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="flex min-h-screen animate-fade-in">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:rounded-lg focus:bg-bonsai-bg-elevated focus:text-bonsai-text-primary"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="w-64 bg-gradient-to-b from-bonsai-bg-primary to-bonsai-bg-secondary border-r border-bonsai-border-subtle flex flex-col shadow-bonsai">
        <div className="p-6 border-b border-bonsai-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-bonsai-green-primary flex items-center justify-center shadow-glow-sm" aria-hidden="true">🌱</div>
            <h1 className="text-xl font-semibold text-bonsai-text-primary">Your App</h1>
          </div>
        </div>
        <div className="flex-1 p-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link flex items-center gap-3 w-full ${isActive ? 'nav-link-active' : ''}`}
                >
                  <span aria-hidden="true">{item.icon}</span><span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main id="main" className="flex-1 bg-bonsai-bg-deep">
        <div className="max-w-6xl mx-auto p-6 animate-slide-up">{children}</div>
      </main>
    </div>
  );
};
```

## Modal Pattern (native dialog)

Native `<dialog>` gives focus trap, Escape handling, top-layer rendering, and
inert background for free — never hand-roll a `div` modal with z-index.

```jsx
import { useRef } from 'react';

const ConfirmDialog = ({ title, children, onConfirm }) => {
  const ref = useRef(null);
  return (
    <>
      <button type="button" className="btn-secondary" onClick={() => ref.current.showModal()}>
        Open
      </button>
      <dialog
        ref={ref}
        aria-label={title}
        className="m-auto max-w-md rounded-2xl border border-bonsai-border-primary bg-bonsai-bg-elevated p-6
          text-bonsai-text-primary backdrop:bg-bonsai-bg-overlay/60 backdrop:backdrop-blur-sm"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-3 text-bonsai-text-secondary">{children}</div>
        <div className="mt-6 flex justify-end gap-3">
          <button type="button" className="btn-secondary" onClick={() => ref.current.close()}>Cancel</button>
          <button type="button" className="btn-primary" onClick={() => { onConfirm(); ref.current.close(); }}>Confirm</button>
        </div>
      </dialog>
    </>
  );
};
```

For non-modal overlays (menus, tooltips), prefer the native `popover` attribute
over positioned divs — light dismiss and top-layer come free.

## Biome Patterns

- Always use `<button>` for clickable elements, never `<div role="button">` (biome a11y/useSemanticElements)
- For fixed-size lists in `.map()`, use a constant key array instead of index: `const KEYS = ['a', 'b', 'c']; items.map((item, i) => <div key={KEYS[i]}>)`
- Biome suppression: `// biome-ignore lint/rule: reason` must be on the line BEFORE the violation, not the same line

## Plotly BONSAI Theme

```javascript
const BONSAI_PLOTLY_THEME = {
  paper_bgcolor: '#0a0e14',
  plot_bgcolor: '#151922',
  font: { family: 'Inter, sans-serif', color: '#e6e8eb', size: 12 },
  colorway: ['#7c9885', '#82a4c7', '#c7a882', '#c78289', '#9882c7'],
  xaxis: { gridcolor: '#4a5568', linecolor: '#4a5568', color: '#b8bcc8' },
  yaxis: { gridcolor: '#4a5568', linecolor: '#4a5568', color: '#b8bcc8' },
  margin: { t: 40, r: 20, b: 40, l: 60 },
};
```

## Zustand Store Pattern

```javascript
import { create } from 'zustand';

const useAppStore = create((set) => ({
  items: [], loading: false, error: null,
  setItems: (items) => set({ items }),
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  updateItem: (id, updates) => set((s) => ({
    items: s.items.map((i) => (i.id === id ? { ...i, ...updates } : i)),
  })),
  removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
}));
```

## API Service Pattern

Native `fetch` — no axios. One small wrapper covers auth headers, timeout, and 401 handling:

```javascript
async function request(path, options = {}) {
  const token = localStorage.getItem('authToken');
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    signal: options.signal ?? AbortSignal.timeout(10000),
  });
  if (res.status === 401) {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.status === 204 ? null : res.json();
}

export const itemsAPI = {
  getAll: () => request('/items'),
  getById: (id) => request(`/items/${id}`),
  create: (data) => request('/items', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => request(`/items/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => request(`/items/${id}`, { method: 'DELETE' }),
};
```

When server state grows real (caching, refetching), wrap these calls with `@tanstack/react-query` — the trigger table above applies.
