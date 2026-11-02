"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

/** Figma FAQ list: hairline-separated rows, the open row sits on a soft-blue panel. */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full border-b border-[#E5E5E5]">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className={`border-t border-[#E5E5E5] transition-colors duration-300 ${isOpen ? "bg-[#F0F5FE]" : "bg-white hover:bg-[#F8FAFF]"}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="group flex w-full items-center justify-between gap-6 px-[16px] sm:px-[32px] py-[18px] sm:py-[22px] text-left cursor-pointer"
            >
              <span className={`font-archivo text-[17px] sm:text-[18px] leading-[26px] transition-colors duration-300 ${isOpen ? "text-primary font-medium" : "text-[#333333] group-hover:text-primary"}`}>{item.q}</span>
              <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center text-primary" aria-hidden="true">
                <span className="absolute h-[2px] w-[14px] bg-current" />
                <span className={`absolute h-[14px] w-[2px] bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="m-0 px-[16px] sm:px-[32px] pb-[24px] pr-[48px] font-archivo text-[16px] sm:text-[17px] leading-[26px] text-[#666666]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
