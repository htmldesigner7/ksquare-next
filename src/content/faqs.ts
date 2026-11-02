import type { FaqItem } from "@/components/common/Faq";

/** Shared answers for rooftop / residential installation FAQs, reused across solution pages. */
export const FAQ_HOME_SOLAR: FaqItem[] = [
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
];
