"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One scroll-reveal for every page.
 * Headings, intro text, cards/grid items, article cards, image frames, tables and forms that sit BELOW the fold
 * glide up and fade in as they enter the viewport (siblings stagger). Content already on screen is left alone,
 * so there is no flash on load. Elements already animated by <Reveal>, fixed/sticky chrome, marquees and
 * users who prefer reduced motion are skipped. The animation hook is removed when it finishes, so card hover
 * transitions etc. behave exactly as before.
 */
const TARGETS = [
  "main h1",
  "main h2",
  "main h2 + p",
  "main h3",
  "main article",
  "main figure",
  "main table",
  "main form",
  "main [class*='aspect-']",
  "main .grid > *",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.setAttribute("data-reveal", "in");
          const done = (e: TransitionEvent) => {
            if (e.target !== el || e.propertyName !== "opacity") return;
            el.removeAttribute("data-reveal");
            el.style.removeProperty("--reveal-delay");
            el.removeEventListener("transitionend", done);
          };
          el.addEventListener("transitionend", done);
          // safety net in case transitionend never fires (display:none, tab hidden, ...)
          window.setTimeout(() => { if (el.hasAttribute("data-reveal")) { el.removeAttribute("data-reveal"); el.style.removeProperty("--reveal-delay"); } }, 1800);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.closest("header, footer, [data-no-reveal], [style*='opacity'], [data-reveal], .animate-marquee-left, .animate-marquee-right")) return;
        // skip nested targets whose ancestor is already revealing, and anything fixed/sticky
        let p: HTMLElement | null = el.parentElement;
        while (p && p.tagName !== "MAIN") {
          if (p.hasAttribute("data-reveal")) return;
          p = p.parentElement;
        }
        const cs = getComputedStyle(el);
        if (cs.position === "fixed" || cs.position === "sticky" || cs.display === "none") return;
        const r = el.getBoundingClientRect();
        if (r.height === 0 || r.top < vh * 0.92) return; // on screen already: leave it alone
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        const index = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 80}ms`);
        el.setAttribute("data-reveal", "");
        io.observe(el);
      });
    };

    const t = window.setTimeout(scan, 120);
    let debounce = 0;
    const mo = new MutationObserver(() => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(scan, 200);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(t);
      window.clearTimeout(debounce);
      mo.disconnect();
      io.disconnect();
      document.querySelectorAll("[data-reveal]").forEach((n) => n.removeAttribute("data-reveal"));
    };
  }, [pathname]);

  return null;
}
