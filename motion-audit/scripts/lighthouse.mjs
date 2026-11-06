// usage: node lighthouse.mjs <out.md> [baseUrl]   (run from a dir where `lighthouse` + `chrome-launcher` resolve)
// Mobile preset (Lighthouse default), 1 run per page, sequential so runs don't compete for CPU.
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const [out, base = "http://localhost:3100"] = process.argv.slice(2);
const { getRoutes } = await import(pathToFileURL(process.env.ROUTES_MJS).href);
const chrome = await launch({ chromePath: process.env.CHROME_PATH, chromeFlags: ["--headless=new", "--no-sandbox"] });
const rows = [];
for (const r of getRoutes(process.env.APP_DIR)) {
  try {
    const { lhr } = await lighthouse(base + r, { port: chrome.port, onlyCategories: ["performance"], logLevel: "error" });
    const a = lhr.audits;
    rows.push(`| ${r} | ${Math.round(lhr.categories.performance.score * 100)} | ${a["cumulative-layout-shift"].numericValue.toFixed(3)} | ${Math.round(a["total-blocking-time"].numericValue)} | ${Math.round(a["largest-contentful-paint"].numericValue)} |`);
  } catch (e) { rows.push(`| ${r} | ERR | ${e.message.split("\n")[0]} | | |`); }
  console.log(rows.at(-1));
}
await chrome.kill();
writeFileSync(out, `# Lighthouse (mobile preset, performance only, production build, 1 run/page)\n\n| Route | Perf | CLS | TBT (ms) | LCP (ms) |\n|---|---|---|---|---|\n${rows.join("\n")}\n`);
