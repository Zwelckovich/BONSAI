/* Pattern: timeline — 3–8 dated events on a horizontal rail.
   Shape: sequence in time. Fragments: one per event (rail is part of the entrance).
   <div class="figure" data-pattern="timeline"><script type="application/json">
     { "events": [ { "year": "1956", "title": "Dartmouth workshop", "detail": "The term AI is coined." }, … ] }
   <\/script></div>
   Island fragments needed: events.length */
deck.patterns.timeline = function (host, props, d) {
  var h = d.h, W = 1600, H = 620, events = props.events || [];
  var padX = 90, railY = 330, n = events.length;
  var step = n > 1 ? (W - 2 * padX) / (n - 1) : 0;
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  svg.appendChild(h("line", { x1: padX - 40, y1: railY, x2: W - padX + 40, y2: railY, style: "stroke: var(--border); stroke-width: 3", "data-anim": "", "data-effect": "draw" }));
  events.forEach(function (ev, i) {
    var x = padX + step * i, up = i % 2 === 0;
    var g = h("g", { "data-fragment": i + 1, "data-effect": "rise" });
    g.appendChild(h("line", { x1: x, y1: railY, x2: x, y2: up ? railY - 60 : railY + 60, style: "stroke: var(--accent); stroke-width: 3; opacity: .7" }));
    g.appendChild(h("circle", { cx: x, cy: railY, r: 16, style: "fill: var(--bg); stroke: var(--accent); stroke-width: 5" }));
    var ty = up ? railY - 150 : railY + 120;
    g.appendChild(h("text", { x: x, y: ty, "text-anchor": "middle", style: "font: 600 30px var(--font-mono); fill: var(--accent); letter-spacing: .04em" }, String(ev.year || "")));
    g.appendChild(h("text", { x: x, y: ty + 48, "text-anchor": "middle", style: "font: 600 36px var(--font-display); fill: var(--fg)" }, ev.title || ""));
    if (ev.detail) g.appendChild(h("text", { x: x, y: ty + 90, "text-anchor": "middle", style: "font: 400 27px var(--font-body); fill: var(--fg-2)" }, ev.detail));
    svg.appendChild(g);
  });
  host.appendChild(svg);
  host.setAttribute("data-fragments", n);
};
