"use client";

import React from "react";
import Image from "next/image";

import type { ProjectCategory, ProjectItem, ProjectPicture } from "@/lib/projects";

// Section headings of the known categories (the accent word is shown in italics); other categories get "<name> Projects".
const HEADINGS: Record<string, [string, string]> = {
  Residential: ["Residential Solar", "Projects"],
  Commercial: ["Commercial Solar", "Solutions"],
  Industrial: ["Heavy Industrial", "Solar Plants"],
  Government: ["State & National Tender", "Deployments"],
};

const gallerySlots = ["xl:w-[1000px]", "xl:flex-1", "xl:flex-1", "xl:w-[600px]", "xl:flex-1"];

type Dir = "next" | "prev";

function useCarousel(count: number) {
  const length = Math.max(count, 1); // nothing to rotate yet: avoid dividing by zero
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
    <div className={`img-hover-zoom relative w-full h-[260px] md:h-[320px] xl:h-full overflow-hidden ${className}`}>
      <Image src={img} alt={label} fill unoptimized className="object-cover" />
      <div className="absolute right-0 top-0 w-[141px] px-[34px] py-[10px] bg-primary flex justify-center">
        <span className="font-archivo text-[12px] uppercase text-white">{label}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, chipBg }: { project: ProjectItem; chipBg: string }) {
  return (
    <div className="flex flex-col gap-[20px] w-full flex-1">
      <div className="img-hover-zoom relative w-full h-[240px] lg:h-[320px] overflow-hidden shrink-0">
        {/* Project images are served by the API (another origin), so they are not optimised by next/image. */}
        <Image src={project.project_img} alt={project.title} fill unoptimized className="object-cover" />
      </div>
      <div className="flex flex-col gap-[12px] min-w-0">
        {project.tag && (
          <div className="flex items-center justify-between gap-[8px]">
            <span className={`${chipBg} rounded-[4px] px-[12px] lg:px-[24px] py-[6px] font-archivo text-[17px] leading-[1.2] text-primary`}>{project.tag}</span>
            {project.power_capacity && <span className="font-archivo text-[15px] leading-[1.2] font-semibold text-primary whitespace-nowrap shrink-0">{project.power_capacity}</span>}
          </div>
        )}
        <div className="flex flex-col gap-[8px]">
          <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[1.2] font-semibold text-[#333333]">{project.title}</h3>
          {project.location && <p className="m-0 font-archivo text-[14px] leading-[1.2] text-[#666666]">{project.location}</p>}
        </div>
        {project.short_note && <p className="m-0 font-archivo text-[13px] leading-[1.2] italic text-[#666666]">{project.short_note}</p>}
      </div>
    </div>
  );
}

/** A category's projects. Sections alternate between a white and a light-blue background, as in the design. */
function SectionBlock({ category, index }: { category: ProjectCategory; index: number }) {
  const c = useCarousel(category.items.length);
  const projects = c.rotate(category.items);
  const tinted = index % 2 === 1;
  const [heading, accent] = HEADINGS[category.name] ?? [category.name, "Projects"];
  return (
    <section className={`w-full ${tinted ? "bg-[#F0F5FE] py-[60px]" : "bg-white py-0"}`}>
      <div className="mx-auto w-full max-w-[1920px] px-4 lg:px-8 xl:px-[160px] flex flex-col gap-[28px] lg:gap-[48px]">
        <div className="flex items-end justify-between gap-[24px]">
          <div className="flex flex-col gap-[12px] min-w-0">
            <span className="font-archivo text-[17px] font-semibold uppercase text-primary">{String(index + 1).padStart(2, "0")} / {category.name}</span>
            <h2 className="m-0 font-archivo font-normal text-[32px] lg:text-[44px] leading-[1.2] xl:leading-[52px] text-[#333333]">
              {heading} <span className="font-recia italic font-semibold">{accent}</span>
            </h2>
          </div>
          <ArrowButtons onPrev={() => c.go("prev")} onNext={() => c.go("next")} />
        </div>

        <div key={c.tick} className={`flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-[32px] items-stretch ${c.animClass}`}>
          {projects.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} chipBg={tinted ? "bg-white" : "bg-[#EFF0F6]"} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsFilter({ categories, gallery }: { categories: ProjectCategory[]; gallery: ProjectPicture[] }) {
  const tabs = ["All Projects", ...categories.map((c) => c.name)];
  const [active, setActive] = React.useState("All Projects");
  const g = useCarousel(gallery.length);
  const items = g.rotate(gallery);

  // Keep each section's number and colour when a single category is shown.
  const visibleSections = categories.map((category, index) => ({ category, index })).filter(({ category }) => active === "All Projects" || category.name === active);

  return (
    <div className="w-full flex flex-col items-center gap-[32px] lg:gap-[60px] xl:gap-[100px]">
      {/* Filter Tabs */}
      <div role="tablist" className="flex w-full items-end gap-[10px] lg:gap-[18px] justify-start lg:justify-center px-4 flex-nowrap overflow-x-auto lg:flex-wrap lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={`flex shrink-0 whitespace-nowrap items-center px-[16px] lg:px-[28px] py-[12px] lg:py-[16px] cursor-pointer rounded-t-[12px] border-b transition-colors ${
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
      {gallery.length > 0 && (
      <div className="w-full flex flex-col items-center gap-[24px] lg:gap-[40px]">
        <div className="flex flex-col items-center gap-[14px] text-center px-4">
          <h2 className="m-0 font-archivo font-normal text-[36px] lg:text-[60px] leading-[1.2] xl:leading-[42px] text-primary">
            How Much Solar Does <span className="font-recia italic font-medium">Your Home Need?</span>
          </h2>
          <p className="m-0 max-w-[791.6px] font-archivo text-[17px] leading-[26px] text-[#666666]">
            Your monthly electricity bill is a useful starting point, but final system sizing depends on consumption, sanctioned load, roof orientation, shadow-free area, and other technical factors.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[24px] w-full px-4 lg:px-8 g1664:px-0">
          <div key={g.tick} className={`flex flex-col gap-[24px] w-full max-w-[1600px] xl:h-[744px] ${g.animClass}`}>
            <div className="flex flex-col xl:flex-row gap-[24px] xl:h-[400px]">
              {items.slice(0, 2).map((it, i) => (
                <GalleryTile key={it.img} label={it.name} img={it.img} className={gallerySlots[i]} />
              ))}
            </div>
            <div className="flex flex-col xl:flex-row gap-[24px] xl:h-[320px]">
              {items.slice(2).map((it, i) => (
                <GalleryTile key={it.img} label={it.name} img={it.img} className={gallerySlots[i + 2]} />
              ))}
            </div>
          </div>
          <ArrowButtons onPrev={() => g.go("prev")} onNext={() => g.go("next")} />
        </div>
      </div>
      )}

      {/* Category Sections */}
      <div className="w-full flex flex-col gap-[32px] lg:gap-[60px] xl:gap-[100px]">
        {visibleSections.map(({ category, index }) => (
          <SectionBlock key={category.name} category={category} index={index} />
        ))}
        {categories.length === 0 && <p className="text-center font-archivo text-[17px] text-[#666666]">Projects will be shown here soon.</p>}
      </div>
    </div>
  );
}

