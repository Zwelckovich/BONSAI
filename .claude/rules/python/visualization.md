---
paths:
  - "**/*.py"
---

# BONSAI Python Visualization & Tool Patterns

Values come from `design-system.md` / `design-tokens.json`. Two plot looks: **`screen`**
(default — the black instrument screen) and **`report`** (white, for documents and print).
Keep every color in ONE module per project (e.g. `colors.py`) and import it; never inline
hex at call sites.

## Shared Tokens (colors.py)

```python
FONT_SANS = '"Inter Variable", Inter, system-ui, sans-serif'
FONT_DISPLAY = 'Quicksand, "Inter Variable", Inter, sans-serif'
FONT_MONO = '"JetBrains Mono Variable", "JetBrains Mono", Consolas, monospace'

SCREEN_TRACES = ["#3BE065", "#00B0F0", "#FFA23C", "#FF5252", "#E86BD8",
                 "#FFE14B", "#7CC9F2", "#2BD9C8", "#BFC3C6"]
REPORT_TRACES = ["#009DEC", "#EA5B0C", "#007973", "#A50F14", "#003E76",
                 "#F8AD3E", "#0083A2", "#933973", "#BFC3C6"]
GRID_SCALE = [[0.0, "#003E76"], [0.25, "#0083A2"], [0.5, "#009DEC"], [0.75, "#7CC9F2"], [1.0, "#C7E8FA"]]

# Console roles — loguru levels and Rich styles read from here
CONSOLE_COLORS = {
    "lead": "#009dec", "ok": "#2bd98a", "warn": "#ffa23c", "err": "#e8483e",
    "info": "#7cc9f2", "accent": "#9b6bd3", "text": "#ffffff", "muted": "#aab5be",
    "border": "#4e5c69",
}
```

## Matplotlib (screen)

```python
import matplotlib.pyplot as plt
from cycler import cycler
from matplotlib import font_manager

SCREEN_RC = {
    "figure.facecolor": "#10141A", "savefig.facecolor": "#10141A",
    "figure.figsize": [10, 6], "savefig.dpi": 300,
    "axes.facecolor": "#0A0D10", "axes.edgecolor": "#3A434D",
    "axes.labelcolor": "#D6DCE1", "axes.titlecolor": "#FFFFFF",
    "axes.labelsize": 11, "axes.titlesize": 14,
    "axes.spines.top": False, "axes.spines.right": False,
    "axes.grid": True, "axes.axisbelow": True, "grid.color": "#262E36",
    "xtick.color": "#98A4AE", "ytick.color": "#98A4AE",
    "legend.facecolor": "#10141A", "legend.edgecolor": "#3E4A55",
    "legend.labelcolor": "#D6DCE1", "text.color": "#D6DCE1",
    "lines.linewidth": 2.0, "lines.markersize": 6,
    "axes.prop_cycle": cycler(color=SCREEN_TRACES),
    "image.cmap": "Blues_r",  # or build GRID_SCALE with LinearSegmentedColormap
}
plt.rcParams.update(SCREEN_RC)
# Name Inter only when installed — a missing family warns on every draw
if any(f.name == "Inter" for f in font_manager.fontManager.ttflist):
    plt.rcParams.update({"font.family": "sans-serif", "font.sans-serif": ["Inter", "DejaVu Sans"]})
```

**report** — same keys with: `figure/savefig/axes.facecolor` `#FFFFFF`, `axes.edgecolor`
`#BFC3C6`, `axes.labelcolor`/`text.color` `#000000`, `axes.titlecolor` `#003E76`, ticks
`#5A5F63`, `grid.color` `#E3E6E8`, legend `#FFFFFF`/`#BFC3C6`, `lines.linewidth` 2.5,
cycle `REPORT_TRACES`. Seaborn ignores `axes.prop_cycle` — pass `palette=SCREEN_TRACES`.

## Plotly (screen)

```python
SCREEN_LAYOUT = {
    "paper_bgcolor": "#10141A",
    "plot_bgcolor": "#0A0D10",
    "colorway": SCREEN_TRACES,
    "font": {"family": FONT_SANS, "color": "#FFFFFF", "size": 12},
    "title": {"font": {"family": FONT_DISPLAY, "color": "#FFFFFF", "size": 16}},
    "xaxis": {"gridcolor": "#262E36", "linecolor": "#3A434D", "zerolinecolor": "#3A434D",
              "tickfont": {"color": "#98A4AE"}, "title": {"font": {"color": "#D6DCE1"}}},
    "yaxis": {"gridcolor": "#262E36", "linecolor": "#3A434D", "zerolinecolor": "#3A434D",
              "tickfont": {"color": "#98A4AE"}, "title": {"font": {"color": "#D6DCE1"}}},
    "legend": {"bgcolor": "rgba(16,20,26,0.88)", "bordercolor": "#3E4A55", "font": {"color": "#D6DCE1"}},
    "hoverlabel": {"bgcolor": "rgba(35,42,51,0.96)", "bordercolor": "#3E4A55", "font_color": "#FFFFFF"},
    "margin": {"t": 60, "r": 40, "b": 60, "l": 60},
}
# Usage: fig.update_layout(**SCREEN_LAYOUT)
```

