import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminImage from "@/components/admin/AdminImage";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import RichText from "@/components/admin/RichText";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import type { Testimonial } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Testimonial" };

export default async function TestimonialViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Testimonial>(`/admin/testimonials/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const t = res.data;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/admin/testimonials" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All testimonials
      </Link>
      <PageHeader title={t.name} description={t.company}>
        <Link href={`/admin/testimonials/${t.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction
            endpoint={`/testimonials/${t.id}`}
            redirectTo="/admin/testimonials"
            confirmMessage={`Delete the testimonial from ${t.name}? This cannot be undone.`}
          />
        )}
      </PageHeader>

      <section className="space-y-5 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        {t.profile_photo && <AdminImage src={t.profile_photo} alt={`${t.name} profile photo`} className="size-24 rounded-full object-cover" />}
        <RichText html={t.description} />
        <dl className="grid gap-4 border-t border-[var(--adm-border)] pt-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[var(--adm-muted)]">Created</dt>
            <dd className="mt-0.5 font-medium">{formatDate(t.created_at)}</dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Last updated</dt>
            <dd className="mt-0.5 font-medium">{formatDate(t.updated_at)}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
