/* Pattern: tree — a branching structure that grows one level per click.
   Shape: branching / search / combinatorial explosion. Fragments: one per level below the root.
   <div class="figure" data-pattern="tree"><script type="application/json">
     { "depth": 4, "branching": 2, "labels": ["move", "reply", "reply", "…"], "path": [0, 1, 1] }
   <\/script></div>
   path = child index chosen at each level; those nodes stay bright, the rest dim.
   Island fragments needed: depth - 1 */
deck.patterns.tree = function (host, props, d) {
  var h = d.h, depth = props.depth || 4, b = props.branching || 2, labels = props.labels || [], path = props.path || null;
  var W = 1600, H = 640, top = 50, bottom = H - 50, r = 14, TW = labels.length ? W - 440 : W; // gutter for level labels
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  var levelY = function (l) { return depth > 1 ? top + ((bottom - top) * l) / (depth - 1) : top; };
  var onPath = function (level, index) { // index in level = base-b digits of the path
    if (!path) return true;
    var idx = 0; for (var l = 0; l < level; l++) idx = idx * b + (path[l] || 0);
    return idx === index;
  };
  for (var level = 0; level < depth; level++) {
    var count = Math.pow(b, level), rr = Math.max(4, r - level * 2);
    var g = level === 0 ? h("g", { "data-anim": "" }) : h("g", { "data-fragment": level, "data-effect": "pop", style: "transform-box: fill-box" });
    for (var i = 0; i < count; i++) {
      var x = (TW * (i + 0.5)) / count, y = levelY(level), bright = onPath(level, i);
      var op = bright ? 1 : 0.28;
      if (level > 0) {
        var px = (TW * (Math.floor(i / b) + 0.5)) / (count / b), py = levelY(level - 1);
        g.appendChild(h("line", { x1: px, y1: py, x2: x, y2: y, style: "stroke: var(--accent); stroke-width: " + (bright ? 3 : 1.5) + "; opacity: " + op }));
      }
      g.appendChild(h("circle", { cx: x, cy: y, r: rr, style: "fill: " + (bright ? "var(--accent)" : "var(--fg-3)") + "; opacity: " + op }));
    }
    if (labels[level]) g.appendChild(h("text", { x: W - 8, y: levelY(level) + 10, "text-anchor": "end", style: "font: 500 26px var(--font-mono); fill: var(--fg-2)" }, labels[level] + "  ×" + count));
    svg.appendChild(g);
  }
  host.appendChild(svg);
  host.setAttribute("data-fragments", depth - 1);
};
