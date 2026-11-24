import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqEditForm } from "@/components/admin/faq/FaqForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Faq, FaqCategoryOption } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit FAQ" };

export default async function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const [faq, categories] = await Promise.all([
    adminFetch<Faq>(`/admin/faqs/${id}`),
    adminFetch<FaqCategoryOption[]>("/admin/faq-categories/options"),
  ]);
  if (faq.status === 404 || !faq.data) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Edit FAQ" description="Fields marked * are required." />
      <FaqEditForm faq={faq.data} categories={categories.data ?? []} />
    </div>
  );
}
