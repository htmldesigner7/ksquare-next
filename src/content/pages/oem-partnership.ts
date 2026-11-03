import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/oem-partnership";

export const page: PageData = {
  slug: "oem-partnership",
  metaTitle: "OEM Partnership Program | Ksquare Energy",
  metaDescription:
    "Build a long-term manufacturing partnership with Ksquare Energy, not just a one-time order: dedicated capacity, preferential pricing and co-development support.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Partners" }, { label: "OEM Partnership" }],
    title: "OEM Partnership *Program*",
    description: "Build a long-term manufacturing partnership with Ksquare Energy, not just a one-time order.",
    ctas: [
      { label: "Apply for OEM Partnership", href: ROUTES.contact },
      { label: "See What We Manufacture", href: ROUTES.oem },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 354, y: -213, w: 1373, h: 641 },
    imageAlt: "Ksquare manufacturing partners reviewing a product line",
  },
  sections: [
    {
      type: "split",
      title: "Partnership vs. a *One-Time OEM Order*",
      paras: [
        "Looking for more than a one-time OEM order? Our strategic manufacturing partnerships are designed for businesses seeking a long-term relationship with dedicated production capacity, preferential pricing and ongoing engineering support.",
        "If you only need a single order, our OEM Solutions service covers it. A partnership is for brands that plan to grow with us.",
      ],
      image: `${IMG}/vs.webp`,
      imageAlt: "Ksquare manufacturing floor",
      cta: { label: "See OEM Solutions", href: ROUTES.oem },
    },
    {
      type: "cards",
      cols: 3,
      title: "What's Included in an *OEM Partnership*",
      items: [
        { title: "Dedicated Production Allocation", desc: "Reserved capacity on our production lines for your programme.", icon: "factory" },
        { title: "Preferential Pricing Tiers", desc: "Volume-based pricing that improves as your programme grows.", icon: "rupee" },
        { title: "Priority Lead Times", desc: "Your orders are scheduled ahead of standard orders.", icon: "clock" },
        { title: "Dedicated Account & Technical Manager", desc: "One point of contact for commercial and engineering questions.", icon: "users" },
        { title: "Co-Development Support", desc: "Work with our engineers to develop new products together.", icon: "settings" },
      ],
    },
    {
      type: "tiers",
      title: "Partnership *Levels*",
      subtitle: "Choose the level that fits your annual requirement. Both include formal supply terms and engineering support.",
      items: [
        {
          label: "FOR GROWING OEM RELATIONSHIPS",
          title: "Standard OEM Partner",
          desc: "Entry tier for formalizing bilateral supply pipelines.",
          points: ["Tier-based pricing", "Named account manager", "Priority scheduling on repeat orders", "Documentation under your brand"],
          cta: { label: "Apply as Standard Partner", href: ROUTES.contact },
        },
        {
          label: "FOR HIGH-VOLUME REQUIREMENTS",
          title: "Strategic OEM Partner",
          desc: "For high-volume, multi-megawatt annual requirements.",
          points: ["Preferential volume pricing", "Dedicated technical account manager", "Dedicated factory floor slot reservation", "R&D co-build"],
          cta: { label: "Apply as Strategic Partner", href: ROUTES.contact },
          featured: true,
          badge: "STRATEGIC",
        },
      ],
    },
    {
      type: "cards",
      cols: 3,
      title: "Who This *Partnership Is For*",
      items: [
        { title: "Solar Brands Scaling Their Product Line", desc: "Brands that want dependable manufacturing capacity as they grow.", icon: "sun" },
        { title: "Distributors Wanting an Exclusive Line", desc: "Distributors building a differentiated, branded product range.", icon: "truck" },
        { title: "International Brands Seeking a Partner", desc: "Overseas brands that want an Indian manufacturing partner.", icon: "globe" },
      ],
    },
    {
      type: "accordion",
      title: "Why Partner With *Ksquare*",
      subtitle: "A manufacturing partner you can build a brand on.",
      items: [
        { title: "100% In-House Fabrication", desc: "Fabrication, assembly and testing in our own facility for consistent quality and delivery." },
        { title: "Certifications Transfer", desc: "Products are built to certified specifications that support your approvals." },
        { title: "Flexible Order Volumes", desc: "Scale volumes up or down as your demand changes." },
        { title: "Consistent Quality Control", desc: "Every unit goes through the same documented tests before dispatch." },
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Ksquare quality control inspection",
    },
    {
      type: "steps",
      title: "How It *Works*",
      items: [
        { title: "Application & Discussion", desc: "Share your business profile, products and volume plans.", icon: "file" },
        { title: "Agreement Terms", desc: "We agree commercial terms, pricing tiers and capacity.", icon: "handshake" },
        { title: "Partner Onboarding", desc: "Technical onboarding, specifications and documentation set-up.", icon: "users" },
        { title: "Production Planning", desc: "Capacity is allocated and production scheduled.", icon: "factory" },
        { title: "Ongoing Partnership", desc: "Regular reviews, co-development and continued support.", icon: "badge" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What's the difference between OEM Solutions and the OEM Partnership program?", a: "OEM Solutions covers what Ksquare can manufacture for a single order. The OEM Partnership is a formal, ongoing relationship with dedicated capacity, pricing tiers and engineering support." },
        { q: "Is there a minimum volume commitment for an OEM partnership?", a: "Volume expectations depend on the partnership level and product mix. They are agreed in the partnership terms." },
        { q: "Do OEM partners get priority production capacity?", a: "Yes. Partners receive dedicated production allocation and priority lead times." },
        { q: "Can we co-develop a new product as part of the partnership?", a: "Yes. Co-development support is part of the partnership, and strategic partners can reserve R&D resources." },
        { q: "How long does it take to become an OEM partner?", a: "Timelines depend on how quickly terms and specifications are agreed. We outline the schedule at the discussion stage." },
        { q: "Are international brands eligible for the OEM Partnership program?", a: "Yes. International brands are welcome, and we support export-grade packaging and documentation." },
      ],
    },
    {
      type: "cta",
      title: "Ready To Formalize *An OEM Partnership?*",
      desc: "Tell us about your brand and volume plans. Our OEM team will respond with a partnership proposal within two business days.",
      ctas: [
        { label: "Apply for OEM Partnership", href: ROUTES.contact },
      ],
    },
  ],
};
