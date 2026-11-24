import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import StatusSwitch from "@/components/admin/StatusSwitch";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import type { FaqCategory } from "@/lib/admin/types";

export const metadata: Metadata = { title: "FAQ category" };

export default async function FaqCategoryViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<FaqCategory>(`/admin/faq-categories/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const c = res.data;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/admin/faq-categories" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All FAQ categories
      </Link>
      <PageHeader title={c.name}>
        <Link href={`/admin/faq-categories/${c.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction
            endpoint={`/faq-categories/${c.id}`}
            redirectTo="/admin/faq-categories"
            confirmMessage={`Delete the category "${c.name}"? Its ${c.faq_count} FAQ(s) will be hidden too.`}
          />
        )}
      </PageHeader>

      <section className="rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <dl className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[var(--adm-muted)]">Status</dt>
            <dd className="mt-1">
              <StatusSwitch endpoint={`/faq-categories/${c.id}/status`} status={c.status} />
            </dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">FAQs</dt>
            <dd className="mt-0.5 font-medium">{c.faq_count}</dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Last updated</dt>
            <dd className="mt-0.5 font-medium">{formatDate(c.updated_at)}</dd>
          </div>
        </dl>
      </section>

      <section className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-[var(--adm-muted)] uppercase tracking-wide">FAQs in this category</h2>
          {c.status === "active" && (
            <Link href={`/admin/faqs/new?category=${c.id}`} className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
              + Add FAQs
            </Link>
          )}
        </div>
        {c.faqs.length === 0 && <p className="text-sm text-[var(--adm-muted)]">No FAQs yet.</p>}
        <div className="divide-y divide-[var(--adm-border)]">
          {c.faqs.map((f) => (
            <details key={f.id} className="py-3">
              <summary className="cursor-pointer text-sm font-medium">{f.question}</summary>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--adm-muted)]">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
