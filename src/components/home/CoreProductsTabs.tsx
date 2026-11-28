"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RichTitle from "@/components/common/RichTitle";
import ButtonArrow from "@/components/common/ButtonArrow";
import type { HomeCategory } from "@/lib/nav";

const TABS = [
  { key: "core", label: "Core Products" },
  { key: "brand", label: "Our Brands Product" },
] as const;

const INTRO =
  "From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.";

/** `title` / `intro` default to the home page wording; pass `intro=""` to omit the paragraph. */
export default function CoreProductsTabs({ items, title = "Our *Products*", intro = INTRO }: { items: HomeCategory[]; title?: string; intro?: string }) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("core");
  const visible = items.filter((i) => i.type === tab);

  const tabs = (
    <div role="tablist" aria-label="Product type" className="flex items-center gap-[12px] flex-wrap">
      {TABS.map((t) => (
        <button
          key={t.key}
          type="button"
          role="tab"
          aria-selected={tab === t.key}
          onClick={() => setTab(t.key)}
          className={`min-w-[200px] px-[40px] py-[12px] border font-archivo text-[17px] leading-[26px] transition-colors ${
            tab === t.key ? "bg-[#2B398B] border-[#2B398B] text-white" : "border-[#2B398B] text-[#2B398B] hover:bg-[#2B398B]/10"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  const empty = <p className="m-0 font-archivo text-[17px] text-[#666666]">No products to show here yet.</p>;

  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      {/* Desktop Wrapper */}
      <div className="canvas-zoom w-[1920px] max-w-full mx-auto relative max-canvas:px-6 max-canvas:py-8 max-sm:py-0">
        {/* Desktop layout */}
        <div className="hidden canvas:flex flex-col gap-[48px] w-[1600px] mx-auto">
          <div className="flex flex-col gap-[24px]">
            <RichTitle as="h2" text={title} className="font-archivo font-normal text-[60px] text-[#333333] leading-none m-0 p-0" />
            {intro && <p className="w-[1600px] font-archivo font-normal text-[17px] text-[#666666] leading-relaxed m-0 p-0">{intro}</p>}
            {tabs}
          </div>

          {visible.length === 0 ? (
            empty
          ) : (
            <div className="grid grid-cols-4 gap-x-[26.67px] gap-y-[40px]">
              {visible.map((p) => (
                <div key={p.href} className="flex flex-col w-[380px]">
                  <div className="img-hover-zoom relative w-[380px] h-[400px] bg-[#EFF0F6]">
                    {p.img && <Image src={p.img} alt={p.name} fill unoptimized sizes="380px" className="object-contain p-[30px]" />}
                  </div>
                  <div className="relative mt-[24px] h-[164px]">
                    <h3 className="m-0 font-archivo font-medium text-[24px] text-[#333333] leading-none">{p.name}</h3>
                    <p className="absolute left-0 top-[38px] w-[380px] max-h-[52px] overflow-hidden m-0 font-archivo font-normal text-[17px] text-[#666666] leading-[26px] line-clamp-2">{p.desc}</p>
                    <Link href={p.href} className="absolute left-0 top-[114px] w-[156px] h-[50px] border border-[#2B398B] group hover:bg-[#2B398B] transition-colors flex items-center">
                      <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover:text-white transition-colors">View Product</span>
                      <ButtonArrow className="absolute left-[132px] text-[#2B398B] group-hover:text-white" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="canvas:hidden flex flex-col gap-8 sm:gap-12 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
            <RichTitle as="h2" text={title} className="font-archivo font-normal text-[48px] sm:text-[60px] text-[#333333] leading-none m-0 p-0" />
            {intro && <p className="font-archivo font-normal text-[17px] text-[#666666] leading-relaxed m-0 p-0">{intro}</p>}
            {tabs}
          </div>

          {visible.length === 0 ? (
            empty
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
              {visible.map((p) => (
                <div key={p.href} className="flex flex-col w-full group">
                  <div className="img-hover-zoom w-full aspect-square bg-[#EFF0F6] relative mb-6">
                    {p.img && (
                      <div className="absolute inset-[16px] sm:inset-[30px]">
                        <Image src={p.img} alt={p.name} fill unoptimized className="object-contain" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-archivo font-medium text-[18px] sm:text-[24px] leading-[1.25] text-[#333333] mb-2 sm:mb-3">{p.name}</h3>
                  <p className="font-archivo font-normal text-[14px] sm:text-[17px] text-[#666666] mb-4 sm:mb-6 flex-grow line-clamp-3">{p.desc}</p>
                  <Link href={p.href} className="w-full max-w-[156px] h-[50px] border border-[#2B398B] group-hover:bg-[#2B398B] transition-colors flex items-center relative self-start">
                    <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover:text-white transition-colors">View Product</span>
                    <ButtonArrow className="absolute left-[132px] text-[#2B398B] group-hover:text-white" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
