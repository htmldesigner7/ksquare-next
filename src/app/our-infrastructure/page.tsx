import Image from "next/image";
import ProcessTimelineArt from "@/components/page-kit/ProcessTimelineArt";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import AnimatedCounter from "@/components/common/AnimatedCounter";

export const metadata: Metadata = {
  title: "Our Infrastructure | Ksquare Energy",
  description:
    "Explore the infrastructure, technology and manufacturing capabilities behind Ksquare Energy's solar component solutions.",
};

const excellenceCards = [
  {
    title: "Manufacturing Facility",
    desc: "Structured production spaces designed for efficient and consistent solar component manufacturing.",
    icon: "/assets/our-infrastructure/icon_manufacturing.svg",
  },
  {
    title: "Advanced Machinery",
    desc: "Modern production equipment supporting precision, repeatability and efficient manufacturing processes.",
    icon: "/assets/our-infrastructure/icon_machinery.svg",
  },
  {
    title: "Quality & Testing",
    desc: "Dedicated inspection and testing capabilities help verify product quality and performance at critical stages.",
    icon: "/assets/our-infrastructure/icon_quality.svg",
  },
  {
    title: "Assembly & Integration",
    desc: "Organized assembly facilities enable accurate component integration and dependable product workmanship.",
    icon: "/assets/our-infrastructure/icon_assembly.svg",
  },
  {
    title: "Technical Development",
    desc: "Technical expertise and development capabilities support continuous product and process improvement.",
    icon: "/assets/our-infrastructure/icon_technical.svg",
  },
];

const precisionCallouts = [
  {
    title: "Precision Manufacturing",
    desc: "Structured manufacturing processes help maintain consistency, accuracy and repeatability across production.",
    left: 160, top: 497.9,
  },
  {
    title: "In-House Testing",
    desc: "Inspection and testing capabilities help verify product quality and performance at critical stages.",
    left: 1261, top: 314,
  },
  {
    title: "Advanced Equipment",
    desc: "Purpose-built machinery and measurement systems support efficient production and precise component assembly.",
    left: 489, top: 696.9,
  },
  {
    title: "Technical Development",
    desc: "Technical expertise supports product improvement, process refinement and evolving project requirements.",
    left: 1311.28, top: 666.9,
  },
];

const processSteps = [
  { title: "Material Inspection", desc: "Materials are checked for quality and specifications." },
  { title: "Assembly", desc: "Components are assembled with accuracy and consistency." },
  { title: "Final Inspection", desc: "Finished products undergo final quality checks." },
  { title: "Manufacturing", desc: "Components are manufactured with controlled precision." },
  { title: "Testing", desc: "Products are tested for quality and performance." },
  { title: "Packaging & Dispatch", desc: "Approved products are packed and prepared for dispatch." },
];

const gallery = [
  { label: "Assembly Bay 1", img: "/assets/our-infrastructure/gallery_assembly_bay.png", className: "md:w-[62%]" },
  { label: "CNC Precision", img: "/assets/our-infrastructure/gallery_cnc.png", className: "md:flex-1" },
  { label: "HV Testing", img: "/assets/our-infrastructure/gallery_hv_testing.png", className: "md:flex-1" },
  { label: "R&D Centre", img: "/assets/our-infrastructure/gallery_rd_centre.png", className: "md:w-[37.5%]" },
  { label: "Finished Goods", img: "/assets/our-infrastructure/gallery_finished_goods.png", className: "md:flex-1" },
];

