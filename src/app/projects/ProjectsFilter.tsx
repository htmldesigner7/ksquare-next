"use client";

import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  location: string;
  img: string;
  tag?: string;
  capacity?: string;
  description?: string;
  program?: string;
  roundedImage?: boolean;
};

type CategorySection = {
  key: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  bg: string;
  padding: string;
  chipBg: string;
  projects: Project[];
};

const P = "/assets/projects";
const F = "/assets/projects/figma";

const sections: CategorySection[] = [
  {
    key: "Residential",
    eyebrow: "01 / RESIDENTIAL",
    heading: "Residential Solar",
    headingAccent: "Projects",
    bg: "bg-white",
    padding: "py-0",
    chipBg: "bg-[#EFF0F6]",
    projects: [
      { title: "Bunglow Solar Array", tag: "Independent Home", capacity: "5 kW", location: "Sardar Patel Ring Road, Ahmedabad", description: "Offset 85% of monthly residential electricity bill.", img: `${P}/residential_1.png` },
      { title: "Premium Villa Rooftop", tag: "Independent Home", capacity: "10 kW", location: "Shela, Ahmedabad", description: "Smooth hybrid transition with premium net-metering.", img: `${P}/residential_2.png` },
      { title: "Residential Penthouse System", tag: "Independent Home", capacity: "8 kW", location: "Science City, Ahmedabad", description: "Installed with high-efficiency crystalline PV.", img: `${P}/residential_3.png`, roundedImage: true },
    ],
  },
  {
    key: "Commercial",
    eyebrow: "02 / COMMERCIAL",
    heading: "Commercial Solar",
    headingAccent: "Solutions",
    bg: "bg-[#F0F5FE]",
    padding: "py-[60px]",
    chipBg: "bg-white",
    projects: [
      { title: "IT Park Solar Roof Array", tag: "OFFICE", capacity: "150 kW", location: "SG Highway, Ahmedabad", img: `${P}/commercial_1.png` },
      { title: "Apex Multispeciality Hospital", tag: "HOSPITALITY", capacity: "80 kW", location: "Vadodara, Gujarat", img: `${P}/commercial_2.png` },
      { title: "Logistics Park Grid-Tie", tag: "WAREHOUSE", capacity: "250 kW", location: "Sanand Industrial Zone", img: `${P}/commercial_3.png` },
    ],
  },
  {
    key: "Industrial",
    eyebrow: "03 / INDUSTRIAL",
    heading: "Heavy Industrial",
    headingAccent: "Solar Plants",
    bg: "bg-white",
    padding: "py-0",
    chipBg: "bg-white",
    projects: [
      { title: "Surat Textile Processing Mega-Project", location: "Sardar Patel Ring Road, Ahmedabad", img: `${P}/industrial_1.png` },
      { title: "Engineering Factory Solar Shed", location: "Kalol, Gujarat", img: `${P}/industrial_2.png` },
      { title: "Ceramic Kiln Heat-Shield Rooftop", location: "Morbi, Gujarat", img: `${P}/industrial_3.png` },
    ],
  },
  {
    key: "Government",
    eyebrow: "04 / GOVERNMENT",
    heading: "State & National Tender",
    headingAccent: "Deployments",
    bg: "bg-[#F0F5FE]",
    padding: "py-[60px]",
    chipBg: "bg-white",
    projects: [
      { title: "Model High School Rooftop Program", tag: "GOVERNMENT", capacity: "150 kW", location: "Mehsana, Gujarat", program: "PM Surya Ghar Yojana", img: `${P}/government_1.png` },
      { title: "Municipal Water Treatment Station", tag: "MUNICIPAL", capacity: "80 kW", location: "Ahmedabad City limits", program: "Gujarat State Water Tender", img: `${P}/government_2.png` },
    ],
  },
];

const tabs = ["All Projects", "Residential", "Commercial", "Industrial", "Government"];

const galleryItems = [
  { label: "Lorem ipsum", img: `${F}/gallery_1.png` },
  { label: "Lorem ipsum", img: `${F}/gallery_2.png` },
  { label: "Lorem", img: `${F}/gallery_3-548297.png` },
  { label: "Lorem", img: `${F}/gallery_4.png` },
  { label: "Lorem ipsum", img: `${F}/gallery_5.png` },
];
const gallerySlots = ["xl:w-[1000px]", "xl:flex-1", "xl:flex-1", "xl:w-[600px]", "xl:flex-1"];

type Dir = "next" | "prev";

function useCarousel(length: number) {
  const [state, setState] = React.useState({ offset: 0, dir: "next" as Dir, tick: 0 });
  const go = (dir: Dir) =>
    setState((s) => ({
      offset: (s.offset + (dir === "next" ? 1 : length - 1)) % length,
      dir,
      tick: s.tick + 1,
    }));
  const rotate = <T,>(arr: T[]): T[] => arr.map((_, i) => arr[(i + state.offset) % arr.length]);
  return { ...state, go, rotate, animClass: state.tick === 0 ? "" : state.dir === "next" ? "slide-next" : "slide-prev" };
}

function ArrowButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-[12px] shrink-0">
      {[false, true].map((next) => (
        <button
          key={String(next)}
          type="button"
          onClick={next ? onNext : onPrev}
          aria-label={next ? "Next" : "Previous"}
          className="p-[6px] border border-[#DDDDDD] flex items-center justify-center cursor-pointer hover:border-primary hover:bg-[#EFF0F6] transition-colors"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={next ? "" : "rotate-180"}>
            <path d="M10 6L17 13L10 20" stroke="#2B398B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function GalleryTile({ label, img, className }: { label: string; img: string; className: string }) {
  return (
    <div className={`relative w-full h-[260px] md:h-[320px] xl:h-full ${className}`}>
      <Image src={img} alt={label} fill className="object-cover" sizes="(min-width: 1280px) 1000px, 100vw" />
      <div className="absolute right-0 top-0 w-[141px] px-[34px] py-[10px] bg-primary flex justify-center">
        <span className="font-archivo text-[12px] uppercase text-white">{label}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, chipBg }: { project: Project; chipBg: string }) {
  return (
    <div className="flex flex-col gap-[20px] w-full flex-1">
      <div className={`relative w-full h-[240px] lg:h-[320px] overflow-hidden shrink-0 ${project.roundedImage ? "rounded-[12px]" : ""}`}>
        <Image src={project.img} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[12px]">
        {project.tag && (
          <div className="flex items-center justify-between">
            <span className={`${chipBg} rounded-[4px] px-[24px] py-[6px] font-archivo text-[17px] text-primary`}>{project.tag}</span>
            {project.capacity && <span className="font-archivo text-[15px] font-semibold text-primary">{project.capacity}</span>}
          </div>
        )}
        <div className="flex flex-col gap-[8px]">
          <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] font-semibold text-[#333333]">{project.title}</h3>
          <p className="m-0 font-archivo text-[14px] text-[#666666]">{project.location}</p>
        </div>
        {project.description && (
          <p className="m-0 font-archivo text-[13px] italic text-[#666666]">{project.description}</p>
        )}
        {project.program && (
          <div className="flex items-center gap-[6px]">
            <span className="font-archivo text-[17px] font-medium text-[#666666]">Prog:</span>
            <span className="font-archivo text-[17px] font-semibold text-primary">{project.program}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: CategorySection }) {
  const c = useCarousel(section.projects.length);
  const projects = c.rotate(section.projects);
  return (
    <section className={`w-full ${section.bg} ${section.padding}`}>
      <div className="mx-auto w-full max-w-[1920px] px-4 lg:px-8 xl:px-[160px] flex flex-col gap-[48px]">
        <div className="flex items-end justify-between gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <span className="font-archivo text-[17px] font-semibold uppercase text-primary">{section.eyebrow}</span>
            <h2 className="m-0 font-archivo font-normal text-[32px] lg:text-[44px] leading-[1.2] xl:leading-[52px] text-[#333333]">
              {section.heading} <span className="font-recia italic font-semibold">{section.headingAccent}</span>
            </h2>
          </div>
          <ArrowButtons onPrev={() => c.go("prev")} onNext={() => c.go("next")} />
        </div>

        <div key={c.tick} className={`flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-[32px] items-stretch ${c.animClass}`}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} chipBg={section.chipBg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsFilter() {
  const [active, setActive] = React.useState("All Projects");
  const g = useCarousel(galleryItems.length);
  const items = g.rotate(galleryItems);

  const visibleSections = active === "All Projects" ? sections : sections.filter((s) => s.key === active);

  return (
    <div className="w-full flex flex-col items-center gap-[60px] xl:gap-[100px]">
      {/* Filter Tabs */}
      <div role="tablist" className="flex items-end gap-[10px] lg:gap-[18px] flex-wrap justify-center px-4">
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={`flex items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] cursor-pointer rounded-t-[12px] border-b transition-colors ${
                isActive ? "border-primary" : "border-transparent hover:border-[#C6CCED]"
              }`}
            >
              <span
                className={`font-archivo text-[18px] lg:text-[24px] leading-[26px] ${
                  isActive ? "text-primary font-semibold" : "text-[#666666]"
                }`}
              >
                {tab}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured gallery */}
      <div className="w-full flex flex-col items-center gap-[40px]">
        <div className="flex flex-col items-center gap-[14px] text-center px-4">
          <h2 className="m-0 font-jost font-normal text-[36px] lg:text-[60px] leading-[1.2] xl:leading-[42px] text-primary">
            How Much Solar Does <span className="font-recia italic font-medium">Your Home Need?</span>
          </h2>
          <p className="m-0 max-w-[791.6px] font-archivo text-[17px] leading-[26px] text-[#666666]">
            Your monthly electricity bill is a useful starting point, but final system sizing depends on consumption, sanctioned load, roof orientation, shadow-free area, and other technical factors.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[24px] w-full px-4 xl:px-0">
          <div key={g.tick} className={`flex flex-col gap-[24px] w-full max-w-[1600px] xl:h-[744px] ${g.animClass}`}>
            <div className="flex flex-col xl:flex-row gap-[24px] xl:h-[400px]">
              {items.slice(0, 2).map((it, i) => (
                <GalleryTile key={it.img} {...it} className={gallerySlots[i]} />
              ))}
            </div>
            <div className="flex flex-col xl:flex-row gap-[24px] xl:h-[320px]">
              {items.slice(2).map((it, i) => (
                <GalleryTile key={it.img} {...it} className={gallerySlots[i + 2]} />
              ))}
            </div>
          </div>
          <ArrowButtons onPrev={() => g.go("prev")} onNext={() => g.go("next")} />
        </div>
      </div>

      {/* Category Sections */}
      <div className="w-full flex flex-col gap-[60px] xl:gap-[100px]">
        {visibleSections.map((section) => (
          <SectionBlock key={section.key} section={section} />
        ))}
      </div>
    </div>
  );
}

export { sections as projectSections };
export type { Project, CategorySection };
