import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { FAQ_HOME_SOLAR } from "@/content/faqs";

const IMG = "/assets/pages/rooftop";
const CARDS = "/assets/pages/residential";

export const page: PageData = {
  slug: "rooftop-solar",
  metaTitle: "Rooftop Solar System for Homes, Businesses & Industry | Ksquare Energy",
  metaDescription:
    "Solar power generated where you already have space — your roof. Manufactured and installed end-to-end by Ksquare for RCC, metal sheet, tiled and tin shed roofs.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }, { label: "Solar Solution" }, { label: "Rooftop Solar System" }],
    title: "Rooftop Solar *System*",
    singleLine: true,
    description: "Solar power generated where you already have space — your roof. Manufactured and installed end-to-end by Ksquare.",
    ctas: [
      { label: "Book a Free Site Assessment", href: ROUTES.consultation },
      { label: "Get a Free Consultation", href: ROUTES.consultation },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 21, y: -306, w: 1758, h: 806 },
    imageAlt: "Engineers installing a rooftop solar system",
  },
  sections: [
    {
      type: "table",
      variant: "plain",
      title: "Rooftop vs. Ground-Mount vs. Open Access",
      subtitle: "Understanding the core spatial and scale trade-offs helps locate the most optimal power harvesting blueprint for your estate.",
      head: ["Format", "Land Requirement", "Typical Scale", "Deployment Speed", "Best For"],
      rows: [
        ["Rooftop Solar", "No extra land (Existing roof)", "1 kW – 100 kW", "Fastest (2-4 Weeks)", "Homes, business storefronts & small industrial units"],
        ["Ground-Mount Solar", "Dedicated land area", "100 kW – 10 MW+", "Moderate (2-3 Months)", "Large scale factories, vacant rural land, utilities"],
        ["Open Access Solar", "Shared offsite plant (None onsite)", "1 MW+", "Slowest (6+ Months)", "Heavy energy-consuming corporate campuses"],
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Built for Every *Roof Type*",
      subtitle: "Different roofs require specialised anchoring frameworks. Ksquare designs custom mechanical mountings to securely hold systems in place for 25+ years.",
      items: [
        { title: "RCC Flat Roof", desc: "Concrete roofs offer the highest design flexibility. We install ballasted or anchored structural steel tripods to elevate and tilt panels perfectly towards the equator.", icon: "building" },
        { title: "Metal Sheet Roof", desc: "Extremely cost-effective. Panels are mounted parallel to the metal sheets using specialised non-penetrative roof clamps that guarantee zero leakages.", icon: "layers" },
        { title: "Tiled or Sloped Roof", desc: "Uses custom slate or tile hooks integrated directly into the underlying structural rafters, fitting the existing roof aesthetic.", icon: "home" },
        { title: "Tin Shed", desc: "Engineered for lighter outbuildings or agricultural storage sheds, with pre-installation structural load testing to ensure absolute safety.", icon: "factory" },
      ],
    },
    {
      type: "dark",
      numbered: true,
      title: "Why Rooftop is the Right *Format for Most Sites*",
      desc: "By pairing immediate power generation directly at the point of consumption, rooftop systems maximize capital efficiency.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      items: [
        { title: "No Additional Land Requirement", desc: "Unlike vast utility-scale ground stations, rooftop systems leverage dead space, saving valuable plot land for other purposes." },
        { title: "Uses Space You Already Own", desc: "Turn your idle concrete slab or industrial warehouse tin roof into an active, income-generating energy harvester." },
        { title: "Ideal for Urban Settings", desc: "Compact, localised power generation directly matches urban commercial and industrial zone demands." },
        { title: "Net Metering & Subsidy Eligible", desc: "Export surplus power through net metering and, for homes, claim eligible government subsidies." },
      ],
    },
    {
      type: "accordion",
      title: "What We Check Before *Installing on Your Roof*",
      subtitle: "Every Ksquare setup begins with a comprehensive, professional site study to guarantee structure longevity and system harvesting efficiency.",
      items: [
        { title: "Warranty Validity Preservation", desc: "Our structural engineers calculate both the dead load (panels + structures) and wind load factors to verify your roof easily sustains the solar setup without bending or fatigue." },
        { title: "Peak Generation Efficiency", desc: "We study orientation, tilt and shadow patterns through the day so every panel is placed where it produces the most energy." },
        { title: "Extended Equipment Lifespan", desc: "Corrosion-resistant mounting, proper earthing and ventilation keep the system performing reliably for decades." },
      ],
      image: `${IMG}/roof_check.webp`,
      imageAlt: "Engineer inspecting a rooftop before a solar installation",
    },
    {
      type: "cards",
      cols: 4,
      title: "Designed Around *the Way You Live*",
      subtitle: "Rooftop solar suits most homes, businesses and small-to-mid industrial facilities with adequate roof space. Larger industrial sites may combine rooftop with open access or ground-mount for additional capacity.",
      items: [
        { title: "Residential Solar", desc: "Lower monthly bills and build a sustainable home setup designed to run for 25+ years with state-supported subsidy assistance.", image: `${CARDS}/card_dcdb.webp`, href: ROUTES.residential, linkLabel: "Learn more" },
        { title: "Commercial Solar", desc: "Protect your business storefront, hotel, office, or hospital from rising grid tariffs with reliable on-grid components.", image: `${CARDS}/card_acdb.webp`, href: ROUTES.epc, linkLabel: "Learn more" },
        { title: "Industrial Solar", desc: "Transform unused warehouse sheds into high-efficiency power generation and drive down production overheads.", image: `${CARDS}/card_row_houses.webp`, href: ROUTES.epc, linkLabel: "Learn more" },
        { title: "Rooftop For Flats", desc: "Empower apartment buildings and housing societies with shared common meters and seamless regulatory approvals.", image: `${CARDS}/card_societies.webp`, href: ROUTES.rooftopFlats, linkLabel: "Learn more" },
      ],
    },
    {
      type: "steps",
      title: "Our Rooftop Installation Process",
      subtitle: "From custom site evaluations to grid integration, our engineering teams manage every detail to deliver a seamless, leak-proof transition to clean energy.",
      items: [
        { title: "Site & Roof Assessment", desc: "We analyse structural integrity, load-bearing capacities, and shading issues using accurate 3D modelling tools.", icon: "search" },
        { title: "Mounting Structure Design", desc: "Custom wind-resistant mounting frames matched to your specific concrete or metal roof layout.", icon: "ruler" },
        { title: "Installation", desc: "Certified crews secure structures, place premium panels, and deploy waterproofing barriers.", icon: "wrench" },
        { title: "Net Metering", desc: "We coordinate with the local DISCOM to secure approvals, install net meters, and commission the plant.", icon: "zap" },
        { title: "Monitoring & AMC", desc: "Immediate access to a performance dashboard, covered by comprehensive support packages.", icon: "monitor" },
      ],
    },
    { type: "testimonials" },
    { type: "faq", title: "Frequently Asked *Questions*", items: FAQ_HOME_SOLAR },
    {
      type: "cta",
      title: "Ready to Put *Your Roof to Work?*",
      desc: "Book a free site assessment. Our engineers will study your roof and recommend the right system size, layout and savings estimate.",
      ctas: [
        { label: "Book a Free Site Assessment", href: ROUTES.consultation },
        { label: "Calculate Savings", href: ROUTES.calculators },
      ],
    },
  ],
};
