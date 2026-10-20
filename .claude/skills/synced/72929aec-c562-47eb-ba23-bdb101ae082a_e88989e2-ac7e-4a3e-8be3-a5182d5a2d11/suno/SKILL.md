---
name: suno
description: >
  Craft style prompts and lyrics for Suno (suno.com) — the AI music generator. Covers
  prompt anatomy, the ~1000-char style field, bracket-tag reliability, negation strategy
  against radio-polish defaults, version deltas (v3.5 / v4.5 / v5 / v5.5), and per-genre
  playbooks. Use when the user mentions Suno or suno.ai, asks for help writing or fixing
  a music prompt, debugs a generated song that came out wrong ("too polished",
  "ignored the koto", "rapped the chorus instead of singing"), builds lyrics with
  section tags like [Verse]/[Chorus]/[Drop], or wants to generate a song with AI in a
  specific genre (lo-fi, K-pop, punk, Schlager, country, EDM, indie folk).
---

# Suno Prompt Craft

Help the user write Suno prompts that actually produce what they want. Suno is generative,
opinionated, and biased toward radio-polish defaults — most of the craft is steering it
away from those defaults toward the specific sound the user has in their head.

## Mental model

Suno is a probability engine over (text → audio) pairs. It doesn't "understand" music;
it predicts what audio statistically follows a given prompt. Three consequences:

1. **Specific, training-dense concepts win** — named artists+songs ("Bon Iver For Emma"),
   named production styles ("MPC-style drums", "boom-bap"), exact BPM. These have
   millions of training examples.
2. **Generic adjectives lose** — "good", "musical", "cool", "nice", even "sad" or "fast"
   are too ambiguous to steer the model. Replace with "melancholic", "~76 BPM".
3. **Negation needs repetition** — Suno weights "X" much more than "not X". If the first
   take ignores "no autotune", the second prompt should say "absolutely no autotune,
   zero autotune, natural raw vocal" to actually push it.

## The two fields

Suno's Custom mode has three text inputs (Title, Style, Lyrics) plus an Instrumental toggle:

- **Style** — ~1000 characters (treat as a hard ceiling; trim if rejected). Describes
  *how it should sound*: genre, BPM, instruments, vocal character, mood, references,
  what NOT to do.
- **Lyrics** — much larger (effectively unlimited for songs, but ~5000 chars is a
  practical cap). Holds the actual lyrics with bracket tags for structure and delivery.
  If Instrumental is toggled on, leave this blank.
- **Title** — names the track; does **not** affect the audio, so pick on taste. Always
  deliver one: a song prompt is incomplete without it.

## Style prompt anatomy

Write the Style field in this order — Suno parses linearly, so most-load-bearing first:

1. **Genre + subgenre + era** (first sentence). E.g.
   "American skate-punk and pop-punk, late-90s / early-2000s American Pie soundtrack era."
2. **Tempo as a number, not a word.** "~118 BPM" beats "fast" or "uptempo" every time.
3. **Instrumentation** — name the key elements specifically: "palm-muted distorted
   power-chord electric guitars, tight pop-punk drum kit, walking eighth-note bass."
4. **Vocal character** — three dimensions: tone (nasal, raspy, breathy, smooth),
   attitude (bratty, confident, intimate, sarcastic), delivery (rapped, sung,
   Sprechgesang, shouted, whispered). "Snotty nasal male lead, slightly bratty"
   beats "male voice".
5. **Mood / energy** — 2–3 words max. "Cheeky, friendly, never aggressive."
6. **Reference artists, with song titles** — "like Hi-Standard California Dreaming"
   beats "like Hi-Standard". Bare artist names often get filtered or under-weighted;
   pairing with a specific song gives Suno a fingerprint to chase.
7. **Negatives** — explicit "no X" lines for whatever Suno would default to that you
   don't want: "NO autotune, NO trap beats, NO 808s, NO modern radio polish."

If you're at the character ceiling, cut secondary adjectives first; keep genre name,
BPM, 2–3 key instruments, vocal description, references, and negatives.

## Bracket tags (in the Lyrics field)

Bracket tags steer *how* a section is performed. Reliability varies — keep tags short,
on their own line, with a blank line above and below. Compound inline tags
(`[Female Vocal, Intimate, With reverb]`) parse inconsistently; split into
`[Female Vocal]` on its own line.

**Section markers** (highly reliable):
`[Intro]` `[Verse]` `[Verse 1]` `[Verse 2]` `[Pre-Chorus]` `[Chorus]` `[Bridge]`
`[Break]` `[Drop]` `[Final Chorus]` `[Outro]`

**Delivery tags** (reliable in v5, hit-or-miss in v4.5):
`[Rap]` `[Rap, Aggressive]` `[Rap, Hard Flow]` `[Rap, Fast Flow]` `[Whisper]`
`[Shouted]` `[Spoken]` `[Sung]` `[Sprechgesang]`

