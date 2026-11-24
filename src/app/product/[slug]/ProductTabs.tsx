"use client";

import React, { useState } from "react";
import Collapse from "@/components/common/Collapse";

export interface ProductTab {
  key: string;
  label: string;
  verticalLabel: string;
  /** Sanitized HTML from the admin editor. Headings become the accordion titles, the content after each one its text. */
  html: string;
}

interface AccordionItem {
  title: string;
  body: string;
}

/** Plain text of a heading: tags removed, common entities decoded (the text is rendered by React, which escapes it again). */
const headingText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();

/** Accordion entries from the (API-sanitized) rich text: every heading is an item title, the content after it is its text. */
function parseItems(html: string): AccordionItem[] {
  const parts = html.split(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/i);
  const items: AccordionItem[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    items.push({ title: headingText(parts[i]), body: (parts[i + 1] ?? "").trim() });
  }
  return items;
}

function AccordionList({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <React.Fragment key={`${item.title}-${i}`}>
            <div className="flex items-start gap-[24px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-[5px] bg-[#EDF3FF] flex items-center justify-center">
                <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full min-h-[44px] items-start justify-between gap-[24px] text-left cursor-pointer"
                >
                  <h3 className={`m-0 font-archivo text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[32px] transition-colors duration-300 ${isOpen ? "font-semibold text-[#2B398B]" : "font-normal text-[#333333] group-hover:text-[#2B398B]"}`}>
                    {item.title}
                  </h3>
                  <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <Collapse open={isOpen}>
                  <div className="m-0 pt-[8px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] [&_p]:m-0 [&_ul]:list-disc [&_ul]:pl-[1.25em]" dangerouslySetInnerHTML={{ __html: item.body }} />
                </Collapse>
              </div>
            </div>
            {i < items.length - 1 && <hr className="border-[#9DBCF3]" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function ProductTabs({ tabs }: { tabs: ProductTab[] }) {
  // "Benefits" is the tab shown first, as in the design; otherwise the first tab.
  const [active, setActive] = useState((tabs.find((t) => t.key === "benefits") ?? tabs[0])?.key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];
  if (!current) return null;
  const items = parseItems(current.html);

  return (
    <div className="flex flex-col items-center gap-[24px] lg:gap-[40px] w-full">
      {/* Tabs */}
      <div role="tablist" className="flex justify-start lg:justify-center gap-[12px] flex-nowrap overflow-x-auto lg:flex-wrap lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-[18px] w-full border-b border-[#E8E8E8]">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className={`flex shrink-0 items-center px-[16px] py-[12px] lg:px-[28px] lg:py-[16px] cursor-pointer rounded-t-[12px] border-b-2 transition-[color,border-color,background-color] duration-300 hover:bg-[#F0F5FE] ${
                isActive ? "border-[#2B398B]" : "border-transparent"
              }`}
            >
              <span
                className={`font-archivo whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-[16px] lg:text-[24px] font-semibold text-[#2B398B]"
                    : "text-[15px] lg:text-[24px] text-[#666666]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content: vertical label + divider + accordion, matching the Figma "Benefits" layout */}
      <div key={active} className="animate-tab-in flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[60px] w-full pt-[20px]">
        <div className="hidden lg:flex w-[100px] shrink-0 items-center justify-center">
          <span className="font-recia italic font-light text-[56px] xl:text-[64px] text-[#9DBCF3] leading-none whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
            {current.verticalLabel}
          </span>
        </div>
        <div className="hidden lg:block w-[1px] self-stretch bg-[#C6CCED]" />

        {items.length > 0 ? (
          <AccordionList key={active} items={items} />
        ) : (
          // No headings in the text: show it as plain formatted content.
          <div className="blog-article min-w-0 flex-1 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]" dangerouslySetInnerHTML={{ __html: current.html }} />
        )}
      </div>
    </div>
  );
}
