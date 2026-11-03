import React from "react";
import Image from "next/image";
import Link from "next/link";
import RichTitle from "@/components/common/RichTitle";

const articles = [
  {
    date: "2026-06-08",
    title: "Solar Panel Size Guide for 2BHK, 3BHK & Homes in India",
    desc: "Nobody really thinks about solar until the bill stings. You open it, do a small double take, and suddenly you're typing \"rooftop solar\" into your phone at 11 pm.",
    link: "/blog",
  },
  {
    date: "2026-06-08",
    title: "Industrial Solar Panel Price in India (2026 Complete Cost Guide)",
    desc: "When industrial companies search for industrial solar panel price, they are usually not asking for module cost alone. They want the installed cost of a solar plant...",
    link: "/blog/industrial-solar-panels-benefits-savings",
  },
  {
    date: "2026-06-08",
    title: "How to Select the Right ACDB and DCDB for Solar System (2026)",
    desc: "Most EPCs and installers treat protection as a two-box approach, not a single component. That is why you will often hear the term ACDB DCDB box used...",
    link: "/blog/dcdb-vs-acdb-difference",
  }
];

/** Figma "Content Block" arrow (22.53 x 18.23) inside a 48px outlined circle. */
const ArrowCircle = ({ className = "" }: { className?: string }) => (
  <div className={`w-[48px] h-[48px] rounded-full border border-[#2B398B] flex items-center justify-center shrink-0 group-hover:bg-[#2B398B] transition-colors ${className}`}>
    <svg width="22.53" height="18.23" viewBox="0 0 24 20" fill="none" aria-hidden="true" className="text-[#2B398B] group-hover:text-white transition-colors">
      <path d="M23.49 9.80679L0.510013 9.80679" stroke="currentColor" strokeWidth="1.02003" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1932 0.510013L23.49 9.80679L14.1932 19.1036" stroke="currentColor" strokeWidth="1.02003" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/** Figma date chip: white pill, 4px / 24px padding, 15px / 24px text, no border. */
const DatePill = ({ date }: { date: string }) => (
  <div className="bg-white rounded-[30px] px-[24px] py-[4px] w-max">
    <span className="block font-archivo font-normal text-[15px] text-[#666666] leading-[24px]">{date}</span>
  </div>
);

export default function Insights() {
  return (
    <section className="w-full bg-[#FFFFFF] py-0 overflow-hidden">
      <div className="canvas-zoom w-full max-w-[1920px] canvas:w-[1920px] mx-auto px-6 canvas:px-[160px] flex flex-col gap-12 canvas:gap-[48px]">

        {/* Header Area */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex flex-col gap-[8px] max-w-[883px]">
            <RichTitle
              as="h2"
              text="Latest *Insights*"
              accentClassName="text-[#2B398B]"
              className="font-archivo font-normal text-[48px] canvas:text-[60px] text-[#2B398B] leading-[1.1] canvas:leading-[78.74px] m-0 p-0 relative canvas:top-[0.193em]"
            />
            <p className="font-archivo font-normal text-[16px] canvas:text-[17px] leading-[26px] text-[#666666] m-0 p-0">
              Stay updated with industry trends, technical knowledge, product innovations, and company updates.
            </p>
          </div>

          <Link
            href="/blog"
            className="group border border-[#2B398B] hover:bg-[#2B398B] transition-colors flex items-center justify-center gap-[16px] px-[23px] py-[15px] shrink-0"
          >
            <span className="font-archivo font-normal text-[17px] leading-[26px] text-[#2B398B] group-hover:text-white transition-colors">
              View All Articles
            </span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover:bg-white transition-colors"></span>
          </Link>
        </div>

        {/* Content Area */}
        <div className="w-full flex flex-col canvas:flex-row canvas:items-center gap-8 canvas:gap-[20px]">

          {/* Featured Article */}
          <Link href="/blog/choosing-cable-glands-mc4-connectors" className="w-full canvas:w-[800px] shrink-0 flex flex-col bg-[#FFFFFF] group">
            <div className="w-full h-[300px] sm:h-[400px] canvas:h-[546.67px] relative overflow-hidden bg-gray-100">
              <Image
                src="/assets/img_1_13.png"
                alt="Solar Cables Insight"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full bg-[#F8F8F8] py-8 px-6 canvas:py-0 canvas:px-0 canvas:h-[163.5px] flex items-center justify-center">
              <div className="w-full canvas:w-[699px] flex flex-row items-end justify-between">
                <div className="flex flex-col gap-[16px] flex-1 canvas:max-w-[571px]">
                  <DatePill date="2026-06-19" />
                  <p className="font-archivo font-normal text-[16px] canvas:text-[17px] text-[#666666] leading-[1.5] canvas:leading-[26px] m-0 p-0">
                    Cables are the part of a solar system nobody gets excited about. Panels get the attention. The inverter gets a glossy spec sheet. The wiring? It us...
                  </p>
                </div>
                <ArrowCircle className="ml-6" />
              </div>
            </div>
          </Link>

          {/* List of Articles (Figma: 780 x 710, space-between) */}
          <div className="w-full canvas:w-[780px] canvas:h-[710px] flex flex-col canvas:justify-between gap-4 canvas:gap-0">
            {articles.map((article, idx) => (
              <Link
                key={idx}
                href={article.link}
                className="w-full bg-[#F8F8F8] p-6 sm:p-8 canvas:py-[30px] canvas:px-[40px] flex flex-row items-end justify-between gap-[24px] group"
              >
                <div className="flex flex-col gap-[16px] flex-1">
                  <DatePill date={article.date} />
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-archivo font-normal text-[20px] canvas:text-[24px] text-[#333333] leading-[1.2] canvas:leading-[32px] m-0 p-0">
                      {article.title}
                    </h3>
                    <p className="font-archivo font-normal text-[16px] canvas:text-[17px] text-[#666666] leading-[1.5] canvas:leading-[26px] m-0 p-0">
                      {article.desc}
                    </p>
                  </div>
                </div>
                <ArrowCircle className="canvas:self-start" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
