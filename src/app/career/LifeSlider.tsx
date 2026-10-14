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
    <div className="relative w-full max-w-[1440px] mx-auto">
      <div className="relative w-full aspect-[1440/604] overflow-hidden rounded-[16px]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-[-27px] top-1/2 -translate-y-1/2 w-[55px] h-[58px] rotate-180"
      >
        <Image src="/assets/career/slider_arrow.svg" alt="" fill />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-[-27px] top-1/2 -translate-y-1/2 w-[55px] h-[58px]"
      >
        <Image src="/assets/career/slider_arrow.svg" alt="" fill />
      </button>

      <div className="flex items-center justify-center gap-[8px] mt-[24px]">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[8px] rounded-full transition-all ${i === active ? "w-[24px] bg-primary" : "w-[8px] bg-[#C6CCED]"}`}
          />
        ))}
      </div>
    </div>
  );
}
