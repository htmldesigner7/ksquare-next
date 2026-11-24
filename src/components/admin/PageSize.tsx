"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const PAGE_SIZES = [10, 25, 50, 100];

/** "Show N entries" selector: sets ?limit= (keeping search/filters) and returns to page 1. */
export default function PageSize({ value }: { value: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onChange(limit: string) {
    const qs = new URLSearchParams(searchParams.toString());
    qs.set("limit", limit);
    qs.delete("page");
    router.push(`${pathname}?${qs}`);
  }

  return (
    <label className="flex items-center gap-2 text-[var(--adm-muted)]">
      Show
      <select value={value} onChange={(e) => onChange(e.target.value)} className="adm-input !h-9 !w-auto" aria-label="Rows per page" suppressHydrationWarning>
        {(PAGE_SIZES.includes(value) ? PAGE_SIZES : [...PAGE_SIZES, value].sort((a, b) => a - b)).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      entries
    </label>
  );
}
