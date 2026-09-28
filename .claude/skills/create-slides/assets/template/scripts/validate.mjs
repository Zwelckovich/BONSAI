// Validation loop for a create-slides deck.
//   node scripts/validate.mjs            lint → check --at <hold times> → snapshot --at <hold times>
//   node scripts/validate.mjs --all      also sample every fragment state, not just the last one
//   node scripts/validate.mjs --snapshot-only
// Hold times come from the island + scene markup, so the check samples exactly the frames
// a presenter will hold on (and never trips sweep_static on still slides).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const COMP = "composition";
const html = readFileSync(`${COMP}/index.html`, "utf8");
const all = process.argv.includes("--all");
const snapshotOnly = process.argv.includes("--snapshot-only");

const islandMatch = html.match(/<script type="application\/hyperframes-slideshow\+json">([\s\S]*?)<\/script>/i);
if (!islandMatch) { console.error("no slideshow island in composition/index.html"); process.exit(1); }
const island = JSON.parse(islandMatch[1]);

// Mirror the island into the wrapper so both copies never drift.
if (existsSync("index.html")) {
  const wrapper = readFileSync("index.html", "utf8");
  const synced = wrapper.replace(/(<script type="application\/hyperframes-slideshow\+json">)[\s\S]*?(<\/script>)/i, (_, a, b) => `${a}${islandMatch[1]}${b}`);
  if (synced !== wrapper) { writeFileSync("index.html", synced); console.log("island mirrored into index.html"); }
}

const scenes = new Map();
for (const m of html.matchAll(/<(?:section|div)[^>]*class="[^"]*scene-frame[^"]*"[^>]*>/g)) {
  const tag = m[0];
  const id = tag.match(/data-composition-id="([^"]+)"/)?.[1];
  const start = parseFloat(tag.match(/data-start="([^"]+)"/)?.[1]);
  const dur = parseFloat(tag.match(/data-duration="([^"]+)"/)?.[1]);
  if (id) scenes.set(id, { start, end: start + dur });
}

const slides = [...island.slides, ...(island.slideSequences ?? []).flatMap((s) => s.slides)];
const rows = [];
let problems = 0;
for (const s of slides) {
  const sc = scenes.get(s.sceneId);
  if (!sc) { console.error(`island slide "${s.sceneId}" has no .scene-frame in the DOM`); problems++; continue; }
  const frags = s.fragments ?? [];
  if (frags.length === 0) rows.push({ id: s.sceneId, t: +(sc.start + 0.7).toFixed(2), state: "rest" });
  else {
    const list = all ? frags : [frags[frags.length - 1]];
    list.forEach((f, i) => rows.push({ id: s.sceneId, t: +(f + 0.05).toFixed(2), state: `fragment ${all ? i + 1 : frags.length}/${frags.length}` }));
  }
  // Static cross-check of data-fragment markup vs island (pattern-generated fragments are runtime-only and skipped).
  const block = html.slice(html.indexOf(`data-composition-id="${s.sceneId}"`));
  const sceneHtml = block.slice(0, block.search(/<\/section>|<\/div>\s*<!-- ══|<section /) || undefined);
  if (!/data-pattern=/.test(sceneHtml)) {
    const max = Math.max(0, ...[...sceneHtml.matchAll(/data-fragment="(\d+)"/g)].map((x) => +x[1]));
    if (max !== frags.length) { console.warn(`⚠ "${s.sceneId}": markup has data-fragment up to ${max}, island lists ${frags.length} fragment(s)`); problems++; }
  }
}
for (const id of scenes.keys()) if (!slides.some((s) => s.sceneId === id)) console.warn(`⚠ scene "${id}" is in the DOM but not in the island (unreachable)`);

const at = rows.map((r) => r.t).join(",");
console.log("hold times:");
rows.forEach((r, i) => console.log(`  ${String(i).padStart(2, "0")}  ${r.t.toFixed(2).padStart(7)} s  ${r.id}  (${r.state})`));

function run(args) {
  console.log(`\n$ hyperframes ${args.join(" ")}`);
  const r = spawnSync("npx", ["--no-install", "hyperframes", ...args], { stdio: "inherit", shell: true });
  return r.status ?? 1;
}

if (!snapshotOnly) {
  if (run(["lint", `./${COMP}`]) !== 0) { console.error("\n✗ lint failed — fix before check (a lint error silently disables layout + contrast audits)"); process.exit(1); }
  if (run(["check", `./${COMP}`, "--at", at]) !== 0) problems++;
}
if (run(["snapshot", `./${COMP}`, "--at", at, "--no-end"]) !== 0) problems++;

console.log(`\nsnapshots: ${COMP}/snapshots/frame-<index>-at-<time>s.png  (index = row above)`);
if (existsSync(`${COMP}/snapshots/contact-sheet.jpg`)) console.log(`contact sheet: ${COMP}/snapshots/contact-sheet.jpg`);
process.exit(problems ? 1 : 0);
