// usage: node who.mjs <width> <route-no-slash>  — lists elements whose right edge exceeds the viewport, with page-level overflow-x-clip disabled
import { chromium } from "playwright";
const [w, route] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: 800 }, isMobile: +w < 500, hasTouch: +w < 500, reducedMotion: "reduce" });
const p = await ctx.newPage(); await p.goto("http://localhost:3200/" + route); await p.waitForTimeout(800);
await p.addStyleTag({ content: ".overflow-x-clip{overflow-x:visible !important}" });
console.log(await p.evaluate((w) => {
  const out = []; for (const el of document.querySelectorAll("body *")) { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    if (r.width && r.right > +w + 1 && cs.position !== "fixed" && !el.closest("header") && !el.closest("[aria-hidden=true]")) out.push(el.tagName + "." + String(el.className).slice(0, 70) + " [" + Math.round(r.left) + "," + Math.round(r.right) + "] " + (el.textContent || "").trim().slice(0, 30)); }
  return out.slice(0, 8).join("\n");
}, w));
await b.close();
