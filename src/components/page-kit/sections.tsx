import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Reveal from "@/components/common/Reveal";
import RichTitle from "@/components/common/RichTitle";
import Faq from "@/components/common/Faq";
import Testimonials from "@/components/home/Testimonials";
import { Icon } from "./icons";
import { ILLUSTRATIONS } from "./illustrations";
import HexSteps from "./HexSteps";
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

const H2 = "font-archivo text-[34px] sm:text-[44px] lg:text-[60px] leading-[1.15] text-primary font-normal m-0";
const LEAD = "m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]";

function Heading({ title, subtitle, align = "center", light = false }: { title: string; subtitle?: string; align?: "center" | "left"; light?: boolean }) {
  return (
    <div className={`flex flex-col gap-[16px] ${align === "center" ? "items-center text-center mx-auto" : "items-start text-left"} max-w-[1300px]`}>
      <RichTitle text={title} className={`${H2} ${light ? "text-white!" : ""}`} breakBeforeAccent={align === "left"} />
      {subtitle && <p className={`${LEAD} lg:text-[18px]! lg:leading-[28px]! max-w-[1100px] ${light ? "text-white/85!" : ""}`}>{subtitle}</p>}
    </div>
  );
}

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true" className={`shrink-0 text-primary ${className}`}>
    <path d="M0 0L10 6L0 12L3.5 6L0 0Z" fill="currentColor" />
  </svg>
);

/** Two-tone navy illustration inside a white rounded tile (the Figma icon treatment). */
function IconTile({ name, badge, size = 90 }: { name?: keyof typeof ILLUSTRATIONS; badge?: string; size?: number }) {
  const src = badge ?? (name ? ILLUSTRATIONS[name] : undefined);
  if (!src) return null;
  return (
    <span className="flex shrink-0 items-center justify-center rounded-[10px] bg-white p-[10px] transition-transform duration-300 group-hover:scale-105" style={{ width: size, height: size }}>
      <Image src={src} alt="" width={60} height={60} className="h-[66%] w-[66%] object-contain" />
    </span>
  );
}

function Wrap({ id, tone = "white", children, className = "", width = "1600" }: { id?: string; tone?: "white" | "soft"; children: React.ReactNode; className?: string; width?: "1600" | "1800" }) {
  return (
    <section id={id} className={`w-full scroll-mt-[110px] ${tone === "soft" ? "bg-[#F0F5FE] py-[60px] lg:py-[100px]" : "bg-white py-[40px] lg:py-[80px]"} ${className}`}>
      <Container maxWidth={width}>{children}</Container>
    </section>
  );
}

