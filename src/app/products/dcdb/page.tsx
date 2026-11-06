import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import ProductCard from '@/components/common/ProductCard';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Disclosure from "@/components/common/Disclosure";
import ContactLink from "@/components/common/ContactLink";

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
    <main className="w-full bg-white min-h-dvh pt-[90px] pb-[60px] lg:pb-[93px]">

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
          <Link href="/products/dcdb" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Products
          </Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-primary font-medium text-[15px]">DCDB</span>
        </div>

        {/* Title Group */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[40px] lg:gap-[80px]">
          <h1 className="font-archivo text-[50px] lg:text-[68px] leading-[60px] lg:leading-[78px] text-primary font-normal">
            DC Distribution Boxes <br className="hidden lg:block" />
            <span className="font-recia italic font-bold">Engineered to Protect .</span>
          </h1>
          <div className="flex flex-col gap-[24px] pt-[10px]">
            <p className="font-archivo text-[17px] leading-[26px] text-gray-dark max-w-[550px]">
              Explore our complete range of certified DC Distribution Boxes, engineered for dependable protection across every solar installation type.
            </p>
            <div className="flex flex-wrap items-center gap-[16px]">
              <Link href="/contact" className="flex items-center gap-[12px] px-[24px] py-[10px] border border-primary text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Request a Quote <span className="w-[5px] h-[5px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
              <Link href="/download-resources" className="flex items-center gap-[12px] px-[24px] py-[10px] border border-primary text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Download Datasheet <span className="w-[5px] h-[5px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Banner Image */}
      <Container maxWidth="1800" exactWidth={false} className="mt-[37.5px]">
        <div className="relative w-full aspect-[16/6] md:aspect-[16/7] lg:aspect-[1800/622] flex justify-center items-center overflow-hidden">
          <Image
            src="/assets/dcdb_banner.webp"
            alt="DC Distribution Boxes Variants"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Container>

      <div className="flex flex-col gap-[60px] lg:gap-[110px] mt-[60px] lg:mt-[110px]">
      {/* Core Products Section (Figma 106:1547: header 105, 60px gap, 614px cards) */}
      <Container maxWidth="1600">
        <div className="flex flex-col gap-[60px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[8px] items-center text-center">
            <h2 className="font-archivo text-[60px] leading-[71px] text-primary font-normal">
              DCDB Core <span className="font-recia italic leading-none">Products</span>
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
                  className="img-hover-zoom w-full h-[400px] bg-[#EFF0F6] flex items-center justify-center py-[30px] px-[72px]"
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
      <Container maxWidth="1600" className="lg:-mt-[26px]">
        {/* Mobile / Tablet Fallback Layout */}
        <div className="canvas:hidden flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[8px] text-center items-center mb-[20px]">
            <h2 className="font-archivo text-[40px] leading-[48px] text-primary font-normal">
              DCDB Configuration
            </h2>
            <p className="font-archivo text-[16px] leading-[24px] text-[#666666]">
              A DCDB for Every Solar Requirement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[40px]">
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
        <div className="hidden canvas:flex flex-col items-center gap-[60px]">
          {/* Section Title */}
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="font-archivo text-[60px] leading-[57px] text-primary font-normal mb-[8px]">
              DCDB Configuration
            </h2>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
              A DCDB for Every Solar Requirement.
            </p>
          </div>

          <div className="canvas-zoom relative w-[1651px] shrink-0 aspect-[1651/764] overflow-visible">
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

      {/* Why Choose Section */}
      <div className="w-full bg-[#F0F5FE] py-[60px] lg:py-0 lg:h-[900px] lg:flex lg:items-center">
        <Container>
          <div className="flex flex-col gap-[40px] lg:gap-[60px]">
            {/* Header */}
            <div className="flex flex-col gap-[8px] w-full text-center">
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
              <div className="flex flex-col gap-[40px] w-full lg:flex-[800_1_0%] lg:min-w-0 lg:max-w-[800px]">
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
                    <Disclosure defaultOpen={index === 0} group="why-choose-accordion" summaryClassName="flex items-start gap-[24px]" summary={<>
                        <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center bg-[#EDF3FF] rounded-none">
                          <span className="font-archivo text-[17px] text-[#333333] font-normal">{index + 1}</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between min-h-[48px]">
                          <h3 className="font-archivo text-[20px] lg:text-[24px] text-[#333333] group-data-[open=true]:font-semibold transition-all">
                            {item.title}
                          </h3>
                          <span className="font-archivo text-[24px] text-[#333333] group-data-[open=true]:hidden">+</span>
                          <span className="font-archivo text-[24px] text-[#333333] hidden group-data-[open=true]:block">-</span>
                        </div>
                      </>}>
                      <div className="pl-[72px] pt-[16px]">
                        <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                          {item.desc}
                        </p>
                      </div>
                    </Disclosure>
                    {index < 3 && <hr className="border-[#E8E8E8]" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Image */}
              <div className="w-full lg:flex-[750_1_0%] lg:min-w-0 lg:max-w-[750px]">
                <Image
                  src="/assets/dcdb/why_choose.png"
                  width={750}
                  height={550}
                  alt="Why Choose a Ksquare DCDB?"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Request Your Custom Quote Section (Figma 106:1599: 1600 wide, 32px gap, 1210 tall) */}
      <div className="w-full">
        <Container>
          <div className="flex flex-col gap-[32px] w-full mx-auto">

            {/* Top Info Section (Title & Cards) */}
            <div className="flex flex-col gap-[24px]">
              {/* Header */}
              <div className="flex flex-col gap-[12px]">
                <h2 className="m-0 font-dm text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[70px] text-primary font-medium">
                  Request Your Custom Quote
                </h2>
                <p className="m-0 font-archivo text-[16px] lg:text-[17px] text-primary leading-[26px]">
                  Reach out to our team with your installation details, and we will get back to you with pricing, availability, and any technical guidance you need.
                </p>
              </div>

              {/* Info Cards (Figma: row, 16px gap, 24px padding, 72px icon badge, 1px right rule) */}
              <div className="flex flex-col lg:flex-row gap-[16px] w-full">
                {[
                  {
                    label: "Call Us Directly",
                    value: "+91 79 6969 7979",
                    note: "Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM",
                    icon: <svg width="24" height="24" viewBox="0 0 18 18" fill="#2B398B" aria-hidden="true"><path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.56 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.24 5.7 3.44 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" /></svg>,
                  },
                  {
                    label: "Email Support",
                    value: "info@ksquareenergy.com",
                    note: "For project portfolios, floor plans, and corporate pricing",
                    icon: <Image src="/assets/footer/contact-mail.svg" alt="" width={29} height={22} aria-hidden="true" />,
                  },
                  {
                    label: "Ahmedabad Branch Office",
                    value: "Dholera SIR, Activation Zone Gujarat – 382460, India",
                    note: "Strategically located inside the smart city development zone",
                    icon: <svg width="22" height="26" viewBox="0 0 17 20" fill="#2B398B" aria-hidden="true"><path d="M8.5 0C3.8 0 0 3.8 0 8.5C0 14.9 8.5 20 8.5 20C8.5 20 17 14.9 17 8.5C17 3.8 13.2 0 8.5 0ZM8.5 11.5C6.8 11.5 5.5 10.2 5.5 8.5C5.5 6.8 6.8 5.5 8.5 5.5C10.2 5.5 11.5 6.8 11.5 8.5C11.5 10.2 10.2 11.5 8.5 11.5Z" /></svg>,
                  },
                ].map((card, i) => (
                  <div key={card.label} className={`flex-1 flex items-start gap-[24px] py-[20px] ${i === 0 ? "pr-[24px]" : "lg:px-[24px]"} ${i < 2 ? "lg:border-r border-[#E8E4E0]" : ""}`}>
                    <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] bg-[#EDEEF8] rounded-full flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-[4px] min-w-0">
                      <h4 className="m-0 font-archivo font-normal text-[17px] leading-[27px] text-[#333333]">{card.label}</h4>
                      <p className="m-0 font-dm text-[16px] font-medium text-[#111111]"><ContactLink text={card.value} /></p>
                      <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{card.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Box (Figma: 32px padding, 32px gap, #DDDDDD border) */}
            <div className="w-full lg:max-w-[1576px] bg-white border border-[#DDDDDD] p-[24px] lg:p-[32px] flex flex-col gap-[32px]">

              {/* Form Title */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="m-0 text-[40px] lg:text-[60px] font-medium text-primary leading-[1.2] lg:leading-[70px] font-dm">
                  Send an <span className="font-recia italic">Enquiry</span>
                </h3>
                <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  Please fill out the form below, and our relationship manager will get back to you within 2 hours.
                </p>
              </div>

              {/* Form Inputs (Figma: 20px between rows and columns, 8px label gap, 12/16 input padding) */}
              <div className="flex flex-col gap-[20px]">
                {[
                  [
                    { label: "Full Name", type: "text", ph: "Enter your full name" },
                    { label: "Email Address", type: "email", ph: "name@domain.com" },
                  ],
                  [
                    { label: "Phone Number", type: "text", ph: "+91 XXXXX XXXXX" },
                    { label: "States", type: "select", ph: "Select budget range." },
                  ],
                  [
                    { label: "City", type: "text", ph: "Enter City" },
                    { label: "Pincode", type: "text", ph: "Enter Pincode" },
                  ],
                ].map((row, ri) => (
                  <div key={ri} className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {row.map((f) => (
                      <div key={f.label} className="flex flex-col gap-[8px]">
                        <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">{f.label}</label>
                        {f.type === "select" ? (
                          <div className="relative">
                            <select className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                              <option>{f.ph}</option>
                            </select>
                            <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                            </div>
                          </div>
                        ) : (
                          <input type={f.type} placeholder={f.ph} className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Subject</label>
                  <input type="text" placeholder="e.g. Project Name." className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="w-full border border-[#DDDDDD] bg-white h-[105px] px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y"></textarea>
                </div>
              </div>

              {/* Form Button (Figma: 12/16 padding, 17/26 text, 8px dot) */}
              <button className="flex items-center justify-center gap-[16px] bg-white border border-[#2B398B] text-[#2B398B] px-[15px] py-[11px] hover:bg-[#2B398B] hover:text-white transition-colors duration-300 font-archivo text-[17px] leading-[26px] w-fit group">
                <span>Send Enquiry</span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover:bg-white transition-colors"></span>
              </button>
            </div>
          </div>
        </Container>
      </div>
      </div>

    </main>
  );
}
