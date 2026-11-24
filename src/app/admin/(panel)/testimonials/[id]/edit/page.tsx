import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Testimonial } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit testimonial" };

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const res = await adminFetch<Testimonial>(`/admin/testimonials/${id}`);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Edit testimonial" description="Fields marked * are required." />
      <TestimonialForm initial={res.data} />
    </div>
  );
}
