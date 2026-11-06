import React from "react";
import type { Metadata } from "next";
import PageHero from "./PageHero";
import { SectionRenderer } from "./sections";
import type { PageData } from "./types";

export function pageMetadata(page: PageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

/** Renders a content-driven page: breadcrumb hero, then each configured section in order. */
export default function PageTemplate({ page }: { page: PageData }) {
  return (
    <main data-kit className="w-full bg-white font-archivo lg:pb-[var(--end-gap,0px)]" style={{ ...(page.sectionPadding ? { "--wrap-py": `${page.sectionPadding}px` } : {}), ...(page.faqBottom !== undefined ? { "--faq-pb": `${page.faqBottom}px` } : {}), ...(page.endGap ? { "--end-gap": `${page.endGap}px` } : {}) } as React.CSSProperties}>
      <PageHero hero={page.hero} />
      {page.sections.map((section, i) => (
        <SectionRenderer key={`${section.type}-${i}`} section={section} />
      ))}
    </main>
  );
}
