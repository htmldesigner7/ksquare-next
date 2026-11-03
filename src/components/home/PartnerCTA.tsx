import React from "react";
import Image from "next/image";
import RichTitle from "@/components/common/RichTitle";
import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Desktop Wrapper */}
      <div className="canvas-zoom w-[1920px] max-w-full mx-auto relative h-[400px] max-canvas:h-auto max-canvas:py-16">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/img_partner_bg.png" 
            alt="Partner with Ksquare" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/80 mix-blend-multiply"></div>
        </div>
        
        {/* Desktop Layout (Frame 2147224483) */}
        <div className="hidden canvas:block absolute left-[400px] top-[98px] w-[1120px] h-[205px] z-10">
          
          {/* Header Container (Frame 23) */}
          <div className="absolute left-0 top-0 w-[1120px] h-[107px] text-center">
            <RichTitle as="h2" text="Become a Ksquare *Distribution Partner*" className="absolute left-0 top-[7px] w-[1120px] font-archivo font-normal text-[60px] text-[#FFFFFF] leading-none m-0 p-0 text-center" />
            <p className="absolute left-0 top-[81px] w-[1120px] font-archivo font-normal text-[17px] text-[#FFFFFF] m-0 p-0 text-center">
              Regional stocking programs, dealer pricing tiers and dedicated account support.
            </p>
          </div>
          
          {/* Button (Frame 22) */}
          <Link 
            href="/partners/become-a-partner"
            className="absolute left-[453px] top-[155px] w-[214px] h-[50px] border border-[#FFFFFF] flex items-center group hover:bg-[#FFFFFF] hover:text-[#2B398B] transition-colors"
          >
            <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#FFFFFF] group-hover:text-[#2B398B] transition-colors">
              Apply as a distributor 
            </span>
            <span className="absolute left-[190px] w-[8px] h-[8px] rounded-full bg-[#FFFFFF] group-hover:bg-[#2B398B] transition-colors"></span>
          </Link>
          
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="canvas:hidden relative z-10 flex flex-col items-center text-center gap-8 px-6">
          <div className="flex flex-col gap-4">
            <RichTitle as="h2" text="Become a Ksquare *Distribution Partner*" className="font-archivo font-normal text-[40px] sm:text-[50px] md:text-[60px] text-[#FFFFFF] leading-[1.1] m-0 p-0" />
            <p className="font-archivo font-normal text-[16px] md:text-[17px] text-[#FFFFFF] m-0 p-0">
              Regional stocking programs, dealer pricing tiers and dedicated account support.
            </p>
          </div>
          
          <Link 
            href="/partners/become-a-partner"
            className="w-[214px] h-[50px] border border-[#FFFFFF] flex items-center relative group hover:bg-[#FFFFFF] transition-colors"
          >
            <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#FFFFFF] group-hover:text-[#2B398B] transition-colors">
              Apply as a distributor 
            </span>
            <span className="absolute left-[190px] w-[8px] h-[8px] rounded-full bg-[#FFFFFF] group-hover:bg-[#2B398B] transition-colors"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}
