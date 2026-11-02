import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";
import { OFFICE } from "@/content/offices";

const IMG = "/assets/pages/track";

export const page: PageData = {
  slug: "track-solar-status",
  metaTitle: "Track Your Solar Project Status | Ksquare Energy",
  metaDescription:
    "Check updates on your installation, net metering approval and subsidy status in one place with your Ksquare tracking ID.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "Track Solar Status" }],
    title: "Track Your *Solar Project Status*",
    description: "Check updates on your installation, net metering approval and subsidy status — all in one place.",
    ctas: [
      { label: "Track My Project", href: "#track" },
      { label: "Contact Support", href: ROUTES.contact },
    ],
    image: `${IMG}/hero_bg.webp`,
    cutout: { image: `${IMG}/hero.webp`, x: 197, y: -174, w: 731, h: 674 },
    imageAlt: "Ksquare project engineer reviewing an installation",
  },
  sections: [
    {
      type: "form",
      id: "track",
      kind: "track",
      title: "Track Your *Solar Project Status*",
      subtitle:
        "Enter your tracking ID or reference number and registered mobile. Your tracking ID was sent via SMS and email after your enquiry or site visit.",
      office: OFFICE,
    },
    {
      type: "cards",
      cols: 3,
      tone: "white",
      title: "What You Can *Track Here*",
      subtitle: "Follow each stage of your project, from the first site survey to ongoing maintenance.",
      items: [
        { title: "Site Survey & Consultation", desc: "Track your site assessment, structural roof checks and design consultation scheduling.", icon: "search" },
        { title: "Installation Progress", desc: "Monitor your solar system assembly from component dispatch to structural installation.", icon: "wrench" },
        { title: "Net Metering Application", desc: "Check the submission, engineering inspection and DISCOM net-metering approvals.", icon: "zap" },
        { title: "Subsidy Application", desc: "Track central and state subsidy progress, including PM Surya Ghar.", icon: "rupee" },
        { title: "AMC Service Request", desc: "View scheduling and progress on ongoing maintenance, testing or AMC visits.", icon: "settings" },
      ],
    },
    {
      type: "steps",
      title: "What Happens *After You Submit?*",
      items: [
        { title: "Enquiry Received", desc: "Your initial request is logged in our system.", icon: "headset" },
        { title: "Site Survey Scheduled", desc: "An engineer is dispatched to check shading and roof load.", icon: "search" },
        { title: "Design & Proposal", desc: "Custom CAD models and electrical layouts are finalised.", icon: "ruler" },
        { title: "Subsidy Processing", desc: "PM Surya Ghar validation and processing.", icon: "rupee" },
        { title: "Net Metering Applied", desc: "Submission is sent to the local DISCOM authority.", icon: "file" },
        { title: "Project Completed", desc: "Handover documents and the performance portal go live.", icon: "badge" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "Where do I find my tracking ID?", a: "Your tracking ID is sent by SMS and email after your enquiry or site visit. If you can't find it, contact our support team with your registered phone number." },
        { q: "What can I track?", a: "Site survey and consultation, installation progress, net metering application, subsidy application and AMC service requests." },
        { q: "How often is the status updated?", a: "Statuses are updated as each stage is completed by our team or confirmed by the DISCOM or portal." },
        { q: "What if my project status looks wrong or stuck?", a: "Contact our support team with your tracking ID and we'll check it with the project engineer or the concerned authority." },
        { q: "Can I track a project installed by someone else?", a: "Tracking is available for projects handled by Ksquare. For other projects, please contact the installer." },
        { q: "Can I get updates by phone instead?", a: "Yes. Call +91 79 6969 7979 and our team will share the latest status." },
      ],
    },
    {
      type: "cta",
      title: "Need Help With *Your Project?*",
      desc: "Our support team is happy to give you an update or answer questions about your installation.",
      ctas: [
        { label: "Contact Support", href: ROUTES.contact },
        { label: "Talk to Our Experts", href: ROUTES.consultation },
      ],
    },
  ],
};