**report** — `paper_bgcolor`/`plot_bgcolor` `#FFFFFF`, font `#000000`, title `#003E76`,
ticks `#5A5F63`, grid `#E3E6E8`, axis/zero `#BFC3C6`, `ticks: "outside"`, legend
`rgba(255,255,255,0.9)`/`#BFC3C6`, hover `#003E76` with white text, colorway `REPORT_TRACES`,
line width 2.5. Image export (kaleido) only sees **installed** fonts — see design-system.md.

## Rich Console

```python
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

console = Console()
C = CONSOLE_COLORS

console.print("→ Processing...", style=C["info"])
console.print("✓ Complete", style=C["ok"])
console.print("⚠ 1 deprecated method", style=C["warn"])
console.print("✗ Error", style=C["err"])

def bonsai_panel(content, title):
    return Panel(content, title=f"[bold {C['lead']}]{title}[/]", border_style=C["border"])

table = Table(header_style=f"bold {C['lead']}", border_style=C["border"])
```

Never `[red]…[/red]` markup — use the role style, so a palette change reaches every line.

## Loguru Setup

```python
import sys
from loguru import logger

logger.remove()
logger.level("DEBUG", color="<fg #aab5be>")
logger.level("INFO", color="<fg #ffffff>")
logger.level("SUCCESS", color="<fg #2bd98a>")
logger.level("WARNING", color="<fg #ffa23c>")
logger.level("ERROR", color="<fg #e8483e>")
logger.level("CRITICAL", color="<fg #e8483e>")

logger.add(sys.stderr,
    format="<fg #009dec>{time:HH:mm:ss}</fg #009dec> | <level>{level: <8}</level> | "
           "<fg #7cc9f2>{name}:{function}:{line}</fg #7cc9f2> - <level>{message}</level>",
    level="INFO", colorize=True, enqueue=True, backtrace=True, diagnose=True)

logger.add("logs/bonsai-{time:YYYY-MM-DD}.log",
    format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
    level="DEBUG", rotation="1 day", retention="30 days", compression="gz")
```

Custom levels keep the hue scheme: a protocol/traffic level in violet `#9b6bd3`, a data
level in sky `#7cc9f2`.

## tqdm Progress

```python
from tqdm import tqdm

BONSAI_TQDM = {
    "bar_format": "{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, {rate_fmt}]",
    "colour": "#009dec", "leave": True, "dynamic_ncols": True, "smoothing": 0.1,
}

def bonsai_progress(iterable, desc="Processing", **kwargs):
    return tqdm(iterable, desc=f"→ {desc}", **{**BONSAI_TQDM, **kwargs})
```

## Typer CLI

```python
import typer
from rich.console import Console

app = typer.Typer(name="bonsai-tool", add_completion=False, rich_markup_mode="rich")
console = Console()

@app.command()
def process(input_file: Path = typer.Argument(..., help="Input file")):
    """Process files with BONSAI efficiency."""
    try:
        console.print("✓ Complete", style=CONSOLE_COLORS["ok"])
    except Exception as e:
        console.print(f"✗ Error: {e}", style=CONSOLE_COLORS["err"])
        raise typer.Exit(1)
```

## Textual TUI

```python
from textual.app import App

class BonsaiApp(App):
    CSS = """
    Screen { background: #14181d; color: #d6dce1; }
    Header { background: #232a33; color: #ffffff; }
    Footer { background: #232a33; color: #aab5be; }
    Input { background: #2a323c; border: tall #66737f; }
    Input:focus { border: tall #66ccff; }
    Button { background: #333d48; color: #ffffff; border: tall #4e5c69; }
    Button:hover { background: #3d4855; }
    Button.-primary { background: #009dec; color: #04121b; border: tall #009dec; }
    DataTable > .datatable--cursor { background: #17303f; }
    """
    TITLE = "BONSAI Terminal Interface"
```

Light terminals: use the `report` hues for the same roles — lead `#003e76`, ok `#007973`,
warn `#c74d0a`, err `#a50f14`, info `#007f9d`, muted `#5a5f63` (all >= 4.6:1 on white).

## Coverage Configuration (pyproject.toml)

```toml
[tool.coverage.run]
source = ["src"]
omit = ["*/tests/*", "*/.venv/*", "*/migrations/*"]
branch = true

[tool.coverage.report]
precision = 2
show_missing = true
exclude_lines = ["pragma: no cover", "if TYPE_CHECKING:", "if __name__"]

# Run: uv run pytest --cov=src --cov-report=html --cov-report=term-missing
```

## Polars with Pandas Fallback

```python
import polars as pl

# Primary: polars (fast, memory-efficient)
df = pl.read_csv("data.csv")
result = df.lazy().filter(pl.col("value") > 100).group_by("category").agg(
    pl.col("value").mean().alias("avg")
).collect()

# Fallback: pandas for HDF5 or complex Excel
import pandas as pd
pd_df = pd.read_hdf("legacy.h5")
pl_df = pl.from_pandas(pd_df)

# Janitor cleaning -> polars
import janitor
cleaned = pd.read_csv("messy.csv").clean_names().remove_empty()
pl_df = pl.from_pandas(cleaned)
```
