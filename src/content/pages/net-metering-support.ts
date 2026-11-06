import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/net-metering";

export const page: PageData = {
  slug: "net-metering-support",
  metaTitle: "Net Metering Support for Solar Rooftop Systems | Ksquare Energy",
  metaDescription:
    "End-to-end help getting your net metering connection approved, so your system starts exporting green energy and generating savings from day one.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }, { label: "Government Solutions" }, { label: "Net Metering Support" }],
    title: "Net Metering Support for *Solar Rooftop Systems*",
    description: "End-to-end help getting your net metering connection approved, so your system starts exporting green energy and generating savings from day one.",
    ctas: [
      { label: "Get Net Metering Assistance", href: ROUTES.contact },
      { label: "Talk to Our Team", href: ROUTES.contact },
    ],
    fitTitle: true,
    bannerGap: 288,
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -355, w: 1875, h: 855 },
    imageAlt: "Rooftop solar panels connected to a bidirectional net meter and the utility grid",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "split",
      natural: true,
      imageSize: { w: 798, h: 269 },
      stats: [
        { value: "100+", label: "Team Members" },
        { value: "10+", label: "Career Opportunities" },
        { value: "Growing", label: "Work Culture" },
      ],
      title: "What Is Net Metering, *and Why Does It Matter*",
      paras: [
        "Net metering allows solar system owners to export surplus electricity back to the grid through a bidirectional meter. The exported units are credited against your electricity bill, effectively reducing your net energy cost.",
        "For the system to export, your installation must have an approved net metering connection with your local DISCOM. Without this crucial approval, any power sent to the grid will not be credited, slowing down your return on investment.",
      ],
      image: `${IMG}/what_diagram_white.png`,
      imageAlt: "Diagram of solar import and export through a bidirectional meter",
    },
    {
      type: "cards",
      cols: 3,
      iconRow: true,
      title: "What's Included in Our *Net Metering Support*",
      items: [
        { title: "Application Filing", desc: "We prepare and submit your net metering application to the DISCOM portal.", icon: "file" },
        { title: "Documentation Preparation", desc: "Single-line diagrams, test reports and certificates compiled and checked.", icon: "clipboard" },
        { title: "DISCOM Liaison", desc: "A single point of contact that follows up on queries and approvals.", icon: "handshake" },
        { title: "Bidirectional Meter Coordination", desc: "Meter procurement, testing and installation coordinated with the utility.", icon: "settings" },
        { title: "Inspection Scheduling", desc: "We book and attend the electrical inspection on your behalf.", icon: "search" },
        { title: "Activation Follow-Up", desc: "We stay on until your connection is live and exporting.", icon: "zap" },
      ],
    },
    {
      type: "dark",
      numbered: true,
      tops: [56, 479, 56, 414],
      title: "Why Net Metering Approval *Isn't Always Simple*",
      desc: "Approval involves multiple agencies, strict paperwork and timelines that differ across utilities. Here is where projects usually get stuck.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      items: [
        { title: "DISCOM-Specific Processes", desc: "Each utility maintains its own forms, web portals, technical clearance committees and internal approval workflows." },
        { title: "Documentation Requirements", desc: "Missing, inconsistent or uncertified paperwork remains the most common cause of grid-tie processing delays." },
        { title: "Inspection Scheduling", desc: "Coordinating electrical inspectorate appointments and physical tests with utility staff requires steady follow-through." },
        { title: "Timelines Vary by State", desc: "Regulatory SLA windows and sanctioning speed differ significantly depending on the circle where your plant is installed." },
      ],
    },
    {
      type: "cards",
      cols: 3,
      title: "Monitoring That Scales *With Your System*",
      items: [
        { title: "Residential Solar", tag: "Homeowners", meta: "5 kW", desc: "A clean, smartphone-optimized interface designed for families. Focuses on daily savings, direct environmental impact stats, and simple health indicators.", image: "/assets/pages/monitoring/scale_home.webp" },
        { title: "Commercial Solar", tag: "Facility Managers", meta: "10 kW", desc: "Multi-site asset dashboard offering carbon accounting, consolidated portfolio reports, energy-cost offset telemetry, and maintenance workflow triggers.", image: "/assets/pages/monitoring/scale_commercial.webp" },
        { title: "Industrial SCADA", tag: "Plant Engineers", meta: "8 kW", desc: "High-frequency SCADA integration with sub-string resolution, weather station parameters, grid export control loop parameters, and utility-grade compliance logging.", image: "/assets/pages/monitoring/scale_industrial.webp" },
      ],
    },
    {
      type: "steps",
      title: "Engineered *Delivery Flow*",
      subtitle: "A transparent, 5-stage engineering roadmap ensuring your specifications are built with repeatable industrial precision.",
      items: [
        { title: "Eligibility Check", desc: "We confirm your connection, sanctioned load and system capacity qualify.", icon: "search" },
        { title: "Application Filing", desc: "Your application is submitted to the DISCOM with the right details.", icon: "file" },
        { title: "Document Submission", desc: "Certificates, drawings and test reports are submitted and tracked.", icon: "clipboard" },
        { title: "Inspection & Installation", desc: "The utility inspects the system and installs the bidirectional meter.", icon: "wrench" },
        { title: "Connection Activation", desc: "Your net-metered connection goes live and exports begin.", icon: "zap" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What is net metering and how does it work?", a: "A bidirectional meter records the electricity you draw from the grid and the surplus your solar system exports. Exported units are credited against your consumption, so your bill reflects only the net units." },
        { q: "How long does net metering approval usually take?", a: "Timelines depend on your DISCOM and state, and on how complete your documentation is. We track the application and follow up so it keeps moving." },
        { q: "Does Ksquare handle the net metering application on my behalf?", a: "Yes. We prepare the documents, file the application, liaise with the DISCOM and coordinate inspection and meter installation." },
        { q: "Is net metering available for commercial and industrial connections, not just residential?", a: "Net metering policies cover many commercial and industrial connections, subject to state rules and capacity limits. We confirm what applies to your site." },
        { q: "What documents are needed for net metering approval?", a: "Typically a recent electricity bill, identity and ownership proof, a single-line diagram, equipment certificates and the installation completion report." },
        { q: "What happens if my net metering application is rejected or delayed?", a: "We identify the reason, correct the documentation and resubmit or escalate with the DISCOM as needed." },
      ],
    },
    {
      type: "cta",
      title: "Let Us Handle The *Net Metering Paperwork.*",
      desc: "From the first application to the day your meter starts exporting, Ksquare manages the process so you can start saving sooner.",
      ctas: [
        { label: "Get Net Metering Assistance", href: ROUTES.contact },
      ],
    },
  ],
};
