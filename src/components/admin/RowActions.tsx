import Link from "next/link";
import { MdEdit, MdVisibility } from "react-icons/md";

/** Shared look of the small icon buttons in list rows (view / edit / delete). */
export const ROW_ACTION = "inline-flex size-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--adm-primary)] disabled:opacity-50";
export const ROW_ACTION_VIEW = `${ROW_ACTION} bg-[var(--adm-primary-pale)] text-[var(--adm-primary)] hover:bg-[var(--adm-primary)] hover:text-white`;
export const ROW_ACTION_EDIT = `${ROW_ACTION} bg-[var(--adm-success-pale)] text-[var(--adm-success)] hover:bg-[var(--adm-success)] hover:text-white`;
export const ROW_ACTION_DELETE = `${ROW_ACTION} bg-[var(--adm-danger-pale)] text-[var(--adm-danger)] hover:bg-[var(--adm-danger)] hover:text-white`;

export function ViewLink({ href, label = "View" }: { href: string; label?: string }) {
  return (
    <Link href={href} title={label} aria-label={label} className={ROW_ACTION_VIEW}>
      <MdVisibility className="size-[18px]" aria-hidden />
    </Link>
  );
}

export function EditLink({ href, label = "Edit" }: { href: string; label?: string }) {
  return (
    <Link href={href} title={label} aria-label={label} className={ROW_ACTION_EDIT}>
      <MdEdit className="size-[18px]" aria-hidden />
    </Link>
  );
}
