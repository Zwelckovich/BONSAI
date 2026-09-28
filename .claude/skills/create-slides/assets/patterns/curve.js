/* Pattern: curve — one smooth relationship (decay, growth, sigmoid, or explicit points) with optional markers.
   Shape: quantitative trend / spatial metaphor ("downhill", "plateau"). Fragments: 1 for the curve, then one per marker.
   <div class="figure" data-pattern="curve"><script type="application/json">
     { "kind": "sigmoid", "xLabel": "compute", "yLabel": "capability",
       "markers": [ { "x": 0.35, "label": "GPT-2" }, { "x": 0.7, "label": "GPT-4" } ] }
   <\/script></div>
   kind: "decay" | "growth" | "sigmoid" | "linear"  or  "points": [[x,y], …] with x,y in 0..1.
   Island fragments needed: 1 + markers.length */
deck.patterns.curve = function (host, props, d) {
  var h = d.h, W = 1600, H = 620, L = 120, R = 60, T = 40, B = 90;
  var markers = props.markers || [];
  var fn = { decay: function (x) { return Math.exp(-3.2 * x); }, growth: function (x) { return (Math.exp(3.2 * x) - 1) / (Math.exp(3.2) - 1); },
             sigmoid: function (x) { return 1 / (1 + Math.exp(-12 * (x - 0.5))); }, linear: function (x) { return x; } }[props.kind || "sigmoid"];
  var pts = props.points || Array.from({ length: 61 }, function (_, i) { var x = i / 60; return [x, fn(x)]; });
  var px = function (x) { return L + x * (W - L - R); }, py = function (y) { return H - B - y * (H - T - B); };
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  var axes = h("g", { "data-anim": "" });
  axes.appendChild(h("path", { d: "M" + L + " " + T + " V" + (H - B) + " H" + (W - R), style: "fill: none; stroke: var(--border); stroke-width: 3" }));
  if (props.xLabel) axes.appendChild(h("text", { x: W - R, y: H - B + 50, "text-anchor": "end", style: "font: 500 28px var(--font-body); fill: var(--fg-2); letter-spacing: .06em; text-transform: uppercase" }, props.xLabel));
  if (props.yLabel) axes.appendChild(h("text", { x: L - 16, y: T + 6, "text-anchor": "end", style: "font: 500 28px var(--font-body); fill: var(--fg-2); letter-spacing: .06em; text-transform: uppercase" }, props.yLabel));
  svg.appendChild(axes);
  var dPath = pts.map(function (p, i) { return (i ? "L" : "M") + px(p[0]).toFixed(1) + " " + py(p[1]).toFixed(1); }).join(" ");
  svg.appendChild(h("path", { d: dPath, "data-fragment": 1, "data-effect": "draw", style: "fill: none; stroke: var(--accent); stroke-width: 7; stroke-linecap: round; stroke-linejoin: round" }));
  markers.forEach(function (m, i) {
    var y = m.y !== undefined ? m.y : (props.points ? 0 : fn(m.x));
    var g = h("g", { "data-fragment": i + 2, "data-effect": "pop", style: "transform-box: fill-box" });
    g.appendChild(h("line", { x1: px(m.x), y1: py(y), x2: px(m.x), y2: H - B, style: "stroke: var(--fg-3); stroke-width: 2; stroke-dasharray: 8 10" }));
    g.appendChild(h("circle", { cx: px(m.x), cy: py(y), r: 16, style: "fill: var(--bg); stroke: var(--accent); stroke-width: 5" }));
    g.appendChild(h("text", { x: px(m.x), y: py(y) - 34, "text-anchor": "middle", style: "font: 600 30px var(--font-display); fill: var(--fg)" }, m.label || ""));
    svg.appendChild(g);
  });
  host.appendChild(svg);
  host.setAttribute("data-fragments", 1 + markers.length);
};
