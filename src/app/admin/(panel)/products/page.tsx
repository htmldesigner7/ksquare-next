import type { Metadata } from "next";
import AdminImage from "@/components/admin/AdminImage";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import { EditLink, ViewLink } from "@/components/admin/RowActions";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import StatusSwitch from "@/components/admin/StatusSwitch";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import type { PageMeta, ProductSummary } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Products" };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string; q?: string; status?: string; success?: string }>;
}) {
  const { page = "1", limit = "", q = "", status = "", success } = await searchParams;
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<ProductSummary[]>("/admin/products", { query: { page, limit, q, status } })]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="Products" description="Products shown on the website." action={{ href: "/admin/products/new", label: "Add product" }} />
      <SuccessNotice code={success} noun="Product" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder="Search name or title">
        <select name="status" defaultValue={status} className="adm-input sm:max-w-[180px]" aria-label="Status" suppressHydrationWarning>
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </SearchBar>

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["Product", "Category", "Title", "Status", ""].map((h) => (
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
                  No products found.
                </td>
              </tr>
            )}
            {rows.map((p) => (
              <tr key={p.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <AdminImage src={p.list_img} alt="" className="size-12 shrink-0 rounded-md border border-[var(--adm-border)] object-cover" />
                    <span className="font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{p.category_name ?? "—"}</td>
                <td className="px-4 py-3">{p.title}</td>
                <td className="px-4 py-3">
                  <StatusSwitch endpoint={`/products/${p.id}/status`} status={p.status} />
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <ViewLink href={`/admin/products/${p.id}`} />
                    <EditLink href={`/admin/products/${p.id}/edit`} />
                    {admin.role === "super_admin" && (
                      <DeleteAction compact endpoint={`/products/${p.id}`} redirectTo="/admin/products" confirmMessage={`Delete the product "${p.name}"?`} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/products" params={{ limit, q, status }} />
    </div>
  );
}
