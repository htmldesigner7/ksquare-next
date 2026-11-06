# Motion Plan — Ksquare Energy

Status: **Phase 0 + Phase 1 only. No source files have been edited yet.**
Audited against the production build (`next build` / `next start`, port 3100), working tree as of 2026-11-05.

---

## 0. Discovery summary

| Item | Finding |
|---|---|
| Framework | Next.js **16.3.3** (App Router, React 19.2.8, static prerender except `blog/[slug]`, `products/dcdb/[slug]`) |
| Styling | Tailwind **v4** (`@import "tailwindcss"`, `@theme inline` in `globals.css`), no `tailwind.config` |
| Animation libs installed | **framer-motion 13.1** only. No GSAP, AOS, Swiper, Lenis. |
| Sliders | Hand-written (`ValuesSlider`, `LifeSlider`, `ProductGallery`, projects carousel) — no Swiper |
| Routes | 45 `page.tsx` files = 45 URLs (the 2 dynamic routes are pinned to `/blog/dcdb-vs-acdb-difference` and `/products/dcdb/1`) |
| Content model | Most inner pages are content-driven: `src/content/pages/*.ts` → `PageTemplate` → `SectionRenderer` (`page-kit/sections.tsx`). **One edit to a section renderer animates ~25 pages.** |
| Layout hazards | `.canvas-zoom` / `.zoom-1600` use CSS `zoom` (1440–1920px); header is `fixed`; two `sticky` sidebars (blog TOC, FAQ categories); `html{scroll-behavior:smooth}` |
| Baseline | `motion-audit/baseline/*.png` (45 pages × 5 widths = 225 images, **reduced-motion emulated** so every page is in its deterministic final state), `perf.md` |

### Existing motion inventory (assets to keep and unify)

