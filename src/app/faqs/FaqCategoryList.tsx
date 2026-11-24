"use client";

import { Fragment, useState } from "react";
import Disclosure from "@/components/common/Disclosure";

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export default function FaqCategoryList({
  categories,
  faqs,
}: {
  categories: string[];
  faqs: FaqItem[];
}) {
  // Figma opens on the mixed "Popular Questions" list while the first category is highlighted.
  const [selected, setSelected] = useState<string | null>(null);
  const activeCategory = selected ?? categories[0];
  // "Popular Questions": the first question of each category in turn (up to five).
  const popular = categories
    .map((cat) => faqs.find((item) => item.category === cat))
    .filter((item): item is FaqItem => Boolean(item))
    .slice(0, 5);
  const filtered = selected ? faqs.filter((item) => item.category === selected) : popular;

  return (
    <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[46px] items-stretch">
      {/* Sidebar Categories */}
      <div className="w-full xl:w-[360px] shrink-0 bg-[#EFF0F6] xl:self-start xl:min-h-[620px]">
        <div className="flex flex-col gap-[16px] xl:gap-[30px] p-[16px] xl:p-[24px] xl:sticky xl:top-[110px]">
          <h3 className="font-inter text-[22px] xl:text-[32px] leading-[1.3] text-[#041632] font-semibold">
            Popular Questions
          </h3>
          <div className="flex gap-[10px] overflow-x-auto xl:flex-col xl:gap-[20px] xl:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelected(cat)}
                className={`shrink-0 whitespace-nowrap text-left font-archivo text-[15px] xl:text-[24px] leading-[22px] xl:leading-[26px] px-[16px] py-[8px] rounded-full border xl:rounded-none xl:border-0 xl:border-l-[3px] xl:px-0 xl:py-[4px] xl:pl-[16px] transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "border-[#2B398B] bg-[#2B398B] text-white xl:bg-transparent xl:text-[#2B398B] font-medium"
                    : "border-[#C6CCED] bg-white text-[#666666] xl:bg-transparent xl:border-transparent hover:text-[#2B398B] hover:border-[#2B398B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="w-full flex-1 flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] text-[#2B398B] font-normal">
            {selected ?? "Popular Questions"}
          </h2>
          <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
            Browse our most frequently asked questions about products, installation, warranty and partnership opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:pr-[24px]">
          {filtered.map((item, index) => (
            <Fragment key={item.question}>
              <Disclosure defaultOpen={index === 0} group="faq-accordion" className="py-[29px]" summaryClassName="flex items-start justify-between gap-[24px]" summary={<>
                  <span className="font-archivo text-[17px] lg:text-[20px] leading-[28px] text-[#333333]">
                    {item.question}
                  </span>
                  <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 group-data-[open=true]:hidden">+</span>
                  <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 hidden group-data-[open=true]:block">-</span>
                </>}>
                <p className="font-archivo text-[15px] lg:text-[16px] leading-[24px] text-[#666666] mt-[12px]">
                  {item.answer}
                </p>
              </Disclosure>
              {index < filtered.length - 1 && <hr className="border-[#9DBCF3]/40" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
