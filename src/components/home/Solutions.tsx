"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Residential Rooftop Solar",
    desc: "A home solar system must provide enough electric energy to fulfil all the power requirements of home. Here, you can save and earn from your idle rooftop space.",
    link: "/residential"
  },
  {
    title: "Industrial Solar Plants",
    desc: "Large scale solar installations to offset heavy machinery loads and reduce operational costs for manufacturing and processing industries.",
    link: "/industrial"
  },
  {
    title: "Trust/Institutional Solar Plants",
    desc: "Solar setups specifically designed for educational institutions, hospitals, and trusts to ensure reliable power and energy independence.",
    link: "/institutional"
  },
  {
    title: "Commercial Solar Plants",
    desc: "Optimized solar energy systems for commercial complexes, malls, and offices aiming for sustainable and green building certifications.",
    link: "/commercial"
  }
];

export default function Solutions() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      
      {/* Desktop Wrapper */}
      <div className="w-[1920px] max-w-full mx-auto relative h-[710px] max-xl:h-auto max-xl:px-6 max-xl:py-12">
        
        {/* Desktop Layout (Frame 2147224485) */}
        <div className="hidden xl:block absolute left-[160px] top-0 w-[1600px] h-[710px]">
          
          {/* Header (Frame 23) */}
          <div className="absolute left-0 top-0 w-[1600px] h-[112px]">
            <h2 className="absolute left-0 top-0 w-[1600px] h-[78px] font-jost font-normal text-[60px] text-[#2B398B] leading-none m-0 p-0 flex items-center justify-center text-center">
              End-to-End Solar Solutions
            </h2>
            <p className="absolute left-0 top-[86px] w-[1600px] h-[26px] font-archivo font-normal text-[17px] text-[#666666] leading-none m-0 p-0 flex items-center justify-center text-center">
              Alongside our manufacturing business, Ksquare delivers turnkey rooftop solar for homes and businesses with subsidy assistance and long-term monitoring.
            </p>
          </div>

          {/* Content (Frame 2147224484) */}
          <div className="absolute left-0 top-[159px] w-[1600px] h-[550px]">
            
            {/* Left Accordion (Interactive Desktop) */}
            <div className="absolute left-0 top-0 w-[800px] h-[550px] flex flex-col">
              {solutions.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div 
                    key={idx}
                    className={`flex flex-col w-[800px] cursor-pointer group ${
                      idx === 0 ? 'pt-0 pb-[40px]' : idx === solutions.length - 1 ? 'pt-[40px] pb-0' : 'py-[40px]'
                    } ${idx !== solutions.length - 1 ? 'border-b border-[#D9D9D9]' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <div className="flex w-[739px] ml-[31px] items-start">
                      {/* Icon */}
                      <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[5px] shrink-0 bg-[#EDF3FF]">
                        <span className="font-archivo font-normal text-[17px] text-[#333333]">{idx + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-[24px] flex-1 flex flex-col ${isActive ? 'mt-0' : 'mt-[8px]'}`}>
                        <div className="flex items-center justify-between h-[32px]">
                          <h3 className={`font-archivo text-[24px] leading-[32px] m-0 p-0 ${isActive ? 'text-[#2B398B] font-semibold' : 'text-[#333333] font-normal'}`}>
                            {item.title}
                          </h3>
                          <span className="font-archivo font-normal text-[24px] text-[#333333] leading-[32px] m-0 p-0">
                            {isActive ? '-' : '+'}
                          </span>
                        </div>
                        
                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <p className="mt-[16px] w-[667px] font-archivo font-normal text-[17px] text-[#666666] leading-[26px] m-0 p-0">
                              {item.desc}
                            </p>
                            <Link 
                              href={item.link}
                              className="mt-[16px] relative block w-[156px] h-[50px] border border-[#2B398B] group/btn hover:bg-[#2B398B] transition-colors"
                            >
                              <span className="absolute left-[16px] top-[12px] w-[100px] h-[26px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover/btn:text-white transition-colors flex items-center">
                                Read More
                              </span>
                              <span className="absolute left-[132px] top-[21px] w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover/btn:bg-white transition-colors"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Image (Rectangle 170) */}
            <div className="absolute left-[850px] top-0 w-[750px] h-[550px]">
              <Image 
                src="/assets/img_solutions.png" 
                alt="Solar Solutions" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="xl:hidden flex flex-col gap-12 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="font-jost font-normal text-[48px] sm:text-[60px] text-[#2B398B] leading-none m-0 p-0 text-center">
              End-to-End Solar Solutions
            </h2>
            <p className="font-archivo font-normal text-[17px] text-[#666666] leading-relaxed m-0 p-0 text-center">
              Alongside our manufacturing business, Ksquare delivers turnkey rooftop solar for homes and businesses with subsidy assistance and long-term monitoring.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full flex flex-col gap-6">
              {solutions.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div key={idx} className="flex flex-col">
                    <div 
                      className="flex gap-5 cursor-pointer group py-2"
                      onClick={() => setActiveIdx(idx)}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-[5px] shrink-0 bg-[#EDF3FF]">
                        <span className="font-archivo text-[17px] text-[#333333]">{idx + 1}</span>
                      </div>
                      
                      <div className="flex flex-col gap-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-archivo text-[22px] md:text-[24px] leading-[32px] ${isActive ? 'text-[#2B398B] font-semibold' : 'text-[#333333] font-normal'}`}>
                            {item.title}
                          </h3>
                          <span className="font-archivo text-[24px] text-[#333333] leading-[32px]">
                            {isActive ? '−' : '+'}
                          </span>
                        </div>
                        
                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden flex flex-col gap-6 pt-2">
                            <p className="font-archivo font-normal text-[17px] text-[#666666] leading-[26px]">
                              {item.desc}
                            </p>
                            <Link 
                              href={item.link}
                              className="w-[156px] h-[50px] border border-[#2B398B] group/btn hover:bg-[#2B398B] transition-colors flex items-center relative"
                            >
                              <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover/btn:text-white transition-colors">
                                Read More
                              </span>
                              <span className="absolute left-[132px] w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover/btn:bg-white transition-colors"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {idx < solutions.length - 1 && (
                      <div className="w-full h-[1px] bg-[#D9D9D9] mt-4"></div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="w-full aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[550px] relative overflow-hidden shrink-0">
              <Image 
                src="/assets/img_solutions.png" 
                alt="Solar Solutions" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
