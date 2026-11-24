'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV, ROUTES, type NavItem } from "@/content/routes";
import { Icon, type IconKey } from "@/components/page-kit/icons";
import ButtonArrow from "@/components/common/ButtonArrow";

/** Injects Google Translate's element script once (its init callback fills the hidden #google_translate_element). */
function loadTranslateScript() {
  if (typeof document === "undefined" || document.getElementById("google-translate-script")) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).googleTranslateElementInit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (window as any).google.translate.TranslateElement({ pageLanguage: "en", autoDisplay: false }, "google_translate_element");
  };
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.type = "text/javascript";
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

const LANGUAGES = [
  { code: 'af', label: 'Afrikaans', short: 'AF', flagCode: 'za' },
  { code: 'sq', label: 'Albanian', short: 'SQ', flagCode: 'al' },
  { code: 'am', label: 'Amharic', short: 'AM', flagCode: 'et' },
  { code: 'ar', label: 'Arabic', short: 'AR', flagCode: 'sa' },
  { code: 'hy', label: 'Armenian', short: 'HY', flagCode: 'am' },
  { code: 'az', label: 'Azerbaijani', short: 'AZ', flagCode: 'az' },
  { code: 'eu', label: 'Basque', short: 'EU', flagCode: 'es' },
  { code: 'be', label: 'Belarusian', short: 'BE', flagCode: 'by' },
  { code: 'bn', label: 'Bengali', short: 'BN', flagCode: 'in' },
  { code: 'bs', label: 'Bosnian', short: 'BS', flagCode: 'ba' },
  { code: 'bg', label: 'Bulgarian', short: 'BG', flagCode: 'bg' },
  { code: 'ca', label: 'Catalan', short: 'CA', flagCode: 'es' },
  { code: 'ceb', label: 'Cebuano', short: 'CEB', flagCode: 'ph' },
  { code: 'ny', label: 'Chichewa', short: 'NY', flagCode: 'mw' },
  { code: 'zh-CN', label: 'Chinese (Simplified)', short: 'ZH', flagCode: 'cn' },
  { code: 'zh-TW', label: 'Chinese (Traditional)', short: 'ZH', flagCode: 'tw' },
  { code: 'co', label: 'Corsican', short: 'CO', flagCode: 'fr' },
  { code: 'hr', label: 'Croatian', short: 'HR', flagCode: 'hr' },
  { code: 'cs', label: 'Czech', short: 'CS', flagCode: 'cz' },
  { code: 'da', label: 'Danish', short: 'DA', flagCode: 'dk' },
  { code: 'nl', label: 'Dutch', short: 'NL', flagCode: 'nl' },
  { code: 'en', label: 'English', short: 'EN', flagCode: 'gb' },
  { code: 'eo', label: 'Esperanto', short: 'EO', flagCode: 'un' },
  { code: 'et', label: 'Estonian', short: 'ET', flagCode: 'ee' },
  { code: 'tl', label: 'Filipino', short: 'TL', flagCode: 'ph' },
  { code: 'fi', label: 'Finnish', short: 'FI', flagCode: 'fi' },
  { code: 'fr', label: 'French', short: 'FR', flagCode: 'fr' },
  { code: 'fy', label: 'Frisian', short: 'FY', flagCode: 'nl' },
  { code: 'gl', label: 'Galician', short: 'GL', flagCode: 'es' },
  { code: 'ka', label: 'Georgian', short: 'KA', flagCode: 'ge' },
  { code: 'de', label: 'German', short: 'DE', flagCode: 'de' },
  { code: 'el', label: 'Greek', short: 'EL', flagCode: 'gr' },
  { code: 'gu', label: 'Gujarati', short: 'GU', flagCode: 'in' },
  { code: 'ht', label: 'Haitian Creole', short: 'HT', flagCode: 'ht' },
  { code: 'ha', label: 'Hausa', short: 'HA', flagCode: 'ng' },
  { code: 'haw', label: 'Hawaiian', short: 'HAW', flagCode: 'us' },
  { code: 'iw', label: 'Hebrew', short: 'IW', flagCode: 'il' },
  { code: 'hi', label: 'Hindi', short: 'HI', flagCode: 'in' },
  { code: 'hmn', label: 'Hmong', short: 'HMN', flagCode: 'cn' },
  { code: 'hu', label: 'Hungarian', short: 'HU', flagCode: 'hu' },
  { code: 'is', label: 'Icelandic', short: 'IS', flagCode: 'is' },
  { code: 'ig', label: 'Igbo', short: 'IG', flagCode: 'ng' },
  { code: 'id', label: 'Indonesian', short: 'ID', flagCode: 'id' },
  { code: 'ga', label: 'Irish', short: 'GA', flagCode: 'ie' },
  { code: 'it', label: 'Italian', short: 'IT', flagCode: 'it' },
  { code: 'ja', label: 'Japanese', short: 'JA', flagCode: 'jp' },
  { code: 'jw', label: 'Javanese', short: 'JW', flagCode: 'id' },
  { code: 'kn', label: 'Kannada', short: 'KN', flagCode: 'in' },
  { code: 'kk', label: 'Kazakh', short: 'KK', flagCode: 'kz' },
  { code: 'km', label: 'Khmer', short: 'KM', flagCode: 'kh' },
  { code: 'rw', label: 'Kinyarwanda', short: 'RW', flagCode: 'rw' },
  { code: 'ko', label: 'Korean', short: 'KO', flagCode: 'kr' },
  { code: 'ku', label: 'Kurdish (Kurmanji)', short: 'KU', flagCode: 'iq' },
  { code: 'ky', label: 'Kyrgyz', short: 'KY', flagCode: 'kg' },
  { code: 'lo', label: 'Lao', short: 'LO', flagCode: 'la' },
  { code: 'la', label: 'Latin', short: 'LA', flagCode: 'va' },
  { code: 'lv', label: 'Latvian', short: 'LV', flagCode: 'lv' },
  { code: 'lt', label: 'Lithuanian', short: 'LT', flagCode: 'lt' },
  { code: 'lb', label: 'Luxembourgish', short: 'LB', flagCode: 'lu' },
  { code: 'mk', label: 'Macedonian', short: 'MK', flagCode: 'mk' },
  { code: 'mg', label: 'Malagasy', short: 'MG', flagCode: 'mg' },
  { code: 'ms', label: 'Malay', short: 'MS', flagCode: 'my' },
  { code: 'ml', label: 'Malayalam', short: 'ML', flagCode: 'in' },
  { code: 'mt', label: 'Maltese', short: 'MT', flagCode: 'mt' },
  { code: 'mi', label: 'Maori', short: 'MI', flagCode: 'nz' },
  { code: 'mr', label: 'Marathi', short: 'MR', flagCode: 'in' },
  { code: 'mn', label: 'Mongolian', short: 'MN', flagCode: 'mn' },
  { code: 'my', label: 'Myanmar (Burmese)', short: 'MY', flagCode: 'mm' },
  { code: 'ne', label: 'Nepali', short: 'NE', flagCode: 'np' },
  { code: 'no', label: 'Norwegian', short: 'NO', flagCode: 'no' },
  { code: 'or', label: 'Odia (Oriya)', short: 'OR', flagCode: 'in' },
  { code: 'ps', label: 'Pashto', short: 'PS', flagCode: 'af' },
  { code: 'fa', label: 'Persian', short: 'FA', flagCode: 'ir' },
  { code: 'pl', label: 'Polish', short: 'PL', flagCode: 'pl' },
  { code: 'pt', label: 'Portuguese', short: 'PT', flagCode: 'pt' },
  { code: 'pa', label: 'Punjabi', short: 'PA', flagCode: 'in' },
  { code: 'ro', label: 'Romanian', short: 'RO', flagCode: 'ro' },
  { code: 'ru', label: 'Russian', short: 'RU', flagCode: 'ru' },
  { code: 'sm', label: 'Samoan', short: 'SM', flagCode: 'ws' },
  { code: 'gd', label: 'Scots Gaelic', short: 'GD', flagCode: 'gb' },
  { code: 'sr', label: 'Serbian', short: 'SR', flagCode: 'rs' },
  { code: 'st', label: 'Sesotho', short: 'ST', flagCode: 'ls' },
  { code: 'sn', label: 'Shona', short: 'SN', flagCode: 'zw' },
  { code: 'sd', label: 'Sindhi', short: 'SD', flagCode: 'pk' },
  { code: 'si', label: 'Sinhala', short: 'SI', flagCode: 'lk' },
  { code: 'sk', label: 'Slovak', short: 'SK', flagCode: 'sk' },
  { code: 'sl', label: 'Slovenian', short: 'SL', flagCode: 'si' },
  { code: 'so', label: 'Somali', short: 'SO', flagCode: 'so' },
  { code: 'es', label: 'Spanish', short: 'ES', flagCode: 'es' },
  { code: 'su', label: 'Sundanese', short: 'SU', flagCode: 'id' },
  { code: 'sw', label: 'Swahili', short: 'SW', flagCode: 'ke' },
  { code: 'sv', label: 'Swedish', short: 'SV', flagCode: 'se' },
  { code: 'tg', label: 'Tajik', short: 'TG', flagCode: 'tj' },
  { code: 'ta', label: 'Tamil', short: 'TA', flagCode: 'in' },
  { code: 'te', label: 'Telugu', short: 'TE', flagCode: 'in' },
  { code: 'th', label: 'Thai', short: 'TH', flagCode: 'th' },
  { code: 'tr', label: 'Turkish', short: 'TR', flagCode: 'tr' },
  { code: 'uk', label: 'Ukrainian', short: 'UK', flagCode: 'ua' },
  { code: 'ur', label: 'Urdu', short: 'UR', flagCode: 'pk' },
  { code: 'uz', label: 'Uzbek', short: 'UZ', flagCode: 'uz' },
  { code: 'vi', label: 'Vietnamese', short: 'VI', flagCode: 'vn' },
  { code: 'cy', label: 'Welsh', short: 'CY', flagCode: 'gb' },
  { code: 'xh', label: 'Xhosa', short: 'XH', flagCode: 'za' },
  { code: 'yi', label: 'Yiddish', short: 'YI', flagCode: 'il' },
  { code: 'yo', label: 'Yoruba', short: 'YO', flagCode: 'ng' },
  { code: 'zu', label: 'Zulu', short: 'ZU', flagCode: 'za' }
];

