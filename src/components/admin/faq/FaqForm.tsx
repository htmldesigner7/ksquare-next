"use client";

import Link from "next/link";
import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import SelectField from "@/components/admin/SelectField";
import TextAreaField from "@/components/admin/TextAreaField";
import { useAdminForm, useRepeater } from "@/lib/admin/client";
import type { Faq, FaqCategoryOption } from "@/lib/admin/types";

const MAX_BATCH = 20; // matches the API limit

const categoryOptions = (options: FaqCategoryOption[]) => [
  { value: "", label: "Select a category" },
  ...options.map((o) => ({ value: o.id, label: o.name })),
];

/** Add several FAQs under one category (Add more / Delete rows). */
export function FaqCreateForm({ categories, defaultCategoryId }: { categories: FaqCategoryOption[]; defaultCategoryId?: number }) {
  const { pending, error, fieldErrors, onSubmit, clearErrors } = useAdminForm({
    endpoint: "/faqs",
    method: "POST",
    successHref: "/admin/faqs?success=created",
  });
  const items = useRepeater([{ question: "", answer: "" }], () => ({ question: "", answer: "" }));

  if (categories.length === 0) {
    return (
      <div className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6 text-sm">
        <p>There are no active FAQ categories yet. FAQs can only be added to an active category.</p>
        <Link href="/admin/faq-categories/new" className="font-medium text-[var(--adm-primary)] hover:underline">
          Create a FAQ category →
        </Link>
      </div>
    );
  }

  return (
    <form
      noValidate // the server validates and returns a message per field
      onSubmit={(e) =>
        onSubmit(e, (fd) => ({
          category_id: fd.get("category_id"),
          items: items.rows.map(({ question, answer }) => ({ question, answer })),
        }))
      }
      className="space-y-6"
    >
      <FormError message={error} />

      <FormSection title="Category">
        <SelectField
          label="Category"
          name="category_id"
          required
          defaultValue={defaultCategoryId && categories.some((c) => c.id === defaultCategoryId) ? defaultCategoryId : ""}
          options={categoryOptions(categories)}
          error={fieldErrors.category_id}
        />
      </FormSection>

      <FormSection title="Questions & answers">
        {items.rows.map((row, i) => (
          <div key={row.key} className="space-y-4 rounded-lg border border-[var(--adm-border)] bg-[var(--adm-bg)] p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">FAQ {i + 1}</h3>
              {items.rows.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    items.remove(row.key);
                    clearErrors();
                  }}
                  className="text-sm font-medium text-[var(--adm-danger)] hover:underline"
                  aria-label={`Delete FAQ ${i + 1}`}
                >
                  Delete
                </button>
              )}
            </div>
            <FormField
              label="Question"
              name={`faq_question_${row.key}`}
              value={row.question}
              onChange={(e) => items.update(row.key, { question: e.target.value })}
              maxLength={500}
              required
              markRequired
              error={fieldErrors[`items.${i}.question`]}
            />
            <TextAreaField
              label="Answer"
              name={`faq_answer_${row.key}`}
              rows={4}
              value={row.answer}
              onChange={(e) => items.update(row.key, { answer: e.target.value })}
              maxLength={5000}
              required
              error={fieldErrors[`items.${i}.answer`]}
            />
          </div>
        ))}
        <button type="button" onClick={items.add} disabled={items.rows.length >= MAX_BATCH} className="adm-btn adm-btn-ghost adm-btn-inline">
          + Add more
        </button>
        {fieldErrors.items && <p className="text-xs text-[var(--adm-danger)]">{fieldErrors.items}</p>}
      </FormSection>

      <FormActions pending={pending} cancelHref="/admin/faqs" submitLabel={items.rows.length > 1 ? `Create ${items.rows.length} FAQs` : "Create FAQ"} />
    </form>
  );
}

/** Edit one FAQ (question, answer, category). */
export function FaqEditForm({ faq, categories }: { faq: Faq; categories: FaqCategoryOption[] }) {
  const { pending, error, fieldErrors, onSubmit } = useAdminForm({
    endpoint: `/faqs/${faq.id}`,
    method: "PUT",
    successHref: "/admin/faqs?success=updated",
  });
  // Its own category stays selectable even if it has since been set to inactive.
  const options = categories.some((c) => c.id === faq.category_id)
    ? categories
    : [{ id: faq.category_id, name: `${faq.category_name} (inactive)` }, ...categories];

  return (
    <form
      noValidate // the server validates and returns a message per field
      onSubmit={(e) => onSubmit(e, (fd) => ({ category_id: fd.get("category_id"), question: fd.get("question"), answer: fd.get("answer") }))}
      className="space-y-6"
    >
      <FormError message={error} />
      <FormSection title="FAQ">
        <SelectField
          label="Category"
          name="category_id"
          required
          defaultValue={faq.category_id}
          options={options.map((o) => ({ value: o.id, label: o.name }))}
          error={fieldErrors.category_id}
        />
        <FormField label="Question" name="question" defaultValue={faq.question} maxLength={500} required markRequired error={fieldErrors.question} />
        <TextAreaField label="Answer" name="answer" rows={6} defaultValue={faq.answer} maxLength={5000} required error={fieldErrors.answer} />
      </FormSection>
      <FormActions pending={pending} cancelHref="/admin/faqs" submitLabel="Save changes" />
    </form>
  );
}
