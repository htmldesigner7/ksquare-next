"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdArticle,
  // MdBusiness, // Career Departments (hidden)
  MdCategory,
  MdDashboard,
  MdEmojiEvents,
  MdEvent,
  MdFolderOpen,
  MdFolderSpecial,
  MdFormatQuote,
  MdInventory2,
  MdLocationOn,
  MdMail,
  MdNewspaper,
  MdPerson,
  MdPhotoLibrary,
  MdQuestionAnswer,
  MdSettings,
  MdVerified,
  // MdWork, // Jobs (hidden)
  MdWorkspacePremium,
  MdClose,
  MdMenu,
} from "react-icons/md";
import { useState } from "react";
import type { IconType } from "react-icons";

const NAV: { label: string; href: string; icon: IconType }[] = [
  { label: "Dashboard", href: "/admin", icon: MdDashboard },
  { label: "Enquiries", href: "/admin/enquiries", icon: MdMail },
  { label: "Blog Authors", href: "/admin/blog-authors", icon: MdPerson },
  { label: "Blogs", href: "/admin/blogs", icon: MdArticle },
  { label: "Categories", href: "/admin/categories", icon: MdCategory },
  { label: "Products", href: "/admin/products", icon: MdInventory2 },
  { label: "FAQ Categories", href: "/admin/faq-categories", icon: MdFolderOpen },
  { label: "FAQs", href: "/admin/faqs", icon: MdQuestionAnswer },
  { label: "Certificate Categories", href: "/admin/certificate-categories", icon: MdWorkspacePremium },
  { label: "Certificates", href: "/admin/certificates", icon: MdVerified },
  { label: "Project Categories", href: "/admin/project-categories", icon: MdFolderSpecial },
  { label: "Projects", href: "/admin/projects", icon: MdFolderOpen },
  { label: "Awards Timeline", href: "/admin/award-timelines", icon: MdEmojiEvents },
  { label: "Events", href: "/admin/events", icon: MdEvent },
  { label: "Press Releases", href: "/admin/press-releases", icon: MdNewspaper },
  { label: "Testimonials", href: "/admin/testimonials", icon: MdFormatQuote },
  // Temporarily hidden (routes and API still exist): re-enable by uncommenting these two lines and the MdBusiness / MdWork imports.
  // { label: "Career Departments", href: "/admin/career-departments", icon: MdBusiness },
  // { label: "Jobs", href: "/admin/jobs", icon: MdWork },
  { label: "Life at Ksquare", href: "/admin/life-at-ksquare", icon: MdPhotoLibrary },
  { label: "Ksquare Presence", href: "/admin/ksquare-presences", icon: MdLocationOn },
  { label: "Settings", href: "/admin/settings", icon: MdSettings },
  // Add new admin modules here
];

export default function Sidebar() {
  const pathname = usePathname();
  // Small screens: the menu is collapsed behind a button and closes again when an item is chosen.
  const [open, setOpen] = useState(false);
  return (
    <aside className="flex w-full shrink-0 flex-col bg-gradient-to-b from-[var(--adm-primary-dark)] to-[#1a2a7c] text-white shadow-xl md:sticky md:top-0 md:h-screen md:w-64">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 md:py-5">
        <span className="grid size-9 place-items-center rounded-lg bg-white/15 text-base font-bold" aria-hidden>
          K
        </span>
        <span className="text-base font-bold tracking-wide">Ksquare Admin</span>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="admin-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid size-9 place-items-center rounded-lg bg-white/10 hover:bg-white/20 md:hidden"
        >
          {open ? <MdClose className="size-5" aria-hidden /> : <MdMenu className="size-5" aria-hidden />}
        </button>
      </div>
      <nav
        id="admin-nav"
        className={`${open ? "flex" : "hidden"} max-h-[70vh] flex-col gap-1 overflow-y-auto px-3 py-3 md:flex md:max-h-none md:pb-6`}
        aria-label="Admin"
      >
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-lg border-l-[3px] px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                active ? "border-white bg-white/15 text-white" : "border-transparent text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="size-5" aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
