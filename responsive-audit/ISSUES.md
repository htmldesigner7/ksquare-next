# Responsive Audit — ISSUES

Status: **Phase 0 + Phase 1 complete. No source files edited.** Fixes below are *planned*, not applied.
Audited on the production build (`next build && next start`, :3100), working tree of 2026-11-05.

## 0. Baseline (Phase 0)

| Item | Result |
|---|---|
| Stack | Next.js 16.3.3 App Router, React 19.2.8, **Tailwind v4** (CSS-first `@theme inline` in `src/app/globals.css`; no `tailwind.config.*`) |
| Commands | `npm run dev` / `build` / `start`; audit uses `build` + `start -p 3100` |
| Viewport meta | Present on all 855 page loads: `width=device-width, initial-scale=1` (Next default) |
| Regression reference | `responsive-audit/baseline/` — 45 routes × (1920, 1440) = **90 full-page PNGs**. They were captured earlier in this session by `motion-audit/scripts/shoot.mjs` with reduced-motion emulated (final resting state). No `src/` file has changed since, so they were copied rather than recaptured. |
| Scan | `scripts/scan.mjs`: 45 routes × 19 viewports (15 widths + 1024×768, 932×430, 667×375, 568×320 landscape) = **855 loads**; checks document overflow, per-element overflow not clipped by an ancestor, console errors/warnings. Results: `scan-baseline.json` (normal) and `scan-unclipped.json` (page-level `overflow-x-clip` disabled, to expose masked overflow). |

**Breakpoints in use** (Tailwind default `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536` plus custom, all declared in `globals.css`):
`w1100` 1100 · `hnav` 1180 (header switches desktop nav ↔ drawer) · `canvas` 1440 (Figma 1920 artboard shown, scaled with CSS `zoom` up to 1920) · `g1464` 1464 · `w1536` 1536 · `g1664` 1664 · `g1864` 1864 · `g1868` 1868 · `g1964` 1964 · `g1984` 1984, plus `max-canvas`/`max-xl` and arbitrary `min-[1600px]`.
Usage counts: `lg` 758, `canvas` 189, `xl` 154, `sm` 137, `md` 81, `max-canvas` 21. Convention is mobile-first with a desktop artboard at `canvas`; I will follow it.

## 1. Headline result

The site was already made largely responsive in earlier work (last commit: "responsvie and proper done"). Across 855 loads:

- **0 console errors / warnings / page errors** (aborted Next RSC prefetches at context close are not real failures and were excluded).
- **Real document-level horizontal scroll: 2 routes** (same page, see R-01).
- **Content clipped/cut off but hidden by `overflow-x-clip` on `<main>`: 4 routes** (R-02, R-03) — the clip hides the scrollbar, but visitors lose content. This is exactly the "masked root cause" case in rule 6.
- No missing viewport meta, no `100vh` heroes (`min-h-dvh` used), tables/maps/projects grid scroll inside their own `overflow-x-auto` wrappers by design.

## 2. Issues

Severity: Critical = page scrolls sideways / content unreachable · High = content cut off · Medium = usability gap · Low = hygiene.

