import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/products/ProductForm";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Product } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit product" };

/** Categories a product can be put in (active ones; its own category stays selectable even if inactive). */
async function loadCategories(currentId?: number | null) {
  const res = await adminFetch<{ id: number; name: string; status: string }[]>("/admin/categories", { query: { limit: "100" } });
  return (res.data ?? []).filter((c) => c.status === "active" || c.id === currentId).map(({ id, name }) => ({ id, name }));
}

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const res = await adminFetch<Product>(`/admin/products/${id}`);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="Edit product" description="Leave an image empty to keep the current one." />
      <ProductForm initial={res.data} categories={await loadCategories(res.data.category_id)} />
    </div>
  );
}
