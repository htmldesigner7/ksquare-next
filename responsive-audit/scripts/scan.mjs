// usage: node scan.mjs <out.json> [baseUrl]
// For every route x viewport: horizontal-overflow check (document + offending elements not clipped by an ancestor),
// console errors/warnings, failed requests, viewport meta. No screenshots (see shoot.mjs).
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { getRoutes, slugOf } from "./routes.mjs";

export const VIEWPORTS = [1920, 1600, 1440, 1366, 1280, 1024, 900, 820, 768, 430, 414, 390, 375, 360, 320]
  .map((w) => ({ w, h: w >= 1024 ? 900 : 800, name: `${w}` }))
  .concat([[1024, 768], [932, 430], [667, 375], [568, 320]].map(([w, h]) => ({ w, h, name: `${w}x${h}L` })));

const [out, base = "http://localhost:3200"] = process.argv.slice(2);
if (process.env.WIDTHS) VIEWPORTS.splice(0, VIEWPORTS.length, ...process.env.WIDTHS.split(",").map((w) => ({ w: +w, h: +w >= 1024 ? 900 : 800, name: w })));
const browser = await chromium.launch();
const routes = getRoutes();
const jobs = routes.flatMap((r) => VIEWPORTS.map((v) => [r, v]));
const results = [];
let i = 0;

const probe = () => {
  const docW = document.documentElement.clientWidth;
  const clipped = (el) => {
    for (let p = el.parentElement; p && p !== document.documentElement; p = p.parentElement) {
      const o = getComputedStyle(p);
      if (/(hidden|clip|auto|scroll)/.test(o.overflowX) && p.getBoundingClientRect().right <= docW + 1) return true;
    }
    return false;
  };
  const sel = (el) => el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".") : "");
  const bad = [];
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.position === "fixed") continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if ((r.right > docW + 1 || r.left < -1) && !clipped(el)) bad.push({ sel: sel(el), left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
    if (bad.length >= 8) break;
  }
  return {
    docW, scrollW: document.documentElement.scrollWidth, bodyScrollW: document.body.scrollWidth,
    viewportMeta: document.querySelector('meta[name="viewport"]')?.content ?? null,
    bad,
  };
};

async function worker() {
  while (i < jobs.length) {
    const [route, v] = jobs[i++];
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, reducedMotion: "reduce", hasTouch: v.w < 1024, isMobile: v.w < 500 });
    const page = await ctx.newPage();
    const logs = [];
    page.on("console", (m) => { if (["error", "warning"].includes(m.type())) logs.push(`${m.type()}: ${m.text().slice(0, 160)}`); });
    page.on("pageerror", (e) => logs.push("pageerror: " + e.message.slice(0, 160)));
    // aborted RSC prefetches on context close are noise, so requestfailed is deliberately not logged
    try {
      await page.goto(base + route, { waitUntil: "load", timeout: 60000 });
      await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } window.scrollTo(0, 0); });
      // UNCLIP=1 audit mode: disable page-level overflow-x-clip to expose overflow it may be masking
      if (process.env.UNCLIP) await page.addStyleTag({ content: ".overflow-x-clip{overflow-x:visible !important}" });
      await page.waitForTimeout(300);
      results.push({ route, vp: v.name, ...(await page.evaluate(probe)), logs: [...new Set(logs)] });
    } catch (e) { results.push({ route, vp: v.name, error: e.message.split("\n")[0] }); }
    await ctx.close();
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
await browser.close();
writeFileSync(out, JSON.stringify(results, null, 1));
const over = results.filter((r) => r.scrollW > r.docW || r.bad?.length);
console.log(`scanned ${results.length}; with overflow ${over.length}; errors ${results.filter((r) => r.error).length}; with logs ${results.filter((r) => r.logs?.length).length}`);