| System | Where | What it does | Verdict |
|---|---|---|---|
| `<Reveal>` | `common/Reveal.tsx`, used in `sections.tsx`, `PageHero`, `CtaBanner`, `CircleSteps`, `HexSteps`, `SolarCalculators` | framer-motion fade-up 28px, 0.6s, `[0.22,1,0.36,1]`, once, `-80px` margin, honours reduced motion | **Keep.** Its easing/duration become the tokens. |
| `<ScrollReveal>` | mounted once in `layout.tsx` | IntersectionObserver + `[data-reveal]` CSS (translate 32px, 0.8s, stagger ≤5×80ms) over a CSS selector list; skips on-screen, fixed/sticky, reduced motion, already-revealed | **Keep as the generic fallback;** formalise its tokens. |
| `AnimatedCounter` / `StatValue` | career, grievance, our-infrastructure, home About, sections | rAF count-up, once | **Fix** (see risks #1). |
| `Collapse` | accordions/dropdowns | grid `0fr→1fr` + opacity, 550ms | **Keep** — already the right technique (no height animation). |
| `card-lift`, `img-hover-zoom` | `globals.css` | hover lift / 1.06 image zoom, `@media (hover:hover)` | **Keep**, apply to more cards. |
| `animate-tab-in` | `globals.css`, `ProductTabs` | tab content slide-in | **Keep**, reuse in the other tab sets. |
| `slide-next/prev` | projects carousel | keyframe slide 48px | Keep. |
| marquee | `Testimonials.tsx` (inline `<style>`) | infinite 40s linear, 3 rows | Keep; add off-screen pause. |
| `ProductGallery` | dcdb/[slug] | crossfade+translate+scale, 650ms | Keep. |
| Header | `Header.tsx` | colour transitions, dropdown fade+translate, chevron rotate, mobile drawer fade/translate, accordion via grid | Keep; refine (see below). |
| Reduced motion | `globals.css` | global `*{animation/transition-duration:.01ms !important}` + per-component handling | Keep (existing `!important` is pre-existing safety net; I will not add more). |

---

## 1. Motion system (design tokens)

The site already converged on **one** easing and a few durations. I am promoting those to named tokens rather than inventing new ones, so nothing existing changes feel.

**Where:** CSS custom properties in `globals.css` (`:root`) → consumed by Tailwind v4 via `@theme inline` (so utilities like `duration-standard`, `ease-out-expo` exist) → mirrored once in `src/lib/motion.ts` for framer-motion. One source of truth for values; the TS file imports nothing and the CSS is the master (TS constants are asserted equal in a dev check).

```css
:root {
  /* durations */
  --dur-micro:    180ms;   /* colour, underline, press */
  --dur-standard: 400ms;   /* hover lift, tab/dropdown, icon nudge */
  --dur-slow:     550ms;   /* collapse / accordion (existing) */
  --dur-reveal:   700ms;   /* scroll reveals (existing 600–800) */
  --dur-hero:     900ms;   /* page-load hero sequence */
  --dur-media:    700ms;   /* image hover zoom (existing) */

  /* easings */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);   /* entrances + hover (the site's existing curve) */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);   /* state changes: tabs, menu, looping drift */
  --ease-press:  cubic-bezier(0.4, 0, 0.2, 1);     /* :active + colour fades */

  /* distances, stagger, trigger */
  --move-sm: 16px;  --move-md: 28px;  --move-lg: 40px;  /* mobile uses sm/md only */
  --stagger: 80ms;  --stagger-max: 5;                    /* cap = 400ms total */
  --trigger: 85%;   /* viewport line; = existing IO rootMargin ≈ -6% to -15% */
}
```

Rules that apply everywhere: entrances use `--ease-out`; state changes `--ease-in-out`; hover `--ease-out`; stagger is capped; distance is halved under 768px; `transform`/`opacity` only (one exception: nav underline moves from `width` to `scaleX`, which *removes* an existing violation).

---

## 2. Library decisions

| Decision | Choice | Reasoning |
|---|---|---|
| Core engine | **framer-motion (already installed) + CSS + IntersectionObserver** | Everything requested (reveals, stagger, counters, parallax, menu, tabs) is achievable with what is already shipped. |
| GSAP / ScrollTrigger | **Not added** | Would be a *second* animation engine next to framer-motion (explicitly "do not add overlapping libraries") plus ~45 kB for effects that `useScroll`/`useTransform` cover. Revisit only if a pinned/scrubbed storytelling section is later requested. |
| Smooth scroll (Lenis) | **Rejected** | Site already has `scroll-behavior: smooth`, two `sticky` sidebars, fixed header, anchor-link TOC, and `canvas-zoom`. Lenis hijacks native scroll and fights all four; the gain is marginal. Documented, not installed. |
| Bundle | Use `LazyMotion` + `domAnimation` + `m.*` for new framer code; parallax/hero client islands are small and only on pages that use them | Keeps added JS minimal. |
| `matchMedia` | CSS `@media` + `framer useReducedMotion` + one tiny `useMotionBudget()` hook (reduced-motion, `(hover:hover) and (pointer:fine)`, `max-width:767px`) | Equivalent of `gsap.matchMedia()` without GSAP. |
| Page transitions | **Skipped (documented)**. App Router has no stable exit-animation hook; the View Transitions API support is experimental in Next and fragile with `canvas-zoom` + fixed header. Instead: header + hero load-in only. | Per brief: "skip fragile exit transitions". |

---

## 3. Per-section plan

Legend: **R** reveal (fade-up), **S** stagger, **C** counter, **P** parallax, **Z** image zoom on hover, **L** card lift, **—** intentionally static.

### 3.1 Global chrome

| Element | Plan | Why |
|---|---|---|
| Header (all pages) | Load-in: logo + nav fade/slide down 12px, 500ms, nav items staggered 40ms. Nav underline → `scaleX` from left (replaces `width` transition). Dropdown: keep fade+translate but replace `transition-all` with `opacity, translate, visibility`; add `focus-within`/ESC already present. Language dropdown: same. Request-a-Quote: shared button treatment. | Header is the first thing seen; current underline animates `width` (layout-affecting). |
| Mobile drawer | Stagger links in (40ms steps, 12px), animate hamburger ⇄ X by morphing the 3 lines (`rotate`/`opacity`/`translate`) instead of swapping SVGs. ESC + resize-close + body-scroll-lock **preserved untouched**. | Brief §2.4. Drawer currently just fades. |
| Footer | R on column groups (stagger), link hover nudge (`translateX(2px)`), social icon lift. | Repeated on every page, so subtle. |
| Buttons (`Button`, hero inline links, `OutlineButton`, header CTA) | One shared recipe: `transition-[color,background-color,border-color,transform]` (replace `transition-all`), hover lift `-1px`/scale ≤1.02, dot nudges `translateX(2px)`, `:active` scale .98, explicit `:focus-visible` ring. Wrapped in `(hover:hover) and (pointer:fine)`. | Currently `transition-all`, no press or focus-visible state. |
| Magnetic effect | **Only** the home hero primary CTA ("Request Bulk Quote"), max 6px pull, desktop-fine-pointer only. No custom cursor. | Brief: 1–3 elements max; native cursor kept. |

### 3.2 Home (`/`)

| Section | Plan |
|---|---|
| Hero (`canvas` 1920 artboard) | **Load sequence** ≤1s total: bg image scale 1.06→1 (900ms, transform only), headline lines slide-up+fade (stagger 90ms), product image fade-in+translate, description + buttons fade-up. Hero is *above the fold* so `ScrollReveal` ignores it — no conflict. Subtle **parallax** (±24px) on the product image on ≥1024px only. SSR markup stays fully visible (animation applied via CSS `animation-fill-mode: backwards`, so no JS = visible). |
| About | R heading → paragraph → image (clip-path reveal on image, 800ms); **C** stats (fix SSR value, see risks). |
| Solutions / CoreProducts / Industries | R heading, **S** card grid (80ms), L + Z on cards, arrow nudge on hover. |
| Manufacturing | R text, image clip reveal + very light P (≤20px, desktop). |
| Testimonials | Keep the 3 marquees; add pause when off-screen and on hover; heading R. No new motion. |
| Insights | R, S cards, Z on article thumbs. |
| PartnerCTA | R heading + button; button gets standard recipe. |

### 3.3 Page-kit pages (≈25 routes from `src/content/pages/*`)

Handled in `PageHero`, `PageTemplate`, `sections.tsx` — one change, many pages.

| Section type | Plan |
|---|---|
| `PageHero` | Load-in: breadcrumb → title (line reveal on H1, `aria-label` kept on original, spans `aria-hidden`) → intro → hero image. ≤900ms. Reduced motion → plain fade/none. |
| `split` | R text column then image column (existing `Reveal`, delay .1) + image clip-reveal; Z on image. Keep. |
| `cards` / `tiers` / `eligibility` | Existing `Reveal` with `(i%4)*0.07` stagger → keep; add L (hover lift) and icon nudge. |
| `table`, `compare` | R once; row hover tint is static colour (no motion). |
| `steps` / `CircleSteps` / `HexSteps` / `diagram` | S step-by-step; connector lines draw with `scaleX/Y` (existing artwork, no new shapes). |
| `band`, `dark`, `callouts` | R; **P** only on large photographic `dark` backgrounds (desktop). |
| `team` / `gallery` / `CertificateGallery` / `AwardTimeline` | S grid, Z hover on photos, timeline items R from alternating sides but **clipped** (`overflow-x-clip`) to avoid horizontal scroll. |
| `articles` / `events` / `featured` | S, Z on thumbs, L on cards. |
| `accordion` / `numbered` / `faq` | Already use `Collapse` — keep; add animated chevron/number colour (check each uses same token) and `:focus-visible`. |
| `tabs` (`LocationTabs`, `DownloadTabs`, `OurPresenceTabs`) | Add animated active indicator (`translateX`/`scaleX`) + reuse `animate-tab-in` crossfade. |
| `form` / `LeadForm` / calculators / `TrackerBar` / `PaymentPanel` | Focus ring + label/underline transition on inputs, error/success message fade-in. **Forms stay unwired as today** (not a motion task). Not scroll-revealed per-field (static) — only the form container R. |
| `testimonials` | Reuse marquee behaviour. |
| `CtaBanner` | R (existing); button recipe. |

### 3.4 Bespoke pages

| Page | Plan |
|---|---|
| `/about-us` | R sections; `ValuesSlider`: slide-content entrance (fade+8px) on active change, keep scroll logic; Z on photos; **C** stats if numeric. |
| `/about-us/*` subpages (awards, certifications, leadership-team, news-events, our-presence, press-releases) | page-kit (see 3.3). |
| `/products`, `/products/dcdb` | S product cards, L + Z, filter (if any) crossfade. |
| `/products/dcdb/[slug]` | Gallery keep; thumbnails keep; tabs get indicator; sticky bits untouched. |
| `/products/ksquare-inverter` | R, S, `FaqAccordion` already collapse-based. |
| `/projects` | `ProjectsFilter` result cards: crossfade/stagger on filter change (opacity+translate only); carousel keeps `slide-next/prev`; `FaqList` keep. |
| `/blog`, `/blog/[slug]` | S article cards, Z thumbs; article body **static** (reading comfort); TOC sidebar is `sticky` → no transform on it; TOC active-link underline transition only. |
| `/career` | `LifeSlider` content entrance; `OpenPositions` row hover + expand uses `Collapse`; **C** stats. |
| `/contact` | R info cards, form focus states, `OurPresenceTabs` indicator. Map pin icon nudge. |
| `/faqs` | Category list sticky → static; accordion keep; active category indicator animate. |
| `/grievance`, `/our-infrastructure` | **C** stats, process steps S; icons nudge. |
| `/download-resources`, `/resources`, `/payment-details`, `/track-solar-status`, `/solar-calculators` | Tabs/panels per 3.3; calculators: result value fade-in on change. Otherwise static (functional pages). |
| `/manufacturing*`, `/partners*`, `/solutions*` | page-kit. |

### 3.5 Intentionally static
Blog article body copy; table cells; legal/payment details text; form field layout; footer legal line; Google-Translate language list items (hover colour only); any element inside `[data-no-reveal]`. Reason: reading/utility content where motion adds noise or risks layout/Translate DOM mutation.

---

## 4. Hover & interaction plan (summary)

| Component | Interaction (all inside `@media (hover:hover) and (pointer:fine)` except `:active`/focus) |
|---|---|
| Buttons | colour sweep (existing), lift ≤2px / scale ≤1.02, dot nudge, `:active` 0.98, `:focus-visible` ring |
| Nav links | `scaleX` underline from left (right-to-left on exit), active-page state untouched |
| Cards | `card-lift` (-6px + soft shadow) on existing card classes; image `img-hover-zoom` 1.06 inside `overflow-hidden` |
| Icons/arrows | `translateX(3px)` / rotate on parent hover (`group-hover`) |
| Tabs | sliding indicator + `animate-tab-in` content |
| Accordions | `Collapse` (exists) + chevron rotate |
| Dropdowns | opacity + 8px translate, 300ms, `focus-within` keyboard open |
| Sliders | keep library/logic; arrows scale 1.1 (exists); slide text fade-in on change |
| Mobile menu | hamburger morph, stagger links |
| Forms | border/underline colour + label lift, error shake **excluded** (flash/vestibular); fade-in message instead |
| Touch | no hover rules apply; `:active` scale only |

---

## 5. Conflicts and risks

| # | Risk | Detail | Mitigation |
|---|---|---|---|
| 1 | **Counters render `0` on the server** | `AnimatedCounter` initial state `0`; final value is not in the SSR DOM (violates rule: final value in DOM, no-JS safe). | Render `end+suffix` in markup; JS swaps to 0 *only when element is in view and not yet seen*, or animate via a pseudo overlay. Format with `toLocaleString` / suffix retained. Also current `Math.floor` never lands on non-integers — fine, inputs are integers. |
| 2 | **Two reveal systems** (`Reveal` framer vs `ScrollReveal` CSS) | Could double-animate an element. `ScrollReveal` already skips `[style*='opacity']` and `[data-reveal]`. | Keep the skip rules; document that `Reveal` is for composed sections, `ScrollReveal` the fallback; new code uses `Reveal`/CSS tokens only. |
| 3 | `Reveal` SSR `initial={opacity:0}` | Content invisible until hydration; there's a `<noscript>` style hack. | Keep hack; verify no FOUC/CLS in baseline vs after. Optionally move initial state to CSS class so it's pre-paint. |
| 4 | **CSS `zoom` canvases** | `.canvas-zoom` scales 0.74–1 with CSS `zoom`; transforms inside are scaled too, `getBoundingClientRect`/IO thresholds shift. | Keep translate distances small; test 1440/1600/1920; parallax uses transform on a child, not on the zoomed wrapper. |
| 5 | Fixed header + `sticky` sidebars | A `transform` on an ancestor of `position:sticky/fixed` breaks it. | Never put transforms/will-change on `main`, sections containing `sticky`, or the header wrapper itself — only on children. |
| 6 | Horizontal overflow from slide-in-from-right | Timeline/hero reveals. | Entrances on x-axis only where the section already has `overflow-x-clip` (documented in code comment); otherwise Y-only. |
| 7 | Google Translate DOM mutation | Translate rewrites text nodes; line-split headings would break. | **No text-splitting** on translated copy except via `aria-hidden` wrapper that re-renders text safely — decision: use **line-level mask reveal on whole H1 element (clip-path)**, not per-word spans. Avoids Translate/wrap breakage. |
| 8 | Marquee runs forever | Wasted GPU off-screen. | IO toggles `animation-play-state`. |
| 9 | `transition-all` ×24 | Animates layout properties inadvertently when hover adds size/border. | Replace with explicit property lists while touching those components. |
| 10 | Existing `!important` reduced-motion block | Pre-existing; not mine to remove, but I add no new `!important`. | Use `@media (prefers-reduced-motion: reduce)` + framer `useReducedMotion`. |
| 11 | Dirty working tree | ~70 uncommitted files (many deletions/modifications pre-date this task). | Baseline = current working tree. Recommend committing/stashing before the `motion-enhancements` branch so the motion diff stays reviewable. I have **not** created the branch or committed. |
| 12 | `package.json` / lock changed | Added `playwright` devDependency for the audit. | Intentional; Lighthouse is run via `npx`. |

---

## 6. Implementation order (Phase 2)

1. Tokens (`globals.css`, `lib/motion.ts`) + `useMotionBudget`.
2. Global: `Button` recipe, Header (underline, dropdown, drawer, hamburger), Footer.
3. `Reveal`/`ScrollReveal` token alignment + counter SSR fix.
4. Home hero load sequence + home sections.
5. `PageHero`, `sections.tsx` (cascades to ~25 pages).
6. Bespoke pages: tabs/sliders/filters/forms/accordions.
7. Ambient: marquee pause, light parallax.
8. Verification (Phase 4) + `REPORT.md`.

Suggested git flow: `git switch -c motion-enhancements` after the current tree is committed; one commit per numbered step.
