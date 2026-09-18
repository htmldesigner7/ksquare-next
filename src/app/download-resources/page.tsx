import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import DownloadTabs from "./DownloadTabs";

export const metadata: Metadata = {
  title: "Download Resources | Ksquare Energy",
  description:
    "Download official product brochures, certificates, compliance notifications and technical datasheets for Ksquare Energy's solar products and solutions.",
};

export default function DownloadResourcesPage() {
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
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Download
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal">
                Explore Our Solar<br />
                <span className="italic font-semibold">Resources Together.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Explore our brochures, installation guides, product updates, industry news and technical resources from Ksquare Energy.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
                <Button variant="outline-primary" href="/contact" showDot>
                  Get in Touch
                </Button>
                <Button variant="outline-primary" href="/contact" showDot>
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Banner */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="relative w-full">
            <div className="w-full relative aspect-[1800/500] rounded-[24px] overflow-hidden">
              <Image
                src="/assets/download-resources/hero_bg-6bf921.png"
                alt="Ksquare Energy solar resources"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden xl:block absolute -bottom-[60px] right-[60px] w-[280px] aspect-[556/664] rounded-[16px] overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/assets/download-resources/hero_side_image.png"
                alt="Ksquare Energy technician"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Download Resources */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[40px] w-full">
            <div className="flex flex-col items-center text-center gap-[14px] max-w-[900px]">
              <h2 className="font-archivo text-[32px] lg:text-[50px] leading-[1.15] text-primary font-normal">
                Download <span className="font-recia italic font-medium">Resources</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                Download official product brochures, certificates, compliance notifications and technical datasheets for all Ksquare Energy products.
              </p>
            </div>

            <DownloadTabs />
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 3. CTA Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="hidden xl:flex absolute right-[80px] top-0 bottom-0 items-center opacity-90 pointer-events-none">
          <Image
            src="/assets/download-resources/cta_graphic.svg"
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
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-white font-normal">
                Get bulk pricing on <span className="font-recia italic font-medium">Solar BOS Components</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#EDF3FF] max-w-[700px]">
                Whether you need certified solar components, OEM manufacturing, or complete rooftop solar solutions, our team is ready to help.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[16px]">
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
