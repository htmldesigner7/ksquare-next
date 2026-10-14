import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ProjectsFilter from "./ProjectsFilter";
import FaqList from "./FaqList";

export const metadata: Metadata = {
  title: "Our Projects | Ksquare Energy",
  description:
    "From individual rooftops to large industrial installations, Ksquare Energy has delivered 9,000+ solar projects across residential, commercial, industrial and government applications.",
};

const tableRows = [
  { profile: "Surat Textile processing mill installation", capacity: "480 kW", generation: "7.1 Lakh Units", type: "Heavy Industrial", location: "Surat, GJ" },
  { profile: "Apex Multispeciality Corporate Hospital", capacity: "80 kW", generation: "1.2 Lakh Units", type: "Commercial Roof", location: "Vadodara, GJ" },
  { profile: "PM Surya Ghar Model Schools Batch 1", capacity: "15 kW", generation: "22,500 Units", type: "Govt. Institution", location: "Mehsana, GJ" },
  { profile: "Dholera SIR Activation Zone Carport", capacity: "110 kW", generation: "1.6 Lakh Units", type: "Commercial Ground-mount", location: "Dholera, GJ" },
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

const inputClass =
  "w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors";
const labelClass = "font-archivo text-[17px] leading-[27px] text-[#333333]";

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-[16px] px-[16px] py-[12px] border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-archivo text-[17px] leading-[26px]"
    >
      <span>{children}</span>
      <span className="w-[8px] h-[8px] rounded-full bg-primary group-hover:bg-white transition-colors" />
    </Link>
  );
}

function SelectArrow() {
  return (
    <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 10l5 5 5-5H7z" fill="#2B398B" />
      </svg>
    </div>
  );
}

