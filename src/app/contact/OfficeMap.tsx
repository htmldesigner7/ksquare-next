"use client";

import React, { useEffect, useRef, useState } from "react";

const MID = "1JEymV48HhQ--0-Uq5rPFGAAebwWcC4I";
const HEADER = 59; // Google's own red header bar inside the embed; pushed out of view because the panel has its own
const VIEWER = `https://www.google.com/maps/d/viewer?mid=${MID}`;

/** Pins from the "Ksquare Office" Google My Map (name, latitude, longitude). */
const PLACES = [
  { name: "Ksquare Energy Pvt Ltd - Solar Company in Ahmedabad", lat: 22.9875815, lng: 72.493289 },
  { name: "Atithi Pure Veg - Baner", lat: 18.5663475, lng: 73.7701208 },
  { name: "Ksquare Energy Pvt Ltd - Solar Company in Surat", lat: 21.1831287, lng: 72.7834455 },
  { name: "BBD Viraj Tower", lat: 26.8711936, lng: 81.0136771 },
  { name: "Ksquare Factory", lat: 22.9068593, lng: 72.4312176 },
];

/** Start view: wide screens show Gujarat to Lucknow (as in the Figma frame); phones zoom out a step so the pins stay in view. */
const HOME_WIDE = { lat: 25.1, lng: 73.4, z: 7 };
const HOME_NARROW = { lat: 21.8, lng: 74.6, z: 6 };

type View = { lat: number; lng: number; z: number };

const embed = (v: View) => `https://www.google.com/maps/d/embed?mid=${MID}&ehbc=DB4437&noprof=1&ll=${v.lat}%2C${v.lng}&z=${v.z}`;

const Pin = () => (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true" className="shrink-0">
    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" fill="#1A237E" />
    <circle cx="7" cy="7" r="2.6" fill="#fff" />
  </svg>
);

const Check = ({ on, red = true }: { on: boolean; red?: boolean }) => (
  <span
    className={`flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors ${on ? (red ? "border-[#DB4437] bg-[#DB4437]" : "border-[#5F6368] bg-[#5F6368]") : "border-[#9AA0A6] bg-transparent"}`}
    aria-hidden="true"
  >
    {on && (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    )}
  </span>
);

const iconBtn = "flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

/**
 * "Ksquare Office" map: the live Google My Map on the right, with the My Maps side panel rebuilt in code on the left
 * like the Figma frame. Every control works: menu (collapse panel), search (filters the places), more (open in Google Maps,
 * full screen, reset), star, share, layer checkboxes and picking a place (re-centres the map on it).
 */
