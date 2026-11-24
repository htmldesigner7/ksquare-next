import Link from "next/link";
import Alert from "./Alert";

/** Card that groups related fields in a create/edit form. */
export function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
      <h2 className="flex items-center gap-2.5 border-b border-[var(--adm-border)] pb-3 text-base font-semibold">
        <span className="h-5 w-1 rounded-full bg-[var(--adm-primary)]" aria-hidden />
        {title}
      </h2>
      {children}
    </section>
  );
}

export function FormError({ message }: { message: string | null }) {
  return message ? <Alert type="error">{message}</Alert> : null;
}

export function FormActions({ pending, cancelHref, submitLabel }: { pending: boolean; cancelHref: string; submitLabel: string }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={cancelHref} className="adm-btn adm-btn-ghost adm-btn-inline">
        Cancel
      </Link>
      <button type="submit" disabled={pending} className="adm-btn adm-btn-primary adm-btn-inline">
        {pending ? "Saving…" : submitLabel}
      </button>
    </div>
  );
}
