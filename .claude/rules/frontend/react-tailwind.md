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
    "react-dom": "^19.2.0",
    "react-router-dom": "^6.26.1",
    "axios": "^1.7.7",
    "zustand": "^4.5.5",
    "react-plotly.js": "^2.6.0",
    "plotly.js": "^2.35.2"
  },
  "devDependencies": {
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@tailwindcss/vite": "^4.1.0",
    "@vitejs/plugin-react": "^6.0.0",
    "vite": "^8.0.0",
    "@biomejs/biome": "^1.9.0",
    "tailwindcss": "^4.1.0"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],  // TAILWIND FIRST
  server: { port: 3000, proxy: { '/api': 'http://localhost:8000' } },
});
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

  --color-bonsai-red-primary: #c78289;
  --color-bonsai-red-secondary: #d4999f;
  --color-bonsai-red-muted: #a56b71;

  --color-bonsai-blue-primary: #82a4c7;
  --color-bonsai-blue-secondary: #9bb5d4;
  --color-bonsai-blue-muted: #6b8aa5;

  --color-bonsai-yellow-primary: #c7a882;
  --color-bonsai-yellow-secondary: #d4b99b;
  --color-bonsai-yellow-muted: #a5906b;

  --color-bonsai-purple-primary: #9882c7;
  --color-bonsai-purple-secondary: #ad9bd4;
  --color-bonsai-purple-muted: #7e6ba5;
  --color-bonsai-orange-primary: #c7975c;
  --color-bonsai-orange-secondary: #d4ad78;
  --color-bonsai-teal-primary: #5cc7a8;
  --color-bonsai-teal-secondary: #7ed4b8;

  /* Glass tokens */
  --color-bonsai-glass-surface: rgba(21, 25, 34, 0.72);
  --color-bonsai-glass-border: rgba(61, 68, 85, 0.45);

  --font-sans: "Inter Variable", "Inter", system-ui, sans-serif;
  --font-display: "Quicksand", system-ui, sans-serif;
  --font-mono: "JetBrains Mono Variable", "JetBrains Mono", Monaco, monospace;

  --shadow-glow-sm: 0 0 10px rgba(124, 152, 133, 0.3);
  --shadow-glow: 0 0 20px rgba(124, 152, 133, 0.4);
  --shadow-glow-lg: 0 0 30px rgba(124, 152, 133, 0.5);
  --shadow-bonsai: 0 8px 32px rgba(10, 14, 20, 0.3);

  --animate-fade-in: fadeIn 0.5s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
```

## Component Classes

```css
@layer components {
  .btn-primary {
    @apply bg-bonsai-green-primary text-bonsai-text-inverted px-6 py-3 rounded-xl font-medium
      transition-all duration-300 hover:bg-bonsai-green-secondary hover:scale-105
      hover:shadow-lg hover:shadow-bonsai-green-primary/25 active:scale-95
      focus:outline-none focus:ring-2 focus:ring-bonsai-green-primary/50;
  }

  .btn-secondary {
    @apply bg-bonsai-bg-elevated text-bonsai-text-primary border border-bonsai-border-primary
      px-6 py-3 rounded-xl font-medium transition-all duration-300
      hover:bg-bonsai-bg-overlay hover:border-bonsai-border-accent hover:scale-105 active:scale-95;
  }

  .btn-correct {
    @apply bg-bonsai-green-primary text-bonsai-text-inverted px-4 py-2 rounded-lg font-medium
      transition-all duration-300 hover:bg-bonsai-green-secondary hover:scale-105 active:scale-95;
  }

  .btn-wrong {
    @apply bg-bonsai-red-primary text-bonsai-text-inverted px-4 py-2 rounded-lg font-medium
      transition-all duration-300 hover:bg-bonsai-red-secondary hover:scale-105 active:scale-95;
  }

  .card {
    @apply bg-bonsai-bg-primary border border-bonsai-border-subtle rounded-2xl p-6
      transition-all duration-300 hover:border-bonsai-border-primary
      hover:shadow-xl hover:translate-y-[-2px] backdrop-blur-sm;
  }

  .card-elevated {
    @apply bg-bonsai-bg-elevated border border-bonsai-border-primary rounded-2xl p-6
      shadow-xl backdrop-blur-sm transition-all duration-300
      hover:shadow-2xl hover:translate-y-[-3px];
  }

  .input-field {
    @apply bg-bonsai-bg-secondary border border-bonsai-border-primary rounded-xl px-4 py-3
      text-bonsai-text-primary placeholder-bonsai-text-muted
      focus:outline-none focus:border-bonsai-green-primary focus:ring-2 focus:ring-bonsai-green-primary/30
      transition-all duration-300;
  }

  .nav-link {
    @apply text-bonsai-text-secondary hover:text-bonsai-text-primary transition-all duration-300
      px-4 py-2 rounded-lg hover:bg-bonsai-bg-secondary;
  }

  .nav-link-active {
    @apply text-bonsai-green-primary bg-bonsai-bg-secondary shadow-inner
      border-l-2 border-bonsai-green-primary;
  }

  .confidence-badge { @apply px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border; }
  .confidence-high { @apply bg-bonsai-green-primary/20 text-bonsai-green-primary border-bonsai-green-primary/30; }
  .confidence-medium { @apply bg-bonsai-yellow-primary/20 text-bonsai-yellow-primary border-bonsai-yellow-primary/30; }
  .confidence-low { @apply bg-bonsai-red-primary/20 text-bonsai-red-primary border-bonsai-red-primary/30; }

  .metric-card {
    @apply bg-gradient-to-br from-bonsai-bg-elevated to-bonsai-bg-secondary
      border border-bonsai-border-primary rounded-xl p-4 transition-all duration-300
      hover:from-bonsai-bg-overlay hover:border-bonsai-border-accent backdrop-blur-sm;
  }

  /* Glass surfaces — use sparingly on high-value elements */
  .glass-surface {
    @apply backdrop-blur-[16px] border border-bonsai-border-subtle/45;
    background: rgba(21, 25, 34, 0.72);
  }

  .glass-surface-elevated {
    @apply backdrop-blur-[24px] border border-bonsai-border-primary/40;
    background: rgba(35, 41, 51, 0.68);
  }
}
```

## Layout Pattern (Layout.jsx)

```jsx
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen animate-fade-in">
      <nav className="w-64 bg-gradient-to-b from-bonsai-bg-primary to-bonsai-bg-secondary border-r border-bonsai-border-subtle flex flex-col shadow-bonsai">
        <div className="p-6 border-b border-bonsai-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-bonsai-green-primary flex items-center justify-center shadow-glow-sm">🌱</div>
            <h1 className="text-xl font-semibold text-bonsai-text-primary">Your App</h1>
          </div>
        </div>
        <div className="flex-1 p-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={`nav-link flex items-center gap-3 w-full ${isActive(item.path) ? 'nav-link-active' : ''}`}>
                  <span>{item.icon}</span><span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="flex-1 bg-bonsai-bg-deep">
        <div className="max-w-6xl mx-auto p-6 animate-slide-up">{children}</div>
      </main>
    </div>
  );
};
```

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

```javascript
import axios from 'axios';

const api = axios.create({ baseURL: '/api', timeout: 10000 });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const itemsAPI = {
  getAll: () => api.get('/items'),
  getById: (id) => api.get(`/items/${id}`),
  create: (data) => api.post('/items', data),
  update: (id, data) => api.put(`/items/${id}`, data),
  delete: (id) => api.delete(`/items/${id}`),
};
```
