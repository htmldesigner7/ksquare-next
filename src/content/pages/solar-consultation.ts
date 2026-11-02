import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/consultation";

export const page: PageData = {
  slug: "solar-consultation",
  metaTitle: "Solar Consultation Services | Ksquare Energy",
  metaDescription:
    "Expert guidance before you invest, from feasibility to system design, backed by the team that manufactures the components inside your solar system.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Services" }, { label: "Solar Consultation" }],
    title: "Solar Consultation *Services*",
    description:
      "Expert guidance before you invest — from feasibility to system design, backed by the team that manufactures the components inside your system.",
    ctas: [
      { label: "Book a Free Consultation", href: ROUTES.contact },
      { label: "Talk to a Solar Expert", href: ROUTES.contact },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 143, y: -237, w: 1629, h: 739 },
    imageAlt: "Solar engineer reviewing a rooftop design with a client",
  },
  sections: [
    {
      type: "cards",
      cols: 4,
      title: "What's Included in a *Ksquare Solar Consultation*",
      subtitle: "A structured engineering review that tells you exactly what to build, what it will cost and what you will save.",
      items: [
        { title: "Site & Roof Assessment", desc: "Structure, orientation, usable area and access are inspected on site.", icon: "search" },
        { title: "Load & Shadow Analysis", desc: "Your consumption pattern and shadow movement through the day are studied.", icon: "activity" },
        { title: "System Sizing Recommendation", desc: "The right capacity, layout and BOM for your load and roof.", icon: "ruler" },
        { title: "Subsidy & Net Metering Guidance", desc: "Eligible schemes and DISCOM requirements, explained clearly.", icon: "file" },
        { title: "ROI & Payback Estimate", desc: "A realistic savings and payback projection over the system's life.", icon: "rupee" },
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Consultation Engineered *for Every Scale*",
      items: [
        { title: "Homeowners", desc: "For homeowners ready to bring a monthly bill close to zero. Between the central PM Surya Ghar subsidy and Gujarat's own state top-up, a well-sized home can claim close to ₹98,000 in combined support.", image: `${IMG}/scale_home.webp`, href: ROUTES.residential, linkLabel: "Explore Home Solutions" },
        { title: "Businesses", desc: "For offices, hospitals, hotels, and retail spaces paying commercial power tariffs. Most commercial installations here pay for themselves in three to four years.", image: `${IMG}/scale_business.webp`, href: ROUTES.rooftop, linkLabel: "Explore Commercial Solutions" },
        { title: "Industrial Facilities", desc: "For factories and manufacturing units with large shed roofs and heavy daytime load. Engineered for accelerated depreciation and CEIG-approved grid integration.", image: `${IMG}/scale_factory.webp`, href: ROUTES.epc, linkLabel: "Explore Industrial Solutions" },
        { title: "EPC & OEMs", desc: "For apartment owners, housing societies, EPC firms and OEM brands working out how to share space, approvals and supply. We help navigate approvals, common-area systems and partnerships.", image: `${IMG}/scale_flat.webp`, href: ROUTES.rooftopFlats, linkLabel: "Explore Partner Programs" },
      ],
    },
    {
      type: "split",
      title: "Why Start With a Consultation, *Not a Quote*",
      paras: [
        "A solar installation is a 25-year electrical generation asset on your roof. Generic online calculators and instant quotes often overlook the structural load capability of older roofs, regional DISCOM rules, shading and your real consumption profile.",
        "A consultation gives you an engineer-led plan first, so you invest in the system that is right for your site rather than the one that is quickest to sell.",
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Engineer consulting with a homeowner",
      cta: { label: "Book a Free Sizing Session", href: ROUTES.contact },
    },
    {
      type: "steps",
      title: "How a Ksquare Consultation *Actually Runs*",
      items: [
        { title: "Digital Enquiry", desc: "Share your bills, roof details and goals online.", icon: "headset" },
        { title: "Technical Feasibility Site Visit", desc: "An engineer inspects your site in person.", icon: "search" },
        { title: "Engineering Sizing Report", desc: "We size the system and model generation and savings.", icon: "ruler" },
        { title: "BOS Sourcing Proposal", desc: "A bill of materials and commercial proposal you can compare.", icon: "package" },
        { title: "Decision, on Your Timeline", desc: "Proceed with Ksquare or keep the report; there's no obligation.", icon: "handshake" },
      ],
    },
    {
      type: "accordion",
      reverse: true,
      title: "Your Consultation *Deliverables*",
      subtitle: "We furnish you with independent engineering insights that you can keep, regardless of whether you choose Ksquare for execution.",
      items: [
        { title: "Written Feasibility Report", desc: "A documented assessment of your roof, structure, shading and grid connection." },
        { title: "Recommended System Size & BOM", desc: "The capacity, components and layout best matched to your consumption." },
        { title: "Cost / Savings Estimate", desc: "Transparent project cost, expected generation, savings and payback period." },
        { title: "Subsidy Eligibility Summary", desc: "Which central and state incentives apply, and what you need to claim them." },
      ],
      image: `${IMG}/deliverables.webp`,
      imageAlt: "Consultation report and rooftop plan",
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Is the solar consultation free?", a: "Yes. The initial consultation and site assessment are free. It covers a roof and load review, a recommended system size and an indicative savings estimate." },
        { q: "Do I need a site visit, or can this be done remotely?", a: "We can start remotely using your electricity bills and roof photos, but a site visit gives the most accurate design and is recommended before any commitment." },
        { q: "Will the consultation tell me if I qualify for a subsidy?", a: "Yes. We review your eligibility for central schemes such as PM Surya Ghar, state incentives and tax benefits where applicable." },
        { q: "Does Ksquare offer consultations for industrial or MW-scale projects?", a: "Yes. Commercial and industrial consultations include load profiling, shed-roof structural checks and grid integration planning." },
        { q: "What happens after the consultation?", a: "You receive a written report and proposal. You can proceed with Ksquare, or use the report to compare other offers." },
        { q: "How long does a typical consultation take?", a: "A site visit typically takes a few hours, and the written report follows shortly after, depending on site complexity." },
      ],
    },
    {
      type: "cta",
      title: "Ready for *Your Solar Consultation?*",
      desc: "Tell us about your property and we will arrange a call with a Ksquare solar expert.",
      ctas: [
        { label: "Book a Free Consultation", href: ROUTES.contact },
        { label: "Talk to a Solar Expert", href: ROUTES.contact },
      ],
    },
  ],
};
