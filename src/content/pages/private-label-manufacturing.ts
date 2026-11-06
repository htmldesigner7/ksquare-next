import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/private-label";
const PRODUCTS = "/assets/pages/epc";

export const page: PageData = {
  slug: "private-label-manufacturing",
  metaTitle: "Private Label Solar Component Manufacturing | Ksquare Energy",
  metaDescription:
    "Sell solar BOS components under your own brand, manufactured entirely in Ksquare's facility with your logo, documentation and packaging.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Manufacturing" }, { label: "Private Label Manufacturing" }],
    title: "Private Label Solar *Component Manufacturing*",
    description: "Sell solar BOS components under your own brand, manufactured entirely in our facility.",
    ctas: [
      { label: "Start Your Private Label Enquiry", href: ROUTES.contact },
      { label: "Talk to Our OEM Team", href: ROUTES.oemPartnership },
    ],
    fitTitle: true,
    titleWidth: 901,
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -141, w: 1800, h: 641 },
    imageAlt: "Engineers reviewing branded solar components",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "brandSwap",
      title: "Your Brand, Our Manufacturing *Nothing Else Changes*",
      paras: [
        "Private label manufacturing lets you sell selected solar BOS products under your own brand while Ksquare handles the manufacturing process. Your approved product specification remains the foundation. Branding elements such as the nameplate, packaging, documentation and warranty materials can be developed around your brand requirements.",
        "If you need changes to the underlying product specification, the requirement moves into a custom product development discussion.",
      ],
      cta: { label: "Learn about Custom Product Development", href: ROUTES.customDevelopment },
      panel: [
        { tag: "KSQUARE STANDARD", caption: "KSQUARE Laser-Engraved Plate", image: `${IMG}/plate_ksquare.webp` },
        { tag: "YOUR BRAND", caption: "Your Custom Laser Nameplate", image: `${IMG}/plate_custom.webp` },
      ],
      note: "Identical Tier-1 Specification, Internal Busbars, Surge Cartridges & Circuitry",
    },
    {
      type: "cards",
      cols: 4,
      fit: "contain",
      title: "Products Available *for Private Label*",
      items: [
        { title: "Solar DCDB", desc: "DC distribution boxes for string-level protection and isolation.", image: `${PRODUCTS}/p_dcdb.webp`, href: ROUTES.dcdb },
        { title: "Solar ACDB", desc: "AC distribution with NVR protection, RYB indication available.", image: `${PRODUCTS}/p_acdb.webp`, href: ROUTES.dcdb },
        { title: "Combiner Boxes", desc: "Multi-string combiners for utility and commercial-scale arrays.", image: `${PRODUCTS}/p_combiner.webp`, href: ROUTES.dcdb },
        { title: "Junction Boxes", desc: "Array junction boxes with monitoring-ready terminal layouts.", image: `${PRODUCTS}/p_junction.webp`, href: ROUTES.dcdb },
        { title: "Solar Cables", desc: "Single-core DC cables engineered for outdoor UV exposure.", image: `${PRODUCTS}/p_cables.webp`, href: ROUTES.dcdb },
        { title: "Kenclozer Enclosures", desc: "Polycarbonate enclosures for indoor and outdoor installation.", image: `${PRODUCTS}/p_kenclozer.webp`, href: ROUTES.dcdb },
        { title: "MC4 Connectors", desc: "Locking connectors rated for continuous outdoor duty.", image: `${PRODUCTS}/p_mc4.webp`, href: ROUTES.dcdb },
        { title: "Earthing Kits", desc: "Complete grounding kits for module frames and mounting structures.", image: `${PRODUCTS}/p_earthing.webp`, href: ROUTES.dcdb },
      ],
    },
    {
      type: "brandCallouts",
      title: "What You *Can Brand*",
      subtitle: "Every customer-facing touchpoint carries your identity, not ours.",
      image: `${IMG}/brand.webp`,
      imageAlt: "Branded solar product packaging",
      items: [
        { title: "User Manuals & Documentation", desc: "Installation guides, connection pinouts, and single-line schematics carry your corporate identity throughout." },
        { title: "Warranty Card Branding", desc: "Statutory warranty documentation, compliance certificates, and serial tracking issued exclusively under your company name." },
        { title: "Logo & Nameplate", desc: "Your brand mark replaces ours on the product enclosure, silk-screening, and laser-engraved spec plate." },
        { title: "Packaging Design", desc: "Outer corrugated shipping box is printed with your logos, custom pallet labels, part numbers, and barcoding." },
      ],
    },
    {
      type: "accordion",
      tall: true,
      title: "Why Partner With *Ksquare*",
      items: [
        { title: "100% In-House Fabrication", desc: "Sheet metal, powder coating, wiring and assembly happen in our own facility, so quality and timelines stay in our control." },
        { title: "Certifications Transfer", desc: "Your products are built to the same certified standard as Ksquare's own range." },
        { title: "Flexible Order Volumes", desc: "From pilot batches to container loads, orders scale with your brand." },
        { title: "Consistent Quality Control", desc: "Every unit passes the same electrical tests and inspections before dispatch." },
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Ksquare production line",
    },
    {
      type: "cards",
      cols: 4,
      title: "Built for Brands That *Don't Manufacture*",
      items: [
        { title: "Solar Distributors", desc: "Add a house brand to your portfolio with better margins.", icon: "truck" },
        { title: "Retailers & E-Commerce", desc: "Sell branded BOS products through your own channels.", icon: "package" },
        { title: "Regional Installers", desc: "Standardise on your own branded BOS for every installation.", icon: "wrench" },
        { title: "International Importers", desc: "Build an Indian-manufactured line under your name.", icon: "globe" },
      ],
    },
    {
      type: "steps",
      title: "From Brand Brief to *Branded Dispatch*",
      items: [
        { title: "Brand & Spec Discussion", desc: "Share your brand assets, product list and specifications.", icon: "clipboard" },
        { title: "Branded Sample", desc: "We produce a branded sample for your review.", icon: "package" },
        { title: "Sample Approval", desc: "You approve the sample before production begins.", icon: "badge" },
        { title: "Production & QC", desc: "Production on our lines with full quality checks.", icon: "factory" },
        { title: "Packaging & Dispatch", desc: "Branded packaging, labelling and dispatch.", icon: "truck" },
      ],
    },
    {
      type: "split",
      natural: true,
      title: "Order Volumes *& Timelines*",
      paras: [
        "Every private-label programme is different. There is no single MOQ or production timeline across the complete private-label range. Requirements are determined by the selected product, branding scope, order specification and production requirements.",
        "For BOS Components, Enclosures, and Cables & Accessories, applicable minimum order quantities, sample timelines and bulk production timelines are confirmed at enquiry stage.",
        "Our OEM team reviews your requirements and provides the applicable commercial and production guidance before order confirmation.",
      ],
      image: "/assets/pages/subsidy/included.webp",
      imageAlt: "Ksquare team discussing order requirements",
      cta: { label: "Discuss Your Requirements", href: ROUTES.contact },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What is the minimum order quantity for private label manufacturing?", a: "MOQs vary by product category and are confirmed at the enquiry stage. Tell us your requirement and we'll respond with exact numbers." },
        { q: "Will there be any Ksquare branding on the final product?", a: "No. Your logo, nameplate, documentation and packaging replace ours, so customers see only your brand." },
        { q: "Do private label products carry the same certifications as Ksquare's own products?", a: "They are built to the same certified specification. Share the certifications your market requires and we'll confirm what applies." },
        { q: "Can I change the product specification, not just the branding?", a: "Minor electrical changes are possible. For larger changes, see our Custom Product Development service." },
        { q: "How long does it take to receive a sample with our branding?", a: "Sample timelines depend on the product and branding complexity. We share an indicative schedule at enquiry." },
        { q: "Can international brands use this service?", a: "Yes. We support export-grade packaging, documentation and logistics for international brands." },
      ],
    },
    {
      type: "cta",
      title: "Ready To Launch Your *Own Branded Solar Line?*",
      desc: "Tell us about your brand and products. Our OEM team will respond with feasibility, pricing and an indicative timeline.",
      ctas: [
        { label: "Start Your Private Label Enquiry", href: ROUTES.contact },
      ],
    },
  ],
};
