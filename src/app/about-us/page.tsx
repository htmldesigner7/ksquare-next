import React from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/home/Testimonials";
import ValuesSlider from "./ValuesSlider";

const bars = [
  { year: "2018", label: "Founded", h: 73, lh: "leading-[32px]" },
  { year: "2020", label: "Energy Expansion", h: 102, lh: "leading-[32px]" },
  { year: "2022", label: "Gain 300+ Clients", h: 142, lh: "leading-[32px]" },
  { year: "2024", label: "New Services Launched", h: 220, lh: "leading-[27px]" },
  { year: "2026", label: "Projects Ranges from 1 kW to 500 kW", h: 265, lh: "leading-[27px]" },
];

const serve = [
  { title: "EPC Companies", icon: "serve_epc.svg" },
  { title: "Installers", icon: "serve_installers.svg" },
  { title: "System Integrators", icon: "serve_integrators.svg" },
  { title: "Distributors and Dealers", icon: "serve_distributors.svg" },
  { title: "Export Partners", icon: "serve_export.svg" },
];

const values = [
  { chip: "Value 1", title: "Transparency & Integrity", desc: "No greenwashing, no exaggeration. We provide honest assessments, realistic timelines, and transparent reporting on all projects.", img: "/assets/about/value_transparency.png" },
  { chip: "Value 2", title: "Continuous Innovation", desc: "The sustainability landscape evolves rapidly. We stay ahead through constant learning, technology adoption, and innovation in our methodologies.", img: "/assets/about/value_innovation.png" },
  { chip: "Value 3", title: "Collaborative Partnership", desc: "We don't just consult—we partner. Your success is our success. We work alongside your team to build internal capacity and lasting change.", img: "/assets/about/value_partnership.png" },
];

const missionText =
  "Ksquare Energy has a wide array of experience and expertise and robust technical know-how to cater to any kind of solar panel installation needs. The mission is to create a sustainable economy as well as global development through clean energy generation.";

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-[16px] px-[16px] py-[12px] border border-[#2B398B] text-[#2B398B] hover:bg-[#2B398B] hover:text-white transition-colors font-archivo text-[17px] leading-[26px]"
    >
      <span>{children}</span>
      <span className="w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover:bg-white transition-colors" />
    </Link>
  );
}

