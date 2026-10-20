# Suno Worked Examples

Battle-tested Style + Lyrics pairs distilled from real iteration. Each shows the
*final* version (not first drafts) with annotations on what each piece does and what
earlier versions got wrong.

---

## Example 1 — German boom-bap hip-hop (Sprechgesang)

**Style:**
```
German boom-bap hip-hop with late-90s / early-2000s golden era feel. Playful, witty,
conversational and lyrical, friendly and cheeky, never aggressive. Around 92 BPM.
Warm dusty drums: solid kick, crisp snare on 2 and 4, soft shuffled hi-hats,
occasional rim-clicks and DJ scratches. Sampled jazz-funk loop with Rhodes chords,
muted trumpet stabs, upright bass groove, vinyl crackle and light tape hiss.
Male German rapper with relaxed mid-range Sprechgesang delivery. Verses clever, nerdy
and wordplay-heavy with natural bounce and clear articulation. Verse 2 slightly faster,
tongue-twister-like but understandable. Catchy chantable gang-vocal hook, layered and
easy to sing along.
Clean modern mix with vintage character. No autotune, no trap, no 808s, no drill hats,
no harsh distortion, no English hook. Pure playful German hip-hop with oldschool
boom-bap energy.
```

**Lyrics excerpt:**
```
[Intro]
[Vinyl crackle, MPC drums kick in]

[Verse 1]
[Nasal raspy delivery, clear articulation, bouncy flow]
Klick-klack, Plan gemacht, ich sag: "So und nicht mehr"
…

[Chorus]
[Gang vocals, call and response, chantable]
Bonsai, Bonsai — kurz und gut!
…

[Verse 2]
[Faster, tongue-twister-like, energetic]
…
```

**What's doing the work:**
- **"MPC"** and **"Sprechgesang"** are load-bearing phrases — Suno has strong fingerprints
  for both.
