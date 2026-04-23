# BONSAI Design System

BONSAI design extends minimalism to the visual realm — every pixel serves a purpose, every color conveys meaning, every interaction feels intentional.

## Core Design Principles

- **Dark Zen Approach** — Eye-friendly dark themes that reduce fatigue. Interfaces should feel like meditation in motion.
- **Progressive Disclosure** — Start with essential information, reveal complexity only when needed.
- **Purposeful Aesthetics** — No decorative elements, no visual noise — only design that guides attention naturally.
- **Dark-first UI** — When generating interface code, always start with dark theme; light variants are secondary.

## Color Palette

### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `background_deep` | `#0a0e14` | Main application background |
| `background_primary` | `#151922` | Primary containers, cards |
| `background_secondary` | `#1e242e` | Secondary containers, nested |
| `background_elevated` | `#232933` | Elevated surfaces, dropdowns |
| `background_overlay` | `#2a3040` | Modal overlays |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `text_primary` | `#e6e8eb` | Main headings, primary content |
| `text_secondary` | `#b8bcc8` | Body text, secondary info |
| `text_muted` | `#8b92a5` | Labels, captions, metadata |
| `text_disabled` | `#737b8a` | Disabled text, inactive elements |
| `text_inverted` | `#0a0e14` | Text on light backgrounds |

### Border Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `border_subtle` | `#2d3441` | Gentle separations |
| `border_primary` | `#3d4455` | Standard borders |
| `border_accent` | `#4a5568` | Hover states, focus |
| `border_strong` | `#5a6578` | Strong emphasis |

### Accent Colors

**Green (Nature, Growth, Success)**
- Primary: `#7c9885` | Secondary: `#9db4a6` | Tertiary: `#a8c0b1` | Muted: `#677a70` | Glow: `rgba(124, 152, 133, 0.15)`

**Red (Attention, Errors)**
- Primary: `#c78289` | Secondary: `#d4999f` | Muted: `#a56b71`

**Blue (Information, Links)**
- Primary: `#82a4c7` | Secondary: `#9bb5d4` | Muted: `#6b8aa5`

**Yellow (Warning, Warmth)**
- Primary: `#c7a882` | Secondary: `#d4b99b` | Muted: `#a5906b`

**Extended Palette**
- Purple: `#9882c7` | Secondary: `#ad9bd4` | Muted: `#7e6ba5` | Glow: `rgba(152, 130, 199, 0.15)`
- Orange: `#c7975c` | Secondary: `#d4ad78` | Muted: `#a57d4a` | Glow: `rgba(199, 151, 92, 0.15)`
- Teal: `#5cc7a8` | Secondary: `#7ed4b8` | Muted: `#4aa58a` | Glow: `rgba(92, 199, 168, 0.15)`

### Semantic Aliases
- Success: `green_primary` | Warning: `yellow_primary` | Error: `red_primary` | Info: `blue_primary`

### Glass & Gradient Tokens
```css
--color-bonsai-glass-surface: rgba(21, 25, 34, 0.72);
--color-bonsai-glass-surface-light: rgba(30, 36, 46, 0.65);
--color-bonsai-glass-border: rgba(61, 68, 85, 0.45);

--gradient-bonsai-surface: linear-gradient(135deg, rgba(21, 25, 34, 0.9), rgba(30, 36, 46, 0.7));
--gradient-bonsai-accent: linear-gradient(135deg, #677a70, #7c9885);
--gradient-bonsai-glow: radial-gradient(ellipse at center, rgba(124, 152, 133, 0.12), transparent 70%);
```

### Interactive State Tokens
```css
--color-bonsai-focus-ring: rgba(124, 152, 133, 0.5);
--color-bonsai-active-overlay: rgba(124, 152, 133, 0.08);
--color-bonsai-hover-overlay: rgba(255, 255, 255, 0.04);
```

## BONSAI-Light Mode (Washi Paper)

Warm cream backgrounds and darker-tuned accents — a light companion that feels like a Japanese garden scroll, not a clinical dashboard. Use for apps with light/dark toggles, print exports, or light-mode plots.

**Rule:** Token names are identical to the dark palette — swap at runtime via an **explicit opt-in** CSS class or data attribute (`:root.light` / `[data-theme="light"]`). For static targets (matplotlib, terminals), use explicit `_LIGHT` constants. **Dark zen is always the default** — never auto-switch based on OS preference.

