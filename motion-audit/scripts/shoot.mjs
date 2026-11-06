// usage: node shoot.mjs <outDir> [baseUrl] [--reduced|--motion]
// Resting-state screenshots: reduced-motion is emulated by default so every page is in its final state and deterministic.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { getRoutes, slugOf, WIDTHS } from "./routes.mjs";

const [outDir, base = "http://localhost:3100"] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const reducedMotion = process.argv.includes("--motion") ? "no-preference" : "reduce";
mkdirSync(outDir, { recursive: true });
const routes = getRoutes();
const browser = await chromium.launch();
const jobs = routes.flatMap((r) => WIDTHS.map((w) => [r, w]));
let i = 0;
const failures = [];
async function worker() {
  while (i < jobs.length) {
    const [route, w] = jobs[i++];
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion });
    const page = await ctx.newPage();
    try {
      await page.goto(base + route, { waitUntil: "load", timeout: 60000 });
      // scroll through to trigger lazy images / reveals, then back to top
      await page.evaluate(async () => {
        const h = document.documentElement.scrollHeight;
        for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        window.scrollTo(0, 0);
      });
      await page.waitForLoadState("networkidle").catch(() => {});
      await page.waitForTimeout(1800);
      await page.screenshot({ path: `${outDir}/${slugOf(route)}__${w}.png`, fullPage: true });
    } catch (e) { failures.push(`${route}@${w}: ${e.message.split("\n")[0]}`); }
    await ctx.close();
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
await browser.close();
console.log(`done ${jobs.length - failures.length}/${jobs.length}`); failures.forEach((f) => console.log("FAIL", f));
