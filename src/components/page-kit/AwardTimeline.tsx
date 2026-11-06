"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Entry {
  year: string;
  label: string;
  title: string;
  desc: string;
  imageBack: string;
  imageFront: string;
}

/** Figma "Recognition Timeline": year, award, stacked photos, prev/next arrows and a year rail. */
export default function AwardTimeline({ entries }: { entries: Entry[] }) {
  const [i, setI] = useState(entries.length - 1);
  const e = entries[i];
  const multi = entries.length > 1;
  const nums = entries.map((x) => parseInt(x.year, 10)).filter((n) => !Number.isNaN(n));
  const years = nums.length ? Array.from({ length: Math.max(...nums) - Math.min(...nums) + 1 }, (_, k) => String(Math.min(...nums) + k)) : entries.map((x) => x.year);

  return (
    <div className="flex flex-col gap-[48px] lg:gap-[90px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={e.year} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-[16px]">
            <span className="font-archivo text-[14px] lg:text-[17px] font-semibold tracking-wide text-white uppercase">{e.label}</span>
            <span className="font-archivo text-[72px] lg:text-[100px] leading-none text-white">{e.year}</span>
            <h3 className="m-0 font-archivo text-[28px] lg:text-[40px] font-medium leading-[1.2] text-white">{e.title}</h3>
            <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-white/85 max-w-[640px]">{e.desc}</p>
            {multi && (
              <div className="flex gap-[8px] pt-[8px]">
                <button type="button" aria-label="Previous award" onClick={() => setI((i - 1 + entries.length) % entries.length)} className="flex h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] items-center justify-center border border-white/70 text-white transition-colors hover:bg-white hover:text-primary cursor-pointer">
                  ‹
                </button>
                <button type="button" aria-label="Next award" onClick={() => setI((i + 1) % entries.length)} className="flex h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] items-center justify-center border border-white/70 text-white transition-colors hover:bg-white hover:text-primary cursor-pointer">
                  ›
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={e.year + "-img"} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="relative mx-auto w-full max-w-[600px] aspect-[600/420]">
            <div className="absolute left-0 top-0 h-[76%] w-[83%] overflow-hidden rounded-[8px] shadow-xl">
              <Image src={e.imageBack} alt="" fill sizes="500px" className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 h-[76%] w-[87%] overflow-hidden rounded-[8px] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image src={e.imageFront} alt={e.title} fill sizes="520px" className="object-cover" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Figma: one rail cell per year from the first to the last award; years without an entry stay inactive */}
      <div role="tablist" aria-label="Award years" className="grid gap-[10px] lg:gap-[16px]" style={{ gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))` }}>
        {years.map((y) => {
          const idx = entries.findIndex((en) => en.year === y);
          const has = idx >= 0;
          return (
            <button
              key={y}
              role="tab"
              type="button"
              disabled={!has}
              aria-selected={has && idx === i}
              onClick={() => has && setI(idx)}
              className={`border-b-2 pb-[10px] text-center font-archivo text-[12px] sm:text-[15px] lg:text-[17px] font-medium transition-colors ${has ? "cursor-pointer" : "cursor-default"} ${has && idx === i ? "border-[#FF6B00] text-[#FF6B00]" : has ? "border-white/60 text-white hover:border-white" : "border-white/40 text-white/80"}`}
            >
              {y}
            </button>
          );
        })}
      </div>
    </div>
  );
}
