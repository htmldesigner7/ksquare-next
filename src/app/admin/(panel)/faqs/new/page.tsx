import type { Metadata } from "next";
import { FaqCreateForm } from "@/components/admin/faq/FaqForm";
import PageHeader from "@/components/admin/PageHeader";
import { adminFetch } from "@/lib/admin/dal";
import type { FaqCategoryOption } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Add FAQs" };

export default async function NewFaqPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  // Only active, non-deleted categories are offered.
  const res = await adminFetch<FaqCategoryOption[]>("/admin/faq-categories/options");

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Add FAQs" description="Pick a category, then add one or more questions and answers." />
      <FaqCreateForm categories={res.data ?? []} defaultCategoryId={Number(category) || undefined} />
    </div>
  );
}
