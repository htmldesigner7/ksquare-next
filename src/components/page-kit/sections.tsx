import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import StatValue from "@/components/common/StatValue";
import Reveal from "@/components/common/Reveal";
import RichTitle from "@/components/common/RichTitle";
import Faq from "@/components/common/Faq";
import Testimonials from "@/components/home/Testimonials";
import { Icon } from "./icons";
import { ILLUSTRATIONS } from "./illustrations";
import HexSteps from "./HexSteps";
import TrackerBar from "./TrackerBar";
import CircleSteps from "./CircleSteps";
import LocationTabs from "./LocationTabs";
import RegionList from "./RegionList";
import CertificateGallery from "./CertificateGallery";
import ArticleGrid from "./ArticleGrid";
import SolarCalculators from "./SolarCalculators";
import PaymentPanel from "./PaymentPanel";
import NumberedAccordion from "./NumberedAccordion";
import LeadForm from "./LeadForm";
import AwardTimeline from "./AwardTimeline";
import CtaBanner from "./CtaBanner";
import type { Section } from "./types";
import ContactLink from "@/components/common/ContactLink";

const H2 = "font-archivo text-[34px] sm:text-[44px] lg:text-[60px] leading-[1.15] text-primary font-normal m-0";
const LEAD = "m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]";

function Heading({ title, subtitle, align = "center", light = false, tight = false, wide = false, compact = false, ink = false, wideSub = false }: { title: string; subtitle?: string; align?: "center" | "left"; light?: boolean; tight?: boolean; wide?: boolean; compact?: boolean; ink?: boolean; wideSub?: boolean }) {
  return (
    <div className={`flex flex-col ${tight ? "gap-[10px]" : "gap-[16px]"} ${align === "center" ? "items-center text-center mx-auto" : "items-start text-left"} ${wide ? "max-w-[1600px]" : "max-w-[1300px]"}`}>
      <RichTitle text={title} className={`${H2} ${light ? "text-white!" : ""} ${tight ? "lg:leading-[42px]! lg:h-[42px]" : compact ? "lg:leading-[42px]! lg:h-[42px] lg:relative lg:-top-[14px]" : ""} ${compact && (align === "left" || ink) ? "text-[#333333]!" : ""}`} accentClassName={compact && (align === "left" || ink) ? "text-[#333333]" : undefined} breakBeforeAccent={align === "left" && !compact} />
      {subtitle && <p className={`${LEAD} ${tight ? "lg:text-[17px]! lg:leading-[26px]!" : compact ? `lg:text-[17px]! lg:leading-[26px]! ${align === "left" ? "lg:max-w-[1600px]!" : "lg:max-w-[1270px]!"}` : "lg:text-[18px]! lg:leading-[28px]!"} ${wideSub ? "lg:max-w-[1300px]" : "max-w-[1100px]"} ${light ? "text-white/85!" : ""}`}>{subtitle}</p>}
    </div>
  );
}

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true" className={`shrink-0 text-primary ${className}`}>
    <path d="M0 0L10 6L0 12L3.5 6L0 0Z" fill="currentColor" />
  </svg>
);

