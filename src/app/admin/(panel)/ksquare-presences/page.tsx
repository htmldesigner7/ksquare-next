import type { Metadata } from "next";
import Link from "next/link";
import AdminImage from "@/components/admin/AdminImage";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import type { PageMeta, PresenceSummary } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Ksquare Presence" };

export default async function PresencesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; status?: string; success?: string }>;
}) {
  const { page = "1", q = "", status = "", success } = await searchParams;
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<PresenceSummary[]>("/admin/ksquare-presences", { query: { page, q, status } })]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="Ksquare Presence" description="States and cities where Ksquare is present." action={{ href: "/admin/ksquare-presences/new", label: "Add state" }} />
      <SuccessNotice code={success} noun="Presence" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder="Search state or city">
        <select name="status" defaultValue={status} className="adm-input sm:max-w-[180px]" aria-label="Status" suppressHydrationWarning>
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </SearchBar>

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["State", "Short line", "Status", "Cities", ""].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-[var(--adm-muted)]">
                  No states found.
                </td>
              </tr>
            )}
            {rows.map((s) => (
              <tr key={s.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <AdminImage src={s.map_img} alt="" className="size-12 shrink-0 rounded-md border border-[var(--adm-border)] object-contain" />
                    <span className="font-medium">{s.state_name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[var(--adm-muted)]">{s.short_line ?? "—"}</td>
                <td className="px-4 py-3 capitalize">{s.status}</td>
                <td className="px-4 py-3 text-[var(--adm-muted)]">{s.city_count}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex justify-end gap-4">
                    <Link href={`/admin/ksquare-presences/${s.id}`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      View
                    </Link>
                    <Link href={`/admin/ksquare-presences/${s.id}/edit`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      Edit
                    </Link>
                    {admin.role === "super_admin" && (
                      <DeleteAction compact endpoint={`/ksquare-presences/${s.id}`} redirectTo="/admin/ksquare-presences" confirmMessage={`Delete "${s.state_name}" and its cities?`} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/ksquare-presences" params={{ q, status }} />
    </div>
  );
}
