import "server-only";
import { apiFetch } from "@/lib/admin/api";

/** Blog as listed on the blog page. */
export type BlogCard = {
  title: string;
  short_description: string;
  url: string;
  date: string; // YYYY-MM-DD
  front_image: string;
  author_name: string | null;
  author_thumbnail: string | null;
  author_image: string | null;
};

/** One blog with its author, for the blog detail page. */
export type BlogPost = BlogCard & {
  description: string; // sanitized HTML (cleaned by the API)
  detail_image: string;
  cta_text: string;
  conclusion: string;
  meta_title: string | null;
  meta_description: string | null;
  author_designation: string | null;
  author_years_of_exp: number | null;
  author_description: string | null;
  author_social_name: string | null;
  author_social_url: string | null;
};

export type BlogPage = { posts: BlogCard[]; page: number; totalPages: number };

/** Published blogs for the public blog page (public API, no sign-in). */
export async function getBlogs(page: number, limit = 9): Promise<BlogPage> {
  const res = await apiFetch<BlogCard[]>("/frontend/blogs", { query: { page, limit } });
  const meta = res.meta as { totalPages?: number } | undefined;
  return { posts: res.data ?? [], page, totalPages: meta?.totalPages ?? 1 };
}

/** One published blog by its URL slug, or null when it does not exist. */
export async function getBlog(slug: string): Promise<BlogPost | null> {
  const res = await apiFetch<BlogPost>(`/frontend/blogs/${encodeURIComponent(slug)}`);
  return res.ok ? res.data : null;
}

/**
 * Page numbers to show in the pager, with "…" for skipped stretches: 1 … 4 5 6 … 29.
 * Always includes the first and last page and the pages next to the current one.
 */
export function pagerItems(page: number, totalPages: number): (number | "…")[] {
  const keep = new Set([1, totalPages, page - 1, page, page + 1]);
  if (page <= 3) [2, 3, 4].forEach((n) => keep.add(n));
  if (page >= totalPages - 2) [totalPages - 3, totalPages - 2, totalPages - 1].forEach((n) => keep.add(n));
  const nums = [...keep].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

/** "2026-11-18" -> "Nov 18, 2026" */
export function formatBlogDate(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&[a-z#0-9]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";

/** Gives every <h2> of the (API-sanitized) article an id and returns them for the table of contents. */
export function withHeadingIds(html: string): { html: string; toc: { id: string; label: string }[] } {
  const toc: { id: string; label: string }[] = [];
  const used = new Set<string>(["conclusion"]);
  const out = html.replace(/<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (_m, inner: string) => {
    const label = inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    let id = slugify(label);
    for (let n = 2; used.has(id); n++) id = `${slugify(label)}-${n}`;
    used.add(id);
    toc.push({ id, label });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}
