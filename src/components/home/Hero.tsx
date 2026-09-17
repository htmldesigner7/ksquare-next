import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F1B5D]">
      {/* Desktop Wrapper (Scales down on smaller screens) */}
      <div className="w-[1920px] max-w-full mx-auto relative h-[920px] max-lg:h-auto max-lg:pb-32">
        
        {/* Background Image (Rectangle 168) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/img_1_246.png" 
            alt="Hero Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container (Frame 2085663116) */}
        <div className="relative z-10 hidden xl:block mx-auto w-[1602px] h-[621px] top-[165px]">
          
          {/* Main Product Image (Combo Ksquare 1) */}
          <div className="absolute left-[0px] top-[19px] w-[1117px] h-[602px]">
            <Image 
              src="/assets/img_1_248.png" 
              alt="Ksquare Solar Components" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          {/* Titles (Frame 2085663114) */}
          <div className="absolute left-[509px] top-[0px] w-[1093px] h-[179px]">
            <h1 className="absolute left-0 top-0 font-jost font-normal text-[68px] leading-tight text-[#FFFFFF] whitespace-nowrap">
              India's Trusted Manufacturer of
            </h1>
            <h1 className="absolute left-[255px] top-[82px] font-recia font-semibold text-[68px] leading-tight text-[#FFFFFF] whitespace-nowrap">
              Solar Component Systems
            </h1>
          </div>

          {/* Description & Buttons (Frame 2085663103) */}
          <div className="absolute left-[1155px] top-[354px] w-[447px] h-[194px]">
            <p className="font-archivo font-normal text-[20px] leading-relaxed text-[#FFFFFF] w-[447px] h-[112px]">
              DCDBs, ACDBs, combiner boxes, junction boxes and BOS accessories engineered, tested and shipped from our own Ahmedabad facility to EPCs, distributors and OEM partners across India.
            </p>
            
            <div className="absolute left-0 top-[144px] w-[419px] h-[50px] flex items-center gap-[16px]">
              {/* Request Bulk Quote */}
              <Link 
                href="/quote"
                className="w-[208px] h-[50px] border border-white flex items-center justify-center gap-[16px] text-white hover:bg-white hover:text-[#0F1B5D] transition-colors"
              >
                <span className="font-archivo font-normal text-[17px]">Request Bulk Quote</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white transition-colors duration-300"></span>
              </Link>

              {/* Download Catalog */}
              <Link 
                href="/catalog"
                className="w-[195px] h-[50px] border border-white flex items-center justify-center gap-[16px] text-white hover:bg-white hover:text-[#0F1B5D] transition-colors"
              >
                <span className="font-archivo font-normal text-[17px]">Download Catalog</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white transition-colors duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive layout for smaller screens (< 1280px) since Figma doesn't provide specific mobile views */}
        <div className="relative z-10 xl:hidden pt-[140px] px-6 pb-12 flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-jost font-normal text-4xl sm:text-5xl text-white">
              India's Trusted Manufacturer of
            </h1>
            <h1 className="font-recia font-semibold text-4xl sm:text-5xl text-white">
              Solar Component Systems
            </h1>
          </div>
          
          <div className="relative w-full max-w-[800px] aspect-[16/9]">
            <Image 
              src="/assets/img_1_248.png" 
              alt="Ksquare Solar Components" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          <div className="max-w-[600px] flex flex-col gap-8 items-center">
            <p className="font-archivo font-normal text-lg sm:text-xl text-white">
              DCDBs, ACDBs, combiner boxes, junction boxes and BOS accessories engineered, tested and shipped from our own Ahmedabad facility to EPCs, distributors and OEM partners across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="px-8 h-[50px] border border-white flex items-center justify-center gap-4 text-white hover:bg-white hover:text-[#0F1B5D] transition-colors">
                <span className="font-archivo text-lg">Request Bulk Quote</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </Link>
              <Link href="/catalog" className="px-8 h-[50px] border border-white flex items-center justify-center gap-4 text-white hover:bg-white hover:text-[#0F1B5D] transition-colors">
                <span className="font-archivo text-lg">Download Catalog</span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar (Frame 2085663113) */}
        <div className="hidden xl:flex absolute left-0 top-[846px] w-[1920px] h-[74px] items-center justify-center bg-transparent border-t border-white/20">
          <div className="w-[1400px] h-[28px] flex items-center justify-between text-white font-archivo font-normal text-[20px]">
            <span>• ISO certified facility</span>
            <span>• CE Marked</span>
            <span>• BIS Compliant</span>
            <span>• RoHS Compliant</span>
            <span>• 5-Year Performance Assurance</span>
          </div>
        </div>

        {/* Responsive Bottom Info Bar */}
        <div className="xl:hidden w-full border-t border-white/20 py-6 px-6 mt-12 bg-transparent absolute bottom-0 left-0">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white font-archivo text-base">
            <span>• ISO certified facility</span>
            <span>• CE Marked</span>
            <span>• BIS Compliant</span>
            <span>• RoHS Compliant</span>
            <span>• 5-Year Performance Assurance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
