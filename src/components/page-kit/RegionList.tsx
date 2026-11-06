"use client";

import React, { useState } from "react";
import Collapse from "@/components/common/Collapse";

interface State {
  name: string;
  blurb?: string;
  cities?: string[];
}

/** Accordion of states on the brand-blue background; the open state lists its cities. */
export default function RegionList({ states }: { states: State[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {states.map((st, i) => {
        const isOpen = open === i;
        const expandable = !!(st.blurb || st.cities?.length);
        return (
          <div key={st.name} className="border-b border-white/30">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-[18px] text-left cursor-pointer"
            >
              <span className={`font-archivo text-[24px] lg:text-[32px] leading-[1.2] transition-colors ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}>{st.name}</span>
              {expandable && (
                <span className={`text-white text-[28px] leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  +
                </span>
              )}
            </button>
            {expandable && (
              <Collapse open={isOpen}>
                  <div className="flex flex-col gap-[16px] pb-[24px]">
                    {st.blurb && <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-white/85">{st.blurb}</p>}
                    {st.cities && (
                      <ul className="m-0 p-0 list-none grid grid-cols-2 sm:grid-cols-3 gap-x-[24px] gap-y-[10px]">
                        {st.cities.map((c) => (
                          <li key={c} className="flex items-center gap-[10px] font-archivo text-[16px] text-white">
                            <span className="h-[6px] w-[6px] rounded-full bg-white/70" aria-hidden="true" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
              </Collapse>
            )}
          </div>
        );
      })}
    </div>
  );
}
