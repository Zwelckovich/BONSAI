---
paths:
  - "**/*.py"
---

# BONSAI Python Visualization & Tool Patterns

## BONSAI Matplotlib Theme

```python
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap

BONSAI_STYLE = {
    'figure.facecolor': '#0a0e14', 'figure.edgecolor': '#0a0e14',
    'figure.figsize': [10, 6], 'figure.dpi': 100,
    'savefig.facecolor': '#0a0e14', 'savefig.dpi': 300,
    'axes.facecolor': '#151922', 'axes.edgecolor': '#2d3441',
    'axes.linewidth': 1.0, 'axes.grid': True, 'axes.axisbelow': True,
    'axes.labelcolor': '#e6e8eb', 'axes.labelsize': 11,
    'axes.titlesize': 14, 'axes.titlecolor': '#e6e8eb',
    'axes.spines.top': False, 'axes.spines.right': False,
    'grid.color': '#4a5568', 'grid.linewidth': 0.8, 'grid.alpha': 0.8,
    'xtick.color': '#e6e8eb', 'ytick.color': '#e6e8eb',
    'xtick.labelsize': 10, 'ytick.labelsize': 10,
    'legend.facecolor': '#1e242e', 'legend.edgecolor': '#2d3441',
    'legend.fontsize': 9, 'legend.framealpha': 0.95,
    'lines.linewidth': 2.0, 'lines.markersize': 6,
    'font.family': ['DejaVu Sans', 'sans-serif'], 'font.size': 10,
    'text.color': '#e6e8eb',
    'patch.facecolor': '#7c9885', 'patch.edgecolor': '#677a70',
}

BONSAI_COLORS = {
    'green_primary': '#7c9885', 'green_secondary': '#9db4a6', 'green_muted': '#677a70',
    'red_primary': '#c78289', 'blue_primary': '#82a4c7', 'yellow_primary': '#c7a882',
    'purple_primary': '#9882c7', 'orange_primary': '#c7975c', 'teal_primary': '#5cc7a8',
    'text_primary': '#e6e8eb', 'text_secondary': '#b8bcc8', 'text_muted': '#8b92a5',
}

BONSAI_QUALITATIVE = ['#7c9885', '#82a4c7', '#c7a882', '#c78289', '#9882c7', '#c7975c', '#5cc7a8']
BONSAI_SEQUENTIAL_GREEN = ['#677a70', '#7c9885', '#9db4a6', '#a8c0b1']
BONSAI_DIVERGING = ['#c78289', '#d4999f', '#8b92a5', '#9bb5d4', '#82a4c7']

# Usage: plt.rcParams.update(BONSAI_STYLE)
```

## BONSAI Rich Console Integration

```python
from rich.console import Console
from rich.panel import Panel

BONSAI_COLORS = {
    'green_primary': '#7c9885', 'red_primary': '#c78289',
    'blue_primary': '#82a4c7', 'yellow_primary': '#c7a882',
    'purple_primary': '#9882c7', 'text_primary': '#e6e8eb',
    'text_muted': '#8b92a5',
}

console = Console()

# Zen-like messaging
console.print("→ Processing...", style=BONSAI_COLORS['blue_primary'])
console.print("✓ Complete", style=BONSAI_COLORS['green_primary'])
console.print("✗ Error", style=BONSAI_COLORS['red_primary'])

# BONSAI panel
def bonsai_panel(content, title):
    return Panel(content,
        title=f"[bold {BONSAI_COLORS['green_primary']}]{title}[/]",
        border_style=BONSAI_COLORS['green_primary'])
```

## BONSAI Loguru Setup

