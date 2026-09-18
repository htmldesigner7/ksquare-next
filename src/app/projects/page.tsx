import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import ProjectsFilter from "./ProjectsFilter";

export const metadata: Metadata = {
  title: "Our Projects | Ksquare Energy",
  description:
    "From individual rooftops to large industrial installations, Ksquare Energy has delivered 9,000+ solar projects across residential, commercial, industrial and government applications.",
};

const glanceItems = [
  { label: "Residential Rooftop", img: "/assets/projects/glance_1.png", className: "md:w-[62%]" },
  { label: "Commercial Installation", img: "/assets/projects/glance_2.png", className: "md:flex-1" },
  { label: "Industrial Plant", img: "/assets/projects/glance_3.png", className: "md:w-[37.5%]" },
  { label: "Government Project", img: "/assets/projects/glance_4.png", className: "md:flex-1" },
];

const tableRows = [
  {
    profile: "Surat Textile Processing Mill Installation",
    capacity: "480 kW",
    generation: "7.1 Lakh Units",
    type: "Heavy Industrial",
    location: "Surat, GJ",
  },
  {
    profile: "Apex Multispeciality Corporate Hospital",
    capacity: "80 kW",
    generation: "1.2 Lakh Units",
    type: "Commercial Roof",
    location: "Vadodara, GJ",
  },
  {
    profile: "PM Surya Ghar Model Schools Batch 1",
    capacity: "15 kW",
    generation: "22,500 Units",
    type: "Govt. Institution",
    location: "Mehsana, GJ",
  },
  {
    profile: "Dholera SIR Activation Zone Carport",
    capacity: "110 kW",
    generation: "1.6 Lakh Units",
    type: "Commercial Ground-mount",
    location: "Dholera, GJ",
  },
];

const processSteps = [
  { title: "Site Visit", desc: "An engineer checks your roof, shadow free area, and sanctioned load." },
  { title: "Paperwork", desc: "DISCOM and subsidy applications are handled where applicable." },
  { title: "Commissioning", desc: "Net-metering and grid synchronization are coordinated with the DISCOM." },
  { title: "Design", desc: "The system is sized according to your actual electricity consumption." },
  { title: "Installation", desc: "Our own crews install the system using our manufactured components." },
  { title: "After-Sales", desc: "Monitoring and maintenance support continue after commissioning." },
];

