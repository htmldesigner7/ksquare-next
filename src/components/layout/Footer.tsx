"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";

interface FooterSection {
  subtitle: string | null;
  links: string[];
  isTitle?: boolean;
}

const footerLinks: { title: string; sections: FooterSection[] }[] = [
  {
    title: "Products",
    sections: [
      {
        subtitle: "Core Products",
        links: ["DCDB", "ACDB", "Combiner Box", "Junction Box", "Zero Export Device", "Solar Cables", "MC4 Connectors"]
      },
      {
        subtitle: "Enclosures",
        links: ["Kenclozer", "Custom Enclosures"]
      }
    ]
  },
  {
    title: "Solutions",
    sections: [
      {
        subtitle: "Segment Solutions",
        links: ["Residential Solar", "Commercial Solar", "Industrial Solar"]
      },
      {
        subtitle: "Government Solutions",
        links: ["PM Surya Ghar", "Net Metering Support", "Subsidy Assistance"]
      },
      {
        subtitle: "Business Solution",
        links: ["EPC Solutions", "OEM Solution", "Export Solutions"]
      },
      {
        subtitle: "Services",
        links: ["Solar Consultation", "Remote Monitoring", "Annual Maintenance"]
      }
    ]
  },
  {
    title: "Resources",
    sections: [
      { subtitle: null, links: ["Blogs", "Case Studies", "Videos", "FAQs"] },
      { subtitle: "Projects", links: ["Residential Project", "Commercial Project", "Industrial Project", "Government Project"], isTitle: true },
      { subtitle: "Partners", links: ["Become a Partner", "OEM Partnership", "Export Business"], isTitle: true },
      { subtitle: "Manufacturing", links: ["Private Label Manufacturing", "Custom Product Development"], isTitle: true }
    ]
  },
  {
    title: "About Us",
    sections: [
      { subtitle: null, links: ["Company Profile", "Leadership Team", "Infrastructure", "Quality & Certifications", "Awards & Recognition", "News & Events", "CSR", "Grievance", "Press Releases", "Our Presence"] },
      { subtitle: "Quick Links", links: ["Careers", "Contact", "Track Solar Status", "Calculator"], isTitle: true }
    ]
  }
];