| ID | Sev | File / selector | Range | Problem (evidence) | Planned fix (desktop-identical) |
|---|---|---|---|---|---|
| R-01 | **Critical** | `src/app/products/dcdb/page.tsx:406` `div.w-full.lg:w-[1576px]` (and `:338` image column `lg:w-[750px] lg:flex-none` shifted by it). Affects `/products/dcdb` and `/products` (redirects to it). | 1024–1600 (all of `lg`→`canvas`+) | Fixed 1576px box inside a smaller viewport: `scrollWidth` 1632 vs `clientWidth` 1600/1440/1366/1280/1024. Page scrolls horizontally on every laptop/tablet-landscape width. | `lg:w-[1576px]` → `w-full lg:max-w-[1576px]` (identical at ≥1608px) + `min-w-0` on its flex children. Verify image column shrinks (`lg:w-[750px]` → `lg:w-[min(750px,48%)]`-style, identical at 1920). |
| R-02 | **High** | Stats row `div.flex.flex-col.gap-[16px].flex-1.sm:flex-none.sm:w-[200px]` ×3 in `src/app/career/page.tsx:153-161`, `grievance/page.tsx:179-187`, `our-infrastructure/page.tsx:175-183` | ≤ ~360px (confirmed 320; 3 items + gaps exceed width) | Third stat ("Growing / Work Culture") is cut off at the right edge: element spans 222→343 px in a 320 px viewport (screenshot `p1-grievance-320.png`: "Growin…"). Hidden by `main { overflow-x-clip }`. | Make the row `flex-wrap` on small screens (or `min-w-0` + allow wrap) so item 3 drops to the next line; unchanged ≥`sm`. Extract the repeated stat row if trivial. |
| R-03 | **High** | `src/app/projects/page.tsx` carousel controls `div.flex.gap-[12px].shrink-0` containing `button.p-[6px]…` (~y 7719) | 320px | Right-hand arrow button spans 285→325 (viewport 320): 5px cut off. | `flex-wrap`/`min-w-0` on the header row so controls wrap under the title at ≤360px; no change ≥`sm`. |
| R-04 | **Medium** | `src/app/career/page.tsx` decorative `div.absolute.pointer-events-none > img.object-fill` | all widths (−185…1506 @1440; −119…1060 @1024; −29…324 @320) | Intentional bleeding decoration, currently clipped by `<main className="overflow-x-clip">` with **no comment explaining why**. Acceptable per rule 6 only if documented. | Keep clip (move it from `main` to the decoration's own wrapper where feasible, so it no longer masks R-02-type bugs elsewhere on the page) and add a short comment. |
| R-05 | Medium | `src/app/grievance/page.tsx`, `partners/export-business`, `solutions/net-metering-support` — decorative `div.absolute.left-0.top-0 > img.object-fill` / `div.absolute.inset-0.lg:inset-auto > img.object-contain` | 768–1600 (up to +25px past viewport) | Same pattern as R-04: decorative image overruns viewport 3–25px, masked by clip. | Same: scope the clip to the decorative wrapper + comment, or constrain image to `max-w-full`. |
| R-06 | Low | `src/components/layout/Footer.tsx:136-137` `span…w-[100vw]` divider lines, wrapper has `overflow-x-clip` (line 85) | ≥1440 | Intentional full-bleed divider; correct. Present on every page in the unclipped scan (this is the bulk of scan "hits"). | No change; add one-line comment documenting the intentional bleed (rule 6). |
| R-07 | Medium | `src/components/layout/Header.tsx:261` (nav dropdowns), `:309` (language menu) | `hnav` (≥1180px) on **touch** devices: iPad Pro 1366 landscape, Surface, large Androids | Open on `group-hover` / `group-focus-within`. Nav items are also real links, so a tap may navigate before the menu is seen (iOS "first-tap hover" is inconsistent). Language menu has hover only: no `focus-within`, so keyboard and touch users can't open it. | Add `group-focus-within` to the language menu (desktop look unchanged); evaluate real touch emulation at 1366 and decide whether a tap-toggle (`aria-expanded`) for items with `groups` is warranted. **Verify first, change second.** |
| R-08 | Medium | `src/components/layout/Header.tsx` mobile drawer (~L360-422) | < 1180px | The language selector (Google Translate) exists only in the desktop bar; it is **absent** from the mobile drawer. Content/feature is unreachable on phones and tablets. | Needs a decision: adding a language control to the drawer is a new UI element (permitted only if strictly required; would reuse existing styles). I'll implement it minimally unless you say not to — **flagged for your review.** |
| R-09 | Low | `Header.tsx` hamburger (`p-[9px] -m-[9px]` on 26px icon) | < 1180px | Tap target is exactly 44×44. Passes the 44px rule, no change needed; recorded for the verification matrix. | none |
| R-10 | Low | `min-w-[1100px]` (projects table), `min-w-[760px]` (contact map), `min-w-[900/720px]` (sections table), `min-w-[400px]` (blog specs) | < those widths | All sit inside their own `overflow-x-auto` wrapper (sideways swipe by design, confirmed: no document overflow). | No change; verify swipe works on touch emulation and wrappers show a scroll affordance. |
| R-11 | Low | Home `canvas-zoom` sections: fixed `w-[1920px]`/`w-[1602px]`/`w-[1600px]` artboards in `home/*`, `grievance`, `our-infrastructure` | ≥1440 (scaled by `zoom`), stacked fluid layouts below | By design. Scan found no overflow from these at 1440–1920. | No change; this is the desktop-fidelity mechanism and must not be touched. |
| R-12 | Low | Animation overflow check | all | Reveals translate on Y only (`ScrollReveal`, `Reveal`); marquee is clipped; carousel slide-in X 48px is inside the projects carousel. No animation-caused overflow detected. | none |

### Checked and clean
`h-screen`/`100vh`: none (`min-h-dvh`, `100dvh` only). Iframes (Manufacturing ×2): sized via wrappers, no overflow found. Forms: global rule keeps inputs ≥16px on ≤1023px/coarse pointers (`globals.css`). Sliders (`ValuesSlider`, `LifeSlider`, `ProductGallery`, projects carousel) are hand-written (no Swiper `breakpoints` to update); no overflow found at any scanned width; **swipe/touch behaviour still needs interactive verification in Phase 3**.

## 3. Not yet verified (Phase 3 scope)
Screenshots + visual inspection at all 19 viewports, interactive checks (drawer, dropdowns, tabs, sliders, forms), touch emulation of R-07, and the 1920/1440 pixel-diff after fixes. The scan is geometric only: it can't see overlap, awkward whitespace or tiny text, so "0 overflow" ≠ "looks right".

## 4. Proposed implementation order
1. R-01 (products/dcdb) → 2. R-02/R-03 (3 stat rows + projects controls) → 3. R-04/R-05/R-06 (scope clips + document) → 4. R-07/R-08 (header; touch + language) → 5. visual sweep for anything the geometric scan can't see.
Suggested branch `responsive-fixes`; the tree already has ~70 uncommitted changes, so commit or stash first for a clean diff.

## 5. Fix status (updated)

| ID | Status | Verification |
|---|---|---|
| R-01 | **Fixed** (`products/dcdb/page.tsx`: 800/750 columns now `flex-[800_1_0%]`/`flex-[750_1_0%]` with `min-w-0` + same `max-w`; form box `lg:max-w-[1576px]`) | scrollWidth == viewport at 1920/1600/1440/1366/1280/1024/820/390. 1920 pixel-diff vs baseline: 0 px. 1440 differs from baseline only because the baseline itself was the 1632px-wide bug. |
| R-02 | **Fixed** (`career`, `grievance`, `our-infrastructure`: stat row `flex-wrap`, items `min-w-[104px]`) | No clipped element at 390/375/360/320. 1920 + 1440 pixel-diff: 0 px on all three. |
| R-03 | **Fixed** (`projects/ProjectsFilter.tsx`: title block `min-w-0` so it wraps instead of pushing the arrows) | No clipped element at 390/360/320. 1920 + 1440 pixel-diff: 0 px (one run showed a blank lazy-loaded tile; re-capture was 0 px, capture timing, not layout). |
| R-04 – R-08 | Open | — |

Note: on ≤~390px the 3 stats now wrap 2 + 1 instead of sitting in one cramped row (reflow, allowed). Visual check recommended.

## 6. Round 2: desktop layout down to 1200px + mobile polish

**Mechanism** (`src/app/globals.css`):
- `--breakpoint-canvas` 1440 → **1200px**; `.canvas-zoom` now scales from 1200px (new `--z` steps 0.615 … 0.719 = (vw-20)/1920, same formula as the existing steps). The 1600px canvases (`zoom-1600`) keep their own scaling in 1100–1439.
- `--breakpoint-xl` 1280 → **1199.84px** so layouts that go desktop at `xl:` do so in step with the canvas (kept just under canvas so Tailwind's cascade order xl < canvas is unchanged).
- New `--breakpoint-desk: 90rem` (1440px): the old canvas value, now used by the non-scaled chrome (`Header.tsx`, `Footer.tsx`: `canvas:` → `desk:`, `max-canvas:` → `max-desk:`), so header/footer behave exactly as before.

**Other fixes**: blog post (`blog/[slug]`: image `xl:shrink`, content column `min-w-0` → specs tables scroll inside their wrapper at 1200), header logo `w-[164px] min-[360px]:w-[199px]`, footer links 2 columns on mobile (+ `max-sm:whitespace-normal`), home Core Products 2-column grid on mobile with compact type, home section padding `max-sm:py-8/10`, about-us/contact hero banners `aspect-[4/3] sm:aspect-[16/9]` on mobile (were 3.6:1 strips), hero CTAs left-aligned on mobile (contact, career, blog, download-resources, faqs, grievance, our-infrastructure), dcdb hero CTAs `flex-wrap`, career hero photo no longer overlaps the buttons on mobile, justified text only from `lg` (contact, blog post).

**Verification**
- Desktop guard: all 45 routes × (1920, 1440) pixel-diffed against the Phase-0 baseline after the breakpoint changes: **identical** except (a) `/products` + `/products/dcdb` @1440 (baseline was the 1632px-wide bug, now 1440), (b) `private-label-manufacturing` @1920 (baseline captured with a heading not yet revealed; current render is correct). Runs also showed intermittent diffs on `/blog`, `/projects` that disappeared on re-capture (lazy images not loaded in time), confirmed by re-running those pages alone.
- Overflow scan (page-level clip disabled) at 1439/1366/1280/1200/1100/1024/900/820/768/430/414/390/375/360/320: remaining hits are only the documented decorative bleeds (R-04/R-05: `/career`, `/grievance`, `/partners/export-business`, `/solutions/net-metering-support`) and an artefact of the audit mode at 320px (header measured 332 only while clipping is disabled; real-mode 320px: scrollWidth 320, hamburger visible).
- Visual review done at 1200 (home, about-us, projects, contact, rooftop-solar, blog post) and 390 (home, about-us, contact, rooftop-solar, dcdb, career, blog). **Not yet visually reviewed** at 1200–1439 / 390: the other ~35 routes, nor 768/820/1024 tablets, nor touch/slider/form behaviour.
