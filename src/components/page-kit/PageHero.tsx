import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Reveal from "@/components/common/Reveal";
import RichTitle from "@/components/common/RichTitle";
import type { HeroData } from "./types";

const Chevron = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true" className="shrink-0">
    <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PageHero({ hero }: { hero: HeroData }) {
  // Figma variant with the breadcrumb on its own row above a top-aligned title + intro row (title may still break before the accent).
  const crumbRow = hero.singleLine || hero.crumbRow;
  const crumbNav = (
        <nav aria-label="Breadcrumb" className="flex items-center gap-[10px] flex-wrap">
          {hero.crumbs.map((crumb, i) => {
            const last = i === hero.crumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !last ? (
                  <Link href={crumb.href} className="font-archivo text-[15px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors py-[8px] -my-[8px]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current={last ? "page" : undefined} className={last ? "font-archivo text-[15px] lg:text-[20px] text-primary leading-[26px]" : "font-archivo text-[15px] lg:text-[20px] text-[#333333] leading-[28px]"}>
                    {crumb.label}
                  </span>
                )}
                {!last && <Chevron />}
              </React.Fragment>
            );
          })}
        </nav>
  );

  return (
    <section className="w-full pt-[90px] lg:pt-[130px] flex flex-col items-center overflow-x-clip">
      <Container maxWidth="1800" className="relative z-10">
        {/* Single-line Figma variant: breadcrumb is its own row above the title + intro row */}
        {crumbRow && <div className="mb-[14px]">{crumbNav}</div>}
        <div className={`flex flex-col lg:flex-row justify-between ${crumbRow ? "lg:items-start" : "lg:items-end"} gap-[32px] lg:gap-[40px] w-full pt-[24px] lg:pt-0`}>
          {/* Left: breadcrumb + title (Figma title block is 179px tall even for one/two lines) */}
          <div className={`flex flex-col ${crumbRow ? "gap-[14px]" : "gap-[12px]"} w-full lg:flex-1 lg:min-w-0 lg:max-w-[var(--hero-tw,792px)]`} style={hero.titleWidth ? ({ "--hero-tw": `${hero.titleWidth}px` } as React.CSSProperties) : undefined}>
            {!crumbRow && crumbNav}
            <div className={crumbRow || hero.fitTitle ? "" : "lg:min-h-[179px]"}>
              <RichTitle
                as="h1"
                text={hero.title}
                className="font-recia text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[60px] w1536:text-[68px] leading-[1.15] w1536:leading-[78px] text-primary font-normal"
                accentClassName="font-semibold"
                breakBeforeAccent={!hero.singleLine}
              />
            </div>
          </div>

          {/* Right: intro + CTAs */}
          <div className="flex flex-col gap-[32px] w-full lg:flex-1 lg:min-w-0 lg:max-w-[816px]">
            <p className="m-0 font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">{hero.description}</p>
            {hero.ctas && hero.ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-[16px]">
                {hero.ctas.map((cta) => (
                  <Button key={cta.label} variant="outline-primary" href={cta.href} showDot>
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      <Container
        maxWidth="1800"
        className={`relative z-0 mt-[40px] ${hero.afterGap ? "lg:mb-[var(--hero-after)]" : ""} ${hero.bannerGap ? "lg:mt-[var(--hero-gap)]" : hero.cutout ? (crumbRow ? "lg:mt-[217px]" : "lg:mt-[181px]") : "lg:mt-[80px]"}`}
        style={hero.bannerGap || hero.afterGap ? ({ "--hero-gap": `${hero.bannerGap ?? 0}px`, "--hero-after": `${hero.afterGap ?? 0}px` } as React.CSSProperties) : undefined}
      >
        <Reveal y={20}>
          <div className="group w-full relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[1804/500]">
            {hero.image && (
              <div className="absolute inset-0 overflow-hidden bg-[#EFF0F6]">
                <Image
                  src={hero.image}
                  alt={hero.cutout ? "" : hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1800px) 1800px, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: hero.imagePosition ?? "center" }}
                />
              </div>
            )}
            {hero.cutout && (
              <div
                className="absolute inset-0 lg:inset-auto lg:left-[var(--cx)] lg:top-[var(--cy)] lg:w-[var(--cw)] lg:h-[var(--ch)] pointer-events-none"
                style={
                  {
                    "--cx": `${(hero.cutout.x / 1800) * 100}%`,
                    "--cy": `${(hero.cutout.y / 500) * 100}%`,
                    "--cw": `${(hero.cutout.w / 1800) * 100}%`,
                    "--ch": `${(hero.cutout.h / 500) * 100}%`,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={hero.cutout.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1800px) 1800px, 100vw"
                  className="object-contain object-bottom transition-transform duration-[1200ms] ease-out origin-bottom group-hover:scale-[1.015]"
                />
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