**Vocal arrangement** (reliable):
`[Male Vocalist]` `[Female Vocal]` `[Group Vocals]` `[Gang Vocals]` `[Call and Response]`
`[Backing Vocals]` `[Ad-libs]`

**Accent / FX** (use isolated, with blank lines):
`[Beat Drop]` `[Build]` `[Drum Fill]` `[Key Change]` `[Guitar Solo]`
`[Closed-Mouth Humming, no syllables]` `[Drum Stick Click x4]`

**Performance descriptors after a section marker** also work:
`[Verse 2]` then on a new line `[Faster, tongue-twister-like, energetic]`

Parenthetical ad-libs inside lyric lines mark backing vocals or asides:
`I'm wide awake (wide awake) / and I see you now (see you, see you)`.

## Negation strategy

Suno's gravitational center is "polished, radio-friendly". To pull it elsewhere
(intimate folk, punk, ambient, lo-fi, anything raw), negate explicitly **and repeat
when ignored**:

- Punk drifting toward pop-rock → "NOT pop rock, NOT modern radio rock, lo-fi punk
  production, crunchy distorted guitars, slightly sloppy not polished."
- Indie folk drifting toward Mumford-style stomp-clap → "never anthemic, never
  stomp-clap, never Imagine Dragons, dynamics stay low and intimate."
- Ambient adding unwanted percussion → "no drums, no percussion, no melodic hook,
  no crescendo, sparse and still."
- Hip-hop drifting toward modern trap → "no trap, no 808s, no drill hi-hats, classic
  boom-bap drums only, MPC-style swing."

If a generation ignores a negative, append more emphatic versions next time. Suno
"learns" per-prompt that the constraint matters.

## Lyric craft

