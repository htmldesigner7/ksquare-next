import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/leadership";

export const page: PageData = {
  slug: "leadership-team",
  metaTitle: "Leadership Team | Ksquare Energy",
  metaDescription:
    "Meet the founders and leaders of Ksquare Energy: engineers who built the company from the factory floor and still run it with operational accountability and engineering precision.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "Leadership Team" }],
    title: "Leadership Behind *The Journey*",
    bannerGap: 193,
    afterGap: 38,
    description:
      "At KSquare Energy, leadership is defined by operational accountability and engineering precision. We build teams that translate complex solar challenges into robust, reliable manufacturing and execution.",
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -153, w: 1800, h: 653 },
    imageAlt: "The Ksquare Energy leadership team",
  },
  sectionPadding: 50,
  sections: [
    {
      type: "split",
      title: "Leadership With a View *From the Ground Up*",
      paras: [
        "At KSquare, leadership isn't confined to the boardroom. True understanding of the solar manufacturing ecosystem requires getting our hands dirty on the factory floor. We believe that the best strategic decisions are rooted in a deep, technical comprehension of our engineering capabilities and production realities.",
        "Our founders started as engineers, and that foundational technical rigor still dictates how we operate today. We manage risks meticulously, optimize processes relentlessly, and never compromise on the structural integrity of our products or our promises.",
      ],
      stats: [
        { value: "8+", label: "Years of Experience" },
        { value: "18k", label: "Sq. Ft. Facility" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: `${IMG}/ground_up.webp`,
      imageAlt: "Ksquare leaders on the factory floor",
    },
    {
      type: "team",
      title: "The *Executive Team*",
      subtitle: "The people accountable for every product that leaves our factory.",
      members: [
        { name: "Kuldip Sorathiya", role: "Founder & Director", image: `${IMG}/founder.webp`, desc: "Lorem ipsum dolor sit amet consectetur. Amet velit scelerisque facilisis nisl metus mollis. At cras leo bibendum pellentesque feugiat diam dictum sit sollicitudin. Id turpis et in feugiat mollis nisl. Id sed quis nunc bibendum justo blandit." },
        { name: "Kalpesh Sorathiya", role: "Co-Founder", image: `${IMG}/cofounder.webp`, desc: "Lorem ipsum dolor sit amet consectetur. Amet velit scelerisque facilisis nisl metus mollis. At cras leo bibendum pellentesque feugiat diam dictum sit sollicitudin. Id turpis et in feugiat mollis nisl. Id sed quis nunc bibendum justo blandit." },
        { name: "Prakash Dobariya", role: "Factory Head", image: `${IMG}/factory_head.webp`, desc: "Lorem ipsum dolor sit amet consectetur. Amet velit scelerisque facilisis nisl metus mollis. At cras leo bibendum pellentesque feugiat diam dictum sit sollicitudin. Id turpis et in feugiat mollis nisl. Id sed quis nunc bibendum justo blandit." },
      ],
    },
    {
      type: "cards",
      cols: 3,
      title: "How *We Lead*",
      subtitle: "Three principles guide every decision, from the shop floor to the boardroom.",
      items: [
        { title: "Quality Is a Responsibility", desc: "Quality isn't a department. Every person who touches a product owns its performance, from raw material to dispatch.", icon: "shield" },
        { title: "Decisions Field-Tested", desc: "We make decisions with data from the factory floor and the installation site, not assumptions from a distance.", icon: "search" },
        { title: "Execution Builds Trust", desc: "We earn customer and partner confidence by delivering on timelines, specifications and after-sales commitments.", icon: "handshake" },
      ],
    },
    {
      type: "cta",
      title: "Build the Future of Solar *With Ksquare*",
      desc: "Join our team or partner with us to bring reliable, certified solar solutions to your market.",
      ctas: [
        { label: "View Careers", href: ROUTES.career },
        { label: "Become a Partner", href: ROUTES.partner },
      ],
    },
  ],
};