export default function Header({ nav = NAV }: { nav?: NavItem[] }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  // Desktop mega menu: the menu that was just used to navigate stays shut until the pointer leaves it.
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);
  // Desktop mega menu: opened by pointer hover with a short grace period when the pointer leaves, so crossing the small gap
  // between a menu item and its panel keeps it open, while the closed panel can never be re-opened by hovering the page below.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openOnHover = (label: string) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeOnLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const [langQuery, setLangQuery] = useState("");
  const filteredLanguages = LANGUAGES.filter((l) => l.label.toLowerCase().includes(langQuery.trim().toLowerCase()));

  useEffect(() => {
    // Attempt to restore language from Google Translate cookie if present
    const match = document.cookie.match(/googtrans=\/auto\/([^;]+)/) || document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match && match[1]) {
      const found = LANGUAGES.find(l => l.code === match[1]);
      if (found) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentLang(found);
      }
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Google's translate script is only fetched when a language was saved or the visitor reaches for the language menu,
    // so a slow / blocked translate.google.com never keeps the browser tab in its "loading" state.
    if (/googtrans=/.test(document.cookie)) loadTranslateScript();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) return () => { document.body.style.overflow = ""; };
    // Escape closes the drawer; widening past the nav breakpoint (rotate / resize) must not leave the page scroll-locked.
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    const onResize = () => { if (window.matchMedia("(min-width: 73.75rem)").matches) setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  const handleLanguageChange = (lang: typeof LANGUAGES[0]) => {
    setCurrentLang(lang);
    const apply = (select: HTMLSelectElement) => {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    };
    const existing = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (existing) return apply(existing);
    // Script not loaded yet (first use): load it, then apply as soon as its language select appears.
    loadTranslateScript();
    let tries = 0;
    const timer = window.setInterval(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        window.clearInterval(timer);
        apply(select);
      } else if (++tries > 40) {
        window.clearInterval(timer);
      }
    }, 200);
  };

  return (
    <>
      {/* Hidden Google Translate Element to let custom dropdown drive it */}
      <div id="google_translate_element" className="hidden"></div>
      <header className="fixed top-0 w-full z-50 transition-colors duration-300">
      {/* Main Navbar: Height 90px */}
      <div className={clsx(
        "h-[90px] w-full flex items-center transition-colors duration-300 border-b",
        isTransparent ? "bg-transparent border-[#9BA5E0]" : clsx("bg-white border-[#9BA5E0]", scrolled && "shadow-sm")
      )}>
        <div className="w-[1800px] max-w-full mx-auto px-4 lg:px-8 desk:px-[60px] g1864:px-0 flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/logo.svg" 
              alt="Ksquare Energy Logo" 
              width={199} 
              height={49} 
              className={clsx("w-[164px] min-[360px]:w-[199px] h-auto transition-all duration-300", isTransparent ? "brightness-0 invert" : "")} 
              priority
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden hnav:flex items-center gap-[16px] desk:gap-[22px] w1536:gap-[28px] g1664:gap-[40px] h-full" aria-label="Primary">
            {nav.map((item) => {
              return (
                <div
                  key={item.label}
                  className="h-full flex items-center group"
                  onMouseEnter={() => openOnHover(item.label)}
                  onMouseLeave={() => {
                    setDismissedMenu(null);
                    closeOnLeave();
                  }}
                  onClick={() => {
                    // Drop keyboard/click focus too, otherwise focus-within would keep the panel open.
                    (document.activeElement as HTMLElement | null)?.blur();
                    setDismissedMenu(item.label);
                    setOpenMenu(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "font-archivo text-[14px] desk:text-[15px] w1536:text-[17px] leading-[17px] flex items-center transition-colors h-full relative",
                      isTransparent ? "text-primary-soft hover:text-white" : "text-[#333333] hover:text-primary"
                    )}
                  >
                    <span className="flex items-end gap-[8px]">
                      {item.label}
                      {item.groups && (
                        <svg width="9.39" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-rotate-180">
                          <path d="M0 4.72368L9.38506 0L8.52058 10L6.25505 4.99875L0 4.72368Z" fill="currentColor"/>
                        </svg>
                      )}
                    </span>
                    <span className="absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                  </Link>

                  {/* Mega menu: a full-width panel under the header (links with a short description, plus a highlight card) */}
                  {item.groups && (
                    <div
                      className={clsx(
                        "absolute left-0 right-0 top-full bg-white border-t-2 border-primary shadow-[0_30px_60px_-24px_rgba(20,30,90,0.35)]",
                        "transition-[opacity,transform,visibility] duration-300 ease-out",
                        openMenu === item.label ? "opacity-100 visible pointer-events-auto translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-2",
                        "group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:[transition-delay:0ms]",
                        dismissedMenu === item.label && "!opacity-0 !invisible !pointer-events-none !-translate-y-2"
                      )}
                    >
                      {/* soft scrim over the page while a menu is open */}
                      <span aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-full h-screen bg-[#0B1240]/25" />
                      <div className="w-[1800px] max-w-full mx-auto px-4 lg:px-8 desk:px-[60px] g1864:px-0 py-10 flex items-stretch gap-[56px]">
                        <div
                          className="flex-1 min-w-0 grid gap-x-[40px] gap-y-8 content-start"
                          style={{ gridTemplateColumns: `repeat(${Math.min(item.groups.length, 4)}, minmax(0, 1fr))` }}
                        >
                          {item.groups.map((group) => (
                            <div key={group.title} className="flex flex-col">
                              <span className="font-archivo text-[13px] font-semibold uppercase tracking-[0.08em] text-primary mb-3 pb-3 border-b border-[#E3E8F7]">{group.title}</span>
                              {group.links.map((link) => {
                                // several links of one panel can share a page (e.g. all the DCDB-family links); then none of them is "the" current page
                                const sameHref = item.groups!.flatMap((g) => g.links).filter((l) => l.href === link.href).length;
                                const current = pathname === link.href && sameHref === 1;
                                return (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className={clsx(
                                      "group/link -mx-3 flex items-start justify-between gap-3 rounded-[8px] px-3 py-[10px] transition-colors duration-200 hover:bg-[#F0F5FE] focus-visible:bg-[#F0F5FE] focus-visible:outline-none",
                                      current && "bg-[#F0F5FE]"
                                    )}
                                  >
                                    <span className="flex min-w-0 items-start gap-[14px]">
                                      {(link.icon || link.iconSrc) && (
                                        <span className={clsx("mt-[1px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] transition-colors duration-200 group-hover/link:bg-primary group-hover/link:text-white", current ? "bg-primary text-white" : "bg-[#EEF1FB] text-primary")}>
                                          {link.iconSrc ? (
                                            // Uploaded icons are served by the API (another origin); they turn white when the tile fills (on hover and for the current page).
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={link.iconSrc} alt="" className={clsx("h-[26px] w-[26px] object-contain transition-[filter] duration-200 group-hover/link:brightness-0 group-hover/link:invert", current && "brightness-0 invert")} />
                                          ) : (
                                            <Icon name={link.icon as IconKey} className="h-[20px] w-[20px]" />
                                          )}
                                        </span>
                                      )}
                                      <span className="flex min-w-0 flex-col">
                                        <span className={clsx("font-archivo text-[16px] leading-[22px] font-medium transition-colors group-hover/link:text-primary", current ? "text-primary" : "text-[#222222]")}>{link.label}</span>
                                        {link.desc && <span className="mt-[2px] font-archivo text-[14px] leading-[20px] text-[#6B6B6B]">{link.desc}</span>}
                                      </span>
                                    </span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-[3px] shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100">
                                      <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                  </Link>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                        {item.feature && (
                          <Link href={item.feature.href} className="group/feat relative hidden w-[380px] shrink-0 flex-col self-start overflow-hidden rounded-[12px] bg-[#2B398B] xl:flex focus-visible:outline-2 focus-visible:outline-primary">
                            <span className="relative block h-[170px] w-full overflow-hidden bg-gradient-to-b from-[#3B4BB0] to-[#2B398B]">
                              <Image src={item.feature.image} alt="" fill sizes="380px" className="object-cover object-bottom transition-transform duration-700 group-hover/feat:scale-[1.05]" />
                            </span>
                            <span className="flex flex-1 flex-col gap-[6px] p-5 text-white">
                              <span className="font-archivo text-[20px] leading-[26px] font-medium">{item.feature.title}</span>
                              <span className="font-archivo text-[14px] leading-[21px] text-white/80">{item.feature.desc}</span>
                              <span className="mt-auto flex items-center gap-2 pt-3 font-archivo text-[15px] font-medium">
                                {item.feature.cta}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover/feat:translate-x-1">
                                  <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                              </span>
                            </span>
                          </Link>
                        )}
                      </div>
                      {/* bottom bar: jump to the section page, or talk to the team */}
                      <div className="border-t border-[#E3E8F7] bg-[#F7F9FF]">
                        <div className="w-[1800px] max-w-full mx-auto px-4 lg:px-8 desk:px-[60px] g1864:px-0 flex items-center justify-between gap-6 py-[14px]">
                          {item.hideViewAll ? <span /> : (
                          <Link href={item.href} className="group/all inline-flex items-center gap-2 font-archivo text-[15px] font-medium text-primary hover:underline underline-offset-4">
                            {"View all " + item.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover/all:translate-x-1">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </Link>
                          )}
                          <span className="flex items-center gap-4 font-archivo text-[14px] text-[#555555]">
                            Need help choosing?
                            <a href="tel:+917969697979" className="font-medium text-[#222222] hover:text-primary">+91 79 6969 7979</a>
                            <Link href={ROUTES.contact} className="rounded-[4px] border border-primary px-3 py-[6px] font-medium text-primary transition-colors hover:bg-primary hover:text-white">Talk to our team</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden hnav:flex items-center gap-[10px] h-[44px] desk:h-[50px] my-auto">
            {/* Language Selector */}
            <div className="relative h-full group flex items-center" onMouseEnter={loadTranslateScript} onFocus={loadTranslateScript}>
              <button className={clsx(
                "h-full px-[11px] desk:px-[15px] border flex items-center gap-[8px] desk:gap-[14px] transition-colors cursor-pointer",
                isTransparent ? "border-primary-soft text-primary-soft hover:border-white hover:text-white" : "border-[#333333] text-[#333333] hover:border-primary hover:bg-primary hover:text-white"
              )}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-[26px] h-[26px] desk:w-[32px] desk:h-[32px]">
                  <path d="M26.4573 10.1093C27.4718 11.9067 28.0033 13.9361 28 16C28 17.0373 27.868 18.044 27.6213 19.004C26.9546 21.5791 25.4515 23.8598 23.348 25.488C21.2446 27.1163 18.66 27.9998 16 28M5.54267 10.1093C4.56 11.8493 4 13.86 4 16C3.9991 17.0133 4.12633 18.0226 4.37867 19.004C5.04544 21.5791 6.54854 23.8598 8.65197 25.488C10.7554 27.1163 13.34 27.9998 16 28M16 28C19.3133 28 22 22.6267 22 16C22 9.37334 19.3133 4 16 4M16 28C12.6867 28 10 22.6267 10 16C10 9.37334 12.6867 4 16 4M27.6213 19.004C24.0656 20.9752 20.0656 22.0064 16 22C11.784 22 7.82267 20.9133 4.37867 19.004M16 4C18.1283 3.99911 20.2186 4.56448 22.0563 5.63809C23.894 6.71169 25.4129 8.25489 26.4573 10.1093M16 4C13.8717 3.99911 11.7814 4.56448 9.94375 5.63809C8.10606 6.71169 6.58708 8.25489 5.54267 10.1093M26.4573 10.1093C23.5542 12.6239 19.8407 14.0055 16 14C12.0027 14 8.34667 12.5333 5.54267 10.1093" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex items-center gap-[8px]">
                  <span className="font-archivo text-[14px] desk:text-[17px] leading-[27px]">EN</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.5 8.25L10.5 14.25L4.5 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Language Dropdown */}
              {/* notranslate: Google Translate must not rewrite the option names themselves */}
              <div translate="no" className="notranslate absolute top-full right-0 w-[190px] max-h-[340px] overflow-y-auto no-scrollbar bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 border-t-2 border-primary translate-y-4 group-hover:translate-y-0 rounded-b-lg mt-1">
                <div className="sticky top-0 z-10 bg-white p-2 border-b border-gray-100">
                  <input
                    type="text"
                    value={langQuery}
                    onChange={(e) => setLangQuery(e.target.value)}
                    placeholder="Search language"
                    aria-label="Search language"
                    autoComplete="off"
                    className="w-full px-3 py-2 border border-gray-200 rounded text-[14px] font-archivo text-[#4F4F4F] outline-none focus:border-primary"
                  />
                </div>
                <div className="flex flex-col">
                  {filteredLanguages.length === 0 && (
                    <span className="px-4 py-3 text-[14px] font-archivo text-gray-400">No language found</span>
                  )}
                  {filteredLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { handleLanguageChange(lang); setLangQuery(""); }}
                      className={clsx(
                        "px-4 py-3 text-[#4F4F4F] hover:text-primary hover:bg-gray-50/70 font-archivo text-[14px] flex items-center justify-start gap-3 transition-colors border-b border-gray-100 last:border-0 w-full text-left",
                        currentLang.code === lang.code && "bg-blue-50/50 text-primary font-semibold"
                      )}
                    >
                      <span className="truncate">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Request a Quote Button */}
            <Link 
              href={ROUTES.contact}
              className={clsx(
                "h-full px-[11px] desk:px-[15px] border flex items-center justify-center gap-[10px] desk:gap-[16px] font-archivo text-[14px] desk:text-[17px] leading-[26px] transition-colors group",
                isTransparent ? "border-white text-white hover:bg-white hover:text-primary" : "border-[#333333] text-[#333333] hover:border-primary hover:bg-primary hover:text-white"
              )}
            >
              Request a Quote
              <ButtonArrow className={isTransparent ? "text-white group-hover:text-primary" : "text-[#333333] group-hover:text-white"} />
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={clsx("hnav:hidden p-[9px] -m-[9px] transition-colors cursor-pointer", isTransparent ? "text-white hover:text-primary-soft" : "text-[#4F4F4F] hover:text-primary")}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19"></line>
                  <line x1="19" y1="5" x2="5" y2="19"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile drawer */}
      <div
        className={clsx(
          "hnav:hidden fixed inset-x-0 top-[90px] bottom-0 bg-white overflow-y-auto transition-all duration-300",
          mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"
        )}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const expanded = mobileSection === item.label;
            return (
              <div key={item.label} className="border-b border-[#E5E5E5]">
                <div className="flex items-center justify-between">
                  {item.groups ? (
                    <button
                      type="button"
                      aria-label={"Toggle " + item.label + " menu"}
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : item.label)}
                      className="flex flex-1 items-center justify-between py-4 pr-[15px] text-left font-archivo text-[18px] text-[#333333] hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={clsx("transition-transform duration-300", expanded && "rotate-180")}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  ) : (
                    <Link href={item.href} className="flex-1 py-4 font-archivo text-[18px] text-[#333333] hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  )}
                </div>
                {item.groups && (
                  <div className={clsx("grid transition-[grid-template-rows,opacity] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]", expanded ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <Link href={item.href} tabIndex={expanded ? 0 : -1} className="mb-2 block py-[10px] font-archivo text-[16px] font-medium text-primary">
                        {"View all " + item.label}
                      </Link>
                      {item.groups.map((group) => (
                        <div key={group.title} className="mb-3">
                          <span className="block font-archivo text-[12px] font-semibold uppercase tracking-wider text-primary mb-1">{group.title}</span>
                          {group.links.map((link) => (
                            <Link key={link.label} href={link.href} className="block py-[10px] pl-3 font-archivo text-[16px] text-[#666666] hover:text-primary transition-colors">
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href={ROUTES.contact}
            className="mt-6 mb-8 h-[48px] border border-primary text-primary flex items-center justify-center gap-3 font-archivo text-[16px] hover:bg-primary hover:text-white transition-colors"
          >
            Request a Quote
            <ButtonArrow />
          </Link>
        </nav>
      </div>
    </header>
    </>
  );
}
