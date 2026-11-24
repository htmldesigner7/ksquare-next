import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminImage from "@/components/admin/AdminImage";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import RichText from "@/components/admin/RichText";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import type { Category } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Category" };

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
    <h2 className="text-sm font-semibold text-[var(--adm-muted)] uppercase tracking-wide">{title}</h2>
    {children}
  </section>
);

const Text = ({ children }: { children: string | null }) =>
  children ? <p className="whitespace-pre-wrap text-sm leading-relaxed">{children}</p> : <p className="text-sm text-[var(--adm-muted)]">—</p>;

export default async function CategoryViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Category>(`/admin/categories/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const c = res.data;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/admin/categories" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All categories
      </Link>
      <PageHeader title={c.name} description={c.title}>
        <Link href={`/admin/categories/${c.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction
            endpoint={`/categories/${c.id}`}
            redirectTo="/admin/categories"
            confirmMessage={`Delete the category "${c.name}" and all its configuration entries? This cannot be undone.`}
          />
        )}
      </PageHeader>

      <Card title="Overview">
        <RichText html={c.short_description} />
        <p className="text-sm">
          <span className="text-[var(--adm-muted)]">Type:</span> <span className="capitalize">{c.type}</span>
          <span className="mx-2 text-[var(--adm-muted)]">·</span>
          <span className="text-[var(--adm-muted)]">Status:</span> <span className="capitalize">{c.status}</span>
        </p>
        <p className="text-xs text-[var(--adm-muted)]">
          Slug: {c.slug} · Last updated {formatDate(c.updated_at)}
        </p>
        {(c.meta_title || c.meta_description) && (
          <p className="text-xs text-[var(--adm-muted)]">
            Meta: {c.meta_title ?? "—"} — {c.meta_description ?? "—"}
          </p>
        )}
      </Card>

      <Card title="Images">
        <div className="grid gap-4 sm:grid-cols-3">
          {([["List image", c.list_image], ["Detail image (desktop)", c.detail_image_d], ["Detail image (mobile)", c.detail_image_m]] as const).map(([label, src]) => (
            <figure key={label}>
              <AdminImage src={src} alt={label} className="aspect-video w-full rounded-lg border border-[var(--adm-border)] object-cover" />
              <figcaption className="mt-1 text-xs text-[var(--adm-muted)]">{label}</figcaption>
            </figure>
          ))}
        </div>
      </Card>

      {(c.why_choose_img || c.menu_img || c.menu_icon) && (
        <Card title="Additional images">
          <div className="grid gap-4 sm:grid-cols-3">
            {([["Why choose image", c.why_choose_img], ["Menu image", c.menu_img], ["Menu icon", c.menu_icon]] as const).map(
              ([label, src]) =>
                src && (
                  <figure key={label}>
                    <AdminImage src={src} alt={label} className="aspect-video w-full rounded-lg border border-[var(--adm-border)] bg-white object-contain" />
                    <figcaption className="mt-1 text-xs text-[var(--adm-muted)]">{label}</figcaption>
                  </figure>
                ),
            )}
          </div>
        </Card>
      )}

      <Card title="Product summary">
        <Text>{c.product_summary}</Text>
        {c.product_short_line && <p className="text-sm text-[var(--adm-muted)]">Short line: {c.product_short_line}</p>}
      </Card>
      <Card title="Why choose">
        {c.why_choose_title && <p className="text-sm font-medium">{c.why_choose_title}</p>}
        <Text>{c.why_choose_summary}</Text>
        {c.why_choose_desc && <RichText html={c.why_choose_desc} />}
      </Card>

      <Card title={`Configuration (${c.configuration.length})`}>
        {c.configuration_short_line && <p className="text-sm text-[var(--adm-muted)]">Short line: {c.configuration_short_line}</p>}
        {c.configuration.length === 0 && <Text>{null}</Text>}
        <div className="grid gap-4 sm:grid-cols-2">
          {c.configuration.map((cfg) => (
            <div key={cfg.id} className="flex gap-3 rounded-lg border border-[var(--adm-border)] p-4">
              <AdminImage src={cfg.icon} alt="" className="size-12 shrink-0 rounded-md object-contain" />
              <div>
                <p className="text-sm font-medium">{cfg.title}</p>
                <div className="mt-1 text-[var(--adm-muted)]">
                  <RichText html={cfg.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
