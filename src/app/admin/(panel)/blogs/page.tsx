import type { Metadata } from "next";
import AdminImage from "@/components/admin/AdminImage";
import Alert from "@/components/admin/Alert";
import BlogStatusToggle from "@/components/admin/BlogStatusToggle";
import DeleteAction from "@/components/admin/DeleteAction";
import { EditLink, ViewLink } from "@/components/admin/RowActions";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDay } from "@/lib/admin/format";
import type { BlogSummary, PageMeta } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Blogs" };

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string; q?: string; status?: string; success?: string }>;
}) {
  const { page = "1", limit = "", q = "", status = "", success } = await searchParams;
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<BlogSummary[]>("/admin/blogs", { query: { page, limit, q, status } })]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="Blogs" description="Articles shown on the website." action={{ href: "/admin/blogs/new", label: "Add blog" }} />
      <SuccessNotice code={success} noun="Blog" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder="Search title, URL or summary">
        <select name="status" defaultValue={status} className="adm-input sm:max-w-[180px]" aria-label="Status" suppressHydrationWarning>
          <option value="">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </SearchBar>

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {["Blog", "Author", "Date", "Status", ""].map((h) => (
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
                  No blogs found.
                </td>
              </tr>
            )}
            {rows.map((b) => (
              <tr key={b.id} className="border-b border-[var(--adm-border)] last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <AdminImage src={b.front_image} alt="" className="h-12 w-20 shrink-0 rounded-md border border-[var(--adm-border)] object-cover" />
                    <div className="min-w-0">
                      <div className="truncate font-medium">{b.title}</div>
                      <div className="truncate text-xs text-[var(--adm-muted)]">/{b.url}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-[var(--adm-muted)]">{b.author_name ?? "—"}</td>
                <td className="px-4 py-3 whitespace-nowrap text-[var(--adm-muted)]">{formatDay(b.date)}</td>
                <td className="px-4 py-3">
                  <BlogStatusToggle id={b.id} status={b.status} />
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <ViewLink href={`/admin/blogs/${b.id}`} />
                    <EditLink href={`/admin/blogs/${b.id}/edit`} />
                    {admin.role === "super_admin" && (
                      <DeleteAction
                        compact
                        endpoint={`/blogs/${b.id}`}
                        redirectTo="/admin/blogs"
                        confirmMessage={`Delete "${b.title}"? It will be removed from the site.`}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath="/admin/blogs" params={{ limit, q, status }} />
    </div>
  );
}
