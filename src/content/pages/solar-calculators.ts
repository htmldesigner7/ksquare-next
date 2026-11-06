import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/calculators";

export const page: PageData = {
  slug: "solar-calculators",
  metaTitle: "Solar Calculators: Panel, Inverter & Wire Size | Ksquare Energy",
  metaDescription:
    "Free solar calculators for panel size, inverter capacity and wire sizing. Get instant estimates in seconds, with no signup required.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Calculator" }],
    title: "Solar *Calculator*",
    singleLine: true,
    description: "Get instant estimates for your solar system — panel size, inverter capacity and wire sizing, in seconds. Free, no signup required.",
    ctas: [
      { label: "Choose a Calculator", href: "#calculators" },
      { label: "Book a Solar Expert", href: ROUTES.consultation },
    ],
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -206, w: 1800, h: 706 },
    imageAlt: "Engineer using a tablet beside solar panels",
  },
  sections: [
    {
      type: "calculators",
      id: "calculators",
      title: "Choose Your *Calculator*",
      subtitle: "Pick a calculator, enter your details and see the result update instantly.",
    },
    {
      type: "split",
      tight: true,
      title: "Why These Estimates Are a *Good Starting Point*",
      paras: [
        "Unlike generic calculators that use arbitrary averages, our logic is pre-programmed to reference active specs of Ksquare standard offerings — including premium ACDB, DCDB, copper cabling limits, and system inverters.",
        "Please keep in mind that online math cannot substitute for a meticulous structural and shadow site analysis. These results establish highly-accurate baselines to help narrow down system scale options before our engineers perform field tests.",
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy engineering team",
      cta: { label: "Learn About Our Engineering Process", href: ROUTES.consultation },
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "How accurate are these solar calculators?", a: "They give a reliable starting estimate using average tariffs, generation figures and standard panel ratings. A site assessment refines the result for your roof, shading and load." },
        { q: "How is the system size calculated from my electricity bill?", a: "We convert your bill into monthly units using an average tariff, then divide by the typical monthly generation per kW for your state." },
        { q: "How does the inverter calculator choose a size?", a: "It matches the inverter to your panel capacity using a DC:AC ratio of 1.05–1.15 and, for off-grid and hybrid systems, also checks your connected load." },
        { q: "How is the wire size worked out?", a: "The calculator finds the smallest standard cross-section that keeps voltage drop within your chosen limit for the current, voltage, length and conductor material." },
        { q: "Is the cost estimate final?", a: "No. The range is indicative and before subsidy. A formal proposal depends on your site, components and applicable incentives." },
        { q: "Do I need to sign up to use the calculators?", a: "No. The calculators are free to use and need no signup." },
      ],
    },
    {
      type: "cta",
      title: "Ready to Turn *Estimates Into a Plan?*",
      desc: "Book a free site assessment and our engineers will confirm the right system for your home or business.",
      ctas: [
        { label: "Book a Solar Expert", href: ROUTES.consultation },
        { label: "Request a Quote", href: ROUTES.contact },
      ],
    },
  ],
};
