import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import SectionSpacer from '@/components/common/SectionSpacer';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import { Metadata } from 'next';
import ContactLink from "@/components/common/ContactLink";
import CtaBanner from "@/components/page-kit/CtaBanner";
import ProcessTimelineArt from "@/components/page-kit/ProcessTimelineArt";

export const metadata: Metadata = {
  title: "Grievance Redressal | Ksquare Energy",
  description: "Raise a grievance or complaint with Ksquare Energy regarding installation, product, billing, warranty or service concerns and track how we resolve it.",
};

const reportCategories = [
  {
    title: "Installation",
    desc: "Report delays, incomplete installation work or concerns regarding project execution.",
    icon: "/assets/grievance/icon_installation.svg",
  },
  {
    title: "Product",
    desc: "Concerns related to panels, inverters, ACDB/DCDB, enclosures, cables or other supplied components.",
    icon: "/assets/grievance/icon_product.svg",
  },
  {
    title: "Warranty",
    desc: "Raise concerns about warranty claims, service visits, repairs or replacement requests.",
    icon: "/assets/grievance/icon_warranty.svg",
  },
  {
    title: "Billing",
    desc: "Report invoicing errors, payment discrepancies or other billing-related concerns.",
    icon: "/assets/grievance/icon_billing.svg",
  },
  {
    title: "Net Metering",
    desc: "Raise concerns about application delays, documentation or coordination relating to applicable processes.",
    icon: "/assets/grievance/icon_net_metering.svg",
  },
  {
    title: "Conduct",
    desc: "Report concerns involving a Ksquare representative, installer, channel partner or dealer.",
    icon: "/assets/grievance/icon_conduct.svg",
  },
];

const processSteps = [
  {
    title: "Tell Us What Happened",
    desc: "Submit the grievance form with your project, product and location details.",
  },
  {
    title: "Our Team Investigates",
    desc: "The appropriate team reviews the issue and may contact you for additional information.",
  },
  {
    title: "Action & Resolution",
    desc: "We'll communicate the outcome and any corrective action taken.",
  },
  {
    title: "Complaint Registered",
    desc: "You'll receive confirmation that your grievance has been registered.",
  },
  {
    title: "Site Visit, If Required",
    desc: "For product or installation concerns, a site visit may be scheduled when necessary.",
  },
  {
    title: "Still Not Resolved?",
    desc: "You can escalate your grievance through the escalation matrix below.",
  },
];

