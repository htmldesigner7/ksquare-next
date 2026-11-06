import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { WEST_ZONE } from "@/content/offices";

const IMG = "/assets/pages/residential";

export const page: PageData = {
  slug: "residential-solar",
  metaTitle: "Residential Solar in Ahmedabad & Gujarat | Ksquare Energy",
  metaDescription:
    "Turn your rooftop into a long-term energy asset. Ksquare designs, installs and supports residential solar systems sized around your home's consumption, roof space and budget.",
  hero: {
    crumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Solutions" },
      { label: "Solar Solution" },
      { label: "Residential Solar" },
    ],
    title: "Residential Solar for Homes *in Ahmedabad & Gujarat*",
    description:
      "Turn your rooftop into a long-term energy asset with a solar system designed around your home's electricity consumption, available roof space, and energy requirements.",
    ctas: [
      { label: "Get a Free Site Survey", href: ROUTES.consultation },
      { label: "Calculate Savings", href: ROUTES.calculators },
    ],
    crumbRow: true,
    bannerGap: 198,
    afterGap: 37,
    titleWidth: 900,
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -157, w: 1800, h: 657 },
    imageAlt: "A family standing in front of their home with a rooftop solar system",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "split",
      tight: true,
      title: "Why Homeowners *Trust Ksquare*",
      paras: [
        "No middlemen. Source directly from Ksquare's state-of-the-art manufacturing facility in Ahmedabad for maximum profitability. Co-branded marketing materials, digital collateral, and qualified regional lead sharing to accelerate your local sales pipeline.",
        "Comprehensive product training sessions and dedicated ongoing engineering assistance for complex solar commercial projects. 9,000+ completed projects across India. Partner with an industry name trusted by major EPCs, OEMs, and distributors.",
      ],
      stats: [
        { value: "8+", label: "Years of Experience" },
        { value: "18k", label: "Sq. Ft. Facility" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: `/assets/pages/shared/team_award.webp`,
      imageAlt: "Ksquare Energy team receiving an award",
    },
    {
      type: "table",
      id: "savings",
      title: "How Much Can You Save *With Rooftop Solar ?*",
      subtitle: "Determine the approximate solar system capacity recommended based on your current residential monthly grid consumption.",
      head: ["Monthly Bill Range", "Recommended System", "Est. Monthly Saving", "Approx. Payback"],
      rows: [
        ["₹2,000–₹3,000", "1 kW", "₹1,200–₹1,800", "5–6 Years"],
        ["₹4,000–₹6,000", "3 kW", "₹3,500–₹5,000", "4–5 Years"],
        ["₹6,000–₹10,000", "5 kW", "₹5,500–₹8,000", "3–4 Years"],
        ["₹15,000+", "10 kW", "₹12,000–₹15,000", "3–4 Years"],
      ],
      note: "* Savings are indicative and vary by state tariff, roof orientation, shading and sanctioned load. Get an exact estimate with a free site assessment.",
      cta: { label: "Get My Savings Estimate", href: ROUTES.consultation },
    },
    {
      type: "split",
      tight: true,
      title: "PM Surya Ghar Yojana - *Subsidy Assistance For Your Home.*",
      paras: [
        "Under the PM Surya Ghar Muft Bijli Yojana, eligible households can receive central financial assistance on rooftop solar systems. Ksquare handles the paperwork end to end, so you can focus on the savings instead of the forms.",
        "From checking eligibility and registering on the national portal to DISCOM approvals, inspection and subsidy claim follow-up, our team coordinates every step. Regular performance insights then make sure your system keeps delivering reliable savings for years to come.",
      ],
      image: `${IMG}/subsidy.webp`,
      imageAlt: "Rooftop solar panels at sunrise",
      cta: { label: "Check Subsidy Eligibility", href: ROUTES.pmSuryaGhar },
    },
    {
      type: "steps",
      title: "How a Ksquare rooftop *project actually runs*",
      items: [
        { title: "Site Visit", desc: "An engineer checks your roof, shadow free area, and sanctioned load.", icon: "search" },
        { title: "Design", desc: "The system is sized according to your actual electricity consumption.", icon: "ruler" },
        { title: "Paperwork", desc: "DISCOM and subsidy applications are handled where applicable.", icon: "file" },
        { title: "Installation", desc: "Our own crews install the system using our manufactured components.", icon: "wrench" },
        { title: "Commissioning", desc: "Net-metering and grid synchronization are coordinated with the DISCOM.", icon: "zap" },
        { title: "After-Sales", desc: "Monitoring and maintenance support continue after commissioning.", icon: "headset" },
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Designed Around *the Way You Live*",
      items: [
        { title: "Independent Bungalows", desc: "Systems sized to your sanctioned load with clean, low-profile mounting.", image: `${IMG}/card_dcdb.webp`, href: ROUTES.rooftop, linkLabel: "View Solutions" },
        { title: "Terraces & Large Roofs", desc: "Make use of larger terraces and match your high daytime household consumption flawlessly.", image: `${IMG}/card_acdb.webp`, href: ROUTES.rooftop, linkLabel: "View Solutions" },
        { title: "Row Houses", desc: "Compact layouts engineered for limited roof area and shared structures.", image: `${IMG}/card_row_houses.webp`, href: ROUTES.rooftop, linkLabel: "View Solutions" },
        { title: "Housing Societies", desc: "Community solar for common areas and shared amenities, built for lower maintenance bills.", image: `${IMG}/card_societies.webp`, href: ROUTES.rooftopFlats, linkLabel: "View Solutions" },
      ],
    },
    {
      type: "compare",
      title: "On-Grid, Off-Grid or Hybrid- *Which is Right For Your Home*",
      items: [
        {
          title: "On-Grid System",
          desc: "Best suited for urban residences with stable grid connectivity. Highly cost-effective option utilizing standard net metering laws.",
          points: ["Direct bill reduction via net metering", "Lowest initial capital investment required", "Fully eligible for government solar subsidies"],
        },
        {
          title: "Off-Grid System",
          desc: "Perfect for remote farmhouses or rural zones with severe power outage histories. Relies fully on robust battery reserves.",
          points: ["Complete independence from utility company", "Battery backup powers basic household appliances", "Requires no grid-connection approval processes"],
        },
        {
          title: "Hybrid System",
          desc: "The premium ultimate choice combining grid connectivity with dedicated battery storage reserves for uninterrupted luxury.",
          points: ["Power backup continues during active grid outages", "Maintains full eligible net metering credits", "Smart power management profiles in-app"],
        },
      ],
    },
    { type: "testimonials" },
    {
      type: "locations",
      title: "Residential Solar Installation *Across India*",
      subtitle: "Strategically located offices and manufacturing facilities to serve you better with quick support and seamless operations.",
      zones: [WEST_ZONE],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        {
          q: "How long does the installation take?",
          a: "The physical installation generally takes only a few days (2-4 days depending on roof type). However, the complete process from structural review to official net-metering synchronization with DISCOM can take 4-6 weeks depending on local government clearances and utility approvals.",
        },
        {
          q: "Will I get credit for surplus electricity?",
          a: "Yes. With an on-grid system and a net meter, units your panels export to the grid are credited against the units you draw, which reduces your monthly bill. We coordinate the net-metering application with your DISCOM.",
        },
        {
          q: "Does solar work during cloudy or rainy days?",
          a: "Yes, though output is lower. Panels still generate from diffused sunlight on overcast days; the system is sized on annual generation so seasonal dips are already accounted for.",
        },
        {
          q: "How much roof space do I need?",
          a: "As a rule of thumb, each kW of solar needs roughly 80-100 sq. ft. of shadow-free area. A site survey gives you an exact layout based on your roof.",
        },
        {
          q: "Can I install solar if my roof has partial shade?",
          a: "In most cases, yes. Our engineers map shadows through the day and position panels on the shade-free area, and can add module-level optimisation where needed.",
        },
        {
          q: "Can I get a subsidy for my home solar system?",
          a: "Eligible residential consumers can claim central financial assistance under the PM Surya Ghar Muft Bijli Yojana. Ksquare helps with eligibility checks, registration and documentation.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Power Your *Home With Solar ?*",
      desc: "Get a free site assessment and savings estimate from Ksquare's residential solar team. Our engineers manage the entire roadmap from survey to active commissioning.",
      ctas: [
        { label: "Request a Quote", href: ROUTES.contact },
        { label: "Calculate My Savings", href: ROUTES.calculators },
      ],
    },
  ],
};
