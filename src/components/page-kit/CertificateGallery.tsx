"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export interface Certificate {
  title: string;
  category: string;
  image: string;
}

const ALL = "All Certifications";
const EASE = [0.22, 1, 0.36, 1] as const;

const Icon = {
  close: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  prev: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M14 4l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  next: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  zoom: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" /><path d="M12.7 12.7L17 17M8.5 6v5M6 8.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  download: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

const iconBtn =
  "flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 active:scale-95 cursor-pointer";

export default function CertificateGallery({ items, categories: extra }: { items: Certificate[]; categories?: string[] }) {
  const categories = extra?.length ? (extra[0] === ALL ? extra : [ALL, ...extra]) : [ALL, ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState(categories[0]);
  const [open, setOpen] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);

  const visible = active === ALL ? items : items.filter((i) => i.category === active);
  const current = open !== null ? visible[open] : null;

  const close = useCallback(() => {
    setOpen(null);
    setZoom(false);
    opener.current?.focus();
  }, []);

  const go = useCallback(
    (d: number) => {
      if (open === null || visible.length < 2) return;
      setDir(d);
      setZoom(false);
      setOpen((open + d + visible.length) % visible.length);
    },
    [open, visible.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, go]);

  const openAt = (i: number, el: HTMLElement) => {
    opener.current = el;
    setDir(1);
    setOpen(i);
  };

  const onStageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoom) return;
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div className="flex flex-col gap-[40px]">
      <div role="tablist" className="flex flex-wrap items-center justify-center gap-x-[8px] gap-y-[4px]">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            type="button"
            aria-selected={c === active}
            onClick={() => setActive(c)}
            className={`relative px-[16px] py-[10px] font-archivo text-[17px] lg:text-[24px] cursor-pointer transition-colors ${c === active ? "text-primary font-semibold" : "text-[#666666] hover:text-primary"}`}
          >
            {c}
            <span className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${c === active ? "w-full" : "w-0"}`} />
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="m-0 py-[60px] text-center font-archivo text-[17px] text-[#666666]">Documents for this category will be added soon.</p>
      ) : (
        <motion.ul layout className="m-0 p-0 list-none grid grid-cols-2 lg:grid-cols-4 gap-x-[16px] gap-y-[28px] xl:gap-x-[30px] xl:gap-y-[30px]">
          <AnimatePresence mode="popLayout">
            {visible.map((c, i) => (
              <motion.li key={c.image} layout initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}>
                <button
                  type="button"
                  onClick={(e) => openAt(i, e.currentTarget)}
                  aria-label={`View ${c.title}`}
                  className="group relative block w-full overflow-hidden rounded-[6px] border border-[#C6CCED] bg-white p-[10px] shadow-[0_2px_10px_-6px_rgba(43,57,139,0.25)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[8px] hover:border-primary hover:shadow-[0_26px_50px_-22px_rgba(43,57,139,0.55)] cursor-zoom-in"
                >
                  <div className="relative aspect-[376/529] w-full overflow-hidden rounded-[3px] bg-[#F5F7FF]">
                    <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
                    {/* hover veil with a zoom badge and the document title */}
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-[40%] scale-75 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-500 group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:opacity-100">
                      {Icon.zoom}
                    </span>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 px-[14px] pb-[14px] text-left font-archivo text-[14px] leading-[20px] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {c.title}
                    </span>
                  </div>
                </button>
                <div className="flex flex-col gap-[6px] pt-[14px]">
                  <h3 className="m-0 font-archivo text-[17px] lg:text-[20px] leading-[26px] text-primary line-clamp-2">{c.title}</h3>
                  <p className="m-0 font-archivo text-[14px] lg:text-[15px] leading-[22px] text-[#666666]">{c.category}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[100] flex flex-col bg-[#070B2A]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            {/* top bar */}
            <div className="flex items-center justify-between gap-[16px] px-[16px] py-[14px] lg:px-[32px]" onClick={(e) => e.stopPropagation()}>
              <div className="min-w-0">
                <p className="m-0 truncate font-archivo text-[16px] lg:text-[18px] text-white">{current.title}</p>
                <p className="m-0 font-archivo text-[13px] text-white/60">
                  {current.category} · {open + 1} / {visible.length}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-[10px]">
                <button type="button" aria-label={zoom ? "Zoom out" : "Zoom in"} aria-pressed={zoom} onClick={() => setZoom((z) => !z)} className={iconBtn}>
                  {Icon.zoom}
                </button>
                <a href={current.image} download aria-label="Download this document" className={iconBtn}>
                  {Icon.download}
                </a>
                <button ref={closeBtn} type="button" aria-label="Close" onClick={close} className={iconBtn}>
                  {Icon.close}
                </button>
              </div>
            </div>

            {/* stage */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-[16px] lg:px-[96px]">
              {visible.length > 1 && (
                <button type="button" aria-label="Previous document" onClick={(e) => { e.stopPropagation(); go(-1); }} className={`${iconBtn} absolute left-[12px] lg:left-[32px] z-10`}>
                  {Icon.prev}
                </button>
              )}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current.image}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.96 }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.96 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: EASE }}
                  drag={zoom ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) go(1);
                    else if (info.offset.x > 80) go(-1);
                  }}
                  className="relative h-full max-h-[calc(100dvh-230px)] w-[min(92vw,560px)] overflow-hidden rounded-[8px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/20"
                  style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
                  onClick={(e) => { e.stopPropagation(); setZoom((z) => !z); }}
                  onMouseMove={onStageMove}
                >
                  <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: zoom ? "scale(2.1)" : "scale(1)", transformOrigin: origin }}>
                    <Image src={current.image} alt={current.title} fill sizes="(min-width:1024px) 1100px, 92vw" className="object-contain" priority />
                  </div>
                </motion.div>
              </AnimatePresence>
              {visible.length > 1 && (
                <button type="button" aria-label="Next document" onClick={(e) => { e.stopPropagation(); go(1); }} className={`${iconBtn} absolute right-[12px] lg:right-[32px] z-10`}>
                  {Icon.next}
                </button>
              )}
            </div>

            {/* thumbnails */}
            {visible.length > 1 && (
              <div className="flex justify-center gap-[10px] overflow-x-auto px-[16px] py-[16px]" onClick={(e) => e.stopPropagation()}>
                {visible.map((v, i) => (
                  <button
                    key={v.image}
                    type="button"
                    aria-label={`Show ${v.title}`}
                    aria-current={i === open}
                    onClick={() => { setDir(i > open ? 1 : -1); setZoom(false); setOpen(i); }}
                    className={`relative h-[64px] w-[46px] shrink-0 overflow-hidden rounded-[4px] bg-white transition-all duration-300 cursor-pointer ${i === open ? "ring-2 ring-white scale-110" : "opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={v.image} alt="" fill sizes="46px" className="object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
