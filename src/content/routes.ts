/**
 * Single source of truth for site navigation. Header menus, footer sitemap and
 * in-page links all resolve through here so a route is only ever named once.
 */
export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
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
          { label: "DCDB", href: ROUTES.dcdb },
          { label: "ACDB", href: ROUTES.dcdb },
          { label: "Combiner Box", href: ROUTES.dcdb },
          { label: "Earthing Kits", href: ROUTES.dcdb },
        ],
      },
      {
        title: "Our Brands",
        links: [{ label: "Ksquare Inverter", href: ROUTES.inverter }],
      },
    ],
  },
  {
    label: "Solutions",
    href: ROUTES.residential,
    groups: [
      {
        title: "Solar Solutions",
        links: [
          { label: "Residential Solar", href: ROUTES.residential },
          { label: "Rooftop Solar", href: ROUTES.rooftop },
          { label: "Rooftop Solar for Flats", href: ROUTES.rooftopFlats },
        ],
      },
      {
        title: "Government Solutions",
        links: [
          { label: "PM Surya Ghar", href: ROUTES.pmSuryaGhar },
          { label: "Net Metering Support", href: ROUTES.netMetering },
          { label: "Subsidy Assistance", href: ROUTES.subsidy },
        ],
      },
      {
        title: "Business Solutions",
        links: [
          { label: "EPC Solutions", href: ROUTES.epc },
          { label: "OEM Solutions", href: ROUTES.oem },
          { label: "Export Solutions", href: ROUTES.exportSolutions },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Solar Consultation", href: ROUTES.consultation },
          { label: "Remote Monitoring", href: ROUTES.monitoring },
          { label: "Annual Maintenance", href: ROUTES.amc },
        ],
      },
    ],
  },
  {
    label: "Manufacturing",
    href: ROUTES.privateLabel,
    groups: [
      {
        title: "Manufacturing",
        links: [
          { label: "Private Label Manufacturing", href: ROUTES.privateLabel },
          { label: "Custom Product Development", href: ROUTES.customDevelopment },
          { label: "Our Infrastructure", href: ROUTES.infrastructure },
        ],
      },
    ],
  },
  { label: "Projects", href: ROUTES.projects },
  {
    label: "Resources",
    href: ROUTES.downloads,
    groups: [
      {
        title: "Resources",
        links: [
          { label: "Blogs", href: ROUTES.blog },
          { label: "Downloads", href: ROUTES.downloads },
          { label: "FAQs", href: ROUTES.faqs },
          { label: "Solar Calculators", href: ROUTES.calculators },
        ],
      },
      {
        title: "Partners",
        links: [
          { label: "Become a Partner", href: ROUTES.partner },
          { label: "OEM Partnership", href: ROUTES.oemPartnership },
          { label: "Export Business", href: ROUTES.exportBusiness },
        ],
      },
    ],
  },
  {
    label: "About us",
    href: ROUTES.about,
    groups: [
      {
        title: "Company",
        links: [
          { label: "Company Profile", href: ROUTES.about },
          { label: "Leadership Team", href: ROUTES.leadership },
          { label: "Infrastructure", href: ROUTES.infrastructure },
          { label: "Quality & Certifications", href: ROUTES.certifications },
          { label: "Awards & Recognition", href: ROUTES.awards },
          { label: "Our Presence", href: ROUTES.presence },
        ],
      },
      {
        title: "Media & Support",
        links: [
          { label: "News & Events", href: ROUTES.news },
          { label: "Press Releases", href: ROUTES.press },
          { label: "Careers", href: ROUTES.career },
          { label: "Grievance", href: ROUTES.grievance },
          { label: "Track Solar Status", href: ROUTES.track },
        ],
      },
    ],
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
