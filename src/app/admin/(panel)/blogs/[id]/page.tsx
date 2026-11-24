import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminImage from "@/components/admin/AdminImage";
import BlogStatusToggle from "@/components/admin/BlogStatusToggle";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import RichText from "@/components/admin/RichText";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, formatDay, parseId } from "@/lib/admin/format";
import type { Blog } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Blog" };

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
    <h2 className="text-sm font-semibold text-[var(--adm-muted)] uppercase tracking-wide">{title}</h2>
    {children}
  </section>
);

export default async function BlogViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Blog>(`/admin/blogs/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const b = res.data;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/admin/blogs" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All blogs
      </Link>
      <PageHeader title={b.title} description={`/${b.url}`}>
        <Link href={`/admin/blogs/${b.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction endpoint={`/blogs/${b.id}`} redirectTo="/admin/blogs" confirmMessage={`Delete "${b.title}"? It will be removed from the site.`} />
        )}
      </PageHeader>

      <Card title="Overview">
        <dl className="grid gap-4 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-[var(--adm-muted)]">Status</dt>
            <dd className="mt-1">
              <BlogStatusToggle id={b.id} status={b.status} />
            </dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Author</dt>
            <dd className="mt-0.5 font-medium">{b.author_name ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Date</dt>
            <dd className="mt-0.5 font-medium">{formatDay(b.date)}</dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Last updated</dt>
            <dd className="mt-0.5 font-medium">{formatDate(b.updated_at)}</dd>
          </div>
        </dl>
        <p className="text-sm">{b.short_description}</p>
      </Card>

      <Card title="Images">
        <div className="grid gap-4 sm:grid-cols-3">
          {([["Front image", b.front_image], ["Detail image", b.detail_image], ["CTA image", b.cta_image]] as const).map(([label, src]) => (
            <figure key={label}>
              <AdminImage src={src} alt={label} className="aspect-video w-full rounded-lg border border-[var(--adm-border)] object-cover" />
              <figcaption className="mt-1 text-xs text-[var(--adm-muted)]">{label}</figcaption>
            </figure>
          ))}
        </div>
      </Card>

      <Card title="Description">
        <RichText html={b.description} />
      </Card>
      <Card title="Call to action">
        <p className="text-sm font-medium">{b.cta_text}</p>
      </Card>
      <Card title="Conclusion">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{b.conclusion}</p>
      </Card>
      <Card title="SEO">
        <p className="text-sm font-medium">{b.meta_title}</p>
        <p className="text-sm text-[var(--adm-muted)]">{b.meta_description}</p>
      </Card>
    </div>
  );
}
