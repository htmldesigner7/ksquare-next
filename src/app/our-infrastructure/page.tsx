import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";

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
  },
  {
    title: "In-House Testing",
    desc: "Inspection and testing capabilities help verify product quality and performance at critical stages.",
  },
  {
    title: "Advanced Equipment",
    desc: "Purpose-built machinery and measurement systems support efficient production and precise component assembly.",
  },
  {
    title: "Technical Development",
    desc: "Technical expertise supports product improvement, process refinement and evolving project requirements.",
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
    <main className="w-full bg-white font-archivo">
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
              <h1 className="font-recia text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal">
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
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
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

        {/* Hero Banner Image */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="w-full relative aspect-[1804/500] rounded-[24px] overflow-hidden">
            <Image
              src="/assets/our-infrastructure/hero_banner.png"
              alt="Ksquare Energy manufacturing facility"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Inside Ksquare's Manufacturing Facility */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[100px]">
            {/* Left: Text & Stats */}
            <div className="flex flex-col gap-[48px] w-full xl:max-w-[750px] shrink-0">
              <div className="flex flex-col gap-[14px]">
                <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-[#333333] font-normal">
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
                <div className="flex items-center gap-[24px] w-full">
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">9000+</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Sq. Ft. Facility</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">8+</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Product Categories</span>
                  </div>
                  <div className="flex flex-col gap-[16px] flex-1">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-[1] text-primary">In-House</span>
                    <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">Testing Capabilities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full xl:w-[750px] aspect-[750/507] shrink-0">
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

      <SectionSpacer size={150} />

      {/* 3. Built Around Manufacturing Excellence */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[48px]">
            <div className="flex flex-col items-center text-center gap-[8px] max-w-[900px] mx-auto">
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal">
                Built Around <span className="font-recia italic font-medium">Manufacturing Excellence</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                Purpose-built infrastructure supporting quality, precision and reliable solar manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] lg:gap-[24px]">
              {excellenceCards.map((card) => (
                <div key={card.title} className="flex flex-col gap-[24px] bg-[#EFF0F6] p-[32px] lg:p-[50px_40px]">
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
              <div className="flex items-center justify-center bg-white border border-[#E5E5E5] p-[32px] lg:p-[40px]">
                <p className="font-recia italic font-medium text-[20px] lg:text-[28px] leading-[1.4] text-[#333333] text-center">
                  From raw materials to finished products, Ksquare brings manufacturing, testing and technical expertise together to deliver reliable solar solutions with greater control and consistency.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 4. Capabilities Built Around Precision (dark section) */}
      <section className="relative w-full overflow-hidden bg-primary py-[80px] lg:py-[120px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/our-infrastructure/precision_bg.png"
            alt=""
            fill
            className="object-cover opacity-40"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <Container maxWidth="1600" className="relative z-10">
          <div className="flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center text-center gap-[14px] max-w-[1300px]">
              <h2 className="font-jost text-[32px] lg:text-[60px] leading-[1.15] text-white font-normal">
                Capabilities Built <span className="font-recia italic font-medium">Around Precision.</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-white max-w-[900px]">
                Our manufacturing infrastructure combines production expertise, precision equipment and quality-focused processes to support dependable solar component solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
              {precisionCallouts.map((item) => (
                <div key={item.title} className="bg-[#EDF3FF] p-[24px] flex flex-col gap-[8px]">
                  <h3 className="font-archivo font-medium text-[18px] leading-[24px] text-[#2E338F]">
                    {item.title}
                  </h3>
                  <p className="font-archivo text-[18px] leading-[24px] text-[#2E338F]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 5. From Production to Quality Assurance */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[60px]">
            <h2 className="font-jost text-[32px] lg:text-[60px] leading-[1.15] text-primary font-normal text-center">
              From Production <span className="font-recia italic font-medium">to Quality Assurance.</span>
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

      {/* 6. Facility Gallery */}
      <section id="gallery" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[24px]">
            <div className="flex flex-col md:flex-row gap-[24px] w-full">
              {gallery.slice(0, 2).map((item) => (
                <div key={item.label} className={`relative w-full ${item.className} aspect-[16/9] md:aspect-auto md:h-[400px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                  <span className="absolute top-[16px] right-[16px] md:right-auto md:left-1/2 md:-translate-x-1/2 bg-primary text-white font-archivo text-[12px] uppercase tracking-wide px-[16px] py-[8px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-[24px] w-full">
              {gallery.slice(2).map((item) => (
                <div key={item.label} className={`relative w-full ${item.className} aspect-[4/3] md:aspect-auto md:h-[320px] overflow-hidden`}>
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                  <span className="absolute top-[16px] left-1/2 -translate-x-1/2 bg-primary text-white font-archivo text-[12px] uppercase tracking-wide px-[16px] py-[8px] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 7. Get bulk pricing on Solar BOS Components (CTA) */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/assets/our-infrastructure/cta_bg.png"
            alt=""
            fill
            className="object-cover opacity-30"
            aria-hidden="true"
          />
        </div>
        <div className="hidden xl:flex absolute right-[80px] top-0 bottom-0 items-center opacity-90 pointer-events-none">
          <Image
            src="/assets/our-infrastructure/cta_graphic.svg"
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
              <h2 className="font-jost text-[32px] lg:text-[60px] leading-[1.15] text-white font-normal">
                Get bulk pricing on <span className="font-recia italic font-medium">Solar BOS Components</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#EDF3FF] max-w-[700px]">
                Whether you need certified solar components, OEM manufacturing, or complete rooftop solar solutions, our team is ready to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[24px]">
              <Button variant="outline" href="/contact" showDot>
                Request a Quote
              </Button>
              <Button variant="outline" href="/contact" showDot>
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
