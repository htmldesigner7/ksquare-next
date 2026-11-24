import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryForm from "@/components/admin/categories/CategoryForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Category } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit category" };

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const res = await adminFetch<Category>(`/admin/categories/${id}`);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Edit category" description="Leave an image empty to keep the current one." />
      <CategoryForm initial={res.data} />
    </div>
  );
}
