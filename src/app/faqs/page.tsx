import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import SectionSpacer from "@/components/common/SectionSpacer";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "FAQs | Ksquare Energy",
  description:
    "Find clear answers about Ksquare Energy, our solar products, solutions, services and support.",
};

const categories = [
  "Solar Products",
  "Solar Solutions",
  "Company",
  "Services & Support",
  "Locations",
];

const faqs = [
  {
    question: "What solar products does KSquare manufacture?",
    answer:
      "Ksquare Energy manufactures a wide range of solar components including DCDBs, ACDBs, combiner boxes, junction boxes, MC4 connectors, cable glands and complete BOS accessories for residential, commercial and utility-scale installations.",
  },
  {
    question: "Do you provide installation services for homes?",
    answer:
      "Yes, through our network of certified EPC partners we offer end-to-end residential rooftop installation, from site survey and design to commissioning and after-sales support.",
  },
  {
    question: "Are your products certified for industrial use?",
    answer:
      "All Ksquare products are manufactured to IS/IEC standards and are tested for industrial and utility-scale deployment, with IP-rated enclosures suited for harsh outdoor environments.",
  },
  {
    question: "What is the typical warranty on Ksquare products?",
    answer:
      "Our distribution boxes and enclosures carry a standard manufacturer warranty, with extended warranty options available for large-scale and OEM orders. Contact our support team for product-specific terms.",
  },
  {
    question: "How can distributors and dealers partner with Ksquare?",
    answer:
      "We welcome distributors, dealers and export partners across India and internationally. Reach out through our B2B distributorship program and our team will guide you through onboarding, pricing tiers and regional stocking support.",
  },
];

