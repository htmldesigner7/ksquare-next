// usage: node regress.mjs <baseUrl> <route...>  (routes WITHOUT leading slash, e.g. products/dcdb; Git Bash mangles "/x") — shoots 1920 + 1440 exactly like the baseline, then pixel-diffs against responsive-audit/baseline
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { slugOf, getRoutes } from "./routes.mjs";
const [base, ...args] = process.argv.slice(2);
const routes = args[0] === "ALL" ? getRoutes().map((r) => r.slice(1) || "") : args;
const b = await chromium.launch();
const diffPage = await (await b.newContext()).newPage();
for (const route of routes) for (const w of [1920, 1440]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto(base + "/" + route, { waitUntil: "load" });
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } scrollTo(0, 0); });
  await p.waitForLoadState("networkidle").catch(() => {}); await p.waitForTimeout(1800);
  const name = `${slugOf("/" + route)}__${w}.png`;
  await p.screenshot({ path: `responsive-audit/after/${name}`, fullPage: true });
  await ctx.close();
  const a = readFileSync(`responsive-audit/baseline/${name}`).toString("base64"), c = readFileSync(`responsive-audit/after/${name}`).toString("base64");
  const res = await diffPage.evaluate(async ([a, c]) => {
    const load = (s) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = "data:image/png;base64," + s; });
    const [ia, ic] = await Promise.all([load(a), load(c)]);
    if (ia.height !== ic.height || ia.width !== ic.width) return { size: `${ia.width}x${ia.height} -> ${ic.width}x${ic.height}` };
    const px = (i) => { const cv = document.createElement("canvas"); cv.width = i.width; cv.height = i.height; const x = cv.getContext("2d"); x.drawImage(i, 0, 0); return x.getImageData(0, 0, i.width, i.height).data; };
    const d1 = px(ia), d2 = px(ic); let n = 0; for (let k = 0; k < d1.length; k += 4) if (Math.abs(d1[k] - d2[k]) + Math.abs(d1[k + 1] - d2[k + 1]) + Math.abs(d1[k + 2] - d2[k + 2]) > 12) n++;
    return { diffPixels: n, total: d1.length / 4 };
  }, [a, c]);
  console.log(route, w, JSON.stringify(res));
}
await b.close();
