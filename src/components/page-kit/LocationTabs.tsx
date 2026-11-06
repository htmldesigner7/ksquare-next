"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Zone } from "./types";

export default function LocationTabs({ zones }: { zones: Zone[] }) {
  const [active, setActive] = useState(0);
  const zone = zones[active];

  return (
    <div className="flex flex-col gap-[32px] w-full">
      {zones.length > 1 && (
        <div role="tablist" className="flex items-center justify-center gap-[8px] sm:gap-[32px] flex-wrap">
          {zones.map((z, i) => (
            <button
              key={z.label}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`relative px-[12px] py-[10px] font-archivo text-[17px] lg:text-[20px] cursor-pointer transition-colors ${
                i === active ? "text-primary font-medium" : "text-[#333333] hover:text-primary"
              }`}
            >
              {z.label}
              <span className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${i === active ? "w-full" : "w-0"}`} />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.ul
          key={zone.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-[12px] m-0 p-0 list-none"
          role="tabpanel"
        >
          {zone.offices.map((o) => {
            const mapHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(o.mapQuery ?? o.name + " " + o.address);
            return (
              <li
                key={o.name}
                className="flex flex-col lg:flex-row lg:items-center gap-[12px] lg:gap-0 bg-[#F0F5FE] hover:bg-[#E3E9FB] transition-colors px-[24px] lg:px-[12px] py-[20px] lg:py-[10px] lg:min-h-[100px]"
              >
                <h3 className="m-0 lg:w-[400px] shrink-0 lg:px-[20px] lg:border-r lg:border-[#C6CCED] font-archivo text-[22px] lg:text-[32px] leading-[34px] font-semibold text-primary">{o.name}</h3>
                <p className="m-0 flex-1 lg:px-[48px] lg:border-r lg:border-[#C6CCED] font-archivo text-[15px] lg:text-[17px] leading-[26px] text-[#666666] lg:text-center">{o.address}</p>
                <div className="lg:px-[20px] shrink-0">
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[12px] px-[16px] py-[10px] border border-primary bg-white text-primary font-archivo text-[14px] hover:bg-primary hover:text-white transition-colors"
                  >
                    Get Direction
                    <span className="w-[6px] h-[6px] rounded-full bg-current" />
                  </a>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
