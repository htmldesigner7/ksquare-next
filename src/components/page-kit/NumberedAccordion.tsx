"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Numbered accordion used beside a photo; one item open at a time. */
export default function NumberedAccordion({ items }: { items: { title: string; desc: string }[] }) {
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
              className="group flex w-full items-center gap-[20px] py-[20px] text-left cursor-pointer"
            >
              <span className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center font-archivo text-[14px] transition-colors ${isOpen ? "bg-primary text-white" : "bg-[#EDF3FF] text-[#333333] group-hover:bg-primary group-hover:text-white"}`}>{i + 1}</span>
              <span className={`flex-1 font-archivo text-[17px] lg:text-[18px] font-medium transition-colors ${isOpen ? "text-primary" : "text-[#333333] group-hover:text-primary"}`}>{item.title}</span>
              <span className={`text-[26px] leading-none text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="m-0 pb-[22px] pl-[48px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
