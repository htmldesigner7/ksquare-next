"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";
import CtaBanner from "@/components/page-kit/CtaBanner";
import { footerHref, OWN_CTA_PREFIXES } from "@/content/routes";

interface FooterSection {
  subtitle: string | null;
  links: string[];
  isTitle?: boolean;
}

const COLUMN_WIDTHS = ["desk:w-[141px]", "desk:w-[160px]", "desk:w-[218px]", "desk:w-[168px]"];

const footerLinks: { title: string; sections: FooterSection[] }[] = [
  {
    title: "Products",
    sections: [
      { subtitle: "Core Products", links: ["DCDB", "ACDB", "Combiner Box", "Junction Box", "MC4 Connectors", "Cable Glands", "LT Panels", "ACDB / LT Panels", "Earthing Kits", "BOS Accessories"] },
      { subtitle: "Our Brands Product", links: ["Ksquare Panel", "Ksquare Inverter", "Solsquare", "Kenclozer", "Solplast"] },
    ],
  },
  {
    title: "Solutions",
    sections: [
      { subtitle: "Solar Solutions", links: ["Residential Solar", "Commercial Solar", "Industrial Solar", "Rooftop Solar", "Rooftop Solar for Flats"] },
      { subtitle: "Government Solutions", links: ["PM Surya Ghar", "Net Metering Support", "Subsidy Assistance"] },
      { subtitle: "Business Solution", links: ["EPC Solutions", "OEM Solution", "Export Solutions"] },
      { subtitle: "Services", links: ["Solar Consultation", "Remote Monitoring", "Annual Maintenance"] },
    ],
  },
  {
    title: "Resources",
    sections: [
      { subtitle: null, links: ["Blogs", "Case Studies", "Videos", "Downloads", "FAQs"] },
      { subtitle: "Projects", links: ["Residential Project", "Commercial Project", "Industrial Project", "Government Project"], isTitle: true },
      { subtitle: "Partners", links: ["Become a Partner", "OEM Partnership"], isTitle: true },
      { subtitle: "Manufacturing", links: ["Private Label Manufacturing", "Custom Product Development"], isTitle: true },
    ],
  },
  {
    title: "About Us",
    sections: [
      { subtitle: null, links: ["Company Profile", "Leadership Team", "Infrastructure", "Quality & Certifications", "Awards & Recognition", "News & Events", "CSR", "Grievance", "Press Releases", "Our Presence"] },
      { subtitle: "Quick Links", links: ["Careers", "Contact", "Track Solar Status", "Calculator"], isTitle: true },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  // We keep hasCTA true as per recent user request for uniform footer.
  // Blog detail pages embed their own narrower, column-scaled CTA per Figma
  // (nested inside the sidebar+article layout), so the global one is skipped there.
  // FAQs and Grievance already end with their own dedicated CTA ("Have a Technical
  // Question" / "Still Have a Concern?"), so skip the global one there too —
  // otherwise two CTA banners stack back-to-back.
  const hasCTA =
    pathname !== "/products/dcdb" &&
    !pathname.startsWith("/blog/") &&
    pathname !== "/faqs" &&
    pathname !== "/grievance" &&
    !OWN_CTA_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  return (
    <footer className="w-full bg-[#FFFFFF] font-archivo">
      
      {/* CTA Section */}
      {hasCTA && (
        <CtaBanner
          title="Get bulk pricing on *Solar BOS Components*"
          desc="Whether you need certified solar components, OEM manufacturing, or complete rooftop solar solutions, our team is ready to help."
          ctas={[
            { label: "Request a Quote", href: "/contact" },
            { label: "Talk to Our Experts", href: "/contact" },
          ]}
        />
      )}

      {/* Main Footer Links */}
      <div className="w-full bg-[#EDF3FF] overflow-x-clip">
        <Container maxWidth="1800">
          <div className="relative flex flex-col desk:flex-row desk:h-[631px] gap-[48px] desk:gap-0 py-[48px] desk:py-0">

            {/* Left Column: Company Info (Figma: x60 y60, 617 wide, divider lines at its edges) */}
            <div className="relative flex flex-col gap-[48px] shrink-0 desk:w-[clamp(460px,32.14vw,617px)] desk:mt-[60px] desk:pb-[20px] desk:self-start">
              <div className="flex flex-col gap-[24px]">
                <div className="relative w-[260px] h-[65px] desk:w-[367px] desk:h-[91px]">
                  <Image
                    src="/assets/logo.svg"
                    alt="Ksquare Energy Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="m-0 font-normal text-[15px] leading-[20px] text-[#666666]">
                  Ksquare has established itself across the country in a short span of 8 years due to commitment towards quality products and timely service.
                </p>
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="flex items-center gap-[11px]">
                    <Image src="/assets/footer/contact-mail.svg" alt="" width={18} height={14} aria-hidden="true" />
                    <a href="mailto:info@ksquareenergy.com" target="_blank" rel="noopener noreferrer" className="font-normal text-[15px] leading-[20px] text-[#666666] hover:text-[#2B398B] transition-colors py-[12px] -my-[12px] desk:py-0 desk:my-0 [overflow-wrap:anywhere]">info@ksquareenergy.com</a>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-[#2B398B] shrink-0" aria-hidden="true"><path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.56 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.24 5.7 3.44 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"/></svg>
                    <a href="tel:+917969697979" target="_blank" rel="noopener noreferrer" className="font-normal text-[15px] leading-[20px] text-[#666666] hover:text-[#2B398B] transition-colors py-[12px] -my-[12px] desk:py-0 desk:my-0 [overflow-wrap:anywhere]">+91 79 6969 7979</a>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" className="text-[#2B398B] shrink-0" aria-hidden="true"><path d="M8.5 0C3.8 0 0 3.8 0 8.5C0 14.9 8.5 20 8.5 20C8.5 20 17 14.9 17 8.5C17 3.8 13.2 0 8.5 0ZM8.5 11.5C6.8 11.5 5.5 10.2 5.5 8.5C5.5 6.8 6.8 5.5 8.5 5.5C10.2 5.5 11.5 6.8 11.5 8.5C11.5 10.2 10.2 11.5 8.5 11.5Z"/></svg>
                    <a href="https://www.google.com/maps/search/?api=1&query=B-403%2F404+Signature+2+Sarkhej+Sanand+Road+Sarkhej+Ahmedabad+382210" target="_blank" rel="noopener noreferrer" className="font-normal text-[15px] leading-[20px] text-[#666666] hover:text-[#2B398B] transition-colors py-[12px] -my-[12px] desk:py-0 desk:my-0 [overflow-wrap:anywhere]">B-403/404 Signature - 2 Sarkhej Sanand Road, Sarkhej, Ahmedabad - 382210.</a>
                  </div>
                </div>

                <div className="flex items-center gap-[16px]">
                  {[
                    { src: "/assets/footer/social-1.svg", label: "Facebook" },
                    { src: "/assets/footer/social-2.svg", label: "Instagram" },
                    { src: "/assets/footer/social-3.svg", label: "LinkedIn" },
                  ].map((s) => (
                    <Link key={s.label} href="#" target="_blank" rel="noopener noreferrer" aria-label={s.label} className="group relative block w-[32px] h-[32px] before:absolute before:-inset-[6px] before:content-[''] transition-transform duration-300 ease-out hover:-translate-y-[3px] hover:scale-110 focus-visible:-translate-y-[3px] focus-visible:scale-110">
                      <Image src={s.src} alt="" width={32} height={32} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0" />
                      <Image src={s.src.replace(".svg", "-hover.svg")} alt="" width={32} height={32} aria-hidden="true" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 drop-shadow-[0_4px_6px_rgba(43,57,139,0.35)]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider lines: horizontal one bleeds to the screen edge, vertical one spans the footer height */}
              <span aria-hidden="true" className="hidden desk:block absolute bottom-0 right-0 h-px w-[100vw] bg-[#C6CCED]" />
              <span aria-hidden="true" className="hidden desk:block absolute right-0 top-[-60px] h-[631px] w-px bg-[#C6CCED]" />
            </div>

            {/* Right Columns: Links (Figma: x717 y26.64, space-between) */}
            <div className="flex-1 grid grid-cols-2 w1100:grid-cols-4 gap-x-[20px] gap-y-[32px] sm:gap-[40px] desk:flex desk:justify-between desk:gap-[24px] desk:ml-[40px] desk:mt-[26.64px] desk:items-start">
              {footerLinks.map((col, idx) => (
                <div key={idx} className={`flex flex-col gap-[16px] min-w-0 desk:shrink-0 ${COLUMN_WIDTHS[idx]}`}>
                  <h4 className="font-semibold text-[18px] leading-[26px] text-[#2B398B] m-0 whitespace-nowrap">
                    {col.title}
                  </h4>
                  <div className={`flex flex-col gap-[16px] ${col.sections[0].subtitle === null ? "-mt-[4px]" : ""}`}>
                    {col.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-[12px]">
                        {sec.subtitle && (
                          <h5 className={`m-0 whitespace-nowrap ${sec.isTitle ? "font-semibold text-[18px] leading-[26px] text-[#2B398B]" : "font-medium text-[16px] leading-[20px] text-[#333333]"}`}>
                            {sec.subtitle}
                          </h5>
                        )}
                        <ul className="flex flex-col gap-0 desk:gap-[8px] m-0 p-0 list-none">
                          {sec.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link href={footerHref(link)} className="font-normal text-[15px] leading-[20px] text-[#666666] hover:text-[#2B398B] flex items-center gap-[8px] min-h-[44px] desk:min-h-0 group transition-all duration-200 hover:translate-x-[3px] whitespace-nowrap max-sm:whitespace-normal">
                                <span className="flex items-center justify-center w-[13.61px] h-[13.47px] shrink-0">
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#2B398B]" aria-hidden="true">
                                    <path d="M0.000239918 0.000142582L9.3432 4.8189L0.740279 10.0002L3.45619 5.22508L0.000239918 0.000142582Z" fill="currentColor"/>
                                  </svg>
                                </span>
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Bar (Figma: line at y631, text row 1800 wide, 15/20) */}
      <div className="w-full border-t border-[#C6CCED] bg-[#EDF3FF]">
        <Container maxWidth="1800">
          <div className="w-full py-[24.5px] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[16px] font-normal text-[15px] leading-[20px] text-[#666666]">
            <span>© 2026 Ksquare Energy India. All rights reserved.</span>
            <div className="flex items-center gap-[16px]">
              <Link href="#" className="hover:text-[#2B398B] transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#2B398B] transition-colors">Terms of Service</Link>
            </div>
            <span>
              Design & Develop By <Link href="#" className="inline-block py-[10px] -my-[10px] hover:text-[#2B398B] transition-colors">Intelliworkz Business Solutions Pvt. Ltd.</Link>
            </span>
          </div>
        </Container>
      </div>

    </footer>
  );
}