### Background Colors (Light)
| Token | Hex | Pairs with dark |
|-------|-----|-----------------|
| `background_deep` | `#f5f2ec` | `#0a0e14` |
| `background_primary` | `#ebe7de` | `#151922` |
| `background_secondary` | `#e2ddd1` | `#1e242e` |
| `background_elevated` | `#d8d2c3` | `#232933` |
| `background_overlay` | `#cec7b5` | `#2a3040` |

### Text Colors (Light)
| Token | Hex | Pairs with dark |
|-------|-----|-----------------|
| `text_primary` | `#1a1f26` | `#e6e8eb` |
| `text_secondary` | `#3a4150` | `#b8bcc8` |
| `text_muted` | `#5e6574` | `#8b92a5` |
| `text_disabled` | `#8a91a0` | `#737b8a` |
| `text_inverted` | `#f5f2ec` | `#0a0e14` |

### Border Colors (Light)
| Token | Hex | Usage |
|-------|-----|-------|
| `border_subtle` | `#dfd9cb` | Gentle separations |
| `border_primary` | `#c9c2b0` | Standard borders |
| `border_accent` | `#b5ad98` | Hover states, focus |
| `border_strong` | `#9e9580` | Strong emphasis |

### Accent Colors (Light)

Rule: `primary` shifts **darker** (contrast on cream); `secondary` = the dark-mode primary; `muted` shifts **lighter** (badge/glow fills).

**Green (Nature, Growth, Success)**
- Primary: `#5a7a63` | Secondary: `#7c9885` | Tertiary: `#9db4a6` | Muted: `#a8c0b1` | Glow: `rgba(90, 122, 99, 0.15)`

**Red (Attention, Errors)**
- Primary: `#a56b71` | Secondary: `#c78289` | Muted: `#d4999f`

**Blue (Information, Links)**
- Primary: `#5a7fa2` | Secondary: `#82a4c7` | Muted: `#9bb5d4`

**Yellow (Warning, Warmth)**
- Primary: `#a5906b` | Secondary: `#c7a882` | Muted: `#d4b99b`

**Extended Palette (Light)**
- Purple: `#7e6ba5` | Secondary: `#9882c7` | Muted: `#ad9bd4` | Glow: `rgba(126, 107, 165, 0.15)`
- Orange: `#a57d4a` | Secondary: `#c7975c` | Muted: `#d4ad78` | Glow: `rgba(165, 125, 74, 0.15)`
- Teal: `#4aa58a` | Secondary: `#5cc7a8` | Muted: `#7ed4b8` | Glow: `rgba(74, 165, 138, 0.15)`

### Glass & Gradient Tokens (Light)
```css
--color-bonsai-glass-surface: rgba(245, 242, 236, 0.72);
--color-bonsai-glass-surface-light: rgba(235, 231, 222, 0.65);
--color-bonsai-glass-border: rgba(185, 175, 152, 0.45);

--gradient-bonsai-surface: linear-gradient(135deg, rgba(245, 242, 236, 0.9), rgba(235, 231, 222, 0.7));
--gradient-bonsai-accent: linear-gradient(135deg, #5a7a63, #7c9885);
--gradient-bonsai-glow: radial-gradient(ellipse at center, rgba(90, 122, 99, 0.10), transparent 70%);
```

### Interactive State Tokens (Light)
```css
--color-bonsai-focus-ring: rgba(90, 122, 99, 0.5);
--color-bonsai-active-overlay: rgba(90, 122, 99, 0.08);
--color-bonsai-hover-overlay: rgba(0, 0, 0, 0.04);
```

### CLI & Terminal Output (Light Terminal)

For light-background terminals or hex-colored log sinks where dark-mode accents wash out:
- Success: `#5a7a63` (green_primary_light) with `✓` symbol
- Error: `#a56b71` (red_primary_light) with `✗` symbol
- Info: `#5a7fa2` (blue_primary_light) with `→` symbol
- Warning: `#a5906b` (yellow_primary_light) with `⚠` symbol
- Muted: `#5e6574` (text_muted_light) for timestamps, metadata

### Theme Swap Pattern (Canonical)