```python
from loguru import logger
import sys

logger.remove()
logger.level("DEBUG", color="<fg #8b92a5>")
logger.level("INFO", color="<fg #e6e8eb>")
logger.level("SUCCESS", color="<fg #7c9885>")
logger.level("WARNING", color="<fg #c7a882>")
logger.level("ERROR", color="<fg #c78289>")

logger.add(sys.stderr,
    format="<fg #7c9885>{time:HH:mm:ss}</fg #7c9885> | <level>{level: <8}</level> | <fg #82a4c7>{name}</fg #82a4c7>:<fg #82a4c7>{function}</fg #82a4c7> - <level>{message}</level>",
    level="INFO", colorize=True, enqueue=True, backtrace=True, diagnose=True)

logger.add("logs/bonsai-{time:YYYY-MM-DD}.log",
    format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
    level="DEBUG", rotation="1 day", retention="30 days", compression="gz")
```

## BONSAI tqdm Progress

```python
from tqdm import tqdm

BONSAI_TQDM = {
    'bar_format': '{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, {rate_fmt}]',
    'colour': '#7c9885', 'leave': True, 'dynamic_ncols': True, 'smoothing': 0.1,
}

def bonsai_progress(iterable, desc="Processing", **kwargs):
    return tqdm(iterable, desc=f"→ {desc}", **{**BONSAI_TQDM, **kwargs})
```

## BONSAI Typer CLI

```python
import typer
from rich.console import Console

app = typer.Typer(name="bonsai-tool", add_completion=False, rich_markup_mode="rich")
console = Console()

@app.command()
def process(input_file: Path = typer.Argument(..., help="Input file")):
    """Process files with BONSAI efficiency."""
    try:
        console.print("✓ Complete", style="#7c9885")
    except Exception as e:
        console.print(f"✗ Error: {e}", style="#c78289")
        raise typer.Exit(1)
```

## BONSAI Textual TUI

```python
from textual.app import App, ComposeResult
from textual.widgets import Header, Footer, Static, Button

class BonsaiApp(App):
    CSS = """
    Screen { background: #0a0e14; }
    Header { background: #151922; color: #e6e8eb; }
    Footer { background: #151922; color: #8b92a5; }
    Button { background: #7c9885; color: #0a0e14; border: solid #677a70; }
    Button:hover { background: #9db4a6; }
    """
    TITLE = "BONSAI Terminal Interface"
```

## BONSAI-Light Variants

Companion constants for plots exported to print, light-mode dashboards, or terminals on light backgrounds. Name-paired with the dark constants — import both, select at runtime.

### Matplotlib (Light)

```python
BONSAI_STYLE_LIGHT = {
    'figure.facecolor': '#f5f2ec', 'figure.edgecolor': '#f5f2ec',
    'figure.figsize': [10, 6], 'figure.dpi': 100,
    'savefig.facecolor': '#f5f2ec', 'savefig.dpi': 300,
    'axes.facecolor': '#ebe7de', 'axes.edgecolor': '#c9c2b0',
    'axes.linewidth': 1.0, 'axes.grid': True, 'axes.axisbelow': True,
    'axes.labelcolor': '#1a1f26', 'axes.labelsize': 11,
    'axes.titlesize': 14, 'axes.titlecolor': '#1a1f26',
    'axes.spines.top': False, 'axes.spines.right': False,
    'grid.color': '#c9c2b0', 'grid.linewidth': 0.8, 'grid.alpha': 0.6,
    'xtick.color': '#3a4150', 'ytick.color': '#3a4150',
    'xtick.labelsize': 10, 'ytick.labelsize': 10,
    'legend.facecolor': '#e2ddd1', 'legend.edgecolor': '#dfd9cb',
    'legend.fontsize': 9, 'legend.framealpha': 0.95,
    'lines.linewidth': 2.0, 'lines.markersize': 6,
    'font.family': ['DejaVu Sans', 'sans-serif'], 'font.size': 10,
    'text.color': '#1a1f26',
    'patch.facecolor': '#5a7a63', 'patch.edgecolor': '#677a70',
}

BONSAI_COLORS_LIGHT = {
    'green_primary': '#5a7a63', 'green_secondary': '#7c9885', 'green_muted': '#a8c0b1',
    'red_primary': '#a56b71', 'blue_primary': '#5a7fa2', 'yellow_primary': '#a5906b',
    'purple_primary': '#7e6ba5', 'orange_primary': '#a57d4a', 'teal_primary': '#4aa58a',
    'text_primary': '#1a1f26', 'text_secondary': '#3a4150', 'text_muted': '#5e6574',
}

BONSAI_QUALITATIVE_LIGHT = ['#5a7a63', '#5a7fa2', '#a5906b', '#a56b71', '#7e6ba5', '#a57d4a', '#4aa58a']
BONSAI_SEQUENTIAL_GREEN_LIGHT = ['#5a7a63', '#7c9885', '#9db4a6', '#a8c0b1']
BONSAI_DIVERGING_LIGHT = ['#a56b71', '#d4999f', '#5e6574', '#9bb5d4', '#5a7fa2']

# Usage: plt.rcParams.update(BONSAI_STYLE_LIGHT)
# Dark zen is always the default — opt into light explicitly, never via OS sniffing.
```

