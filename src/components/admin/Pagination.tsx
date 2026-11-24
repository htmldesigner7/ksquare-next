import Link from "next/link";
import PageSize from "@/components/admin/PageSize";
import type { PageMeta } from "@/lib/admin/types";

/** Page numbers to show: first, last, and a window around the current page ("…" marks gaps). */
function pageNumbers(current: number, total: number): (number | "gap")[] {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? ["gap" as const, p] : [p]));
}

/** "Show N entries" + numbered pager that keeps the other query params (search, filters). */
export default function Pagination({
  meta,
  basePath,
  params = {},
}: {
  meta?: PageMeta;
  basePath: string;
  params?: Record<string, string | undefined>;
}) {
  if (!meta || meta.total === 0) return null;
  const href = (page: number) => {
    const qs = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (v) qs.set(k, v);
    qs.set("limit", String(meta.limit));
    qs.set("page", String(page));
    return `${basePath}?${qs}`;
  };
  const from = (meta.page - 1) * meta.limit + 1;
  const to = Math.min(meta.page * meta.limit, meta.total);
  const item = "adm-btn !h-9 !min-w-9 !px-3";

  return (
    <nav className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between" aria-label="Pagination">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <PageSize value={meta.limit} />
        <span className="text-[var(--adm-muted)]">
          Showing {from}–{to} of {meta.total}
        </span>
      </div>
      {meta.totalPages > 1 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {meta.page > 1 && (
            <Link href={href(meta.page - 1)} className={`${item} adm-btn-ghost`}>
              Previous
            </Link>
          )}
          {pageNumbers(meta.page, meta.totalPages).map((p, i) =>
            p === "gap" ? (
              <span key={`gap-${i}`} className="px-1 text-[var(--adm-muted)]">
                …
              </span>
            ) : p === meta.page ? (
              <span key={p} aria-current="page" className={`${item} cursor-default bg-[var(--adm-primary)] text-white`}>
                {p}
              </span>
            ) : (
              <Link key={p} href={href(p)} className={`${item} adm-btn-ghost`}>
                {p}
              </Link>
            ),
          )}
          {meta.page < meta.totalPages && (
            <Link href={href(meta.page + 1)} className={`${item} adm-btn-ghost`}>
              Next
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
