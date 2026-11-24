import React from "react";
import Image from "next/image";
import Link from "next/link";

const ARROW_PATH = "M19.7563 9.41969L30.4244 4.1875L29.3219 14.8007L26.818 9.12058L19.7563 9.41969Z";

/**
 * Arrow for the two hero buttons: the arrow head from the Ksquare logo. On hover the arrow slides out to the
 * top-right while a copy slides in from the bottom-left (follows the button text colour).
 */
const ButtonArrow = () => (
  <span className="relative block size-[17px] shrink-0 overflow-hidden" aria-hidden>
    <svg viewBox="19.4 3.9 11.4 11.2" fill="currentColor" className="absolute inset-0 size-full transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full">
      <path d={ARROW_PATH} />
    </svg>
    <svg viewBox="19.4 3.9 11.4 11.2" fill="currentColor" className="absolute inset-0 size-full -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
      <path d={ARROW_PATH} />
    </svg>
  </span>
);

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2B398B]">
      {/* Desktop Wrapper (Scales down on smaller screens) */}
      <div className="canvas-zoom w-[1920px] max-w-full mx-auto relative max-canvas:h-auto max-canvas:pb-32 canvas:h-[920px]">
        
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
        <div className="relative z-10 hidden canvas:block mx-auto w-[1602px] h-[621px] top-[165px]">
          
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
            <h1 className="absolute left-0 top-0 font-archivo font-normal text-[68px] leading-[91px] whitespace-nowrap">
              <span className="text-[#C6CCED]">India&apos;s Trusted </span>
              <span className="font-recia italic font-semibold text-white">Manufacturer</span>
              <span className="text-[#C6CCED]"> of</span>
            </h1>
            <h1 className="absolute left-[255px] top-[82px] text-[68px] leading-[91px] whitespace-nowrap">
              <span className="font-recia italic font-semibold text-white">Solar Component </span>
              <span className="font-archivo text-[#C6CCED]">Systems</span>
            </h1>
          </div>

          {/* Description & Buttons (Frame 2085663103) */}
          <div className="absolute left-[1155px] top-[354px] w-[447px] h-[194px]">
            <p className="font-archivo font-normal text-[20px] leading-[28px] text-[#FFFFFF] w-[447px] h-[112px]">
              DCDBs, ACDBs, combiner boxes, junction boxes and BOS accessories engineered, tested and shipped from our own Ahmedabad facility to EPCs, distributors and OEM partners across India.
            </p>
            
            <div className="absolute left-0 top-[144px] w-[419px] h-[50px] flex items-center gap-[16px]">
              {/* Request Bulk Quote */}
              <Link
                href="/contact"
                className="w-[208px] h-[50px] border border-white flex items-center justify-center gap-[16px] text-white hover:bg-white hover:text-[#2B398B] transition-colors group"
              >
                <span className="font-archivo font-normal text-[17px]">Request Bulk Quote</span>
                <ButtonArrow />
              </Link>

              {/* Download Catalog */}
              <Link
                href="/download-resources"
                className="w-[195px] h-[50px] border border-white flex items-center justify-center gap-[16px] text-white hover:bg-white hover:text-[#2B398B] transition-colors group"
              >
                <span className="font-archivo font-normal text-[17px]">Download Catalog</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive layout for smaller screens (< 1440px) since Figma doesn't provide specific mobile views */}
        <div className="relative z-10 canvas:hidden pt-[140px] px-6 pb-12 flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-archivo font-normal text-4xl sm:text-5xl">
              <span className="text-[#C6CCED]">India&apos;s Trusted </span>
              <span className="font-recia italic font-semibold text-white">Manufacturer</span>
              <span className="text-[#C6CCED]"> of</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl">
              <span className="font-recia italic font-semibold text-white">Solar Component </span>
              <span className="font-archivo text-[#C6CCED]">Systems</span>
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
              <Link href="/contact" className="px-8 h-[50px] border border-white flex items-center justify-center gap-4 text-white hover:bg-white hover:text-[#2B398B] transition-colors group">
                <span className="font-archivo text-lg">Request Bulk Quote</span>
                <ButtonArrow />
              </Link>
              <Link href="/download-resources" className="px-8 h-[50px] border border-white flex items-center justify-center gap-4 text-white hover:bg-white hover:text-[#2B398B] transition-colors group">
                <span className="font-archivo text-lg">Download Catalog</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar (Frame 2085663113) */}
        <div className="hidden canvas:flex absolute left-0 top-[846px] w-[1920px] h-[74px] items-center justify-center bg-[rgba(15,27,93,0.5)]">
          <div className="w-[1400px] h-[28px] flex items-center justify-between text-white font-archivo font-normal text-[20px]">
            <span>• ISO certified facility</span>
            <span>• CE Marked</span>
            <span>• BIS Compliant</span>
            <span>• RoHS Compliant</span>
            <span>• 5-Year Performance Assurance</span>
          </div>
        </div>

        {/* Responsive Bottom Info Bar */}
        <div className="canvas:hidden w-full py-6 px-6 mt-12 bg-[rgba(15,27,93,0.5)] absolute bottom-0 left-0">
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