const faqs = [
  {
    question: "How many projects has Ksquare completed so far?",
    answer:
      "Ksquare Energy has successfully installed and commissioned over 9,000+ residential, commercial, industrial, and institutional solar systems over the last 8+ years across India.",
  },
  {
    question: "What segments of solar energy do you serve?",
    answer:
      "We serve residential, commercial, industrial and government/institutional segments, delivering rooftop, ground-mount and hybrid solar systems tailored to each sector's requirements.",
  },
  {
    question: "Do you manufacture your own distribution and combiner boxes?",
    answer:
      "Yes. Ksquare Energy manufactures its own DCDBs, ACDBs, combiner boxes and BOS accessories in-house, giving us full control over quality, customization and lead times.",
  },
  {
    question: "Do you execute solar installations outside Gujarat?",
    answer:
      "Yes. While our manufacturing base and the majority of our projects are in Gujarat, we also execute residential, commercial and government solar projects across other states through our partner and distributor network.",
  },
  {
    question: "How can I request a similar high-capacity industrial system?",
    answer:
      "Share your site details, sanctioned load and consumption pattern through our enquiry form or speak with our sales team directly, and our engineers will prepare a customised proposal for your facility.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="w-full bg-white font-archivo">
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[90px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] w-full lg:max-w-[900px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px]">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  Home
                </Link>
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Our Projects
                </span>
              </div>

              {/* Title */}
              <h1 className="font-jost text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal">
                Solar Projects <span className="font-recia italic font-semibold">Built to Perform.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                From individual rooftops to large industrial installations, Ksquare Energy has delivered 9,000+ solar projects across residential, commercial, industrial and government applications.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
                <Button variant="outline-primary" href="#enquiry-form" showDot>
                  Enquire Now
                </Button>
                <Button variant="outline-primary" href="#project-data" showDot>
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Banner Image */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="w-full relative aspect-[1800/541] overflow-hidden rounded-[24px]">
            <Image
              src="/assets/projects/hero_banner.png"
              alt="Ksquare Energy solar project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 2. Our Work at a Glance */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[24px]">
            <div className="flex flex-col items-center text-center gap-[8px] max-w-[800px] mx-auto">
              <h2 className="font-jost text-[32px] lg:text-[48px] leading-[1.15] text-primary font-normal">
                Our Work <span className="font-recia italic font-medium">at a Glance</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] w-full">
              {glanceItems.slice(0, 2).map((item) => (
                <div key={item.label} className={`relative w-full ${item.className} aspect-[16/9] md:aspect-auto md:h-[360px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] w-full">
              {glanceItems.slice(2).map((item) => (
                <div key={item.label} className={`relative w-full ${item.className} aspect-[4/3] md:aspect-auto md:h-[280px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 3. Filterable Category Sections */}
      <ProjectsFilter />

      <SectionSpacer size={120} />

      {/* 4. Beyond the Photograph: Project Data Table */}
      <section id="project-data" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[8px]">
              <span className="font-archivo text-[15px] lg:text-[17px] font-semibold uppercase tracking-wide text-primary">
                Beyond the Photograph
              </span>
              <h2 className="font-archivo text-[32px] lg:text-[44px] leading-[1.2] text-[#333333]">
                Every Project Has a Story <span className="font-recia italic font-semibold text-primary">Behind the Numbers</span>
              </h2>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="bg-[#F0F5FE]">
                    {["Project Profile", "System Capacity", "Annual Generation", "Project Type", "Project Location"].map((h) => (
                      <th key={h} className="text-left font-archivo text-[15px] font-semibold text-primary p-[20px]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.profile} className="border-b border-[#DDDDEC]">
                      <td className="font-archivo text-[16px] text-[#333333] p-[24px]">{row.profile}</td>
                      <td className="font-archivo text-[16px] text-[#666666] p-[24px]">{row.capacity}</td>
                      <td className="font-archivo text-[16px] text-[#666666] p-[24px]">{row.generation}</td>
                      <td className="font-archivo text-[16px] text-[#666666] p-[24px]">{row.type}</td>
                      <td className="font-archivo text-[16px] text-[#666666] p-[24px]">{row.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 5. How a Ksquare project actually runs */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[60px]">
            <h2 className="font-recia text-[32px] lg:text-[60px] leading-[1.15] text-primary font-normal text-center">
              How a Ksquare <span className="italic font-semibold">Project Actually Runs</span>
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

      <SectionSpacer size={150} />

      {/* 6. FAQ Accordion */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[48px]">
            <h2 className="font-archivo text-[32px] lg:text-[48px] leading-[1.2] text-[#333333] font-normal text-center">
              Frequently Asked <span className="font-recia italic font-semibold text-primary">Questions</span>
            </h2>

            <div className="w-full flex flex-col">
              {faqs.map((item, index) => (
                <details key={item.question} className="group bg-[#F0F5FE] border-b border-[#DDDDDD] px-[24px] py-[20px]" open={index === 0} name="project-faq">
                  <summary className="flex items-start justify-between gap-[24px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-archivo text-[18px] lg:text-[20px] leading-[28px] text-[#333333]">
                      {item.question}
                    </span>
                    <span className="font-archivo text-[24px] leading-[28px] text-primary shrink-0 group-open:hidden">+</span>
                    <span className="font-archivo text-[24px] leading-[28px] text-primary shrink-0 hidden group-open:block">-</span>
                  </summary>
                  <p className="font-archivo text-[16px] leading-[26px] text-[#666666] mt-[16px]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 7. Send an Enquiry Form */}
      <section id="enquiry-form" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="w-full bg-white border border-[#DDDDDD] p-[24px] md:p-[48px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className="font-dm text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] text-primary font-medium">
                Send an <span className="font-recia italic">Enquiry</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] text-justify">
                Please fill out the form below, and our relationship manager will get back to you within 2 hours.
              </p>
            </div>

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
                  <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">State</label>
                  <div className="relative">
                    <select className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                      <option>Select State</option>
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

              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="flex flex-col gap-[8px] w-full">
                  <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Project Category*</label>
                  <div className="relative">
                    <select className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                      <option>Residential Solar</option>
                      <option>Commercial Solar</option>
                      <option>Industrial Solar Plant</option>
                      <option>Government / Institutional</option>
                    </select>
                    <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                  <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Approximate Capacity (kW)</label>
                  <input type="text" placeholder="e.g. 150" className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Subject</label>
                <input type="text" placeholder="e.g. Project Name." className="w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">Project Requirements / Message</label>
                <textarea placeholder="Tell us about your project requirements..." className="w-full border border-[#DDDDDD] bg-white rounded-[8px] min-h-[120px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y"></textarea>
              </div>

              <div className="pt-[8px]">
                <Button variant="outline-primary" showDot className="w-fit">
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />
    </main>
  );
}
