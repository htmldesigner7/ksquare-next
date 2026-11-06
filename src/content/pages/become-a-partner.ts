import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { OFFICE } from "@/content/offices";

const IMG = "/assets/pages/partner";

export const page: PageData = {
  slug: "become-a-partner",
  metaTitle: "Become a Ksquare Energy Partner | Distributor, OEM, Export & EPC",
  metaDescription:
    "Join India's growing network of solar component distributors, dealers and manufacturing partners. Source directly from Ksquare's Ahmedabad facility.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Partners" }, { label: "Become a Partner" }],
    title: "Become a Ksquare *Energy Partner*",
    description:
      "Join India's growing network of solar component distributors, dealers, and manufacturing partners. Leverage our state-of-the-art manufacturing facility in Ahmedabad to drive growth in your region.",
    ctas: [
      { label: "Apply as a Partner", href: "#apply" },
      { label: "Download Brochure", href: ROUTES.downloads },
    ],
    crumbRow: true,
    bannerGap: 171,
    afterGap: 50,
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -203, w: 1800, h: 703 },
    imageAlt: "Ksquare partner team on a rooftop solar project",
  },
  sectionPadding: 50,
  faqBottom: 50,
  endGap: 531,
  sections: [
    {
      type: "cards",
      cols: 4,
      compactHead: true,
      title: "Choose Your *Ksquare Partnership Track*",
      subtitle: "We align with partners at every tier of the solar infrastructure supply chain. Select the model that matches your business capabilities.",
      items: [
        { title: "Distributor & Dealer", desc: "Become an authorized distributor or retail dealer for Ksquare solar components in your region. Secure exclusive territories and marketing support.", icon: "handshake", href: "#apply", linkLabel: "Apply Now" },
        { title: "OEM Partnership", desc: "Build a long-term manufacturing partnership with dedicated capacity, co-development support, and custom product designs from our engineering team.", icon: "factory", href: ROUTES.oemPartnership, linkLabel: "Learn More" },
        { title: "Export Partnership", desc: "Represent Ksquare as an authorized distribution partner in your international market, backed by global quality certifications (CE, RoHS).", icon: "globe", href: ROUTES.exportBusiness, linkLabel: "Learn More" },
        { title: "EPC Empanelment", desc: "Register as an empanelled EPC contractor with priority access to Ksquare's product supply chain, premium BOS accessories, and direct pricing.", icon: "building", href: ROUTES.epc, linkLabel: "Learn More" },
      ],
    },
    {
      type: "split",
      tight: true,
      title: "Why Businesses *Partner With Ksquare*",
      paras: [
        "No middlemen. Source directly from Ksquare's state-of-the-art manufacturing facility in Ahmedabad for maximum profitability. Co-branded marketing materials, digital collateral, and qualified regional lead sharing to accelerate your local sales pipeline.",
        "Comprehensive product training sessions and dedicated ongoing engineering assistance for complex solar commercial projects. Partner with an industry name trusted by major EPCs, OEMs, and distributors.",
      ],
      stats: [
        { value: "8+", label: "Years of Experience" },
        { value: "18k", label: "Sq. Ft. Facility" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team at an awards ceremony",
    },
    {
      type: "numbered",
      title: "What Authorized *Partners Get*",
      subtitle: "We empower our network with technical, operational, and commercial resources designed to build long-term business equity.",
      items: [
        { title: "Bulk Preferential Pricing", desc: "Access competitive, tier-structured volume pricing across our entire range of ACDBs, DCDBs, and combiner boxes." },
        { title: "Co-Branded Marketing Support", desc: "Receive customized, localized brochures, technical spec sheets, and digital assets tailored to your market." },
        { title: "Dedicated Partner Manager", desc: "Work with a single point of contact for priority fulfillment, logistics coordination, and specialized support." },
        { title: "Fast-Track Engineering Access", desc: "Direct access to our core design and manufacturing engineering teams for custom system specifications." },
      ],
    },
    {
      type: "accordion",
      tone: "soft",
      tall: true,
      title: "Who We *Partner With*",
      subtitle: "We are expanding our network across key regions in India. We look for businesses with strong local footprints and operational integrity.",
      items: [
        { title: "Solar & Electrical Distributors", desc: "Regional distributors with warehousing and a dealer network who can stock and supply Ksquare BOS components." },
        { title: "Hardware & Electrical Retailers", desc: "Retail counters serving installers and electricians who want certified solar components on the shelf." },
        { title: "EPC Contracting Companies", desc: "EPC firms that need dependable, manufacturer-direct supply for their project pipeline." },
        { title: "Subsidy & Portal Assistance Providers", desc: "Consultants who help homeowners with subsidy applications and national portal registration." },
      ],
      image: `${IMG}/who.webp`,
      imageAlt: "Engineers surveying a residential rooftop",
    },
    {
      type: "steps",
      title: "How to Become *a Partner*",
      subtitle: "A transparent, 5-stage roadmap from application to your first stocking order.",
      items: [
        { title: "Apply Online", desc: "Submit your basic business profile and region details via our secure application form.", icon: "file" },
        { title: "Territory Review", desc: "Our team assesses market viability and maps regional territory exclusivity options.", icon: "pin" },
        { title: "Agreement & Terms", desc: "Finalize standard commercial terms, pricing tiers, and direct supply logistics schedules.", icon: "handshake" },
        { title: "Onboarding & Training", desc: "Get equipped with product technical manuals, sales collaterals, and system training.", icon: "users" },
        { title: "Start Transacting", desc: "Place your initial stocking order and launch Ksquare components in your territory.", icon: "truck" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Who can apply to become a Ksquare partner?", a: "Distributors, dealers, EPC companies, installers, OEM brands and export partners with a strong local presence and operational track record." },
        { q: "Are exclusive territories available?", a: "Territory options are assessed during the territory review stage based on market viability and existing coverage." },
        { q: "Is there a minimum stocking order?", a: "Initial stocking requirements depend on your track and product mix and are confirmed in the commercial terms." },
        { q: "What support do partners receive?", a: "Tier-based pricing, co-branded collateral, product training, a dedicated partner manager and fast-track access to our engineers." },
        { q: "How long does onboarding take?", a: "Once your application is approved and terms are agreed, onboarding and training are scheduled with your partner manager." },
        { q: "Can I partner for export markets?", a: "Yes. Our export partnership track is open to businesses outside India who want to represent Ksquare in their market." },
      ],
    },
    {
      type: "form",
      id: "apply",
      kind: "partner",
      title: "Ready to Grow Your Business *With Ksquare?*",
      subtitle:
        "Apply now to join India's growing network of Ksquare Energy partners. Gain access to premium quality manufacturing, technical training, and co-branded marketing assets.",
      office: OFFICE,
    },
  ],
};
