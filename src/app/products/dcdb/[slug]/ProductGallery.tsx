"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

interface Props {
  image: string;
  alt: string;
  description: string;
  patternSrc: string;
}

// Figma node 106:1778 (page coordinates, 1920 canvas, container origin x=60).
// Everything below is expressed in the 1800 x 693 design box, which starts at the top of the floating
// product photo (page y=184); the navy panel is 1800 x 510 and starts at page y=367.
const PANEL_TOP = 183; // 367 - 184
const PANEL_H = 510;
// Figma cuts an L-shaped notch out of the panel's bottom-left corner (431 x 171) for the thumbnails.
const NOTCH_W = 431;
const NOTCH_H = 171;
const THUMB = 114;
const THUMB_GAP = 20.6;
const GALLERY = ["/assets/dcdb/gallery/gallery-2.webp", "/assets/dcdb/gallery/gallery-3.webp"];

function useGallery(image: string) {
  const slides = [image, ...GALLERY];
  const [active, setActive] = useState(0);
  const touch = useRef<number | null>(null);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const swipe = {
    onTouchStart: (e: React.TouchEvent) => { touch.current = e.touches[0].clientX; },
    onTouchEnd: (e: React.TouchEvent) => {
      if (touch.current === null) return;
      const dx = e.changedTouches[0].clientX - touch.current;
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
      touch.current = null;
    },
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };
  return { slides, active, setActive, prev, next, swipe, onKey };
}