export default function GrievancePage() {
  return (
    <main className="w-full bg-white min-h-dvh pt-[90px] font-archivo overflow-x-clip">

      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[40px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px] flex-wrap">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#666666] hover:text-primary leading-[28px]">
                  Home
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link href="/about-us" className="font-archivo text-[16px] lg:text-[20px] text-[#666666] hover:text-primary leading-[28px]">
                  About Us
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Grievance
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[48px] lg:text-[68px] leading-[1.1] lg:leading-[78px] lg:h-[160px] text-primary font-normal">
                Grievance <br className="hidden lg:block" />
                <span className="italic font-semibold">Redressal</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] lg:max-w-[899px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.4] lg:leading-[36px] text-[#333333]">
                Something didn&apos;t go as planned? Tell us what happened. We know that issues can arise during installation, product use, billing, warranty service or project coordination. This is a direct channel to raise your concern and understand how Ksquare handles it.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
                <Button variant="outline-primary" href="#grievance-form" showDot={true}>
                  Raise a Grievance
                </Button>
                <Button variant="outline-primary" href="/contact" showDot={true}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero image group (Figma #124:4530 + cutout #124:4533, 1804 x 658): 500px photo plate with the transparent cut-out rising above it */}
        <div className="w-full max-w-[1804px] mx-auto px-4 lg:px-8 g1868:px-0 mt-[40px] lg:mt-[27px]">
          <div className="relative w-full aspect-[1804/658]">
            {/* photo plate + team cut-out merged into one Figma image (cut-out runs 46px past the plate on the right) */}
            <div className="absolute left-0 top-0 h-full pointer-events-none" style={{ width: "102.55%" }}>
              <Image
                src="/assets/grievance/hero_full.webp"
                alt="Grievance Redressal at Ksquare Energy"
                fill
                sizes="1850px"
                className="object-fill"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      <SectionSpacer size={100} className="lg:h-[215px]" />

      {/* 2. Your Concern Deserves a Place to Grow */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[clamp(40px,5.2vw,100px)]">
            {/* Left: Text & Stats */}
            <div className="flex flex-col gap-[48px] w-full xl:flex-1 xl:min-w-0 xl:max-w-[750px]">
              <div className="flex flex-col gap-[24px] xl:h-[359px]">
                <h2 className="font-archivo text-[36px] lg:text-[48px] canvas:text-[56px] min-[1600px]:text-[60px] leading-[1.15] lg:leading-[70px] text-[#333333]">
                  Your Concern Deserves a<br />
                  <span className="font-recia italic font-medium">A Place to Grow.</span>
                </h2>
                <div className="flex flex-col gap-[14px]">
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    At Ksquare, every complaint is a chance to improve. Whether it&apos;s a delayed shipment, a product quality issue, or a service gap, we take each concern seriously and route it to the team best placed to resolve it quickly.
                  </p>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    Our grievance redressal process is built for transparency: you get an acknowledgement within 24 hours, a dedicated point of contact, and regular updates until your issue is closed to your satisfaction.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-[32px] w-full">
                <div className="w-full h-px -mb-px bg-[#C6CCED]" />
                <div className="flex flex-wrap items-start sm:items-center gap-[16px] sm:gap-[24px] w-full">
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <AnimatedCounter end={100} suffix="+" className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary" />
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Team Members</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <AnimatedCounter end={10} suffix="+" className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary" />
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Career Opportunities</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary">Growing</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Work Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full xl:flex-1 xl:min-w-0 xl:max-w-[750px] aspect-[750/507]">
              <Image
                src="/assets/grievance/team_photo.png"
                alt="Ksquare Energy team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} className="lg:h-[100px]" />

      {/* 3. What Can You Report? */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[48px]">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[70px] lg:h-[57px] text-primary font-normal">
                What Can <span className="font-recia italic font-medium">You Report ?.</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                Use this channel for concerns related to your Ksquare product, project, installation or service experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
              {reportCategories.map((cat) => (
                <div key={cat.title} className="card-lift flex flex-col gap-[20px] bg-[#EFF0F6] px-[32px] py-[36px] lg:px-[40px] lg:py-[50px]">
                  <div className="flex items-center gap-[24px] lg:gap-[30px]">
                    <div className="w-[90px] h-[90px] p-[10px] bg-white rounded-[10px] flex items-center justify-center shrink-0">
                      <Image src={cat.icon} width={60} height={60} alt={cat.title} className="w-[60px] h-[60px] object-contain" />
                    </div>
                    <h3 className="font-archivo text-[22px] lg:text-[24px] leading-[32px] text-[#333333]">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} className="lg:h-[65px]" />

      {/* 5. What Happens After You Submit? */}
      <section className="w-full">
        {/* Desktop: pixel-exact zigzag timeline per Figma (same pattern as /our-infrastructure) */}
        <div className="canvas-zoom hidden canvas:block relative w-[1600px] mx-auto h-[681px]">
          {/* Heading */}
          <div className="absolute left-0 right-0 top-[36px] flex justify-center">
            <h2 className="font-archivo text-[60px] leading-[70px] text-primary font-normal text-center">
              What Happens <span className="font-recia italic font-medium">After You Submit?</span>
            </h2>
          </div>

          {/* Row 1 labels (above the connector graphic) */}
          <div className="absolute left-[3.39px] top-[169.9px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[0].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[0].desc}</p>
          </div>
          <div className="absolute left-[521.49px] top-[169.9px] w-[332px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[1].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[1].desc}</p>
          </div>
          <div className="absolute left-[1053.13px] top-[169.9px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[2].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[2].desc}</p>
          </div>

          {/* Connector graphic (circles + zigzag dotted line) with 4 overlaid icons */}
          <div className="absolute left-0 top-[274.95px] w-[1600px] h-[302.82px]">
            <ProcessTimelineArt />
          </div>

          {/* Row 2 labels (below the connector graphic) */}
          <div className="absolute left-[256px] top-[590.77px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[3].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[3].desc}</p>
          </div>
          <div className="absolute left-[789.82px] top-[590.77px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[4].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[4].desc}</p>
          </div>
          <div className="absolute left-[1309.16px] top-[590.77px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[5].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[5].desc}</p>
          </div>
        </div>

        {/* Mobile/tablet fallback (Figma provides no separate mobile frame) */}
        <div className="canvas:hidden">
          <Container maxWidth="1600">
            <div className="flex flex-col items-center gap-[60px]">
              <h2 className="font-archivo text-[36px] leading-[1.15] text-primary font-normal text-center">
                What Happens <span className="font-recia italic font-medium">After You Submit?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[48px] w-full">
                {processSteps.map((step, i) => (
                  <div key={step.title} className="flex flex-col items-center text-center gap-[16px]">
                    <div className="w-[64px] h-[64px] rounded-full bg-[#EFF0F6] flex items-center justify-center">
                      <span className="font-archivo text-[24px] font-medium text-primary">{i + 1}</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <h3 className="font-archivo text-[22px] leading-[26px] text-[#333333] font-medium">
                        {step.title}
                      </h3>
                      <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[290px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      <SectionSpacer size={100} className="lg:h-[137px]" />

      {/* 4. Tell Us What Went Wrong (Form + Contact Info) */}
      <section id="grievance-form" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] items-start lg:items-center w-full">

            {/* Form Column */}
            <div className="w-full lg:flex-1 bg-white border border-[#DDDDDD] p-[32px] lg:p-[48px] flex flex-col gap-[32px]">
              {/* Form Header */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-dm text-[36px] lg:text-[44px] canvas:text-[48px] min-[1600px]:text-[60px] leading-[1.15] lg:leading-[70px] min-[1600px]:h-[70px] text-primary font-medium">
                  Tell Us What <span className="font-recia italic font-medium">Went Wrong</span>
                </h3>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] lg:text-justify">
                  Provide as much information as possible so we can route your concern to the right team and investigate it efficiently.
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Email Address</label>
                    <input type="email" placeholder="name@domain.com" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Customer type</label>
                    <div className="relative">
                      <select className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer rounded-[8px]">
                        <option>Select customer type</option>
                      </select>
                      <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">City</label>
                    <input type="text" placeholder="Enter City" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Pincode</label>
                    <input type="text" placeholder="Enter Pincode" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Grievance Type*</label>
                    <div className="relative">
                      <select className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer rounded-[8px]">
                        <option>Select grievance type</option>
                      </select>
                      <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Subject</label>
                    <input type="text" placeholder="Enter Subject" className="w-full border border-[#DDDDDD] bg-white h-[52px] px-[16px] font-archivo text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="block w-full border border-[#DDDDDD] bg-white min-h-[120px] p-[16px] font-archivo text-[18px] leading-[1.55] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y rounded-[8px]"></textarea>
                </div>

                {/* Form Button */}
                <div className="pt-[12px]">
                  <Button variant="outline-primary" type="submit" showDot={true}>
                    Submit Grievance
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-[560px] shrink-0 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-dm text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[70px] text-primary font-medium">
                  Corporate Office
                </h3>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] lg:text-justify">
                  Visit our headquarters or get in touch through our direct business communication channels.
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                {/* Card 1 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/assets/grievance/icon_phone.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Call Us Directly</h4>
                    <p className="font-archivo text-[17px] leading-[27px] text-[#333333]"><ContactLink text="+91 79 6969 7979" /></p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666] lg:text-justify">Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/assets/grievance/icon_email.svg" alt="" width={18} height={14} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Email Support</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]"><ContactLink text="info@ksquareenergy.com" /></p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666] lg:text-justify">For project portfolios, floor plans, and corporate pricing</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/assets/grievance/icon_map_pin.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Ahmedabad Branch Office</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]"><ContactLink text="Dholera SIR, Activation Zone Gujarat – 382460, India" /></p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666] lg:text-justify">Strategically located inside the smart city development zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} className="lg:h-[153px]" />

      {/* 6. Still Have a Concern? — Figma renders this band as the top of the footer block, same banner as the shared footer CTA */}
      <CtaBanner
        title="Still Have a *Concern ?*"
        desc="If you haven't found the answer you're looking for, submit your grievance and our team will route it to the appropriate department."
        ctas={[
          { label: "Raise a Grievance", href: "#grievance-form" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

    </main>
  );
}
