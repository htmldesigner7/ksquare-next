import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { FAQ_HOME_SOLAR } from "@/content/faqs";

const IMG = "/assets/pages/flats";

export const page: PageData = {
  slug: "rooftop-solar-for-flats",
  metaTitle: "Rooftop Solar for Flats & Housing Societies | Ksquare Energy",
  metaDescription:
    "Bring clean solar energy to your apartment complex. Individual flat systems or shared society-wide plants, with RWA approvals and metering handled by Ksquare.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }, { label: "Solar Solution" }, { label: "Rooftop Solar For Flats" }],
    title: "Rooftop Solar For Flats & *Housing Societies*",
    description:
      "Bring clean solar energy directly to your apartment complex. Tailored frameworks designed specifically for individual flat owners or shared society-wide common meters.",
    ctas: [
      { label: "Book a Free Site Assessment", href: ROUTES.consultation },
      { label: "Get a Free Consultation", href: ROUTES.consultation },
    ],
    afterGap: 50,
    cutout: { image: `${IMG}/hero_full.webp`, x: -5, y: -170, w: 1810, h: 670 },
    imageAlt: "Apartment complex with rooftop solar panels",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "numbered",
      title: "Why Solar For Flats Isn't *The Same As Solar For A House*",
      subtitle: "Apartment complexes bring shared roofs, shared approvals and shared meters. Here is what changes.",
      items: [
        { title: "Shared Terrace Spatial Limits", desc: "Traditional solar assumes exclusive ownership of the roof. Apartment terrace space must be equitably divided or collectively owned, requiring custom spatial modeling and precise solar panel placement arrays." },
        { title: "Approval & RWA Compliance", desc: "Projects must conform with Resident Welfare Association (RWA) bylaws, local municipal rules, and society regulations, necessitating clear documentation, structured proposals, and engineering certifications." },
        { title: "Complex Metering Schemes", desc: "Power must be routed to individual flat connections or common-area infrastructure. This demands customized dual-metering, specialized balance of system components, and DISCOM co-ordination." },
      ],
    },
    {
      type: "compare",
      title: "Two Options Engineered for *Your Housing Society*",
      subtitle: "Choose between an individual flat setup tailored to custom resident needs or a collective community model designed to minimize shared operations cost.",
      items: [
        {
          title: "Individual System Setup",
          desc: "A customized, private solar installation for an individual flat owner utilizing their allocated share of the society roof.",
          points: [
            "Connection: resident's private flat consumer connection",
            "Space: equitably apportioned flat terrace square-footage",
            "Funding: paid 100% individually by the flat owner",
            "Best for flat owners with high personal power consumption",
            "Offsets individual high-tier utility electricity slab billing rates",
            "Private asset ownership remains with the flat owner",
            "Directly compatible with national and state rooftop solar subsidies",
          ],
        },
        {
          title: "Shared Society System",
          desc: "A shared, centralized solar plant powering the common utilities of the apartment complex, offsetting shared bills.",
          points: [
            "Connection: society common-area utility grid connections",
            "Space: unused common terrace space of the housing society",
            "Funding: RWA corpus fund, CAPEX, or shared investor model",
            "Best for complexes with lifts, water pumps & common loads",
            "Dramatically reduces monthly shared society maintenance fees",
            "Increases overall apartment property value & eco-friendly rating",
            "Simplest approval structure as the benefits serve all co-owners",
          ],
        },
      ],
    },
    {
      type: "dark",
      numbered: true,
      title: "Why Residential Complexes *Are Going Solar*",
      desc: "Deploying high-quality solar assets directly offsets long-term overheads while instantly elevating overall estate valuation.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      items: [
        { title: "Lower Common-Area Electricity Costs", desc: "Slash common-area maintenance bills by up to 90% by directly offsetting high-tariff commercial-tier grid consumption." },
        { title: "Sustainability Credentials for the Community", desc: "High visual clearance and compact, localized power generation directly matches urban commercial & industrial zone demands." },
        { title: "Increased Property & Resale Value", desc: "Green-certified residential units demand higher rental premiums and fetch far better value on active secondary markets." },
        { title: "Government Subsidy & Loan Eligibility", desc: "Get immediate access to state subsidies, favorable capital tax exemptions, and specialized bank solar schemes." },
      ],
    },
    {
      type: "accordion",
      title: "We Help You Navigate *Society Approvals*",
      subtitle: "Co-operative solar requires careful regulatory and community handling. Ksquare acts as your dedicated expert, facilitating every structural resolution and permit.",
      items: [
        { title: "RWA & Board Consultation Support", desc: "We present detailed, professional technical feasibility reports directly to your RWA board and society members to answer structural, cost, and layout questions clearly." },
        { title: "Terrace Allocation & Layout Planning", desc: "We model the terrace to allocate space fairly between flats or common systems, with a clear layout everyone can review." },
        { title: "DISCOM & Metering Coordination", desc: "We manage applications, dual-metering and net-metering with your DISCOM from submission to commissioning." },
      ],
      image: "/assets/pages/rooftop/roof_check.webp",
      imageAlt: "Engineer assessing a terrace for a solar installation",
      reverse: true,
    },
    {
      type: "steps",
      title: "Our Process For *Societies*",
      items: [
        { title: "Society / Owner Enquiry", desc: "Tell us about your building, roof area and electricity load.", icon: "headset" },
        { title: "Terrace Assessment & Load Study", desc: "Engineers survey the terrace and analyse common and flat-level consumption.", icon: "search" },
        { title: "Proposal Formulation", desc: "You receive a design, cost and savings proposal ready for the RWA.", icon: "file" },
        { title: "RWA Approval & Paperwork", desc: "We support resolutions, permits and DISCOM applications.", icon: "clipboard" },
        { title: "Professional Installation", desc: "Certified crews install the system using Ksquare-manufactured components.", icon: "wrench" },
        { title: "Commissioning & AMC Support", desc: "Net metering, commissioning and ongoing maintenance support.", icon: "zap" },
      ],
    },
    {
      type: "numbered",
      title: "Who We *Work With*",
      subtitle: "We build customized hardware mounts and metering solutions configured to fit the exact load profile of every cooperative stakeholder.",
      items: [
        { title: "Individual Flat Owners", desc: "Unlock your allocated apartment rooftop share with private, custom-angled arrays routed to your personal flat meter." },
        { title: "RWAs & Committees", desc: "Slash common utility overheads. Power water pumps, elevators and corridor lighting with a collective society-owned asset." },
        { title: "Builders & Developers", desc: "Deploy solar-ready, premium layouts from day one and strengthen green building compliance before community handover." },
      ],
    },
    { type: "faq", title: "Frequently Asked *Questions*", items: FAQ_HOME_SOLAR },
    {
      type: "cta",
      title: "Bring Solar To *Your Society*",
      desc: "Book a free terrace assessment. We will prepare a proposal your RWA can review with confidence.",
      ctas: [
        { label: "Book a Free Site Assessment", href: ROUTES.consultation },
        { label: "Talk to Our Experts", href: ROUTES.contact },
      ],
    },
  ],
};
