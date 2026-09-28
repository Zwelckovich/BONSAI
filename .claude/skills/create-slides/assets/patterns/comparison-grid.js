/* Pattern: comparison-grid — 2–4 parallel things with attributes, as cards (HTML, not SVG).
   Shape: comparison. Fragments: one per column (or 0 with "fragments": false).
   <div data-pattern="comparison-grid"><script type="application/json">
     { "columns": [
         { "title": "CPU", "icon": "cpu", "points": ["Few fast cores", "Serial logic"] },
         { "title": "GPU", "icon": "layers", "points": ["Thousands of cores", "Parallel math"] } ],
       "fragments": true }
   <\/script></div>
   Island fragments needed: columns.length (or 0) */
deck.patterns["comparison-grid"] = function (host, props) {
  var cols = props.columns || [], n = cols.length, frag = props.fragments !== false;
  var wrap = document.createElement("div");
  wrap.className = "cols cols-" + Math.min(Math.max(n, 2), 4);
  cols.forEach(function (c, i) {
    var card = document.createElement("div");
    card.className = "card";
    if (frag) { card.setAttribute("data-fragment", i + 1); card.setAttribute("data-effect", "rise"); }
    else card.setAttribute("data-anim", "");
    var html = "";
    if (c.icon) html += '<svg class="icon"><use href="assets/icons.svg#i-' + c.icon + '"/></svg>';
    html += "<h3>" + (c.title || "") + "</h3>";
    (c.points || []).forEach(function (p) { html += "<p>" + p + "</p>"; });
    card.innerHTML = html;
    wrap.appendChild(card);
  });
  host.appendChild(wrap);
  host.setAttribute("data-fragments", frag ? n : 0);
};