export default function Footer() {
  const pathname = usePathname();
  // We keep hasCTA true as per recent user request for uniform footer.
  // We can easily revert this to pathname !== "/products/dcdb" if needed.
  const hasCTA = pathname !== "/products/dcdb";

  return (
    <footer className="w-full bg-[#FFFFFF] font-archivo">
      
      {/* CTA Section */}
      {hasCTA && (
        <div className="w-full bg-[#2B398B] py-[80px] lg:py-[120px]">
          <Container maxWidth="1600">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-jost font-normal text-[40px] md:text-[60px] text-[#FFFFFF] leading-[1.1] max-w-[1025px]">
                Get bulk pricing on Solar BOS Components
              </h2>
              <p className="font-normal text-[16px] md:text-[17px] text-[#FFFFFF] max-w-[1025px]">
                Whether you need certified solar components, OEM manufacturing, or complete rooftop solar solutions, our team is ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[16px] mt-[32px]">
                <Link 
                  href="/quote"
                  className="w-full sm:w-[209px] h-[58px] bg-[#FFFFFF] hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <span className="font-normal text-[17px] text-[#2B398B]">Request a Quote</span>
                </Link>
                
                <Link 
                  href="/contact"
                  className="w-full sm:w-[241px] h-[58px] border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#2B398B] transition-colors flex items-center justify-center group"
                >
                  <span className="font-normal text-[17px] text-[#FFFFFF] group-hover:text-[#2B398B] transition-colors">Talk to Our Experts</span>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="w-full py-[60px] lg:py-[100px]">
        <Container maxWidth="1600">
          <div className="flex flex-col xl:flex-row justify-between gap-[60px]">
            
            {/* Left Column: Company Info */}
            <div className="flex flex-col gap-[32px] xl:w-[450px] shrink-0">
              <div className="relative w-[300px] h-[75px]">
                <Image 
                  src="/assets/logo.svg" 
                  alt="Ksquare Energy Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
              
              <p className="font-normal text-[15px] text-[#666666] leading-[1.6]">
                Ksquare has established itself across the country in a short span of 8 years due to commitment towards quality products and timely service.
              </p>
              
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[12px]">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" className="text-[#666666]"><path d="M18 2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H16C17.1 14 18 13.1 18 12V2ZM16 2L9 6.375L2 2H16ZM16 12H2V4L9 8.375L16 4V12Z" /></svg>
                  <a href="mailto:info@ksquareenergy.com" className="font-normal text-[15px] text-[#666666] hover:text-[#2B398B] transition-colors">info@ksquareenergy.com</a>
                </div>
                
                <div className="flex items-center gap-[12px]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-[#666666]"><path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.56 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.24 5.7 3.44 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"/></svg>
                  <a href="tel:+917969697979" className="font-normal text-[15px] text-[#666666] hover:text-[#2B398B] transition-colors">+91 79 6969 7979</a>
                </div>
                
                <div className="flex items-start gap-[12px]">
                  <svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" className="text-[#666666] mt-1"><path d="M8.5 0C3.8 0 0 3.8 0 8.5C0 14.9 8.5 20 8.5 20C8.5 20 17 14.9 17 8.5C17 3.8 13.2 0 8.5 0ZM8.5 11.5C6.8 11.5 5.5 10.2 5.5 8.5C5.5 6.8 6.8 5.5 8.5 5.5C10.2 5.5 11.5 6.8 11.5 8.5C11.5 10.2 10.2 11.5 8.5 11.5Z"/></svg>
                  <span className="font-normal text-[15px] text-[#666666]">B-403/404 Signature - 2 Sarkhej Sanand Road, Sarkhej, Ahmedabad - 382210.</span>
                </div>
              </div>
              
              <div className="flex items-center gap-[16px]">
                <Link href="#" className="w-[32px] h-[32px] bg-[#F2F2F2] flex items-center justify-center hover:bg-[#2B398B] group transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#666666] group-hover:text-white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
                <Link href="#" className="w-[32px] h-[32px] bg-[#F2F2F2] flex items-center justify-center hover:bg-[#2B398B] group transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#666666] group-hover:text-white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </Link>
                <Link href="#" className="w-[32px] h-[32px] bg-[#F2F2F2] flex items-center justify-center hover:bg-[#2B398B] group transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#666666] group-hover:text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
              </div>
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden xl:block w-[1px] bg-[#E5E5E5] self-stretch mx-[20px]"></div>

            {/* Right Columns: Links */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] xl:gap-[20px] 2xl:gap-[40px]">
              {footerLinks.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-[24px]">
                  <h4 className="font-semibold text-[18px] text-[#2B398B]">
                    {col.title}
                  </h4>
                  <div className="flex flex-col gap-[28px]">
                    {col.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-[16px]">
                        {sec.subtitle && (
                          <h5 className={sec.isTitle ? 'font-semibold text-[18px] text-[#2B398B]' : 'font-medium text-[16px] text-[#333333]'}>
                            {sec.subtitle}
                          </h5>
                        )}
                        <ul className="flex flex-col gap-[12px]">
                          {sec.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link href="#" className="font-normal text-[15px] text-[#666666] hover:text-[#2B398B] flex items-center gap-[8px] group transition-colors">
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E5E5E5] group-hover:text-[#2B398B] transition-colors shrink-0">
                                  <path d="M0 0L10 6L0 12L3.5 6L0 0Z" fill="currentColor"/>
                                </svg>
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

      {/* Bottom Bar */}
      <div className="w-full border-t border-[#E5E5E5]">
        <Container maxWidth="1600">
          <div className="w-full py-[24px] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[16px] font-normal text-[14px] md:text-[15px] text-[#666666]">
            <span>© 2026 Ksquare Energy India. All rights reserved.</span>
            <div className="flex items-center gap-[16px]">
              <Link href="#" className="hover:text-[#2B398B] transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#2B398B] transition-colors">Terms of Service</Link>
            </div>
            <span>
              Design & Develop By <Link href="#" className="hover:text-[#2B398B] transition-colors">Intelliworkz Business Solutions Pvt. Ltd.</Link>
            </span>
          </div>
        </Container>
      </div>
      
    </footer>
  );
}
