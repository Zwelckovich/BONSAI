/* Pattern: nested-sets — containment / taxonomy as concentric circles (outer → inner).
   Shape: hierarchical. Fragments: one per ring, outermost first.
   <div class="figure" data-pattern="nested-sets"><script type="application/json">
     { "rings": [ { "label": "AI", "sub": "any cognitive task" }, { "label": "ML" }, { "label": "Neural nets" }, { "label": "Deep learning" } ] }
   <\/script></div>
   Island fragments needed: rings.length */
deck.patterns["nested-sets"] = function (host, props, d) {
  var h = d.h, rings = props.rings || [], n = rings.length;
  // Circles share their bottom point (tangent), so each ring's label band at the top stays clear.
  var W = 1000, H = 760, cx = W / 2, bottom = H - 30, rMax = 360, band = 86, rMin = Math.max(70, rMax - band * (n - 1));
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  rings.forEach(function (ring, i) {
    var r = n > 1 ? rMax - (rMax - rMin) * (i / (n - 1)) : rMax, cy = bottom - r, top = cy - r;
    var color = d.color(i);
    var g = h("g", { "data-fragment": i + 1, "data-effect": "pop", style: "transform-box: fill-box" });
    g.appendChild(h("circle", { cx: cx, cy: cy, r: r, style: "fill: " + color + "; fill-opacity: .09; stroke: " + color + "; stroke-width: 3" }));
    g.appendChild(h("text", { x: cx, y: top + 40, "text-anchor": "middle", style: "font: 700 32px var(--font-display); fill: " + color }, ring.label || ""));
    if (ring.sub) g.appendChild(h("text", { x: cx, y: top + 70, "text-anchor": "middle", style: "font: 400 23px var(--font-body); fill: var(--fg-2)" }, ring.sub));
    svg.appendChild(g);
  });
  host.appendChild(svg);
  host.setAttribute("data-fragments", n);
};
