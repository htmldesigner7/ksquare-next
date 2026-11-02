"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface Article {
  title: string;
  excerpt: string;
  image: string;
}

/** Press cards whose excerpt expands in place; no separate article pages exist for these items. */
export default function ArticleGrid({ items }: { items: Article[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] lg:gap-[32px] items-start">
      {items.map((a, i) => {
        const isOpen = open === i;
        return (
          <article key={`${a.title}-${i}`} className="group flex flex-col bg-[#EFF0F6] border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_40px_-18px_rgba(43,57,139,0.35)]">
            <div className="relative aspect-[580/396] w-full overflow-hidden">
              <Image src={a.image} alt="" fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col gap-[20px] p-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] font-medium leading-[30px] text-[#333333] group-hover:text-primary transition-colors">{a.title}</h3>
                <p className={`m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] ${isOpen ? "" : "line-clamp-3"}`}>{a.excerpt}</p>
              </div>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group/btn inline-flex items-center gap-[16px] self-start px-[16px] py-[10px] border border-primary text-primary font-archivo text-[17px] transition-colors hover:bg-primary hover:text-white cursor-pointer"
              >
                {isOpen ? "Show Less" : "Read More"}
                <span className="h-[8px] w-[8px] rounded-full bg-current" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
