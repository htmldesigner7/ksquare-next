import type { Metadata } from "next";
import AdminImage from "@/components/admin/AdminImage";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import { EditLink, ViewLink } from "@/components/admin/RowActions";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, plainText } from "@/lib/admin/format";
import type { PageMeta, Testimonial } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Testimonials" };

export default async function TestimonialsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string; q?: string; success?: string }>;
}) {
  const { page = "1", limit = "", q = "", success } = await searchParams;
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Testimonial[]>("/admin/testimonials", { query: { page, limit, q } })]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="Client Testimonials"
        description="What your clients say about you."
        action={{ href: "/admin/testimonials/new", label: "Add testimonial" }}
      />
      <SuccessNotice code={success} noun="Testimonial" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}
      <SearchBar defaultQ={q} placeholder="Search name, company or text" />

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["Client", "Testimonial", "Added", ""].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-[var(--adm-muted)]">
                  No testimonials found.
                </td>
              </tr>
            )}
            {rows.map((t) => (
              <tr key={t.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {t.profile_photo ? (
                      <AdminImage src={t.profile_photo} alt="" className="size-10 rounded-full object-cover" />
                    ) : (
                      <span className="flex size-10 items-center justify-center rounded-full bg-[var(--adm-primary-pale)] font-semibold text-[var(--adm-primary)]">
                        {t.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-[var(--adm-muted)]">{t.company}</div>
                    </div>
                  </div>
                </td>
                <td className="max-w-sm px-4 py-3 text-[var(--adm-muted)]">
                  <span className="line-clamp-2">{plainText(t.description)}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-[var(--adm-muted)]">{formatDate(t.created_at)}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <ViewLink href={`/admin/testimonials/${t.id}`} />
                    <EditLink href={`/admin/testimonials/${t.id}/edit`} />
                    {admin.role === "super_admin" && (
                      <DeleteAction
                        compact
                        endpoint={`/testimonials/${t.id}`}
                        redirectTo="/admin/testimonials"
                        confirmMessage={`Delete the testimonial from ${t.name}? This cannot be undone.`}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/testimonials" params={{ limit, q }} />
    </div>
  );
}
