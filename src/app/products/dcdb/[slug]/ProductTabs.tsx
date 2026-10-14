"use client";

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  desc: string;
}

const highlights: AccordionItem[] = [
  { title: "Compact, Weatherproof Enclosure", desc: "An IP-rated housing keeps internal components sealed from dust and moisture, suitable for rooftop and outdoor mounting." },
  { title: "Clear RYB Fault Indication", desc: "Red-Yellow-Blue phase/fault indicators let technicians identify issues at a glance without opening the enclosure." },
  { title: "Field-Ready Terminal Layout", desc: "Clearly labelled, spaced terminals reduce wiring errors and speed up installation for EPCs and electricians." },
];

const benefits: AccordionItem[] = [
  { title: "Enhanced Electrical Safety", desc: "Protects your solar PV system against overcurrent, short circuits, reverse current, and voltage fluctuations, helping prevent equipment damage and ensuring safe operation." },
  { title: "Maximum System Reliability", desc: "Consistent DC-side protection keeps your array running at peak output, minimising unplanned downtime across the life of the installation." },
  { title: "Reduced Maintenance Costs", desc: "Durable, high-grade components reduce the frequency of field servicing, lowering the total cost of ownership over the system lifetime." },
  { title: "Weatherproof Performance", desc: "IP-rated enclosures resist dust, moisture, and extreme temperatures, making the unit dependable in outdoor and rooftop conditions." },
  { title: "Faster & Easier Installation", desc: "Clearly labelled terminals and a compact modular layout cut installation time for EPCs and field technicians." },
  { title: "Long Service Life", desc: "Built with premium fuses, MCBs, and surge protection devices engineered for reliable performance over 25+ years." },
];

const features: AccordionItem[] = [
  { title: "DIN-Rail Mounted Components", desc: "Fuses, MCBs, and SPDs are mounted on a standard DIN rail for easy servicing and future upgrades." },
  { title: "Dedicated Earthing Terminal", desc: "A separate earth bus bar ensures a safe, code-compliant grounding path for the whole enclosure." },
  { title: "MPPT-Matched String Inputs", desc: "Input and output ratings are matched to the stated MPPT configuration, avoiding under- or over-protection." },
];

const specs: AccordionItem[] = [
  { title: "Rated Voltage & Current", desc: "Sized to the product's stated kW range with DC-rated fuses or MCBs matched to string current." },
  { title: "Enclosure Protection Rating", desc: "IP65-rated polycarbonate or powder-coated metal enclosure, suitable for outdoor rooftop mounting." },
  { title: "Surge Protection", desc: "Optional integrated Type 2 SPD available on request for sites with higher lightning exposure." },
];

const installation: AccordionItem[] = [
  { title: "Mount the Enclosure", desc: "Fix the DCDB to a shaded, accessible wall or structure near the array, keeping cable runs short." },
  { title: "Connect DC Strings", desc: "Land each PV string on its labelled input terminal, checking polarity before energising." },
  { title: "Commission & Test", desc: "Verify fuse/MCB ratings, tighten all terminals to spec, and test fault indication before handover." },
];

const tabs = [
  { key: "highlights", label: "Product Highlights", verticalLabel: "Highlights", items: highlights },
  { key: "benefits", label: "Benefits", verticalLabel: "Benefits", items: benefits },
  { key: "features", label: "Product Features", verticalLabel: "Features", items: features },
  { key: "specs", label: "Technical Specifications", verticalLabel: "Specs", items: specs },
  { key: "installation", label: "Installation Process", verticalLabel: "Install", items: installation },
] as const;

function AccordionList({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <React.Fragment key={item.title}>
            <div className="flex items-start gap-[24px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-[5px] bg-[#EDF3FF] flex items-center justify-center">
                <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex-1 flex items-start justify-between gap-[24px] text-left cursor-pointer"
              >
                <div className="flex flex-col gap-[8px]">
                  <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[32px] font-semibold text-[#2B398B]">
                    {item.title}
                  </h3>
                  {isOpen && (
                    <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                      {item.desc}
                    </p>
                  )}
                </div>
                <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </div>
            {i < items.length - 1 && <hr className="border-[#9DBCF3]" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function ProductTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("benefits");
  const current = tabs.find((t) => t.key === active) ?? tabs[1];

  return (
    <div className="flex flex-col items-center gap-[40px] w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-[12px] lg:gap-[18px] w-full border-b border-[#E8E8E8]">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`flex items-center px-[16px] py-[12px] lg:px-[28px] lg:py-[16px] cursor-pointer rounded-t-[12px] border-b-2 transition-colors ${
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
      <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[60px] w-full pt-[20px]">
        <div className="hidden lg:flex w-[100px] shrink-0 items-center justify-center">
          <span className="font-recia italic font-light text-[64px] text-[#9DBCF3] leading-none">
            {current.verticalLabel}
          </span>
        </div>
        <div className="hidden lg:block w-[1px] self-stretch bg-[#C6CCED]" />

        <AccordionList items={current.items} />
      </div>
    </div>
  );
}
