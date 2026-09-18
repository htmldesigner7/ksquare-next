import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import ProductCard from '@/components/common/ProductCard';
import Button from '@/components/common/Button';
import SectionSpacer from '@/components/common/SectionSpacer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DC Distribution Boxes (DCDB) | Ksquare Energy",
  description: "Explore Ksquare Energy's range of DC Distribution Boxes, engineered to protect solar installations with top-tier reliability.",
};

export default function DcdbProductListing() {
  const products = [
    {
      id: '1',
      title: '1-3.5kW DCDB 1IN 1OUT 1MPPT Fuse',
      description: 'AC distribution with NVR protection, RYB indication available.',
      imageSrc: '/assets/img_1_1444.png',
      href: '/products/dcdb/1'
    },
    {
      id: '2',
      title: '1-3.5kW DCDB 1IN 1OUT 1MPPT MCB Type',
      description: 'AC distribution with NVR protection, RYB indication available.',
      imageSrc: '/assets/img_1_1455.png',
      href: '/products/dcdb/2'
    },
    {
      id: '3',
      title: '4-7kW DCDB 2IN 2OUT 2MPPT MCB type',
      description: 'Multi-string combiners for utility and commercial-scale arrays.',
      imageSrc: '/assets/img_1_1466.png',
      href: '/products/dcdb/3'
    },
    {
      id: '4',
      title: '8.10 KW DCDB 2in 2out 2mppt mcb type',
      description: 'Array junction boxes with monitoring-ready terminal layouts.',
      imageSrc: '/assets/img_1_1477.png',
      href: '/products/dcdb/4'
    }
  ];

  return (
    <main className="w-full bg-white min-h-screen pt-[90px]">

      {/* Title & Breadcrumb Section */}
      <Container maxWidth="1800" className="pt-[40px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[8px] mb-[30px]">
          <Link href="/" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Home
          </Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link href="/products" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Products
          </Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-primary font-medium text-[15px]">DCDB</span>
        </div>

        {/* Title Group */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[40px] lg:gap-[80px]">
          <h1 className="font-jost text-[50px] lg:text-[68px] leading-[60px] lg:leading-[78px] text-primary font-normal">
            DC Distribution Boxes <br className="hidden lg:block" />
            <span className="font-recia italic font-bold">Engineered to Protect .</span>
          </h1>
          <div className="flex flex-col gap-[24px] pt-[10px]">
            <p className="font-archivo text-[17px] leading-[26px] text-gray-dark max-w-[550px]">
              Explore Expert article installation guides, products updates, industry news and technical resources from Ksquare Energy.
            </p>
            <div className="flex items-center gap-[16px]">
              <Link href="/articles" className="flex items-center gap-[12px] px-[24px] py-[10px] border border-primary text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Browse Articles <span className="w-[5px] h-[5px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
              <Link href="/products" className="flex items-center gap-[12px] px-[24px] py-[10px] border border-primary text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Explore Products <span className="w-[5px] h-[5px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Banner Image */}
      <Container maxWidth="1800" exactWidth={false} className="mt-[50px] mb-[120px]">
        <div className="relative w-full aspect-[16/6] md:aspect-[16/7] lg:aspect-[16/6] max-h-[700px] flex justify-center items-center overflow-hidden">
          <Image
            src="/assets/dcdb_banner.webp"
            alt="DC Distribution Boxes Variants"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Container>

      {/* Core Products Section */}
      <Container maxWidth="1600" className="py-[120px]">
        <div className="flex flex-col gap-[48px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[8px] items-center text-center">
            <h2 className="font-jost text-[60px] leading-[71px] text-primary font-normal">
              DCDB Core <span className="font-recia italic">Products</span>
            </h2>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
              From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[27px]">
            {products.map(product => (
              <div key={product.id} className="flex flex-col w-full max-w-[380px] h-[614px] mx-auto gap-[24px]">
                {/* Image Container */}
                <Link
                  href={product.href}
                  className="w-full h-[400px] bg-[#EFF0F6] flex items-center justify-center py-[30px] px-[72px]"
                >
                  <div className="relative w-full h-full flex justify-center items-center">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col h-[190px] gap-[24px]">
                  <div className="flex flex-col gap-[12px] h-[116px]">
                    <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">
                      {product.title}
                    </h3>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                      {product.description}
                    </p>
                  </div>

                  {/* View Product Button */}
                  <div className="flex h-[50px] justify-start">
                    <Button
                      href={product.href}
                      variant="outline-primary"
                      showDot
                      className="!w-[156px] !h-[50px] !px-[16px] !py-[12px] !rounded-none"
                    >
                      <span className="whitespace-nowrap">View Product</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* DCDB Configuration Section */}
      <Container maxWidth="1600" className="pb-[120px]">
        {/* Mobile / Tablet Fallback Layout */}
        <div className="lg:hidden flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[8px] text-center items-center mb-[20px]">
            <h2 className="font-jost text-[40px] leading-[48px] text-primary font-normal">
              DCDB Configuration
            </h2>
            <p className="font-archivo text-[16px] leading-[24px] text-[#666666]">
              A DCDB for Every Solar Requirement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
            {[
              { title: "1 In 1 Out DCDB", desc: "Single-string DC distribution for residential and small rooftop installations.", icon: "/assets/dcdb/icon_1_1.svg" },
              { title: "2 In 2 Out DCDB", desc: "Dual-string configurations for higher capacity commercial and industrial systems.", icon: "/assets/dcdb/icon_1_2.svg" },
              { title: "MPPT Based DCDB", desc: "Integrated MPPT support to maximise solar energy harvest efficiency.", icon: "/assets/dcdb/icon_1_3.svg" },
              { title: "Fuse Type DCDB", desc: "String fuse protection for precise DC overcurrent safeguarding.", icon: "/assets/dcdb/icon_1_4.svg" },
              { title: "MCB Type DCDB", desc: "MCB-based protection with resettable DC circuit protection.", icon: "/assets/dcdb/icon_1_6.svg" },
              { title: "DC SPD Integrated", desc: "Surge protection device integrated for complete transient defence.", icon: "/assets/dcdb/icon_1_5.svg" },
            ].map((config, index) => (
              <div key={index} className="flex flex-col gap-[16px]">
                <div className="w-[100px] h-[100px] bg-[#EFF0F6] rounded-full flex items-center justify-center p-[20px]">
                  <Image src={config.icon} width={50} height={50} alt={config.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-archivo text-[24px] leading-[32px] text-[#333333] font-normal">
                  {config.title}
                </h3>
                <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                  {config.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Proper Honeycomb Layout */}
        <div className="hidden lg:flex flex-col items-center mt-[100px]">
          {/* Section Title */}
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="font-jost text-[60px] leading-[57px] text-primary font-normal mb-[8px]">
              DCDB Configuration
            </h2>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
              A DCDB for Every Solar Requirement.
            </p>
          </div>

          <div className="relative w-full max-w-[1651px] mx-auto aspect-[1651/764] overflow-visible">
            {/* Connecting Circles */}
            {[
              { left: "15.32%", top: "32.72%" },
              { left: "47.66%", top: "32.72%" },
              { left: "80.31%", top: "32.72%" },
              { left: "31.49%", top: "45.94%" },
              { left: "63.84%", top: "45.94%" },
            ].map((circle, i) => (
              <div
                key={`circle-${i}`}
                className="absolute rounded-full border-[4px] border-[#DDDDDD]"
                style={{ left: circle.left, top: circle.top, width: "10.11%", height: "21.85%", zIndex: 0 }}
              />
            ))}

            {/* Hexagons & Text Blocks */}
            {[
              { id: 1, title: "1 In 1 Out DCDB", desc: "Single-string DC distribution for residential and small rooftop installations.", textPos: { left: "0%", top: "0%", width: "19.26%" }, hexPos: { left: "0.54%", top: "17.01%" }, icon: "/assets/dcdb/icon_1_1.svg" },
              { id: 2, title: "MPPT Based DCDB", desc: "Integrated MPPT support to maximise solar energy harvest efficiency.", textPos: { left: "32.46%", top: "0%", width: "19.5%" }, hexPos: { left: "33.13%", top: "17.01%" }, icon: "/assets/dcdb/icon_1_3.svg" },
              { id: 3, title: "MCB Type DCDB", desc: "MCB-based protection with resettable DC circuit protection.", textPos: { left: "65.59%", top: "0%", width: "17.08%" }, hexPos: { left: "65.59%", top: "17.01%" }, icon: "/assets/dcdb/icon_1_6.svg" },
              { id: 4, title: "2 In 2 Out DCDB", desc: "Dual-string configurations for higher capacity commercial and industrial systems.", textPos: { left: "14.71%", top: "86.91%", width: "22.53%" }, hexPos: { left: "16.89%", top: "43.71%" }, icon: "/assets/dcdb/icon_1_2.svg" },
              { id: 5, title: "Fuse Type DCDB", desc: "String fuse protection for precise DC overcurrent safeguarding.", textPos: { left: "49.9%", top: "86.91%", width: "17.08%" }, hexPos: { left: "49.36%", top: "43.71%" }, icon: "/assets/dcdb/icon_1_4.svg" },
              { id: 6, title: "DC SPD Integrated", desc: "Surge protection device integrated for complete transient defence.", textPos: { left: "82.37%", top: "86.91%", width: "17.08%" }, hexPos: { left: "81.82%", top: "43.71%" }, icon: "/assets/dcdb/icon_1_5.svg" }
            ].map((item, i) => (
              <div key={`hex-group-${i}`}>
                {/* Text Block */}
                <div
                  className="absolute flex flex-col items-center text-center gap-[12px]"
                  style={{ left: item.textPos.left, top: item.textPos.top, width: item.textPos.width, zIndex: 10 }}
                >
                  <h3 className="font-archivo text-[20px] xl:text-[24px] leading-[28px] xl:leading-[32px] text-[#333333] font-medium">
                    {item.title}
                  </h3>
                  <p className="font-archivo text-[15px] xl:text-[17px] leading-[22px] xl:leading-[26px] text-[#666666]">
                    {item.desc}
                  </p>
                </div>

                {/* Large Hexagon */}
                <div className="absolute z-10" style={{ left: item.hexPos.left, top: item.hexPos.top, width: "18.17%", height: "39.26%" }}>
                  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full preserve-3d">
                    <path d="M150 1.5L278.605 75.75V224.25L150 298.5L21.3949 224.25V75.75L150 1.5Z" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="3" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Small Hexagon */}
                    <div className="relative flex items-center justify-center w-[74%] h-[74%]">
                      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                        <path d="M150 0L279.904 75V225L150 300L20.0962 225V75L150 0Z" fill="#EFF0F6" />
                      </svg>
                      <div className="relative z-10 flex items-center justify-center w-[40%] h-[40%]">
                        <Image src={item.icon} width={90} height={90} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <SectionSpacer size={100} />

      {/* Why Choose Section */}
      <div className="w-full bg-[#F0F5FE] py-[100px]">
        <Container>
          <div className="flex flex-col gap-[80px]">
            {/* Header */}
            <div className="flex flex-col gap-[16px] w-full text-center lg:text-left">
              <h2 className="font-archivo text-[60px] leading-[77px] text-primary font-normal">
                Why Choose a <span className="font-recia italic font-semibold">Ksquare DCDB?</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                Every solar installation requires dependable DC-side protection. Ksquare DC Distribution Boxes are engineered to safeguard your photovoltaic system, improve operational efficiency, and ensure long-term performance under demanding environmental conditions.
              </p>
            </div>

            {/* Content (Accordion + Image) */}
            <div className="flex flex-col lg:flex-row gap-[50px] items-start w-full">
              {/* Accordion List */}
              <div className="flex-1 flex flex-col gap-[40px] w-full">
                {[
                  {
                    title: "Superior Electrical Protection",
                    desc: "A DC Distribution Box serves as the first line of defense for your solar PV system by protecting against overcurrent, short circuits, reverse current, and electrical faults. Ksquare DCDBs integrate premium protection devices to ensure safe power flow between solar panels and the inverter."
                  },
                  {
                    title: "High-Performance Components",
                    desc: "Engineered using top-tier components like robust DC MCBs, surge protection devices (SPDs), and premium fuse links that guarantee longevity and reliability in harsh conditions."
                  },
                  {
                    title: "Weatherproof & Outdoor Ready",
                    desc: "Housed in IP-rated enclosures, our distribution boxes provide excellent resistance against dust, moisture, and extreme temperatures, making them perfect for outdoor solar applications."
                  },
                  {
                    title: "Built for Every Solar Project",
                    desc: "Whether you need a compact 1-in 1-out unit for a residential roof or a complex multi-string combiner box for a utility-scale solar farm, we have configurations tailored to your specific needs."
                  }
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <details
                      className="group"
                      open={index === 0}
                      name="why-choose-accordion"
                    >
                      <summary className="flex items-start gap-[24px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center bg-[#EDF3FF] rounded-none">
                          <span className="font-archivo text-[17px] text-[#333333] font-normal">{index + 1}</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between min-h-[48px]">
                          <h3 className="font-archivo text-[20px] lg:text-[24px] text-[#333333] group-open:font-semibold transition-all">
                            {item.title}
                          </h3>
                          <span className="font-archivo text-[24px] text-[#333333] group-open:hidden">+</span>
                          <span className="font-archivo text-[24px] text-[#333333] hidden group-open:block">-</span>
                        </div>
                      </summary>
                      <div className="pl-[72px] pt-[16px]">
                        <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                          {item.desc}
                        </p>
                      </div>
                    </details>
                    {index < 3 && <hr className="border-[#E8E8E8]" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Image */}
              <div className="w-full lg:w-[750px] flex-shrink-0">
                <Image
                  src="/assets/dcdb/why_choose.png"
                  width={750}
                  height={550}
                  alt="Why Choose a Ksquare DCDB?"
                  className="w-full h-auto object-cover rounded-[16px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <SectionSpacer size={100} />

      {/* Request Your Custom Quote Section */}
      <div className="w-full">
        <Container>
          <div className="flex flex-col gap-[48px] w-full mx-auto ">
            
            {/* Top Info Section (Title & Cards) */}
            <div className="flex flex-col gap-[40px]">
              {/* Header */}
              <div className="flex flex-col gap-[12px]">
                <h2 className="font-dm text-[40px] lg:text-[50px] leading-[1.2] text-primary font-normal">
                  Request Your Custom Quote
                </h2>
                <p className="font-archivo text-[16px] text-primary leading-[1.5]">
                  Reach out to our team with your installation details, and we will get back to you with pricing, availability, and any technical guidance you need.
                </p>
              </div>

              {/* Info Cards (Horizontal Layout) */}
              <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-0 lg:items-start w-full">
                {/* Card 1 */}
                <div className="flex-1 flex gap-[16px] items-start pr-[24px]">
                  <div className="w-[48px] h-[48px] bg-[#F2F4FB] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="flex flex-col gap-[4px] mt-[4px]">
                    <h4 className="font-archivo text-[14px] text-[#666666]">Call Us Directly</h4>
                    <p className="font-dm text-[15px] font-medium text-[#111111]">+91 79 6969 7979</p>
                    <p className="font-archivo text-[13px] text-[#999999] mt-[2px] leading-tight">Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 flex gap-[16px] items-start lg:border-l border-[#E8E8E8] lg:px-[32px]">
                  <div className="w-[48px] h-[48px] bg-[#F2F4FB] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="flex flex-col gap-[4px] mt-[4px]">
                    <h4 className="font-archivo text-[14px] text-[#666666]">Email Support</h4>
                    <p className="font-dm text-[15px] font-medium text-[#111111]">info@ksquareenergy.com</p>
                    <p className="font-archivo text-[13px] text-[#999999] mt-[2px] leading-tight">For project portfolios, floor plans, and corporate pricing</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 flex gap-[16px] items-start lg:border-l border-[#E8E8E8] lg:pl-[32px]">
                  <div className="w-[48px] h-[48px] bg-[#F2F4FB] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="flex flex-col gap-[4px] mt-[4px]">
                    <h4 className="font-archivo text-[14px] text-[#666666]">Ahmedabad Branch Office</h4>
                    <p className="font-dm text-[15px] font-medium text-[#111111]">Dholera SIR, Activation Zone Gujarat – 382460, India</p>
                    <p className="font-archivo text-[13px] text-[#999999] mt-[2px] leading-tight">Strategically located inside the smart city development zone</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="w-full bg-white border border-[#E8E8E8] p-[32px] lg:p-[48px] flex flex-col gap-[40px]">
              
              {/* Form Title */}
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[40px] lg:text-[48px] font-normal text-primary leading-[1.1] font-dm">
                  Send an <span className="font-recia italic">Enquiry</span>
                </h3>
                <p className="font-archivo text-[15px] text-[#666666]">
                  Please fill out the form below, and our relationship manager will get back to you within 2 hours.
                </p>
              </div>

              {/* Form Inputs Grid */}
              <div className="flex flex-col gap-[24px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">Email Address</label>
                    <input type="email" placeholder="name@domain.com" className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">States</label>
                    <div className="relative">
                      <select className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#999999] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                        <option>Select budget range.</option>
                      </select>
                      <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">City</label>
                    <input type="text" placeholder="Enter City" className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[14px] text-[#333333]">Pincode</label>
                    <input type="text" placeholder="Enter Pincode" className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[14px] text-[#333333]">Subject</label>
                  <input type="text" placeholder="e.g. Project Name." className="w-full border border-[#E8E8E8] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[14px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="w-full border border-[#E8E8E8] bg-white min-h-[140px] p-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary transition-colors resize-y"></textarea>
                </div>

                {/* Form Button */}
                <div className="pt-[16px]">
                  <button className="flex items-center justify-center gap-[12px] bg-white border border-[#2B398B] text-[#2B398B] px-[24px] py-[12px] hover:bg-[#F2F4FB] transition-colors duration-300 font-archivo font-medium text-[15px] w-fit group">
                    <span>Send Enquiry</span>
                    <span className="w-[6px] h-[6px] rounded-full bg-[#2B398B] transition-transform group-hover:scale-125"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </main>
  );
}
