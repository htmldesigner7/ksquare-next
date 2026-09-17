"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Manufacturing() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="relative w-full bg-[#2B398B] overflow-hidden">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-50 mix-blend-multiply">
        <Image 
          src="/assets/mfg_pattern.png" 
          alt="Manufacturing Pattern" 
          fill 
          className="object-cover"
        />
      </div>
      
      {/* Desktop Wrapper */}
      <div className="w-[1920px] max-w-full mx-auto relative h-[920px] max-xl:h-auto max-xl:px-6 max-xl:py-12">
        
        {/* Main Content Container (Frame 2147224486) */}
        <div className="hidden xl:block absolute left-[160px] top-[109px] w-[1600px] h-[701px]">
          
          {/* Header (Frame 23) */}
          <div className="absolute left-[454px] top-0 w-[692px] h-[103px] text-center">
            <h2 className="absolute left-0 top-0 w-[692px] h-[69px] font-jost font-normal text-[60px] text-[#FFFFFF] leading-none m-0 p-0 flex items-center justify-center">
              Manufacturing Excellence
            </h2>
            <p className="absolute left-0 top-[77px] w-[692px] h-[26px] font-archivo font-normal text-[17px] text-[#FFFFFF] m-0 p-0 text-center">
              Manufacturing Built on Quality, Innovation & Precision
            </p>
          </div>

          {/* Content (Frame 119) */}
          <div className="absolute left-0 top-[151px] w-[1600px] h-[550px]">
            
            {/* Left Video/Image (Frame 2085663071) */}
            <div 
              className="absolute left-0 top-0 w-[850px] h-[550px] bg-[#D9D9D9] overflow-hidden group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {!isPlaying ? (
                <>
                  <Image 
                    src="/assets/img_1_227.png" 
                    alt="Manufacturing Facility" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Play Button Circle (Frame 2147224480) */}
                  <div className="absolute left-[356px] top-[206px] w-[138px] h-[139px] bg-white rounded-full flex items-center justify-center pl-2 group-hover:bg-[#F8F8F8] transition-colors">
                    <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31 20L0 40L0 0L31 20Z" fill="#2B398B"/>
                    </svg>
                  </div>
                </>
              ) : (
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Right Info (Frame 120) */}
            <div className="absolute left-[914px] top-[46px] w-[686px] h-[458px]">
              
              <p className="absolute left-0 top-0 w-[686px] h-[234px] font-archivo font-normal text-[17px] text-[#FFFFFF] leading-relaxed m-0 p-0">
                Lorem ipsum dolor sit amet consectetur. Quam orci facilisi commodo in ipsum ut. Commodo feugiat eget mattis sed et nunc faucibus ultrices amet. Morbi aliquam sit est nisl. Fringilla eget odio eu dui quam at condimentum. Tellus habitasse turpis a auctor sit morbi. Integer dignissim morbi sit et faucibus malesuada luctus semper ullamcorper. 
                <br /><br />
                Proin dictumst risus sociis mi tristique condimentum lacinia. Feugiat libero dui in enim duis tellus. Pulvinar enim viverra elit cras imperdiet urna aliquet dignissim ornare. Quam tortor magna malesuada lectus sed. Integer nisl arcu nibh maecenas volutpat ut viverra auctor lectus. Id eget semper nisi tempus in augue non at.
              </p>

              {/* Stats (Frame 2085663126) */}
              <div className="absolute left-0 top-[298px] w-[686px] h-[160px]">
                
                {/* Stat 1 */}
                <div className="absolute left-0 top-0 w-[190px] h-[160px]">
                  <div className="absolute left-0 top-0 w-[189px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                    <span className="font-recia font-semibold text-[36px] text-[#2E338F]">100%</span>
                  </div>
                  <span className="absolute left-0 top-[138px] w-full text-center font-archivo font-normal text-[16px] text-[#FFFFFF]">In-house fabrication</span>
                </div>

                {/* Stat 2 */}
                <div className="absolute left-[248px] top-0 w-[190px] h-[160px]">
                  <div className="absolute left-0 top-0 w-[190px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                    <span className="font-recia font-semibold text-[36px] text-[#2E338F]">45+</span>
                  </div>
                  <span className="absolute left-0 top-[138px] w-full text-center font-archivo font-normal text-[16px] text-[#FFFFFF]">Production and QC staff</span>
                </div>

                {/* Stat 3 */}
                <div className="absolute left-[496px] top-0 w-[190px] h-[160px]">
                  <div className="absolute left-0 top-0 w-[189px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                    <span className="font-recia font-semibold text-[36px] text-[#2E338F]">OEM</span>
                  </div>
                  <span className="absolute left-0 top-[138px] w-full text-center font-archivo font-normal text-[16px] text-[#FFFFFF]">White-label ready</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="xl:hidden relative z-10 flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-jost font-normal text-4xl sm:text-5xl text-white">
              Manufacturing Excellence
            </h2>
            <p className="font-archivo font-normal text-[17px] text-white/90">
              Manufacturing Built on Quality, Innovation & Precision
            </p>
          </div>
          
          <div 
            className="w-full max-w-[850px] aspect-[17/11] bg-gray-medium relative overflow-hidden group cursor-pointer flex-shrink-0"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                <Image 
                  src="/assets/img_1_227.png" 
                  alt="Manufacturing Facility" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-full flex items-center justify-center pl-1.5">
                    <svg width="24" height="28" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31 20L0 40L0 0L31 20Z" fill="#2B398B"/>
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe 
                className="w-full h-full absolute inset-0" 
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
          
          <div className="flex flex-col gap-12 w-full max-w-[850px]">
            <p className="font-archivo font-normal text-[16px] md:text-[18px] text-white leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Quam orci facilisi commodo in ipsum ut. Commodo feugiat eget mattis sed et nunc faucibus ultrices amet. Morbi aliquam sit est nisl. Fringilla eget odio eu dui quam at condimentum. Tellus habitasse turpis a auctor sit morbi. Integer dignissim morbi sit et faucibus malesuada luctus semper ullamcorper.
              <br /><br />
              Proin dictumst risus sociis mi tristique condimentum lacinia. Feugiat libero dui in enim duis tellus. Pulvinar enim viverra elit cras imperdiet urna aliquet dignissim ornare. Quam tortor magna malesuada lectus sed. Integer nisl arcu nibh maecenas volutpat ut viverra auctor lectus. Id eget semper nisi tempus in augue non at.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-full sm:w-[189px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                  <span className="font-recia font-semibold text-[36px] text-[#2E338F]">100%</span>
                </div>
                <span className="font-archivo font-normal text-[16px] text-white">In-house fabrication</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full sm:w-[190px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                  <span className="font-recia font-semibold text-[36px] text-[#2E338F]">45+</span>
                </div>
                <span className="font-archivo font-normal text-[16px] text-white">Production and QC staff</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full sm:w-[189px] h-[122px] bg-[#EDF3FF] flex items-center justify-center">
                  <span className="font-recia font-semibold text-[36px] text-[#2E338F]">OEM</span>
                </div>
                <span className="font-archivo font-normal text-[16px] text-white">White-label ready</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
