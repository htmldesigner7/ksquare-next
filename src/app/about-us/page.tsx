"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import SectionSpacer from "@/components/common/SectionSpacer";
import Button from "@/components/common/Button";

const testimonials = [
  {
    name: "Hiren Dhameliya",
    company: "Flame Solren Pvt Ltd",
    quote: "We are using Thermoplastic Enclosure of Kenclozer Brand for DCDB-ACDB manufacturing and we are impressed with their delivery commitment and after sales service.",
  },
  {
    name: "Vipul Trivedi",
    company: "Lohana Tours & Travels Pvt Ltd",
    quote: "I had installed a 10 KW rooftop system at my home and I am getting generation of 6.2 Units/KW and the Ksquare staff is just a call away.",
  },
  {
    name: "Sarauivandasji Swami",
    company: "Swaminarayan Gurukul Hyderabad",
    quote: "We had installed the project of 80 KW at Shree Swaminarayan Gurukul Hyderabad & Mumbai. We are very satisfied with the service of Ksquare Energy Pvt Ltd and the product quality also.",
  },
];

export default function AboutUsPage() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  return (
    <div className="w-full bg-[#FFFFFF] font-archivo">
      
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[60px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[15px] lg:max-w-[873px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px]">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#666666] hover:text-[#2B398B] leading-[28px]">
                  Home
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link href="/about-us" className="font-archivo text-[16px] lg:text-[20px] text-[#666666] hover:text-[#2B398B] leading-[28px]">
                  About us
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-[#2B398B] leading-[26px]">
                  Company Profile
                </span>
              </div>
              
              {/* Title */}
              <h1 className="font-jost text-[48px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-[#2B398B] font-semibold mt-[10px]">
                Introducing Innovative <span className="italic font-semibold">Clean Energy Solutions.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] lg:max-w-[816px] lg:pb-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] lg:leading-[36px] text-[#666666]">
                Explore Expert article installation guides, products updates, industry news and technical resources from Ksquare Energy.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
                <Button variant="outline-primary" href="#" showDot={true}>
                  Browse Articles
                </Button>
                <Button variant="outline-primary" href="#" showDot={true}>
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Image */}
        <Container maxWidth="1800" className="mt-[60px] lg:mt-[100px]">
          <div className="w-full relative aspect-[1804/500] rounded-[24px] overflow-hidden">
            <Image 
              src="/assets/about/hero_bg-23383c.png" 
              alt="Hero Graphic" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* 2. Our Story: From Passion to Impact */}
      <section className="w-full py-[80px] lg:py-[150px]">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[40px] xl:gap-[77px] w-full">
            
            {/* Left Column: Title & Image */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[711px] shrink-0 relative">
              {/* Title */}
              <h2 className="font-inter font-medium text-[48px] lg:text-[60px] leading-[1.1] text-[#2B398B] max-w-[532px]">
                Our Story: From Passion to <span className="italic">Impact</span>
              </h2>
              
              {/* Image with Gradient Overlay */}
              <div className="relative w-full aspect-[711/595] mt-[10px]">
                <Image 
                  src="/assets/about/our_story-7fc02a.png" 
                  alt="Our Story: Passion to Impact" 
                  fill 
                  className="object-cover"
                />
                {/* Gradient fading to white on the right side */}
                <div className="absolute top-0 right-0 w-[259px] h-full bg-gradient-to-l from-white to-transparent"></div>
              </div>
            </div>
            
            {/* Right Column: Content & Bar Chart */}
            <div className="flex flex-col justify-between w-full lg:max-w-[1012px] pt-[10px] lg:pt-0">
              
              {/* Text Content */}
              <div className="flex flex-col gap-[24px]">
                <p className="font-archivo text-[18px] lg:text-[20px] leading-[1.6] text-[#4A4A4A]">
                  Ksquare Energy is a globally recognized leading solar energy solutions provider, specializing in Solar Array Junction Box manufacturing and comprehensive EPC solutions.
                </p>
                <ul className="flex flex-col gap-[20px] pl-[20px] list-disc marker:text-[#666666]">
                  <li className="font-archivo text-[16px] lg:text-[18px] leading-[1.6] text-[#666666] pl-[10px]">
                    We are manufacturing Solar ACDB, DCDB, AJB, SCB, Combiner Boxes, Solar structures and diverse range distribution box for utility-scale projects. We are also supplying all sets of materials such as Solar Panels, Inverters, cables and all type of accessories related to solar PV Systems.
                  </li>
                  <li className="font-archivo text-[16px] lg:text-[18px] leading-[1.6] text-[#666666] pl-[10px]">
                    We had executed projects Ranges from 1 kW to 500 kW, with both crystallines as well as thin film module technologies.
                  </li>
                </ul>
              </div>

              {/* Bar Chart Container */}
              <div className="w-full mt-[40px] flex items-end justify-between gap-[10px] lg:gap-[24px] h-[300px]">
                
                {/* 2018 */}
                <div className="flex flex-col items-center justify-end w-full h-full gap-[12px] lg:gap-[16px]">
                  <div className="w-full bg-[#2B398B] h-[20%] flex items-center justify-center text-white font-archivo text-[14px] lg:text-[18px]">2018</div>
                  <div className="w-full text-center font-archivo font-semibold text-[#2B398B] text-[10px] lg:text-[14px] h-[32px] lg:h-[40px] flex items-start justify-center">Founded</div>
                </div>

                {/* 2020 */}
                <div className="flex flex-col items-center justify-end w-full h-full gap-[12px] lg:gap-[16px]">
                  <div className="w-full bg-[#2B398B] h-[40%] flex items-center justify-center text-white font-archivo text-[14px] lg:text-[18px]">2020</div>
                  <div className="w-full text-center font-archivo font-semibold text-[#2B398B] text-[10px] lg:text-[14px] h-[32px] lg:h-[40px] flex items-start justify-center">Energy Expansion</div>
                </div>

                {/* 2022 */}
                <div className="flex flex-col items-center justify-end w-full h-full gap-[12px] lg:gap-[16px]">
                  <div className="w-full bg-[#2B398B] h-[60%] flex items-center justify-center text-white font-archivo text-[14px] lg:text-[18px]">2022</div>
                  <div className="w-full text-center font-archivo font-semibold text-[#2B398B] text-[10px] lg:text-[14px] h-[32px] lg:h-[40px] flex items-start justify-center">Gain 300+ Clients</div>
                </div>

                {/* 2024 */}
                <div className="flex flex-col items-center justify-end w-full h-full gap-[12px] lg:gap-[16px]">
                  <div className="w-full bg-[#2B398B] h-[80%] flex items-center justify-center text-white font-archivo text-[14px] lg:text-[18px]">2024</div>
                  <div className="w-full text-center font-archivo font-semibold text-[#2B398B] text-[10px] lg:text-[14px] h-[32px] lg:h-[40px] flex items-start justify-center">New Services Launched</div>
                </div>

                {/* 2026 */}
                <div className="flex flex-col items-center justify-end w-full h-full gap-[12px] lg:gap-[16px]">
                  <div className="w-full bg-[#2B398B] h-[100%] flex items-center justify-center text-white font-archivo text-[14px] lg:text-[18px]">2026</div>
                  <div className="w-full text-center font-archivo font-semibold text-[#2B398B] text-[10px] lg:text-[14px] h-[32px] lg:h-[40px] leading-[1.3] flex items-start justify-center">Projects Ranges from<br/>1 kW to 500 kW</div>
                </div>
                
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision */}
      <section className="w-full pb-[80px] lg:pb-[150px]">
        <Container maxWidth="1800">
          
          {/* Top Intro with Title */}
          <div className="flex flex-col items-center text-center gap-[24px] max-w-[1200px] mx-auto mb-[80px]">
            <h2 className="font-inter font-medium text-[48px] lg:text-[60px] leading-[1.1] text-[#2B398B]">
              Mission <span className="italic">&</span> <span className="italic">Vision</span>
            </h2>
            <p className="font-archivo text-[20px] lg:text-[24px] leading-[1.5] lg:leading-[34px] text-[#333333]">
              Our mission is to help businesses grow sustainably. Our vision is a future where companies thrive while making a positive impact on the planet.
            </p>
          </div>
        
          {/* Split Layout Container */}
          <div className="relative flex flex-col xl:flex-row justify-between w-full mx-auto gap-[40px] xl:gap-0">
            
            {/* Our Mission (Dark Blue) */}
            <div className="w-full xl:w-[42.55%] bg-[#2B398B] xl:bg-transparent relative flex flex-col justify-center pt-[80px] lg:pt-[120px] xl:pt-0 pb-[120px] lg:pb-[150px] xl:pb-0 pl-[24px] pr-[24px] xl:pl-[3.1%] xl:pr-[39.3%] overflow-hidden xl:aspect-[766/672]">
              {/* Desktop Shape Background */}
              <div className="hidden xl:block absolute inset-0 z-0">
                <Image src="/assets/about/mission_shape.svg" alt="Mission Shape" fill className="object-cover" />
              </div>

              <div className="relative z-10 w-full max-w-[441px] mx-auto xl:mx-0">
                <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] text-white leading-[1.2]">
                  Our Mission
                </h2>
                <p className="font-archivo text-[18px] lg:text-[20px] 2xl:text-[24px] leading-[1.4] md:leading-[1.6] text-white mt-[20px] md:mt-[45px]">
                  Ksquare Energy has a wide array of experience and expertise and robust technical know-how to cater to any kind of solar panel installation needs. The mission is to create a sustainable economy as well as global development through clean energy generation.
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-[250px] md:w-[350px] xl:w-[62.5%] aspect-[479/333] z-10">
                <Image 
                  src="/assets/about/mission_bg-5f03f9.png" 
                  alt="Mission Graphic" 
                  fill 
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>

            {/* Connecting Logo (Visible on XL screens) */}
            <div className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[11%] aspect-[199/49]">
              <Image 
                src="/assets/about/mission_vision_arrow.svg"
                alt="KSQUARE Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Our Vision (Light Blue) */}
            <div className="w-full xl:w-[42.55%] bg-[#EDF3FF] xl:bg-transparent relative flex flex-col justify-center pt-[80px] lg:pt-[120px] xl:pt-0 pb-[120px] lg:pb-[150px] xl:pb-0 pl-[24px] xl:pl-[39.3%] pr-[24px] xl:pr-[3.1%] overflow-hidden text-left xl:text-right xl:aspect-[766/672]">
              {/* Desktop Shape Background */}
              <div className="hidden xl:block absolute inset-0 z-0">
                <Image src="/assets/about/vision_shape.svg" alt="Vision Shape" fill className="object-cover" />
              </div>

              <div className="relative z-10 w-full max-w-[441px] mx-auto xl:mx-0 ml-auto">
                <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] text-[#2B398B] leading-[1.2]">
                  Our Vision
                </h2>
                <p className="font-archivo text-[18px] lg:text-[20px] 2xl:text-[24px] leading-[1.4] md:leading-[1.6] text-[#666666] mt-[20px] md:mt-[45px]">
                  Ksquare Energy has a wide array of experience and expertise and robust technical know-how to cater to any kind of solar panel installation needs. The mission is to create a sustainable economy as well as global development through clean energy generation.
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-[280px] md:w-[400px] xl:w-[70.7%] aspect-[542/361] z-10">
                <Image 
                  src="/assets/about/vision_bg.png" 
                  alt="Vision Graphic" 
                  fill 
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 4. Who We Serve */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="text-center flex flex-col items-center gap-[16px] mb-[60px]">
            <h2 className="font-jost text-[40px] md:text-[60px] text-[#2B398B] font-medium leading-[1.1]">
              Who <span className="italic font-bold">We Serve</span>
            </h2>
            <p className="font-archivo text-[17px] text-[#666666]">
              Powering Every Industry with Solar Solutions
            </p>
          </div>

          {/* Grid of Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {['EPC Companies', 'Installers', 'System Integrators', 'Distributors and Dealers', 'Export Partners'].map((title, i) => (
              <div key={i} className="bg-[#EFF0F6] p-[40px] flex flex-col items-center justify-center text-center min-h-[200px] hover:bg-[#e0e2ed] transition-colors cursor-pointer">
                <h3 className="font-archivo text-[24px] font-semibold text-[#2B398B]">{title}</h3>
                <p className="font-archivo text-[16px] text-[#666666] mt-[12px]">Tailored solutions and priority support for {title.toLowerCase()}.</p>
              </div>
            ))}
            <div className="bg-[#2B398B] p-[40px] flex flex-col items-center justify-center text-center min-h-[200px]">
              <p className="font-recia italic font-medium text-[20px] lg:text-[28px] leading-[1.4] text-white">
                From manufacturing to installation, Ksquare Energy supports every stakeholder with reliable products, technical expertise, and dependable service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 5. The Values That Guide Us */}
      <section className="w-full py-[80px] lg:py-[120px] bg-[#F8FAFF]">
        <Container maxWidth="1600">
          <div className="text-center flex flex-col items-center gap-[16px] mb-[60px]">
            <h2 className="font-jost text-[40px] md:text-[60px] text-[#2B398B] font-medium leading-[1.1]">
              The Values That <span className="italic font-bold">Guide Us</span>
            </h2>
            <p className="font-archivo text-[17px] text-[#666666] max-w-[800px]">
              We are guided by integrity, sustainability, and innovation, creating positive impact for businesses and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {[
              { title: "Transparency & Integrity", desc: "No greenwashing, no exaggeration. We provide honest assessments, realistic timelines, and transparent reporting on all projects.", img: "/assets/about/value_transparency.png" },
              { title: "Continuous Innovation", desc: "The sustainability landscape evolves rapidly. We stay ahead through constant learning, technology adoption, and innovation in our methodologies.", img: "/assets/about/value_innovation.png" },
              { title: "Collaborative Partnership", desc: "We don't just consult—we partner. Your success is our success. We work alongside your team to build internal capacity and lasting change.", img: "/assets/about/value_partnership.png" }
            ].map((val, i) => (
              <div key={i} className="flex flex-col bg-white shadow-sm border border-[#E5E5E5] overflow-hidden">
                <div className="relative w-full aspect-[740/415]">
                  <Image src={val.img} alt={val.title} fill className="object-cover" />
                </div>
                <div className="p-[32px]">
                  <h3 className="font-archivo text-[22px] lg:text-[24px] font-semibold text-[#333333] mb-[12px]">{val.title}</h3>
                  <p className="font-archivo text-[16px] text-[#666666] leading-[1.5]">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 6. What Our Clients Say */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-[60px]">
            <div className="max-w-[700px]">
              <h2 className="font-jost text-[40px] md:text-[60px] text-[#2B398B] font-medium leading-[1.1] mb-[16px]">
                What Our <span className="italic font-bold">Clients Say</span>
              </h2>
              <p className="font-archivo text-[17px] text-[#666666]">
                Hear from EPC companies, distributors, and customers who trust Ksquare Energy for quality products and dependable service.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-[12px] mt-[24px] lg:mt-0">
               <button
                 type="button"
                 onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                 className="w-[48px] h-[48px] border border-[#2B398B] rounded-full flex items-center justify-center text-[#2B398B] hover:bg-[#2B398B] hover:text-white transition-colors"
                 aria-label="Previous testimonial"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
               </button>
               <button
                 type="button"
                 onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                 className="w-[48px] h-[48px] border border-[#2B398B] rounded-full flex items-center justify-center text-[#2B398B] hover:bg-[#2B398B] hover:text-white transition-colors"
                 aria-label="Next testimonial"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </button>
            </div>
          </div>

          <div className="w-full bg-[#EFF0F6] p-[40px] md:p-[80px] relative overflow-hidden rounded-[16px]">
            <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto">
              {/* Quote Icon */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[32px] opacity-20">
                <path d="M26.6667 34.6667H10.6667C10.6667 25.8293 17.8293 18.6667 26.6667 18.6667V8C11.9387 8 0 19.9387 0 34.6667V56H26.6667V34.6667ZM64 34.6667H48C48 25.8293 55.1707 18.6667 64 18.6667V8C49.272 8 37.3333 19.9387 37.3333 34.6667V56H64V34.6667Z" fill="#2B398B"/>
              </svg>

              <p className="font-archivo text-[20px] md:text-[28px] leading-[1.4] text-[#333333] font-medium">
                &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
              </p>

              <div className="mt-[40px]">
                <h4 className="font-jost text-[24px] font-semibold text-[#2B398B]">{testimonials[testimonialIndex].name}</h4>
                <p className="font-archivo text-[16px] text-[#666666]">{testimonials[testimonialIndex].company}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

    </div>
  );
}
