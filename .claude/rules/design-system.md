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