/** Stacked slides that cross-fade and glide in the direction of travel (one shared easing for the whole site). */
function SlideStack({ slides, active, alt, sizes, priority }: { slides: string[]; active: number; alt: string; sizes: string; priority?: boolean }) {
  return (
    <>
      {slides.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-[opacity,translate,scale] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === active ? "opacity-100 translate-x-0 scale-100" : i < active ? "opacity-0 -translate-x-8 scale-95" : "opacity-0 translate-x-8 scale-95"
          }`}
        >
          <Image src={src} alt={i === active ? alt : ""} fill sizes={sizes} priority={priority && i === 0} className="object-contain" />
        </div>
      ))}
    </>
  );
}

function Thumb({ src, selected, onClick, label }: { src: string; selected: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={selected}
      className={`relative shrink-0 overflow-hidden rounded-[12px] bg-[#EDECEB] border cursor-pointer transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_16px_-8px_rgba(43,57,139,0.45)] ${
        selected ? "border-[#2B398B]" : "border-transparent"
      }`}
      style={{ width: THUMB, height: THUMB }}
    >
      <span className="absolute inset-y-[12px] inset-x-[24px]">
        <Image src={src} alt="" fill sizes="114px" className="object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.15)]" />
      </span>
    </button>
  );
}

function Arrows({ prev, next, size }: { prev: () => void; next: () => void; size: number }) {
  const cls = "relative block shrink-0 cursor-pointer transition-[scale,opacity] duration-300 ease-out hover:scale-110 active:scale-95 opacity-90 hover:opacity-100";
  return (
    <div className="flex items-center">
      <button type="button" onClick={prev} aria-label="Previous image" className={cls} style={{ width: size, height: size }}>
        <Image src="/assets/dcdb/gallery/arrow-prev.svg" alt="" fill sizes="70px" />
      </button>
      <button type="button" onClick={next} aria-label="Next image" className={cls} style={{ width: size, height: size }}>
        <Image src="/assets/dcdb/gallery/arrow-next.svg" alt="" fill sizes="70px" />
      </button>
    </div>
  );
}

const InquiryButton = () => (
  <button
    type="button"
    className="inline-flex items-center justify-center gap-[16px] px-[15px] py-[11px] group border border-[#2B398B] bg-primary text-white hover:bg-white hover:text-[#2B398B] transition-colors font-archivo text-[17px] leading-[26px] whitespace-nowrap cursor-pointer"
  >
    <span>Inquiry Now</span>
    <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors" />
  </button>
);

/** Desktop gallery, pixel-placed from Figma (1800 x 693). */
export default function ProductGallery({ image, alt, description, patternSrc }: Props) {
  const g = useGallery(image);

  return (
    <div className="relative w-full" style={{ height: 693 }} onKeyDown={g.onKey}>
      {/* Navy panel with the notch cut out of its bottom-left corner (square corners per Figma) */}
      <div
        className="absolute left-0 w-full overflow-hidden"
        style={{
          top: PANEL_TOP,
          height: PANEL_H,
          clipPath: `polygon(0 0, 100% 0, 100% 100%, ${NOTCH_W}px 100%, ${NOTCH_W}px ${PANEL_H - NOTCH_H}px, 0 ${PANEL_H - NOTCH_H}px)`,
        }}
      >
        <Image src={patternSrc} alt="" fill sizes="1800px" className="object-cover" priority />
        {/* Figma line art (clouds + solar array), 580 x 331 at page x1280 / y411 */}
        <Image src="/assets/dcdb/gallery/hero-art.svg" alt="" width={580} height={331} aria-hidden="true" className="absolute pointer-events-none" style={{ left: 1220, top: 44 }} />
        <p className="absolute z-10 m-0 font-archivo text-[24px] leading-[36px] text-[#F0F5FE]" style={{ left: 36, top: 32, width: 700 }}>
          {description}
        </p>
      </div>

      {/* Thumbnails sit in the notch (white box, 16px padding) */}
      <div className="absolute z-10 flex items-center" style={{ left: 16, top: 553, gap: THUMB_GAP }}>
        {g.slides.map((src, i) => (
          <Thumb key={src} src={src} selected={g.active === i} onClick={() => g.setActive(i)} label={`Show image ${i + 1}`} />
        ))}
      </div>

      {/* Prev / next (Figma "ei:arrow-left", 70 x 70 outlined circles) */}
      <div className="absolute z-10" style={{ left: 459, top: 613 }}>
        <Arrows prev={g.prev} next={g.next} size={70} />
      </div>

      {/* Floating product photo: sibling of the panel so the clip-path never cuts it */}
      <div className="absolute z-20 drop-shadow-[0px_4px_12px_rgba(0,0,0,0.15)]" style={{ left: 892, top: 0, width: 396, height: 595 }} {...g.swipe}>
        <SlideStack slides={g.slides} active={g.active} alt={alt} sizes="400px" priority />
      </div>

      {/* Inquiry Now / View Datasheet */}
      <div className="absolute z-20 flex items-center gap-[16px]" style={{ right: 0, top: 95 }}>
        <InquiryButton />
        <Button variant="outline-primary" showDot className="whitespace-nowrap">View Datasheet</Button>
      </div>
    </div>
  );
}

/** Mobile / tablet gallery: same three images, same motion, swipe + arrows + thumbnails. */
export function ProductGalleryMobile({ image, alt, description, patternSrc }: Props) {
  const g = useGallery(image);

  return (
    <div className="relative w-full overflow-hidden bg-primary-dark" onKeyDown={g.onKey}>
      <Image src={patternSrc} alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative z-10 flex flex-col gap-[24px] p-[20px] sm:p-[32px]">
        <div className="relative mx-auto w-full max-w-[420px] aspect-[396/450] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]" {...g.swipe}>
          <SlideStack slides={g.slides} active={g.active} alt={alt} sizes="(min-width:640px) 420px, 90vw" priority />
        </div>
        <div className="flex items-center justify-between gap-[16px]">
          <div className="flex items-center gap-[10px]">
            {g.slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => g.setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={g.active === i}
                className={`relative h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] overflow-hidden rounded-[10px] bg-[#EDECEB] border cursor-pointer transition-colors duration-300 ${g.active === i ? "border-[#2B398B] ring-2 ring-white/70" : "border-transparent"}`}
              >
                <span className="absolute inset-[8px]">
                  <Image src={src} alt="" fill sizes="80px" className="object-contain" />
                </span>
              </button>
            ))}
          </div>
          <Arrows prev={g.prev} next={g.next} size={48} />
        </div>
        <p className="m-0 font-archivo text-[16px] leading-[1.5] text-[#F0F5FE]">{description}</p>
      </div>
    </div>
  );
}
