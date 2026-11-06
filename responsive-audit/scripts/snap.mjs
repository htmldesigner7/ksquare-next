// usage: node snap.mjs <width> <route-no-slash> [--footer|--top|--full] [out.png]
import { chromium } from "playwright";
const [w, route, mode = "--full", out = `responsive-audit/snap-${w}.png`] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: 900 }, isMobile: +w < 500, hasTouch: +w < 500, reducedMotion: "reduce" });
const p = await ctx.newPage(); await p.goto("http://localhost:3200/" + (route === "home" ? "" : route), { waitUntil: "load" });
await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); } scrollTo(0, 0); });
await p.waitForLoadState("networkidle").catch(() => {}); await p.waitForTimeout(800);
if (mode === "--footer") await p.locator("footer").screenshot({ path: out });
else await p.screenshot({ path: out, fullPage: mode === "--full" });
await b.close();
