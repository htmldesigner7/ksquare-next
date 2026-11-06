import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/amc";

export const page: PageData = {
  slug: "annual-maintenance",
  metaTitle: "Annual Maintenance Contracts (AMC) for Solar Systems | Ksquare Energy",
  metaDescription:
    "Engineering-led AMC plans for residential, commercial and industrial solar systems from the manufacturer of the protection switchgear inside your array.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Services" }, { label: "Annual Maintenance (AMC)" }],
    title: "Annual Maintenance Contracts (AMC) *for Solar Systems*",
    description:
      "As the manufacturer of the critical protection switchgear inside your solar array, Ksquare delivers engineering-led upkeep that safeguards your generation yield and asset longevity.",
    ctas: [
      { label: "Get an AMC Quote", href: ROUTES.contact },
      { label: "Talk to Our Service Team", href: ROUTES.contact },
    ],
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -190, w: 1800, h: 690 },
    imageAlt: "Technicians maintaining a rooftop solar plant",
  },
  sections: [
    {
      type: "cards",
      cols: 3,
      quote: "Preventive care by the engineers who build the protection switchgear inside your array.",
      title: "What's Included *in Our AMC Plans*",
      subtitle: "Preventive care that keeps your system generating at its designed capacity year after year.",
      items: [
        { title: "Panel Cleaning", desc: "Scheduled module cleaning to remove dust and soiling losses.", icon: "sun" },
        { title: "Electrical Inspection", desc: "DCDB, ACDB, cabling, earthing and connection torque checks.", icon: "zap" },
        { title: "Performance Audit", desc: "Generation versus expected yield, with a service report.", icon: "activity" },
        { title: "Minor Repairs", desc: "On-the-spot fixes for routine wear and tear.", icon: "wrench" },
        { title: "Priority Support", desc: "Faster response times for AMC customers.", icon: "headset" },
      ],
    },
    {
      type: "tiers",
      title: "AMC Plans *by Segment*",
      subtitle: "Pick the plan that matches the size and criticality of your installation.",
      items: [
        {
          label: "ESSENTIAL CARE TIER",
          title: "Residential Rooftops",
          desc: "3 kW – 15 kW systems. Hassle-free upkeep for villas, bungalows and residential housing societies.",
          points: ["Quarterly scheduled visits", "Scheduled module cleaning cycles & dust clearance", "Rooftop junction box & DCDB verification", "Inverter health diagnostics & error code check", "Net-metering generation logs & performance card"],
          cta: { label: "Enquire for Residential AMC", href: ROUTES.contact },
        },
        {
          label: "COMPREHENSIVE COMMERCIAL TIER",
          title: "Commercial & Retail",
          desc: "15 kW – 150 kW systems. Operational reliability for factories, hospitals, institutions and commercial offices.",
          points: ["Bi-monthly / monthly schedules", "Infrared thermography hotspot scans on all modules", "String combiner box & DC switchgear maintenance", "Peak tariff optimisation & inverter curve calibration", "Quarterly generation compliance & carbon audit report"],
          cta: { label: "Enquire for Commercial AMC", href: ROUTES.contact },
          featured: true,
          badge: "MOST ACTIVE PLAN",
        },
        {
          label: "INDUSTRIAL ASSET STEWARDSHIP",
          title: "Industrial & Utility",
          desc: "150 kW to multi-MW plants. Plant-level maintenance protocols for large-scale captive and export facilities.",
          points: ["Continuous / planned outage schedules", "HT breaker & transformer insulation resistance testing", "Pyranometer recalibration & irradiance verification", "CEIG statutory inspection compliance audit", "Full SCADA logging & cloud telemetry synchronisation"],
          cta: { label: "Enquire for Industrial AMC", href: ROUTES.contact },
        },
      ],
    },
    {
      type: "accordion",
      title: "Why an AMC *Protects Your Investment*",
      subtitle: "Regular maintenance helps keep your solar system monitored, inspected and cared for over its operating life, helping identify maintenance needs before they become larger issues.",
      items: [
        { title: "Warranty Validity Preservation", desc: "Manufacturer warranties on inverters and tier-1 panels require documented periodic maintenance and certified torque checks. Without signed engineering logs, equipment claims are frequently rejected." },
        { title: "Peak Generation Efficiency", desc: "Cleaning, tightening and calibration recover generation lost to dust, loose connections and drift." },
        { title: "Extended Equipment Lifespan", desc: "Early detection of hotspots, corrosion and connection wear prevents damage that shortens equipment life." },
        { title: "Avoid Costly Unplanned Breakdowns", desc: "Preventive checks catch small issues before they become expensive outages." },
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Technician inspecting a solar array",
    },
    {
      type: "compare",
      title: "AMC Scope *What's Covered*",
      subtitle: "Crisp service boundaries ensuring zero ambiguity between routine preventive maintenance and out-of-scope major capital overhauls.",
      items: [
        {
          title: "Included Under Standard AMC",
          desc: "All standard maintenance activities required to keep the system generating at optimal health without billing surprises.",
          points: ["Routine cleaning", "Electrical inspection", "Performance checks", "Minor fixes*", "Service reporting"],
        },
        {
          title: "Excluded / Quoted Separately",
          desc: "Major capital equipment failures or external incidents requiring a separate quotation before execution.",
          points: ["Major component replacement", "Damage from external events", "Major / non-routine repairs"],
        },
      ],
    },
    {
      type: "steps",
      title: "Engineered *Delivery Flow*",
      subtitle: "A transparent, 5-stage engineering roadmap ensuring your specifications are built with repeatable industrial precision.",
      items: [
        { title: "Site Assessment", desc: "We inspect your plant and document its current condition.", icon: "search" },
        { title: "Custom AMC Plan", desc: "A visit schedule and scope matched to your system and segment.", icon: "clipboard" },
        { title: "Scheduled Visits", desc: "Certified technicians carry out cleaning, inspection and repairs.", icon: "wrench" },
        { title: "Performance Reporting", desc: "You receive a service report and yield analysis after each visit.", icon: "file" },
        { title: "Renewal", desc: "Review results and renew or adjust your plan each year.", icon: "badge" },
      ],
    },
    {
      type: "split",
      natural: true,
      reverse: true,
      title: "Better Together *AMC and Remote Monitoring*",
      paras: [
        "When your system is paired with Ksquare IoT Remote Monitoring, our service engineers don't wait for your call. Live string-level telemetry alerts our dispatch center the instant an inverter trips, a fuse blows, or generation drops, enabling proactive technician dispatch before you even notice on your bill.",
      ],
      bullets: ["Live string-level inverter diagnostics", "Instant SMS & portal alerts on fault detection", "Performance ratio tracking & degradation warnings"],
      image: `${IMG}/together.webp`,
      imageAlt: "Monitoring dashboard and technician on a rooftop",
      cta: { label: "Explore Remote Monitoring Solutions", href: ROUTES.monitoring },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Is an AMC mandatory for my solar system's warranty?", a: "AMC is recommended rather than mandatory, but many manufacturer warranties expect documented periodic maintenance. An AMC makes that documentation easy." },
        { q: "How often does Ksquare visit under an AMC plan?", a: "Residential plans typically include quarterly visits; commercial plans are bi-monthly or monthly; industrial plans follow a planned or continuous schedule." },
        { q: "What's the difference between AMC and a one-time service call?", a: "An AMC is a scheduled, preventive programme with reporting and priority support, while a service call is a reactive, one-off visit." },
        { q: "Does AMC cover panel replacement if a panel is damaged?", a: "Major component replacement is quoted separately. Routine cleaning, inspection and minor fixes are included." },
        { q: "Can I get an AMC for a system that wasn't installed by Ksquare?", a: "Yes. We carry out a site assessment first and then propose a plan suited to your system." },
        { q: "How is AMC priced: is it a flat fee or based on system size?", a: "Pricing depends mainly on system capacity, site complexity and the number of visits. Request a quote for your plant." },
      ],
    },
    {
      type: "cta",
      title: "Protect Your System With *an AMC Plan*",
      desc: "Talk to our service team about an AMC tailored to your system size and segment.",
      ctas: [
        { label: "Get an AMC Quote", href: ROUTES.contact },
      ],
    },
  ],
};
