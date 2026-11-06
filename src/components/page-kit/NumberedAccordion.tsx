"use client";

import React, { useState } from "react";
import Collapse from "@/components/common/Collapse";

/** Numbered accordion used beside a photo; one item open at a time. */
/** `large` = Figma "Who We Partner With": 48px number tile, 24/32 titles, 40px row padding. */
export default function NumberedAccordion({ items, large = false }: { items: { title: string; desc: string }[]; large?: boolean }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className={`border-b transition-colors duration-300 ${isOpen ? "border-primary" : "border-[#9DBCF3]"}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`group flex w-full items-center gap-[20px] ${large ? `lg:gap-[24px] py-[20px] ${items.length > 4 ? "lg:pt-[32px]" : "lg:pt-[40px]"} ${isOpen ? "lg:pb-[8px]" : items.length > 4 ? "lg:pb-[32px]" : "lg:pb-[40px]"}` : "py-[20px]"} text-left cursor-pointer`}
            >
              <span className={`flex ${large ? "h-[28px] w-[28px] lg:h-[48px] lg:w-[48px] lg:text-[18px]" : "h-[28px] w-[28px]"} shrink-0 items-center justify-center font-archivo text-[14px] transition-colors ${large ? "rounded-full bg-[#EDF3FF] text-[#333333]" : isOpen ? "bg-primary text-white" : "bg-[#EDF3FF] text-[#333333] group-hover:bg-primary group-hover:text-white"}`}>{i + 1}</span>
              <span className={`flex-1 font-archivo text-[17px] ${large ? `lg:text-[24px] lg:leading-[32px] ${isOpen ? "font-semibold" : "font-normal"}` : "lg:text-[18px] font-medium"} transition-colors ${isOpen ? "text-primary" : "text-[#333333] group-hover:text-primary"}`}>{item.title}</span>
              <span className={`text-[26px] leading-none text-primary transition-transform duration-300 ${large ? "" : isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                {large && isOpen ? "−" : "+"}
              </span>
            </button>
            <Collapse open={isOpen}>
              <p className={`m-0 pb-[22px] pl-[48px] ${large ? "lg:pb-[40px] lg:pl-[72px]" : ""} font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]`}>{item.desc}</p>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}
