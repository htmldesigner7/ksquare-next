import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import SectionSpacer from '@/components/common/SectionSpacer';
import { Metadata } from 'next';

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
    <main className="w-full bg-white min-h-screen pt-[90px] font-archivo">

      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[40px] lg:pt-[60px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[15px] lg:max-w-[792px]">
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
              <h1 className="font-recia text-[48px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal mt-[10px]">
                Grievance <br className="hidden lg:block" />
                <span className="italic font-semibold">Redressal</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] lg:max-w-[899px] lg:pb-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.4] lg:leading-[36px] text-[#333333]">
                Something didn&apos;t go as planned? Tell us what happened. We know that issues can arise during installation, product use, billing, warranty service or project coordination. This is a direct channel to raise your concern and understand how Ksquare handles it.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
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

        {/* Hero Image */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="w-full relative aspect-[1804/500] rounded-[24px] overflow-hidden">
            <Image
              src="/assets/grievance/hero_banner_bg-6c650f.png"
              alt="Grievance Redressal at Ksquare Energy"
              fill
              className="object-cover"
              priority
            />
            {/* Overlapping accent image (decorative, approximated from Figma's layered hero composition) */}
            <div className="hidden md:block absolute -bottom-[24px] -right-[24px] w-[42%] max-w-[420px] aspect-[1456/658] rounded-[16px] overflow-hidden border-[6px] border-white shadow-lg">
              <Image
                src="/assets/grievance/hero_overlay-2d7b00.png"
                alt="Ksquare Energy team resolving customer concerns"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Your Concern Deserves a Place to Grow */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[100px]">
            {/* Left: Text & Stats */}
            <div className="flex flex-col gap-[48px] w-full xl:max-w-[750px] shrink-0">
              <div className="flex flex-col gap-[24px]">
                <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] text-[#333333]">
                  Your Concern Deserves a{' '}
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
                <div className="w-full h-px bg-[#C6CCED]" />
                <div className="flex items-center gap-[24px] w-full">
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">100+</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Team Members</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">10+</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Career Opportunities</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">Growing</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Work Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full xl:w-[750px] aspect-[750/507] shrink-0">
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

      <SectionSpacer size={150} />

      {/* 3. What Can You Report? */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[48px]">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal">
                What Can <span className="font-recia italic font-bold">You Report ?.</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                Use this channel for concerns related to your Ksquare product, project, installation or service experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
              {reportCategories.map((cat) => (
                <div key={cat.title} className="flex flex-col gap-[20px] bg-[#EFF0F6] p-[32px] lg:p-[40px]">
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

      <SectionSpacer size={150} />

      {/* 4. Tell Us What Went Wrong (Form + Contact Info) */}
      <section id="grievance-form" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] items-start w-full">

            {/* Form Column */}
            <div className="w-full lg:flex-1 bg-white border border-[#DDDDDD] p-[32px] lg:p-[48px] flex flex-col gap-[32px]">
              {/* Form Header */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-dm text-[36px] lg:text-[50px] leading-[1.15] text-primary font-normal">
                  Tell Us What <span className="font-recia italic">Went Wrong</span>
                </h3>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  Provide as much information as possible so we can route your concern to the right team and investigate it efficiently.
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Email Address</label>
                    <input type="email" placeholder="name@domain.com" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Customer Type</label>
                    <div className="relative">
                      <select className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer rounded-[8px]">
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
                    <label className="font-archivo text-[17px] text-[#333333]">City</label>
                    <input type="text" placeholder="Enter City" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Pincode</label>
                    <input type="text" placeholder="Enter Pincode" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Grievance Type*</label>
                    <div className="relative">
                      <select className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer rounded-[8px]">
                        <option>Select grievance type</option>
                      </select>
                      <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-archivo text-[17px] text-[#333333]">Subject</label>
                    <input type="text" placeholder="Enter Subject" className="w-full border border-[#DDDDDD] bg-white h-[48px] px-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors rounded-[8px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="w-full border border-[#DDDDDD] bg-white min-h-[120px] p-[16px] font-archivo text-[15px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y rounded-[8px]"></textarea>
                </div>

                {/* Form Button */}
                <div className="pt-[8px]">
                  <button className="flex items-center justify-center gap-[16px] bg-white border border-primary text-primary px-[24px] py-[12px] hover:bg-[#F0F5FE] transition-colors duration-300 font-archivo text-[17px] w-fit group">
                    <span>Submit Grievance</span>
                    <span className="w-[8px] h-[8px] rounded-full bg-primary transition-transform group-hover:scale-125"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-[560px] shrink-0 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-dm text-[36px] lg:text-[50px] leading-[1.15] text-primary font-normal">
                  Corporate Office
                </h3>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  Visit our headquarters or get in touch through our direct business communication channels.
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                {/* Card 1 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] text-[#333333]">Call Us Directly</h4>
                    <p className="font-archivo text-[17px] text-[#333333]">+91 79 6969 7979</p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] text-[#333333]">Email Support</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]">info@ksquareenergy.com</p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">For project portfolios, floor plans, and corporate pricing</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-[20px] items-start p-[24px] bg-white border border-[#E8E4E0]">
                  <div className="w-[48px] h-[48px] bg-[rgba(74,90,181,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B398B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] text-[#333333]">Ahmedabad Branch Office</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]">Dholera SIR, Activation Zone Gujarat – 382460, India</p>
                    <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">Strategically located inside the smart city development zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 5. What Happens After You Submit? */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[60px]">
            <h2 className="font-recia text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal text-center">
              What Happens <span className="italic font-bold">After You Submit?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[40px] gap-y-[48px] w-full">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center gap-[16px]">
                  <div className="w-[64px] h-[64px] rounded-full bg-[#EFF0F6] flex items-center justify-center">
                    <span className="font-archivo text-[24px] font-medium text-primary">{i + 1}</span>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="font-archivo text-[22px] lg:text-[24px] leading-[26px] text-[#333333] font-medium">
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
      </section>

      <SectionSpacer size={120} />

      {/* 6. Still Have a Concern? CTA */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/assets/grievance/cta_bg.png"
            alt=""
            fill
            className="object-cover opacity-90"
            aria-hidden="true"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex items-center opacity-80 pointer-events-none">
          <Image
            src="/assets/grievance/cta_graphic.svg"
            alt=""
            width={695}
            height={431}
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <Container maxWidth="1600" className="relative z-10 py-[80px] lg:py-[110px]">
          <div className="flex flex-col gap-[24px] max-w-[1025px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-white font-normal">
                Still Have a <span className="font-recia italic font-semibold">Concern ?</span>
              </h2>
              <p className="font-archivo text-[16px] leading-[24px] text-[#EDF3FF] max-w-[700px]">
                If you haven&apos;t found the answer you&apos;re looking for, submit your grievance and our team will route it to the appropriate department.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[24px]">
              <Button variant="outline" href="#grievance-form" showDot={true}>
                Raise a Grievance
              </Button>
              <Button variant="outline" href="/contact" showDot={true}>
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
