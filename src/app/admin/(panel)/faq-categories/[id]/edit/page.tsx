import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqCategoryForm from "@/components/admin/faq/FaqCategoryForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { FaqCategory } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit FAQ category" };

export default async function EditFaqCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const res = await adminFetch<FaqCategory>(`/admin/faq-categories/${id}`);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <PageHeader title="Edit FAQ category" description="Fields marked * are required." />
      <FaqCategoryForm initial={res.data} />
    </div>
  );
}
