// usage: node spill.mjs <out.json> — for each route x width, lists boxes whose in-flow children spill below the box's own bottom (fixed-height text blocks colliding with what follows)
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { getRoutes } from "./routes.mjs";
const WIDTHS = (process.env.WIDTHS ?? "1024,1100,1200,1280,1366,1439").split(",").map(Number);
const b = await chromium.launch(); const routes = getRoutes(); const jobs = routes.flatMap((r) => WIDTHS.map((w) => [r, w])); const res = []; let i = 0;
const probe = () => {
  const sel = (el) => el.tagName.toLowerCase() + (typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).filter((c) => /h-\[|min-h|aspect|flex|grid/.test(c)).slice(0, 3).join(".") : "");
  const out = [];
  for (const el of document.querySelectorAll("main *, footer *")) {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.position === "absolute" || cs.position === "fixed" || /(hidden|clip|auto|scroll)/.test(cs.overflowY)) continue;
    const r = el.getBoundingClientRect(); if (r.height < 20 || r.width < 20) continue;
    if (el.closest(".canvas-zoom, .zoom-1600")) continue; // pixel-canvas artboards are absolute-positioned by design
    for (const c of el.children) {
      const cc = getComputedStyle(c); if (cc.position === "absolute" || cc.position === "fixed" || cc.display === "none") continue;
      const cr = c.getBoundingClientRect(); if (cr.height === 0) continue;
      if (cr.bottom > r.bottom + 6 && !(cs.display === "flex" || cs.display === "grid") ) { out.push({ box: sel(el), h: Math.round(r.height), spill: Math.round(cr.bottom - r.bottom), text: (el.textContent || "").trim().slice(0, 40), y: Math.round(r.top + scrollY) }); break; }
      if (cr.bottom > r.bottom + 6 && /h-\[/.test(String(el.className))) { out.push({ box: sel(el), h: Math.round(r.height), spill: Math.round(cr.bottom - r.bottom), text: (el.textContent || "").trim().slice(0, 40), y: Math.round(r.top + scrollY) }); break; }
    }
    if (out.length > 6) break;
  }
  return out;
};
async function worker() { while (i < jobs.length) { const [route, w] = jobs[i++]; const ctx = await b.newContext({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" }); const p = await ctx.newPage();
  try { await p.goto("http://localhost:3200" + route, { waitUntil: "load", timeout: 60000 }); await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 700) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); } scrollTo(0, 0); }); await p.waitForTimeout(400); res.push({ route, w, spills: await p.evaluate(probe) }); } catch (e) { res.push({ route, w, error: e.message.slice(0, 80) }); } await ctx.close(); } }
await Promise.all([worker(), worker(), worker(), worker()]); await b.close();
writeFileSync(process.argv[2], JSON.stringify(res, null, 1));
const bad = res.filter((r) => r.spills?.length); console.log("pages x widths with spill:", bad.length, "of", res.length);