export default function OfficeMap() {
  const wrap = useRef<HTMLDivElement>(null);
  const [home, setHome] = useState<View>(HOME_WIDE);
  const [view, setView] = useState<View>(HOME_WIDE);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const [open, setOpen] = useState(true); // whole panel body
  const [layerOn, setLayerOn] = useState(true); // "Ksquare Offices" layer list
  const [untitledOn, setUntitledOn] = useState(false);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const [starred, setStarred] = useState(false);
  const [copied, setCopied] = useState(false);

  // pick the start view for this screen once, then load the map (avoids loading it twice)
  useEffect(() => {
    const h = window.matchMedia("(min-width: 1024px)").matches ? HOME_WIDE : HOME_NARROW;
    setHome(h);
    setView(h);
    setReady(true);
    try {
      setStarred(localStorage.getItem("ksquare-map-star") === "1");
    } catch {}
  }, []);

  // close the ⋮ menu on outside click / Escape
  useEffect(() => {
    if (!menu) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) return e.key === "Escape" ? setMenu(false) : undefined;
      if (!(e.target as HTMLElement).closest("[data-map-menu]")) setMenu(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [menu]);

  const go = (i: number | null) => {
    setActive(i);
    setView(i === null ? home : { lat: PLACES[i].lat, lng: PLACES[i].lng, z: 14 });
  };

  const q = query.trim().toLowerCase();
  const shown = PLACES.map((p, i) => ({ p, i })).filter(({ p }) => !q || p.name.toLowerCase().includes(q));

  const toggleStar = () => {
    const next = !starred;
    setStarred(next);
    try {
      localStorage.setItem("ksquare-map-star", next ? "1" : "0");
    } catch {}
  };

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Ksquare Office", url: VIEWER });
        return;
      }
      await navigator.clipboard.writeText(VIEWER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(VIEWER, "_blank", "noopener,noreferrer");
    }
  };

  const fullscreen = () => {
    setMenu(false);
    const el = wrap.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.().catch(() => window.open(VIEWER, "_blank", "noopener,noreferrer"));
  };

  return (
    <div ref={wrap} className="flex w-full flex-col bg-white font-[Roboto,Arial,sans-serif] lg:relative lg:block lg:h-[472px] lg:overflow-hidden [&:fullscreen]:h-screen">
      {/* Live map (Google's own header is pushed above the top edge) */}
      <div className="relative order-2 h-[360px] w-full overflow-hidden bg-[#EFF0F6] sm:h-[420px] lg:absolute lg:inset-0 lg:h-full [&:fullscreen]:h-full">
        {ready && (
          <iframe
            key={`${view.lat}-${view.lng}-${view.z}`}
            title="Ksquare Offices map: Ahmedabad, Surat and Baner locations"
            src={embed(view)}
            className="absolute left-0 w-full border-0"
            style={{ top: -HEADER, height: `calc(100% + ${HEADER}px)` }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* My Maps side panel */}
      <div className={`relative z-10 order-1 w-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.3)] lg:absolute lg:left-0 lg:top-0 lg:w-[444px] ${open ? "lg:h-full lg:overflow-y-auto lg:overscroll-contain" : "lg:h-auto"}`}>
        {/* red header */}
        <div className="relative flex h-[64px] items-center bg-[#DB4437] px-[12px] text-white">
          <button type="button" onClick={() => setOpen((o) => !o)} aria-label={open ? "Collapse the places panel" : "Expand the places panel"} aria-expanded={open} className={iconBtn}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
            </svg>
          </button>

          {searching ? (
            <form
              role="search"
              className="ml-[4px] flex min-w-0 flex-1 items-center"
              onSubmit={(e) => {
                e.preventDefault();
                if (shown[0]) go(shown[0].i);
              }}
            >
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setQuery("");
                    setSearching(false);
                  }
                }}
                placeholder="Search this map"
                aria-label="Search this map"
                className="h-[38px] min-w-0 flex-1 rounded-[2px] bg-white px-[12px] text-[15px] text-[#202124] outline-none placeholder:text-[#80868B]"
              />
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSearching(false);
                }}
                aria-label="Close search"
                className={`${iconBtn} ml-[4px]`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
                </svg>
              </button>
            </form>
          ) : (
            <>
              <span className="ml-[10px] flex h-[38px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#F6B26B] via-[#E69138] to-[#3D85C6]" aria-hidden="true">
                <span className="mt-[2px] block h-[14px] w-[14px] rounded-full bg-[#FFD966]" />
              </span>
              <span className="ml-[12px] flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[18px] font-medium leading-[22px]">Ksquare Office</span>
                <span className="text-[12px] font-bold leading-[14px] opacity-90">Intelliworkz</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                  setSearching(true);
                }}
                aria-label="Search this map"
                className={iconBtn}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
                </svg>
              </button>
              <span className="relative" data-map-menu>
                <button type="button" onClick={() => setMenu((m) => !m)} aria-label="More options" aria-haspopup="menu" aria-expanded={menu} className={iconBtn}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" />
                  </svg>
                </button>
                {menu && (
                  <ul role="menu" className="absolute right-0 top-[40px] z-20 m-0 min-w-[210px] list-none rounded-[4px] bg-white p-0 py-[6px] text-[14px] text-[#202124] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    <li role="none">
                      <a role="menuitem" href={VIEWER} target="_blank" rel="noopener noreferrer" onClick={() => setMenu(false)} className="block px-[16px] py-[9px] hover:bg-[#F1F3F4]">
                        Open in Google Maps
                      </a>
                    </li>
                    <li role="none">
                      <button type="button" role="menuitem" onClick={fullscreen} className="block w-full cursor-pointer px-[16px] py-[9px] text-left hover:bg-[#F1F3F4]">
                        Full screen
                      </button>
                    </li>
                    <li role="none">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setMenu(false);
                          go(null);
                        }}
                        className="block w-full cursor-pointer px-[16px] py-[9px] text-left hover:bg-[#F1F3F4]"
                      >
                        Reset map view
                      </button>
                    </li>
                  </ul>
                )}
              </span>
            </>
          )}
        </div>

        {open && (
          <>
            {/* map info */}
            <div className="relative border-b border-[#E0E0E0] bg-[#F8F9FA] px-[24px] py-[18px] text-[14px] leading-[20px] text-[#5F6368]">
              <p className="m-0 text-[#202124]">Ksquare Office</p>
              <p className="m-0 mt-[4px]">10,352 views</p>
              <p className="m-0">Published on February 12</p>
              <button type="button" onClick={share} className="m-0 mt-[8px] cursor-pointer p-0 text-[13px] font-medium uppercase text-[#4285F4] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4285F4]">
                {copied ? "Link copied" : "Share"}
              </button>
              <button type="button" onClick={toggleStar} aria-pressed={starred} aria-label={starred ? "Remove star" : "Star this map"} className="absolute right-[14px] top-[14px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full hover:bg-black/5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill={starred ? "#F9AB00" : "none"} stroke={starred ? "#F9AB00" : "#9AA0A6"} strokeWidth="1.6" aria-hidden="true">
                  <path d="m12 3.5 2.5 5.3 5.8.7-4.3 4 1.1 5.7-5.1-2.9-5.1 2.9 1.1-5.7-4.3-4 5.8-.7L12 3.5Z" />
                </svg>
              </button>
            </div>

            {/* layers */}
            <div className="px-[24px] py-[18px]">
              <button
                type="button"
                onClick={() => setLayerOn((v) => !v)}
                aria-pressed={layerOn}
                className="flex w-full cursor-pointer items-center gap-[24px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4285F4]"
                aria-label={layerOn ? "Hide the Ksquare Offices places" : "Show the Ksquare Offices places"}
              >
                <Check on={layerOn} />
                <span className="text-[16px] font-bold leading-[22px] text-[#202124]">Ksquare Offices</span>
              </button>
              {layerOn && (
                <ul className="m-0 mt-[10px] list-none p-0">
                  {shown.map(({ p, i }) => (
                    <li key={p.name + i}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        className={`flex w-full cursor-pointer items-center gap-[12px] py-[8px] pl-[8px] pr-[8px] text-left text-[14px] leading-[20px] transition-colors hover:bg-[#F1F3F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4285F4] ${active === i ? "bg-[#F1F3F4] text-[#202124]" : "text-[#3C4043]"}`}
                      >
                        <Pin />
                        <span className="truncate">{p.name}</span>
                      </button>
                    </li>
                  ))}
                  {shown.length === 0 && <li className="px-[8px] py-[10px] text-[14px] text-[#5F6368]">No places match &ldquo;{query}&rdquo;</li>}
                </ul>
              )}
              <button
                type="button"
                onClick={() => setUntitledOn((v) => !v)}
                aria-pressed={untitledOn}
                className="mt-[14px] flex w-full cursor-pointer items-center gap-[24px] border-t border-[#E0E0E0] pt-[18px] text-left text-[#9AA0A6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4285F4]"
              >
                <Check on={untitledOn} red={false} />
                <span className="text-[16px] font-medium leading-[22px]">Untitled layer</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
