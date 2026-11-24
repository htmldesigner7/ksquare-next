"use client";

import { useState } from "react";
import AdminImage from "@/components/admin/AdminImage";
import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import RichTextField from "@/components/admin/RichTextField";
import SeoFields, { useAutoSlug } from "@/components/admin/SeoFields";
import SelectField from "@/components/admin/SelectField";
import TextAreaField from "@/components/admin/TextAreaField";
import { useAdminForm, useRepeater } from "@/lib/admin/client";
import type { Product } from "@/lib/admin/types";

const MAX_IMAGES = 10; // matches the API limits
const MAX_FAQS = 30;

/** Summernote sections: [field name, label] */
const RICH_FIELDS = [
  ["highlights", "Highlights"],
  ["benefits", "Benefits"],
  ["features", "Features"],
  ["technical_specification", "Technical specification"],
  ["installation_process", "Installation process"],
] as const;

export default function ProductForm({ initial, categories }: { initial?: Product; categories: { id: number; name: string }[] }) {
  const auto = useAutoSlug(initial?.slug);
  const { pending, error, fieldErrors, onSubmit, clearErrors } = useAdminForm({
    endpoint: initial ? `/products/${initial.id}` : "/products",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/products?success=${initial ? "updated" : "created"}`,
  });

  // Existing detail images (can be removed) + new upload slots (Add more / Delete)
  const [existing, setExisting] = useState(initial?.detail_imgs ?? []);
  const slots = useRepeater<{ slot: true }>([], () => ({ slot: true }));
  const faqs = useRepeater(
    (initial?.faqs ?? []).map((f) => ({ faq_question: f.faq_question, faq_answer: f.faq_answer })),
    () => ({ faq_question: "", faq_answer: "" }),
  );
  const imageCount = existing.length + slots.rows.length;

  return (
    <form
      noValidate // the server validates and returns a message per field
      encType="multipart/form-data"
      className="space-y-6"
      onSubmit={(e) =>
        onSubmit(e, (fd) => {
          // Repeating rows travel as JSON; their own inputs are not sent.
          for (const key of [...fd.keys()]) if (key.startsWith("faq_q_") || key.startsWith("faq_a_")) fd.delete(key);
          fd.set("faqs", JSON.stringify(faqs.rows.map(({ faq_question, faq_answer }) => ({ faq_question, faq_answer }))));
          fd.set("keep_image_ids", JSON.stringify(existing.map((i) => i.id)));
        })
      }
    >
      <FormError message={error} />

      <FormSection title="Basic details">
        <div className="grid gap-5 md:grid-cols-2">
          <SelectField
            label="Category"
            name="category_id"
            required
            defaultValue={initial?.category_id ?? ""}
            options={[{ value: "", label: "Select a category" }, ...categories.map((c) => ({ value: c.id, label: c.name }))]}
            error={fieldErrors.category_id}
          />
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
          <FormField label="Name" name="name" defaultValue={initial?.name} maxLength={255} required markRequired error={fieldErrors.name} onChange={(e) => auto.onNameChange(e.target.value)} />
          <FormField label="Title" name="title" defaultValue={initial?.title} maxLength={255} required markRequired error={fieldErrors.title} />
        </div>
        <RichTextField label="Short description" name="short_description" defaultValue={initial?.short_description} required minHeight={120} error={fieldErrors.short_description} />
        <RichTextField label="Product info" name="product_info" defaultValue={initial?.product_info} minHeight={160} error={fieldErrors.product_info} />
      </FormSection>

      <FormSection title="SEO">
        <SeoFields auto={auto} metaTitle={initial?.meta_title} metaDescription={initial?.meta_description} errors={fieldErrors} />
      </FormSection>

      <FormSection title="Images">
        <ImageField name="list_img" label="List image" required currentUrl={initial?.list_img} error={fieldErrors.list_img} hint="JPG, PNG or WebP, up to 2 MB." />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Detail images (up to {MAX_IMAGES})</h3>
          {existing.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4">
              {existing.map((img) => (
                <figure key={img.id} className="space-y-1.5">
                  <AdminImage src={img.img} alt="Detail image" className="aspect-video w-full rounded-lg border border-[var(--adm-border)] object-cover" />
                  <button type="button" onClick={() => setExisting((l) => l.filter((x) => x.id !== img.id))} className="text-xs font-medium text-[var(--adm-danger)] hover:underline">
                    Remove
                  </button>
                </figure>
              ))}
            </div>
          )}
          {slots.rows.map((row, i) => (
            <div key={row.key} className="flex items-start gap-3">
              <div className="flex-1">
                <ImageField name={`detail_img_${i}`} label={`New detail image ${i + 1}`} error={fieldErrors[`detail_img_${i}`]} hint="JPG, PNG or WebP, up to 2 MB." />
              </div>
              <button type="button" onClick={() => slots.remove(row.key)} className="mt-8 text-sm font-medium text-[var(--adm-danger)] hover:underline" aria-label={`Delete new detail image ${i + 1}`}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={slots.add} disabled={imageCount >= MAX_IMAGES} className="adm-btn adm-btn-ghost adm-btn-inline">
            + Add more
          </button>
          {fieldErrors.detail_imgs && <p className="text-xs text-[var(--adm-danger)]">{fieldErrors.detail_imgs}</p>}
        </div>
      </FormSection>

      <FormSection title="Product content">
        {RICH_FIELDS.map(([name, label]) => (
          <RichTextField key={name} label={label} name={name} defaultValue={initial?.[name]} error={fieldErrors[name]} />
        ))}
      </FormSection>

      <FormSection title="FAQs (optional)">
        {faqs.rows.length === 0 && <p className="text-sm text-[var(--adm-muted)]">No FAQs yet.</p>}
        {faqs.rows.map((row, i) => (
          <div key={row.key} className="space-y-4 rounded-lg border border-[var(--adm-border)] bg-[var(--adm-bg)] p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">FAQ {i + 1}</h3>
              <button
                type="button"
                onClick={() => {
                  faqs.remove(row.key);
                  clearErrors(); // errors are keyed by row position
                }}
                className="text-sm font-medium text-[var(--adm-danger)] hover:underline"
                aria-label={`Delete FAQ ${i + 1}`}
              >
                Delete
              </button>
            </div>
            <FormField label="Question" name={`faq_q_${row.key}`} value={row.faq_question} onChange={(e) => faqs.update(row.key, { faq_question: e.target.value })} maxLength={500} required markRequired error={fieldErrors[`faqs.${i}.faq_question`]} />
            <TextAreaField label="Answer" name={`faq_a_${row.key}`} rows={3} value={row.faq_answer} onChange={(e) => faqs.update(row.key, { faq_answer: e.target.value })} maxLength={5000} required error={fieldErrors[`faqs.${i}.faq_answer`]} />
          </div>
        ))}
        <button type="button" onClick={faqs.add} disabled={faqs.rows.length >= MAX_FAQS} className="adm-btn adm-btn-ghost adm-btn-inline">
          + Add more
        </button>
        {fieldErrors.faqs && <p className="text-xs text-[var(--adm-danger)]">{fieldErrors.faqs}</p>}
      </FormSection>

      <FormActions pending={pending} cancelHref="/admin/products" submitLabel={initial ? "Save changes" : "Create product"} />
    </form>
  );
}
