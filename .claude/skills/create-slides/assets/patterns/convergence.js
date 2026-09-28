/* Pattern: convergence — several independent tracks meet at one spark.
   Shape: relational (many → one). Fragments: one per track, then one for the spark.
   <div class="figure" data-pattern="convergence"><script type="application/json">
     { "tracks": [ { "label": "Symbolic logic", "sub": "1956 →" }, { "label": "Neural nets" }, { "label": "Statistics" } ], "spark": "2012 · AlexNet" }
   <\/script></div>
   Island fragments needed: tracks.length + 1 */
deck.patterns.convergence = function (host, props, d) {
  var h = d.h, tracks = props.tracks || [], n = tracks.length;
  var W = 1600, H = 620, x0 = 60, xEnd = W - 470, yMid = H / 2, spread = n >= 4 ? 250 : 200; // right gutter holds the spark label
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  tracks.forEach(function (t, i) {
    var y = n > 1 ? yMid - spread + (2 * spread * i) / (n - 1) : yMid, color = d.color(i);
    var g = h("g", { "data-fragment": i + 1, "data-effect": "fade" });
    g.appendChild(h("path", { d: "M" + x0 + " " + y + " C " + (x0 + (xEnd - x0) * 0.55) + " " + y + ", " + (x0 + (xEnd - x0) * 0.75) + " " + yMid + ", " + xEnd + " " + yMid,
      "data-fragment": i + 1, "data-effect": "draw", style: "fill: none; stroke: " + color + "; stroke-width: 6; stroke-linecap: round" }));
    g.appendChild(h("text", { x: x0, y: y - 26, style: "font: 600 32px var(--font-display); fill: " + color }, t.label || ""));
    if (t.sub) g.appendChild(h("text", { x: x0, y: y + 44, style: "font: 400 26px var(--font-body); fill: var(--fg-2)" }, t.sub));
    svg.appendChild(g);
  });
  var spark = h("g", { "data-fragment": n + 1, "data-effect": "pop", style: "transform-box: fill-box" });
  spark.appendChild(h("circle", { cx: xEnd, cy: yMid, r: 34, style: "fill: var(--accent); filter: drop-shadow(0 0 24px var(--accent))" }));
  spark.appendChild(h("circle", { cx: xEnd, cy: yMid, r: 14, style: "fill: var(--bg)" }));
  if (props.spark) spark.appendChild(h("text", { x: xEnd + 60, y: yMid + 12, style: "font: 700 34px var(--font-display); fill: var(--fg)" }, props.spark));
  svg.appendChild(spark);
  host.appendChild(svg);
  host.setAttribute("data-fragments", n + 1);
};
