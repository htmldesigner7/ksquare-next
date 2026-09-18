"use client";

import { useState } from "react";

interface ResourceItem {
  title: string;
}

const tabsData: { label: string; items: ResourceItem[] }[] = [
  {
    label: "Product Catalogues",
    items: [
      { title: "DCDB & ACDB Product Catalogue" },
      { title: "Solar Cables & Connectors Catalogue" },
      { title: "Enclosures & BOS Accessories Catalogue" },
    ],
  },
  {
    label: "Brochures",
    items: [
      { title: "B2B Solar Products Brochure" },
      { title: "B2C Solar Products Brochure" },
      { title: "Residential Rooftop Solar Project Brochure" },
      { title: "Solsquare Brochure - Cables" },
      { title: "Kenclozer Brochure" },
    ],
  },
  {
    label: "Certificates",
    items: [
      { title: "ISO 9001:2015 Certificate" },
      { title: "IEC 61439 Test Certificate" },
      { title: "BIS Registration Certificate" },
    ],
  },
  {
    label: "Notification",
    items: [
      { title: "PM Surya Ghar Scheme Notification" },
      { title: "Net Metering Policy Update - Gujarat" },
      { title: "MNRE Subsidy Circular 2026" },
    ],
  },
  {
    label: "Datasheet",
    items: [
      { title: "DCDB Technical Datasheet" },
      { title: "ACDB Technical Datasheet" },
      { title: "Solsquare Cable Datasheet" },
    ],
  },
];

export default function DownloadTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col items-center gap-[40px] w-full">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-[10px] lg:gap-[18px]">
        {tabsData.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`flex items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] rounded-t-[12px] transition-colors ${
              i === activeTab ? "bg-[#EFF0F6] border-b-2 border-primary" : "border-b-2 border-transparent"
            }`}
          >
            <span
              className={`font-archivo text-[16px] lg:text-[24px] leading-[26px] whitespace-nowrap ${
                i === activeTab ? "text-primary font-semibold" : "text-[#666666]"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col md:flex-row items-start gap-[24px] md:gap-[60px] w-full">
        <div className="hidden md:flex flex-col justify-center shrink-0 w-[100px] self-stretch relative">
          <span className="font-recia italic font-light text-[40px] lg:text-[64px] text-[#9DBCF3] leading-[1] whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
            {tabsData[activeTab].label}
          </span>
        </div>
        <div className="hidden md:block w-px self-stretch bg-[#9DBCF3]" />

        <div className="flex flex-col items-stretch gap-[24px] w-full">
          {tabsData[activeTab].items.map((item, i) => (
            <div key={item.title}>
              <div className="flex items-center gap-[24px] w-full flex-wrap">
                <div className="w-[48px] h-[48px] shrink-0 bg-[#EDF3FF] rounded-[5px] flex items-center justify-center">
                  <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
                </div>
                <div className="flex items-center justify-between w-full gap-[16px] flex-wrap">
                  <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                    {item.title}
                  </h3>
                  <a href="#" className="flex items-center gap-[16px] group">
                    <span className="font-archivo text-[17px] leading-[26px] text-primary">Download</span>
                    <span className="w-[8px] h-[8px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
              {i < tabsData[activeTab].items.length - 1 && <hr className="border-[#9DBCF3]/40" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
