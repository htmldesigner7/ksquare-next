// usage: node snapsel.mjs <route-no-slash> <selector> <out-prefix> <width...>  — element screenshot at several widths
import { chromium } from "playwright";
const [route, sel, prefix, ...ws] = process.argv.slice(2);
const b = await chromium.launch();
for (const w of ws) {
  const ctx = await b.newContext({ viewport: { width: +w, height: 900 }, isMobile: +w < 500, hasTouch: +w < 500, reducedMotion: "reduce" });
  const p = await ctx.newPage(); await p.goto("http://localhost:3200/" + route, { waitUntil: "load" });
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } });
  await p.waitForTimeout(1200);
  await p.locator(sel).first().screenshot({ path: `${prefix}-${w}.png` }); await ctx.close();
}
await b.close();