function Chevron() {
  return (
    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" aria-hidden="true">
      <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutUsPage() {
  return (
    <div className="w-full bg-[#FFFFFF] font-archivo overflow-x-clip">
      {/* 1. Hero */}
      <section className="w-full pt-[90px] xl:pt-[130px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-0 pt-[40px] xl:pt-0 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-[32px]">
          <div className="flex flex-col gap-[15px] xl:w-[873px]">
            <div className="flex items-center gap-[10px] font-archivo text-[20px] leading-[28px] text-[#333333]">
              <Link href="/" className="hover:text-[#2B398B] transition-colors">Home</Link>
              <Chevron />
              <Link href="/about-us" className="hover:text-[#2B398B] transition-colors">About us</Link>
              <Chevron />
              <span className="text-[#2B398B] leading-[26px]">Company Profile</span>
            </div>
            <h1 className="m-0 font-recia font-normal text-[#2B398B] text-[44px] leading-[52px] lg:text-[68px] lg:leading-[78px]">
              Introducing Innovative <span className="italic font-semibold">Clean Energy Solutions.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-[32px] xl:w-[816px]">
            <p className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[30px] lg:leading-[36px] text-[#333333]">
              Explore Expert article installation guides, products updates, industry news and technical resources from Ksquare Energy.
            </p>
            <div className="flex flex-wrap items-center gap-[16px]">
              <OutlineButton href="/blog">Browse Articles</OutlineButton>
              <OutlineButton href="/products/dcdb">Explore Products</OutlineButton>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1804px] mx-auto px-4 lg:px-8 xl:px-0 mt-[40px]">
          <div className="relative w-full aspect-[1804/500]">
            <Image src="/assets/about/hero_bg-23383c.png" alt="Hero Graphic" fill sizes="1804px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <div className="w-full mt-[60px] xl:mt-[100px] flex flex-col gap-[60px] xl:gap-[100px]">
        {/* 2. Our Story */}
        <section className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row xl:justify-between gap-[40px] xl:h-[724px]">
            {/* Left: title + image */}
            <div className="relative flex flex-col w-full xl:w-[711px] shrink-0">
              <h2 className="m-0 max-w-[532px] font-archivo font-normal text-[40px] lg:text-[60px] leading-[1.1] xl:leading-[64.5px] text-[#2B398B]">
                Our Story: From Passion to <span className="font-recia italic font-medium">Impact</span>
              </h2>
              <div className="relative w-full aspect-[711/595] xl:mt-auto">
                <Image src="/assets/about/our_story-7fc02a.png" alt="Our Story: Passion to Impact" fill sizes="711px" className="object-cover" />
              </div>
              <div className="hidden xl:block absolute right-0 top-0 w-[259px] h-full bg-gradient-to-l from-transparent to-white pointer-events-none" />
            </div>

            {/* Right: copy + timeline bars */}
            <div className="flex flex-col w-full xl:w-[1012px] shrink-0">
              <div className="flex flex-col gap-[24px] xl:h-[320px] font-archivo text-[18px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#333333]">
                <p className="m-0">
                  Ksquare Energy is a globally recognized leading solar energy solutions provider, specializing in Solar Array Junction Box manufacturing and comprehensive EPC solutions.
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  {"  - We are manufacturing Solar ACDB, DCDB, AJB, SCB, Combiner Boxes, Solar structures and diverse range distribution box for utility-scale projects. We are also supplying all sets of materials such as Solar Panels, Inverters, cables and all type of accessories related to solar PV Systems."}
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  {"  - We had executed projects Ranges from 1 kW to 500 kW, with both crystallines as well as thin film module technologies."}
                </p>
              </div>

              <div className="mt-[40px] xl:mt-0 xl:h-[404px] xl:pt-[20px] grid grid-cols-5 gap-[8px] xl:gap-[22.5px] items-end xl:items-stretch">
                {bars.map((b) => (
                  <div key={b.year} className="flex flex-col gap-[18px] min-w-0">
                    <div className="flex flex-col justify-end h-[312px] bg-white overflow-hidden">
                      <div className="w-full bg-[#2B398B] flex items-center justify-center" style={{ height: b.h }}>
                        <span className="font-inter text-[15px] lg:text-[21px] leading-[30px] text-white">{b.year}</span>
                      </div>
                    </div>
                    <span className={`block text-center font-archivo font-semibold text-[12px] lg:text-[17px] ${b.lh} text-[#2B398B]`}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-0">
          {/* Desktop: Figma frame 1800x873, every measurement scales with the frame width (cqw) */}
          <div className="hidden xl:block [container-type:inline-size] w-full">
            <div className="relative w-full" style={{ aspectRatio: "1800 / 873" }}>
              <div className="absolute" style={{ left: 0, top: "23.02%", width: "42.56%", height: "76.98%" }}>
                <Image src="/assets/about/mission_shape.svg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute" style={{ left: "57.44%", top: "23.02%", width: "42.56%", height: "76.98%" }}>
                <Image src="/assets/about/vision_shape.svg" alt="" fill className="object-cover" />
              </div>

              {/* Header 1800x153 */}
              <div className="absolute left-0 top-0 w-full h-[17.53%] flex flex-col items-center justify-center gap-[1.3333cqw] text-center">
                <h2 className="m-0 font-archivo font-normal text-[3.3333cqw] leading-[2.3333cqw] text-[#2B398B]">
                  Mission <span className="font-recia italic font-medium">&amp; Vision</span>
                </h2>
                <p className="m-0 font-archivo text-[1.3333cqw] leading-[1.8889cqw] text-[#333333]">
                  Our mission is to help businesses grow sustainably. Our vision is a future where companies thrive while making a positive impact on the planet.
                </p>
              </div>

              {/* Our Mission */}
              <div className="absolute flex flex-col gap-[2.5cqw]" style={{ left: "1.3333%", top: "29.9%", width: "24.5%" }}>
                <h3 className="m-0 font-archivo font-semibold text-[2.2222cqw] leading-[1.7778cqw] text-white">Our Mission</h3>
                <p className="m-0 font-archivo text-[1.3333cqw] leading-[1.8889cqw] text-white">{missionText}</p>
              </div>

              {/* Our Vision */}
              <div className="absolute flex flex-col gap-[2.5cqw] text-right" style={{ left: "74.1667%", top: "29.9%", width: "24.5%" }}>
                <h3 className="m-0 font-archivo font-semibold text-[2.2222cqw] leading-[1.7778cqw] text-[#2B398B]">Our Vision</h3>
                <p className="m-0 font-archivo text-[1.3333cqw] leading-[1.8889cqw] text-[#333333]">{missionText}</p>
              </div>

              <div className="absolute" style={{ left: 0, top: "65.75%", width: "26.61%", height: "38.14%" }}>
                <Image src="/assets/about/mission_bg-5f03f9.png" alt="Mission Graphic" fill className="object-contain object-left-bottom" />
              </div>
              <div className="absolute" style={{ left: "69.89%", top: "61.06%", width: "30.11%", height: "41.35%" }}>
                <Image src="/assets/about/vision_bg.png" alt="Vision Graphic" fill className="object-contain object-right-bottom" />
              </div>
              <div className="absolute z-20" style={{ left: "44.28%", top: "51.55%", width: "11.06%", aspectRatio: "199 / 49" }}>
                <Image src="/assets/about/mission_vision_arrow.svg" alt="KSQUARE Logo" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Mobile/tablet fallback (Figma provides no separate mobile frame) */}
          <div className="xl:hidden flex flex-col gap-[40px] w-full">
            <div className="flex flex-col items-center text-center gap-[16px]">
              <h2 className="m-0 font-archivo font-normal text-[40px] leading-[1.15] text-[#2B398B]">
                Mission <span className="font-recia italic font-medium">&amp; Vision</span>
              </h2>
              <p className="m-0 font-archivo text-[18px] leading-[1.5] text-[#333333]">
                Our mission is to help businesses grow sustainably. Our vision is a future where companies thrive while making a positive impact on the planet.
              </p>
            </div>
            <div className="w-full bg-[#2B398B] flex flex-col p-[24px] pt-[48px] overflow-hidden">
              <h3 className="m-0 font-archivo font-semibold text-[32px] leading-[1.2] text-white">Our Mission</h3>
              <p className="mt-[20px] mb-0 font-archivo text-[18px] leading-[1.5] text-white">{missionText}</p>
              <div className="relative mt-[40px] w-[250px] md:w-[350px] aspect-[479/333]">
                <Image src="/assets/about/mission_bg-5f03f9.png" alt="Mission Graphic" fill className="object-contain object-left-bottom" />
              </div>
            </div>
            <div className="w-full bg-[#EDF3FF] flex flex-col p-[24px] pt-[48px] overflow-hidden">
              <h3 className="m-0 font-archivo font-semibold text-[32px] leading-[1.2] text-[#2B398B] text-right">Our Vision</h3>
              <p className="mt-[20px] mb-0 font-archivo text-[18px] leading-[1.5] text-[#333333] text-right">{missionText}</p>
              <div className="relative mt-[40px] w-[280px] md:w-[400px] aspect-[542/361] ml-auto">
                <Image src="/assets/about/vision_bg.png" alt="Vision Graphic" fill className="object-contain object-right-bottom" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Who We Serve */}
        <section className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-0 flex flex-col gap-[48px]">
          <div className="flex flex-col items-center text-center gap-[8px]">
            <h2 className="m-0 font-archivo font-normal text-[40px] lg:text-[60px] leading-[1.2] xl:leading-[42px] text-[#2B398B] xl:h-[57.1px] flex items-center">
              <span>Who&nbsp;</span>
              <span className="font-recia italic font-medium">We Serve</span>
            </h2>
            <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">Powering Every Industry with Solar Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] items-center">
            {serve.map((s) => (
              <div key={s.title} className="bg-[#EFF0F6] px-[40px] py-[50px] flex flex-col gap-[20px]">
                <div className="flex items-center gap-[30px]">
                  <div className="w-[90px] h-[90px] shrink-0 bg-white rounded-[10px] flex items-center justify-center p-[10px]">
                    <Image src={`/assets/about/${s.icon}`} alt="" width={60} height={60} className="w-[60px] h-[60px] object-contain" />
                  </div>
                  <h3 className="m-0 font-archivo font-normal text-[24px] leading-[32px] text-[#333333]">{s.title}</h3>
                </div>
                <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">
                  Lorem ipsum dolor sit amet consectetur. Gravida imperdiet aliquet cras venenatis praesent nulla aliquam. Habitant dictum condimentum odio tincidunt euismod pharetra volutpat congue.
                </p>
              </div>
            ))}
            <div className="bg-white border border-white p-[40px] flex flex-col justify-center">
              <p className="m-0 font-recia italic font-medium text-[22px] lg:text-[28px] text-center text-[#333333]">
                From manufacturing to installation, Ksquare Energy supports every stakeholder with reliable products, technical expertise, and dependable service.
              </p>
            </div>
          </div>
        </section>

        {/* 5. The Values That Guide Us */}
        <section className="w-full bg-[#F8FAFF] py-[60px] flex flex-col items-center gap-[40px]">
          <div className="w-full flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center gap-[24px] text-center px-4">
              <h2 className="m-0 pt-[22.5px] font-inter font-medium text-[40px] lg:text-[60px] leading-[1.2] text-[#1E3A8A]">
                The Values That <span className="italic">Guide Us</span>
              </h2>
              <p className="m-0 font-archivo text-[18px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#374151]">
                We are guided by integrity, sustainability, and innovation, creating positive impact for businesses and the planet.
              </p>
            </div>

            <ValuesSlider values={values} />
          </div>
        </section>

        {/* 6. What Our Clients Say */}
        <Testimonials />
      </div>
    </div>
  );
}
