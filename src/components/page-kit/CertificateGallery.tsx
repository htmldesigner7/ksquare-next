"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export interface Certificate {
  title: string;
  category: string;
  image: string;
}

export default function CertificateGallery({ items }: { items: Certificate[] }) {
  const categories = ["All Certifications", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState(categories[0]);
  const [lightbox, setLightbox] = useState<Certificate | null>(null);

  const visible = active === categories[0] ? items : items.filter((i) => i.category === active);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="flex flex-col gap-[40px]">
      <div role="tablist" className="flex flex-wrap items-center justify-center gap-x-[8px] gap-y-[4px]">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            type="button"
            aria-selected={c === active}
            onClick={() => setActive(c)}
            className={`relative px-[16px] py-[10px] font-archivo text-[17px] lg:text-[20px] cursor-pointer transition-colors ${c === active ? "text-primary font-semibold" : "text-[#666666] hover:text-primary"}`}
          >
            {c}
            <span className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${c === active ? "w-full" : "w-0"}`} />
          </button>
        ))}
      </div>

      <motion.ul layout className="m-0 p-0 list-none grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => (
            <motion.li key={c.image} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
              <button
                type="button"
                onClick={() => setLightbox(c)}
                aria-label={`View ${c.title}`}
                className="group relative block w-full overflow-hidden rounded-[4px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_40px_-18px_rgba(43,57,139,0.45)] cursor-zoom-in"
              >
                <div className="relative aspect-[376/529] w-full">
                  <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-primary/95 px-[12px] py-[10px] text-left font-archivo text-[14px] leading-[20px] text-white transition-transform duration-300 group-hover:translate-y-0">
                  {c.title}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-[16px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button type="button" aria-label="Close" onClick={() => setLightbox(null)} className="absolute right-[16px] top-[16px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[22px] text-[#333333] cursor-pointer hover:bg-primary hover:text-white transition-colors">
              ×
            </button>
            <motion.div initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }} className="relative h-[88vh] w-[min(92vw,720px)]" onClick={(e) => e.stopPropagation()}>
              <Image src={lightbox.image} alt={lightbox.title} fill sizes="720px" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-[16px] left-1/2 -translate-x-1/2 m-0 max-w-[90vw] text-center font-archivo text-[15px] text-white">{lightbox.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