### Rich Console (Light)

```python
BONSAI_COLORS_LIGHT = {
    'green_primary': '#5a7a63', 'red_primary': '#a56b71',
    'blue_primary': '#5a7fa2', 'yellow_primary': '#a5906b',
    'purple_primary': '#7e6ba5', 'text_primary': '#1a1f26',
    'text_muted': '#5e6574',
}

console.print("→ Processing...", style=BONSAI_COLORS_LIGHT['blue_primary'])
console.print("✓ Complete", style=BONSAI_COLORS_LIGHT['green_primary'])
console.print("✗ Error", style=BONSAI_COLORS_LIGHT['red_primary'])
```

### Loguru (Light)

```python
def configure_loguru_light():
    logger.remove()
    logger.level("DEBUG", color="<fg #5e6574>")
    logger.level("INFO", color="<fg #1a1f26>")
    logger.level("SUCCESS", color="<fg #5a7a63>")
    logger.level("WARNING", color="<fg #a5906b>")
    logger.level("ERROR", color="<fg #a56b71>")

    logger.add(sys.stderr,
        format="<fg #5a7a63>{time:HH:mm:ss}</fg #5a7a63> | <level>{level: <8}</level> | <fg #5a7fa2>{name}</fg #5a7fa2>:<fg #5a7fa2>{function}</fg #5a7fa2> - <level>{message}</level>",
        level="INFO", colorize=True, enqueue=True)
```

### tqdm (Light)

```python
BONSAI_TQDM_LIGHT = {
    'bar_format': '{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, {rate_fmt}]',
    'colour': '#5a7a63', 'leave': True, 'dynamic_ncols': True, 'smoothing': 0.1,
}
```

### Plotly (Light)

```python
BONSAI_PLOTLY_THEME_LIGHT = {
    'paper_bgcolor': '#f5f2ec',
    'plot_bgcolor': '#ebe7de',
    'font': {'family': 'Inter, sans-serif', 'color': '#1a1f26', 'size': 12},
    'colorway': ['#5a7a63', '#5a7fa2', '#a5906b', '#a56b71', '#7e6ba5'],
    'xaxis': {'gridcolor': '#c9c2b0', 'linecolor': '#b5ad98', 'color': '#3a4150'},
    'yaxis': {'gridcolor': '#c9c2b0', 'linecolor': '#b5ad98', 'color': '#3a4150'},
    'margin': {'t': 40, 'r': 20, 'b': 40, 'l': 60},
}
```

### Textual (Light)

```python
class BonsaiLightApp(App):
    CSS = """
    Screen { background: #f5f2ec; }
    Header { background: #ebe7de; color: #1a1f26; }
    Footer { background: #ebe7de; color: #5e6574; }
    Button { background: #5a7a63; color: #f5f2ec; border: solid #7c9885; }
    Button:hover { background: #7c9885; }
    """
    TITLE = "BONSAI Terminal Interface (Light)"
```

For a mode-switching single app, load different `.tcss` files keyed off a `--theme` CLI flag or config value — keep component structure identical, vary only the stylesheet.

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
