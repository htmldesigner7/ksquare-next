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
                <span className="italic font-semibold">Resources Together</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[760px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Download official product brochures, certificates, compliance notifications and technical datasheets for Ksquare Energy&apos;s solar products.
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
          <div className="w-full relative aspect-[1800/684]">
            <Image
              src="/assets/download-resources/hero_banner_group.png"
              alt="Ksquare Energy solar resources"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Download Resources */}
      <section className="w-full">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[40px] w-full">
            <div className="flex flex-col items-center text-center gap-[14px] max-w-[900px]">
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] text-primary font-normal">
                Download <span className="font-recia italic font-medium">Resources</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                Strategically located offices and manufacturing facilities to serve you better with quick support and seamless operations.
              </p>
            </div>

            <DownloadTabs />
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />
    </main>
  );
}