- **Repeated negation** ("no autotune, no trap, no 808s, no drill hats, no harsh
  distortion, no English hook") pushes hard against modern-trap default.
- **Verse 2 marked "faster, tongue-twister-like"** in the bracket descriptor tells Suno
  to vary the flow within the same prompt.
- **Earlier draft** had a long artist-reference list (Blumentopf, Reimemonster,
  Dendemann) — removed because bare names diluted focus. The sonic descriptors
  ("warm dusty drums", "Rhodes chords", "muted trumpet stabs") replaced them and
  worked better.
- **First-draft lyric** "Init im Terminal, der Bot fragt nach bei mir" was rhythmically
  awkward. Replaced with "Klick-klack, Plan gemacht, ich sag: 'So und nicht mehr'" —
  shorter syllables, onomatopoeia adds bounce.

---

## Example 2 — Ballermann / après-ski party

**Style:**
```
German Ballermann Schlager / après-ski party hit. Tempo ~128 BPM, four-on-the-floor
kick, big cheesy pitched-up sawtooth synth lead, simple two-chord progression in
major key, drunk-crowd singalong, hand claps, Mega Park bierzelt energy.
Male lead with shouty cheeky delivery, layered drunken backup vocals on the hook.
Cheesy not classy, dumb fun, slogans not stories. Mallorca after-ski. Sloppy
singalong is the goal — no elegance, no taste, no Andrea Berg ballad polish.
```

**Lyrics excerpt:**
```
[Intro]
[Spoken party voice over four-on-the-floor]
Hey! Mallorca, hört ihr mich?

[Chorus]
[Gang vocals, drunken crowd, hand claps]
Bonsai, Bonsai — klein, klein, klein!
Der Code muss kurz und der Becher voll sein
Bonsai, Bonsai — weg, weg, weg!
Alles was nix kann, das fliegt direkt weg
```

**What's doing the work:**
- **Slogans, not stories.** Lyrics are repetition-heavy ("klein, klein, klein" /
  "weg, weg, weg") because Ballermann hooks are chants, not narratives.
- **"Cheesy not classy"** and **"Mega Park bierzelt energy"** are surprisingly strong
  steers — they push Suno toward vulgar party energy and away from the elegant Schlager
  default.
- **No negation against the default** because vulgarity *is* the goal. Suno's
  overcompressed mix and shouty energy work for this genre.
- **Two-chord progression** stated explicitly — keeps Suno from getting harmonically
  ambitious.

---

## Example 3 — American skate-punk / pop-punk

**Style:**
```
American skate-punk and pop-punk, late-90s / early-2000s American Pie soundtrack era.
Tempo ~172 BPM. Palm-muted distorted power-chord verses exploding into huge open
chorus chords. Tight pop-punk drum kit, walking eighth-note bass. Snotty nasal male
lead vocal, slightly bratty teenage attitude, sloppy not polished. Big gang-vocal
hook with whoa-oh-oh backing vocals.
Like Hi-Standard California Dreaming, like Sum 41 In Too Deep.
NOT pop rock, NOT modern radio rock, lo-fi punk production, crunchy distorted guitars,
slightly off-key on purpose. Never clean, never earnest.
```

**Lyrics excerpt:**
```
[Intro]
[Drum Stick Click x4]

[Verse 1]
[Nasal bratty vocal, palm-muted guitars, fast]
Half my code is broken and the other half is junk
…

[Chorus]
[Gang vocals, huge open power chords, whoa-oh-oh]
B-O-N-S-A-I!
Build what you need and trash the rest
Whoa-oh-oh, whoa-oh-oh
Cut it down and make it pass the test
```

**What's doing the work:**
- **References paired with song titles** ("Hi-Standard California Dreaming" not just
  "Hi-Standard"). Bare names get filtered or under-weighted.
- **`[Drum Stick Click x4]`** replaces shouted "One! Two! Three! Four!" count-offs,
  which v4.5 sometimes mangles. v5 handles either.
- **Spelled-out hook** ("B-O-N-S-A-I!") is a punk staple and very chantable — Suno
  picks it up cleanly with `[Gang vocals]`.
- **Negation list** ("NOT pop rock, NOT modern radio rock") is critical. Without it
  Suno polishes into clean alt-rock.

---

## Example 4 — Bilingual Y2K electro hip-hop (m-flo style)

**Style:**
```
Y2K bilingual electro hip-hop in the style of m-flo and Teriyaki Boyz. Tempo ~110 BPM,
glossy minimal production, tight danceable groove, clean turntable scratches, four-on-
the-floor kick with snappy snare. Smooth fast male rapper alternating with airy female
melodic hook. Japanese / English code-switching. Early-2000s J-pop production sheen,
clean digital reverb, no clutter.
No modern trap, no 808s, no chaotic maximalism. Tight, glossy, danceable.
```

**Lyrics excerpt:**
```
[Intro]
[Female, airy]
Less code, more life — nani ga hitsuyou?

[Verse 1]
[Male, Fast Rap]
Init in the terminal, slash bonsai go
Concept dot em-dee, that's the only show
…

[Chorus]
[Female, Melodic Hook]
Less code, more life
Kirei ni — keep it light
```

**What's doing the work:**
- **Vocal arrangement tags on alternating lines** (`[Male, Fast Rap]` / `[Female,
  Melodic Hook]`) — Suno respects the trade-off cleanly when each role is named.
- **Sparse Japanese phrases** ("nani ga hitsuyou", "Kirei ni") — code-switching reads
  organic; cramming more Japanese in would feel like costume.
- **"Glossy minimal"** and **"clean digital reverb"** keep Suno from going maximalist
  or chaotic, which is the easy failure mode for bilingual hip-hop.
- **v5 pronunciation** is correct on the Japanese; v4.5 Americanizes it.

---

## Example 5 — Indie folk (Bon Iver style)

**Style:**
```
Indie folk acoustic ballad. Tempo ~76 BPM. Fingerpicked steel-string acoustic guitar,
soft brushed drums entering on the second verse, sparse upright bass. Soft male lead
vocal, breathy and intimate, close-mic, tape hiss, subtle room reverb. Like Bon Iver
For Emma, like Sufjan Stevens Casimir Pulaski Day.
Never anthemic, never stomp-clap, never Imagine Dragons. Dynamics stay low and
intimate throughout. No big crescendo, no pop drums, no polished mix.
```

**Lyrics excerpt:**
```
[Intro]
[Closed-mouth humming, no syllables]

[Verse 1]
[Soft male vocal, breathy, close-mic]
I deleted half my code last night
And the silence felt like room to breathe
…

[Chorus]
[Soft, layered backing vocals, intimate]
Less is more
Less is more
…

[Bridge]
[Closed-mouth humming, no syllables]
```

**What's doing the work:**
- **`[Closed-mouth humming, no syllables]` on its own line.** Plain `[Hummed]` gets
  replaced with sung "ooh"s; the explicit version with "no syllables" survives.
- **Repeated negation against anthemic stomp-clap** — without it, Suno drifts toward
  Mumford & Sons and ruins the intimacy.
- **Reference + song title** ("Bon Iver For Emma") is much stronger than "like Bon
  Iver" alone.
- **Hook is just two repeated lines** ("Less is more / Less is more") — exact
  repetition is sticky.

---

## Iteration patterns worth knowing

Across all five examples, the same patterns kept fixing things:

1. **Compress the Style field** — early drafts were 2–3× too long. Cutting fluff
   adjectives and keeping only structural/sonic specifics (BPM, drum pattern,
   instrument names, vocal character, references with songs, negatives) made
   prompts more focused, not less.
2. **Replace artist lists with sonic descriptors + one or two keystone references.**
   "Like Hi-Standard California Dreaming" beats a list of five punk band names.
3. **Move bracket tags to their own lines.** Compound inline tags
   (`[Female Vocal, Soft, Intimate, Reverb]`) parse inconsistently; isolated tags
   land reliably.
4. **Negate the default** whenever the goal is anything but "polished radio mix."
   And **repeat the negation** if the first generation ignores it.
5. **Hook design is genre-specific.** Repetitive chants for Ballermann, spelled-out
   acronyms for punk, two-line minimalism for indie folk, soaring metaphor for EDM.
   Match the form to the genre's listening culture.
