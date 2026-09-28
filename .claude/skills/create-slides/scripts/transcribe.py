"""Transcribe an audio/video file to a timestamped Markdown transcript with faster-whisper.

Run with:  uv run --with faster-whisper python transcribe.py <audio> [-o transcript.md] [--model large-v3] [--language en]

Model choice defaults to large-v3 on CUDA (float16) and small on CPU (int8); both can be
overridden. Output lines look like `[mm:ss] text`, which the slide plan uses as note anchors.
"""

from __future__ import annotations

import argparse
import contextlib
import sys
from pathlib import Path


def fmt_ts(seconds: float) -> str:
    m, s = divmod(int(seconds), 60)
    h, m = divmod(m, 60)
    return f"{h:02d}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"


def pick_device() -> tuple[str, str, str]:
    """Return (device, compute_type, default_model) — CUDA when available, else CPU."""
    with contextlib.suppress(ImportError, RuntimeError):
        import ctranslate2

        if ctranslate2.get_cuda_device_count() > 0:
            return "cuda", "float16", "large-v3"
    return "cpu", "int8", "small"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("audio", type=Path)
    parser.add_argument(
        "-o",
        "--out",
        type=Path,
        default=None,
        help="output .md (default: <audio stem>.transcript.md)",
    )
    parser.add_argument(
        "--model",
        default=None,
        help="whisper model (default: large-v3 on CUDA, small on CPU)",
    )
    parser.add_argument(
        "--language", default=None, help="force language code, e.g. en or de"
    )
    args = parser.parse_args()

    if not args.audio.exists():
        sys.exit(f"not found: {args.audio}")

    from faster_whisper import WhisperModel

    device, compute_type, default_model = pick_device()
    model_name = args.model or default_model
    out = args.out or args.audio.with_suffix(".transcript.md")
    print(f"→ {args.audio.name}: model={model_name} device={device}", file=sys.stderr)

    model = WhisperModel(model_name, device=device, compute_type=compute_type)
    segments, info = model.transcribe(
        str(args.audio), vad_filter=True, beam_size=5, language=args.language
    )

    lines = [
        f"# Transcript — {args.audio.stem}",
        "",
        f"_Language: {info.language} (p={info.language_probability:.2f}) · Duration: {info.duration:.0f}s_",
        "",
    ]
    for seg in segments:
        lines.append(f"[{fmt_ts(seg.start)}] {seg.text.strip()}")
        print(f"\r{fmt_ts(seg.end)} / {fmt_ts(info.duration)}", end="", file=sys.stderr)
    print(file=sys.stderr)

    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"✓ {out} ({len(lines) - 4} segments)", file=sys.stderr)


if __name__ == "__main__":
    main()
