// usage: node sheet.mjs <width> <offsetY> <cropH> <out.png> <route-no-slash>...  — pages side by side (crop from offsetY, height cropH) for fast visual review
import { chromium } from "playwright";
const [w, off, ch, out, ...routes] = process.argv.slice(2);
const b = await chromium.launch(); const shots = [];
for (const r of routes) {
  const ctx = await b.newContext({ viewport: { width: +w, height: 900 }, isMobile: +w < 500, hasTouch: +w < 500, reducedMotion: "reduce" });
  const p = await ctx.newPage(); await p.goto("http://localhost:3200/" + (r === "home" ? "" : r), { waitUntil: "load" });
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((x) => setTimeout(x, 40)); } scrollTo(0, 0); });
  await p.waitForTimeout(1000);
  shots.push((await p.screenshot({ fullPage: true })).toString("base64")); await ctx.close();
}
const pg = await (await b.newContext()).newPage();
const data = await pg.evaluate(async ([shots, w, off, ch]) => {
  const imgs = await Promise.all(shots.map((s) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = "data:image/png;base64," + s; })));
  const gap = 12, cv = document.createElement("canvas"); cv.width = imgs.length * (+w + gap); cv.height = +ch; const x = cv.getContext("2d"); x.fillStyle = "#888"; x.fillRect(0, 0, cv.width, cv.height);
  imgs.forEach((i, k) => x.drawImage(i, 0, +off, +w, +ch, k * (+w + gap), 0, +w, +ch)); return cv.toDataURL("image/png").split(",")[1];
}, [shots, w, off, ch]);
(await import("node:fs")).writeFileSync(out, Buffer.from(data, "base64")); await b.close();
