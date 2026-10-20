# Suno Genre Playbooks

Per-genre advice distilled from actual iteration. Each entry follows the same shape:
**signature directives that work** → **Suno's default failure mode** → **the negation
that fixes it** → **v5 advantage** (where notable).

## K-pop / idol-group

- **Signature directives**: "modern K-pop in idol-group style, anthemic and high-energy,
  ~118 BPM, sidechain-pumped synths, polished vocal stacking, Korean-style ad-libs,
  letter-spelling chant hook." The phrase **"idol-group"** is more reliable than "K-pop"
  alone — Suno has a stronger fingerprint for it.
- **Default failure**: "Under-K-pop" — sounds like generic Western dance-pop. Rap
  sections come out softly sung in v4.5.
- **Fix**: Append "Korean pop production aesthetic, polished idol-group vocal stacking,
  sidechain pumping" to Style. Use `[Rap, Aggressive]` with a reference rapper or song
  ("like Stray Kids God's Menu") for hard rap delivery.
- **v5 advantage**: rap/sing distinction lands cleanly; bracket tags for vocal arrangement
  are reliable.

## German boom-bap hip-hop / Sprechgesang

- **Signature directives**: "German boom-bap hip-hop, late-90s / early-2000s golden era,
  ~92 BPM, warm dusty drums (kick, crisp snare on 2 and 4, soft shuffled hi-hats),
  sampled jazz-funk loop with Rhodes chords and muted trumpet stabs, upright bass groove,
  vinyl crackle, MPC-style swing, conversational Sprechgesang delivery." Words **"MPC"**
  and **"Sprechgesang"** carry a lot of weight.
- **Default failure**: drifts modern (trap-leaning hi-hats, 808s, polished mix). German
  pronunciation Americanizes in v4.5.
- **Fix**: "keine Trap-Elemente, keine 808er, klassische 90er-Boom-Bap-Drums,
  MPC-style Sampling, vinyl crackle." Vocal: "nasal, slightly raspy, animated mid-high
  voice, cheeky bouncy delivery, lots of internal rhymes."
- **v5 advantage**: handles German pronunciation naturally; compound words don't get
  mangled.

## Ballermann / Schlager party

- **Signature directives**: "German Ballermann Schlager, Mega Park bierzelt energy,
  ~128 BPM, four-on-the-floor kick, cheesy pitched-up sawtooth synth lead, two-chord
  progression in major key, drunk-crowd singalong, simple chant melody, stupid fun,
  cheesy not classy." The directives **"cheesy not classy"**, **"dumb fun"**, and
  **"Mega Park"** are surprisingly load-bearing.
- **Default failure**: Suno tries to elevate it to tasteful Schlager-pop (Andrea Berg
  ballad territory) — too musical, too earnest.