export default function FaqsPage() {
  return (
    <div className="w-full bg-white font-archivo">
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[60px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[15px] lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px]">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-[#2B398B] leading-[28px]">
                  Home
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Link href="/faqs" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-[#2B398B] leading-[28px]">
                  Resources
                </Link>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-[#2B398B] leading-[26px]">
                  FAQs
                </span>
              </div>

              {/* Title */}
              <h1 className="font-jost text-[40px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-[#333333] font-normal mt-[10px]">
                Frequently Asked <span className="font-recia italic font-semibold">Industry Trends</span>
                <br />
                <span className="font-recia italic font-semibold text-[#2B398B]">Questions</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] lg:max-w-[816px] lg:pb-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] lg:leading-[36px] text-[#333333]">
                Find clear answers about KSquare Energy, our solar products, solutions, services and support.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
                <Button variant="outline-primary" href="/products/dcdb" showDot={true}>
                  Explore Products
                </Button>
                <Button variant="outline-primary" href="/contact" showDot={true}>
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Banner Image */}
        <Container maxWidth="1800" className="mt-[60px] lg:mt-[100px]">
          <div className="w-full relative aspect-[1800/500] rounded-[24px] overflow-hidden">
            <Image
              src="/assets/faqs/faq_hero_banner.png"
              alt="Ksquare Energy Solar Installations"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 2. Popular Questions: Sidebar + Accordion */}
      <section className="w-full">
        <Container maxWidth="1800">
          <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[46px] items-start">
            {/* Sidebar Categories */}
            <div className="w-full xl:w-[360px] shrink-0 bg-[#EFF0F6] p-[24px] flex flex-col gap-[30px]">
              <h3 className="font-jost text-[28px] lg:text-[32px] leading-[1.3] text-[#041632] font-semibold">
                Popular Questions
              </h3>
              <div className="flex flex-col gap-[20px]">
                {categories.map((cat, i) => (
                  <span
                    key={cat}
                    className={`text-left font-archivo text-[20px] lg:text-[24px] leading-[26px] py-[4px] pl-[16px] border-l-[3px] transition-colors cursor-pointer ${
                      i === 0
                        ? "border-[#2B398B] text-[#2B398B] font-medium"
                        : "border-transparent text-[#666666] hover:text-[#2B398B] hover:border-[#2B398B]"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="w-full flex-1 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <h2 className="font-archivo text-[36px] lg:text-[48px] leading-[1.15] text-[#2B398B] font-normal">
                  Popular Questions
                </h2>
                <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[720px]">
                  Browse our most frequently asked questions about products, installation, warranty and partnership opportunities.
                </p>
              </div>

              <div className="flex flex-col lg:pr-[24px]">
                {faqs.map((item, index) => (
                  <React.Fragment key={item.question}>
                    <details className="group py-[20px]" open={index === 0} name="faq-accordion">
                      <summary className="flex items-start justify-between gap-[24px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="font-archivo text-[20px] lg:text-[24px] leading-[32px] text-[#333333]">
                          {item.question}
                        </span>
                        <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 group-open:hidden">+</span>
                        <span className="font-archivo text-[24px] leading-[32px] text-[#333333] shrink-0 hidden group-open:block">-</span>
                      </summary>
                      <p className="font-archivo text-[17px] leading-[26px] text-[#666666] mt-[16px]">
                        {item.answer}
                      </p>
                    </details>
                    {index < faqs.length - 1 && <hr className="border-[#9DBCF3]/40" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 3. Have a Technical Question CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="w-[1920px] max-w-full mx-auto relative min-h-[480px] max-xl:h-auto max-xl:py-16">
          {/* Background */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/faqs/faq_cta_bg.png"
              alt="Ksquare Energy background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2B398B]/90 mix-blend-multiply"></div>
          </div>

          {/* Decorative graphic (desktop only) */}
          <div className="hidden xl:block absolute right-[80px] top-[25px] w-[694px] h-[430px] z-0">
            <Image
              src="/assets/faqs/faq_cta_graphic.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop content */}
          <div className="hidden xl:flex flex-col gap-[40px] relative z-10 px-[160px] py-[93px] w-full max-w-[1025px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="font-archivo text-[48px] lg:text-[60px] leading-[68px] text-white font-normal max-w-[909px]">
                Have a Technical Question <span className="font-recia italic font-medium">Not Listed Above?</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[26px] text-white">
                Our engineering team is ready to assist with complex specifications and
                <br />
                custom manufacturing requirements.
              </p>
            </div>
            <div className="flex items-center gap-[24px]">
              <Link
                href="/contact"
                className="flex items-center gap-[16px] px-[24px] py-[16px] border border-white text-white hover:bg-white hover:text-[#2B398B] transition-colors group"
              >
                <span className="font-archivo text-[17px]">Talk to an Engineer</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors"></span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-[16px] px-[24px] py-[16px] border border-white text-white hover:bg-white hover:text-[#2B398B] transition-colors group"
              >
                <span className="font-archivo text-[17px]">Apply for B2B Distributorship</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors"></span>
              </Link>
            </div>
          </div>

          {/* Responsive layout (< 1280px) */}
          <div className="xl:hidden relative z-10 flex flex-col items-center text-center gap-8 px-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-archivo font-normal text-[32px] sm:text-[42px] text-white leading-[1.2]">
                Have a Technical Question <span className="font-recia italic font-medium">Not Listed Above?</span>
              </h2>
              <p className="font-archivo font-normal text-[16px] text-white">
                Our engineering team is ready to assist with complex specifications and custom manufacturing requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[16px]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-[16px] px-[24px] py-[14px] border border-white text-white hover:bg-white hover:text-[#2B398B] transition-colors group w-full sm:w-auto"
              >
                <span className="font-archivo text-[16px]">Talk to an Engineer</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors"></span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-[16px] px-[24px] py-[14px] border border-white text-white hover:bg-white hover:text-[#2B398B] transition-colors group w-full sm:w-auto"
              >
                <span className="font-archivo text-[16px]">Apply for B2B Distributorship</span>
                <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
