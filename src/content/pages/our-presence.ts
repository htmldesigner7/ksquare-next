import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/our-presence";

export const page: PageData = {
  slug: "our-presence",
  metaTitle: "Our Presence Across India | Ksquare Energy",
  metaDescription:
    "Ksquare Energy has a strong presence across India, delivering reliable rooftop solar solutions for residential, commercial and industrial clients.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "Our Presence" }],
    title: "Our Presence *Across India*",
    description:
      "Ksquare Energy has a strong presence across India, delivering reliable roof-top solar solutions for residential, commercial, and industrial clients while driving the nation towards clean, affordable, and sustainable energy.",
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -187, w: 1800, h: 702 },
    imageAlt: "A solar-powered globe above a green city skyline",
  },
  sections: [
    {
      type: "split",
      title: "Leading Solar Company *in India*",
      paras: [
        "Ksquare is among India's foremost solar providers, committed to making clean, affordable energy accessible to homes, businesses and communities.",
        "With a strong national presence spanning 8 years, Ksquare has grown through dedication to quality products and timely service.",
      ],
      image: `${IMG}/leading.webp`,
      imageAlt: "Ksquare team at an awards ceremony",
    },
    {
      type: "cards",
      cols: 4,
      title: "Who *We Serve*",
      subtitle: "Powering Every Industry with Solar Solutions. From manufacturing to installation, Ksquare Energy supports every stakeholder with reliable products, technical expertise, and dependable service.",
      items: [
        { title: "EPC Companies", desc: "BOS components and technical support for solar EPC projects.", badge: "/assets/about/serve_epc.svg" },
        { title: "Installers", desc: "Dependable products that make installation faster and cleaner.", badge: "/assets/about/serve_installers.svg" },
        { title: "System Integrators", desc: "Certified components that integrate with your system designs.", badge: "/assets/about/serve_integrators.svg" },
        { title: "Distributors and Dealers", desc: "A trusted catalogue and partner programme for resellers.", badge: "/assets/about/serve_distributors.svg" },
        { title: "Export Partners", desc: "Export-ready products and documentation for overseas markets.", badge: "/assets/about/serve_export.svg" },
      ],
    },
    {
      type: "regions",
      title: "Expanding Horizons, *Building a Solar Future.*",
      desc: "From our base in Gujarat, Ksquare serves customers and partners across key states and is growing its footprint into new regions.",
      states: [
        { name: "Gujarat", blurb: "Our home state, with offices and a manufacturing facility in Ahmedabad.", cities: ["Ahmedabad", "Bhavnagar", "Dwarka", "Gandhinagar", "Mehsana", "Surat", "Vadodara", "Rajkot", "Jamnagar"] },
        { name: "Rajasthan" },
        { name: "Uttar Pradesh" },
        { name: "Madhya Pradesh" },
        { name: "Maharashtra" },
      ],
      map: "/assets/pages/shared/india_map.webp",
    },
    { type: "testimonials" },
    {
      type: "cta",
      title: "Find Ksquare *Near You*",
      desc: "Visit our offices and factory, or talk to our team about solar for your region.",
      ctas: [
        { label: "Visit Our Offices", href: ROUTES.contact },
        { label: "Become a Partner", href: ROUTES.partner },
      ],
    },
  ],
};