function Step({ index, className }: { index: number; className: string }) {
  return (
    <div className={`absolute w-[290.85px] flex flex-col items-center text-center gap-[12px] ${className}`}>
      <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[index].title}</h3>
      <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[index].desc}</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="w-full bg-white font-archivo overflow-x-clip">
      {/* Hero */}
      <section className="w-full pt-[90px] xl:pt-[130px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-0 pt-[40px] xl:pt-0 flex flex-col xl:flex-row xl:justify-between gap-[32px]">
          <div className="flex flex-col gap-[14px] xl:w-[900px]">
            <div className="flex items-center gap-[10px] font-archivo text-[20px] leading-[28px] text-[#333333]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <svg width="5" height="10" viewBox="0 0 5 10" fill="none" aria-hidden="true">
                <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-primary leading-[26px]">Our Projects</span>
            </div>
            <h1 className="m-0 font-recia font-normal text-primary text-[44px] leading-[52px] lg:text-[68px] lg:leading-[78px]">
              Solar Projects
              <br />
              <span className="italic font-semibold">Built to Perform.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-[32px] xl:w-[816px]">
            <p className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[30px] lg:leading-[36px] text-[#333333]">
              From individual rooftops to large industrial installations, Ksquare Energy has delivered 9,000+ solar projects across residential, commercial, industrial and government applications.
            </p>
            <div className="flex flex-wrap items-center gap-[16px]">
              <OutlineButton href="#enquiry-form">Enquire Now</OutlineButton>
              <OutlineButton href="#project-data">View Case Studies</OutlineButton>
            </div>
          </div>
        </div>

        {/* Hero banner: photo clipped to 1800x500, cut-out of the two people overlaps upwards */}
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-0 mt-[40px] xl:mt-[205px]">
          <div className="relative w-full h-[280px] md:h-[400px] xl:h-[500px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/assets/projects/figma/hero_a.png"
                alt="Ksquare Energy solar project"
                fill
                sizes="1800px"
                className="object-cover xl:hidden"
                priority
              />
              <div className="hidden xl:block absolute left-[-45.21px] top-[-255px] w-[1845.21px] h-[1029.89px]">
                <Image src="/assets/projects/figma/hero_a.png" alt="" fill sizes="1846px" className="object-cover" priority />
              </div>
            </div>
            <div className="hidden xl:block absolute left-[-45.21px] top-[-255px] w-[1845.21px] h-[733.75px] pointer-events-none">
              <Image src="/assets/projects/figma/hero_b-12819a.png" alt="" fill sizes="1846px" className="object-fill" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[60px] xl:mt-[81px] flex flex-col gap-[60px] xl:gap-[100px] pb-[100px]">
        <ProjectsFilter />

        {/* Beyond the Photograph: data table */}
        <section id="project-data" className="w-full scroll-mt-[110px]">
          <div className="mx-auto w-full max-w-[1920px] px-4 lg:px-8 xl:px-[160px] flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[12px]">
              <span className="font-archivo text-[17px] font-semibold uppercase text-primary">Beyond the Photograph</span>
              <h2 className="m-0 font-archivo font-normal text-[32px] lg:text-[44px] leading-[1.2] xl:leading-[52px] text-[#333333]">
                Every Project Has a Story <span className="font-recia italic font-semibold">Behind the Numbers</span>
              </h2>
            </div>

            <div className="w-full overflow-x-auto border border-[#DDDDDD]">
              <div className="min-w-[1100px] flex flex-col">
                <div className="flex items-start gap-[24px] p-[20px] bg-[#F0F5FE]">
                  <span className="flex-1 font-archivo text-[24px] font-medium text-primary">Project Profile</span>
                  {["System Capacity", "Annual Generation", "Project Type", "Project Location"].map((h) => (
                    <span key={h} className="w-[240px] shrink-0 font-archivo text-[24px] font-medium text-primary">{h}</span>
                  ))}
                </div>
                {tableRows.map((row) => (
                  <div key={row.profile} className="flex items-center gap-[24px] p-[24px] border-b border-[#DDDDEC] last:border-b-0">
                    <span className="flex-1 font-archivo text-[17px] font-semibold text-[#333333]">{row.profile}</span>
                    <span className="w-[240px] shrink-0 font-archivo text-[17px] text-[#333333]">{row.capacity}</span>
                    <span className="w-[240px] shrink-0 font-archivo text-[17px] text-[#666666]">{row.generation}</span>
                    <span className="w-[240px] shrink-0 font-archivo text-[17px] text-[#666666]">{row.type}</span>
                    <span className="w-[240px] shrink-0 font-archivo text-[17px] font-semibold text-primary">{row.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How a Ksquare project actually runs */}
        <section className="w-full">
          {/* Desktop: pixel-exact zigzag timeline per Figma (same pattern as /grievance) */}
          <div className="hidden xl:block relative w-[1600px] max-w-full mx-auto h-[681px]">
            <div className="absolute left-0 right-0 top-[36px] flex justify-center">
              <h2 className="m-0 font-recia text-[60px] leading-[70px] text-primary font-normal text-center capitalize">
                How a Ksquare <span className="italic font-medium">project actually runs</span>
              </h2>
            </div>

            <Step index={0} className="left-[3.39px] top-[169.9px]" />
            <Step index={1} className="left-[521.49px] top-[169.9px]" />
            <Step index={2} className="left-[1053.13px] top-[169.9px]" />

            <div className="absolute left-0 top-[274.95px] w-[1600px] h-[302.82px]">
              <Image src="/assets/grievance/process_connectors.png" alt="" fill className="object-contain" aria-hidden="true" />
              <div className="absolute w-[128px] h-[128px]" style={{ left: 71.6, top: 76.55 }}>
                <Image src="/assets/grievance/process_icon_1.svg" alt="" fill />
              </div>
              <div className="absolute w-[128px] h-[128px]" style={{ left: 337.6, top: 105.55 }}>
                <Image src="/assets/grievance/process_icon_2.svg" alt="" fill />
              </div>
              <div className="absolute w-[128px] h-[128px]" style={{ left: 602.6, top: 76.55 }}>
                <Image src="/assets/grievance/process_icon_3.svg" alt="" fill />
              </div>
              <div className="absolute w-[128px] h-[128px]" style={{ left: 1401.6, top: 101.55 }}>
                <Image src="/assets/grievance/process_icon_6.svg" alt="" fill />
              </div>
            </div>

            <Step index={3} className="left-[256px] top-[590.77px]" />
            <Step index={4} className="left-[789.82px] top-[590.77px]" />
            <Step index={5} className="left-[1309.16px] top-[590.77px]" />
          </div>

          {/* Mobile/tablet fallback */}
          <div className="xl:hidden mx-auto w-full max-w-[1600px] px-4 lg:px-8 flex flex-col items-center gap-[48px]">
            <h2 className="m-0 font-recia text-[36px] leading-[1.15] text-primary font-normal text-center capitalize">
              How a Ksquare <span className="italic font-medium">project actually runs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[48px] w-full">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center gap-[16px]">
                  <div className="w-[64px] h-[64px] rounded-full bg-[#EFF0F6] flex items-center justify-center">
                    <span className="font-archivo text-[24px] font-medium text-primary">{i + 1}</span>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="m-0 font-archivo text-[22px] leading-[26px] text-[#333333] font-medium">{step.title}</h3>
                    <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[290px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full">
          <div className="mx-auto w-full max-w-[1920px] px-4 lg:px-8 xl:px-[160px] flex flex-col items-center gap-[64px]">
            <h2 className="m-0 font-archivo font-normal text-[36px] lg:text-[60px] leading-[1.25] text-primary text-center">
              Frequently Asked <span className="font-recia italic font-medium">Questions</span>
            </h2>
            <FaqList items={faqs} />
          </div>
        </section>

        {/* Send an Enquiry */}
        <section id="enquiry-form" className="w-full scroll-mt-[110px]">
          <div className="mx-auto w-full max-w-[1600px] px-4 lg:px-8 xl:px-0">
            <div className="w-full bg-white border border-[#DDDDDD] p-[20px] md:p-[32px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="m-0 font-dm font-medium text-[40px] md:text-[60px] leading-[1.17] text-primary">
                  Send an <span className="font-recia italic">Enquiry</span>
                </h2>
                <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666] text-justify">
                  Please fill out the form below, and our relationship manager will get back to you within 2 hours.
                </p>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Full Name</label>
                    <input type="text" placeholder="Enter your full name" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Email Address</label>
                    <input type="email" placeholder="name@domain.com" className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>States</label>
                    <div className="relative">
                      <select defaultValue="" className={`${inputClass} appearance-none cursor-pointer text-[#666666]`}>
                        <option value="" disabled>Select budget range.</option>
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>City</label>
                    <input type="text" placeholder="Enter City" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Pincode</label>
                    <input type="text" placeholder="Enter Pincode" className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Project Category *</label>
                    <div className="relative">
                      <select defaultValue="Industrial Solar Plant" className={`${inputClass} appearance-none cursor-pointer text-[#666666]`}>
                        <option>Residential Solar</option>
                        <option>Commercial Solar</option>
                        <option>Industrial Solar Plant</option>
                        <option>Government / Institutional</option>
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className={labelClass}>Approximate Capacity (kW)</label>
                    <input type="text" placeholder="e.g. 150" className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className={labelClass}>Subject</label>
                  <input type="text" placeholder="e.g. Project Name." className={inputClass} />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className={labelClass}>Project Requirements / Message</label>
                  <textarea placeholder="Tell us about your investment goals..." className={`${inputClass} h-[120px] resize-y`} />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-[16px] px-[16px] py-[12px] border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-archivo text-[17px] leading-[26px] cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <span className="w-[8px] h-[8px] rounded-full bg-primary group-hover:bg-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
