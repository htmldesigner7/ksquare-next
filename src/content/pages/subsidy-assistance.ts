import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/subsidy";
const SCALE = "/assets/pages/monitoring";

export const page: PageData = {
  slug: "subsidy-assistance",
  metaTitle: "Solar Subsidy Assistance: Central & State Incentive Support | Ksquare Energy",
  metaDescription:
    "We help you identify, calculate and secure every central and state solar incentive your rooftop project qualifies for, with Ksquare handling the application process.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }, { label: "Government Solutions" }, { label: "Subsidy Assistance" }],
    title: "Solar Subsidy Assistance: *Central & State Incentive Support*",
    description:
      "We help you identify, calculate, and secure every central and state solar incentive your rooftop project qualifies for — with Ksquare handling the complex application process.",
    ctas: [
      { label: "Check My Subsidy Eligibility", href: ROUTES.pmSuryaGhar },
      { label: "Talk to Our Team", href: ROUTES.contact },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 180, y: -175, w: 1445, h: 675 },
    imageAlt: "Engineers reviewing a solar project",
  },
  sections: [
    {
      type: "cards",
      cols: 4,
      title: "Subsidies & Incentives *You May Qualify For*",
      items: [
        { title: "PM Surya Ghar", desc: "Central financial assistance for residential rooftop solar.", icon: "home", href: ROUTES.pmSuryaGhar, linkLabel: "Learn more" },
        { title: "State Government Schemes", desc: "State-level top-ups and incentives that stack with central support.", icon: "building" },
        { title: "Accelerated Depreciation", desc: "Tax benefits that improve payback for businesses and industry.", icon: "rupee" },
        { title: "Net Metering-Linked Savings", desc: "Bill credits for surplus power exported to the grid.", icon: "zap", href: ROUTES.netMetering, linkLabel: "Learn more" },
      ],
    },
    {
      type: "cards",
      cols: 3,
      title: "What *Applies to You*",
      items: [
        { title: "Residential Solar", desc: "Central and state support for home rooftop systems, with documentation and portal registration handled for you.", image: `${SCALE}/scale_home.webp`, href: ROUTES.residential, linkLabel: "Explore Residential Solar" },
        { title: "Commercial Solar", desc: "Depreciation benefits and state incentives that shorten payback for offices, hospitals, hotels and retail.", image: `${SCALE}/scale_commercial.webp`, href: ROUTES.rooftop, linkLabel: "Explore Commercial Solar" },
        { title: "Industrial Solar", desc: "Accelerated depreciation, captive consumption benefits and statutory compliance for factories and plants.", image: `${SCALE}/scale_industrial.webp`, href: ROUTES.epc, linkLabel: "Explore Industrial Solar" },
      ],
    },
    {
      type: "split",
      title: "What's Included in Our *Subsidy Assistance*",
      paras: [
        "Ksquare Energy operates as a fully integrated EPC. We don't just supply systems — we coordinate every structural and administrative step required to safely disburse government incentives to your account.",
      ],
      bullets: ["Eligibility Assessment", "Documentation Preparation", "Application Filing", "Liaison with Government Bodies & DISCOMs", "Approval Status Tracking"],
      stats: [
        { value: "8+", label: "Years of Experience" },
        { value: "18k", label: "Sq. Ft. Facility" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: `${IMG}/included.webp`,
      imageAlt: "Ksquare team supporting a subsidy application",
    },
    {
      type: "dark",
      numbered: true,
      title: "Why Applications Get *Delayed or Rejected*",
      desc: "Most delays come from avoidable mistakes. Knowing them upfront keeps your application moving.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      items: [
        { title: "Documentation Errors", desc: "Incomplete details, mismatched names or uncertified component specs trigger immediate queries and verification." },
        { title: "Eligibility Errors", desc: "Applying for schemes without meeting technical, capacity or location eligibility wastes valuable time." },
        { title: "Missed Timelines", desc: "Many state-incentive pools have strict quarterly or scheme-specific windows. Delayed filing can invalidate past effort." },
        { title: "Coordination Gaps", desc: "Claiming incentives requires sync across DISCOM portal logins, nodal inspectorates and the national rooftop registry." },
      ],
    },
    {
      type: "steps",
      title: "Our Subsidy *Assistance Process*",
      subtitle: "A clear five-step process from checking eligibility to following up on disbursement.",
      items: [
        { title: "Eligibility Assessment", desc: "We check which central and state schemes your project qualifies for.", icon: "search" },
        { title: "Documentation", desc: "All required documents are prepared and verified.", icon: "file" },
        { title: "Application Filing", desc: "Applications are filed on the correct portals within the scheme windows.", icon: "clipboard" },
        { title: "Approval Tracking", desc: "We track each application and respond to queries.", icon: "activity" },
        { title: "Disbursement Follow-Up", desc: "We follow up until the incentive reaches your account.", icon: "rupee" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What solar subsidies am I eligible for?", a: "Eligibility depends on your segment (residential, commercial or industrial) and your state. Use the eligibility check or talk to our team for a specific answer for your project." },
        { q: "Is the PM Surya Ghar subsidy the only one available?", a: "No. Some states offer additional incentives, and businesses can benefit from tax measures such as accelerated depreciation." },
        { q: "What is accelerated depreciation and who can claim it?", a: "It lets eligible businesses claim a larger share of a solar asset's cost as depreciation in early years, improving payback. Please confirm applicability with your tax advisor." },
        { q: "Does Ksquare handle the subsidy application process for me?", a: "Yes. We handle eligibility checks, documentation, filing, tracking and follow-up." },
        { q: "How long does subsidy approval and disbursement usually take?", a: "Timelines vary by scheme and state. For PM Surya Ghar, the subsidy is credited after inspection and commissioning." },
        { q: "Can commercial or industrial buyers get subsidy assistance too, not just homeowners?", a: "Yes. We assist businesses with applicable state incentives and tax benefits as well as residential schemes." },
      ],
    },
    {
      type: "cta",
      title: "Don't Leave *Incentives on the Table*",
      desc: "Find out what your solar project qualifies for. Our team will check eligibility and manage the application end to end.",
      ctas: [
        { label: "Check My Subsidy Eligibility", href: ROUTES.pmSuryaGhar },
        { label: "Talk to Our Team", href: ROUTES.contact },
      ],
    },
  ],
};
