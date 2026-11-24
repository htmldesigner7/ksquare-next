import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";
import Sidebar from "@/components/admin/Sidebar";
import { requireAdmin } from "@/lib/admin/dal";

// Every page in this group requires a valid admin session (checked here, not only in the Proxy).
export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--adm-border)] bg-[var(--adm-surface)]/90 px-4 py-3 shadow-sm backdrop-blur sm:px-8">
          <Link href="/admin/profile" className="adm-user flex min-w-0 items-center gap-3 rounded-full py-1 pr-4 pl-1 text-sm" title="My profile">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--adm-primary)] to-[#3d4fc0] text-sm font-bold text-white uppercase" aria-hidden>
              {session.name.charAt(0)}
            </span>
            <span className="min-w-0 leading-tight">
              <strong className="block truncate font-semibold text-[var(--adm-text)]">{session.name}</strong>
              <span className="block truncate text-xs text-[var(--adm-muted)]">{session.email}</span>
            </span>
          </Link>
          <LogoutButton />
        </header>
        <main className="flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
