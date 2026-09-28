// Build composition/assets/icons.svg from lucide-static (ISC). Usage:
//   node icons.mjs <path-to-lucide-static/icons> <out.svg> [name ...]
// With no names, the curated default set below is used. Missing names are reported, not fatal.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DEFAULT = `brain cpu bot network workflow git-branch git-merge layers database server cloud code terminal
sparkles zap flame rocket lightbulb target compass map clock calendar timer history trending-up trending-down
bar-chart-3 line-chart pie-chart activity gauge infinity repeat refresh-cw shuffle arrow-right arrow-down arrow-up-right
check x alert-triangle info quote message-square users user eye search book-open file-text scale shield lock key globe
box package puzzle wrench settings gamepad-2 monitor smartphone mountain snowflake sun thermometer dollar-sign coins hash
binary braces layout-grid list-tree circle-dot orbit atom microscope flask-conical graduation-cap trophy hourglass`.split(/\s+/);

const [, , dir, out, ...names] = process.argv;
const list = names.length ? names : DEFAULT;
const symbols = [];
const missing = [];
for (const name of list) {
  const file = join(dir, `${name}.svg`);
  if (!existsSync(file)) { missing.push(name); continue; }
  const svg = readFileSync(file, "utf8");
  const inner = svg.replace(/<!--[\s\S]*?-->/g, "").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
  symbols.push(`  <symbol id="i-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">\n    ${inner.replace(/\n\s*/g, "\n    ")}\n  </symbol>`);
}
const sprite = `<!-- Icon sprite built from lucide-static (ISC license, https://lucide.dev). Use: <svg class="icon"><use href="assets/icons.svg#i-brain"/></svg> -->\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join("\n")}\n</svg>\n`;
writeFileSync(out, sprite);
console.log(`${symbols.length} icons -> ${out}`);
if (missing.length) console.log("missing:", missing.join(" "));
