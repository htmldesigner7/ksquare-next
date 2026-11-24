import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminImage from "@/components/admin/AdminImage";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import RichText from "@/components/admin/RichText";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import type { Product } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Product" };

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
    <h2 className="text-sm font-semibold text-[var(--adm-muted)] uppercase tracking-wide">{title}</h2>
    {children}
  </section>
);

export default async function ProductViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Product>(`/admin/products/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const p = res.data;

  const rich = [
    ["Highlights", p.highlights],
    ["Benefits", p.benefits],
    ["Features", p.features],
    ["Technical specification", p.technical_specification],
    ["Installation process", p.installation_process],
  ] as const;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/admin/products" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All products
      </Link>
      <PageHeader title={p.name} description={p.title}>
        <Link href={`/admin/products/${p.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && <DeleteAction endpoint={`/products/${p.id}`} redirectTo="/admin/products" confirmMessage={`Delete the product "${p.name}"?`} />}
      </PageHeader>

      <Card title="Overview">
        <RichText html={p.short_description} />
        {p.product_info && <RichText html={p.product_info} />}
        <p className="text-xs text-[var(--adm-muted)]">
          Category: {p.category_name ?? "—"} · Slug: {p.slug} · <span className="capitalize">{p.status}</span> · Last updated {formatDate(p.updated_at)}
        </p>
      </Card>

      <Card title="Images">
        <div className="grid gap-4 sm:grid-cols-3">
          <figure>
            <AdminImage src={p.list_img} alt="List image" className="aspect-video w-full rounded-lg border border-[var(--adm-border)] object-cover" />
            <figcaption className="mt-1 text-xs text-[var(--adm-muted)]">List image</figcaption>
          </figure>
          {p.detail_imgs.map((d, i) => (
            <figure key={d.id}>
              <AdminImage src={d.img} alt={`Detail image ${i + 1}`} className="aspect-video w-full rounded-lg border border-[var(--adm-border)] object-cover" />
              <figcaption className="mt-1 text-xs text-[var(--adm-muted)]">Detail image {i + 1}</figcaption>
            </figure>
          ))}
        </div>
      </Card>

      {rich.map(([title, html]) => (
        <Card key={title} title={title}>
          {html ? <RichText html={html} /> : <p className="text-sm text-[var(--adm-muted)]">—</p>}
        </Card>
      ))}

      <Card title={`FAQs (${p.faqs.length})`}>
        {p.faqs.length === 0 && <p className="text-sm text-[var(--adm-muted)]">—</p>}
        <div className="divide-y divide-[var(--adm-border)]">
          {p.faqs.map((f) => (
            <details key={f.id} className="py-3">
              <summary className="cursor-pointer text-sm font-medium">{f.faq_question}</summary>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--adm-muted)]">{f.faq_answer}</p>
            </details>
          ))}
        </div>
      </Card>
    </div>
  );
}
