import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/certifications";

export const page: PageData = {
  slug: "certifications",
  metaTitle: "Certifications & Compliance | Ksquare Energy",
  metaDescription:
    "Explore Ksquare Energy's certifications, testing documentation, licences and product compliance records.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "Quality & Certifications" }],
    title: "Certifications & *Compliance*",
    bannerGap: 201,
    description: "Explore Ksquare Energy's certifications, testing documentation, licenses and product compliance records.",
    ctas: [
      { label: "Get in Touch", href: ROUTES.contact },
      { label: "Talk to Our Experts", href: ROUTES.consultation },
    ],
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -166, w: 1800, h: 666 },
    imageAlt: "Ksquare team holding a certification",
  },
  sections: [
    {
      type: "gallery",
      id: "certificates",
      title: "Browse *Certifications*",
      categories: ["All Certifications", "Earthing Kit", "Goldi Certificates", "BIS Certificate", "EWE", "Others"],
      subtitle: "Test reports, licences and approvals supporting the quality of the products we build and supply. Select a document to view it in full.",
      items: [
        { title: "Fraunhofer ISE test report", category: "Goldi Certificates", image: `${IMG}/cert_1.webp` },
        { title: "SMSW Lab PV module PAN file test report (IEC 61853-1)", category: "Goldi Certificates", image: `${IMG}/cert_2.webp` },
        { title: "MNRE ALMM office memorandum", category: "Others", image: `${IMG}/cert_3.webp` },
        { title: "BIS licence for crystalline silicon PV modules", category: "BIS Certificate", image: `${IMG}/cert_4.webp` },
        { title: "BIS inclusion of additional models", category: "BIS Certificate", image: `${IMG}/cert_5.webp` },
        { title: "SMSW Lab PID test certificate", category: "Goldi Certificates", image: `${IMG}/cert_6.webp` },
        { title: "ICAS test verification of conformity (IEC 62716)", category: "Goldi Certificates", image: `${IMG}/cert_7.webp` },
        { title: "Goldi Solar module datasheet", category: "Goldi Certificates", image: `${IMG}/cert_8.webp` },
      ],
    },
    {
      type: "split",
      title: "Manufacturing And *Quality*",
      paras: [
        "Compliance is built into every step of Ksquare's production process. Ksquare Energy operates a world-class production system, equipped with high-tier automatic assembly stations, testing chambers, and rigorous process audits.",
        "Our in-house research and diagnostic laboratories ensure every custom ACDB, DCDB and smart inverter component easily exceeds localized compliance guidelines before shipping out to grid operators.",
      ],
      image: `${IMG}/quality.webp`,
      imageAlt: "Quality inspection in the Ksquare factory",
      cta: { label: "Explore Infrastructure", href: ROUTES.infrastructure },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What certifications does Ksquare Energy hold?", a: "Our facility is ISO 9001:2015 certified, and our products are manufactured to CE, BIS and RoHS requirements. Test reports and licences are listed on this page." },
        { q: "Where can I view Ksquare's compliance documents?", a: "Browse the certification gallery above, or visit the Download Resources page for datasheets and compliance documents." },
        { q: "What product testing documentation is available?", a: "Independent laboratory test reports, BIS licences and conformity verifications are available, and more can be provided on request." },
        { q: "Are Ksquare products listed on ALMM?", a: "The MNRE ALMM memorandum is part of the documentation shown here. Please contact us for the listing status of a specific product or model." },
        { q: "How can I request specific technical documentation?", a: "Contact our team with the product and the document you need and we'll share it, including project-specific compliance records." },
      ],
    },
    {
      type: "cta",
      title: "Need a Compliance *Document?*",
      desc: "Tell us which certificate, test report or datasheet you need and our team will share it.",
      ctas: [
        { label: "Get in Touch", href: ROUTES.contact },
        { label: "Download Resources", href: ROUTES.downloads },
      ],
    },
  ],
};
