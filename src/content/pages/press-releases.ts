import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/press";

const A = {
  title: "Launched With ₹15,000, Gujarat's Profitable, Non-Listed Bootstrapped Solar Startup Made ₹74 Cr Revenue in 2024, Eyes ₹1,000 Cr by 2030",
  excerpt:
    "Ksquare Energy, Gujarat-based solar startup founded by Kuldip Sorathiya, supported by his brother Kalpesh, is transforming rural India with rooftop solar solutions and supplying products to EPC companies.",
};
const B = {
  title: "Ksquare – Ahmedabad, Pioneering Solar Innovation for a Greener Future! Under 30's Kuldip Creates History!",
  excerpt:
    "What began in 2017 with no external funding has today powered 10,000+ rooftops across India and we believe this journey deserves the spotlight. Today I'd love to introduce you to the inspiring growth story of Ksquare Energy Pvt. Ltd.",
};
const C = {
  title: B.title,
  excerpt:
    "In 2016, Kuldip Sorathiya's dreams of studying in Canada were crushed when banks rejected his education loan. With ₹17 lakh in family debt and no way forward, he returned to his village in Gujarat.",
};

export const page: PageData = {
  slug: "press-releases",
  metaTitle: "Press & Media | Ksquare Energy",
  metaDescription:
    "Stay updated with Ksquare Energy's latest news, press releases and media coverage from across the solar industry.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "Press Release" }],
    title: "Press & *Media*",
    description: "Stay updated with Ksquare Energy's latest news, press releases, and media coverage from across the solar industry.",
    ctas: [
      { label: "Get a Free Site Survey", href: ROUTES.consultation },
      { label: "Calculate Savings", href: ROUTES.calculators },
    ],
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -199, w: 1800, h: 699 },
    imageAlt: "Ksquare Energy team with media",
  },
  sections: [
    {
      type: "articles",
      items: [
        { ...A, image: `${IMG}/post_1.webp` },
        { ...B, image: `${IMG}/post_2.webp` },
        { ...C, image: `${IMG}/post_3.webp` },
        { ...B, image: `${IMG}/post_4.webp` },
        { ...A, image: `${IMG}/post_5.webp` },
        { ...C, image: `${IMG}/post_6.webp` },
      ],
    },
    {
      type: "cta",
      title: "Press & *Media Enquiries*",
      desc: "Writing about solar or the Ksquare story? Reach out to our team for interviews, product information and media assets.",
      ctas: [
        { label: "Contact Our Team", href: ROUTES.contact },
        { label: "Download Resources", href: ROUTES.downloads },
      ],
    },
  ],
};
