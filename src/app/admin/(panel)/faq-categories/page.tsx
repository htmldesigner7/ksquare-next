import type { Metadata } from "next";
import Link from "next/link";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import StatusSwitch from "@/components/admin/StatusSwitch";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import type { FaqCategorySummary, PageMeta } from "@/lib/admin/types";

export const metadata: Metadata = { title: "FAQ Categories" };

export default async function FaqCategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; status?: string; success?: string }>;
}) {
  const { page = "1", q = "", status = "", success } = await searchParams;
  const [admin, res] = await Promise.all([
    requireAdmin(),
    adminFetch<FaqCategorySummary[]>("/admin/faq-categories", { query: { page, q, status } }),
  ]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="FAQ Categories"
        description="Group your FAQs. Only active categories can receive new FAQs."
        action={{ href: "/admin/faq-categories/new", label: "Add category" }}
      />
      <SuccessNotice code={success} noun="FAQ category" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder="Search category name">
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
              {["Name", "Status", "FAQs", "Updated", ""].map((h) => (
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
                  No FAQ categories found.
                </td>
              </tr>
            )}
            {rows.map((c) => (
              <tr key={c.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3">
                  <StatusSwitch endpoint={`/faq-categories/${c.id}/status`} status={c.status} />
                </td>
                <td className="px-4 py-3 text-[var(--adm-muted)]">{c.faq_count}</td>
                <td className="px-4 py-3 whitespace-nowrap text-[var(--adm-muted)]">{formatDate(c.updated_at)}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex justify-end gap-4">
                    <Link href={`/admin/faq-categories/${c.id}`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      View
                    </Link>
                    <Link href={`/admin/faq-categories/${c.id}/edit`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      Edit
                    </Link>
                    {admin.role === "super_admin" && (
                      <DeleteAction
                        compact
                        endpoint={`/faq-categories/${c.id}`}
                        redirectTo="/admin/faq-categories"
                        confirmMessage={`Delete the category "${c.name}"? Its ${c.faq_count} FAQ(s) will be hidden too.`}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/faq-categories" params={{ q, status }} />
    </div>
  );
}
