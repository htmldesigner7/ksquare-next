import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import RichTitle from "@/components/common/RichTitle";

export default function CtaBanner({ title, desc, ctas }: { title: string; desc: string; ctas: { label: string; href: string }[] }) {
  // Figma breaks the heading so the italic serif phrase sits on its own line.
  return (
    <div className="relative w-full overflow-hidden bg-[#2B398B] py-[70px] lg:py-0 lg:h-[480px] flex items-center">
      <div className="absolute inset-0 -scale-x-100 opacity-60 pointer-events-none" aria-hidden="true">
        <Image src="/assets/common/cta_bg_pattern.png" alt="" fill quality={100} sizes="100vw" className="object-cover" />
      </div>
      <div className="hidden lg:block absolute right-0 top-[30.91px] w-[36.2%] max-w-[694.46px] aspect-[694.46/430.18] pointer-events-none">
        <Image src="/assets/common/cta_illustration_figma.svg" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <Container maxWidth="1600" className="relative z-10">
        <Reveal className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="flex flex-col gap-[8px] max-w-[1025px]">
            <RichTitle text={title} className="m-0 font-archivo font-normal text-[36px] md:text-[60px] leading-[1.15] md:leading-[68px] text-white" />
            <p className="m-0 font-normal text-[16px] lg:text-[17px] leading-[26px] text-white">{desc}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] lg:gap-[24px]">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="group inline-flex items-center justify-center gap-[16px] px-[23px] py-[15px] border border-white text-white hover:bg-white hover:text-primary transition-colors"
              >
                <span className="font-normal text-[17px] leading-[26px]">{cta.label}</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-primary transition-colors" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
