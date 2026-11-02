import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/export";
const PRODUCTS = "/assets/pages/epc";

export const page: PageData = {
  slug: "export-solutions",
  metaTitle: "Solar Component Export Solutions from India | Ksquare Energy",
  metaDescription:
    "Certified, export-ready BOS components manufactured in Ahmedabad and shipped to distributor partners worldwide, with export-grade packaging, documentation and logistics support.",
  hero: {
    crumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Solutions" },
      { label: "Business Solution" },
      { label: "Export Solutions" },
    ],
    title: "Solar Component Export Solutions *Across India*",
    description: "Certified, export-ready BOS components manufactured in Ahmedabad and shipped to distributor partners worldwide.",
    ctas: [
      { label: "Become an Export Partner", href: ROUTES.exportBusiness },
      { label: "Request Export Catalog", href: ROUTES.downloads },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 33, y: -227, w: 1740, h: 727 },
    imageAlt: "Export logistics team beside containers of solar components",
  },
  sections: [
    {
      type: "cards",
      cols: 4,
      title: "Why Solar Partners *Source From Ksquare*",
      subtitle:
        "Sourcing solar components from India means weighing certification, consistency, and reliability against cost advantage. Ksquare manufactures every component in-house, to internationally recognised certification standards, at India-manufacturing economics.",
      items: [
        { title: "Certifications", desc: "ISO 9001:2015, CE, BIS and RoHS compliant production.", icon: "badge" },
        { title: "Competitive Pricing", desc: "Manufacturer-direct pricing with no trading margins.", icon: "rupee" },
        { title: "Scalable Production", desc: "Capacity to move from trial shipments to container loads.", icon: "layers" },
        { title: "100% In-House Fabrication", desc: "Fabrication, assembly and testing under one roof for consistent quality.", icon: "factory" },
      ],
    },
    {
      type: "cards",
      cols: 4,
      fit: "contain",
      title: "Solar BOS Components *Ready for Export*",
      subtitle: "A complete range of certified balance-of-system components, packed and documented for international shipment.",
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
      title: "Built for *Every Region*",
      subtitle: "Seamless trans-oceanic supply chains require specialised infrastructure. Ksquare guarantees compliant global dispatch.",
      items: [
        { title: "Export-Grade Packaging", desc: "Moisture- and impact-protected packing built for long-haul shipping." },
        { title: "Documentation Support", desc: "Commercial invoices, packing lists, test reports and certificates prepared for customs." },
        { title: "Freight / Logistics Coordination", desc: "We coordinate with freight partners for sea, air and road dispatch." },
        { title: "Container-Load Order Capacity", desc: "Production planning for full container-load orders." },
      ],
    },
    {
      type: "regions",
      title: "Expanding Horizons, *Building a Solar Future.*",
      desc: "Rooted in Gujarat and growing across India, Ksquare supplies partners from our Ahmedabad facility and is building a distributor network in new regions.",
      states: [
        { name: "Gujarat", blurb: "Our home state, with sales and service coverage across major cities.", cities: ["Ahmedabad", "Bhavnagar", "Dwarka", "Gandhinagar", "Mehsana", "Surat", "Vadodara", "Rajkot", "Jamnagar"] },
        { name: "Rajasthan" },
        { name: "Uttar Pradesh" },
        { name: "Madhya Pradesh" },
        { name: "Maharashtra" },
      ],
      map: "/assets/pages/shared/india_map.webp",
    },
    {
      type: "cards",
      cols: 4,
      title: "Certifications That Support *Import Compliance*",
      subtitle: "Our products adhere to international standards, simplifying testing requirements in destination countries.",
      items: [
        { title: "ISO 9001:2015", desc: "Verifies international manufacturing quality management standards.", badge: `${IMG}/cert_iso.webp` },
        { title: "CE Mark", desc: "Ensures compliance with European health, safety, and environmental protection rules.", badge: `${IMG}/cert_ce.webp` },
        { title: "BIS Certification", desc: "Meets Bureau of Indian Standards, validating component tier-1 compliance.", badge: `${IMG}/cert_bis.webp` },
        { title: "RoHS Compliant", desc: "Guarantees toxic-free electronic manufacturing for eco-conscious markets.", badge: `${IMG}/cert_rohs.webp` },
      ],
    },
    {
      type: "steps",
      title: "How Our *Export Process* Works",
      subtitle: "A systematic roadmap ensuring maximum accuracy and precision from initial specification to site deployment.",
      items: [
        { title: "Enquiry & Requirement Discussion", desc: "Tell us your market, volumes and certification needs.", icon: "clipboard" },
        { title: "Sample & Certification Sharing", desc: "We share samples and the certificates relevant to your market.", icon: "badge" },
        { title: "Bulk Manufacturing", desc: "Your order is produced and tested on our in-house lines.", icon: "factory" },
        { title: "Shipping & Logistics", desc: "Export packing, documentation and freight are coordinated end to end.", icon: "truck" },
        { title: "After-Sales Support", desc: "Technical support continues once the goods reach your warehouse.", icon: "headset" },
        { title: "Repeat Supply", desc: "Plan recurring shipments with dedicated account support.", icon: "globe" },
      ],
    },
    {
      type: "split",
      title: "Partner With Us *as a Regional Distributor*",
      paras: [
        "Ksquare is expanding its regional distributor network alongside its export program, offering long-term opportunities for businesses to represent our products in their markets. Partners benefit from regional stocking privileges, co-branded marketing support and direct access to our engineering team.",
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team",
      cta: { label: "Discuss a Distribution Partnership", href: ROUTES.partner },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Which countries does Ksquare currently export to?", a: "Ksquare is export-ready and open to new regions. Share your target market and our export desk will confirm current supply routes and timelines." },
        { q: "What certifications do your products carry for international markets?", a: "Our facility is ISO 9001:2015 certified and our components are produced to CE, BIS and RoHS requirements, helping simplify testing in destination countries." },
        { q: "What is the minimum order quantity for export orders?", a: "MOQs depend on the product category and are confirmed at enquiry stage. Container-load orders are supported." },
        { q: "Can you customize electrical specifications for our market?", a: "Yes. Our engineers can adapt ratings, protection devices and layouts to your local standards." },
        { q: "How long does it take to develop a sample before bulk production?", a: "Standard products can be sampled quickly; custom specifications take longer. We share an indicative timeline once requirements are confirmed." },
        { q: "Do you support international brands looking to source from India?", a: "Yes. We support export-grade packaging, documentation and logistics, plus private-label manufacturing for brands." },
      ],
    },
    {
      type: "cta",
      title: "Looking to Import Solar *Components from India?*",
      desc: "Tell us about your market and requirements. Our export desk will respond with certified product options, pricing and logistics.",
      ctas: [
        { label: "Request Export Quote", href: ROUTES.contact },
        { label: "Become an Export Partner", href: ROUTES.exportBusiness },
      ],
    },
  ],
};
