import type { Metadata } from "next";
import FaqCategoryForm from "@/components/admin/faq/FaqCategoryForm";
import PageHeader from "@/components/admin/PageHeader";

export const metadata: Metadata = { title: "Add FAQ category" };

export default function NewFaqCategoryPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <PageHeader title="Add FAQ category" description="Fields marked * are required." />
      <FaqCategoryForm />
    </div>
  );
}
