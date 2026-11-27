"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/common/Reveal";
import RegionList from "./RegionList";

type RegionState = { name: string; blurb?: string; cities?: (string | { name: string; link?: string | null })[]; /** Map with this state highlighted. */ map?: string };

/** State accordion + India map; the map switches to the clicked state's highlighted map (the default map when none is open or it has none). */
export default function RegionExplorer({ states, map }: { states: RegionState[]; map: string }) {
  const [open, setOpen] = useState(0);
  const src = states[open]?.map ?? map;
  // A long list (many states) is tall, so keep the map in view beside it while scrolling.
  const sticky = states.length > 8 ? " xl:self-start xl:sticky xl:top-[130px]" : "";

  return (
    <>
      <Reveal className="w-full xl:w-[800px] xl:shrink-0">
        <RegionList states={states} onOpenChange={setOpen} />
      </Reveal>
      <Reveal delay={0.1} className={"relative w-full max-w-[520px] xl:max-w-none xl:w-[612px] shrink-0 aspect-[612/620]" + sticky}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute inset-0">
            <Image src={src} alt="Map of India showing Ksquare Energy's presence" fill sizes="(min-width:1024px) 612px, 90vw" unoptimized={src.startsWith("http")} className="object-contain" />
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </>
  );
}
