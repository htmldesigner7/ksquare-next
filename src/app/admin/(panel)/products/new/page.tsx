import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/products/ProductForm";
import { adminFetch } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Add product" };

/** Categories a product can be put in (active ones; its own category stays selectable even if inactive). */
async function loadCategories() {
  const res = await adminFetch<{ id: number; name: string; status: string }[]>("/admin/categories", { query: { limit: "100" } });
  return (res.data ?? []).filter((c) => c.status === "active").map(({ id, name }) => ({ id, name }));
}

export default async function NewProductPage() {
  const categories = await loadCategories();
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Add product" description="Fields marked * are required." />
      <ProductForm categories={categories} />
    </div>
  );
}
