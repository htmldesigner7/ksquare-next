import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/news-events";

export const page: PageData = {
  slug: "news-events",
  metaTitle: "News & Events: Exhibitions & Trade Shows | Ksquare Energy",
  metaDescription:
    "Explore solar industry events where Ksquare Energy showcases innovations, connects with partners and drives the renewable energy conversation forward.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About Us" }, { label: "News & Events" }],
    title: "Event & *Exhibitions*",
    description:
      "Explore solar industry events where Ksquare Energy showcases innovations, connects with partners, and drives the renewable energy conversation forward.",
    ctas: [
      { label: "Get a Free Site Survey", href: ROUTES.consultation },
      { label: "Calculate Savings", href: ROUTES.calculators },
    ],
    cutout: { image: `${IMG}/hero_full.webp`, x: 0, y: -204, w: 1800, h: 704 },
    imageAlt: "Ksquare Energy exhibition stand at a solar trade show",
  },
  sections: [
    {
      type: "events",
      items: [
        { title: "Renewable Energy India Expo 2026", venue: "India Expo Centre, Greater Noida", date: "Oct 15–17, 2026", image: `${IMG}/event_1.webp` },
        { title: "Intersolar India 2026", venue: "Bombay Exhibition Centre, Mumbai", date: "Sep 22–24, 2026", image: `${IMG}/event_2.webp` },
        { title: "Solar Power International 2026", venue: "Anaheim Convention Center, California, USA", date: "Sep 10–12, 2026", image: `${IMG}/event_3.webp` },
        { title: "REI Gujarat Solar Summit 2026", venue: "Mahatma Mandir, Gandhinagar", date: "Aug 5–7, 2026", image: `${IMG}/event_4.webp` },
        { title: "SNEC Solar Expo 2026", venue: "Shanghai New Int'l Expo Centre, China", date: "Jun 11–13, 2026", image: `${IMG}/event_5.webp` },
        { title: "World Future Energy Summit 2026", venue: "ADNEC, Abu Dhabi, UAE", date: "Apr 14–16, 2026", image: `${IMG}/event_6.webp` },
        { title: "Elecrama 2026", venue: "India Expo Mart, Greater Noida", date: "Feb 18–22, 2026", image: `${IMG}/event_7.webp` },
        { title: "Acrex India 2026", venue: "BEC, Mumbai", date: "Feb 13–15, 2026", image: `${IMG}/event_8.webp` },
        { title: "Solar Solutions International", venue: "Expo Greater Amsterdam, Netherlands", date: "Mar 12–14, 2026", image: `${IMG}/event_9.webp` },
      ],
    },
    {
      type: "cta",
      title: "Meet Ksquare *at an Event Near You*",
      desc: "Want to meet our team at an upcoming exhibition? Get in touch and we'll arrange a time to connect.",
      ctas: [
        { label: "Talk to Our Experts", href: ROUTES.contact },
        { label: "Become a Partner", href: ROUTES.partner },
      ],
    },
  ],
};
