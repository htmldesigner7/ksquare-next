import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminImage from "@/components/admin/AdminImage";
import DeleteAction from "@/components/admin/DeleteAction";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate, parseId } from "@/lib/admin/format";
import type { Presence } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Ksquare Presence" };

export default async function PresenceViewPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Presence>(`/admin/ksquare-presences/${id}`)]);
  if (res.status === 404 || !res.data) notFound();
  const s = res.data;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/admin/ksquare-presences" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All states
      </Link>
      <PageHeader title={s.state_name} description={s.short_line ?? undefined}>
        <Link href={`/admin/ksquare-presences/${s.id}/edit`} className="adm-btn adm-btn-ghost adm-btn-inline">
          Edit
        </Link>
        {admin.role === "super_admin" && (
          <DeleteAction endpoint={`/ksquare-presences/${s.id}`} redirectTo="/admin/ksquare-presences" confirmMessage={`Delete "${s.state_name}" and its cities?`} />
        )}
      </PageHeader>

      <section className="space-y-4 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <AdminImage src={s.map_img} alt={`${s.state_name} map`} className="max-h-72 rounded-lg border border-[var(--adm-border)] object-contain" />
        <dl className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[var(--adm-muted)]">Status</dt>
            <dd className="mt-0.5 font-medium capitalize">{s.status}</dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">State link</dt>
            <dd className="mt-0.5 font-medium break-all">
              {s.state_link ? (
                <a href={s.state_link} target="_blank" rel="noopener noreferrer" className="text-[var(--adm-primary)] hover:underline">
                  {s.state_link}
                </a>
              ) : (
                "—"
              )}
            </dd>
          </div>
          <div>
            <dt className="text-[var(--adm-muted)]">Last updated</dt>
            <dd className="mt-0.5 font-medium">{formatDate(s.updated_at)}</dd>
          </div>
        </dl>
      </section>

      <section className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <h2 className="text-sm font-semibold text-[var(--adm-muted)] uppercase tracking-wide">Cities ({s.cities.length})</h2>
        {s.cities.length === 0 && <p className="text-sm text-[var(--adm-muted)]">—</p>}
        <ul className="divide-y divide-[var(--adm-border)] text-sm">
          {s.cities.map((c) => (
            <li key={c.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
              <span className="font-medium">{c.city_name}</span>
              {c.city_link && (
                <a href={c.city_link} target="_blank" rel="noopener noreferrer" className="break-all text-[var(--adm-primary)] hover:underline">
                  {c.city_link}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
