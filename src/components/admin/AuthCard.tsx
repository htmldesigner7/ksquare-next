import Image from "next/image";

/** Centered card used by every admin auth screen (login, forgot/reset password). */
export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px]">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <Image src="/favicon.ico" alt="" width={44} height={44} priority className="rounded-lg" unoptimized />
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--adm-primary)]">
            Ksquare Admin
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-7 shadow-[0_10px_40px_-20px_rgba(15,27,93,0.25)] sm:p-9">
          <h1 className="text-2xl font-bold text-[var(--adm-text)]">{title}</h1>
          <p className="mt-1.5 mb-6 text-sm text-[var(--adm-muted)]">{subtitle}</p>
          {children}
        </div>
      </div>
    </main>
  );
}
