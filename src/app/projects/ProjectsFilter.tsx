"use client";

import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  tag: string;
  capacity: string;
  location: string;
  description?: string;
  program?: string;
  img: string;
};

type CategorySection = {
  key: string;
  tabLabel: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  bg: string;
  projects: Project[];
};

const sections: CategorySection[] = [
  {
    key: "Residential",
    tabLabel: "Residential",
    eyebrow: "01 / RESIDENTIAL",
    heading: "Residential Solar",
    headingAccent: "Projects",
    bg: "bg-white",
    projects: [
      {
        title: "Bunglow Solar Array",
        tag: "Independent Home",
        capacity: "5 kW",
        location: "Sardar Patel Ring Road, Ahmedabad",
        description: "Offset 85% of monthly residential electricity bill.",
        img: "/assets/projects/residential_1.png",
      },
      {
        title: "Premium Villa Rooftop",
        tag: "Independent Home",
        capacity: "10 kW",
        location: "Shela, Ahmedabad",
        description: "Smooth hybrid transition with premium net-metering.",
        img: "/assets/projects/residential_2.png",
      },
      {
        title: "Residential Penthouse System",
        tag: "Independent Home",
        capacity: "8 kW",
        location: "Science City, Ahmedabad",
        description: "Installed with high-efficiency crystalline PV.",
        img: "/assets/projects/residential_3.png",
      },
    ],
  },
  {
    key: "Commercial",
    tabLabel: "Commercial",
    eyebrow: "02 / COMMERCIAL",
    heading: "Commercial Solar",
    headingAccent: "Solutions",
    bg: "bg-[#F0F5FE]",
    projects: [
      {
        title: "IT Park Solar Roof Array",
        tag: "Office",
        capacity: "150 kW",
        location: "SG Highway, Ahmedabad",
        img: "/assets/projects/commercial_1.png",
      },
      {
        title: "Apex Multispeciality Hospital",
        tag: "Hospitality",
        capacity: "80 kW",
        location: "Vadodara, Gujarat",
        img: "/assets/projects/commercial_2.png",
      },
      {
        title: "Logistics Park Grid-Tie",
        tag: "Warehouse",
        capacity: "250 kW",
        location: "Sanand Industrial Zone",
        img: "/assets/projects/commercial_3.png",
      },
    ],
  },
  {
    key: "Industrial",
    tabLabel: "Industrial",
    eyebrow: "03 / INDUSTRIAL",
    heading: "Heavy Industrial",
    headingAccent: "Solar Plants",
    bg: "bg-white",
    projects: [
      {
        title: "Surat Textile Processing Mega-Project",
        tag: "Industrial",
        capacity: "480 kW",
        location: "Sachin Industrial Estate, Surat",
        img: "/assets/projects/industrial_1.png",
      },
      {
        title: "Engineering Factory Solar Shed",
        tag: "Industrial",
        capacity: "120 kW",
        location: "Kalol, Gujarat",
        img: "/assets/projects/industrial_2.png",
      },
      {
        title: "Ceramic Kiln Heat-Shield Rooftop",
        tag: "Industrial",
        capacity: "90 kW",
        location: "Morbi, Gujarat",
        img: "/assets/projects/industrial_3.png",
      },
    ],
  },
  {
    key: "Government",
    tabLabel: "Government",
    eyebrow: "04 / GOVERNMENT",
    heading: "State & National",
    headingAccent: "Tender Deployments",
    bg: "bg-[#F0F5FE]",
    projects: [
      {
        title: "Model High School Rooftop Program",
        tag: "Government",
        capacity: "150 kW",
        location: "Mehsana, Gujarat",
        program: "PM Surya Ghar Yojana",
        img: "/assets/projects/government_1.png",
      },
      {
        title: "Municipal Water Treatment Station",
        tag: "Municipal",
        capacity: "80 kW",
        location: "Ahmedabad City limits",
        program: "Gujarat State Water Tender",
        img: "/assets/projects/government_2.png",
      },
    ],
  },
];

const tabs = ["All Projects", "Residential", "Commercial", "Industrial", "Government"];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="relative w-full h-[240px] lg:h-[320px] overflow-hidden">
        <Image src={project.img} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[8px] pt-[20px]">
        <div className="flex items-center justify-between gap-[12px]">
          <span className="font-archivo text-[13px] uppercase tracking-wide text-primary font-semibold">
            {project.tag}
          </span>
          <span className="font-archivo text-[15px] font-semibold text-primary">{project.capacity}</span>
        </div>
        <h3 className="font-archivo text-[20px] lg:text-[24px] font-semibold leading-[1.3] text-[#333333]">
          {project.title}
        </h3>
        <p className="font-archivo text-[14px] text-[#666666]">{project.location}</p>
        {project.description && (
          <p className="font-archivo text-[13px] italic text-[#666666]">{project.description}</p>
        )}
        {project.program && (
          <div className="flex items-center gap-[8px] mt-[4px]">
            <span className="font-archivo text-[15px] font-medium text-[#666666]">Prog:</span>
            <span className="font-archivo text-[13px] font-semibold text-primary bg-[#EDF3FF] px-[10px] py-[4px]">
              {project.program}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsFilter() {
  const [active, setActive] = React.useState("All Projects");

  const visibleSections = active === "All Projects" ? sections : sections.filter((s) => s.key === active);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Filter Tabs */}
      <div className="flex items-center gap-[10px] lg:gap-[18px] flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`flex items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] cursor-pointer transition-colors rounded-t-[12px] ${
              active === tab ? "bg-[#EFF0F6] border-b-2 border-primary" : "border-b-2 border-transparent"
            }`}
          >
            <span
              className={`font-archivo text-[16px] lg:text-[24px] leading-[26px] ${
                active === tab ? "text-primary font-semibold" : "text-[#666666]"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Category Sections */}
      <div className="w-full flex flex-col">
        {visibleSections.map((section) => (
          <section key={section.key} className={`w-full ${section.bg} py-[60px] lg:py-[100px]`}>
            <div className="mx-auto w-full max-w-[1600px] px-4 lg:px-8 xl:px-0 flex flex-col gap-[48px]">
              <div className="flex flex-col gap-[8px]">
                <span className="font-archivo text-[15px] lg:text-[17px] font-semibold uppercase tracking-wide text-primary">
                  {section.eyebrow}
                </span>
                <h2 className="font-archivo text-[32px] lg:text-[44px] leading-[1.2] text-[#333333]">
                  {section.heading} <span className="font-recia italic font-semibold text-primary">{section.headingAccent}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px]">
                {section.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export { sections as projectSections };
export type { Project, CategorySection };
