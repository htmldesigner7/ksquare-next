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
import type { CategorySummary, PageMeta } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Categories" };

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; success?: string }>;
}) {
  const { page = "1", q = "", success } = await searchParams;
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<CategorySummary[]>("/admin/categories", { query: { page, q } })]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="Categories" description="Product categories shown on the website." action={{ href: "/admin/categories/new", label: "Add category" }} />
      <SuccessNotice code={success} noun="Category" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}
      <SearchBar defaultQ={q} placeholder="Search name or title" />

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["Category", "Title", "Type", "Status", "Config entries", ""].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-[var(--adm-muted)]">
                  No categories found.
                </td>
              </tr>
            )}
            {rows.map((c) => (
              <tr key={c.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <AdminImage src={c.list_image} alt="" className="size-12 shrink-0 rounded-md border border-[var(--adm-border)] object-cover" />
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="line-clamp-1 text-xs text-[var(--adm-muted)]">{c.short_description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{c.title}</td>
                <td className="px-4 py-3 capitalize">{c.type}</td>
                <td className="px-4 py-3 capitalize">{c.status}</td>
                <td className="px-4 py-3 text-[var(--adm-muted)]">{c.configuration_count}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex justify-end gap-4">
                    <Link href={`/admin/categories/${c.id}`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      View
                    </Link>
                    <Link href={`/admin/categories/${c.id}/edit`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      Edit
                    </Link>
                    {admin.role === "super_admin" && (
                      <DeleteAction
                        compact
                        endpoint={`/categories/${c.id}`}
                        redirectTo="/admin/categories"
                        confirmMessage={`Delete the category "${c.name}" and all its configuration entries? This cannot be undone.`}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/categories" params={{ q }} />
    </div>
  );
}
