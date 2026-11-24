"use client";

import { Fragment, useState } from "react";
import Button from "@/components/common/Button";
import type { DownloadCategory } from "@/lib/downloads";

export default function DownloadTabs({ tabsData }: { tabsData: DownloadCategory[] }) {
  // "Brochures" is the tab shown first, as in the design; otherwise the first tab.
  const [activeTab, setActiveTab] = useState(Math.max(0, tabsData.findIndex((tab) => tab.name === "Brochures")));

  if (tabsData.length === 0) return <p className="font-archivo text-[17px] text-[#666666]">No downloads are available right now. Please check back soon.</p>;

  return (
    <div className="flex flex-col items-center gap-[24px] lg:gap-[40px] w-full">
      {/* Tabs */}
      <div className="flex w-full items-center justify-start lg:justify-center gap-[10px] lg:gap-[18px] flex-nowrap overflow-x-auto lg:flex-wrap lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabsData.map((tab, i) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`flex items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] rounded-t-[12px] transition-colors border-b border-transparent ${
              i === activeTab ? "!border-primary" : ""
            }`}
          >
            <span
              className={`font-archivo text-[16px] lg:text-[24px] leading-[26px] whitespace-nowrap ${
                i === activeTab ? "text-primary font-semibold" : "text-[#666666]"
              }`}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col md:flex-row items-start gap-[24px] md:gap-[60px] w-full">
        <div className="hidden md:flex flex-col justify-center shrink-0 w-[100px] self-stretch relative">
          <span className="font-recia italic font-light text-[40px] lg:text-[64px] text-[#9DBCF3] leading-[1] whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
            {tabsData[activeTab].name}
          </span>
        </div>
        <div className="hidden md:block w-px self-stretch bg-[#9DBCF3]" />

        <div className="flex flex-col items-stretch gap-[24px] w-full">
          {tabsData[activeTab].items.map((item, i) => (
            <Fragment key={`${item.title}-${i}`}>
              <div className="flex items-center gap-[24px] w-full">
                <div className="w-[48px] h-[48px] shrink-0 bg-[#EDF3FF] rounded-[5px] flex items-center justify-center">
                  <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
                </div>
                <div className="flex items-center justify-between flex-1 min-w-0 gap-[16px] flex-wrap sm:flex-nowrap">
                  <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                    {item.title}
                  </h3>
                  <Button variant="outline-primary" href={item.url} external showDot className="shrink-0">
                    Download
                  </Button>
                </div>
              </div>
              {i < tabsData[activeTab].items.length - 1 && <hr className="border-[#9DBCF3]/40" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
