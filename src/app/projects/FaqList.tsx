"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

function Icon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 10H16" stroke={open ? "#2B398B" : "#333333"} strokeWidth="1.5" strokeLinecap="round" />
      {!open && <path d="M10 4V16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />}
    </svg>
  );
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.question}
            className={`flex flex-col gap-[16px] p-[20px] md:p-[32px] border-b border-[#DDDDDD] ${isOpen ? "bg-[#F0F5FE]" : "bg-white"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-[24px] text-left cursor-pointer"
            >
              <span
                className={`font-archivo text-[18px] ${isOpen ? "font-medium text-primary" : "font-normal text-[#333333]"}`}
              >
                {item.question}
              </span>
              <Icon open={isOpen} />
            </button>
            {isOpen && (
              <p className="m-0 font-archivo text-[17px] leading-[28px] text-[#666666]">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
