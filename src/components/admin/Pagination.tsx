import Link from "next/link";
import type { PageMeta } from "@/lib/admin/types";

/** Previous/Next pager that preserves the other query params (search, filters). */
export default function Pagination({
  meta,
  basePath,
  params = {},
}: {
  meta?: PageMeta;
  basePath: string;
  params?: Record<string, string | undefined>;
}) {
  if (!meta || meta.totalPages <= 1) return null;
  const href = (page: number) => {
    const qs = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (v) qs.set(k, v);
    qs.set("page", String(page));
    return `${basePath}?${qs}`;
  };
  return (
    <nav className="flex items-center justify-between text-sm" aria-label="Pagination">
      <span className="text-[var(--adm-muted)]">
        Page {meta.page} of {meta.totalPages} · {meta.total} total
      </span>
      <div className="flex gap-2">
        {meta.page > 1 && (
          <Link href={href(meta.page - 1)} className="adm-btn adm-btn-ghost !h-9">
            Previous
          </Link>
        )}
        {meta.page < meta.totalPages && (
          <Link href={href(meta.page + 1)} className="adm-btn adm-btn-ghost !h-9">
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}
