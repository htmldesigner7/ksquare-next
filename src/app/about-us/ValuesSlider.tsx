"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Value {
  chip: string;
  title: string;
  desc: string;
  img: string;
}

function Card({ v }: { v: Value }) {
  return (
    <div className="w-full xl:w-[620px] xl:h-[492px] bg-white border border-[#E0E7FF] p-[24px] xl:p-[40px] flex flex-col justify-between gap-[24px] shadow-[0px_12px_28px_-10px_rgba(15,23,42,0.07)]">
      <div className="flex w-[104px] h-[36px] items-center justify-center rounded-full bg-[#1E3A8A]">
        <span className="font-archivo text-[17px] leading-[27px] text-white whitespace-nowrap">{v.chip}</span>
      </div>
      <div className="relative w-full h-[189px]">
        <Image src={v.img} alt={v.title} fill sizes="620px" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <h3 className="m-0 font-archivo font-semibold text-[26px] xl:text-[32px] leading-[32px] text-[#111827]">{v.title}</h3>
        <p className="m-0 pt-[18px] font-archivo text-[17px] leading-[27px] text-[#374151]">{v.desc}</p>
      </div>
    </div>
  );
}

export default function ValuesSlider({ values }: { values: Value[] }) {
  // `active` is which value is the "current" slide (shown first / highlighted).
  // The row itself keeps the exact original static layout — clicking a dot just
  // slides the order around with the animation already used on /projects.
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setTick((t) => t + 1);
  };

  const ordered = values.map((_, i) => values[(active + i) % values.length]);

  return (
    <div className="w-full flex flex-col items-center gap-[24px]">
      {/* Same static row as the Figma design — order slides when a dot is clicked */}
      <div
        key={tick}
        className="w-full max-w-[1900px] px-4 lg:px-8 xl:px-0 flex flex-col xl:flex-row xl:justify-between gap-[24px] slide-next"
      >
        {ordered.map((v) => (
          <Card key={v.title} v={v} />
        ))}
      </div>

      {/* Slide dots — centered, click to slide */}
      <div className="flex items-center justify-center" role="tablist" aria-label="Values slides">
        {values.map((v, i) => (
          <button
            key={v.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="px-[6px] flex items-center cursor-pointer"
          >
            <span
              className={`block rounded-full transition-all ${
                i === active ? "w-[10px] h-[10px] bg-[#7ECC02]" : "w-[6px] h-[6px] bg-[#E0E0E0] hover:bg-[#C6CCED]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
