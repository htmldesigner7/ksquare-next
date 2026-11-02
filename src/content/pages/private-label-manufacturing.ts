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
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 216, y: -141, w: 1373, h: 641 },
    imageAlt: "Engineers reviewing branded solar components",
  },
  sections: [
    {
      type: "cards",
      cols: 2,
      title: "Your Brand, Our Manufacturing: *Nothing Else Changes*",
      subtitle:
        "Private label manufacturing lets you sell selected solar BOS products under your own brand while Ksquare handles the manufacturing process. Your approved product specification stays identical to our certified standard build.",
      items: [
        { title: "KSQUARE STANDARD · Laser-Engraved Plate", desc: "The standard Ksquare nameplate on our certified catalogue product.", image: `${IMG}/plate_ksquare.webp` },
        { title: "YOUR BRAND · Custom Laser Nameplate", desc: "Your brand mark replaces ours. Identical tier-1 specification, internal busbars, surge cartridges and circuitry.", image: `${IMG}/plate_custom.webp` },
      ],
      fit: "contain",
    },
    {
      type: "cards",
      cols: 4,
      fit: "contain",
      title: "Products Available *for Private Label*",
      items: [
        { title: "Solar DCDB", desc: "DC distribution boxes for string-level protection and isolation.", image: `${PRODUCTS}/p_dcdb.webp` },
        { title: "Solar ACDB", desc: "AC distribution with NVR protection, RYB indication available.", image: `${PRODUCTS}/p_acdb.webp` },
        { title: "Combiner Boxes", desc: "Multi-string combiners for utility and commercial-scale arrays.", image: `${PRODUCTS}/p_combiner.webp` },
        { title: "Junction Boxes", desc: "Array junction boxes with monitoring-ready terminal layouts.", image: `${PRODUCTS}/p_junction.webp` },
        { title: "Solar Cables", desc: "Single-core DC cables engineered for outdoor UV exposure.", image: `${PRODUCTS}/p_cables.webp` },
        { title: "Kenclozer Enclosures", desc: "Polycarbonate enclosures for indoor and outdoor installation.", image: `${PRODUCTS}/p_kenclozer.webp` },
        { title: "MC4 Connectors", desc: "Locking connectors rated for continuous outdoor duty.", image: `${PRODUCTS}/p_mc4.webp` },
        { title: "Earthing Kits", desc: "Complete grounding kits for module frames and mounting structures.", image: `${PRODUCTS}/p_earthing.webp` },
      ],
    },
    {
      type: "accordion",
      title: "What You Can *Brand*",
      subtitle: "Every customer-facing touchpoint carries your identity, not ours.",
      items: [
        { title: "Logo & Nameplate", desc: "Your brand mark replaces ours on the product enclosure, silk-screening and laser-engraved spec plate." },
        { title: "User Manuals & Documentation", desc: "Installation guides, connection pinouts and single-line schematics carry your corporate identity throughout." },
        { title: "Warranty Card Branding", desc: "Statutory warranty documentation, compliance certificates and serial tracking issued exclusively under your company name." },
        { title: "Packaging Design", desc: "Outer shipping boxes are printed with your logos, custom pallet labels, part numbers and barcoding." },
      ],
      image: `${IMG}/brand.webp`,
      imageAlt: "Branded solar product packaging",
    },
    {
      type: "accordion",
      reverse: true,
      title: "Why Partner *With Ksquare*",
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
      title: "From Brand Brief *to Branded Dispatch*",
      items: [
        { title: "Brand & Spec Discussion", desc: "Share your brand assets, product list and specifications.", icon: "clipboard" },
        { title: "Branded Sample", desc: "We produce a branded sample for your review.", icon: "package" },
        { title: "Sample Approval", desc: "You approve the sample before production begins.", icon: "badge" },
        { title: "Production & QC", desc: "Production on our lines with full quality checks.", icon: "factory" },
        { title: "Packaging & Dispatch", desc: "Branded packaging, labelling and dispatch.", icon: "truck" },
      ],
    },
    {
      type: "dark",
      title: "Order Volumes & *Timelines*",
      desc: "Every private-label programme is different. There is no single MOQ or production timeline across the complete private-label range. Requirements are determined by the selected products, level of customisation and your market.",
      bgImage: "/assets/img_partner_bg.png",
      ctas: [{ label: "Discuss Your Requirements", href: ROUTES.contact }],
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
      title: "Ready to Launch Your *Own Branded Solar Line?*",
      desc: "Tell us about your brand and products. Our OEM team will respond with feasibility, pricing and an indicative timeline.",
      ctas: [
        { label: "Start Your Private Label Enquiry", href: ROUTES.contact },
      ],
    },
  ],
};
