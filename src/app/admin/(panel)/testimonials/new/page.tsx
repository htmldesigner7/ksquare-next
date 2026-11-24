import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";

export const metadata: Metadata = { title: "Add testimonial" };

export default function NewTestimonialPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Add testimonial" description="Fields marked * are required." />
      <TestimonialForm />
    </div>
  );
}
