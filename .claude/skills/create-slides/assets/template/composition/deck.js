/* ─────────────────────────────────────────────────────────────────────────
   deck.js — seek-driven deck engine for HyperFrames slideshows.

   What it does
   • Reads scenes from the DOM (.scene-frame[data-composition-id][data-start][data-duration])
     and fragment hold times from the JSON island — nothing is duplicated in JS.
   • Registers the paused root GSAP timeline at window.__timelines.root.
   • On every seek: toggles .is-active on the scene for time t, and shows/hides
     every [data-fragment="k"] element whose hold time fragments[k-1] <= t.
   • State is always correct for a plain seek (check/snapshot). When the state
     *changes* while a scene is active, a short imperative GSAP transition plays
     (the slideshow player navigates by pure seek, so this is the only way to
     get motion on a click).
   • Renders [data-pattern] figures from data (see patterns/*.js) before the
     first seek, so pattern-generated fragments take part like any other.
   • Posts the scene manifest to the parent so <hyperframes-slideshow> can
     discover slides without an injected engine runtime.

   Effects (data-effect on [data-anim] or [data-fragment] elements):
     rise (default) | fade | pop | draw (SVG stroke) | grow (scaleY from data-origin)
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // Mirror the wrapper's ambient flag so the composition goes transparent only there.
  try {
    if (parent !== window && parent.document.documentElement.hasAttribute("data-ambient")) {
      document.documentElement.classList.add("ambient");
    }
  } catch (e) { /* cross-origin parent: keep opaque */ }

  var deck = (window.deck = window.deck || {});
  deck.patterns = deck.patterns || {};
  // Under automation (hyperframes check/snapshot drive Chrome via puppeteer) jump straight to the
  // final state so every sampled frame is deterministic. Real browsers get the transitions.
  var INSTANT = navigator.webdriver === true;
  deck.instant = INSTANT;

  // Tiny SVG/HTML element helper used by patterns: h("g", {class:"x"}, child, ...)
  var SVG_NS = "http://www.w3.org/2000/svg";
  deck.h = function (tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    for (var k in attrs || {}) {
      if (attrs[k] === null || attrs[k] === undefined) continue;
      el.setAttribute(k, String(attrs[k]));
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) el.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  };
  deck.color = function (i) { return "var(--c" + ((i % 6) + 1) + ")"; };

  function readProps(el) {
    var script = el.querySelector('script[type="application/json"]');
    var raw = script ? script.textContent : el.getAttribute("data-props") || "{}";
    try { return JSON.parse(raw); } catch (e) { console.error("[deck] bad props on", el, e); return {}; }
  }

  function renderPatterns() {
    var hosts = document.querySelectorAll("[data-pattern]");
    Array.prototype.forEach.call(hosts, function (el) {
      var name = el.getAttribute("data-pattern");
      var fn = deck.patterns[name];
      if (!fn) { console.error("[deck] unknown pattern: " + name + " (did you include patterns/" + name + ".js?)"); return; }
      var props = readProps(el);
      Array.prototype.slice.call(el.children).forEach(function (c) { if (c.tagName !== "SCRIPT") el.removeChild(c); });
      fn(el, props, deck);
    });
  }

  // ── Effects ──────────────────────────────────────────────────────────────
  function prepareDraw(el) {
    if (el.__len) return el.__len;
    var len = 0;
    try { len = typeof el.getTotalLength === "function" ? el.getTotalLength() : 0; } catch (e) { len = 0; }
    if (!len) len = 1000;
    el.__len = len;
    el.style.strokeDasharray = len + " " + len;
    return len;
  }

  function apply(els, on, animate) {
    if (INSTANT) animate = false;
    Array.prototype.forEach.call(els, function (el) {
      var fx = el.getAttribute("data-effect") || "rise";
      var origin = el.getAttribute("data-origin") || "50% 100%";
      if (fx === "draw") {
        var len = prepareDraw(el);
        if (!animate) { gsap.set(el, { opacity: on ? 1 : 0, strokeDashoffset: on ? 0 : len }); return; }
        if (on) gsap.fromTo(el, { opacity: 1, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut", overwrite: true });
        else gsap.to(el, { opacity: 0, duration: 0.2, overwrite: true });
        return;
      }
      if (fx === "grow") {
        gsap.set(el, { transformOrigin: origin });
        if (!animate) { gsap.set(el, { opacity: on ? 1 : 0, scaleY: on ? 1 : 0 }); return; }
        if (on) gsap.fromTo(el, { opacity: 1, scaleY: 0 }, { scaleY: 1, duration: 0.55, ease: "power3.out", overwrite: true });
        else gsap.to(el, { opacity: 0, duration: 0.2, overwrite: true });
        return;
      }
      if (fx === "pop") {
        gsap.set(el, { transformOrigin: "50% 50%" });
        if (!animate) { gsap.set(el, { opacity: on ? 1 : 0, scale: 1 }); return; }
        if (on) gsap.fromTo(el, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.6)", overwrite: true });
        else gsap.to(el, { opacity: 0, duration: 0.2, overwrite: true });
        return;
      }
      var y = fx === "fade" ? 0 : 18;
      if (!animate) { gsap.set(el, { opacity: on ? 1 : 0, y: 0 }); return; }
      if (on) gsap.fromTo(el, { opacity: 0, y: y }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out", overwrite: true });
      else gsap.to(el, { opacity: 0, duration: 0.2, overwrite: true });
    });
  }

  function enter(scene) {
    var anim = scene.el.querySelectorAll("[data-anim]");
    if (!anim.length) return;
    gsap.killTweensOf(anim);
    if (INSTANT) { gsap.set(anim, { opacity: 1, y: 0 }); return; }
    gsap.fromTo(anim, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out", overwrite: true });
  }

  // ── Boot ────────────────────────────────────────────────────────────────
  function boot() {
    var rootEl = document.getElementById("root");
    var duration = parseFloat(rootEl.getAttribute("data-duration"));

    // index.html registers window.__timelines.root inline (the linter needs to see it there); create it only if missing.
    window.__timelines = window.__timelines || {};
    var tl = window.__timelines["root"];
    if (!tl) { tl = gsap.timeline({ paused: true }); tl.to({}, { duration: duration }); window.__timelines["root"] = tl; }

    var islandEl = document.querySelector('script[type="application/hyperframes-slideshow+json"]');
    var island = { slides: [] };
    try { island = JSON.parse(islandEl.textContent); } catch (e) { console.error("[deck] island JSON invalid", e); }
    var fragmentsById = {};
    function collect(list) { (list || []).forEach(function (s) { fragmentsById[s.sceneId] = s.fragments || []; }); }
    collect(island.slides);
    (island.slideSequences || []).forEach(function (seq) { collect(seq.slides); });

    renderPatterns();

    var scenes = Array.prototype.map.call(document.querySelectorAll(".scene-frame[data-composition-id]"), function (el) {
      var id = el.getAttribute("data-composition-id");
      var start = parseFloat(el.getAttribute("data-start"));
      var dur = parseFloat(el.getAttribute("data-duration"));
      return { id: id, el: el, start: start, end: start + dur, duration: dur, fragments: fragmentsById[id] || [], shown: [] };
    });
    deck.scenes = scenes;

    // Warn early about fragment markup the island does not know about (a dead click waiting to happen).
    scenes.forEach(function (s) {
      var max = 0;
      Array.prototype.forEach.call(s.el.querySelectorAll("[data-fragment]"), function (el) { max = Math.max(max, parseInt(el.getAttribute("data-fragment"), 10) || 0); });
      if (max > s.fragments.length) console.warn("[deck] scene \"" + s.id + "\" has data-fragment up to " + max + " but the island lists " + s.fragments.length + " fragment time(s)");
      if (s.fragments.length > max) console.warn("[deck] scene \"" + s.id + "\" lists " + s.fragments.length + " fragment time(s) but markup only goes up to data-fragment=" + max);
    });

    var activeId = null;
    function update(t) {
      scenes.forEach(function (scene) {
        var active = t >= scene.start && t < scene.end;
        scene.el.classList.toggle("is-active", active);
        if (active && activeId !== scene.id) { activeId = scene.id; enter(scene); }
        scene.fragments.forEach(function (time, i) {
          var on = active && t >= time;
          var was = scene.shown[i] || false;
          if (on !== was) {
            scene.shown[i] = on;
            apply(scene.el.querySelectorAll('[data-fragment="' + (i + 1) + '"]'), on, active);
          }
        });
      });
    }
    deck.update = update;
    window.__hfSetTime = update;
    update(0);
    tl.eventCallback("onUpdate", function () { update(tl.time()); });

    function postTimeline() {
      try {
        parent.postMessage({
          source: "hf-preview",
          type: "timeline",
          durationInFrames: Math.round(duration * 30),
          scenes: scenes.map(function (s) { return { id: s.id, start: s.start, duration: s.duration }; })
        }, "*");
      } catch (e) { /* no parent */ }
    }
    if (document.readyState === "complete") setTimeout(postTimeline, 300);
    else window.addEventListener("load", function () { setTimeout(postTimeline, 300); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