/** Two-tone navy illustration inside a white rounded tile (the Figma icon treatment). */
function IconTile({ name, badge, size = 90, bleed = false }: { name?: keyof typeof ILLUSTRATIONS; badge?: string; size?: number; bleed?: boolean }) {
  const src = badge ?? (name ? ILLUSTRATIONS[name] : undefined);
  if (!src) return null;
  // Certificate badges (Figma) are full-bleed 90px rounded tiles; line illustrations sit inside a white tile.
  if (badge && bleed) {
    return (
      <span className="relative block shrink-0 overflow-hidden rounded-[10px] transition-transform duration-300 group-hover:scale-105" style={{ width: size, height: size }}>
        <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }
  return (
    <span className="flex shrink-0 items-center justify-center rounded-[10px] bg-white p-[10px] transition-transform duration-300 group-hover:scale-105" style={{ width: size, height: size }}>
      <Image src={src} alt="" width={60} height={60} className="h-[66%] w-[66%] object-contain" />
    </span>
  );
}

function Wrap({ id, tone = "white", children, className = "", width = "1600" }: { id?: string; tone?: "white" | "soft"; children: React.ReactNode; className?: string; width?: "1600" | "1800" }) {
  return (
    <section id={id} className={`w-full scroll-mt-[110px] ${tone === "soft" ? "bg-[#F0F5FE] py-[60px] lg:py-[100px]" : "bg-white py-[40px] lg:py-[var(--wrap-py,80px)]"} ${className}`}>
      <Container maxWidth={width}>{children}</Container>
    </section>
  );
}

function SplitSection({ s }: { s: Extract<Section, { type: "split" }> }) {
  return (
    <Wrap id={s.id} tone={s.tone}>
      <div className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-[40px] ${s.imageSize ? "lg:gap-[52px]" : "lg:gap-[clamp(40px,5.2vw,100px)]"}`}>
        <Reveal className={`flex flex-col gap-[32px] ${s.natural ? "xl:gap-[30px]" : s.tight ? "xl:gap-[40px]" : "xl:gap-[48px]"} w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]`}>
          <div className={`flex flex-col gap-[14px] ${s.tight || s.natural ? "" : "xl:min-h-[413px]"} ${s.natural ? "xl:gap-[30px]" : ""}`}>
            <RichTitle text={s.title} className={`${H2} text-[#333333]! ${s.tight ? "xl:whitespace-nowrap" : ""}`} accentClassName="text-[#333333]" breakBeforeAccent={!s.natural} />
            <div className={`flex flex-col gap-[14px] ${s.natural ? "xl:mt-0 xl:gap-[30px]" : s.tight ? "xl:gap-[26px] xl:mt-[16px]" : "xl:gap-[26px] xl:mt-[26px]"} mt-[10px]`}>
              {s.paras.map((p) => (
                <p key={p.slice(0, 40)} className={LEAD}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {s.bullets && (
            <ul className={`m-0 p-0 list-none ${s.tight ? "grid grid-cols-2 gap-x-[24px] gap-y-[12px]" : s.bulletCols ? "grid grid-cols-1 sm:grid-flow-col sm:grid-cols-2 sm:[grid-template-rows:repeat(var(--br),auto)] gap-x-[24px] gap-y-[12px]" : s.natural ? "flex flex-col gap-[12px] xl:gap-[16px]" : "flex flex-col gap-[12px]"}`} style={s.bulletCols ? ({ "--br": Math.ceil(s.bullets.length / 2) } as React.CSSProperties) : undefined}>
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-[12px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  <Arrow className="mt-[7px]" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {s.stats && (
            <div className="flex flex-col gap-[28px] xl:gap-[32px]">
              <div className="h-px w-full bg-[#C6CCED]" />
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:flex gap-[24px]">
                {s.stats.map((st) => (
                  <div key={st.label} className="flex flex-col gap-[10px] xl:gap-[16px] xl:w-[var(--sw,200px)] xl:shrink-0" style={st.w ? ({ "--sw": `${st.w}px` } as React.CSSProperties) : undefined}>
                    <StatValue value={st.value} className="font-archivo text-[32px] lg:text-[40px] leading-none xl:leading-[26px] text-primary" />
                    <span className="font-archivo text-[15px] lg:text-[17px] leading-[22px] xl:leading-[26px] text-[#666666]">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {s.cta && (
            <div className="flex flex-wrap gap-[16px]">
              <Button variant="outline-primary" href={s.cta.href} showDot className="w-fit">
                {s.cta.label}
              </Button>
              {s.cta2 && (
                <Button variant="outline-primary" href={s.cta2.href} showDot className="w-fit">
                  {s.cta2.label}
                </Button>
              )}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[var(--img-w,750px)]" style={s.imageSize ? ({ "--img-w": `${s.imageSize.w}px` } as React.CSSProperties) : undefined}>
          <div className={`group relative w-full overflow-hidden ${s.imageSize ? "bg-white" : "bg-[#EFF0F6]"}`} style={{ aspectRatio: s.imageSize ? `${s.imageSize.w}/${s.imageSize.h}` : "750/500" }}>
            <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 750px, 100vw" className={`${s.fit === "contain" ? "object-contain p-[24px]" : "object-cover"} transition-transform duration-700 group-hover:scale-105`} />
          </div>
        </Reveal>
      </div>
    </Wrap>
  );
}

function CardsSection({ s }: { s: Extract<Section, { type: "cards" }> }) {
  const cols = s.cols ?? 3;
  const grid = cols === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3";
  const left = s.align === "left";
  // Figma icon cards (no photos, 4-up) are 430px wide on an 1800px row (space-between)
  const inline = (!!s.quote && !s.stacked) || !!s.inline || !!s.iconRow;
  const wide = cols === 4 && !s.items.some((i) => i.image) && (!inline || (!!s.inline && !s.quote));
  return (
    <Wrap id={s.id} tone={s.tone} width={wide ? "1800" : "1600"}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} align={left ? "left" : "center"} wide={left || s.compactHead} compact={s.compactHead} ink={s.compactHead && s.fit === "contain"} />
        </Reveal>
        <div className={wide ? "grid grid-cols-1 sm:grid-cols-2 xl:[grid-template-columns:repeat(4,minmax(0,430px))] xl:justify-between gap-[20px] xl:gap-[26.67px]" : `grid grid-cols-1 ${grid} gap-[20px] ${s.items.some((i) => i.tag) ? "lg:gap-[32px]" : s.items.some((i) => i.image) ? "lg:gap-x-[24px] lg:gap-y-[40px]" : "lg:gap-[24px]"}`}>
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.07} className="h-full">
              {s.contact ? (
                <article className="flex h-full items-start gap-[16px] border border-[#E1E5F7] bg-white p-[20px] lg:p-[28px]">
                  <span className="flex h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-primary">
                    {item.icon === "pin" ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14.5s4.5-3.9 4.5-7.6a4.5 4.5 0 0 0-9 0C3.5 10.600 8 14.500 8 14.500Z" fill="currentColor" /><circle cx="8" cy="6.800" r="1.600" fill="#EDF3FF" /></svg>
                    ) : item.icon === "file" ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1.500" y="3" width="13" height="10" rx="1.500" fill="currentColor" /><path d="m2.500 4.500 5.500 4 5.500-4" stroke="#EDF3FF" strokeWidth="1.200" /></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.500 1.500h2.300l1.200 3-1.500 1a8 8 0 0 0 4 4l1-1.500 3 1.200v2.300a1.500 1.500 0 0 1-1.600 1.500A11.500 11.500 0 0 1 2 3.100 1.500 1.500 0 0 1 3.500 1.500Z" fill="currentColor" /></svg>
                    )}
                  </span>
                  <div className="flex min-w-0 flex-col gap-[4px] font-archivo">
                    <h3 className="m-0 text-[14px] lg:text-[16px] leading-[24px] font-normal text-[#333333]">{item.title}</h3>
                    {item.meta && <span className="text-[14px] lg:text-[16px] leading-[24px] font-medium text-[#333333] break-words">{item.meta}</span>}
                    <p className="m-0 text-[13px] lg:text-[15px] leading-[24px] text-[#666666]">{item.desc}</p>
                  </div>
                </article>
              ) : item.image && item.tag && item.href ? (
                <article className="group flex h-full flex-col gap-[28px]">
                  <div className="relative aspect-[780/362] w-full overflow-hidden bg-[#EFF0F6]">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width:1280px) 780px, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute right-0 top-0 bg-primary px-[22px] py-[8px] font-archivo text-[13px] lg:text-[14px] leading-[20px] tracking-[0.04em] text-white">{item.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px]">
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="m-0 font-archivo text-[22px] lg:text-[24px] leading-[32px] font-normal text-[#333333]">{item.title}</h3>
                      <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                    </div>
                    <div className="mt-auto">
                      <Button variant="outline-primary" href={item.href} showDot className="w-fit">
                        {item.linkLabel ?? "Learn more"}
                      </Button>
                    </div>
                  </div>
                </article>
              ) : item.image && item.tag ? (
                <article className="group flex h-full flex-col gap-[20px]">
                  <div className="relative aspect-[512/320] w-full overflow-hidden rounded-[10px] bg-[#EFF0F6]">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width:1280px) 512px, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center justify-between gap-[12px]">
                      <span className="bg-[#EDF3FF] px-[12px] py-[6px] font-archivo text-[14px] leading-[18px] text-primary">{item.tag}</span>
                      {item.meta && <span className="font-archivo text-[14px] leading-[18px] font-medium text-primary">{item.meta}</span>}
                    </div>
                    <h3 className="m-0 font-archivo text-[22px] leading-[28px] font-semibold text-[#333333] group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                  </div>
                </article>
              ) : item.image ? (
                <article className="group flex h-full flex-col gap-[24px]">
                  <div className={`relative w-full overflow-hidden ${s.wideImage ? "aspect-[512/320] rounded-[12px]" : "aspect-[380/400]"} ${s.fit === "contain" ? "bg-[#EFF0F6]" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
                      className={`${s.fit === "contain" ? `object-contain p-[30px] ${s.compactHead ? "lg:p-[62px]" : ""}` : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[14px] lg:gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="m-0 font-archivo text-[22px] lg:text-[24px] leading-[28px] font-medium text-[#333333] group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                    </div>
                    {item.href && (
                      <div className="mt-auto">
                        <Button variant="outline-primary" href={item.href} showDot className="w-fit">
                          {item.linkLabel ?? "View Product"}
                        </Button>
                      </div>
                    )}
                  </div>
                </article>
              ) : (
                <article className={`card-lift group flex h-full flex-col bg-[#EFF0F6] p-[28px] ${s.inline && !s.quote ? "lg:px-[20px] lg:py-[35px]" : "lg:px-[40px] lg:py-[50px]"} ${inline ? "gap-[20px]" : "gap-[10px]"}`}>
                  <div className={inline ? "flex items-center gap-[24px] lg:gap-[30px]" : "flex flex-col items-start gap-[30px]"}>
                    <IconTile name={item.icon} badge={item.badge} bleed={!!s.inline && !s.quote} />
                    <h3 className={`m-0 font-archivo text-[20px] lg:text-[24px] leading-[32px] font-normal text-[#333333] ${s.iconRow ? "xl:whitespace-nowrap" : ""}`}>{item.title}</h3>
                  </div>
                  <p className={inline ? "m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]" : "m-0 font-archivo text-[16px] lg:text-[18px] leading-[28px] text-[#666666]"}>{item.desc}</p>
                  {item.href && s.linkButtons && (
                    <div className="mt-auto pt-[10px]">
                      <Button variant="outline-primary" href={item.href} showDot className="w-fit">
                        {item.linkLabel ?? "Learn More"}
                      </Button>
                    </div>
                  )}
                  {item.href && !s.linkButtons && (
                    <Link href={item.href} className="inline-flex items-center gap-[8px] mt-auto min-h-[44px] font-archivo text-[15px] text-primary hover:gap-[14px] transition-all">
                      {item.linkLabel ?? "Learn more"} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              )}
            </Reveal>
          ))}
          {s.quote && (
            <Reveal delay={0.35} className="h-full">
              <div className="flex h-full items-center justify-center bg-white p-[28px] lg:p-[40px]">
                <p className="m-0 text-center font-recia italic font-medium text-[22px] lg:text-[28px] leading-[1.4] text-[#333333]">{s.quote}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Wrap>
  );
}

function TableSection({ s }: { s: Extract<Section, { type: "table" }> }) {
  const plain = s.variant === "plain";
  // Figma plain table (rooftop-solar): 26px cell padding, 46px column gaps, columns 292.67 / 311 / 245 / 246 / rest of 1600px (as %, so it scales).
  const plainCols = s.head.length === 5 ? ["18.29%", "19.44%", "15.31%", "15.38%", undefined] : [];
  const cellPad = (ci: number, last: boolean) => (ci === 0 ? "pl-[26px]" : "pl-[46px]") + (last ? " pr-[26px]" : " pr-0");
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[40px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <Reveal>
          <div className={`w-full overflow-x-auto border ${plain ? "border-[#DDDDDD]" : "border-[#C6CCED]"}`}>
            <table className={`w-full ${plain ? "min-w-[900px] table-fixed" : "min-w-[720px]"} border-collapse font-archivo ${plain ? "text-left" : "text-center"}`}>
              {plain && plainCols.length > 0 && (
                <colgroup>
                  {plainCols.map((w, i) => (
                    <col key={i} style={w ? { width: w } : undefined} />
                  ))}
                </colgroup>
              )}
              <thead>
                <tr className={plain ? "bg-[#EFF0F6] text-primary border-b border-[#DDE1F0]" : "bg-primary text-white"}>
                  {s.head.map((h, ci) => (
                    <th key={h} className={plain ? `${cellPad(ci, ci === s.head.length - 1)} py-[26px] text-[16px] lg:text-[18px] leading-[24px] font-medium uppercase` : "px-[16px] py-[16px] lg:py-[20px] text-[15px] lg:text-[20px] font-bold lg:leading-[32px]"}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((row, ri) => (
                  <tr key={row[0]} className={`${plain ? "bg-white border-b border-[#DDE1F0] last:border-b-0" : `${ri % 2 ? "bg-[#F8F8F8]" : "bg-white"} border-t border-[#C6CCED]`} hover:bg-[#F0F5FE] transition-colors`}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={
                          plain
                            ? `${cellPad(ci, ci === row.length - 1)} py-[26px] text-[15px] lg:text-[17px] leading-[26px] align-middle ${ci === 0 ? "text-primary font-medium" : ci === row.length - 1 ? "text-[#666666]" : "text-[#333333]"}`
                            : `px-[16px] py-[18px] lg:py-[24px] text-[15px] lg:text-[18px] lg:leading-[28px] ${ci === 0 ? "text-[#333333] font-medium" : ci === 1 ? "text-primary font-semibold" : ci === 2 ? "text-[#10B981] font-semibold" : "text-[#666666]"}`
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        {(s.note || s.cta) && (
          <div className="flex flex-col items-center gap-[24px] lg:pt-[25px]">
            {s.note && <p className="m-0 font-archivo text-[14px] italic text-[#666666] text-center">{s.note}</p>}
            {s.cta && (
              <Button variant="outline-primary" href={s.cta.href} showDot>
                {s.cta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </Wrap>
  );
}

function StepsSection({ s }: { s: Extract<Section, { type: "steps" }> }) {
  const variant = s.variant ?? (s.items.length === 6 ? "circles" : "hex");
  return (
    <Wrap id={s.id} tone={s.tone} className="overflow-hidden">
      <div className="flex flex-col gap-[48px] lg:gap-[70px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        {variant === "circles" ? <CircleSteps steps={s.items} zigzag={s.zigzag} /> : <HexSteps steps={s.items} />}
      </div>
    </Wrap>
  );
}

function ComparePanel({ s }: { s: Extract<Section, { type: "compare" }> }) {
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[40px] lg:gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} wide compact />
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#E1E5F7]">
            {s.items.map((item, i) => (
              <article key={item.title} className={`flex flex-col gap-[28px] px-[24px] py-[32px] lg:px-[60px] lg:py-[48px] ${i === 0 ? "bg-white" : "bg-[#F8F9FD] md:border-l border-t md:border-t-0 border-[#E1E5F7]"}`}>
                <div className="flex flex-col gap-[14px]">
                  <h3 className={`m-0 font-archivo text-[26px] lg:text-[36px] leading-[1.2] font-normal ${i === 0 ? "text-primary" : "text-[#333333]"}`}>{item.title}</h3>
                  <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[26px] text-[#666666] lg:max-w-[640px]">{item.desc}</p>
                </div>
                <div className="flex flex-col gap-[24px]">
                  {(item.blocks ?? []).map((b) => (
                    <div key={b.label} className="flex flex-col gap-[6px]">
                      <span className={`font-archivo text-[14px] lg:text-[17px] leading-[26px] tracking-[0.02em] uppercase ${i === 0 ? "text-primary" : "text-[#333333]"}`}>{b.label}</span>
                      <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[26px] text-[#666666]">{b.text}</p>
                    </div>
                  ))}
                </div>
                {item.cta && (
                  <div className="mt-auto flex flex-col gap-[28px]">
                    <div className="h-px w-full bg-[#E1E5F7]" />
                    <Button variant="outline-primary" href={item.cta.href} showDot className="w-fit">
                      {item.cta.label}
                    </Button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </Wrap>
  );
}

function CompareSection({ s }: { s: Extract<Section, { type: "compare" }> }) {
  if (s.panel) return <ComparePanel s={s} />;
  // Figma: 520px cards on a 1600px row (20px gaps), 40/28 padding, 40px title, 17/26 copy with 20px gaps, hairline divider before the bottom padding.
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[48px] lg:gap-[84px] lg:py-[20px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} wide compact />
        </Reveal>
        <div className={`grid grid-cols-1 ${s.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-[20px]`}>
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <article className="card-lift flex h-full flex-col gap-[24px] lg:gap-[30px] bg-white border border-[#C6CCED] px-[20px] py-[32px] lg:px-[28px] lg:py-[40px]">
                <div className="flex flex-col gap-[20px]">
                  <h3 className="m-0 font-archivo text-[28px] lg:text-[40px] leading-[1.15] lg:leading-[26px] font-medium text-primary">{item.title}</h3>
                  <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                  <ul className="m-0 p-0 list-none flex flex-col gap-[20px]">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-[10px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                        <Arrow />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto h-px w-full bg-[#C6CCED] lg:w-[451px] lg:max-w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function BandSection({ s }: { s: Extract<Section, { type: "band" }> }) {
  // Figma keeps a 100px column gap under the bar: with a 50px page section padding the next section only supplies 50px, so top it up (0 at the default 80px).
  return (
    <section className="w-full bg-primary lg:h-[74px] lg:flex lg:items-center lg:mb-[calc((80px-var(--wrap-py,80px))*5/3)]">
      <Container maxWidth="1600">
        <ul className="m-0 p-0 list-none flex flex-wrap items-center justify-center lg:justify-between gap-x-[40px] gap-y-[12px] py-[22px] lg:py-0 lg:px-[100px]">
          {s.items.map((it) => (
            <li key={it} className="font-archivo text-[15px] lg:text-[17px] text-white flex items-center gap-[10px]">
              <span className="h-[6px] w-[6px] rounded-full bg-white" aria-hidden="true" />
              {it}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const CALLOUT_POS = [
  { left: 160, top: 56 },
  { left: 160, top: 479 },
  { left: 1310, top: 56 },
  { left: 1310, top: 393 },
];

function Callout({ n, title, desc, bg = "bg-[#EDF3FF]" }: { n: number; title: string; desc: string; bg?: string }) {
  // Figma: 24px padding, 401px text column, Archivo 18/24 with 0.02em tracking (title Medium, copy Regular).
  return (
    <div className={`card-lift h-full ${bg} px-[24px] py-[16px] lg:p-[24px] text-primary`}>
      <h3 className="m-0 font-archivo text-[17px] lg:text-[18px] leading-[24px] lg:tracking-[0.02em] font-medium">
        {n}. {title}
      </h3>
      <p className="m-0 mt-[8px] lg:mt-[10px] font-archivo text-[15px] lg:text-[18px] leading-[24px] lg:tracking-[0.02em] text-[#2E338F]">{desc}</p>
    </div>
  );
}

/** Blue band with the house illustration in the middle and four numbered cards around it (Figma "Why …" sections). */
function CalloutsSection({ s }: { s: Extract<Section, { type: "dark" }> }) {
  const items = s.items ?? [];
  return (
    <section id={s.id} className="relative w-full overflow-hidden bg-[#2B398B] scroll-mt-[110px] pt-[60px] pb-[60px] lg:pt-[57px] lg:pb-[21px] lg:my-[calc((80px-var(--wrap-py,80px))*5/3)]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image src="/assets/pages/shared/callouts_pattern.svg" alt="" fill sizes="100vw" unoptimized className="object-cover object-center" />
      </div>
      <div className="relative z-10 flex flex-col gap-[40px] lg:gap-[82px]">
        <Container maxWidth="1600">
          <Reveal>
            <Heading title={s.title} subtitle={s.desc} light wideSub />
          </Reveal>
        </Container>

        {/* desktop canvas */}
        <div className="hidden canvas:flex justify-center">
          <div className="canvas-zoom relative shrink-0" style={{ width: 1920, height: s.bgHeight ?? 648 }}>
            {s.bgImage && <Image src={s.bgImage} alt="" fill sizes="1920px" loading="eager" className="object-contain" aria-hidden="true" />}
            {items.slice(0, 4).map((it, i) => (
              <div key={it.title} className="absolute w-[450px]" style={{ left: CALLOUT_POS[i].left, top: s.tops?.[i] ?? CALLOUT_POS[i].top }}>
                <Reveal delay={i * 0.08} y={16}>
                  <Callout n={i + 1} title={it.title} desc={it.desc} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* tablet / mobile */}
        <Container maxWidth="1600" className="canvas:hidden">
          <div className="flex flex-col gap-[24px]">
            {s.bgImage && (
              <div className="relative mx-auto w-full max-w-[720px] "  style={{ aspectRatio: `1920/${s.bgHeight ?? 648}` }}>
                <Image src={s.bgImage} alt="" fill sizes="720px" className="object-contain" aria-hidden="true" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 2) * 0.08} className="h-full">
                  <Callout n={i + 1} title={it.title} desc={it.desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function DarkSection({ s }: { s: Extract<Section, { type: "dark" }> }) {
  if (s.numbered) return <CalloutsSection s={s} />;
  return (
    <section id={s.id} className="relative w-full overflow-hidden bg-[#1A1A1A] scroll-mt-[110px] py-[70px] lg:py-[80px] lg:min-h-[400px] lg:flex lg:items-center lg:my-[calc((80px-var(--wrap-py,80px))*5/3)]">
      <Image src={s.bgImage ?? "/assets/img_partner_bg.png"} alt="" fill sizes="100vw" className="object-cover pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[#1A1A1A]/80" aria-hidden="true" />
      <Container maxWidth="1600" className="relative z-10">
        <div className="flex flex-col gap-[40px] items-center">
          <Reveal>
            <Heading title={s.title} subtitle={s.desc} light />
          </Reveal>
          {s.items && (
            <div className={`w-full grid grid-cols-1 sm:grid-cols-2 ${s.items.length >= 4 ? "xl:grid-cols-4" : "xl:grid-cols-3"} gap-[20px]`}>
              {s.items.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col gap-[12px] border border-white/25 bg-white/5 backdrop-blur-sm p-[28px] lg:p-[32px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-[4px]">
                    {it.value && <StatValue value={it.value} className="font-archivo text-[44px] lg:text-[56px] leading-none text-white" />}
                    <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] text-white">{it.title}</h3>
                    <p className="m-0 font-archivo text-[15px] lg:text-[16px] leading-[24px] text-white/80">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          {s.ctas && (
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-[16px]">
              {s.ctas.map((c) => (
                <Button key={c.label} variant="outline" href={c.href} showDot>
                  {c.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function TiersSection({ s }: { s: Extract<Section, { type: "tiers" }> }) {
  // Figma: 520px cards on a 1600px row (20px gaps), 40/28 padding, 30px stack gap; the featured card is a 554px-tall navy-outlined card with a #1E40AF badge.
  return (
    <Wrap id={s.id} tone={s.tone}>
      <div className="flex flex-col gap-[48px] lg:gap-[84px] lg:py-[20px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} compact={s.compactHead} />
        </Reveal>
        <div className={`grid grid-cols-1 ${s.items.length === 2 ? "lg:grid-cols-2 lg:max-w-[1100px] lg:mx-auto lg:w-full" : "lg:grid-cols-3"} gap-[28px] lg:gap-[20px] items-center`}>
          {s.items.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="h-full">
              <article
                className={`card-lift relative flex h-full flex-col gap-[24px] lg:gap-[30px] bg-white px-[20px] py-[32px] lg:px-[28px] lg:py-[40px] border ${
                  t.featured ? "border-[#0F1B5D] lg:min-h-[554px] lg:justify-end lg:items-center" : "border-[#C6CCED]"
                }`}
              >
                {t.featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1E40AF] px-[20px] py-[10px] font-archivo text-[15px] lg:text-[17px] leading-[26px] uppercase text-white">
                    {t.badge ?? "Most Popular"}
                  </span>
                )}
                <div className="flex w-full flex-col gap-[24px] lg:gap-[34px]">
                  <span className="font-archivo text-[14px] lg:text-[17px] font-medium leading-[17px] uppercase text-[#666666]">{t.label}</span>
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="m-0 font-archivo text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[26px] font-medium text-primary">{t.title}</h3>
                    <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{t.desc}</p>
                    <ul className="m-0 p-0 list-none flex flex-col gap-[20px]">
                      {t.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-[10px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                          <Arrow />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px w-full bg-[#C6CCED] lg:w-[451px] lg:max-w-full" />
                <div className={`${t.featured ? "flex justify-center" : "lg:mt-0"} w-full`}>
                  <Button variant="outline-primary" href={t.cta.href} showDot className="w-fit">
                    {t.cta.label}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function DiagramSection({ s }: { s: Extract<Section, { type: "diagram" }> }) {
  // Figma: 1600 x 500 canvas, a 1600 x 322 line illustration at y108.7 (50% opacity) with three centred labels placed around it.
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[40px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <div className="canvas-zoom zoom-1600 hidden w1100:block relative mx-auto h-[500px] w-[1600px]">
          <div className="absolute left-0 top-[108.7px] h-[322px] w-[1600px] opacity-50">
            <Image src={s.image} alt={s.imageAlt} fill sizes="1600px" className="object-contain" />
          </div>
          {s.items.map((it) => (
            <div key={it.title} className="absolute flex flex-col items-center gap-[12px] text-center" style={{ left: it.x, top: it.y, width: it.w }}>
              <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-medium text-[#333333]">{it.title}</h3>
              <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="w1100:hidden flex flex-col gap-[28px]">
          <div className="relative mx-auto w-full max-w-[720px] aspect-[1600/322] opacity-70">
            <Image src={s.image} alt={s.imageAlt} fill sizes="720px" className="object-contain" />
          </div>
          <ol className="m-0 grid list-none grid-cols-1 gap-[24px] p-0 sm:grid-cols-3">
            {s.items.map((it, i) => (
              <li key={it.title} className="flex flex-col items-center gap-[8px] text-center">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#EFF0F6] font-archivo text-[17px] text-primary">{i + 1}</span>
                <h3 className="m-0 font-archivo text-[20px] leading-[26px] font-medium text-[#333333]">{it.title}</h3>
                <p className="m-0 font-archivo text-[16px] leading-[26px] text-[#666666]">{it.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Wrap>
  );
}

function EligibilitySection({ s }: { s: Extract<Section, { type: "eligibility" }> }) {
  return (
    <Wrap id={s.id}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[26px] items-stretch lg:items-center">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-[16px] bg-primary p-[24px] lg:p-[48px_48px]">
            <RichTitle as="h2" text={s.eligibleTitle} className="m-0 font-archivo text-[32px] lg:text-[60px] leading-[1.15] font-normal text-white" />
            <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[26px] text-white/85">{s.eligibleDesc}</p>
            <ul className="m-0 mt-[8px] p-0 list-none flex flex-col gap-[16px]">
              {s.eligible.map((e) => (
                <li key={e} className="flex items-center gap-[16px] border border-white/20 bg-white/10 px-[16px] py-[14px] lg:py-[27px] font-archivo text-[15px] lg:text-[17px] leading-[24px] lg:leading-[26px] text-white transition-colors hover:bg-white/15">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className="shrink-0">
                    <circle cx="13" cy="13" r="13" fill="#fff" fillOpacity="0.2" />
                    <path d="M8 13.5L11.5 17L18 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:h-auto h-full">
          <div className="flex h-full flex-col gap-[16px] p-[0px] lg:p-[0px_0px]">
            <RichTitle as="h2" text={s.docsTitle} className="m-0 font-archivo text-[32px] lg:text-[60px] leading-[1.15] font-normal text-primary" />
            <p className="m-0 font-archivo text-[15px] leading-[22px] text-[#666666]">{s.docsDesc}</p>
            <ul className="m-0 mt-[8px] p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-[24px] flex-1 lg:flex-none lg:auto-rows-[224px]">
              {s.docs.map((d) => (
                <li key={d.title} className="card-lift flex flex-col gap-[12px] bg-white p-[24px] border border-[#E2E8F0]">
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#EDF3FF] text-primary">
                    <Icon name="file" className="h-[20px] w-[20px]" />
                  </span>
                  <span className="font-archivo text-[17px] font-medium text-primary">{d.title}</span>
                  <span className="font-archivo text-[14px] leading-[22px] text-[#666666]">{d.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Wrap>
  );
}

function AccordionSection({ s }: { s: Extract<Section, { type: "accordion" }> }) {
  const center = s.centerHeading !== false;
  return (
    <Wrap id={s.id} tone={s.tone} className={s.tall ? "lg:py-[90px]!" : ""}>
      <div className={`flex flex-col gap-[48px] ${s.tall ? "lg:gap-[60px]" : ""}`}>
        {center && (
          <Reveal>
            <Heading title={s.title} subtitle={s.subtitle} compact={s.tall} />
          </Reveal>
        )}
        <div className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-[40px] ${s.tall ? "lg:gap-[50px]" : "lg:gap-[clamp(40px,5.2vw,100px)]"}`}>
          <Reveal className={`flex flex-col gap-[28px] w-full lg:flex-1 lg:min-w-0 ${s.tall ? "lg:max-w-[800px]" : "lg:max-w-[750px]"}`}>
            {!center && <Heading title={s.title} subtitle={s.subtitle} align="left" />}
            <NumberedAccordion items={s.items} large={s.tall} />
          </Reveal>
          <Reveal delay={0.1} className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]">
            <div className={`group relative w-full ${s.tall ? "" : "aspect-[750/500]"} overflow-hidden bg-[#EFF0F6]`} style={s.tall ? { aspectRatio: `750 / ${s.imageHeight ?? 550}` } : undefined}>
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 750px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </div>
    </Wrap>
  );
}

function NumberedSection({ s }: { s: Extract<Section, { type: "numbered" }> }) {
  // Figma: four-up numbered cards run on the 1800px row (430px cards); three-up stays on 1600px.
  return (
    <Wrap id={s.id} tone={s.tone} width={s.items.length === 4 ? "1800" : "1600"}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <ol className={`m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 ${s.items.length % 3 === 0 ? "xl:grid-cols-3" : "xl:grid-cols-4"} gap-[20px]`}>
          {s.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 4) * 0.07} className="h-full">
              <div className="card-lift group flex h-full flex-col gap-[20px] bg-[#EFF0F6] p-[28px] lg:px-[40px] lg:py-[50px]">
                <span className="font-archivo text-[28px] lg:text-[40px] leading-none lg:leading-[26px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[30px] lg:leading-[32px] font-normal text-[#333333]">{it.title}</h3>
                {it.desc && <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{it.desc}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Wrap>
  );
}

function RegionsSection({ s }: { s: Extract<Section, { type: "regions" }> }) {
  // Figma: solid brand-blue 1920 x 920 band; centred heading, then a 800px state accordion beside the 612 x 620 map (100px apart)
  return (
    <section id={s.id} className="relative w-full overflow-hidden bg-primary scroll-mt-[110px] py-[70px] lg:py-[52px] lg:min-h-[920px] lg:flex lg:items-center">
      <Container maxWidth="1600" className="relative z-10">
        <div className="flex flex-col items-center gap-[40px] lg:gap-[30px]">
          <Reveal>
            <Heading title={s.title} subtitle={s.desc} light />
          </Reveal>
          <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[100px]">
            <Reveal className="w-full lg:w-[800px] lg:shrink-0">
              <RegionList states={s.states} />
            </Reveal>
            <Reveal delay={0.1} className="relative w-full max-w-[520px] lg:max-w-none lg:w-[612px] shrink-0 aspect-[612/620]">
              <Image src={s.map} alt="Map of India showing Ksquare Energy's presence" fill sizes="(min-width:1024px) 612px, 90vw" className="object-contain" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

const OFFICE_ICON = { phone: "/assets/contact/icon_phone.svg", mail: "/assets/contact/icon_email.svg", pin: "/assets/contact/icon_map_pin.svg" } as const;

function FormSection({ s }: { s: Extract<Section, { type: "form" }> }) {
  return (
    <Wrap id={s.id}>
      <div className={`grid grid-cols-1 ${s.office ? "xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]" : "max-w-[960px] mx-auto"} gap-[40px] lg:gap-[80px] items-start`}>
        <Reveal>
          <div className="flex flex-col gap-[28px] border border-[#E2E8F0] bg-white p-[24px] sm:p-[40px] lg:p-[48px]">
            <Heading title={s.title} subtitle={s.subtitle} align="left" />
            <LeadForm kind={s.kind} />
          </div>
        </Reveal>
        {s.office && (
          <Reveal delay={0.1} className="flex flex-col gap-[28px] xl:pt-[56px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className="m-0 font-archivo text-[36px] lg:text-[52px] leading-[1.1] font-normal text-primary">{s.office.title}</h2>
              <p className={LEAD}>{s.office.desc}</p>
            </div>
            <div className="flex flex-col gap-[16px]">
              {s.office.cards.map((c) => (
                <div key={c.title} className="card-lift group flex items-start gap-[20px] border border-[#E2E8F0] bg-white p-[20px] lg:p-[24px]">
                  <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#EDEEF8]">
                    <Image src={OFFICE_ICON[c.icon]} alt="" width={c.icon === "mail" ? 18 : 24} height={c.icon === "mail" ? 14 : 24} className={c.icon === "mail" ? "h-[14px] w-[18px]" : "h-[24px] w-[24px]"} />
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-archivo text-[16px] text-[#333333]">{c.title}</span>
                    {c.lines.map((l, i) => (
                      <span key={l} className={i === 0 ? "font-dm text-[16px] font-medium text-[#111111]" : "font-archivo text-[15px] leading-[24px] text-[#666666]"}>
                        {i === 0 ? <ContactLink text={l} /> : l}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </Wrap>
  );
}

function BrandSwapSection({ s }: { s: Extract<Section, { type: "brandSwap" }> }) {
  const paras = s.paras;
  return (
    <Wrap id={s.id} width="1800">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[clamp(40px,6vw,115px)]">
        <Reveal className="flex flex-col gap-[30px] w-full lg:flex-1 lg:min-w-0">
          <RichTitle text={s.title} className={`${H2} text-[#333333]! xl:whitespace-nowrap`} accentClassName="text-[#333333]" breakBeforeAccent />
          <div className="flex flex-col gap-[20px]">
            {paras.map((p) => (
              <p key={p.slice(0, 40)} className={LEAD}>
                {p}
              </p>
            ))}
          </div>
          {s.cta && (
            <div>
              <Button variant="outline-primary" href={s.cta.href} showDot className="w-fit">
                {s.cta.label}
              </Button>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="w-full lg:w-[min(900px,52%)] lg:shrink-0">
          <div className="flex flex-col items-center gap-[24px] lg:gap-[36px] bg-white p-[20px] sm:p-[32px] lg:p-[48px] shadow-[0_1.5px_3px_rgba(0,0,0,0.05)]">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-[24px] lg:gap-[36px]">
              {s.panel.map((p) => (
                <div key={p.tag} className="flex flex-col items-center gap-[12px]">
                  <span className="rounded-[4px] bg-[#EFF0F6] px-[24px] py-[6px] font-archivo text-[12px] lg:text-[13px] leading-[18px] tracking-[0.04em] text-primary">{p.tag}</span>
                  <div className="relative aspect-[340/312] w-full bg-[#EFF0F6]">
                    <Image src={p.image} alt={p.caption} fill sizes="(min-width:1024px) 340px, 100vw" className="object-contain" />
                  </div>
                  <div className="flex w-full items-center justify-center gap-[12px] bg-[#EFF0F6] p-[15px]">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-archivo text-[13px] lg:text-[14px] leading-[20px] text-primary">{p.caption}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center gap-[18px] bg-white px-[20px] py-[18px] lg:py-[20px] lg:pl-[34px] lg:pr-[24px] shadow-[0_1.5px_3px_rgba(0,0,0,0.05)]">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" aria-hidden="true" className="shrink-0">
                <path d="M1 4h13m0 0-3-3m3 3-3 3M16 11H3m0 0 3-3m-3 3 3 3" stroke="#2E338F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-archivo text-[13px] lg:text-[14px] leading-[20px] text-primary">{s.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Wrap>
  );
}

const BRAND_CALLOUTS = [
  { left: 0, top: 58 },
  { left: 0, top: 352 },
  { left: 1110, top: 0 },
  { left: 1151, top: 299 },
];
const BRAND_CONNECTORS = [
  { src: "conn_logo.svg", left: 769, top: 75.4, w: 330, h: 169 },
  { src: "conn_manual.svg", left: 455, top: 146.2, w: 190.5, h: 97.75 },
  { src: "conn_pack.svg", left: 865, top: 316.4, w: 265.5, h: 60.06 },
  { src: "conn_warranty.svg", left: 461, top: 367.8, w: 169.5, h: 71 },
];

function BrandCalloutsSection({ s }: { s: Extract<Section, { type: "brandCallouts" }> }) {
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[40px] lg:gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <div className="hidden canvas:flex justify-center">
          <div className="canvas-zoom relative shrink-0" style={{ width: 1600, height: 506 }}>
            {BRAND_CONNECTORS.map((c) => (
              <div key={c.src} className="absolute" style={{ left: c.left, top: c.top, width: c.w, height: c.h }}>
                <Image src={`/assets/pages/private-label/${c.src}`} alt="" fill unoptimized aria-hidden="true" />
              </div>
            ))}
            <div className="absolute" style={{ left: 560, top: 91.4, width: 480, height: 338 }}>
              <Image src={s.image} alt={s.imageAlt} fill sizes="480px" className="object-contain" />
            </div>
            {s.items.slice(0, 4).map((it, i) => (
              <div key={it.title} className="absolute w-[450px]" style={{ left: BRAND_CALLOUTS[i].left, top: BRAND_CALLOUTS[i].top }}>
                <Reveal delay={i * 0.08} y={16}>
                  <Callout n={i + 1} title={it.title} desc={it.desc} bg="bg-[#EFF0F6]" />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <div className="canvas:hidden flex flex-col gap-[24px]">
          <div className="relative mx-auto w-full max-w-[480px] aspect-[480/338]">
            <Image src={s.image} alt={s.imageAlt} fill sizes="480px" className="object-contain" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {s.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.08} className="h-full">
                <Callout n={i + 1} title={it.title} desc={it.desc} bg="bg-[#EFF0F6]" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

export function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "brandSwap":
      return <BrandSwapSection s={section} />;
    case "brandCallouts":
      return <BrandCalloutsSection s={section} />;
    case "split":
      return <SplitSection s={section} />;
    case "cards":
      return <CardsSection s={section} />;
    case "table":
      return <TableSection s={section} />;
    case "steps":
      return <StepsSection s={section} />;
    case "compare":
      return <CompareSection s={section} />;
    case "band":
      return <BandSection s={section} />;
    case "dark":
      return <DarkSection s={section} />;
    case "team":
      return (
        <Wrap id={section.id} width="1800">
          <div className="flex flex-col gap-[48px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} tight />
            </Reveal>
            {/* Figma: three 580px cards (1px #C6CCED border), photo 532 x 520 inset 24px, role + social icon, then the name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[30px]">
              {section.members.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1} className="h-full">
                  <article className="group flex h-full flex-col border border-[#C6CCED] bg-white p-[16px] lg:p-[24px] pb-[24px] lg:pb-[10px] transition-[box-shadow,transform] duration-500 hover:-translate-y-[6px] hover:shadow-[0_18px_40px_-18px_rgba(43,57,139,0.35)]">
                    <div className="relative aspect-[532/520] w-full overflow-hidden">
                      <Image src={m.image} alt={m.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[24px] px-[4px] pt-[24px] lg:pt-[28px]">
                      <div className="flex items-center justify-between gap-[16px]">
                        <span className="font-archivo text-[16px] lg:text-[20px] font-medium leading-[26px] uppercase text-[#666666]">{m.role}</span>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
                          <rect width="28" height="28" rx="3" fill="#2B398B" />
                          <path d="M8.4 11.6h2.8V20H8.4v-8.4zM9.8 7.6a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM12.9 11.6h2.7v1.15h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.38 1.88 3.38 4.33V20h-2.8v-3.82c0-.91-.02-2.08-1.27-2.08-1.27 0-1.47.99-1.47 2.02V20h-2.8v-8.4z" fill="#fff" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[16px] lg:gap-[20px]">
                        <h3 className="m-0 font-archivo text-[28px] lg:text-[40px] font-normal leading-[1.1] text-primary">{m.name}</h3>
                        {m.desc && <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{m.desc}</p>}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      );
    case "gallery":
      return (
        <Wrap id={section.id} width="1800">
          <div className="flex flex-col gap-[40px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <CertificateGallery items={section.items} categories={section.categories} />
          </div>
        </Wrap>
      );
    case "timeline":
      return (
        <section id={section.id} className="relative w-full overflow-hidden bg-[#2B398B] py-[70px] lg:py-[60px] lg:min-h-[920px] lg:flex lg:items-center">
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
            <Image src="/assets/mfg_pattern.png" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <Container maxWidth="1600" className="relative z-10">
            <div className="flex flex-col gap-[56px]">
              <Reveal>
                <Heading title={section.title} subtitle={section.subtitle} light />
              </Reveal>
              <AwardTimeline entries={section.entries} />
            </div>
          </Container>
        </section>
      );
    case "featured":
      return (
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[48px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] lg:gap-[40px]">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 4) * 0.07} className="h-full">
                  <article className="card-lift group flex h-full flex-col gap-[16px] border border-[#E2E8F0] bg-white p-[12px] lg:p-[12px]">
                    <div className="relative aspect-[186/220] w-full overflow-hidden bg-[#DDDDDD]">
                      <Image src={it.image} alt={it.title} fill sizes="(min-width:1280px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-[6px] px-[4px] pb-[8px]">
                      <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] font-normal text-[#333333]">{it.title}</h3>
                      <p className="m-0 font-archivo text-[14px] leading-[22px] text-[#666666]">{it.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      );
    case "events":
      return (
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[48px]">
            {section.title && (
              <Reveal>
                <Heading title={section.title} subtitle={section.subtitle} />
              </Reveal>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] lg:gap-[32px]">
              {section.items.map((e, i) => (
                <Reveal key={e.title} delay={(i % 3) * 0.08} className="h-full">
                  <article className="group flex h-full flex-col bg-white border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_40px_-18px_rgba(43,57,139,0.35)]">
                    <div className="relative aspect-[574/300] w-full overflow-hidden bg-[#EFF0F6]">
                      <Image src={e.image} alt={e.title} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-[14px] p-[24px] lg:p-[28px]">
                      <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] font-medium leading-[30px] text-[#333333] group-hover:text-primary transition-colors">{e.title}</h3>
                      <p className="m-0 flex items-start gap-[10px] font-archivo text-[16px] leading-[24px] text-[#666666]">
                        <Icon name="pin" className="mt-[3px] h-[18px] w-[18px] shrink-0 text-primary" />
                        {e.venue}
                      </p>
                      <p className="m-0 flex items-center gap-[10px] font-archivo text-[16px] leading-[24px] text-[#666666]">
                        <Icon name="clock" className="h-[18px] w-[18px] shrink-0 text-primary" />
                        {e.date}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      );
    case "articles":
      return (
        <Wrap id={section.id} width="1800">
          <div className="flex flex-col gap-[48px]">
            {section.title && (
              <Reveal>
                <Heading title={section.title} subtitle={section.subtitle} />
              </Reveal>
            )}
            <Reveal>
              <ArticleGrid items={section.items} />
            </Reveal>
          </div>
        </Wrap>
      );
    case "calculators":
      return (
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[40px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <SolarCalculators />
          </div>
        </Wrap>
      );
    case "payment":
      return (
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[40px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <PaymentPanel upi={section.upi} bank={section.bank} />
          </div>
        </Wrap>
      );
    case "eligibility":
      return <EligibilitySection s={section} />;
    case "accordion":
      return <AccordionSection s={section} />;
    case "numbered":
      return <NumberedSection s={section} />;
    case "regions":
      return <RegionsSection s={section} />;
    case "tiers":
      return <TiersSection s={section} />;
    case "form":
      return <FormSection s={section} />;
    case "testimonials":
      return (
        <div className="pt-[60px] lg:pt-[100px] pb-[40px] lg:pb-[60px]">
          <Testimonials />
        </div>
      );
    case "locations":
      return (
        <Wrap>
          <div className="flex flex-col gap-[40px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <LocationTabs zones={section.zones} />
          </div>
        </Wrap>
      );
    case "faq":
      return (
        <Wrap id={section.id} tone={section.tone} className="lg:pb-[var(--faq-pb,calc((80px-var(--wrap-py,80px))*4/3+80px))]">
          <div className="flex flex-col gap-[40px] lg:gap-[64px]">
            <Reveal>
              <Heading title={section.title} />
            </Reveal>
            <Faq items={section.items} roomy />
          </div>
        </Wrap>
      );
    case "diagram":
      return <DiagramSection s={section} />;
    case "tracker":
      return (
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[40px] lg:gap-[44px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} compact />
            </Reveal>
            <TrackerBar placeholder={section.placeholder} button={section.button} note={section.note} link={section.link} success={section.success} />
          </div>
        </Wrap>
      );
    case "cta":
      return <CtaBanner title={section.title} desc={section.desc} ctas={section.ctas} />;
  }
}
