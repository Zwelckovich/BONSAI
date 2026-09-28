/* Pattern: chart — bar or line chart with value labels, one series per fragment.
   Shape: quantitative comparison / trend. Fragments: series.length.
   <div class="figure" data-pattern="chart"><script type="application/json">
     { "type": "bar", "categories": ["2010", "2012", "2014"], "unit": "%",
       "series": [ { "name": "Top-5 error", "values": [28, 16, 7] } ] }
   <\/script></div>
   Options: yMax (auto), grid (true), valueLabels (true), type "bar" | "line".
   Island fragments needed: series.length */
deck.patterns.chart = function (host, props, d) {
  var h = d.h, W = 1600, H = 620, L = 40, R = 40, T = 70, B = 80;
  var cats = props.categories || [], series = props.series || [], type = props.type || "bar", unit = props.unit || "";
  var yMax = props.yMax || Math.max.apply(null, series.reduce(function (a, s) { return a.concat(s.values); }, [1])) * 1.15;
  var n = cats.length, m = series.length, plotW = W - L - R, plotH = H - T - B;
  var px = function (i) { return L + (plotW * (i + 0.5)) / n; }, py = function (v) { return T + plotH * (1 - v / yMax); };
  var svg = h("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet" });
  var frame = h("g", { "data-anim": "" });
  if (props.grid !== false) for (var g = 1; g <= 4; g++) frame.appendChild(h("line", { x1: L, y1: py((yMax * g) / 4), x2: W - R, y2: py((yMax * g) / 4), style: "stroke: var(--border); stroke-width: 1.5; stroke-dasharray: 4 10" }));
  frame.appendChild(h("line", { x1: L, y1: H - B, x2: W - R, y2: H - B, style: "stroke: var(--border); stroke-width: 3" }));
  cats.forEach(function (c, i) { frame.appendChild(h("text", { x: px(i), y: H - B + 46, "text-anchor": "middle", style: "font: 500 28px var(--font-body); fill: var(--fg-2)" }, String(c))); });
  svg.appendChild(frame);
  var barW = Math.min(120, (plotW / n) * 0.6 / m);
  series.forEach(function (s, si) {
    var color = s.color || d.color(si);
    var grp = h("g", { "data-fragment": si + 1, "data-effect": type === "bar" ? "fade" : "fade" });
    if (type === "bar") {
      s.values.forEach(function (v, i) {
        var x = px(i) - (barW * m) / 2 + barW * si, y = py(v);
        grp.appendChild(h("rect", { x: x + 4, y: y, width: barW - 8, height: H - B - y, rx: 8, "data-fragment": si + 1, "data-effect": "grow", "data-origin": "50% 100%", style: "fill: " + color + "; transform-box: fill-box" }));
        if (props.valueLabels !== false && v) grp.appendChild(h("text", { x: x + barW / 2, y: y - 16, "text-anchor": "middle", style: "font: 600 30px var(--font-mono); fill: var(--fg)" }, v + unit));
      });
    } else {
      var dPath = s.values.map(function (v, i) { return (i ? "L" : "M") + px(i) + " " + py(v); }).join(" ");
      grp.appendChild(h("path", { d: dPath, "data-fragment": si + 1, "data-effect": "draw", style: "fill: none; stroke: " + color + "; stroke-width: 6; stroke-linejoin: round; stroke-linecap: round" }));
      s.values.forEach(function (v, i) {
        grp.appendChild(h("circle", { cx: px(i), cy: py(v), r: 11, style: "fill: var(--bg); stroke: " + color + "; stroke-width: 4" }));
        if (props.valueLabels !== false && v !== null) grp.appendChild(h("text", { x: px(i), y: py(v) - 26, "text-anchor": "middle", style: "font: 600 28px var(--font-mono); fill: var(--fg)" }, v + unit));
      });
    }
    if (m > 1 || s.name) grp.appendChild(h("text", { x: W - R, y: T - 30 + si * 0, "text-anchor": "end", "dx": -(m - 1 - si) * 0, style: "font: 600 28px var(--font-body); fill: " + color + "; opacity: " + (m > 1 ? 1 : 0.9) }, m > 1 ? "■ " + s.name : s.name || ""));
    svg.appendChild(grp);
  });
  if (m > 1) { // spread the legend entries so they don't overlap
    var legends = svg.querySelectorAll("g > text[text-anchor='end']");
    Array.prototype.forEach.call(legends, function (t, i) { t.setAttribute("x", W - R - (m - 1 - i) * 300); });
  }
  host.appendChild(svg);
  host.setAttribute("data-fragments", m);
};
