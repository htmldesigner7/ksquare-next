import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { FAQ_HOME_SOLAR } from "@/content/faqs";

const IMG = "/assets/pages/pm-surya-ghar";

export const page: PageData = {
  slug: "pm-surya-ghar",
  metaTitle: "PM Surya Ghar Muft Bijli Yojana Subsidy Assistance | Ksquare Energy",
  metaDescription:
    "Get central government subsidy of up to ₹78,000 on your home solar system. Ksquare, an empanelled vendor, manages the application, installation and net metering end to end.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }, { label: "PM Surya Ghar" }],
    title: "PM Surya Ghar *Muft Bijli Yojana*",
    description:
      "Get central government subsidy on your home solar system, with Ksquare Energy managing the entire application, installation, and net metering journey for you.",
    ctas: [
      { label: "Check My Eligibility", href: "#eligibility" },
      { label: "Get a Free Consultation", href: ROUTES.consultation },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -282, w: 1800, h: 782 },
    imageAlt: "A family beside their rooftop solar installation",
  },
  sections: [
    {
      type: "split",
      title: "What Is PM Surya Ghar *Muft Bijli Yojana ?*",
      paras: [
        "Launched by the Central Government, the PM Surya Ghar Muft Bijli Yojana provides substantial subsidies to households for setting up rooftop solar systems. The primary goal is to relieve middle-income families from high electricity tariffs while expanding clean energy across India.",
        "Eligible households receive a direct subsidy in their bank account after installation and inspection, along with access to collateral-free solar loans, so a home solar system can pay for itself through lower bills.",
      ],
      stats: [
        { value: "300 Units", label: "Free Electricity Per Month" },
        { value: "No-Cost EMI", label: "Collateral-Free Solar Loans" },
        { value: "500000+", label: "Products Supplied" },
      ],
      image: "/assets/pages/shared/team_award.webp",
      imageAlt: "The Ksquare Energy team receiving an award",
    },
    {
      type: "tiers",
      title: "How Much Subsidy *Can You Get?*",
      subtitle:
        "Under PM Surya Ghar Muft Bijli Yojana, the central government provides a direct subsidy credited to your bank account after system installation and inspection.",
      items: [
        {
          label: "UP TO 1 kW",
          title: "₹30,000 Subsidy",
          desc: "Ideal for small households with low electricity consumption — covers a basic rooftop solar setup.",
          points: ["Flat ₹30,000 central government subsidy", "Suitable for 1–2 BHK homes", "Generates ~120 units/month", "Perfect for monthly bills under ₹1,500"],
          cta: { label: "Get a Free Consultation", href: ROUTES.consultation },
        },
        {
          label: "UP TO 2 kW",
          title: "₹60,000 Subsidy",
          desc: "Best for mid-size families looking to offset most of their electricity bill with solar energy.",
          points: ["Flat ₹60,000 central government subsidy", "Suitable for 2–3 BHK homes", "Generates ~240 units/month", "Ideal for monthly bills of ₹1,500–₹3,000"],
          cta: { label: "Get a Free Consultation", href: ROUTES.consultation },
          featured: true,
        },
        {
          label: "3 kW & ABOVE",
          title: "₹78,000 Subsidy",
          desc: "Recommended for larger homes and high energy users — maximise your savings with the highest subsidy slab.",
          points: ["Flat ₹78,000 central government subsidy", "Suitable for 3+ BHK & large families", "Generates 360+ units/month", "Best for monthly bills above ₹3,000"],
          cta: { label: "Get a Free Consultation", href: ROUTES.consultation },
        },
      ],
    },
    {
      type: "eligibility",
      id: "eligibility",
      eligibleTitle: "Who Is Eligible?",
      eligibleDesc: "Check if your household qualifies for the PM Surya Ghar subsidy before you apply.",
      eligible: [
        "Indian citizen with an independent residential connection.",
        "Owns a clean, concrete/structural house with suitable rooftop area.",
        "Holds a valid utility electricity connection in their name.",
        "Has not previously availed any rooftop solar subsidy on the same meter.",
        "Electricity connection falls under a participating state/regional DISCOM.",
      ],
      docsTitle: "Documents You'll Need",
      docsDesc: "Keep these ready to complete your application and subsidy paperwork smoothly.",
      docs: [
        { title: "Recent Utility Bill", desc: "Electricity bill from past 3 months matching the applicant name." },
        { title: "Identity Proof", desc: "Aadhaar Card or PAN Card for official registration." },
        { title: "Rooftop Ownership Proof", desc: "Property registry copy or land tax assessment receipt." },
        { title: "Bank Account Details", desc: "Active bank passbook / cancelled cheque copy for subsidy transfer." },
      ],
    },
    {
      type: "dark",
      numbered: true,
      title: "Why Homeowners *Apply Through Ksquare*",
      desc: "Ksquare Energy is your trusted partner for a seamless PM Surya Ghar experience — from portal registration to subsidy disbursement, we handle it all.",
      bgImage: "/assets/pages/shared/dark_bg.webp",
      items: [
        { title: "Registered Installation Partner", desc: "Ksquare is an empanelled vendor under the PM Surya Ghar scheme, ensuring your installation meets all government-approved standards and guidelines." },
        { title: "End-to-End Application Handling", desc: "From portal registration and DISCOM approvals to net metering and subsidy claims — our team manages every step so you don't have to." },
        { title: "In-House Manufactured Components", desc: "We use our own BIS-certified solar panels and inverters, giving you direct quality control, faster delivery, and reliable after-sales support." },
        { title: "Dedicated After-Sales Support", desc: "Our relationship doesn't end at installation. Enjoy ongoing monitoring, maintenance support, and warranty service for complete peace of mind." },
      ],
    },
    {
      type: "steps",
      title: "How to Apply for *PM Surya Ghar Yojana*",
      items: [
        { title: "Portal Registration", desc: "Register on the National Rooftop Solar Portal with your mobile and DISCOM consumer number.", icon: "file" },
        { title: "Choose Ksquare", desc: "Select Ksquare Energy as your empanelled, certified installer vendor.", icon: "badge" },
        { title: "Feasibility Approval", desc: "Submit technical details. Your regional DISCOM reviews and grants feasibility consent.", icon: "clipboard" },
        { title: "System Installation", desc: "Our teams deliver and construct your system using state-of-the-art in-house components.", icon: "wrench" },
        { title: "Inspection & Net Meter", desc: "Apply for net-metering. DISCOM personnel inspect the setup and activate your bi-directional meter.", icon: "zap" },
        { title: "Subsidy Disbursed", desc: "Your commissioning report is uploaded, triggering a direct bank transfer of your subsidy within 30 days.", icon: "rupee" },
      ],
    },
    { type: "testimonials" },
    { type: "faq", title: "Frequently Asked *Questions*", items: FAQ_HOME_SOLAR },
    {
      type: "cta",
      title: "Ready to Claim Your *Solar Subsidy?*",
      desc: "Talk to Ksquare's PM Surya Ghar team. We'll check your eligibility, size your system and handle the paperwork from registration to subsidy credit.",
      ctas: [
        { label: "Check My Eligibility", href: "#eligibility" },
        { label: "Get a Free Consultation", href: ROUTES.consultation },
      ],
    },
  ],
};
