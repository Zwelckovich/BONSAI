/* Pattern: cycle-loop — a repeating process as nodes on a ring with arrows.
   Shape: looping / cyclic. Fragments: one per node (its outgoing arc appears with the next node).
   <div class="figure" data-pattern="cycle-loop"><script type="application/json">
     { "nodes": [ { "label": "Perceive" }, { "label": "Think" }, { "label": "Act" }, { "label": "Observe" } ], "center": "Agent loop" }
   <\/script></div>
   Island fragments needed: nodes.length */
deck.patterns["cycle-loop"] = function (host, props, d) {
  var h = d.h, nodes = props.nodes || [], n = nodes.length;
  var W = 1000, H = 760, cx = W / 2, cy = H / 2, R = 270, nodeR = 84;
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  var defs = h("defs", {});
  defs.appendChild(h("marker", { id: "cl-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" },
    h("path", { d: "M0 0 L10 5 L0 10 z", style: "fill: var(--accent)" })));
  svg.appendChild(defs);
  function pos(i) { var a = -Math.PI / 2 + (2 * Math.PI * i) / n; return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a: a }; }
  nodes.forEach(function (node, i) {
    var p = pos(i), q = pos((i + 1) % n);
    var g = h("g", { "data-fragment": i + 1, "data-effect": "pop", style: "transform-box: fill-box" });
    g.appendChild(h("circle", { cx: p.x, cy: p.y, r: nodeR, style: "fill: var(--accent-soft); stroke: var(--accent); stroke-width: 3" }));
    g.appendChild(h("text", { x: p.x, y: p.y + 11, "text-anchor": "middle", style: "font: 600 31px var(--font-display); fill: var(--fg)" }, node.label || ""));
    svg.appendChild(g);
    // arc from node i to node i+1, trimmed so the arrowhead lands on the rim
    var gap = (nodeR + 14) / R, a1 = p.a + gap, a2 = q.a - gap;
    if (a2 <= a1) a2 += 2 * Math.PI;
    var x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1), x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
    var large = a2 - a1 > Math.PI ? 1 : 0;
    svg.appendChild(h("path", { d: "M" + x1 + " " + y1 + " A" + R + " " + R + " 0 " + large + " 1 " + x2 + " " + y2, "marker-end": "url(#cl-arrow)",
      "data-fragment": ((i + 1) % n) + 1, "data-effect": "draw", style: "fill: none; stroke: var(--accent); stroke-width: 4; opacity: .9" }));
  });
  if (props.center) svg.appendChild(h("text", { x: cx, y: cy + 12, "text-anchor": "middle", "data-anim": "", style: "font: 500 32px var(--font-body); fill: var(--fg-2); letter-spacing: .08em; text-transform: uppercase" }, props.center));
  host.appendChild(svg);
  host.setAttribute("data-fragments", n);
};
