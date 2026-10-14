"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-[40px] w-full">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="flex flex-col gap-[16px] pb-[20px] border-b-[1.78px] border-[#9DBCF3]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between text-left cursor-pointer"
            >
              <span className="font-archivo text-[20px] md:text-[24px] leading-[32px] text-[#333333]">{item.q}</span>
              <span className="font-archivo text-[24px] leading-[32px] text-[#333333] ml-6 shrink-0">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] m-0">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