- **Ground a subject-specific song in real facts first.** When the song is about a real
  product, person, or place, pull specifics from the source (feature names, numbers,
  jargon) before writing — concrete detail ("VCC three to five, catch it in HDF5") is
  stickier and more convincing than generic filler. Ask the user for the source if it
  isn't obvious. **But match altitude to the song** — most songs want the *general idea*
  (what it does, why it's cool), not the spec sheet. Gauge how technical the user wants
  *before* mining deep: jargon-dense lyrics read like a datasheet and (in any non-English
  song) pronounce badly. Abstract the facts up to the hook's level — an ELI5 of the
  subject is often the right altitude, and the `/eli5` skill is a fast way to get it: its
  kid-level view sets the general frame, its expert view flags the few real terms worth
  keeping.
- **Line length** — short lines (5–8 words) are safer; long lines get rushed.
- **Blank lines = breath** — Suno reads blank lines as section breaks. Use them to
  separate verses from hooks even if not strictly necessary.
- **Hook design** — keep hooks 2–4 lines, repeat them *exactly* across choruses.
  Repetition gets sticky; variation confuses the model.
- **Wordless vocals are fragile** — `[Hummed]` alone often gets replaced with sung
  "ooh"s. Use `[Closed-mouth humming, no syllables]` or `[Instrumental vocal pad,
  wordless]`.
- **Multilingual** — works well in v5 (German, Spanish, French, Japanese with
  appropriate accent). Less reliable in v4.5 (pronunciation Americanizes). Code-
  switching is fine when motivated by the genre; a Y2K bilingual hip-hop song can
  freely mix English and Japanese. **But in a mono-lingual non-English song, minimize
  English words and jargon** — Suno reads them with English phonetics (or spells them
  out), snapping the accent and breaking the flow. Translate concepts into the target
  language; keep only proper nouns that must stay. **To pin a name/acronym's
  pronunciation, respell it phonetically in the target language and write acronyms as a
  word, not caps** — e.g. German "UMA" → "Juma" so it's sung "YOO-ma", never spelled
  U-M-A.
- **Profanity** — generally allowed in country/punk/hip-hop contexts. If Suno rejects
  a word, swap a softer near-synonym ("damn" usually passes; harder words sometimes
  don't).
- **Song length tracks section count, not requests.** Suno ignores "make it 3 minutes"
  in the Style field and *compresses* a short lyric — a verse/pre/chorus ×2 + bridge
  lands ~2–2.5 min. To hit ~3 min **in one generation**, give it more to perform.
- **Instrumental / repeat sections add runtime most reliably** — Suno can't rush them:
  `[Guitar Solo]`, `[Break]`, a half-time `[Breakdown]`, a **doubled** `[Final Chorus]`,
  and a longer call-and-response `[Outro]`. Rough map: base structure ≈ 2–2.5 min;
  + solo + breakdown + doubled final chorus + extended outro ≈ 3–3.5 min.
- **Extend is the guaranteed backstop** for anything past a single generation's ceiling
  (see Workflow) — but size the initial lyric first rather than relying on it.
- **Sizing a draft to a target length (the math).** 4/4: `sec/bar = 240 / BPM`; bars for
  a target `= target_sec × BPM / 240` (for 3:00, `≈ 0.75 × BPM`). Then `words ≈ (bars −
  instrumental_bars) × D`, D = words/bar by delivery (dense rap 8–10, conversational
  Sprechgesang 6–8, sung-rap 4–6, sung pop/rock 3–5, ballad 2–3; English ~20% higher).
  Count each instrumental section (break, solo, intro build) as its bar length. **Most
  reliable: self-calibrate** — generate once, then `words_needed ≈ current_words ×
  target_sec / actual_sec`, and add/trim the difference. The a-priori number is ±25%
  (Suno stretches held notes) — use Extend or trim for the last 15–20%.

## Workflow

1. **Generate a batch.** Suno produces 2 takes per generation; run 2–3 generations
   and listen to every take. The 1st take is often not the best — a take from a
   later generation frequently wins.
2. **Diagnose what was violated.** If too clean, the negation list was too short. If
   the genre drifted, the genre name was buried or competed with too many references.
   If a bracket tag was ignored, isolate it on its own line.
3. **Adjust the specific constraint** that failed, then regenerate. Don't rewrite the
   whole prompt — change the failing lever.
4. **Extend** — for length *beyond* one generation's ceiling (size the initial lyric
   first — see Lyric craft → song length). Take a good track, Extend with the same
   Style + a short coda lyric (4–8 lines) to add another 2–3 min. Multiple extends work.
5. **Cover mode** — upload audio. Two separate sliders: **Audio Influence** (appears
   with the upload) controls adherence to the uploaded audio — ~55% is the community
   consensus for preserving melody while re-rendering the arrangement (good for
   genre-shifts piano → orchestral); 0–30% treats the source as distant inspiration;
   70–100% yields a near-variation of it. **Style Influence** controls adherence to
   the style *text* field, not the audio — don't max both, they compete. Suno
   preserves melody first, then harmony, then rhythm.
6. **Replace Section** — regenerate just one verse/chorus while keeping the rest.

## Version deltas

| Capability                   | v3 – v4.5                              | v5                              | v5.5                            |
|------------------------------|----------------------------------------|---------------------------------|---------------------------------|
| Bracket tag parsing          | Inconsistent; compound tags fail       | Reliable                        | Same as v5                      |
| Non-English pronunciation    | Americanized                           | Native-accent appropriate       | Same as v5                      |
| Rap vs. sung distinction     | Soft; often sings rap sections         | Crisp; `[Rap, Aggressive]` lands| Same as v5                      |
| Hummed / wordless vocals     | Replaced with "ooh"                    | Respects `[Closed-mouth humming]`| Same as v5                     |
| Intimate vocal delivery      | Adjectives weak; need artist refs      | Adjectives steer better         | Same as v5                      |
| Long compositions (3 min+)   | Loses coherence                        | Extend stays coherent           | Same as v5                      |
| Subtle style descriptors     | Averaged away                          | Often ignored                   | Land ("slightly detuned keys")  |
| Vocal identity               | Style-field text only                  | Style-field text only           | Voices: clone your own          |
| Model personalization        | —                                      | —                               | Custom Models, My Taste         |

v5.5 (2026-03) is fully prompt-compatible with v5 — everything in this skill works
unchanged — and adds **Voices** (clone your own singing voice; Pro/Premier), **Custom
Models** (fine-tune v5.5 on your own uploaded tracks; Pro/Premier, up to 3), and
**My Taste** (preference learning; all tiers). When a cloned Voice is active, drop
vocal-character descriptors from the Style field — they conflict with the clone;
spend those characters on production detail instead.

Default to v5.5 for everything v5 was recommended for — rap, vocals, non-English,
bracket-tag nuance — plus anything leaning on subtle descriptors. v4.5 is fine for
simple English instrumentals.

## Common pitfalls

1. **Over-stuffing the Style field.** Every adjective is a constraint; Suno picks one
   and ignores the rest. Cap mood at 2–3 words.
2. **Contradictory genres.** "Lo-fi K-pop metal" defaults to whichever is first.
   Pick one primary, lean on references for the texture.
3. **Bare artist names.** "Like Bon Iver" is weak. "Like Bon Iver For Emma" is strong.
4. **Compound inline bracket tags.** Split `[Female Vocal, Soft, Intimate, Reverb]`
   into separate tags on their own lines.
5. **Forgetting to negate.** If you want anything outside the radio-friendly center,
   negate explicitly. Silence about a default = Suno picks the default.
6. **Stopping at take 1.** Each generation yields 2 takes; run several generations,
   listen to all candidates, pick the best.
7. **Character overflow.** Style ~1000 chars including spaces. If the platform
   rejects, trim secondary adjectives first.

## Going deeper

- **`references/genres.md`** — per-genre playbooks (K-pop, German boom-bap, Ballermann,
  skate-punk, bilingual Y2K, soft rock, Avicii-style EDM, country, indie folk, ambient,
  lo-fi). Read the relevant section when the user is working on a specific genre.
- **`references/examples.md`** — fully worked Style+Lyrics exemplars distilled from
  real iteration history, with annotations on what each piece does and why earlier
  drafts failed. Read when the user wants a concrete starting template or wants to
  understand the craft from worked examples.
