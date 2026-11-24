import type { Metadata } from "next";
import Alert from "@/components/admin/Alert";
import Pagination from "@/components/admin/Pagination";
import { ViewLink } from "@/components/admin/RowActions";
import StatusBadge from "@/components/admin/StatusBadge";
import { adminFetch } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import { STATUS_LABEL, type EnquirySummary, type PageMeta } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Enquiries" };

type Search = { page?: string; limit?: string; status?: string; q?: string; deleted?: string };

export default async function EnquiriesPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { page = "1", limit = "", status = "", q = "", deleted } = await searchParams;
  const res = await adminFetch<EnquirySummary[]>("/admin/enquiries", { query: { page, limit, status, q } });
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;


  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Enquiries</h1>
        <p className="mt-1 text-sm text-[var(--adm-muted)]">Messages submitted through the website.</p>
      </div>

      {deleted && <Alert type="success">Enquiry deleted.</Alert>}
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <form className="flex flex-col gap-3 sm:flex-row" role="search">
        <input name="q" defaultValue={q} placeholder="Search name, email or subject" className="adm-input sm:max-w-xs" suppressHydrationWarning />
        <select name="status" defaultValue={status} className="adm-input sm:max-w-[180px]" aria-label="Status" suppressHydrationWarning>
          <option value="">All statuses</option>
          {Object.entries(STATUS_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button type="submit" className="adm-btn adm-btn-ghost">
          Filter
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["Name", "Subject", "Status", "Received", ""].map((h) => (
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
                  No enquiries found.
                </td>
              </tr>
            )}
            {rows.map((e) => (
              <tr key={e.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium">{e.name}</div>
                  <div className="text-xs text-[var(--adm-muted)]">{e.email}</div>
                </td>
                <td className="px-4 py-3">{e.subject ?? "—"}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={e.status} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-[var(--adm-muted)]">{formatDate(e.created_at)}</td>
                <td className="px-4 py-3 text-right">
                  <ViewLink href={`/admin/enquiries/${e.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination meta={meta} basePath="/admin/enquiries" params={{ status, q }} />
    </div>
  );
}
