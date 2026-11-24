"use client";

import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import RichTextField from "@/components/admin/RichTextField";
import { useAdminForm } from "@/lib/admin/client";
import type { Testimonial } from "@/lib/admin/types";

export default function TestimonialForm({ initial }: { initial?: Testimonial }) {
  const { pending, error, fieldErrors, onSubmit } = useAdminForm({
    endpoint: initial ? `/testimonials/${initial.id}` : "/testimonials",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/testimonials?success=${initial ? "updated" : "created"}`,
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate encType="multipart/form-data">
      <FormError message={error} />
      <FormSection title="Testimonial">
        <FormField label="Name" name="name" defaultValue={initial?.name} maxLength={120} required markRequired error={fieldErrors.name} />
        <FormField label="Company" name="company" defaultValue={initial?.company} maxLength={150} required markRequired error={fieldErrors.company} />
        <RichTextField label="Description" name="description" defaultValue={initial?.description} required error={fieldErrors.description} />
        <ImageField
          name="profile_photo"
          label="Profile photo (optional)"
          currentUrl={initial?.profile_photo}
          removable
          error={fieldErrors.profile_photo}
          hint="JPG, PNG or WebP, up to 2 MB."
        />
      </FormSection>
      <FormActions pending={pending} cancelHref="/admin/testimonials" submitLabel={initial ? "Save changes" : "Create testimonial"} />
    </form>
  );
}
