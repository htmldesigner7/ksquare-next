import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import LifeSlider from "./LifeSlider";
import OpenPositions from "./OpenPositions";

export const metadata: Metadata = {
  title: "Careers | Ksquare Energy",
  description:
    "Build your career with Ksquare Energy. Explore open positions in engineering, manufacturing, quality, operations and sales as we shape the future of solar.",
};

const openPositions = [
  { title: "Solar Design Engineer", category: "Engineering" },
  { title: "Production Engineer", category: "Manufacturing" },
  { title: "Quality Engineer", category: "Manufacturing" },
  { title: "Sales & Business Development Executive", category: "Sales & Marketing" },
  { title: "Project Coordinator", category: "Operations" },
];

const tabs = ["All Positions", "Engineering", "Manufacturing", "Sales & Marketing", "Operations"];

const industries = [
  {
    title: "Engineering & R&D",
    desc: "Design, development and technical innovation.",
    icon: "/assets/career/icon_engineering.svg",
  },
  {
    title: "Manufacturing",
    desc: "Production, assembly and process operations.",
    icon: "/assets/career/icon_manufacturing.svg",
  },
  {
    title: "Quality & Testing",
    desc: "Inspection, testing and quality assurance.",
    icon: "/assets/career/icon_quality.svg",
  },
  {
    title: "Project & Operations",
    desc: "Planning, coordination and project execution.",
    icon: "/assets/career/icon_project_ops.svg",
  },
  {
    title: "Corporate Functions",
    desc: "Finance, HR, administration and business support.",
    icon: "/assets/career/icon_corporate.svg",
  },
  {
    title: "Sales & Business",
    desc: "Building relationships and growing new opportunities.",
    icon: "/assets/career/icon_sales.svg",
  },
];

export default function CareerPage() {
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
                  Career
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] lg:h-[179px] text-primary font-normal">
                Build Your Career<br />
                <span className="italic font-semibold">With the Future of Solar.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Join a growing team shaping reliable solar solutions through technology, manufacturing and innovation.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
                <Button variant="outline-primary" href="#open-positions" showDot>
                  View Open Positions
                </Button>
                <Button variant="outline-primary" href="#connect" showDot>
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero group (Figma #106:11044 + cut-out): the ground photo is a square 1804 x 500 plate; the team cut-out is NOT clipped, so heads rise above the plate */}
        <div className="w-full max-w-[1804px] mx-auto px-4 lg:px-8 g1868:px-0">
          <div className="relative w-full aspect-[1804/500] mt-[26%] sm:mt-[17%] lg:mt-[15.58%]">
            {/* photo plate + team cut-out merged into one Figma image (heads rise above the plate) */}
            <div className="absolute pointer-events-none" style={{ left: "-15.778%", top: "-145.114%", width: "122.870%", height: "247.430%" }}>
              <Image src="/assets/career/hero_full.webp" alt="Ksquare Energy team" fill sizes="2217px" className="object-fill" priority />
            </div>

          </div>
        </div>
      </section>

      <SectionSpacer size={100} />

      {/* 2. More Than a Job. A Place to Grow. */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[clamp(40px,5.2vw,100px)]">
            {/* Left: Text & Stats */}
            <div className="flex flex-col gap-[48px] w-full xl:flex-1 xl:min-w-0 xl:max-w-[750px]">
              <div className="flex flex-col gap-[14px] xl:h-[359px]">
                <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[70px] text-[#333333] font-normal">
                  More Than a Job.<br />
                  <span className="font-recia italic font-medium">A Place to Grow.</span>
                </h2>
                <div className="flex flex-col gap-[14px] mt-[10px]">
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    At Ksquare Energy, we believe that a strong team is the foundation of meaningful innovation. We bring together people with diverse skills, ideas and experiences to build reliable solar solutions and contribute to a cleaner energy future. Here, you get the opportunity to work on real challenges, learn from experienced professionals and make a meaningful contribution to the growing renewable energy industry.
                  </p>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
                    From engineering and manufacturing to sales, operations and support, every role plays an important part in our journey. We encourage collaboration, continuous learning and ownership, creating an environment where people can develop their expertise while growing with Ksquare Energy.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-[32px] w-full">
                <div className="w-full h-px bg-[#C6CCED]" />
                <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[24px] w-full">
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
                src="/assets/career/team_culture.png"
                alt="Ksquare Energy team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 3. Life at Ksquare */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[40px]">
            <div className="flex flex-col items-center text-center gap-[8px] max-w-[900px]">
              <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[57px] text-primary font-normal">
                Life at <span className="font-recia italic font-medium">Ksquare.</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                A collaborative workplace where ideas, expertise and people come together to build what&apos;s next.
              </p>
            </div>

            <LifeSlider />
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 4. Find Where You Belong */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-stretch gap-[48px]">
            <div className="flex flex-col items-center text-center gap-[8px] max-w-[900px] mx-auto">
              <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal lg:leading-[57px]">
                Find Where <span className="font-recia italic font-medium">You Belong.</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                Explore opportunities across the teams driving Ksquare&apos;s products, projects and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
              {industries.map((ind) => (
                <div key={ind.title} className="card-lift flex flex-col gap-[20px] bg-[#EFF0F6] p-[32px] lg:p-[50px_40px]">
                  <div className="flex items-center gap-[24px] lg:gap-[30px]">
                    <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] bg-white rounded-[10px] flex items-center justify-center shrink-0 p-[10px]">
                      <Image src={ind.icon} width={60} height={60} alt={ind.title} className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] object-contain" />
                    </div>
                    <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                      {ind.title}
                    </h3>
                  </div>
                  <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />

      {/* 5. Explore Career Opportunities */}
      <section id="open-positions" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[40px]">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-[14px] max-w-[1000px] lg:h-[110px]">
              <h2 className="font-archivo text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal">
                Explore Career <span className="font-recia italic font-medium">Opportunities</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-[#666666] max-w-[1000px]">
                Discover opportunities to grow your skills, build meaningful experience and shape the future of solar energy with Ksquare.
              </p>
            </div>

            <OpenPositions tabs={tabs} positions={openPositions} />
          </div>
        </Container>
      </section>

      <SectionSpacer size={100} />
    </main>
  );
}
