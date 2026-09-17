import React from "react";

const industries = [
  {
    title: "EPC Companies",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.",
    left: 0, top: 0,
    icon: "/assets/icon_ind_1_173.svg"
  },
  {
    title: "Installers",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.",
    left: 540, top: 0,
    icon: "/assets/icon_ind_1_185.svg"
  },
  {
    title: "System Integrators",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.",
    left: 1080, top: 0,
    icon: "/assets/icon_ind_1_194.svg"
  },
  {
    title: "Distributors and Dealers",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.",
    left: 0, top: 334,
    icon: "/assets/icon_ind_1_204.svg"
  },
  {
    title: "Export Partners",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.",
    left: 540, top: 334,
    icon: "/assets/icon_ind_1_212.svg"
  }
];

import Image from "next/image";

export default function Industries() {
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      
      {/* Desktop Wrapper */}
      <div className="w-[1920px] max-w-full mx-auto relative h-[787px] max-xl:h-auto max-xl:px-6 max-xl:py-12">
        
        {/* Main Content Container */}
        <div className="hidden xl:block absolute left-[160px] top-0 w-[1600px] h-[787px]">
          
          {/* Header (Frame 23) */}
          <div className="absolute left-0 top-0 w-[1600px] h-[91px] flex flex-col items-center">
            <h2 className="font-jost font-normal text-[60px] text-[#2B398B] leading-none m-0 p-0 text-center">
              Who We Serve
            </h2>
            <p className="mt-[5px] font-archivo font-normal text-[17px] text-[#666666] m-0 p-0 text-center">
              Powering Every Industry with Solar Solutions
            </p>
          </div>
          
          {/* Grid Container (Frame 115) */}
          <div className="absolute left-0 top-[139px] w-[1600px] h-[648px]">
            
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="absolute w-[520px] h-[314px] bg-[#EFF0F6]"
                style={{ left: `${ind.left}px`, top: `${ind.top}px` }}
              >
                {/* Frame 109 */}
                <div className="absolute left-[40px] top-[50px] w-[434px] h-[214px]">
                  
                  {/* Top Block: Icon & Title */}
                  <div className="absolute left-0 top-0 w-[434px] h-[90px]">
                    <div className="absolute left-0 top-0 w-[90px] h-[90px] bg-[#FFFFFF] flex items-center justify-center rounded-[10px]">
                      <Image src={ind.icon} alt={ind.title} width={75} height={75} />
                    </div>
                    <h3 className="absolute left-[120px] top-[29px] font-archivo font-normal text-[24px] text-[#333333] leading-none m-0 p-0">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="absolute left-0 top-[110px] w-[434px] h-[104px] font-archivo font-normal text-[17px] text-[#666666] leading-[1.5] m-0 p-0">
                    {ind.desc}
                  </p>
                  
                </div>
              </div>
            ))}

            {/* CTA Block (Frame 111) */}
            <div className="absolute left-[1080px] top-[351px] w-[520px] h-[280px] bg-transparent flex items-center justify-center">
              <p className="w-[440px] text-center font-recia font-medium text-[28px] text-[#333333] leading-[1.4] m-0 p-0">
                From manufacturing to installation, Ksquare Energy supports every stakeholder with reliable products, technical expertise, and dependable service.
              </p>
            </div>

          </div>
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="xl:hidden flex flex-col gap-12 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="font-jost font-normal text-[48px] sm:text-[60px] text-[#2B398B] leading-none m-0 p-0">
              Who We Serve
            </h2>
            <p className="font-archivo font-normal text-[17px] text-[#666666] m-0 p-0">
              Powering Every Industry with Solar Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, idx) => (
              <div key={idx} className="w-full bg-[#EFF0F6] p-[40px] flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-[90px] h-[90px] bg-[#FFFFFF] flex items-center justify-center rounded-[10px] shrink-0">
                    <Image src={ind.icon} alt={ind.title} width={75} height={75} />
                  </div>
                  <h3 className="font-archivo font-normal text-[24px] text-[#333333] leading-[1.2]">
                    {ind.title}
                  </h3>
                </div>
                <p className="font-archivo font-normal text-[17px] text-[#666666] leading-[1.5]">
                  {ind.desc}
                </p>
              </div>
            ))}
            
            <div className="w-full bg-transparent p-[40px] flex items-center justify-center">
              <p className="font-recia font-medium text-[24px] sm:text-[28px] text-[#333333] leading-[1.4] m-0 p-0 text-center">
                From manufacturing to installation, Ksquare Energy supports every stakeholder with reliable products, technical expertise, and dependable service.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
