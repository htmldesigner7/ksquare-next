import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/blogs/BlogForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Author, Blog } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit blog" };

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [, blog, authors] = await Promise.all([
    requireAdmin(),
    adminFetch<Blog>(`/admin/blogs/${id}`),
    adminFetch<Author[]>("/admin/authors"),
  ]);
  if (blog.status === 404 || !blog.data) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Edit blog" description="Leave an image empty to keep the current one." />
      <BlogForm initial={blog.data} authors={authors.data ?? []} defaultAuthorId={authors.data?.[0]?.id ?? 0} today={blog.data.date} />
    </div>
  );
}
