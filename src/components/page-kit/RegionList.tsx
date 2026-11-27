"use client";

import React, { useState } from "react";
import Collapse from "@/components/common/Collapse";

interface State {
  name: string;
  blurb?: string;
  /** Plain names, or names with an optional link (cities managed in the admin panel). */
  cities?: (string | { name: string; link?: string | null })[];
}

/** Accordion of states on the brand-blue background; the open state lists its cities. */
/** `onOpenChange` reports the open state (-1 when all are closed) so a map beside the list can follow it. */
export default function RegionList({ states, onOpenChange }: { states: State[]; onOpenChange?: (index: number) => void }) {
  const [open, setOpenState] = useState(0);
  const setOpen = (i: number) => {
    setOpenState(i);
    onOpenChange?.(i);
  };

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
                        {st.cities.map((city) => {
                          const c = typeof city === "string" ? { name: city, link: null } : city;
                          return (
                            <li key={c.name} className="flex items-center gap-[10px] font-archivo text-[16px] text-white">
                              <span className="h-[6px] w-[6px] rounded-full bg-white/70" aria-hidden="true" />
                              {c.link ? (
                                <a href={c.link} className="text-white hover:underline underline-offset-4">
                                  {c.name}
                                </a>
                              ) : (
                                c.name
                              )}
                            </li>
                          );
                        })}
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
