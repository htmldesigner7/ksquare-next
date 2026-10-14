export interface DcdbProduct {
  slug: string;
  title: string;
  highlight: string;
  breadcrumb: string;
  description: string;
  image: string;
}

export const dcdbProducts: Record<string, DcdbProduct> = {
  "1": {
    slug: "1",
    title: "1-3.5kW DCDB 1IN 1OUT 1MPPT",
    highlight: "Fuse Type",
    breadcrumb: "1-3.5kW DCDB 1IN 1OUT 1MPPT Fuse Type",
    description:
      "Engineered DC-side protection for 1.3–3.5kW solar arrays. This single-input, single-output DCDB uses fuse-based protection with RYB indication for clear fault visibility, keeping residential and small commercial installations safe from overcurrent, short circuits, and reverse current.",
    image: "/assets/img_1_1444.png",
  },
  "2": {
    slug: "2",
    title: "1-3.5kW DCDB 1IN 1OUT 1MPPT",
    highlight: "MCB Type",
    breadcrumb: "1-3.5kW DCDB 1IN 1OUT 1MPPT MCB Type",
    description:
      "Engineered DC-side protection for 1.3–3.5kW solar arrays. This single-input, single-output DCDB uses resettable MCB-based protection with RYB indication, giving installers a quick way to reset the circuit without replacing components after a fault.",
    image: "/assets/img_1_1455.png",
  },
  "3": {
    slug: "3",
    title: "4-7kW DCDB 2IN 2OUT",
    highlight: "2MPPT MCB Type",
    breadcrumb: "4-7kW DCDB 2IN 2OUT 2MPPT MCB type",
    description:
      "A dual-input, dual-output multi-string combiner built for 4–7kW arrays across two independent MPPT trackers. MCB-based protection on each string keeps commercial and larger residential systems reliable, with a weatherproof enclosure suited for utility-scale rollouts.",
    image: "/assets/img_1_1466.png",
  },
  "4": {
    slug: "4",
    title: "8-10kW DCDB 2IN 2OUT",
    highlight: "2MPPT MCB Type",
    breadcrumb: "8.10 KW DCDB 2in 2out 2mppt mcb type",
    description:
      "Built for 8–10kW installations, this array junction box combines dual-input, dual-output MCB protection with monitoring-ready terminal layouts, so EPCs and technicians can track string performance without opening the enclosure.",
    image: "/assets/img_1_1477.png",
  },
};

export function getDcdbProduct(slug: string): DcdbProduct {
  return dcdbProducts[slug] ?? dcdbProducts["1"];
}
