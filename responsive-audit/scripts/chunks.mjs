// usage: node chunks.mjs <in.png> <outPrefix> [chunkHeight=2000]  — splits a tall screenshot so it can be read at full resolution
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
const [inp, prefix, ch = "2000"] = process.argv.slice(2);
const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
const n = await p.evaluate(async ([s, ch]) => {
  const i = await new Promise((r) => { const im = new Image(); im.onload = () => r(im); im.src = "data:image/png;base64," + s; });
  window.__parts = []; for (let y = 0; y < i.height; y += +ch) { const h = Math.min(+ch, i.height - y); const cv = document.createElement("canvas"); cv.width = i.width; cv.height = h; cv.getContext("2d").drawImage(i, 0, y, i.width, h, 0, 0, i.width, h); window.__parts.push(cv.toDataURL("image/png").split(",")[1]); }
  return window.__parts.length;
}, [readFileSync(inp).toString("base64"), ch]);
for (let k = 0; k < n; k++) writeFileSync(`${prefix}-${k}.png`, Buffer.from(await p.evaluate((k) => window.__parts[k], k), "base64"));
console.log(n, "chunks");
await b.close();