```css
/* Dark (default) — defined in @theme */
:root {
  color-scheme: dark;
}

/* Light — override every token under an explicit class or data attribute */
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
  --color-bonsai-text-muted: #5e6574;
  --color-bonsai-text-disabled: #8a91a0;
  --color-bonsai-text-inverted: #f5f2ec;

  --color-bonsai-border-subtle: #dfd9cb;
  --color-bonsai-border-primary: #c9c2b0;
  --color-bonsai-border-accent: #b5ad98;
  --color-bonsai-border-strong: #9e9580;

  --color-bonsai-green-primary: #5a7a63;
  --color-bonsai-green-secondary: #7c9885;
  --color-bonsai-green-tertiary: #9db4a6;
  --color-bonsai-green-muted: #a8c0b1;
  --color-bonsai-green-glow: rgba(90, 122, 99, 0.15);

  --color-bonsai-red-primary: #a56b71;
  --color-bonsai-red-secondary: #c78289;
  --color-bonsai-red-muted: #d4999f;

  --color-bonsai-blue-primary: #5a7fa2;
  --color-bonsai-blue-secondary: #82a4c7;
  --color-bonsai-blue-muted: #9bb5d4;

  --color-bonsai-yellow-primary: #a5906b;
  --color-bonsai-yellow-secondary: #c7a882;
  --color-bonsai-yellow-muted: #d4b99b;

  --color-bonsai-purple-primary: #7e6ba5;
  --color-bonsai-purple-secondary: #9882c7;
  --color-bonsai-purple-muted: #ad9bd4;

  --color-bonsai-orange-primary: #a57d4a;
  --color-bonsai-orange-secondary: #c7975c;
  --color-bonsai-orange-muted: #d4ad78;

  --color-bonsai-teal-primary: #4aa58a;
  --color-bonsai-teal-secondary: #5cc7a8;
  --color-bonsai-teal-muted: #7ed4b8;

  --color-bonsai-glass-surface: rgba(245, 242, 236, 0.72);
  --color-bonsai-glass-surface-light: rgba(235, 231, 222, 0.65);
  --color-bonsai-glass-border: rgba(185, 175, 152, 0.45);

  --color-bonsai-focus-ring: rgba(90, 122, 99, 0.5);
  --color-bonsai-active-overlay: rgba(90, 122, 99, 0.08);
  --color-bonsai-hover-overlay: rgba(0, 0, 0, 0.04);
}
```

**No `prefers-color-scheme` fallback.** The BONSAI default is dark zen, always — light mode must be an explicit, user-initiated choice (toggle button, config flag, stylesheet class).

### Light-Mode UI Principles

- **Paper warmth over clinical white** — Cream reduces glare; pure `#ffffff` feels harsh and un-zen.
- **Darker accent primaries** — Light-bg accents need roughly 30% more darkness than their dark-mode counterparts to maintain WCAG AA contrast.
- **Soft shadows, not glows** — Dark-mode glows (`rgba(green, 0.4)`) vanish on cream. Use `rgba(0, 0, 0, 0.06–0.12)` drop shadows.
- **Borders carry more weight** — Without luminance contrast to lean on, light UI needs visible borders to separate regions.

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Body/UI | Inter Variable | 420 (body), 520 (emphasis), 600 (heading) | All body text, UI elements |
| Display | Quicksand | 400-500 | Headings, logos, branding |
| Code | JetBrains Mono Variable | 450 | Code blocks, terminal |

```css
--font-sans: "Inter Variable", "Inter", system-ui, sans-serif;
--font-display: "Quicksand", system-ui, sans-serif;
--font-mono: "JetBrains Mono Variable", "JetBrains Mono", Monaco, monospace;
```

Line height: 1.6-1.7 for comfortable reading. Letter spacing: 0.02em-0.1em for breathing room.

## Spacing System

- **Base unit**: 8px
- **Common increments**: 8, 16, 24, 32, 48, 64px
- **Container padding**: 2rem (32px) minimum
- **Section gaps**: 3rem (48px) for clear separation

## Layout Principles

- **Border radius**: 6-16px for modern softness
- **Card elevation**: Subtle 1px borders, minimal shadows
- **Interactive states**: `transform: translateY(-1px)` for lift effect
- **Focus indicators**: `green_primary` with soft glow
- **Transitions**: 0.3s ease — organic, not mechanical

## Dark Zen UI Principles

- **Color temperature**: Warm grays and sage greens create calm interfaces
- **Breathing space**: Generous whitespace prevents visual overwhelm
- **Gentle transitions**: Subtle animations feel organic
- **Purposeful glow**: Shadows and glows guide attention naturally
- **Zen garden separation**: Borders appear through light, not heavy lines
- **Natural grouping**: Related functions flow together like garden paths

## CLI & Terminal Output

Use BONSAI colors for semantic meaning:
- Success: `#7c9885` (green_primary) with `✓` symbol
- Error: `#c78289` (red_primary) with `✗` symbol
- Info: `#82a4c7` (blue_primary) with `→` symbol
- Warning: `#c7a882` (yellow_primary) with `⚠` symbol
- Muted: `#8b92a5` (text_muted) for timestamps, metadata
