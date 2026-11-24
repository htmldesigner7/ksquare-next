import type { Metadata } from "next";
import Link from "next/link";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import { EditLink } from "@/components/admin/RowActions";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import type { Faq, FaqCategorySummary, PageMeta } from "@/lib/admin/types";

export const metadata: Metadata = { title: "FAQs" };

const PAGE_SIZE = "20";

export default async function FaqsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string; q?: string; category_id?: string; success?: string }>;
}) {
  const { page = "1", limit = PAGE_SIZE, q = "", category_id = "", success } = await searchParams;
  const [admin, res, cats] = await Promise.all([
    requireAdmin(),
    adminFetch<Faq[]>("/admin/faqs", { query: { page, q, category_id, limit } }),
    adminFetch<FaqCategorySummary[]>("/admin/faq-categories", { query: { limit: "100" } }), // filter dropdown
  ]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;

  // The API returns FAQs ordered by category, so consecutive rows form the category groups.
  const groups: { id: number; name: string; status: string; items: Faq[] }[] = [];
  for (const f of rows) {
    const last = groups.at(-1);
    if (last && last.id === f.category_id) last.items.push(f);
    else groups.push({ id: f.category_id, name: f.category_name, status: f.category_status, items: [f] });
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="FAQs" description="Questions and answers, grouped by category." action={{ href: "/admin/faqs/new", label: "Add FAQs" }} />
      <SuccessNotice code={success} noun="FAQ" />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder="Search questions or answers">
        <select name="category_id" defaultValue={category_id} className="adm-input sm:max-w-[220px]" aria-label="Category" suppressHydrationWarning>
          <option value="">All categories</option>
          {(cats.data ?? []).map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </SearchBar>

      {groups.length === 0 && (
        <div className="rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] px-4 py-10 text-center text-sm text-[var(--adm-muted)]">
          No FAQs found.
        </div>
      )}

      {groups.map((g) => (
        <section key={g.id} className="overflow-hidden rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--adm-border)] bg-[var(--adm-primary-pale)] px-5 py-3">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">{g.name}</h2>
              {g.status === "inactive" && <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">Inactive</span>}
            </div>
            {g.status === "active" && (
              <Link href={`/admin/faqs/new?category=${g.id}`} className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
                + Add FAQs
              </Link>
            )}
          </header>
          <div className="divide-y divide-[var(--adm-border)]">
            {g.items.map((f) => (
              <details key={f.id} className="group px-5 py-3">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-medium">
                  <span>{f.question}</span>
                  <span className="mt-0.5 text-xs text-[var(--adm-muted)] group-open:hidden">Show</span>
                </summary>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--adm-muted)]">{f.answer}</p>
                <div className="mt-3 flex items-center gap-2">
                  <EditLink href={`/admin/faqs/${f.id}/edit`} />
                  {admin.role === "super_admin" && (
                    <DeleteAction compact endpoint={`/faqs/${f.id}`} redirectTo="/admin/faqs" confirmMessage="Delete this FAQ? This cannot be undone." />
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <Pagination meta={meta} basePath="/admin/faqs" params={{ limit, q, category_id }} />
    </div>
  );
}
