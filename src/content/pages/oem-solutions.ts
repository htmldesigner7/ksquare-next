import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/oem";
const PRODUCTS = "/assets/pages/epc";

export const page: PageData = {
  slug: "oem-solutions",
  metaTitle: "OEM & White-Label Solar Manufacturing | Ksquare Energy",
  metaDescription:
    "Launch your own branded solar BOS product line, manufactured to your specification in Ksquare's Ahmedabad facility with certified quality and flexible order volumes.",
  hero: {
    crumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Solutions" },
      { label: "Business Solution" },
      { label: "OEM Solutions" },
    ],
    title: "OEM & White-Label *Solar Manufacturing*",
    description: "Launch your own branded solar BOS product line, manufactured to your specification in our own facility.",
    ctas: [
      { label: "Discuss Your OEM Requirement", href: ROUTES.oemPartnership },
      { label: "Download OEM Capability Sheet", href: ROUTES.downloads },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: -13, y: -198, w: 1813, h: 705 },
    imageAlt: "Solar manufacturing engineers inspecting components",
  },
  sections: [
    {
      type: "cards",
      cols: 4,
      title: "Why Partner With Ksquare *for OEM Manufacturing*",
      items: [
        { title: "Manufacturer-Direct Pricing", desc: "Work directly with the factory, with no trading layers between your brand and the product.", icon: "rupee" },
        { title: "Certifications Transferable", desc: "Products are built in an ISO / CE / BIS / RoHS compliant facility, supporting your brand's own approvals.", icon: "badge" },
        { title: "Flexible Order Volumes", desc: "Start with pilot batches and scale to container loads as your brand grows.", icon: "layers" },
        { title: "Engineering & Design Support", desc: "Our engineers help you finalise electrical specifications, enclosures and layouts.", icon: "settings" },
      ],
    },
    {
      type: "cards",
      cols: 4,
      fit: "contain",
      title: "What We Manufacture *Under OEM / White Label*",
      subtitle: "Choose from our certified BOS range and have it built to your brand, labelling and electrical specifications.",
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
      type: "numbered",
      title: "Your Brand, *Our Manufacturing*",
      subtitle: "We deliver ready-to-sell products backed by high-capacity infrastructure, so your brand can focus purely on sales and distribution.",
      items: [
        { title: "Custom Branding", desc: "Your logo, colours, labels and packaging on every unit." },
        { title: "Custom Electrical Specs", desc: "Ratings, protection devices and layouts tailored to your target market." },
        { title: "Private-Label Documentation", desc: "Datasheets, manuals and test reports issued under your brand." },
      ],
    },
    {
      type: "split",
      title: "Manufacturing Infrastructure *Behind Every OEM Order*",
      paras: [
        "Our state-of-the-art manufacturing facility in Ahmedabad is built to support mass-scale solar component production with strict quality controls at every stage. From in-house sheet metal fabrication and wiring to automated crimping, testing and final inspection, every step happens under one roof.",
      ],
      stats: [
        { value: "100%", label: "In-House Fabrication" },
        { value: "45+", label: "Production & QC Staff" },
        { value: "Certified", label: "ISO / CE / BIS / RoHS" },
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team at an awards ceremony",
      cta: { label: "Explore Infrastructure", href: ROUTES.infrastructure },
    },
    {
      type: "split",
      reverse: true,
      title: "Built for Brands *Without Their Own Manufacturing*",
      paras: ["OEM manufacturing lets you bring a solar BOS line to market without investing in a factory of your own."],
      bullets: ["Solar Brands & Distributors", "Import Partners", "EPC Companies", "New Market Entrants"],
      image: `${IMG}/brands.webp`,
      imageAlt: "Rooftop solar plant on an industrial building",
    },
    {
      type: "steps",
      title: "Engineered *Delivery Flow*",
      subtitle: "A transparent roadmap ensuring your specifications are built with repeatable industrial precision.",
      items: [
        { title: "Requirement & Spec Discussion", desc: "We capture your product, branding and electrical requirements.", icon: "clipboard" },
        { title: "Sample Development", desc: "Our engineers build a working sample to your specification.", icon: "settings" },
        { title: "Sample Approval", desc: "You test and approve the sample before any bulk commitment.", icon: "badge" },
        { title: "Bulk Production", desc: "Production runs on our in-house lines with documented process checks.", icon: "factory" },
        { title: "QC & Branding", desc: "Final electrical QC, plus labelling and packaging under your brand.", icon: "shield" },
        { title: "Dispatch", desc: "Pan-India and export dispatch with full documentation.", icon: "truck" },
      ],
    },
    {
      type: "dark",
      title: "Order Volumes & *Timelines*",
      desc: "Minimum order quantities and lead times vary by product category and level of customisation. Share your requirement and our team will confirm exact figures for your project.",
      bgImage: "/assets/img_partner_bg.png",
      ctas: [{ label: "Enquire about MOQs", href: ROUTES.contact }],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What is the minimum order quantity for OEM/white-label manufacturing?", a: "MOQs vary by product category and the level of customisation, and are confirmed at the enquiry stage. Get in touch with your requirement for exact numbers." },
        { q: "Can Ksquare manufacture products under our own brand name and packaging?", a: "Yes. Your brand, labels and packaging can be applied across the range, along with private-label documentation." },
        { q: "Will OEM products carry the same certifications (ISO, CE, BIS, RoHS)?", a: "Products are built in a facility that follows these standards. Share the certifications your market needs and our team will confirm what applies to your product." },
        { q: "Can you customize electrical specifications for our market?", a: "Yes. Our engineers can adapt ratings, protection devices and layouts to the standards and conditions of your target market." },
        { q: "How long does it take to develop a sample before bulk production?", a: "Sample timelines depend on the complexity of the customisation. We share an indicative schedule once the specification is finalised." },
        { q: "Do you support international brands looking to source from India?", a: "Yes. We support export-grade packaging, documentation and logistics coordination for international brands." },
      ],
    },
    {
      type: "cta",
      title: "Ready to Launch *Your Own Brand?*",
      desc: "Tell us what you want to build. Our OEM team will respond with feasibility, pricing and an indicative timeline.",
      ctas: [
        { label: "Discuss Your OEM Requirement", href: ROUTES.oemPartnership },
        { label: "Talk to Our Experts", href: ROUTES.contact },
      ],
    },
  ],
};
