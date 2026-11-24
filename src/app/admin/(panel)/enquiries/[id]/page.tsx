import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Alert from "@/components/admin/Alert";
import DeleteButton from "@/components/admin/DeleteButton";
import StatusBadge from "@/components/admin/StatusBadge";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import { STATUS_LABEL, type Enquiry } from "@/lib/admin/types";
import { deleteEnquiry, updateEnquiryStatus } from "../actions";

export const metadata: Metadata = { title: "Enquiry" };

export default async function EnquiryDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const { saved, error } = await searchParams;

  const [admin, res] = await Promise.all([requireAdmin(), adminFetch<Enquiry>(`/admin/enquiries/${id}`)]);
  if (res.status === 404) notFound();
  const e = res.data;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/admin/enquiries" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All enquiries
      </Link>

      {saved && <Alert type="success">Status updated.</Alert>}
      {(error || !res.ok) && <Alert type="error">{error ?? res.message}</Alert>}

      {e && (
        <>
          <section className="space-y-5 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-bold">{e.subject ?? "General enquiry"}</h1>
                <p className="mt-1 text-sm text-[var(--adm-muted)]">Received {formatDate(e.created_at)}</p>
              </div>
              <StatusBadge status={e.status} />
            </div>

            <dl className="grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[var(--adm-muted)]">Name</dt>
                <dd className="mt-0.5 font-medium">{e.name}</dd>
              </div>
              <div>
                <dt className="text-[var(--adm-muted)]">Email</dt>
                <dd className="mt-0.5 font-medium break-all">
                  <a href={`mailto:${e.email}`} className="text-[var(--adm-primary)] hover:underline">
                    {e.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--adm-muted)]">Phone</dt>
                <dd className="mt-0.5 font-medium">{e.phone ?? "—"}</dd>
              </div>
            </dl>

            <div>
              <h2 className="text-sm text-[var(--adm-muted)]">Message</h2>
              <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">{e.message}</p>
            </div>
          </section>

          <section className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
            <form action={updateEnquiryStatus.bind(null, e.id)} className="flex items-end gap-3">
              <div className="space-y-1.5">
                <label htmlFor="status" className="block text-sm font-medium">
                  Status
                </label>
                <select id="status" name="status" defaultValue={e.status} className="adm-input !w-48" suppressHydrationWarning>
                  {Object.entries(STATUS_LABEL).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="adm-btn adm-btn-ghost">
                Update
              </button>
            </form>

            {admin.role === "super_admin" && (
              <form action={deleteEnquiry.bind(null, e.id)}>
                <DeleteButton message="Delete this enquiry permanently? This cannot be undone." />
              </form>
            )}
          </section>
        </>
      )}
    </div>
  );
}
