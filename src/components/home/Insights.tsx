import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Insights() {
  return (
    <section className="w-full bg-[#FFFFFF] py-0 overflow-hidden">
      <div className="canvas-zoom w-full max-w-[1920px] canvas:w-[1920px] mx-auto px-6 canvas:px-[160px] flex flex-col gap-12 canvas:gap-[48px]">
        
        {/* Header Area */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex flex-col gap-4 max-w-[883px]">
            <h2 className="font-jost font-normal text-[48px] canvas:text-[60px] text-[#2B398B] leading-[1.1] canvas:leading-[86.7px] m-0 p-0">
              Latest <span className="font-recia italic font-medium">Insights</span>
            </h2>
            <p className="font-archivo font-normal text-[16px] canvas:text-[17px] text-[#666666] m-0 p-0">
              Stay updated with industry trends, technical knowledge, product innovations, and company updates.
            </p>
          </div>
          
          <Link 
            href="/blog"
            className="h-[58px] border border-[#2B398B] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-[42px] px-6 shrink-0"
          >
            <span className="font-archivo font-normal text-[17px] text-[#2B398B]">
              View All Articles
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B398B]"></span>
          </Link>
        </div>
        
        {/* Content Area */}
        <div className="w-full flex flex-col canvas:flex-row gap-8 canvas:gap-[20px]">
          
          {/* Featured Article */}
          <Link href="/blog/choosing-cable-glands-mc4-connectors" className="w-full canvas:w-[800px] flex flex-col bg-[#FFFFFF] group">
            <div className="w-full h-[300px] sm:h-[400px] canvas:h-[547px] relative overflow-hidden bg-gray-100">
              <Image 
                src="/assets/img_1_13.png" 
                alt="Solar Cables Insight" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="w-full bg-[#F8F8F8] py-8 px-6 canvas:py-0 canvas:px-[50px] canvas:h-[163.5px] flex flex-row items-center canvas:items-end canvas:pb-[40px] justify-between">
              <div className="flex flex-col gap-[16px] flex-1 canvas:max-w-[571px]">
                <div className="h-[32px] bg-white rounded-full flex items-center justify-center border border-[#E5E5E5] shadow-sm w-max px-[24px]">
                  <span className="font-archivo font-normal text-[14px] text-[#666666] leading-none">2026-06-19</span>
                </div>
                <p className="font-archivo font-normal text-[16px] canvas:text-[17px] text-[#666666] leading-[1.5] canvas:leading-[26px] m-0 p-0">
                  Cables are the part of a solar system nobody gets excited about. Panels get the attention. The inverter gets a glossy spec sheet. The wiring? It us...
                </p>
              </div>
              <div className="w-[48px] h-[48px] rounded-full border border-[#2B398B] opacity-50 flex items-center justify-center shrink-0 ml-6 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2B398B]">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
          
          {/* List of Articles */}
          <div className="w-full canvas:w-[780px] flex flex-col gap-4 canvas:gap-[8px]">
            {articles.map((article, idx) => (
              <Link 
                key={idx} 
                href={article.link}
                className="w-full bg-[#F8F8F8] p-6 sm:p-8 canvas:py-[30px] canvas:px-[40px] flex flex-row items-center justify-between group"
              >
                <div className="flex flex-col gap-[16px] flex-1 canvas:max-w-[628px]">
                  <div className="h-[32px] bg-white rounded-full flex items-center justify-center border border-[#E5E5E5] shadow-sm w-max px-[24px]">
                    <span className="font-archivo font-normal text-[14px] text-[#666666] leading-none">{article.date}</span>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-archivo font-normal text-[20px] canvas:text-[24px] text-[#333333] leading-[1.2] canvas:leading-[32px] m-0 p-0">
                      {article.title}
                    </h3>
                    <p className="font-archivo font-normal text-[16px] canvas:text-[17px] text-[#666666] leading-[1.5] canvas:leading-[26px] m-0 p-0">
                      {article.desc}
                    </p>
                  </div>
                </div>
                <div className="w-[48px] h-[48px] rounded-full border border-[#2B398B] opacity-50 flex items-center justify-center shrink-0 ml-6 canvas:ml-[24px] group-hover:opacity-100 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2B398B]">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
