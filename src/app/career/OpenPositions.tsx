"use client";

import { Fragment, useState } from "react";
import Button from "@/components/common/Button";

interface Position {
  title: string;
  category: string;
}

export default function OpenPositions({
  tabs,
  positions,
}: {
  tabs: string[];
  positions: Position[];
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filtered = activeTab === "All Positions" ? positions : positions.filter((p) => p.category === activeTab);

  return (
    <div className="flex flex-col items-center gap-[40px] w-full">
      {/* Tabs */}
      <div className="flex items-center gap-[10px] lg:gap-[18px] flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] transition-colors rounded-t-[12px] border-b border-transparent ${
              activeTab === tab ? "!border-primary" : ""
            }`}
          >
            <span
              className={`font-archivo text-[16px] lg:text-[24px] leading-[26px] ${
                activeTab === tab ? "text-primary font-semibold" : "text-[#666666]"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Positions List */}
      <div className="flex flex-col md:flex-row items-start gap-[24px] md:gap-[60px] w-full">
        <div className="hidden md:flex flex-col justify-center shrink-0 w-[100px] self-stretch relative">
          <span className="font-recia italic font-light text-[40px] lg:text-[64px] text-[#9DBCF3] leading-[1] whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
            Open Positions
          </span>
        </div>
        <div className="hidden md:block w-px self-stretch bg-[#9DBCF3]" />

        <div className="flex flex-col items-stretch gap-[24px] w-full">
          {filtered.length === 0 ? (
            <p className="font-archivo text-[17px] text-[#666666] text-center md:text-left">
              No open positions in this category right now — check back soon or explore other categories.
            </p>
          ) : (
            filtered.map((pos, i) => (
              <Fragment key={pos.title}>
                <div className="flex items-center gap-[24px] w-full">
                  <div className="w-[48px] h-[48px] shrink-0 bg-[#EDF3FF] rounded-[5px] flex items-center justify-center">
                    <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
                  </div>
                  <div className="flex items-center justify-between flex-1 min-w-0 gap-[16px] flex-wrap">
                    <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                      {pos.title}
                    </h3>
                    <Button variant="outline-primary" href="#connect" showDot className="!px-[16px] !py-[12px] shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </div>
                {i < filtered.length - 1 && <hr className="border-[#9DBCF3]/40" />}
              </Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