- **Fix**: lean harder into vulgarity: "no elegance, no taste, dumb party hit, sloppy
  singalong, shouty crowd vocals, hand claps, Mallorca after-ski energy." Lyrics
  must be **slogans not stories** — repetitive chants ("klein, klein, klein!" / "weg,
  weg, weg!"), short lines, exact repetition.
- **No need to negate elsewhere** — vulgarity is the goal; let Suno overcompress the mix.

## American skate-punk / pop-punk

- **Signature directives**: "American skate-punk and pop-punk, late-90s American Pie
  soundtrack era, ~172 BPM, palm-muted verse guitars exploding into huge open chorus
  power chords, tight pop-punk drum kit, walking eighth-note bass, snotty nasal male
  lead vocal with bratty teenage attitude, gang-vocal hooks." References that work
  cleanly: "Hi-Standard California Dreaming", "Sum 41", "New Found Glory" — pair with
  a song title where possible.
- **Default failure**: over-polishes into modern pop-rock; vocals come out clean and
  earnest instead of bratty.
- **Fix**: "NOT pop rock, NOT modern radio rock, lo-fi punk production, slightly sloppy
  not polished, crunchy distorted guitars, snotty bratty vocal — never clean, never
  earnest." For count-offs that v4.5 mangles ("One! Two! Three! Four!"), substitute
  `[Drum Stick Click x4]` on its own line.
- **v5 advantage**: bratty vocal delivery lands more reliably; gang-vocal stacking
  cleaner.

## Bilingual Y2K electro hip-hop (m-flo / Teriyaki Boyz style)

- **Signature directives**: "Y2K bilingual electro hip-hop, ~110 BPM, glossy minimal
  production, tight danceable groove, clean turntable scratches, smooth fast male
  rapper alternating with airy female melodic hook, Japanese / English code-switching,
  early-2000s J-pop production sheen."
- **Default failure**: too maximalist or chaotic; one vocalist dominates instead of
  trade-off; Japanese mispronounced in v4.5.
- **Fix**: name the vocal arrangement with bracket tags clearly: `[Male, Fast Rap]`
  → `[Female, Melodic Hook]` on alternating lines. Keep code-switching organic — sparse
  Japanese phrases ("nani ga hitsuyou", "Kirei ni") read better than dense bilingual
  writing that feels like costume.
- **v5 advantage**: Japanese pronunciation correct; rap/sing distinction holds cleanly.

## 1970s soft rock / Fleetwood Mac

- **Signature directives**: "1970s soft rock, ~116 BPM, warm 1970s studio sound, jangly
  clean electric guitars, Wurlitzer keys, tight pocket drumming, male and female lead
  vocal trade-offs with layered harmonies, bittersweet but uplifting, no modern pop
  polish, no EDM elements."
- **Default failure**: drifts modern (clean digital sheen, polished pop-rock mix);
  loses the male/female harmony interplay.
- **Fix**: emphasize harmony as core: "harmonies are the song, layered male and female
  vocals throughout, vintage tape compression, analog warmth." Long lyrical lines work
  here — these match the melodic phrasing of the genre. Imagery over mechanics
  ("branches", "weight", "silence" — not "dependencies", "build step").
- **v5 advantage**: layered harmony stacking cleaner; intimate vocal delivery more
  honest.

## Progressive folk-EDM / Avicii

- **Signature directives**: "progressive folk-EDM in Avicii style, ~124 BPM, euphoric
  drop with big melodic lead synth, sidechained pads, four-on-the-floor kick, female
  lead vocal with emotional, powerful, bright and slightly raspy tone, soaring high
  notes in the chorus, big layered chorus vocals." Specify vocal range ("soaring high
  notes") explicitly.
- **Default failure**: drop is anticlimactic; lead synth goes generic; emotional arc
  flattens.
- **Fix**: structure the lyrics for the arc — verse (problem) → pre-chorus (realization)
  → chorus (uplift) → drop (euphoria). Use metaphor-heavy lyrics, not literal. Tag
  the drop explicitly: `[Drop]` on its own line, then `[Big lead synth, sidechain pumping,
  no vocals — instrumental drop]`.
- **v5 advantage**: festival-drop dynamics land more naturally.

## Outlaw country / honky-tonk comedy

- **Signature directives**: "outlaw country / honky-tonk, ~95 BPM, acoustic guitar
  strumming, pedal steel licks, bar piano, bass walking, brushed drums, rough sarcastic
  male vocal, slightly drunk delivery, self-deprecating humor, profanity allowed."
- **Default failure**: sounds too clean / pop-country (Nashville pop) instead of
  outlaw / honky-tonk.
- **Fix**: "no modern pop-country, no Nashville polish, raw bar-room production, slightly
  out-of-tune piano, dusty mix." Spoken intro/outro ad-libs work great in this genre:
  `[Spoken]` "Well hell, this one's called..."
- **Lyrics**: simple AABB or AAAB rhymes; metaphors from drinking and rural life;
  embrace profanity ("damn", "shit", "bullshit" generally pass).

## Indie folk / Bon Iver

- **Signature directives**: "indie folk acoustic ballad, ~76 BPM, fingerpicked steel-
  string acoustic guitar, soft male lead vocal — breathy, intimate, close-mic, tape
  hiss, sparse arrangement, dynamics stay low, like Bon Iver For Emma." Reference + song
  is much stronger than reference alone.
- **Default failure**: anthemic Mumford-style stomp-clap; vocals come out clean and
  earnest instead of breathy and intimate.
- **Fix**: explicit and repeated: "never anthemic, never stomp-clap, never Imagine
  Dragons, dynamics stay low and intimate, no big drums, no crescendo." For wordless
  humming sections, use `[Closed-mouth humming, no syllables]` on its own line —
  `[Hummed]` alone gets replaced with sung "ooh"s.
- **v5 advantage**: intimate breathy delivery much more reliable.

## Ambient / minimal / neoclassical

- **Signature directives**: "neoclassical ambient, ~60 BPM, felt piano, sparse
  arrangement, long sustained notes, room sound, like Nils Frahm Felt or Max Richter."
- **Default failure**: adds drums, percussion, melodic hooks unbidden; drifts toward
  cinematic trailer music with BRAAAM hits.
- **Fix**: aggressive negation: "no drums, no percussion, no melodic hook, no crescendo,
  no Inception BRAAAM, sparse and still, dynamics never rise." For full stillness,
  toggle Instrumental on; lyrics field stays empty.
- **v5 advantage**: respects "absolutely no" constraints more reliably.

## Lo-fi hip-hop

- **Signature directives**: "lo-fi hip-hop, ~75 BPM, MPC-style swung drums, dusty
  jazz-loop sample, vinyl crackle, warm sub bass, rainy-day mood." **"MPC-style"** and
  **"vinyl crackle"** are the magic phrases.
- **Default failure**: drifts toward chopped-vocal cliché (the ChilledCow visual-radio
  sound) or modern trap.
- **Fix**: "no chopped vocal samples, no modern trap, classic instrumental boom-bap,
  warm tape saturation, slow MPC swing."
- **No vocal needed**: Instrumental toggle on; this genre is usually wordless.
