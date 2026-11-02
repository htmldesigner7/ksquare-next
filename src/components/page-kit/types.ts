import type { FaqItem } from "@/components/common/Faq";
import type { IconKey } from "./icons";

export interface Cta {
  label: string;
  href: string;
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface HeroData {
  crumbs: Crumb[];
  /** `*accent*` segments render in the italic serif. */
  title: string;
  description: string;
  ctas?: Cta[];
  /** Keep the title on one line instead of breaking before the italic accent. */
  singleLine?: boolean;
  /** Banner photo. Omit when the cutout already contains its own backdrop (composite hero). */
  image?: string;
  imageAlt: string;
  /** CSS object-position for the banner crop. */
  imagePosition?: string;
  /**
   * Transparent PNG layered over the banner so the subject pops above it.
   * Position/size are Figma pixels relative to the 1800x500 banner's top-left (negative y = rises above it).
   */
  cutout?: { image: string; x: number; y: number; w: number; h: number };
}

export interface Stat {
  value: string;
  label: string;
}

export interface CardItem {
  title: string;
  desc: string;
  image?: string;
  icon?: IconKey;
  /** Small badge/logo image shown in the icon tile (instead of an icon). */
  badge?: string;
  href?: string;
  linkLabel?: string;
}

export interface Office {
  name: string;
  address: string;
  mapQuery?: string;
}

export interface Zone {
  label: string;
  offices: Office[];
}

export type Tone = "white" | "soft";

export type Section =
  | {
      type: "split";
      id?: string;
      title: string;
      paras: string[];
      stats?: Stat[];
      bullets?: string[];
      image: string;
      imageAlt: string;
      /** "contain" suits diagrams; default "cover". */
      fit?: "cover" | "contain";
      reverse?: boolean;
      cta?: Cta;
      tone?: Tone;
    }
  | {
      type: "cards";
      id?: string;
      title: string;
      subtitle?: string;
      cols?: 2 | 3 | 4;
      align?: "center" | "left";
      /** "contain" suits transparent product shots; "cover" suits photography. */
      fit?: "cover" | "contain";
      items: CardItem[];
      tone?: Tone;
    }
  | {
      type: "table";
      id?: string;
      title: string;
      subtitle?: string;
      head: string[];
      rows: string[][];
      /** "plain" = left-aligned text columns; default highlights the 2nd/3rd columns as figures. */
      variant?: "metrics" | "plain";
      note?: string;
      cta?: Cta;
    }
  | {
      type: "steps";
      id?: string;
      title: string;
      subtitle?: string;
      /** Six steps default to the circle timeline, other counts to the hexagon chain. */
      variant?: "hex" | "circles";
      tone?: Tone;
      items: { title: string; desc: string; icon?: IconKey }[];
    }
  | {
      type: "tiers";
      id?: string;
      title: string;
      subtitle?: string;
      tone?: Tone;
      items: { label: string; title: string; desc: string; points: string[]; cta: Cta; featured?: boolean; badge?: string }[];
    }
  | {
      type: "compare";
      id?: string;
      title: string;
      subtitle?: string;
      items: { title: string; desc: string; points: string[] }[];
    }
  | { type: "band"; items: string[] }
  | { type: "numbered"; id?: string; title: string; subtitle?: string; tone?: Tone; items: { title: string; desc?: string }[] }
  | {
      type: "regions";
      id?: string;
      title: string;
      desc: string;
      states: { name: string; blurb?: string; cities?: string[] }[];
      map: string;
    }
  | {
      type: "dark";
      id?: string;
      title: string;
      desc: string;
      items?: { title: string; desc: string; value?: string }[];
      /** Photo backdrop (rendered under a dark overlay) instead of the brand pattern. */
      bgImage?: string;
      /** Prefix un-valued items with 01, 02… */
      numbered?: boolean;
      ctas?: Cta[];
    }
  | {
      type: "eligibility";
      id?: string;
      eligibleTitle: string;
      eligibleDesc: string;
      eligible: string[];
      docsTitle: string;
      docsDesc: string;
      docs: { title: string; desc: string }[];
    }
  | {
      type: "accordion";
      id?: string;
      title: string;
      subtitle?: string;
      tone?: Tone;
      /** Centre the heading above the accordion + photo (Figma "Who We Partner With" layout). */
      centerHeading?: boolean;
      items: { title: string; desc: string }[];
      image: string;
      imageAlt: string;
      reverse?: boolean;
    }
  | {
      type: "payment";
      id?: string;
      title: string;
      subtitle?: string;
      upi: { title: string; desc: string; qr: string; caption: string; holder: string; id: string };
      bank: { title: string; desc: string; rows: { label: string; value: string; copy?: boolean }[]; notice: string };
    }
  | { type: "calculators"; id?: string; title: string; subtitle?: string }
  | { type: "events"; id?: string; title?: string; subtitle?: string; items: { title: string; venue: string; date: string; image: string }[] }
  | { type: "articles"; id?: string; title?: string; subtitle?: string; items: { title: string; excerpt: string; image: string }[] }
  | { type: "team"; id?: string; title: string; subtitle?: string; members: { name: string; role: string; image: string }[] }
  | { type: "gallery"; id?: string; title: string; subtitle?: string; items: { title: string; category: string; image: string }[] }
  | {
      type: "timeline";
      id?: string;
      title: string;
      subtitle?: string;
      entries: { year: string; label: string; title: string; desc: string; imageBack: string; imageFront: string }[];
    }
  | { type: "featured"; id?: string; title: string; subtitle?: string; items: { title: string; desc: string; image: string }[] }
  | { type: "testimonials" }
  | { type: "locations"; title: string; subtitle?: string; zones: Zone[] }
  | { type: "faq"; id?: string; title: string; tone?: Tone; items: FaqItem[] }
  | {
      type: "form";
      id?: string;
      title: string;
      subtitle?: string;
      kind: FormKind;
      /** Right-hand "Corporate Office" column: heading, blurb and contact cards. */
      office?: { title: string; desc: string; cards: { icon: "phone" | "mail" | "pin"; title: string; lines: string[] }[] };
    }
  | { type: "cta"; title: string; desc: string; ctas: Cta[] };

export type FormKind = "partner" | "consultation" | "track" | "export" | "oem" | "quote";

export interface PageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: HeroData;
  sections: Section[];
}
