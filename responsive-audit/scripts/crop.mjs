import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
const [name, x, y, w, h] = process.argv.slice(2);
const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
for (const d of ["baseline", "after"]) {
  const data = await p.evaluate(async ([s, x, y, w, h]) => {
    const i = await new Promise((r) => { const im = new Image(); im.onload = () => r(im); im.src = "data:image/png;base64," + s; });
    const cv = document.createElement("canvas"); cv.width = +w; cv.height = +h; cv.getContext("2d").drawImage(i, +x, +y, +w, +h, 0, 0, +w, +h); return cv.toDataURL("image/png").split(",")[1];
  }, [readFileSync(`responsive-audit/${d}/${name}`).toString("base64"), x, y, w, h]);
  writeFileSync(`responsive-audit/crop-${d}.png`, Buffer.from(data, "base64"));
}
await b.close();
