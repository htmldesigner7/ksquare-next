/**
 * Single source of truth for site navigation. Header menus, footer sitemap and
 * in-page links all resolve through here so a route is only ever named once.
 */
export interface NavLink {
  label: string;
  href: string;
  /** One-line description shown under the link in the desktop mega menu. */
  desc?: string;
  /** Icon key (see page-kit/icons) for the tile beside the link in the mega menu. */
  icon?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

/** Highlight card on the right of a mega menu panel. */
export interface NavFeature {
  title: string;
  desc: string;
  cta: string;
  href: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
  feature?: NavFeature;
}

export const ROUTES = {
  home: "/",
  products: "/products/dcdb",
  dcdb: "/products/dcdb",
  inverter: "/products/ksquare-inverter",
  residential: "/solutions/residential-solar",
  rooftop: "/solutions/rooftop-solar",
  rooftopFlats: "/solutions/rooftop-solar-for-flats",
  pmSuryaGhar: "/solutions/pm-surya-ghar",
  netMetering: "/solutions/net-metering-support",
  subsidy: "/solutions/subsidy-assistance",
  epc: "/solutions/epc-solutions",
  oem: "/solutions/oem-solutions",
  exportSolutions: "/solutions/export-solutions",
  consultation: "/solutions/solar-consultation",
  monitoring: "/solutions/remote-monitoring",
  amc: "/solutions/annual-maintenance",
  privateLabel: "/manufacturing/private-label-manufacturing",
  customDevelopment: "/manufacturing/custom-product-development",
  partner: "/partners/become-a-partner",
  oemPartnership: "/partners/oem-partnership",
  exportBusiness: "/partners/export-business",
  projects: "/projects",
  blog: "/blog",
  faqs: "/faqs",
  downloads: "/download-resources",
  about: "/about-us",
  leadership: "/about-us/leadership-team",
  infrastructure: "/our-infrastructure",
  certifications: "/about-us/certifications",
  awards: "/about-us/awards",
  news: "/about-us/news-events",
  press: "/about-us/press-releases",
  presence: "/about-us/our-presence",
  grievance: "/grievance",
  career: "/career",
  contact: "/contact",
  calculators: "/solar-calculators",
  track: "/track-solar-status",
  payment: "/payment-details",
} as const;

export const NAV: NavItem[] = [
  {
    label: "Products",
    href: ROUTES.products,
    groups: [
      {
        title: "Core Products",
        links: [
          { label: "DCDB", href: ROUTES.dcdb, desc: "DC distribution boxes for string-level protection", icon: "zap" },
          { label: "ACDB", href: ROUTES.dcdb, desc: "AC distribution with NVR protection and indication", icon: "activity" },
          { label: "Combiner Box", href: ROUTES.dcdb, desc: "Multi-string combiners for larger arrays", icon: "package" },
          { label: "Earthing Kits", href: ROUTES.dcdb, desc: "Complete grounding for modules and structures", icon: "shield" },
        ],
      },
      {
        title: "Our Brands",
        links: [{ label: "Ksquare Inverter", href: ROUTES.inverter, desc: "Smart solar inverters with remote monitoring", icon: "cpu" }],
      },
    ],
    feature: { title: "Solar DCDB range", desc: "Certified protection boxes engineered and tested in our Ahmedabad plant.", cta: "Explore products", href: ROUTES.products, image: "/assets/dcdb_banner.webp" },
  },
  {
    label: "Solutions",
    href: ROUTES.residential,
    groups: [
      {
        title: "Solar Solutions",
        links: [
          { label: "Residential Solar", href: ROUTES.residential, desc: "Rooftop systems designed around your home", icon: "home" },
          { label: "Rooftop Solar", href: ROUTES.rooftop, desc: "For RCC, metal sheet, tiled and tin shed roofs", icon: "sun" },
          { label: "Rooftop Solar for Flats", href: ROUTES.rooftopFlats, desc: "Shared systems for societies and apartments", icon: "building" },
        ],
      },
      {
        title: "Government Solutions",
        links: [
          { label: "PM Surya Ghar", href: ROUTES.pmSuryaGhar, desc: "Central subsidy handled end to end", icon: "badge" },
          { label: "Net Metering Support", href: ROUTES.netMetering, desc: "DISCOM approvals and grid synchronisation", icon: "file" },
          { label: "Subsidy Assistance", href: ROUTES.subsidy, desc: "Claim every eligible incentive", icon: "rupee" },
        ],
      },
      {
        title: "Business Solutions",
        links: [
          { label: "EPC Solutions", href: ROUTES.epc, desc: "Factory-direct BOS supply for EPCs and installers", icon: "wrench" },
          { label: "OEM Solutions", href: ROUTES.oem, desc: "Build your branded range on our production line", icon: "factory" },
          { label: "Export Solutions", href: ROUTES.exportSolutions, desc: "Export-ready BOS components, shipped worldwide", icon: "globe" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Solar Consultation", href: ROUTES.consultation, desc: "Free site assessment and system sizing", icon: "headset" },
          { label: "Remote Monitoring", href: ROUTES.monitoring, desc: "Live generation tracking and instant alerts", icon: "monitor" },
          { label: "Annual Maintenance", href: ROUTES.amc, desc: "Cleaning, health checks and quick repairs", icon: "settings" },
        ],
      },
    ],
    feature: { title: "Free site assessment", desc: "Get a system sized to your roof and bill, with the subsidy paperwork handled.", cta: "Book an assessment", href: ROUTES.consultation, image: "/assets/pages/residential/hero_full.webp" },
  },
  {
    label: "Manufacturing",
    href: ROUTES.privateLabel,
    groups: [
      {
        title: "Manufacturing",
        links: [
          { label: "Private Label Manufacturing", href: ROUTES.privateLabel, desc: "Your brand, built in our factory", icon: "package" },
          { label: "Custom Product Development", href: ROUTES.customDevelopment, desc: "Engineered around your requirements", icon: "ruler" },
          { label: "Our Infrastructure", href: ROUTES.infrastructure, desc: "Plant, testing lab and quality control", icon: "factory" },
        ],
      },
    ],
    feature: { title: "Your product, our factory", desc: "From private label to fully custom builds, made to your specification.", cta: "Start a project", href: ROUTES.customDevelopment, image: "/assets/pages/custom-development/hero_full.webp" },
  },
  { label: "Projects", href: ROUTES.projects },
  {
    label: "Resources",
    href: ROUTES.downloads,
    groups: [
      {
        title: "Resources",
        links: [
          { label: "Blogs", href: ROUTES.blog, desc: "Guides, news and technical insights", icon: "file" },
          { label: "Downloads", href: ROUTES.downloads, desc: "Brochures, datasheets and certificates", icon: "layers" },
          { label: "FAQs", href: ROUTES.faqs, desc: "Quick answers to common questions", icon: "search" },
          { label: "Solar Calculators", href: ROUTES.calculators, desc: "Size your system and estimate savings", icon: "calculator" },
        ],
      },
      {
        title: "Partners",
        links: [
          { label: "Become a Partner", href: ROUTES.partner, desc: "Join our distributor and dealer network", icon: "handshake" },
          { label: "OEM Partnership", href: ROUTES.oemPartnership, desc: "A long-term manufacturing partnership", icon: "handshake" },
          { label: "Export Business", href: ROUTES.exportBusiness, desc: "Represent Ksquare in your market", icon: "truck" },
        ],
      },
    ],
    feature: { title: "Learn before you buy", desc: "Read our latest guides on sizing, protection and subsidies.", cta: "Read the blog", href: ROUTES.blog, image: "/assets/blog/post_1.png" },
  },
  {
    label: "About us",
    href: ROUTES.about,
    groups: [
      {
        title: "Company",
        links: [
          { label: "Company Profile", href: ROUTES.about, desc: "Who we are and what we build", icon: "building" },
          { label: "Leadership Team", href: ROUTES.leadership, desc: "The people behind Ksquare", icon: "users" },
          { label: "Infrastructure", href: ROUTES.infrastructure, desc: "Our manufacturing facility", icon: "factory" },
          { label: "Quality & Certifications", href: ROUTES.certifications, desc: "BIS, CE, RoHS and test reports", icon: "badge" },
          { label: "Awards & Recognition", href: ROUTES.awards, desc: "Milestones that mark our journey", icon: "award" },
          { label: "Our Presence", href: ROUTES.presence, desc: "Offices and plants across India", icon: "pin" },
        ],
      },
      {
        title: "Media & Support",
        links: [
          { label: "News & Events", href: ROUTES.news, desc: "Exhibitions and company updates", icon: "clock" },
          { label: "Press Releases", href: ROUTES.press, desc: "Ksquare in the news", icon: "file" },
          { label: "Careers", href: ROUTES.career, desc: "Open positions at Ksquare", icon: "users" },
          { label: "Grievance", href: ROUTES.grievance, desc: "Raise a concern with our team", icon: "headset" },
          { label: "Track Solar Status", href: ROUTES.track, desc: "Follow your project stage by stage", icon: "activity" },
        ],
      },
    ],
    feature: { title: "Meet the team", desc: "The founders and engineers building Ksquare Energy.", cta: "Leadership team", href: ROUTES.leadership, image: "/assets/pages/leadership/hero_full.webp" },
  },
  { label: "Contact", href: ROUTES.contact },
];

/** Resolves footer sitemap labels to routes. Unlisted labels fall back to the closest parent page. */
const FOOTER_HREFS: Record<string, string> = {
  DCDB: ROUTES.dcdb,
  ACDB: ROUTES.dcdb,
  "Combiner Box": ROUTES.dcdb,
  "Junction Box": ROUTES.dcdb,
  "Zero Export Device": ROUTES.dcdb,
  "Solar Cables": ROUTES.dcdb,
  "MC4 Connectors": ROUTES.dcdb,
  Kenclozer: ROUTES.dcdb,
  "Custom Enclosures": ROUTES.dcdb,
  "Residential Solar": ROUTES.residential,
  "Industrial Solar": ROUTES.epc,
  "PM Surya Ghar": ROUTES.pmSuryaGhar,
  "Net Metering Support": ROUTES.netMetering,
  "Subsidy Assistance": ROUTES.subsidy,
  "EPC Solutions": ROUTES.epc,
  "OEM Solution": ROUTES.oem,
  "Export Solutions": ROUTES.exportSolutions,
  "Solar Consultation": ROUTES.consultation,
  "Remote Monitoring": ROUTES.monitoring,
  "Annual Maintenance": ROUTES.amc,
  Blogs: ROUTES.blog,
  "Case Studies": ROUTES.projects,
  Videos: ROUTES.downloads,
  Downloads: ROUTES.downloads,
  "Commercial Solar": ROUTES.rooftop,
  "Rooftop Solar": ROUTES.rooftop,
  "Rooftop Solar for Flats": ROUTES.rooftopFlats,
  "ACDB / LT Panels": ROUTES.dcdb,
  "LT Panels": ROUTES.dcdb,
  "Cable Glands": ROUTES.dcdb,
  "BOS Accessories": ROUTES.dcdb,
  "Earthing Kits": ROUTES.dcdb,
  "Ksquare Inverter": ROUTES.inverter,
  "Ksquare Panel": ROUTES.dcdb,
  Solsquare: ROUTES.dcdb,
  Solplast: ROUTES.dcdb,
  FAQs: ROUTES.faqs,
  "Residential Project": ROUTES.projects,
  "Commercial Project": ROUTES.projects,
  "Industrial Project": ROUTES.projects,
  "Government Project": ROUTES.projects,
  "Become a Partner": ROUTES.partner,
  "OEM Partnership": ROUTES.oemPartnership,
  "Export Business": ROUTES.exportBusiness,
  "Private Label Manufacturing": ROUTES.privateLabel,
  "Custom Product Development": ROUTES.customDevelopment,
  "Company Profile": ROUTES.about,
  "Leadership Team": ROUTES.leadership,
  Infrastructure: ROUTES.infrastructure,
  "Quality & Certifications": ROUTES.certifications,
  "Awards & Recognition": ROUTES.awards,
  "News & Events": ROUTES.news,
  CSR: ROUTES.about,
  Grievance: ROUTES.grievance,
  "Press Releases": ROUTES.press,
  "Our Presence": ROUTES.presence,
  Careers: ROUTES.career,
  Contact: ROUTES.contact,
  "Track Solar Status": ROUTES.track,
  Calculator: ROUTES.calculators,
};

export function footerHref(label: string): string {
  return FOOTER_HREFS[label] ?? ROUTES.home;
}

/**
 * Route prefixes whose pages render their own closing call-to-action banner,
 * so the global footer CTA is skipped to avoid two banners stacking.
 */
export const OWN_CTA_PREFIXES = [
  "/solutions/",
  "/partners/",
  "/manufacturing/",
  "/about-us/",
  "/solar-calculators",
  "/track-solar-status",
  "/payment-details",
];
