"use client";

import { Fragment, useState } from "react";

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
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filtered = faqs.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[46px] items-stretch">
      {/* Sidebar Categories */}
      <div className="w-full xl:w-[360px] shrink-0 bg-[#EFF0F6]">
        <div className="flex flex-col gap-[30px] p-[24px] xl:sticky xl:top-[110px]">
          <h3 className="font-jost text-[28px] lg:text-[32px] leading-[1.3] text-[#041632] font-semibold">
            Popular Questions
          </h3>
          <div className="flex flex-col gap-[20px]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-left font-archivo text-[20px] lg:text-[24px] leading-[26px] py-[4px] pl-[16px] border-l-[3px] transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "border-[#2B398B] text-[#2B398B] font-medium"
                    : "border-transparent text-[#666666] hover:text-[#2B398B] hover:border-[#2B398B]"
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
          <h2 className="font-archivo text-[36px] lg:text-[48px] leading-[1.15] text-[#2B398B] font-normal">
            {activeCategory}
          </h2>
          <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
            Browse our most frequently asked questions about products, installation, warranty and partnership opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:pr-[24px]">
          {filtered.map((item, index) => (
            <Fragment key={item.question}>
              <details className="group py-[20px]" open={index === 0} name="faq-accordion">
                <summary className="flex items-start justify-between gap-[24px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                    {item.question}
                  </span>
                  <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 group-open:hidden">+</span>
                  <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 hidden group-open:block">-</span>
                </summary>
                <p className="font-archivo text-[17px] leading-[26px] text-[#666666] mt-[16px]">
                  {item.answer}
                </p>
              </details>
              {index < filtered.length - 1 && <hr className="border-[#9DBCF3]/40" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