function SplitSection({ s }: { s: Extract<Section, { type: "split" }> }) {
  return (
    <Wrap id={s.id} tone={s.tone}>
      <div className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-[40px] lg:gap-[clamp(40px,5.2vw,100px)]`}>
        <Reveal className="flex flex-col gap-[32px] w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]">
          <div className="flex flex-col gap-[14px]">
            <RichTitle text={s.title} className={`${H2} text-[#333333]!`} accentClassName="text-[#333333]" breakBeforeAccent />
            <div className="flex flex-col gap-[14px] mt-[10px]">
              {s.paras.map((p) => (
                <p key={p.slice(0, 40)} className={LEAD}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {s.bullets && (
            <ul className="m-0 p-0 list-none flex flex-col gap-[12px]">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-[12px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  <Arrow className="mt-[7px]" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {s.stats && (
            <div className="flex flex-col gap-[28px]">
              <div className="h-px w-full bg-[#C6CCED]" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[24px]">
                {s.stats.map((st) => (
                  <div key={st.label} className="flex flex-col gap-[10px]">
                    <span className="font-archivo text-[32px] lg:text-[40px] leading-none text-primary">{st.value}</span>
                    <span className="font-archivo text-[15px] lg:text-[17px] leading-[22px] text-[#666666]">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {s.cta && (
            <div>
              <Button variant="outline-primary" href={s.cta.href} showDot>
                {s.cta.label}
              </Button>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]">
          <div className="group relative w-full aspect-[750/500] overflow-hidden bg-[#EFF0F6]">
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
  const wide = cols === 4 && !s.items.some((i) => i.image);
  return (
    <Wrap id={s.id} tone={s.tone} width={wide ? "1800" : "1600"}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} align={left ? "left" : "center"} />
        </Reveal>
        <div className={wide ? "grid grid-cols-1 sm:grid-cols-2 xl:[grid-template-columns:repeat(4,minmax(0,430px))] xl:justify-between gap-[20px] xl:gap-[26.67px]" : `grid grid-cols-1 ${grid} gap-[20px] lg:gap-[24px]`}>
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.07} className="h-full">
              {item.image ? (
                <article className="group flex h-full flex-col gap-[24px]">
                  <div className={`relative w-full overflow-hidden aspect-[380/400] ${s.fit === "contain" ? "bg-[#EFF0F6]" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
                      className={`${s.fit === "contain" ? "object-contain p-[30px]" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[14px]">
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="m-0 font-archivo text-[22px] lg:text-[24px] leading-[28px] font-medium text-[#333333] group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.desc}</p>
                    </div>
                    {item.href && (
                      <div className="mt-auto">
                        <Button variant="outline-primary" href={item.href} showDot>
                          {item.linkLabel ?? "View Product"}
                        </Button>
                      </div>
                    )}
                  </div>
                </article>
              ) : (
                <article className="card-lift group flex h-full flex-col gap-[10px] bg-[#EFF0F6] p-[28px] lg:px-[40px] lg:py-[50px]">
                  <div className="flex flex-col items-start gap-[30px]">
                    <IconTile name={item.icon} badge={item.badge} />
                    <h3 className="m-0 font-archivo text-[20px] lg:text-[24px] leading-[32px] font-normal text-[#333333]">{item.title}</h3>
                  </div>
                  <p className="m-0 font-archivo text-[16px] lg:text-[18px] leading-[28px] text-[#666666]">{item.desc}</p>
                  {item.href && (
                    <Link href={item.href} className="inline-flex items-center gap-[8px] mt-auto font-archivo text-[15px] text-primary hover:gap-[14px] transition-all">
                      {item.linkLabel ?? "Learn more"} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              )}
            </Reveal>
          ))}
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
          <div className={`w-full overflow-x-auto ${plain ? "border border-[#DDDDDD]" : ""}`}>
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
                    <th key={h} className={plain ? `${cellPad(ci, ci === s.head.length - 1)} py-[26px] text-[16px] lg:text-[18px] leading-[24px] font-medium uppercase` : "px-[16px] py-[18px] text-[14px] lg:text-[15px] font-semibold lg:text-[17px]"}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((row, ri) => (
                  <tr key={row[0]} className={`${plain ? "bg-white border-b border-[#DDE1F0] last:border-b-0" : `${ri % 2 ? "bg-[#F0F5FE]" : "bg-white"} border-t border-[#E5E5E5]`} hover:bg-[#F0F5FE] transition-colors`}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={
                          plain
                            ? `${cellPad(ci, ci === row.length - 1)} py-[26px] text-[15px] lg:text-[17px] leading-[26px] align-middle ${ci === 0 ? "text-primary font-medium" : ci === row.length - 1 ? "text-[#666666]" : "text-[#333333]"}`
                            : `px-[16px] py-[20px] text-[14px] lg:text-[15px] ${ci === 1 ? "text-primary font-semibold lg:text-[17px]" : ci === 2 ? "text-[#10B981] font-medium lg:text-[17px]" : "text-[#555555] lg:text-[17px]"}`
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
          <div className="flex flex-col items-center gap-[24px]">
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
        {variant === "circles" ? <CircleSteps steps={s.items} /> : <HexSteps steps={s.items} />}
      </div>
    </Wrap>
  );
}

function CompareSection({ s }: { s: Extract<Section, { type: "compare" }> }) {
  return (
    <Wrap id={s.id}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <div className={`grid grid-cols-1 ${s.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-[20px] lg:gap-[24px]`}>
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <article className="card-lift flex h-full flex-col gap-[20px] bg-white border border-[#E2E8F0] p-[28px] lg:p-[30px]">
                <h3 className="m-0 font-archivo text-[26px] lg:text-[32px] leading-[1.15] font-normal text-primary">{item.title}</h3>
                <p className="m-0 font-archivo text-[15px] lg:text-[16px] leading-[24px] text-[#666666]">{item.desc}</p>
                <ul className="m-0 p-0 list-none flex flex-col gap-[14px] mt-[4px]">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-[10px] font-archivo text-[15px] leading-[22px] text-[#555555]">
                      <Arrow className="mt-[5px]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function BandSection({ s }: { s: Extract<Section, { type: "band" }> }) {
  return (
    <section className="w-full bg-primary">
      <Container maxWidth="1600">
        <ul className="m-0 p-0 list-none flex flex-wrap items-center justify-center lg:justify-between gap-x-[40px] gap-y-[12px] py-[22px] lg:px-[100px]">
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
  { left: 160, top: 24 },
  { left: 160, top: 446 },
  { left: 1310, top: 24 },
  { left: 1310, top: 360 },
];

function Callout({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="card-lift h-full bg-[#EDF3FF] px-[24px] py-[16px] text-primary">
      <h3 className="m-0 font-archivo text-[17px] lg:text-[18px] leading-[26px] font-medium">
        {n}. {title}
      </h3>
      <p className="m-0 mt-[8px] font-archivo text-[15px] lg:text-[16px] leading-[24px] text-[#2E338F]">{desc}</p>
    </div>
  );
}

/** Blue band with the house illustration in the middle and four numbered cards around it (Figma "Why …" sections). */
function CalloutsSection({ s }: { s: Extract<Section, { type: "dark" }> }) {
  const items = s.items ?? [];
  return (
    <section id={s.id} className="relative w-full overflow-hidden bg-[#2B398B] scroll-mt-[110px] py-[60px] lg:py-[80px]">
      <div className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" aria-hidden="true">
        <Image src="/assets/mfg_pattern.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="relative z-10 flex flex-col gap-[40px] lg:gap-[60px]">
        <Container maxWidth="1600">
          <Reveal>
            <Heading title={s.title} subtitle={s.desc} light />
          </Reveal>
        </Container>

        {/* desktop canvas */}
        <div className="hidden canvas:flex justify-center">
          <div className="canvas-zoom relative shrink-0" style={{ width: 1920, height: 648 }}>
            {s.bgImage && <Image src={s.bgImage} alt="" fill sizes="1920px" loading="eager" className="object-contain" aria-hidden="true" />}
            {items.slice(0, 4).map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08} className="absolute" y={16}>
                <div className="absolute w-[450px]" style={{ left: CALLOUT_POS[i].left, top: CALLOUT_POS[i].top }}>
                  <Callout n={i + 1} title={it.title} desc={it.desc} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* tablet / mobile */}
        <Container maxWidth="1600" className="canvas:hidden">
          <div className="flex flex-col gap-[24px]">
            {s.bgImage && (
              <div className="relative mx-auto w-full max-w-[720px] aspect-[1920/648]">
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
    <section id={s.id} className="relative w-full overflow-hidden bg-[#1A1A1A] scroll-mt-[110px] py-[70px] lg:py-[80px]">
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
                    {it.value && <span className="font-archivo text-[44px] lg:text-[56px] leading-none text-white">{it.value}</span>}
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
  return (
    <Wrap id={s.id} tone={s.tone}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <div className={`grid grid-cols-1 ${s.items.length === 2 ? "lg:grid-cols-2 lg:max-w-[1100px] lg:mx-auto lg:w-full" : "lg:grid-cols-3"} gap-[20px] lg:gap-[40px] items-center`}>
          {s.items.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="h-full">
              <article
                className={`card-lift relative flex h-full flex-col gap-[16px] bg-white p-[28px] lg:p-[30px] ${
                  t.featured ? "border-2 border-primary lg:py-[42px]" : "border border-[#E2E8F0]"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary px-[16px] py-[6px] font-archivo text-[13px] uppercase tracking-wide text-white">
                    {t.badge ?? "Most Popular"}
                  </span>
                )}
                <span className="font-archivo text-[13px] uppercase tracking-wide text-[#666666]">{t.label}</span>
                <h3 className="m-0 font-archivo text-[30px] lg:text-[36px] leading-[1.15] font-normal text-primary">{t.title}</h3>
                <p className="m-0 font-archivo text-[15px] lg:text-[16px] leading-[24px] text-[#666666]">{t.desc}</p>
                <ul className="m-0 p-0 list-none flex flex-col gap-[14px] pb-[20px] border-b border-[#E2E8F0]">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-[10px] font-archivo text-[15px] leading-[22px] text-[#555555]">
                      <Arrow className="mt-[5px]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className={`mt-auto ${t.featured ? "flex justify-center" : ""}`}>
                  <Button variant="outline-primary" href={t.cta.href} showDot>
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

function EligibilitySection({ s }: { s: Extract<Section, { type: "eligibility" }> }) {
  return (
    <Wrap id={s.id}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[26px] items-stretch">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-[16px] bg-primary p-[24px] lg:p-[48px_48px]">
            <RichTitle as="h2" text={s.eligibleTitle} className="m-0 font-archivo text-[32px] lg:text-[48px] leading-[1.15] font-normal text-white" />
            <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[26px] text-white/85">{s.eligibleDesc}</p>
            <ul className="m-0 mt-[8px] p-0 list-none flex flex-col gap-[16px]">
              {s.eligible.map((e) => (
                <li key={e} className="flex items-center gap-[16px] border border-white/20 bg-white/10 px-[16px] py-[14px] font-archivo text-[15px] lg:text-[17px] leading-[24px] text-white transition-colors hover:bg-white/15">
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
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col gap-[16px] p-[0px] lg:p-[0px_0px]">
            <RichTitle as="h2" text={s.docsTitle} className="m-0 font-archivo text-[32px] lg:text-[48px] leading-[1.15] font-normal text-primary" />
            <p className="m-0 font-archivo text-[15px] leading-[22px] text-[#666666]">{s.docsDesc}</p>
            <ul className="m-0 mt-[8px] p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-[24px] flex-1">
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
    <Wrap id={s.id} tone={s.tone}>
      <div className="flex flex-col gap-[48px]">
        {center && (
          <Reveal>
            <Heading title={s.title} subtitle={s.subtitle} />
          </Reveal>
        )}
        <div className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-[40px] lg:gap-[clamp(40px,5.2vw,100px)]`}>
          <Reveal className="flex flex-col gap-[28px] w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]">
            {!center && <Heading title={s.title} subtitle={s.subtitle} align="left" />}
            <NumberedAccordion items={s.items} />
          </Reveal>
          <Reveal delay={0.1} className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[750px]">
            <div className="group relative w-full aspect-[750/500] overflow-hidden bg-[#EFF0F6]">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 750px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </div>
    </Wrap>
  );
}

function NumberedSection({ s }: { s: Extract<Section, { type: "numbered" }> }) {
  return (
    <Wrap id={s.id} tone={s.tone}>
      <div className="flex flex-col gap-[48px]">
        <Reveal>
          <Heading title={s.title} subtitle={s.subtitle} />
        </Reveal>
        <ol className={`m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 ${s.items.length % 3 === 0 ? "xl:grid-cols-3" : "xl:grid-cols-4"} gap-[20px] lg:gap-[24px]`}>
          {s.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 4) * 0.07} className="h-full">
              <div className="card-lift group flex h-full flex-col gap-[14px] bg-[#EFF0F6] p-[28px] lg:p-[32px]">
                <span className="font-archivo text-[28px] lg:text-[32px] leading-none text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] leading-[30px] font-medium text-[#333333]">{it.title}</h3>
                {it.desc && <p className="m-0 font-archivo text-[15px] lg:text-[16px] leading-[24px] text-[#666666]">{it.desc}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Wrap>
  );
}

function RegionsSection({ s }: { s: Extract<Section, { type: "regions" }> }) {
  return (
    <section id={s.id} className="relative w-full overflow-hidden bg-primary scroll-mt-[110px] py-[70px] lg:py-[100px]">
      <Image src="/assets/common/cta_bg_pattern.png" alt="" fill sizes="100vw" className="object-cover opacity-50 pointer-events-none" aria-hidden="true" />
      <Container maxWidth="1600" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,560px)] gap-[40px] lg:gap-[80px] items-center">
          <Reveal className="flex flex-col gap-[32px]">
            <Heading title={s.title} subtitle={s.desc} align="left" light />
            <RegionList states={s.states} />
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[520px] aspect-[612/620]">
            <Image src={s.map} alt="Map of India showing Ksquare Energy's presence" fill sizes="(min-width:1024px) 520px, 90vw" className="object-contain" />
          </Reveal>
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
                    <Image src={OFFICE_ICON[c.icon]} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-archivo text-[16px] text-[#333333]">{c.title}</span>
                    {c.lines.map((l, i) => (
                      <span key={l} className={i === 0 ? "font-dm text-[16px] font-medium text-[#111111]" : "font-archivo text-[15px] leading-[24px] text-[#666666]"}>
                        {l}
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

export function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
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
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[48px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[24px]">
              {section.members.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <article className="group relative overflow-hidden bg-[#EFF0F6]">
                    <div className="relative aspect-[532/520] w-full overflow-hidden">
                      <Image src={m.image} alt={m.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-[4px] border-t-[3px] border-primary bg-white p-[20px] lg:p-[24px] transition-colors duration-300 group-hover:bg-primary">
                      <span className="font-archivo text-[15px] text-[#666666] transition-colors group-hover:text-white/80">{m.role}</span>
                      <h3 className="m-0 font-archivo text-[22px] lg:text-[26px] font-medium text-primary transition-colors group-hover:text-white">{m.name}</h3>
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
        <Wrap id={section.id}>
          <div className="flex flex-col gap-[40px]">
            <Reveal>
              <Heading title={section.title} subtitle={section.subtitle} />
            </Reveal>
            <CertificateGallery items={section.items} />
          </div>
        </Wrap>
      );
    case "timeline":
      return (
        <section id={section.id} className="relative w-full overflow-hidden bg-[#2B398B] py-[70px] lg:py-[100px]">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" aria-hidden="true">
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
        <Wrap id={section.id}>
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
        <Wrap id={section.id} tone={section.tone}>
          <div className="flex flex-col gap-[40px] lg:gap-[64px]">
            <Reveal>
              <Heading title={section.title} />
            </Reveal>
            <Faq items={section.items} />
          </div>
        </Wrap>
      );
    case "cta":
      return <CtaBanner title={section.title} desc={section.desc} ctas={section.ctas} />;
  }
}
