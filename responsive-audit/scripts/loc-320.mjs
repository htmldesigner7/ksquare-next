import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 320, height: 800 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
const p = await ctx.newPage();
for (const [route, sel] of [["/career",""],["/our-infrastructure",""]]) {
  await p.goto("http://localhost:3100" + route); await p.waitForTimeout(800);
  const info = await p.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("main *")) {
      const r = el.getBoundingClientRect();
      if (r.right > 321 && r.width > 0 && r.height > 0 && !el.closest("[aria-hidden=true]") && getComputedStyle(el).position !== "absolute") {
        out.push({ t: el.tagName, cls: String(el.className).slice(0, 70), txt: (el.textContent || "").trim().slice(0, 40), l: Math.round(r.left), r: Math.round(r.right), y: Math.round(r.top + scrollY) });
        if (out.length > 3) break;
      }
    }
    return out;
  });
  console.log(route, JSON.stringify(info));
  if (info[0]) { await p.evaluate((y) => scrollTo(0, y - 200), info[0].y); await p.waitForTimeout(500); await p.screenshot({ path: `responsive-audit/p1-${route.slice(1)}-320.png` }); }
}
await b.close();
