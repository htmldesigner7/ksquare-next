import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/monitoring";

export const page: PageData = {
  slug: "remote-monitoring",
  metaTitle: "Remote Monitoring for Your Solar System | Ksquare Energy",
  metaDescription:
    "Real-time visibility into your solar asset's performance, generation yield and health, wherever you are. Add Ksquare remote monitoring to any system.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Services" }, { label: "Remote Monitoring" }],
    title: "Remote Monitoring for *Your Solar System*",
    description: "Real-time visibility into your solar asset's performance, generation yield, and health parameters, wherever you are in the world.",
    ctas: [
      { label: "Add Monitoring to My System", href: ROUTES.contact },
      { label: "Talk to Our Team", href: ROUTES.contact },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 576, y: -251, w: 1079, h: 752 },
    imageAlt: "Engineer checking solar performance on a tablet",
  },
  sections: [
    {
      type: "cards",
      cols: 4,
      title: "What Remote Monitoring *Shows You*",
      items: [
        { title: "Real-Time Generation Output", desc: "Live kW output and daily, monthly and lifetime energy generated.", icon: "activity" },
        { title: "Consumption vs. Generation", desc: "See how much of your usage your system covers, and what you export.", icon: "zap" },
        { title: "Fault & Alert Detection", desc: "Instant alerts on inverter faults, string issues and communication loss.", icon: "shield" },
        { title: "Historical Performance Trends", desc: "Compare performance over time to spot soiling, shading and degradation.", icon: "monitor" },
      ],
    },
    {
      type: "cards",
      cols: 3,
      title: "Monitoring That Scales *With Your System*",
      items: [
        { title: "Homeowners · 5 kW Residential Solar", desc: "A clean, smartphone-optimised interface designed for families. Focuses on daily savings, environmental impact and simple health indicators.", image: `${IMG}/scale_home.webp` },
        { title: "Facility Managers · 10 kW Commercial Solar", desc: "Multi-site asset dashboard offering carbon accounting, consolidated portfolio reports, energy-cost offset telemetry and maintenance workflow triggers.", image: `${IMG}/scale_commercial.webp` },
        { title: "Plant Engineers · Industrial SCADA", desc: "High-frequency SCADA integration with sub-string resolution, weather station parameters, grid export control and utility-grade compliance logging.", image: `${IMG}/scale_industrial.webp` },
      ],
    },
    {
      type: "split",
      title: "Why Monitoring Protects *Your Investment*",
      paras: [
        "Remote monitoring is essential for protecting your solar investment and ensuring consistent performance over time. It helps detect faults early, reducing downtime and preventing small issues from becoming costly problems. Monitoring also verifies that your system is delivering the energy and ROI it was designed for.",
        "With real-time performance data, maintenance can be proactive rather than reactive, helping maintain efficiency and extend the life of your solar system.",
      ],
      image: `${IMG}/why.webp`,
      imageAlt: "Home with rooftop solar panels",
    },
    {
      type: "steps",
      title: "How Our Monitoring *Works*",
      subtitle: "From the sensors on your roof to an alert on your phone, in three connected steps.",
      items: [
        { title: "Sensors & Loggers", desc: "Precision telemetry loggers monitor string-level current, inverter parameters and weather indicators at your location.", icon: "cpu" },
        { title: "Cloud Command Center", desc: "Encrypted data is sent to secure servers, updating the dashboard every 60 seconds.", icon: "monitor" },
        { title: "Ksquare Action Pathway", desc: "In the event of an anomaly, notifications are dispatched to both your client application and our engineering team.", icon: "headset" },
      ],
    },
    {
      type: "split",
      reverse: true,
      title: "Better Together: *Monitoring and AMC*",
      paras: [
        "Monitoring brings performance anomalies into clear view. Annual Maintenance Contracts (AMC) provide certified technicians on-site to inspect, clean, torque and repair.",
        "Together, they create an unbroken loop that protects your yield.",
      ],
      bullets: ["Monitor 24/7 and detect faults", "Dispatch AMC and validate yield"],
      image: `${IMG}/together.webp`,
      imageAlt: "Technician servicing rooftop solar panels",
      cta: { label: "Explore Annual Maintenance (AMC)", href: ROUTES.amc },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Is remote monitoring included with a new Ksquare solar system?", a: "Monitoring is available with Ksquare systems; whether it is bundled or an add-on depends on the system size and segment. Your consultant will confirm what is included in your proposal." },
        { q: "Can I monitor my system from my phone?", a: "Yes. The dashboard is optimised for smartphones, with live output, daily savings and alerts." },
        { q: "Does monitoring work for industrial or MW-scale plants?", a: "Yes. We offer SCADA-grade monitoring with sub-string resolution, weather station inputs and compliance logging for large plants." },
        { q: "What happens if the system detects a fault?", a: "Alerts are sent to you and to our engineering team, who can diagnose remotely and dispatch a technician if required." },
        { q: "Can I add monitoring to an existing solar system, not just a new one?", a: "In most cases, yes. A site check confirms inverter compatibility and the logger required." },
        { q: "Does remote monitoring cost extra?", a: "Pricing depends on system size and the monitoring tier. Get in touch and we'll share a quote." },
      ],
    },
    {
      type: "cta",
      title: "Get Full Visibility Into *Your Solar System*",
      desc: "Know how your system is performing, every day. Add Ksquare remote monitoring and catch problems before they cost you generation.",
      ctas: [
        { label: "Add Monitoring to My System", href: ROUTES.contact },
        { label: "Talk to Our Service Team", href: ROUTES.contact },
      ],
    },
  ],
};
