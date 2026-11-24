import type { Metadata } from "next";
import BlogForm from "@/components/admin/blogs/BlogForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import type { Author } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Add blog" };

export default async function NewBlogPage() {
  const [, authors] = await Promise.all([requireAdmin(), adminFetch<Author[]>("/admin/authors")]);
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Add blog" description="All fields are required." />
      <BlogForm authors={authors.data ?? []} defaultAuthorId={authors.data?.[0]?.id ?? 0} today={new Date().toISOString().slice(0, 10)} />
    </div>
  );
}
