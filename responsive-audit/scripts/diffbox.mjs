import { chromium } from "playwright";
import { readFileSync } from "node:fs";
const [name] = process.argv.slice(2);
const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
const rd = (d) => readFileSync(`responsive-audit/${d}/${name}`).toString("base64");
console.log(await p.evaluate(async ([a, c]) => {
  const load = (s) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = "data:image/png;base64," + s; });
  const [ia, ic] = await Promise.all([load(a), load(c)]);
  const px = (i) => { const cv = document.createElement("canvas"); cv.width = i.width; cv.height = i.height; const x = cv.getContext("2d"); x.drawImage(i, 0, 0); return x.getImageData(0, 0, i.width, i.height).data; };
  const d1 = px(ia), d2 = px(ic), W = ia.width; const rows = {}; let x0 = 1e9, x1 = 0;
  for (let k = 0; k < d1.length; k += 4) if (Math.abs(d1[k] - d2[k]) + Math.abs(d1[k+1] - d2[k+1]) + Math.abs(d1[k+2] - d2[k+2]) > 12) { const i = k / 4, y = Math.floor(i / W), x = i % W; rows[Math.floor(y / 200) * 200] = (rows[Math.floor(y / 200) * 200] || 0) + 1; x0 = Math.min(x0, x); x1 = Math.max(x1, x); }
  return JSON.stringify({ x0, x1, bands: rows });
}, [rd("baseline"), rd("after")]));
await b.close();
