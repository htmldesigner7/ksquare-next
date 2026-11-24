import Link from "next/link";

export default function PageHeader({
  title,
  description,
  action,
  children,
}: {
  title: string;
  description?: string;
  action?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="mt-1 text-sm text-[var(--adm-muted)]">{description}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        {children}
        {action && (
          <Link href={action.href} className="adm-btn adm-btn-primary adm-btn-inline">
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
