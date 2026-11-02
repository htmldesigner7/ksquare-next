import type { Zone } from "@/components/page-kit/types";

/** Offices and factory shown on location sections across the site (mirrors the Contact page). */
export const WEST_ZONE: Zone = {
  label: "West Zone",
  offices: [
    { name: "Ahmedabad", address: "B-403/404 Signature - 2 Sarkhej Sanand Road, Sarkhej, Ahmedabad - 382210." },
    { name: "Ksquare Factory", address: "Maha Gujarat Industrial Estate, Intas Pharma, 56, Sarkhej-Bavla Rd, B/h, Gujarat 382213" },
    { name: "Pune", address: "401-402, 4th floor, 45, Baner Rd, opposite Dmart , Veerbhadra Nagar, Baner, Pune , 411069" },
    { name: "Surat", address: "18th Floor The Junomoneta Tower, Opposite PAL RTO, Adajan, Surat, Gujarat 395009" },
  ],
};

/** "Corporate Office" column shown beside lead forms (copy from the Figma contact blocks). */
export const OFFICE: { title: string; desc: string; cards: { icon: "phone" | "mail" | "pin"; title: string; lines: string[] }[] } = {
  title: "Corporate Office",
  desc: "Visit our headquarters or get in touch through our direct business communication channels.",
  cards: [
    { icon: "phone", title: "Call Us Directly", lines: ["+91 79 6969 7979", "Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM"] },
    { icon: "mail", title: "Email Support", lines: ["info@ksquareenergy.com", "For project portfolios, floor plans, and corporate pricing"] },
    { icon: "pin", title: "Ahmedabad Branch Office", lines: ["Dholera SIR, Activation Zone Gujarat – 382460, India", "Strategically located inside the smart city development zone"] },
  ],
};
