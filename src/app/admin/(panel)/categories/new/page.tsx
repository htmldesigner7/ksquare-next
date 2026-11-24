import type { Metadata } from "next";
import CategoryForm from "@/components/admin/categories/CategoryForm";
import PageHeader from "@/components/admin/PageHeader";

export const metadata: Metadata = { title: "Add category" };

export default function NewCategoryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Add category" description="Fields marked * are required." />
      <CategoryForm />
    </div>
  );
}
