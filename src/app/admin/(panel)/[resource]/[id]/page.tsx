import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteAction from "@/components/admin/DeleteAction";
import FieldValue from "@/components/admin/resource/FieldValue";
import PageHeader from "@/components/admin/PageHeader";
import StatusSwitch from "@/components/admin/StatusSwitch";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import { resourceOr404 } from "@/lib/admin/resource-data";
import { getResource, rowTitle, type ResourceRow } from "@/lib/admin/resources";

type Params = Promise<{ resource: string; id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return { title: getResource((await params).resource)?.label ?? "Admin" };
}

export default async function ResourceViewPage({ params }: { params: Params }) {
  const { resource: slug, id: rawId } = await params;
  const resource = resourceOr404(slug);
  const id = parseId(rawId);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<ResourceRow>(`/admin/${resource.slug}/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const row = res.data;
  const base = `/admin/${resource.slug}`;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href={base} className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All {resource.plural.toLowerCase()}
      </Link>
      <PageHeader title={rowTitle(resource, row)} description={resource.label}>
        <Link href={`${base}/${row.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction endpoint={`/${resource.slug}/${row.id}`} redirectTo={base} confirmMessage={`Delete ${resource.label.toLowerCase()} "${rowTitle(resource, row)}"?`} />
        )}
      </PageHeader>

      <section className="rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <dl className="grid gap-5 text-sm sm:grid-cols-2">
          {resource.fields.map((f) => (
            <div key={f.name} className={f.type === "textarea" || f.type === "image" ? "sm:col-span-2" : undefined}>
              <dt className="text-[var(--adm-muted)]">{f.label}</dt>
              <dd className="mt-1">
                <FieldValue field={f} row={row} imageClass="max-h-48 max-w-full rounded-lg border border-[var(--adm-border)] bg-white object-contain" />
              </dd>
            </div>
          ))}
          <div>
            <dt className="text-[var(--adm-muted)]">Status</dt>
            <dd className="mt-1">
              <StatusSwitch endpoint={`/${resource.slug}/${row.id}/status`} status={row.status} />
            </dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Last updated</dt>
            <dd className="mt-1">{formatDate(row.updated_at)}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
