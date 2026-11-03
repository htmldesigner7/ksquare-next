import React from "react";
import Image from "next/image";
import RichTitle from "@/components/common/RichTitle";
import AnimatedCounter from "@/components/common/AnimatedCounter";

export default function About() {
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      {/* Desktop Wrapper */}
      <div className="canvas-zoom w-[1920px] max-w-full mx-auto relative h-[500px] max-canvas:h-auto max-canvas:px-6 max-canvas:py-12">
        
        {/* Left Content (Frame 2085663111) */}
        <div className="hidden canvas:block absolute left-[160px] top-[13px] w-[750px] h-[474px]">
          {/* Text Container */}
          <div className="absolute left-0 top-0 w-[750px] h-[326px]">
            <RichTitle as="h2" text="About *Ksquare*" className="absolute left-0 top-[20px] font-archivo font-normal text-[60px] text-[#333333] leading-none m-0 p-0" />
            <p className="absolute left-0 top-[92px] w-[750px] h-[234px] font-archivo font-normal text-[17px] text-[#666666] leading-[26px] m-0 p-0">
              Ksquare Energy is a globally recognized leading solar energy solutions provider, specializing in Solar Array Junction Box manufacturing and comprehensive EPC solutions.
              <br /><br />
              We are manufacturing Solar ACDB, DCDB, AJB, SCB, Combiner Boxes, Solar structures and diverse range distribution box for utility-scale projects. We are also supplying all sets of materials such as Solar Panels, Inverters, cables and all type of accessories related to solar PV Systems.
              <br /><br />
              We had executed projects Ranges from 1 kW to 500 kW, with both crystallines as well as thin film module technologies.
            </p>
          </div>

          {/* Stats Container (Frame 2085663110) */}
          <div className="absolute left-0 top-[374px] w-[750px] h-[100px]">
            <div className="absolute left-0 top-0 w-[750px] h-[1px] bg-[#D9D9D9]"></div>
            
            <div className="absolute left-0 top-[32px] w-[648px] h-[68px]">
              {/* Stat 1 */}
              <div className="absolute left-0 top-0 w-[200px] h-[68px]">
                <AnimatedCounter end={9000} suffix="+" className="absolute left-0 top-0 font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="absolute left-0 top-[42px] font-archivo font-normal text-[17px] text-[#666666]">Successful Projects</span>
              </div>
              
              {/* Stat 2 */}
              <div className="absolute left-[224px] top-0 w-[200px] h-[68px]">
                <AnimatedCounter end={8} suffix="+" className="absolute left-0 top-0 font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="absolute left-0 top-[42px] font-archivo font-normal text-[17px] text-[#666666]">Years of Experience</span>
              </div>
              
              {/* Stat 3 */}
              <div className="absolute left-[448px] top-0 w-[200px] h-[68px]">
                <AnimatedCounter end={500000} suffix="+ " className="absolute left-0 top-0 font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="absolute left-0 top-[42px] font-archivo font-normal text-[17px] text-[#666666]">Products Supplied</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image (Rectangle 170) */}
        <div className="hidden canvas:block absolute left-[1010px] top-0 w-[750px] h-[500px]">
          <Image 
            src="/assets/img_1_350.png" 
            alt="About Ksquare Manufacturing Facility" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="canvas:hidden flex flex-col items-center gap-12 w-full max-w-[800px] mx-auto">
          <RichTitle as="h2" text="About *Ksquare*" className="font-archivo font-normal text-[48px] sm:text-[60px] text-[#333333] text-center w-full" />
          
          <div className="relative w-full aspect-[3/2]">
            <Image 
              src="/assets/img_1_350.png" 
              alt="About Ksquare Manufacturing Facility" 
              fill 
              className="object-cover rounded-xl"
            />
          </div>

          <p className="font-archivo font-normal text-[17px] text-[#666666] leading-[26px]">
            Ksquare Energy is a globally recognized leading solar energy solutions provider, specializing in Solar Array Junction Box manufacturing and comprehensive EPC solutions.
            <br /><br />
            We are manufacturing Solar ACDB, DCDB, AJB, SCB, Combiner Boxes, Solar structures and diverse range distribution box for utility-scale projects. We are also supplying all sets of materials such as Solar Panels, Inverters, cables and all type of accessories related to solar PV Systems.
            <br /><br />
            We had executed projects Ranges from 1 kW to 500 kW, with both crystallines as well as thin film module technologies.
          </p>

          <div className="w-full flex flex-col gap-[32px]">
            <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
            
            <div className="w-full flex flex-wrap justify-between gap-[24px]">
              <div className="flex flex-col gap-2 w-[180px]">
                <AnimatedCounter end={9000} suffix="+" className="font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="font-archivo font-normal text-[17px] text-[#666666]">Successful Projects</span>
              </div>
              
              <div className="flex flex-col gap-2 w-[180px]">
                <AnimatedCounter end={8} suffix="+" className="font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="font-archivo font-normal text-[17px] text-[#666666]">Years of Experience</span>
              </div>
              
              <div className="flex flex-col gap-2 w-[180px]">
                <AnimatedCounter end={500000} suffix="+ " className="font-archivo font-normal text-[40px] text-[#2B398B] leading-[26px]" />
                <span className="font-archivo font-normal text-[17px] text-[#666666]">Products Supplied</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
