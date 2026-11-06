import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** Every static route under src/app (page.tsx), with the two dynamic routes pinned to a real slug. */
export function getRoutes(appDir = "src/app") {
  const out = [];
  const walk = (dir, url) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p, name.startsWith("[") ? url + "/__" + name : url + "/" + name);
      else if (name === "page.tsx") out.push(url || "/");
    }
  };
  walk(appDir, "");
  const pin = { "/blog/__[slug]": "/blog/dcdb-vs-acdb-difference", "/products/dcdb/__[slug]": "/products/dcdb/1" };
  return out.map((r) => pin[r] ?? r).sort();
}
export const slugOf = (r) => (r === "/" ? "home" : r.slice(1).replaceAll("/", "__"));
export const WIDTHS = [1920, 1440, 1024, 768, 390];
