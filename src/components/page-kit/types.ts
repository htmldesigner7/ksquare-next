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
  /** Desktop gap (px) between the hero text block and the banner, when Figma differs from the default. */
  bannerGap?: number;
  /** Extra desktop space (px) under the banner before the first section, when Figma differs. */
  afterGap?: number;
  /** Breadcrumb on its own row above a top-aligned title + intro row, but the title still breaks before the italic accent. */
  crumbRow?: boolean;
  /** Desktop width (px) of the title column when Figma is wider than the default 792. */
  titleWidth?: number;
  /** Left column hugs breadcrumb + title (no fixed 179px title frame), for two-line titles whose block is shorter in Figma. */
  fitTitle?: boolean;
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
  /** Desktop column width (px) when Figma sets one per stat; default 200. */
  w?: number;
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
  /** Figma project card: audience chip above the title and a capacity label on its right. */
  tag?: string;
  meta?: string;
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
      type: "brandSwap";
      id?: string;
      title: string;
      paras: string[];
      cta?: Cta;
      /** Before / after panel: two captioned photos and a one-line note (Figma "Your Brand, Our Manufacturing"). */
      panel: { tag: string; caption: string; image: string }[];
      note: string;
    }
  | {
      type: "brandCallouts";
      id?: string;
      title: string;
      subtitle?: string;
      image: string;
      imageAlt: string;
      /** In order 1..4: left-top, left-bottom, right-top, right-bottom. */
      items: { title: string; desc: string }[];
    }
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
      /** Figma column that hugs its text (no fixed 413px text block; 30px title gap, 40px stack gap). */
      tight?: boolean;
      /** Figma column with a naturally wrapping title and a uniform 30px stack gap (no fixed text-block height). */
      natural?: boolean;
      /** Lay the bullet list out in two columns (Figma "What's Included"). */
      bulletCols?: 2;
      /** Photo box in Figma px (default 750x500), e.g. a 798x269 diagram. */
      imageSize?: { w: number; h: number };
      /** Optional second outline button beside `cta`. */
      cta2?: Cta;
    }
  | {
      type: "cards";
      id?: string;
      title: string;
      subtitle?: string;
      cols?: 2 | 3 | 4;
      align?: "center" | "left";
      /** Icon beside the title (Figma certificate / "Who We Serve" cards). */
      inline?: boolean;
      /** Figma heading with a 42px line box and a 17/26 subtitle up to 1270px wide. */
      compactHead?: boolean;
      /** "contain" suits transparent product shots; "cover" suits photography. */
      fit?: "cover" | "contain";
      /** Figma "Who We Serve" layout: icon beside the title, with this italic line as a sixth, borderless tile. */
      quote?: string;
      /** Icon beside the title on a plain card grid (no quote tile). */
      iconRow?: boolean;
      /** Icon-card links render as outline "Learn More" buttons (Figma subsidy cards). */
      linkButtons?: boolean;
      /** Compact bordered contact cards: round icon beside a title, a bold value (`meta`) and a note (`desc`). */
      contact?: boolean;
      /** Landscape 512x320 rounded photos instead of the portrait product crop. */
      wideImage?: boolean;
      /** With `quote`: keep the icon above the title (Figma "What's Included" layout) instead of beside it. */
      stacked?: boolean;
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
      /** Six-circle timeline whose steps alternate top / bottom (Figma "Custom Development Process"). */
      zigzag?: boolean;
      tone?: Tone;
      items: { title: string; desc: string; icon?: IconKey }[];
    }
  | {
      type: "tiers";
      /** Figma heading with a 42px line box (EPC); omit for the default 70px line box. */
      compactHead?: boolean;
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
      /** One bordered panel with two columns of labelled blocks and a button each (Figma "Not Sure Which You Need?"). */
      panel?: boolean;
      items: { title: string; desc: string; points: string[]; blocks?: { label: string; text: string }[]; cta?: Cta }[];
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
      /** Callout card top offsets (px, per card) when a Figma page differs from the default 56/479/56/393. */
      tops?: number[];
      /** Height (px) of the house artwork canvas when Figma differs from the default 648. */
      bgHeight?: number;
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
      /** Figma "Who We Partner With": 800px list column, 50px gap and a 750x550 photo under a compact heading. */
      tall?: boolean;
      /** Photo height (px) for the `tall` layout when Figma is shorter than the default 550. */
      imageHeight?: number;
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
  | { type: "team"; id?: string; title: string; subtitle?: string; members: { name: string; role: string; image: string; desc?: string }[] }
  | { type: "gallery"; id?: string; title: string; subtitle?: string; /** Tab order, when Figma lists tabs that have no documents yet. */ categories?: string[]; items: { title: string; category: string; image: string }[] }
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
  | { type: "diagram"; id?: string; title: string; subtitle?: string; image: string; imageAlt: string; /** Figma label positions inside the 1600 x 500 canvas (px). */ items: { title: string; desc: string; x: number; y: number; w: number }[] }
  | { type: "tracker"; id?: string; title: string; subtitle?: string; placeholder: string; button: string; note: string; link: Cta; success: string }
  | { type: "cta"; title: string; desc: string; ctas: Cta[] };

export type FormKind = "partner" | "consultation" | "track" | "export" | "oem" | "quote";

export interface PageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: HeroData;
  /** Desktop top/bottom padding (px) of each white section when Figma's section gap differs from the default 80 (gap = 2x). */
  sectionPadding?: number;
  /** Desktop gap (px) under the FAQ section when Figma differs from the page default. */
  faqBottom?: number;
  /** Extra desktop space (px) below the last section, before the footer, when Figma leaves it blank. */
  endGap?: number;
  sections: Section[];
}
