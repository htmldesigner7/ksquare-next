import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/custom-development";

export const page: PageData = {
  slug: "custom-product-development",
  metaTitle: "Custom Solar Product Development | Ksquare Energy",
  metaDescription:
    "When a standard product doesn't fit your requirement, Ksquare engineers one that does: turnkey balance-of-system design, rapid prototypes and IEC-aligned certification support.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Manufacturing" }, { label: "Custom Product Development" }],
    title: "Custom Solar *Product Development*",
    description:
      "When a standard product doesn't fit your requirement, we engineer one that does. Turnkey balance-of-system design, rapid bench prototypes, and IEC-aligned certification support.",
    ctas: [{ label: "Talk to Our Engineering Team", href: ROUTES.contact }],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 354, y: -141, w: 1373, h: 641 },
    imageAlt: "Engineers reviewing a custom solar enclosure design",
  },
  sections: [
    {
      type: "split",
      title: "When Standard Solar *Products Aren't Enough*",
      paras: [
        "Not every solar project fits a standard product. Custom development is ideal when your requirements involve non-standard electrical ratings, custom enclosure sizes or materials, special connectors, or documentation for a specific market.",
        "Our engineers work from your requirement to a certified, production-ready product.",
      ],
      image: `${IMG}/standard.webp`,
      imageAlt: "Standard solar distribution boards",
    },
    {
      type: "cards",
      cols: 4,
      title: "Engineering Capability Behind *Every Custom Build*",
      subtitle: "Custom development becomes relevant when the electrical, mechanical, compliance or installation requirement falls outside an existing product configuration.",
      items: [
        { title: "In-House Design & Engineering Team", desc: "Electrical and mechanical engineers working under one roof with production.", icon: "cpu" },
        { title: "Prototyping Capability", desc: "Rapid CAD models and working bench prototypes.", icon: "settings" },
        { title: "Testing & Certification Support", desc: "Lab testing aligned to IEC standards and market requirements.", icon: "shield" },
        { title: "Small-Batch Pilot Runs", desc: "Validate in the field before committing to full production.", icon: "layers" },
      ],
    },
    {
      type: "accordion",
      title: "What Can Be *Customized*",
      items: [
        { title: "Electrical Specifications & Ratings", desc: "Voltage, current, number of strings, protection devices and surge protection tailored to your design." },
        { title: "Enclosure Size, Material & IP Rating", desc: "Metal or thermoplastic enclosures sized to your layout, with the ingress protection your site demands." },
        { title: "Connector Types", desc: "Cable glands, MC4 and other connector configurations to match your cabling." },
        { title: "Packaging & Labeling", desc: "Custom packaging, nameplates and labelling." },
        { title: "Documentation for Specific Markets", desc: "Datasheets, manuals and compliance documents prepared for your destination market." },
      ],
      image: `${IMG}/customize.webp`,
      imageAlt: "Custom solar enclosure being assembled",
    },
    {
      type: "dark",
      title: "Built for Requirements *That Don't Fit a Catalog*",
      desc: "Custom development supports teams whose projects, brands or markets need something specific.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      numbered: true,
      items: [
        { title: "EPC Companies", desc: "Project-specific distribution boards and combiners matched to your design." },
        { title: "Industrial Clients", desc: "Custom BOS for captive plants and unusual site conditions." },
        { title: "OEM Brands", desc: "Differentiated products built exclusively for your brand." },
        { title: "Export Partners", desc: "Market-specific designs and documentation for your region." },
      ],
    },
    {
      type: "steps",
      title: "Our Custom *Development Process*",
      items: [
        { title: "Requirements & Feasibility", desc: "We log your request and assess technical feasibility.", icon: "clipboard" },
        { title: "Design & Engineering", desc: "Custom CAD models and electrical layouts are finalised.", icon: "ruler" },
        { title: "Prototype Development", desc: "A working bench prototype is built for your review.", icon: "settings" },
        { title: "Testing & Certification", desc: "The prototype is tested and certification documentation is prepared.", icon: "shield" },
        { title: "Pilot Production", desc: "A small pilot batch validates the design in the field.", icon: "layers" },
        { title: "Full-Scale Manufacturing", desc: "Production scales up with full quality control and documentation.", icon: "factory" },
      ],
    },
    {
      type: "compare",
      title: "Not Sure *Which You Need?*",
      subtitle: "Understanding the distinction between Private Labeling and Custom Product Development ensures the fastest route to market and optimized tooling budgets.",
      items: [
        {
          title: "Private Label Manufacturing",
          desc: "Your brand applied to an existing standard Ksquare catalogue product with full white-glove packaging.",
          points: [
            "Best when you want your brand on a proven, certified product",
            "Advantage: fastest lead times, zero tooling capex and pre-certified enclosures",
            "Deliverables: custom silk-screen graphics, branded rating plates, user manual and packaging",
          ],
        },
        {
          title: "Custom Product Development",
          desc: "A bespoke balance-of-system hardware platform engineered from the ground up around your exact electrical and spatial specifications.",
          points: [
            "Best when standard products cannot meet your voltage, amp ratings, multi-string grouping or mounting space",
            "Advantage: a product designed exactly around your requirement",
            "Deliverables: 3D CAD design, custom tooling / stamping, working bench prototype, third-party lab testing dossier",
          ],
        },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What kinds of customization can Ksquare handle?", a: "Anything from minor rating or specification changes to completely new enclosure and product designs." },
        { q: "How long does custom product development take from concept to production?", a: "It depends on complexity, prototyping and testing. We share an indicative timeline after the feasibility review." },
        { q: "Is there a minimum order quantity for custom-developed products?", a: "MOQs depend on tooling and the product. They are confirmed once the design is defined." },
        { q: "Can a custom product also carry our own brand?", a: "Yes. Custom products can be delivered under your brand with your documentation and packaging." },
        { q: "Will custom products be certified for our target market?", a: "We support testing and certification aligned to IEC standards and the requirements of your market." },
        { q: "Do you build a prototype before committing to full production?", a: "Yes. A bench prototype and optional pilot run let you validate the design before full-scale manufacturing." },
      ],
    },
    {
      type: "cta",
      title: "Have a Requirement *That Needs Engineering?*",
      desc: "Describe your requirement and our engineers will assess feasibility and propose the fastest path to a certified product.",
      ctas: [
        { label: "Talk to Our Engineering Team", href: ROUTES.contact },
      ],
    },
  ],
};
