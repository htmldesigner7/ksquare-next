import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import OurPresenceTabs from "./OurPresenceTabs";

export const metadata: Metadata = {
  title: "Contact Us | Ksquare Energy",
  description: "Get in touch with Ksquare Energy for solar manufacturing solutions, expert support, and scalable partnerships. Reach our corporate office, branch locations, or send us an enquiry.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-white font-archivo">

      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[90px] lg:pt-[130px]">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] w-full lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px]">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  Home
                </Link>
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Contact Us
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal">
                Lets Build, Your Solar<br />
                <span className="italic font-semibold">Project Together.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Connect with Ksquare Energy for reliable solar manufacturing solutions, expert support, and scalable partnerships tailored to your needs.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
                <Button variant="outline-primary" href="#enquiry-form" showDot>
                  Get in Touch
                </Button>
                <Button variant="outline-primary" href="#enquiry-form" showDot>
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Background Image */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="w-full relative aspect-[1800/541] overflow-hidden">
            <Image
              src="/assets/contact/hero_bg-5ea93e.png"
              alt="Ksquare Energy Facility"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 2. Enquiry Form Section */}
      <section id="enquiry-form" className="w-full">
        <Container maxWidth="1800">
          <div className="flex flex-col xl:flex-row justify-center items-stretch gap-[40px] xl:gap-[80px] w-full">

            {/* Form Column */}
            <div className="w-full xl:flex-1 bg-white border border-[#DDDDDD] p-[24px] md:p-[48px] flex flex-col gap-[32px]">
              {/* Form Title */}
              <div className="flex flex-col gap-[12px]">
                <h2 className="font-dm text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] text-primary font-medium">
                  Send an <span className="font-recia italic">Enquiry</span>
                </h2>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] text-justify">
                  Please fill out the form below, and our relationship manager will get back to you within 2 hours.
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Email Address</label>
                    <input type="email" placeholder="name@domain.com" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">States</label>
                    <div className="relative">
                      <select className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                        <option>Select States</option>
                      </select>
                      <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">City</label>
                    <input type="text" placeholder="Enter City" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Pincode</label>
                    <input type="text" placeholder="Enter Pincode" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Subject</label>
                  <input type="text" placeholder="e.g. Project Name." className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="w-full border border-[#DDDDDD] bg-white rounded-[8px] min-h-[120px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y"></textarea>
                </div>

                {/* Form Button */}
                <div className="pt-[8px]">
                  <Button variant="outline-primary" showDot className="w-fit">
                    Send Enquiry
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="w-full xl:w-[560px] xl:shrink-0 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="font-dm text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] text-primary font-medium">
                  Corporate Office
                </h2>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] text-justify">
                  Visit our headquarters or get in touch through our direct business communication channels.
                </p>
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-[16px]">
                {/* Call Us Directly */}
                <div className="flex gap-[20px] items-start bg-white border border-[#E8E4E0] p-[24px]">
                  <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74, 90, 181, 0.1)" }}>
                    <Image src="/assets/contact/icon_phone.svg" alt="" width={20} height={20} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Call Us Directly</h4>
                    <p className="font-archivo text-[17px] leading-[27px] text-[#333333]">+91 79 6969 7979</p>
                    <p className="font-archivo text-[16px] leading-[26px] text-[#666666] text-justify">Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex gap-[20px] items-start bg-white border border-[#E8E4E0] p-[24px]">
                  <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74, 90, 181, 0.1)" }}>
                    <Image src="/assets/contact/icon_email.svg" alt="" width={18} height={14} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Email Support</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]">info@ksquareenergy.com</p>
                    <p className="font-archivo text-[16px] leading-[26px] text-[#666666] text-justify">For project portfolios, floor plans, and corporate pricing</p>
                  </div>
                </div>

                {/* Ahmedabad Branch Office */}
                <div className="flex gap-[20px] items-start bg-white border border-[#E8E4E0] p-[24px]">
                  <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74, 90, 181, 0.1)" }}>
                    <Image src="/assets/contact/icon_map_pin.svg" alt="" width={20} height={20} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-archivo text-[17px] leading-[27px] text-[#333333]">Ahmedabad Branch Office</h4>
                    <p className="font-dm text-[16px] font-medium text-[#111111]">Dholera SIR, Activation Zone Gujarat – 382460, India</p>
                    <p className="font-archivo text-[16px] leading-[26px] text-[#666666] text-justify">Strategically located inside the smart city development zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 3. Our Presence */}
      <section className="w-full">
        <Container maxWidth="1800">
          <div className="flex flex-col items-center gap-[40px] w-full">
            {/* Header */}
            <div className="flex flex-col items-center gap-[14px] text-center max-w-[1368px]">
              <h2 className="font-jost text-[40px] md:text-[60px] leading-[1.1] text-primary font-medium">
                Our <span className="font-recia italic font-medium">Presence</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] text-center">
                Strategically located offices and manufacturing facilities to serve you better with quick support and seamless operations.
              </p>
            </div>

            {/* Zone Tabs + Location List */}
            <OurPresenceTabs />
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 4. Ahmedabad Branch Office (Map) */}
      <section className="w-full">
        <Container maxWidth="1800">
          <div className="flex flex-col items-stretch gap-[40px] w-full">
            {/* Header */}
            <div className="flex flex-col items-center gap-[14px] text-center w-full">
              <h2 className="font-archivo text-[40px] md:text-[60px] leading-[1.1] text-primary font-normal">
                Ahmedabad Branch <span className="font-recia italic">Office</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                Strategically located offices and manufacturing facilities to serve you better with quick support and seamless operations.
              </p>
            </div>

            {/* Map Layout */}
            <div className="flex flex-col xl:flex-row gap-[20px] w-full">
              {/* Main Map */}
              <div className="relative w-full xl:flex-1 aspect-[1800/474] xl:aspect-auto xl:h-[474px] overflow-hidden">
                <Image
                  src="/assets/contact/campus_map_main.png"
                  alt="Ksquare Energy Campus Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute left-[24px] bottom-[24px] md:left-[38px] md:bottom-[24px] bg-white p-[24px] flex flex-col gap-[20px] max-w-[calc(100%-48px)] md:max-w-[540px]">
                  <div className="flex flex-col gap-[10px]">
                    <h4 className="font-archivo text-[20px] lg:text-[24px] leading-[26px] text-primary">Get Direction</h4>
                    <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                      Click on the location or use the map to get directions to our campus
                    </p>
                  </div>
                  <Link href="#" className="flex items-center gap-[16px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-primary group w-fit">
                    <span>View On Larger Map</span>
                    <span className="w-[8px] h-[8px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110"></span>
                  </Link>
                </div>
              </div>

              {/* Side Thumbnails */}
              <div className="flex flex-row xl:flex-col gap-[20px] w-full xl:w-[280px] xl:shrink-0">
                <div className="relative w-full h-[140px] xl:h-[227px] overflow-hidden">
                  <Image
                    src="/assets/contact/campus_map_small1-31cab0.png"
                    alt="Ksquare Energy Campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-end p-[16px]">
                    <div className="bg-white p-[16px] flex flex-col gap-[8px] w-full">
                      <h4 className="font-archivo text-[16px] leading-[22px] text-primary">Get Direction</h4>
                      <Link href="#" className="flex items-center gap-[10px] font-archivo text-[13px] leading-[18px] text-primary group w-fit">
                        <span>View On Larger Map</span>
                        <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-[140px] xl:h-[227px] overflow-hidden">
                  <Image
                    src="/assets/contact/campus_map_small2-407ecc.png"
                    alt="Ksquare Energy Campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-end p-[16px]">
                    <div className="bg-white p-[16px] flex flex-col gap-[8px] w-full">
                      <h4 className="font-archivo text-[16px] leading-[22px] text-primary">Get Direction</h4>
                      <Link href="#" className="flex items-center gap-[10px] font-archivo text-[13px] leading-[18px] text-primary group w-fit">
                        <span>View On Larger Map</span>
                        <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />
    </main>
  );
}
