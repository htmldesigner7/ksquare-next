import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/export-business";

export const page: PageData = {
  slug: "export-business",
  metaTitle: "Export Business Partnership | Ksquare Energy",
  metaDescription:
    "Become Ksquare Energy's authorized distribution partner in your region and establish reliable, long-term commercial solar supply directly from India.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Partners" }, { label: "Export Business" }],
    title: "Export Business *Partnership*",
    description:
      "Become Ksquare Energy's authorized distribution partner in your region. Establish reliable, long-term commercial solar supply directly from India.",
    ctas: [
      { label: "Apply for Export Partnership", href: ROUTES.contact },
      { label: "See What We Export", href: ROUTES.exportSolutions },
    ],
    crumbRow: true,
    bannerGap: 182,
    afterGap: 30,
    cutout: { image: `${IMG}/hero_full.webp`, x: -48, y: -266, w: 1849, h: 766 },
    imageAlt: "Ksquare export team shaking hands with an international distributor in a warehouse",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "split",
      natural: true,
      title: "Partnership vs. a *One-Time OEM Order*",
      paras: [
        "Need to source or import a single order? Our Export Solutions are designed for straightforward product sourcing, fulfillment, and export support without a long-term commitment.",
        "This page is for businesses looking to represent Ksquare in their region through an ongoing partnership, with consistent supply, market-specific support, and long-term access to our manufacturing capabilities.",
      ],
      stats: [
        { value: "100+", label: "Team Members" },
        { value: "10+", label: "Career Opportunities" },
        { value: "Growing", label: "Work Culture" },
      ],
      image: `${IMG}/included.webp`,
      imageAlt: "Ksquare export shipment being prepared",
    },
    {
      type: "cards",
      cols: 4,
      title: "What's Included in an *Export Partnership*",
      subtitle: "A structured programme for distributors who want dependable supply from India. Every partner gets regional rights, preferential pricing, technical support and a dedicated account manager.",
      items: [
        { title: "Regional Distribution Rights", desc: "Authorised representation of Ksquare in your region.", icon: "monitor" },
        { title: "Preferential Export Pricing", desc: "Partner pricing that improves with volume.", icon: "wrench" },
        { title: "Marketing & Technical Support", desc: "Catalogues, datasheets and training to help you sell.", icon: "cpu" },
        { title: "Dedicated Export Account Manager", desc: "One contact for orders, documentation and logistics.", icon: "handshake" },
      ],
    },
    {
      type: "cards",
      cols: 3,
      wideImage: true,
      title: "Who This *Partnership Is For*",
      items: [
        { title: "Solar Equipment Distributors", desc: "Distributors who want a dependable, certified BOS line from India.", image: `${IMG}/who_distributors.webp` },
        { title: "Importers & Trading Companies", desc: "Trading businesses sourcing certified solar components in volume.", image: `${IMG}/who_importers.webp` },
        { title: "Regional EPC Companies", desc: "EPCs who want direct supply of BOS components for their projects.", image: `${IMG}/who_epc.webp` },
      ],
    },
    {
      type: "accordion",
      tall: true,
      title: "Why International Partners *Choose Ksquare*",
      items: [
        { title: "Internationally Recognized Certifications", desc: "ISO 9001:2015, CE, BIS and RoHS compliant production." },
        { title: "Competitive India Manufacturing Cost Base", desc: "Manufacturer-direct pricing with India's cost advantages." },
        { title: "Consistent Supply Capacity", desc: "In-house fabrication and planned production for dependable supply." },
        { title: "Growing Global Brand", desc: "A growing Indian solar brand building its footprint worldwide." },
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Ksquare production line",
    },
    {
      type: "steps",
      title: "How It *Works*",
      items: [
        { title: "Application & Scope", desc: "Share your company profile, region and product interests.", icon: "file" },
        { title: "Commercial Review", desc: "We review fit, volumes and commercial terms.", icon: "handshake" },
        { title: "Sample Approval", desc: "Samples and certificates are shared for approval.", icon: "badge" },
        { title: "Onboarding Launch", desc: "Training, collateral and first orders are set up.", icon: "users" },
        { title: "Ongoing Management", desc: "A dedicated account manager supports repeat supply.", icon: "headset" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What's the difference between Export Solutions and the Export Business partnership?", a: "Export Solutions covers sourcing or importing products for a single order. Export Business is a formal, ongoing regional distribution partnership." },
        { q: "Do you offer exclusive distribution rights for a region or country?", a: "Territory options are discussed during the commercial review, depending on your market and volume plans." },
        { q: "What support is provided to export partners?", a: "Preferential pricing, marketing and technical support, and a dedicated export account manager." },
        { q: "Is there a minimum order commitment to become an export partner?", a: "Commitments are agreed in the partnership terms and depend on your market and product mix." },
        { q: "How are samples handled before a partnership is finalized?", a: "We share samples and certificates for your approval during the evaluation stage." },
        { q: "How long does it take to become an authorized export partner?", a: "It depends on how quickly terms and samples are agreed. We outline the schedule at the application stage." },
      ],
    },
    {
      type: "cta",
      title: "Ready To Represent *Ksquare In Your Region?*",
      desc: "Apply for the export partnership. Our export desk will respond with next steps within two business days.",
      ctas: [
        { label: "Apply for Export Partnership", href: ROUTES.contact },
      ],
    },
  ],
};
