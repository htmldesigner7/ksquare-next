import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/epc";

export const page: PageData = {
  slug: "epc-solutions",
  metaTitle: "Solar EPC Solutions & Bulk BOS Components | Ksquare Energy",
  metaDescription:
    "Manufacturer-direct DCDB, ACDB, combiner boxes and cables engineered, tested and shipped from Ksquare's Ahmedabad facility to EPCs, distributors and partners across India.",
  hero: {
    crumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Solutions" },
      { label: "Business Solution" },
      { label: "EPC Solutions" },
    ],
    title: "Solar EPC Solutions & *Bulk BOS Components*",
    description:
      "Manufacturer-direct DCDB, ACDB, combiner boxes, and cables engineered, rigorously tested, and shipped from our own Ahmedabad facility to utility-scale EPCs, distributors, and partners across India.",
    ctas: [
      { label: "Request a Bulk Quote", href: ROUTES.contact },
      { label: "Download Product Catalog", href: ROUTES.downloads },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -182, w: 1800, h: 682 },
    imageAlt: "EPC engineers reviewing a solar plant layout on site",
  },
  sections: [
    {
      type: "band",
      items: [
        "ISO 9001:2015 Certified Facility",
        "CE Marked Components",
        "BIS Compliant Manufacturing",
        "RoHS Compliant Materials",
        "5-Year Performance Assurance",
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Why Solar EPC Companies *Choose Ksquare*",
      subtitle:
        "When you're sourcing BOS components for active commercial or utility-scale projects, supplier delays or inconsistent quality directly impact your bottom line. We control the complete process, from structural raw material processing to final dispatch.",
      items: [
        { title: "Manufacturer-Direct Pricing", desc: "Buy straight from the factory with no trading margins, so your BOM stays competitive on every tender.", icon: "rupee" },
        { title: "Consistent Quality at Volume", desc: "Standardised processes and fixtures keep the thousandth unit identical to the first.", icon: "layers" },
        { title: "In-House Testing & QC", desc: "Every board is inspected and electrically tested in our own facility before it ships.", icon: "shield" },
        { title: "DISCOM Compliance Ready", desc: "Documentation, SLDs and certificates prepared to speed up DISCOM inspection and approvals.", icon: "badge" },
      ],
    },
    {
      type: "cards",
      cols: 4,
      fit: "contain",
      title: "Core *Products*",
      subtitle:
        "From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.",
      items: [
        { title: "Solar DCDB", desc: "DC distribution boxes for string-level protection and isolation.", image: `${IMG}/p_dcdb.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Solar ACDB", desc: "AC distribution with NVR protection, RYB indication available.", image: `${IMG}/p_acdb.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Combiner Boxes", desc: "Multi-string combiners for utility and commercial-scale arrays.", image: `${IMG}/p_combiner.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Junction Boxes", desc: "Array junction boxes with monitoring-ready terminal layouts.", image: `${IMG}/p_junction.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Solar Cables", desc: "Single-core DC cables engineered for outdoor UV exposure.", image: `${IMG}/p_cables.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Kenclozer Enclosures", desc: "Polycarbonate enclosures for indoor and outdoor installation.", image: `${IMG}/p_kenclozer.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "MC4 Connectors", desc: "Locking connectors rated for continuous outdoor duty.", image: `${IMG}/p_mc4.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
        { title: "Earthing Kits", desc: "Complete grounding kits for module frames and mounting structures.", image: `${IMG}/p_earthing.webp`, href: ROUTES.dcdb, linkLabel: "View Product" },
      ],
    },
    {
      type: "split",
      title: "Manufacturing Capacity *for Your Timeline*",
      paras: [
        "Commercial solar projects depend on reliable manufacturing and on-time delivery. Our specialized in-house production capabilities cover custom sheet fabrication, powder coating, wire loom layout, thermoplastic molding, and box termination, all under one roof.",
      ],
      stats: [
        { value: "100%", label: "In-House Fabrication" },
        { value: "45+", label: "Production & QC Staff" },
        { value: "Pan-India", label: "Dispatch & Logistics" },
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team",
      cta: { label: "Explore Infrastructure", href: ROUTES.infrastructure },
    },
    {
      type: "dark",
      title: "Datasheets, Compliance & *BOM Support*",
      desc: "Get the technical documents and engineering support you need to move your solar project forward, with access to detailed technical datasheets, drawings, specifications and ratings, and compliance certificates including ISO, CE and BIS.",
      bgImage: "/assets/img_partner_bg.png",
      ctas: [
        { label: "Download Technical Datasheets", href: ROUTES.downloads },
        { label: "Get Certificates", href: ROUTES.certifications },
        { label: "Upload BOM", href: ROUTES.contact },
      ],
    },
    {
      type: "tiers",
      title: "Volume Pricing & *Dedicated Account Support*",
      subtitle: "Pick the tier that matches your project size. Every tier includes manufacturer-direct pricing and engineering support.",
      items: [
        {
          label: "COMMERCIAL ROOFTOPS",
          title: "10 kW – 100 kW",
          desc: "Standardized modular kits configured for swift DISCOM inspection approvals and rapid rooftop deployment.",
          points: ["Pre-assembled DCDB & ACDB kits", "Standardized SLD documentation", "48-hour standard dispatch", "Phone & WhatsApp technical support"],
          cta: { label: "Inquire Tier Pricing", href: ROUTES.contact },
        },
        {
          label: "INDUSTRIAL SCALE",
          title: "100 kW – 1 MW",
          desc: "Tailored for industrial shed roofs, multi-inverter setups, and captive consumption solar plants.",
          points: ["Tiered volume price rebate", "Customized multi-MPPT combinations", "Dedicated Technical Account Manager", "Custom branding/labeling available"],
          cta: { label: "Request Industrial Quote", href: ROUTES.contact },
          featured: true,
          badge: "MOST POPULAR FOR EPCS",
        },
        {
          label: "UTILITY & PARKS",
          title: "1 MW+ Solar Parks",
          desc: "Heavy-duty combiner boxes, string monitoring units, and full container load site dispatches.",
          points: ["Factory Acceptance Testing (FAT) on site", "String-level Modbus / SCADA monitoring", "Direct truck-load site drops", "Extended warranty & spares packaging"],
          cta: { label: "Contact Utility Desk", href: ROUTES.contact },
        },
      ],
    },
    {
      type: "steps",
      title: "Engineered *Delivery Flow*",
      subtitle: "A transparent, 5-stage engineering roadmap ensuring your specifications are built with repeatable industrial precision.",
      items: [
        { title: "Enquiry & BOM Review", desc: "Share your BOM and project details; our engineers review every line item.", icon: "clipboard" },
        { title: "Sample / Spec Approval", desc: "Approve samples and specifications before bulk production begins.", icon: "badge" },
        { title: "Bulk Manufacturing", desc: "Production runs on our in-house lines with documented process checks.", icon: "factory" },
        { title: "QC & Dispatch", desc: "Final electrical and visual QC, then pan-India dispatch to your site.", icon: "truck" },
        { title: "After-Sales Support", desc: "Technical help and spares support continue long after delivery.", icon: "headset" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What is the minimum order quantity for EPC bulk orders?", a: "MOQs vary by product category and are confirmed against your project BOM. Share your requirement and our team will respond with exact numbers." },
        { q: "Can Ksquare supply components for projects outside Gujarat?", a: "Yes. We dispatch pan-India from our Ahmedabad facility and regularly supply EPCs, distributors and installers in other states." },
        { q: "Do your products carry certification for government/DISCOM-approved projects?", a: "Our components are manufactured in an ISO 9001:2015 certified facility and are supplied with the test reports and compliance documents typically required for DISCOM inspection." },
        { q: "What is the typical lead time for a large EPC order?", a: "Standard configurations ship within 48 hours. Custom or large-volume orders are scheduled against your project timeline once the BOM and samples are approved." },
        { q: "Can Ksquare provide a custom BOM for our project design?", a: "Yes. Our engineers can review your single-line diagram and propose a BOM of DCDB, ACDB, cables and accessories matched to your design." },
        { q: "Is there a dedicated point of contact for repeat EPC orders?", a: "Yes. Ongoing EPC partners are assigned a dedicated account manager for pricing, scheduling and after-sales support." },
      ],
    },
    {
      type: "cta",
      title: "Sourcing BOS Components *for Your Next Project?*",
      desc: "Share your BOM and project timeline. Our EPC team will respond with manufacturer-direct pricing and delivery schedules.",
      ctas: [
        { label: "Request a Bulk Quote", href: ROUTES.contact },
        { label: "Talk to Our EPC Team", href: ROUTES.contact },
      ],
    },
  ],
};
