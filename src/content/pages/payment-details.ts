import type { PageData } from "@/components/page-kit/types";
import { ROUTES } from "@/content/routes";

const IMG = "/assets/pages/payment";

export const page: PageData = {
  slug: "payment-details",
  metaTitle: "Payment Details | Ksquare Energy",
  metaDescription:
    "Official payment options for Ksquare Energy Pvt. Ltd. Pay via UPI or bank transfer and confirm your payment.",
  hero: {
    crumbs: [{ label: "Home", href: ROUTES.home }, { label: "About us" }, { label: "Payment Details" }],
    title: "Ksquare Energy *Payment Details*",
    description: "Official payment options for Ksquare Energy Pvt. Ltd. — pay via UPI or bank transfer, and confirm your payment below.",
    ctas: [{ label: "Talk To Our Team", href: ROUTES.contact }],
    image: `${IMG}/hero_bg.webp`,
    imagePosition: "center 65%",
    cutout: { image: `${IMG}/hero.webp`, x: 0, y: -205, w: 1800, h: 705 },
    imageAlt: "Ksquare team member checking a payment on a phone beside a rooftop solar plant",
  },
  sections: [
    {
      type: "payment",
      title: "Choose How You'd *Like to Pay*",
      subtitle: "Use only the official details on this page. We never ask for payments to personal accounts.",
      upi: {
        title: "Option 1: Scan & Pay via UPI",
        desc: "Supports BHIM, Google Pay, PhonePe, Paytm, and all banking apps.",
        qr: `${IMG}/upi_qr.webp`,
        caption: "Scan for Instant Payment",
        holder: "Ksquare Energy Private Limited",
        id: "ksquareenergyprivatelimited@sbi",
      },
      bank: {
        title: "Option 2: Direct Bank Transfer (NEFT / RTGS / IMPS)",
        desc: "Transfer directly into Ksquare corporate accounts. Ideal for heavy machinery & volume BOS orders.",
        rows: [
          { label: "Bank Name", value: "State Bank Of India" },
          { label: "Account Type", value: "CC Account" },
          { label: "Account No.", value: "44281940207", copy: true },
          { label: "IFSC Code", value: "SBIN0005146", copy: true },
          { label: "Branch Location", value: "State Bank Of India – Sarkhej" },
        ],
        notice: 'Verify the IFSC and Account Name "Ksquare Energy Private Limited" before confirming the transaction.',
      },
    },
    {
      type: "numbered",
      title: "How to Confirm *Your Payment*",
      subtitle: "Complete these steps for immediate transaction reconciliation and official GST receipt dispatch.",
      items: [
        { title: "Make the Payment", desc: "Execute your transfer through the official UPI QR / ID or electronic bank account specified above." },
        { title: "Take a Screenshot", desc: "Ensure the UTR number, transaction reference ID, transferred amount and date are clearly readable." },
        { title: "Send to Ksquare", desc: "Transmit the confirmation immediately via WhatsApp or email for verification against your quotation." },
        { title: "Confirm Payment", desc: "Share your payment screenshot via WhatsApp or email to complete the verification process." },
      ],
    },
    {
      type: "split",
      title: "Important Payment *Information*",
      paras: ["Corporate security & transaction guidelines:"],
      bullets: [
        "Verify details before transferring: double-check the account number, IFSC code or UPI ID against this official page before authorizing any transaction.",
        "Use only the official details on this page: Ksquare Energy never requests fund transfers to personal accounts, unauthorized third-party gateways or unverified mobile numbers.",
        "Contact Ksquare if in doubt: if you receive any banking change request or suspect communication discrepancies, halt payment immediately and call our registered office.",
        "Quote your reference: mention your quotation or invoice number in the payment remarks to avoid delays in receipt generation.",
      ],
      image: `${IMG}/info.webp`,
      imageAlt: "Ksquare accounts team verifying a payment",
    },
    {
      type: "cards",
      cols: 3,
      title: "Need Help With *Your Payment?*",
      subtitle: "Direct assistance from our corporate accounts and billing reconciliation desk.",
      items: [
        { title: "Call Us Directly", desc: "+91 79 6969 7979 · Mon-Sat, 9 AM - 7 PM", icon: "headset" },
        { title: "Email Support", desc: "info@ksquareenergy.com · For project portfolios, floor plans and corporate pricing", icon: "file" },
        { title: "Ahmedabad Office", desc: "B-403/404 Signature - 2 Sarkhej Sanand Road, Sarkhej, Ahmedabad - 382210.", icon: "pin" },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked *Questions*",
      items: [
        { q: "What is the official Ksquare Energy UPI ID?", a: "The official UPI ID is ksquareenergyprivatelimited@sbi. Please verify it against this page before paying." },
        { q: "What are Ksquare Energy's bank details?", a: "Bank: State Bank Of India, Sarkhej branch. Account type: CC Account. Account No.: 44281940207. IFSC: SBIN0005146. Account name: Ksquare Energy Private Limited." },
        { q: "How do I confirm my payment?", a: "After paying, take a screenshot showing the UTR/reference number, amount and date, and send it to us via WhatsApp or email along with your quotation or invoice number." },
        { q: "Where should I send my payment screenshot?", a: "Email info@ksquareenergy.com or send it on WhatsApp to +91 79 6969 7979." },
      ],
    },
    {
      type: "cta",
      title: "Have a Question *Before You Pay?*",
      desc: "Our accounts team is happy to confirm payment details before you transfer. Reach out and we'll help.",
      ctas: [{ label: "Contact Ksquare Energy", href: ROUTES.contact }],
    },
  ],
};
