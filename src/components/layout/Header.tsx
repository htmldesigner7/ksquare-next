'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV, ROUTES } from "@/content/routes";

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

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);

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

    // Initialize Google Translate script dynamically if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).googleTranslateElementInit = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  const handleLanguageChange = (lang: typeof LANGUAGES[0]) => {
    setCurrentLang(lang);
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate Element to let custom dropdown drive it */}
      <div id="google_translate_element" className="hidden"></div>
      <header className="fixed top-0 w-full z-50 transition-colors duration-300">
      {/* Main Navbar: Height 90px */}
      <div className={clsx(
        "h-[90px] w-full flex items-center transition-colors duration-300 border-b",
        isTransparent ? "bg-transparent border-[#9BA5E0]" : "bg-white border-[#E5E5E5] shadow-sm"
      )}>
        <div className="w-[1800px] max-w-full mx-auto px-4 lg:px-8 g1864:px-0 flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/logo.svg" 
              alt="Ksquare Energy Logo" 
              width={199} 
              height={49} 
              className={clsx("transition-all duration-300", isTransparent ? "brightness-0 invert" : "")} 
              priority
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden hnav:flex items-center gap-[40px] h-full" aria-label="Primary">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.groups?.some((g) => g.links.some((l) => l.href === pathname)) ?? false);
              return (
                <div key={item.label} className="relative h-full flex items-center group">
                  <Link
                    href={item.href}
                    className={clsx(
                      "font-archivo text-[15px] flex items-center gap-[8px] transition-colors h-full relative",
                      isTransparent ? "text-primary-soft hover:text-white" : "text-[#4F4F4F] hover:text-primary font-medium",
                      active && !isTransparent && "text-primary"
                    )}
                  >
                    {item.label}
                    {item.groups && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-rotate-180">
                        <path d="M0 4.72368L9.38506 0L8.52058 10L6.25505 4.99875L0 4.72368Z" fill="currentColor"/>
                      </svg>
                    )}
                    <span className={clsx("absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300", active && !isTransparent ? "w-full" : "w-0 group-hover:w-full")} />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.groups && (
                    <div
                      className={clsx(
                        "absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 border-t-2 border-primary translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 rounded-b-lg overflow-hidden",
                        item.groups.length > 2 ? "w-[760px] grid grid-cols-2 gap-x-6 p-6" : item.groups.length === 2 ? "w-[520px] grid grid-cols-2 gap-x-6 p-6" : "w-[300px] p-6"
                      )}
                    >
                      {item.groups.map((group) => (
                        <div key={group.title} className="flex flex-col mb-4 last:mb-0">
                          <span className="font-archivo text-[13px] font-semibold uppercase tracking-wider text-primary mb-2">{group.title}</span>
                          {group.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className={clsx(
                                "py-[7px] text-[15px] font-archivo transition-all duration-200 hover:text-primary hover:translate-x-1",
                                pathname === link.href ? "text-primary font-medium" : "text-[#4F4F4F]"
                              )}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden hnav:flex items-center gap-[12px] h-[44px] my-auto">
            {/* Language Selector */}
            <div className="relative h-full group flex items-center">
              <button className={clsx(
                "h-full px-[16px] border flex items-center gap-[10px] transition-colors cursor-pointer",
                isTransparent ? "border-white/30 text-white hover:border-white" : "border-[#D1D1D1] text-[#4F4F4F] hover:border-[#4F4F4F]"
              )}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span className="font-archivo text-[14px] font-medium leading-none mt-[2px]">EN</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-[2px] mt-[2px]">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Language Dropdown */}
              <div className="absolute top-full right-0 w-[190px] max-h-[340px] overflow-y-auto no-scrollbar bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-primary translate-y-4 group-hover:translate-y-0 rounded-b-lg mt-1">
                <div className="flex flex-col">
                  {LANGUAGES.map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
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
                "h-full px-[20px] border flex items-center justify-center gap-[12px] font-archivo text-[14px] font-medium transition-colors group",
                isTransparent ? "border-white text-white hover:bg-white hover:text-primary" : "border-[#D1D1D1] text-[#4F4F4F] hover:border-[#4F4F4F]"
              )}
            >
              Request a Quote
              <span className={clsx("w-[5px] h-[5px] rounded-full transition-colors", isTransparent ? "bg-white group-hover:bg-primary" : "bg-[#4F4F4F]")}></span>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={clsx("hnav:hidden transition-colors cursor-pointer", isTransparent ? "text-white hover:text-primary-soft" : "text-[#4F4F4F] hover:text-primary")}
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
          {NAV.map((item) => {
            const expanded = mobileSection === item.label;
            return (
              <div key={item.label} className="border-b border-[#E5E5E5]">
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="flex-1 py-4 font-archivo text-[18px] text-[#333333] hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                  {item.groups && (
                    <button
                      type="button"
                      aria-label={"Toggle " + item.label + " menu"}
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : item.label)}
                      className="p-3 text-[#4F4F4F] cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={clsx("transition-transform duration-300", expanded && "rotate-180")}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  )}
                </div>
                {item.groups && (
                  <div className={clsx("grid transition-all duration-300", expanded ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      {item.groups.map((group) => (
                        <div key={group.title} className="mb-3">
                          <span className="block font-archivo text-[12px] font-semibold uppercase tracking-wider text-primary mb-1">{group.title}</span>
                          {group.links.map((link) => (
                            <Link key={link.label} href={link.href} className="block py-2 pl-3 font-archivo text-[16px] text-[#666666] hover:text-primary transition-colors">
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
            <span className="w-[6px] h-[6px] rounded-full bg-current" />
          </Link>
        </nav>
      </div>
    </header>
    </>
  );
}
