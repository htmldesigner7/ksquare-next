"use client";

import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import SelectField from "@/components/admin/SelectField";
import { useAdminForm } from "@/lib/admin/client";
import type { FaqCategorySummary } from "@/lib/admin/types";

export default function FaqCategoryForm({ initial }: { initial?: FaqCategorySummary }) {
  const { pending, error, fieldErrors, onSubmit } = useAdminForm({
    endpoint: initial ? `/faq-categories/${initial.id}` : "/faq-categories",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/faq-categories?success=${initial ? "updated" : "created"}`,
  });

  return (
    <form
      noValidate // the server validates and returns a message per field
      onSubmit={(e) => onSubmit(e, (fd) => ({ name: fd.get("name"), status: fd.get("status") }))} // JSON body, no files
      className="space-y-6"
    >
      <FormError message={error} />
      <FormSection title="FAQ category">
        <FormField label="Name" name="name" defaultValue={initial?.name} maxLength={150} required markRequired error={fieldErrors.name} />
        <SelectField
          label="Status"
          name="status"
          required
          defaultValue={initial?.status ?? "active"}
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ]}
          error={fieldErrors.status}
        />
        <p className="text-xs text-[var(--adm-muted)]">Only active categories can be chosen when adding FAQs.</p>
      </FormSection>
      <FormActions pending={pending} cancelHref="/admin/faq-categories" submitLabel={initial ? "Save changes" : "Create category"} />
    </form>
  );
}
