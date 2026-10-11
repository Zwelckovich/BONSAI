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

One theme — the instrument look from `design-system.md`. No light overrides, no toggle,
no `prefers-color-scheme`. Token names are the design-system vocabulary, so Tailwind
utilities read `bg-bg1`, `text-tx3`, `border-bd4`, `bg-ac-cyan`, `bg-lead-dim` …

```css
@import "tailwindcss";

@theme {
  /* surfaces · text · borders */
  --color-bg0: #14181d;
  --color-bg1: #232a33;
  --color-bg2: #2a323c;
  --color-bg3: #333d48;
  --color-bg4: #3d4855;
  --color-tx1: #ffffff;
  --color-tx2: #d6dce1;
  --color-tx3: #aab5be; /* tx3 + tx4 hold >= 4.5:1 on bg0..bg2 */
  --color-tx4: #919da8;
  --color-bd1: #10151a; /* recessed — darker than every surface */
  --color-bd2: #3e4a55;
  --color-bd3: #4e5c69;
  --color-bd4: #66737f; /* input / select borders: 3:1 against the ground */

  /* accents, named by hue — roles live in design-system.md */
  --color-ac-cyan: #009dec;
  --color-ac-cyan2: #33b4f5;
  --color-ac-navy: #003e76;
  --color-ac-green: #2bd98a;
  --color-ac-orange: #ffa23c;
  --color-ac-red: #e8483e;
  --color-ac-sky: #7cc9f2;
  --color-ac-violet: #9b6bd3;
  --color-glow-cyan: rgba(0, 157, 236, 0.18);
  --color-glow-orange: rgba(255, 162, 60, 0.18);
  --color-focus: #66ccff; /* opaque focus line */
  --color-selection: rgba(0, 157, 236, 0.4); /* text selection, selected-item halo */

  /* states */
  --color-lead-dim: #2c5468;
  --color-on-lead: #04121b;
  --color-ok-dim: #1e6f4e;
  --color-row-hover: #1b2128;
  --color-row-selected: #17303f;

  --font-sans: "Inter Variable", system-ui, sans-serif;
  --font-display: "Quicksand", "Inter Variable", system-ui, sans-serif;
  --font-mono: "JetBrains Mono Variable", Consolas, monospace;

  --animate-fade-in: fadeIn 0.3s ease-out;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
}

@layer base {
  :root { color-scheme: dark; }
  body {
    background: var(--color-bg0);
    color: var(--color-tx2);
    font-family: var(--font-sans);
    font-weight: 420;
    font-size: 13px;
    line-height: 1.55;
    letter-spacing: 0.01em;
  }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--color-bd2); border-radius: 4px; }
  ::selection { background: var(--color-selection); }
  [hidden]:not([hidden="until-found"]) { display: none !important; }
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

```tsx
// main.tsx — bundle the type system (the app never depends on installed fonts)
import '@fontsource-variable/inter';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';
import '@fontsource-variable/jetbrains-mono';
```

In `index.html`, add `<meta name="theme-color" content="#14181d">` so browser chrome matches the shell.

Tints derive from tokens, so a palette change never leaves a stale hue:
`background: color-mix(in srgb, var(--color-ac-cyan) 10%, transparent);`

Note: v4 tree-shakes `@theme` tokens not referenced by any used utility or `var()` — if JS
reads a token via `getComputedStyle` (e.g. to theme Plotly), make sure some CSS references
it, or the read returns an empty string.

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
  @apply rounded-[3px] border border-ac-cyan bg-ac-cyan px-4 py-2 font-bold text-on-lead
    transition duration-200 hover:border-ac-cyan2 hover:bg-ac-cyan2
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus
    disabled:opacity-45;
}

@utility btn-secondary {
  @apply rounded-[3px] border border-bd3 bg-bg3 px-4 py-2 text-tx1
    transition duration-200 hover:border-bd4 hover:bg-bg4
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus
    disabled:opacity-45;
}

@utility btn-danger {
  @apply rounded-[3px] border border-ac-red bg-transparent px-4 py-2 text-ac-red
    transition duration-200 hover:bg-ac-red/10 hover:text-tx1
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus;
}

/* active toggle: opaque lead-dim fill, tx1 text (cyan2 on lead-dim is only 3.5:1) */
@utility toggle-on {
  @apply border-ac-cyan/50 bg-lead-dim text-tx1 hover:border-ac-cyan2;
}

@utility card {
  @apply rounded border border-bd2 bg-bg1 p-4;
}

/* status card: 3px top stripe in the status hue — set it with border-t-ac-* */
@utility card-status {
  @apply rounded border border-t-[3px] border-bd2 border-t-bd3 bg-bg1 px-3.5 py-3;
}

@utility input-field {
  @apply rounded-[3px] border border-bd4 bg-bg2 px-3 py-2 text-tx1 placeholder:text-tx4
    transition duration-200 hover:border-tx4
    focus-visible:border-ac-cyan2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus
    disabled:opacity-45;
}

@utility eyebrow {
  @apply text-[11px] uppercase tracking-[0.12em] text-tx3;
}

@utility badge {
  @apply inline-flex items-center gap-1.5 rounded-[3px] border border-bd2 px-2 text-[11px]
    leading-5 uppercase tracking-[0.06em] text-tx3;
}
@utility badge-active { @apply border-ac-cyan bg-lead-dim text-tx1; }
@utility badge-ok { @apply border-ok-dim text-ac-green; }
@utility badge-warn { @apply border-ac-orange text-ac-orange; }

/* selected list/table row: row-selected + 3px cyan2 bar */
@utility row-active {
  @apply bg-row-selected text-tx1 shadow-[inset_3px_0_0_var(--color-ac-cyan2)];
}

@utility kbd {
  @apply rounded-[3px] border border-b-2 border-bd3 px-1 font-mono text-[11px] text-tx2;
}
```