export default function OurInfrastructurePage() {
  return (
    <main className="w-full bg-white font-archivo overflow-x-clip">
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[90px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] w-full lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px] flex-wrap">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  Home
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Link href="/about-us" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  About Us
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Our Infrastructure
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] lg:h-[179px] text-primary font-normal">
                Built for Precision,<br />
                <span className="italic font-semibold">Ready for Scale.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Explore the infrastructure, technology and manufacturing capabilities behind Ksquare Energy&apos;s solar component solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
                <Button variant="outline-primary" href="#gallery" showDot>
                  Explore Our Facility
                </Button>
                <Button variant="outline-primary" href="/contact" showDot>
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero image group (Figma #106:7619, 1804 x 731): ground plate 500px tall, with the cut-out building rising above it */}
        <div className="w-full max-w-[1804px] mx-auto px-4 lg:px-8 g1868:px-0 mt-[40px] xl:mt-[50px]">
          <div className="relative w-full aspect-[1804/731] overflow-hidden">
            {/* photo plate + building cut-out merged into one Figma image */}
            <Image src="/assets/our-infrastructure/hero_full.webp" alt="Ksquare Energy manufacturing facility" fill sizes="1804px" className="object-fill" priority />

          </div>
        </div>
      </section>

      <SectionSpacer size={100} />

      {/* 2. Inside Ksquare's Manufacturing Facility */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[clamp(40px,5.2vw,100px)]">
            {/* Left: Text & Stats */}
            <div className="flex flex-col gap-[48px] w-full xl:flex-1 xl:min-w-0 xl:max-w-[750px]">
              <div className="flex flex-col gap-[14px] xl:h-[359px]">
                <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[70px] text-[#333333] font-normal">
                  Inside Ksquare&apos;s<br />
                  <span className="font-recia italic font-medium">Manufacturing Facility</span>
                </h2>
                <div className="flex flex-col gap-[14px] mt-[10px]">
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    Ksquare Energy&apos;s manufacturing infrastructure is designed to support the development and production of reliable solar component solutions. From structured production areas and precision equipment to inspection and testing capabilities, every part of the facility is focused on consistency, performance and quality.
                  </p>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    Our integrated approach brings manufacturing, testing and technical expertise closer together, enabling better control across the product lifecycle and supporting the evolving requirements of solar projects.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-[32px] w-full">
                <div className="w-full h-px bg-[#C6CCED]" />
                <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[24px] w-full">
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <AnimatedCounter end={9000} suffix="+" className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary" />
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Sq. Ft. Facility</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <AnimatedCounter end={8} suffix="+" className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary" />
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Product Categories</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1 min-w-[104px] sm:flex-none sm:w-[200px]">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[26px] text-primary">In-House</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Testing Capabilities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full xl:flex-1 xl:min-w-0 xl:max-w-[750px] aspect-[750/507]">
              <Image
                src="/assets/our-infrastructure/facility_interior.png"
                alt="Ksquare Energy manufacturing facility interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 3. Built Around Manufacturing Excellence */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[48px]">
            <div className="flex flex-col items-center text-center gap-[8px] w-full">
              <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal w-full lg:leading-[57px]">
                Built Around <span className="font-recia italic font-medium">Manufacturing Excellence</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] w-full">
                Purpose-built infrastructure supporting quality, precision and reliable solar manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
              {excellenceCards.map((card) => (
                <div key={card.title} className="card-lift flex flex-col gap-[20px] bg-[#EFF0F6] p-[32px] lg:p-[50px_40px]">
                  <div className="flex items-center gap-[24px] lg:gap-[30px]">
                    <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] bg-white rounded-[10px] flex items-center justify-center shrink-0 p-[10px]">
                      <Image src={card.icon} width={60} height={60} alt={card.title} className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] object-contain" />
                    </div>
                    <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                    {card.desc}
                  </p>
                </div>
              ))}
              {/* Highlighted quote box completes the 6-tile grid */}
              <div className="flex items-center justify-center bg-white p-[32px] lg:p-[40px]">
                <p className="font-recia italic font-medium text-[20px] lg:text-[28px] leading-[1.4] text-[#333333] text-center">
                  From raw materials to finished products, Ksquare brings manufacturing, testing and technical expertise together to deliver reliable solar solutions with greater control and consistency.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 4. Capabilities Built Around Precision (dark section) */}
      <section className="relative w-full bg-primary overflow-hidden">
        {/* Desktop: pixel-exact scattered layout per Figma (1920x920 canvas) */}
        <div className="canvas-zoom hidden canvas:block w-[1920px] mx-auto relative h-[920px]">
          {/* Background bleed illustration */}
          <div className="absolute left-[-21.8px] top-[314.18px] w-[1944px] h-[659.48px]">
            <Image
              src="/assets/our-infrastructure/precision_bg-4b6413.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <div className="absolute left-[310px] top-[56px] w-[1300px] flex flex-col items-center gap-[24px] text-center">
            <h2 className="font-archivo text-[60px] leading-[66px] text-white font-normal">
              Capabilities Built <span className="font-recia italic font-medium">Around Precision.</span>
            </h2>
            <p className="font-archivo text-[17px] leading-[26px] text-white">
              Our manufacturing infrastructure combines production expertise, precision equipment and quality-focused processes to support dependable solar component solutions.
            </p>
          </div>

          {/* Scattered callout cards */}
          {precisionCallouts.map((item, i) => (
            <div
              key={item.title}
              className="absolute w-[401px] bg-[#EDF3FF] p-[24px] flex flex-col gap-[10px]"
              style={{ left: `${item.left}px`, top: `${item.top}px` }}
            >
              <h3 className="font-archivo font-medium text-[18px] leading-[24px] tracking-[0.02em] text-[#2E338F]">
                {i + 1}. {item.title}
              </h3>
              <p className="font-archivo text-[18px] leading-[24px] tracking-[0.02em] text-[#2E338F]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/tablet fallback (Figma provides no separate mobile frame) */}
        <div className="canvas:hidden py-[80px] px-6">
          <Container maxWidth="1600">
            <div className="flex flex-col items-center gap-[60px]">
              <div className="flex flex-col items-center text-center gap-[14px] max-w-[900px]">
                <h2 className="font-archivo text-[32px] leading-[1.15] text-white font-normal">
                  Capabilities Built <span className="font-recia italic font-medium">Around Precision.</span>
                </h2>
                <p className="font-archivo text-[17px] leading-[26px] text-white">
                  Our manufacturing infrastructure combines production expertise, precision equipment and quality-focused processes to support dependable solar component solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
                {precisionCallouts.map((item, i) => (
                  <div key={item.title} className="bg-[#EDF3FF] p-[24px] flex flex-col gap-[8px]">
                    <h3 className="font-archivo font-medium text-[18px] leading-[24px] text-[#2E338F]">
                      {i + 1}. {item.title}
                    </h3>
                    <p className="font-archivo text-[18px] leading-[24px] text-[#2E338F]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      <SectionSpacer size={100} />

      {/* 5. From Production to Quality Assurance */}
      <section className="w-full">
        {/* Desktop: pixel-exact zigzag timeline per Figma */}
        <div className="canvas-zoom zoom-1600 hidden w1100:block relative w-[1600px] mx-auto h-[681px]">
          {/* Heading */}
          <div className="absolute left-0 right-0 top-[36px] flex justify-center">
            <h2 className="font-archivo text-[60px] leading-[70px] text-primary font-normal text-center">
              From Production <span className="font-recia italic font-medium capitalize">to Quality Assurance.</span>
            </h2>
          </div>

          {/* Row 1 labels (above the connector graphic) */}
          <div className="absolute left-[3.39px] top-[169.9px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[0].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[0].desc}</p>
          </div>
          <div className="absolute left-[521.49px] top-[169.9px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
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
          <div className="absolute left-[1309.15px] top-[590.77px] w-[290.85px] flex flex-col items-center text-center gap-[12px]">
            <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{processSteps[5].title}</h3>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{processSteps[5].desc}</p>
          </div>
        </div>

        {/* Mobile/tablet fallback (Figma provides no separate mobile frame) */}
        <div className="w1100:hidden">
          <Container maxWidth="1600">
            <div className="flex flex-col items-center gap-[60px]">
              <h2 className="font-archivo text-[32px] leading-[1.15] text-primary font-normal text-center">
                From Production <span className="font-recia italic font-medium capitalize">to Quality Assurance.</span>
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

      <SectionSpacer size={100} />

      {/* 6. Facility Gallery */}
      <section id="gallery" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[24px]">
            {/* Figma: heading band is 146px tall (title top at 36px), then the two rows follow after a 24px gap */}
            <h2 className="m-0 text-center font-archivo font-normal text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[70px] text-primary lg:pt-[36px] lg:h-[146px]">
              From Production <span className="font-recia italic font-medium capitalize">to Quality Assurance.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-[24px] w-full">
              {gallery.slice(0, 2).map((item) => (
                <div key={item.label} className={`img-hover-zoom relative w-full ${item.className} aspect-[16/9] md:aspect-auto md:h-[400px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                  <span className="absolute top-0 right-0 min-w-[141px] flex items-center justify-center bg-primary text-white font-archivo text-[12px] leading-[1.5] uppercase px-[34px] py-[10px] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-[24px] w-full">
              {gallery.slice(2).map((item) => (
                <div key={item.label} className={`img-hover-zoom relative w-full ${item.className} aspect-[4/3] md:aspect-auto md:h-[320px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                  <span className="absolute top-0 right-0 min-w-[141px] flex items-center justify-center bg-primary text-white font-archivo text-[12px] leading-[1.5] uppercase px-[34px] py-[10px] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />
    </main>
  );
}
