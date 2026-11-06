import { chromium } from "playwright";
const b = await chromium.launch();
for (const mobile of [true, false]) {
  const ctx = await b.newContext({ viewport: { width: 320, height: 800 }, isMobile: mobile, hasTouch: mobile, reducedMotion: "reduce" });
  const p = await ctx.newPage(); await p.goto("http://localhost:3200/solutions/rooftop-solar"); await p.waitForTimeout(800);
  console.log("mobile", mobile, await p.evaluate(() => { const h = document.querySelector("header > div"); const r = h.getBoundingClientRect(); const kids = [...h.querySelectorAll("a,button,img")].slice(0, 5).map((e) => e.tagName + Math.round(e.getBoundingClientRect().left) + "-" + Math.round(e.getBoundingClientRect().right)); return { inner: innerWidth, client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth, header: [r.left, r.right], kids }; }));
}
await b.close();
