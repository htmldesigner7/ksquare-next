"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

interface Props {
  image: string;
  alt: string;
  description: string;
  patternSrc: string;
}

// All measurements below are the exact Figma node positions/sizes (node 106:1778),
// expressed as % of the 1800px-wide design frame so they scale with the container
// instead of being pinned to fixed pixels.
//
// Outer box = from the top of the floating photo (page y=184) to the bottom of the
// navy panel (page y=877): height 693, width 1800.
const PANEL = { top: 26.4, height: 73.6 }; // % of outer box
const IMAGE = { left: 49.56, width: 22, height: 85.86 }; // % of outer box
const BUTTONS = { left: 81.33, top: 13.71 }; // % of outer box

// Below are % of the panel's own box (510 x 1800 at design size)
const DESC = { left: 2, top: 6.27, width: 38.89 };
const THUMBS = { left: 0, top: 69.41, size: 6.33 }; // size = % width (square, panel keeps design ratio)
const THUMB_GAP = 1.14; // 20.6px / 1800
const ARROWS = { left: 25.5, top: 84.31 };

export default function ProductGallery({ image, alt, description, patternSrc }: Props) {
  // Figma's thumbnail strip shows 3 equal 114x114 cards; each product only has one
  // photographed asset today, so all three point at the same image — the active
  // one gets the navy border. Swap in distinct angles here once they exist.
  const thumbs = [image, image, image];
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + thumbs.length) % thumbs.length);
  const next = () => setActive((i) => (i + 1) % thumbs.length);

  return (
    <div className="relative w-full" style={{ aspectRatio: "1800 / 693" }}>
      {/* Navy panel */}
      <div
        className="absolute rounded-[24px] overflow-hidden"
        style={{ left: 0, top: `${PANEL.top}%`, width: "100%", height: `${PANEL.height}%` }}
      >
        <Image src={patternSrc} alt="" fill sizes="1800px" className="object-cover" priority />

        <p
          className="absolute z-10 m-0 font-archivo text-[24px] leading-[36px] text-[#F0F5FE]"
          style={{ left: `${DESC.left}%`, top: `${DESC.top}%`, width: `${DESC.width}%` }}
        >
          {description}
        </p>

        {/* Thumbnails */}
        <div
          className="absolute z-10 flex items-center"
          style={{ left: `${THUMBS.left}%`, top: `${THUMBS.top}%`, width: "100%", gap: `${THUMB_GAP}%` }}
        >
          {thumbs.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative shrink-0 rounded-[12px] overflow-hidden bg-[#EDECEB] p-[12px] border transition-colors cursor-pointer ${
                active === i ? "border-primary" : "border-transparent"
              }`}
              style={{ width: `${THUMBS.size}%`, aspectRatio: "1 / 1" }}
            >
              <Image src={src} alt="" fill className="object-contain" />
            </button>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="absolute z-10 flex items-center gap-[8px]" style={{ left: `${ARROWS.left}%`, top: `${ARROWS.top}%` }}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white text-primary hover:bg-white/90 transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white text-primary hover:bg-white/90 transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating product photo — sibling of the panel so overflow-hidden never clips it */}
      <div
        className="absolute z-20 drop-shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
        style={{ left: `${IMAGE.left}%`, top: 0, width: `${IMAGE.width}%`, height: `${IMAGE.height}%` }}
      >
        <Image src={thumbs[active]} alt={alt} fill sizes="400px" className="object-contain" priority />
      </div>

      {/* Inquiry Now / View Datasheet */}
      <div className="absolute z-20 flex items-center gap-[16px]" style={{ left: `${BUTTONS.left}%`, top: `${BUTTONS.top}%` }}>
        <button
          type="button"
          className="group inline-flex items-center justify-center gap-[16px] px-[24px] py-[12px] bg-primary text-white hover:bg-primary-dark transition-colors font-archivo text-[17px] leading-[26px] whitespace-nowrap cursor-pointer"
        >
          <span>Inquiry Now</span>
          <span className="w-[8px] h-[8px] rounded-full bg-white" />
        </button>
        <Button variant="outline-primary" showDot className="whitespace-nowrap">View Datasheet</Button>
      </div>
    </div>
  );
}
