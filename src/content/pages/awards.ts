import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/awards";

export const page: PageData = {
  slug: "awards",
  metaTitle: "Awards & Recognition | Ksquare Energy",
  metaDescription:
    "Explore the awards and recognition associated with Ksquare Energy, certified by leading industry and state authorities.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "Awards & Recognition" }],
    title: "Recognition That *Reflects Our Work*",
    bannerGap: 201,
    description:
      "Explore the awards and recognition associated with Ksquare Energy. High-stakes milestones certified by the leading industrial and state authorities.",
    ctas: [
      { label: "Get in Touch", href: ROUTES.contact },
      { label: "Talk to Our Experts", href: ROUTES.consultation },
    ],
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -221, w: 1800, h: 721 },
    imageAlt: "Ksquare Energy leaders presenting a certificate of excellence and an award trophy",
  },
  sections: [
    {
      type: "band",
      items: ["ISO certified facility", "CE Marked", "BIS Compliant", "RoHS Compliant", "5-Year Performance Assurance"],
    },
    {
      type: "split",
      title: "Recognition Received *By Ksquare*",
      paras: [
        "Awards and recognition that reflect Ksquare Energy's commitment to quality manufacturing and solar energy solutions. Ksquare Energy has been recognized across the solar energy and manufacturing industry for its contributions to quality, innovation, and service delivery. The following awards represent verified milestones in Ksquare's corporate journey.",
        "By leveraging our high-precision manufacturing unit in Ahmedabad, we guarantee that all of our certified BOS components align with Indian state standards and global safety compliance benchmarks. Our awards reflect the direct trust built with EPCs, distribution channels, and utilities.",
      ],
      stats: [
        { value: "8+", label: "Years of Experience" },
        { value: "18k", label: "Sq. Ft. Facility" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team on stage as winners",
    },
    {
      type: "timeline",
      title: "Recognition *Timeline*",
      subtitle: "Milestones that mark Ksquare's journey of quality, innovation and service.",
      entries: [
        {
          year: "2018",
          label: "National Quality Excellence Awards",
          title: "Best Emerging Solar Company",
          desc: "Ksquare Energy received the Certificate of Excellence at the National Quality Excellence Awards 2018, recognising the company as the Best Emerging Solar Company.",
          imageBack: `${IMG}/award_back.webp`,
          imageFront: `${IMG}/hero.webp`,
        },
        {
          year: "2024",
          label: "State recognition",
          title: "Best Solar Energy Company in Gujarat",
          desc: "Ksquare Energy was recognised as the Best Solar Energy Company in Gujarat in 2024, a milestone that reflects our commitment to quality manufacturing and dependable service.",
          imageBack: `${IMG}/award_back.webp`,
          imageFront: `${IMG}/award_front.webp`,
        },
      ],
    },
    {
      type: "featured",
      title: "Featured *Award & Recognition*",
      subtitle: "A closer look at the recognition that matters most to our team and our customers.",
      items: [
        { title: "Certificate of Excellence", desc: "National Quality Excellence Awards 2018: Best Emerging Solar Company.", image: `${IMG}/hero.webp` },
        { title: "Best Solar Energy Company", desc: "Recognised for quality manufacturing and service across Gujarat in 2024.", image: `${IMG}/award_front.webp` },
        { title: "Best Team of the Year", desc: "The Ksquare team celebrating its Foundation Day milestone.", image: "/assets/pages/shared/team_award.webp" },
      ],
    },
    {
      type: "cta",
      title: "Want to Work With *Ksquare?*",
      desc: "Connect with Ksquare Energy to explore partnership opportunities, request quotes, or discuss your solar project requirements.",
      ctas: [
        { label: "Contact Us", href: ROUTES.contact },
        { label: "Explore Products", href: ROUTES.dcdb },
      ],
    },
  ],
};