Segmented control (one bordered group, active option):
`bg-lead-dim text-tx1 shadow-[inset_0_-3px_0_var(--color-ac-cyan2)]`, inactive
`text-tx3 hover:text-tx1`. Numbers that line up: `font-mono tabular-nums`.

## Layout Pattern (Layout.jsx)

`NavLink` (not `Link` + manual `isActive`) — it applies `aria-current="page"`
automatically, which screen readers announce; the manual pattern is more code
AND less accessible. The skip link is the first focusable element.

```jsx
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-bg0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
          focus:rounded-[3px] focus:bg-ac-cyan focus:px-4 focus:py-2 focus:font-bold focus:text-on-lead"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="flex w-60 flex-col border-r border-bd1 bg-bg1">
        <div className="flex items-center gap-3 border-b border-bd1 p-5">
          <div className="h-8 w-8 rounded-lg bg-linear-135 from-ac-navy to-ac-cyan" aria-hidden="true" />
          <h1 className="font-display text-xl font-semibold text-tx1">Your App</h1>
        </div>
        <ul className="flex-1 space-y-1 p-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-[3px] px-3 py-2 transition duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus ${
                    isActive ? 'row-active' : 'text-tx2 hover:bg-row-hover hover:text-tx1'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-6xl p-6">{children}</div>
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
        className="m-auto max-w-md rounded-lg border border-bd2 bg-bg1 p-6 text-tx2
          shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop:bg-bg0/70"
      >
        <h2 className="font-display text-lg font-semibold text-tx1">{title}</h2>
        <div className="mt-3">{children}</div>
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

## Plotly Theme (screen look)

```javascript
const SCREEN = {
  paper_bgcolor: '#10141A',
  plot_bgcolor: '#0A0D10',
  colorway: ['#3BE065', '#00B0F0', '#FFA23C', '#FF5252', '#E86BD8', '#FFE14B', '#7CC9F2', '#2BD9C8', '#BFC3C6'],
  font: { family: '"Inter Variable", Inter, system-ui, sans-serif', color: '#D6DCE1', size: 12 },
  title: { font: { family: 'Quicksand, "Inter Variable", Inter, sans-serif', color: '#FFFFFF' } },
  xaxis: { gridcolor: '#262E36', zerolinecolor: '#3A434D', linecolor: '#3A434D', tickfont: { color: '#98A4AE' }, exponentformat: 'SI', automargin: true },
  yaxis: { gridcolor: '#262E36', zerolinecolor: '#3A434D', linecolor: '#3A434D', tickfont: { color: '#98A4AE' }, exponentformat: 'SI', automargin: true },
  hoverlabel: { bgcolor: 'rgba(35,42,51,0.96)', bordercolor: '#3E4A55', font: { family: '"JetBrains Mono Variable", "JetBrains Mono", Consolas, monospace', size: 11, color: '#FFFFFF' } },
  legend: { bgcolor: 'rgba(16,20,26,0.88)', bordercolor: '#3E4A55', font: { color: '#D6DCE1' } },
  modebar: { bgcolor: 'rgba(0,0,0,0)', color: '#98A4AE', activecolor: '#009DEC', orientation: 'v' },
  margin: { t: 14, r: 14, b: 50, l: 62 },
  dragmode: 'pan',
};
// report look (documents/print only): paper/plot #FFFFFF, text #000000, ticks #5A5F63,
// grid #E3E6E8, axis #BFC3C6, title #003E76, hover #003E76, colorway
// ['#009DEC','#EA5B0C','#007973','#A50F14','#003E76','#F8AD3E','#0083A2','#933973','#BFC3C6']
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
