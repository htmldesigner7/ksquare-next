import { chromium } from "playwright";
const b = await chromium.launch();
const cases = [["/products/dcdb", [1920, 1600, 1440, 1366, 1280, 1024, 820, 390]], ["/career", [390, 375, 360, 320]], ["/grievance", [390, 360, 320]], ["/our-infrastructure", [390, 320]], ["/projects", [390, 360, 320]]];
for (const [route, ws] of cases) for (const w of ws) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 500, hasTouch: w < 500, reducedMotion: "reduce" });
  const p = await ctx.newPage(); await p.goto("http://localhost:3200" + route); await p.waitForTimeout(600);
  const r = await p.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const cut = [...document.querySelectorAll("main *")].filter((e) => { const r = e.getBoundingClientRect(); return r.width && r.height && r.right > vw + 1 && !e.closest("[aria-hidden=true],.overflow-x-auto") && getComputedStyle(e).position !== "absolute"; }).length;
    return { vw, scrollW: document.documentElement.scrollWidth, cut };
  });
  console.log(route, w, JSON.stringify(r)); await ctx.close();
}
await b.close();
