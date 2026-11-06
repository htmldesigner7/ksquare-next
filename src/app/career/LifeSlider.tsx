"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/assets/career/life_slide_1.png", alt: "Ksquare Energy 8th Foundation Day celebration" },
  { src: "/assets/career/life_slide_2.png", alt: "Life at Ksquare Energy" },
  { src: "/assets/career/life_slide_3.png", alt: "Ksquare Energy team activities" },
];

export default function LifeSlider() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    // Figma: 1600px row, 1440 x 604 photo window (the 1440 x 735 photo is shifted up 131px inside it) with the arrows outside it
    <div className="relative w-full max-w-[1600px] mx-auto">
      <div className="relative w-full lg:w-[90%] mx-auto aspect-[1440/604] overflow-hidden rounded-[16px] lg:rounded-none">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== active}
            className={`absolute left-0 w-full transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            style={{ top: "-21.7%", height: "121.69%" }}
          >
            <Image src={slide.src} alt={slide.alt} fill sizes="1440px" className="object-cover" priority={i === 0} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-[8px] lg:left-0 z-10 top-1/2 -translate-y-1/2 w-[44px] h-[46px] lg:w-[55px] lg:h-[58px] rotate-180 transition-transform duration-300 hover:scale-110"
      >
        <Image src="/assets/career/slider_arrow.svg" alt="" fill />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-[8px] lg:right-0 z-10 top-1/2 -translate-y-1/2 w-[44px] h-[46px] lg:w-[55px] lg:h-[58px] transition-transform duration-300 hover:scale-110"
      >
        <Image src="/assets/career/slider_arrow.svg" alt="" fill />
      </button>
    </div>
  );
}
