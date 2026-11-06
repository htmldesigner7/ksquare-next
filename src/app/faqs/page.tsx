import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import SectionSpacer from "@/components/common/SectionSpacer";
import PageHero from "@/components/page-kit/PageHero";
import type { HeroData } from "@/components/page-kit/types";
import FaqCategoryList from "./FaqCategoryList";

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
    category: "Solar Products",
    question: "What solar products does KSquare manufacture?",
    answer:
      "Ksquare Energy manufactures a wide range of solar components including DCDBs, ACDBs, combiner boxes, junction boxes, MC4 connectors, cable glands and complete BOS accessories for residential, commercial and utility-scale installations.",
  },
  {
    category: "Solar Products",
    question: "Are your products certified for industrial use?",
    answer:
      "All Ksquare products are manufactured to IS/IEC standards and are tested for industrial and utility-scale deployment, with IP-rated enclosures suited for harsh outdoor environments.",
  },
  {
    category: "Solar Solutions",
    question: "Do you provide installation services for homes?",
    answer:
      "Yes, through our network of certified EPC partners we offer end-to-end residential rooftop installation, from site survey and design to commissioning and after-sales support.",
  },
  {
    category: "Company",
    question: "How can distributors and dealers partner with Ksquare?",
    answer:
      "We welcome distributors, dealers and export partners across India and internationally. Reach out through our B2B distributorship program and our team will guide you through onboarding, pricing tiers and regional stocking support.",
  },
  {
    category: "Services & Support",
    question: "What is the typical warranty on Ksquare products?",
    answer:
      "Our distribution boxes and enclosures carry a standard manufacturer warranty, with extended warranty options available for large-scale and OEM orders. Contact our support team for product-specific terms.",
  },
  {
    category: "Locations",
    question: "Where are Ksquare's manufacturing facilities located?",
    answer:
      "Our primary manufacturing facility and head office are based in Ahmedabad, Gujarat, with branch offices supporting regional distribution and service across India.",
  },
];

const hero: HeroData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Resources" }, { label: "FAQs", href: "/faqs" }],
  title: "Frequently Asked *Questions*",
  description: "Find clear answers about KSquare Energy, our solar products, solutions, services and support.",
  ctas: [
    { label: "Explore Products", href: "/products/dcdb" },
    { label: "Contact Support", href: "/contact" },
  ],
  bannerGap: 199,
  cutout: { image: "/assets/faqs/hero_cutout_2.webp", x: 0, y: -159, w: 1800, h: 659 },
  imageAlt: "Rooftop solar panels on a modern building at sunset",
};

export default function FaqsPage() {
  return (
    <div className="w-full bg-white font-archivo">
      {/* 1. Hero: shared page-kit hero (Figma cutout photo overhangs the banner) */}
      <PageHero hero={hero} />

      <SectionSpacer size={80} />

      {/* 2. Popular Questions: Sidebar + Accordion */}
      <section className="w-full">
        <Container maxWidth="1800">
          <FaqCategoryList categories={categories} faqs={faqs} />
        </Container>
      </section>

      <SectionSpacer size={120} />

      {/* 3. Have a Technical Question CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="w-[1920px] max-w-full mx-auto relative min-h-[480px] max-xl:h-auto max-xl:py-16">
          {/* Background: same brand pattern + line illustration as the shared closing banner */}
          <div className="absolute inset-0 w-full h-full bg-[#2B398B]">
            <div className="absolute inset-0 -scale-x-100 opacity-60">
              <Image src="/assets/common/cta_bg_pattern.png" alt="" fill quality={100} sizes="100vw" className="object-cover" />
            </div>
          </div>

          {/* Decorative graphic (desktop only) */}
          <div className="hidden xl:block absolute right-0 top-[30.91px] w-[36.2%] max-w-[694.46px] aspect-[694.46/430.18] z-0 pointer-events-none">
            <Image src="/assets/common/cta_illustration_figma.svg" alt="" fill className="object-contain" aria-hidden="true" />
          </div>

          {/* Desktop content */}
          <div className="hidden xl:flex flex-col gap-[40px] relative z-10 px-[160px] py-[93px] w-full max-w-[1185px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="font-archivo text-[48px] lg:text-[60px] leading-[68px] text-white font-normal max-w-[1025px]">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
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
