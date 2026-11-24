import type { Metadata } from "next";
import Link from "next/link";
import Alert from "@/components/admin/Alert";
import { adminFetch } from "@/lib/admin/dal";
import type { EnquiryStats } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Dashboard" };

const TILES: { label: string; key: keyof EnquiryStats; href: string }[] = [
  { label: "Total enquiries", key: "total", href: "/admin/enquiries" },
  { label: "New", key: "new", href: "/admin/enquiries?status=new" },
  { label: "In progress", key: "in_progress", href: "/admin/enquiries?status=in_progress" },
  { label: "Resolved", key: "resolved", href: "/admin/enquiries?status=resolved" },
];

const SHORTCUTS = [
  { label: "View website", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default async function DashboardPage() {
  const res = await adminFetch<EnquiryStats>("/admin/enquiries/stats");
  const stats = res.data;

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-sm text-[var(--adm-muted)]">Welcome back. Here is an overview of your site.</p>
      </div>

      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <section aria-label="Overview" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {TILES.map(({ label, key, href }) => (
          <Link
            key={key}
            href={href}
            className="rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-5 transition-shadow hover:shadow-md"
          >
            <p className="text-sm text-[var(--adm-muted)]">{label}</p>
            <p className="mt-2 text-3xl font-bold text-[var(--adm-primary)]">{stats ? stats[key] : "—"}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-5">
        <h2 className="text-base font-semibold">Quick links</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {SHORTCUTS.map(({ label, href }) => (
            <Link key={href} href={href} target="_blank" className="adm-btn adm-btn-ghost">
              {label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
