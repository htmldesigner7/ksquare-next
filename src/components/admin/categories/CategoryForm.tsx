"use client";

import { useRef, useState } from "react";
import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import RichTextField from "@/components/admin/RichTextField";
import SeoFields, { useAutoSlug } from "@/components/admin/SeoFields";
import SelectField from "@/components/admin/SelectField";
import TextAreaField from "@/components/admin/TextAreaField";
import { useAdminForm } from "@/lib/admin/client";
import type { Category } from "@/lib/admin/types";

const MAX_ENTRIES = 10; // matches the API limit

type Row = { key: number; id?: number; title: string; description: string; iconUrl?: string };

export default function CategoryForm({ initial }: { initial?: Category }) {
  const auto = useAutoSlug(initial?.slug);
  const { pending, error, fieldErrors, onSubmit, clearErrors } = useAdminForm({
    endpoint: initial ? `/categories/${initial.id}` : "/categories",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/categories?success=${initial ? "updated" : "created"}`,
  });

  const nextKey = useRef(initial?.configuration.length ?? 0);
  const [rows, setRows] = useState<Row[]>(
    () => initial?.configuration.map((c, i) => ({ key: i, id: c.id, title: c.title, description: c.description, iconUrl: c.icon })) ?? [],
  );

  const update = (key: number, patch: Partial<Row>) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  const add = () => {
    const key = nextKey.current++; // outside the updater: StrictMode runs updaters twice
    setRows((rs) => [...rs, { key, title: "", description: "" }]);
  };
  const remove = (key: number) => {
    setRows((rs) => rs.filter((r) => r.key !== key));
    clearErrors(); // errors are keyed by row position and would otherwise land on the wrong row
  };

  return (
    <form
      noValidate // the server validates and returns a message per field
      onSubmit={(e) =>
        // Entries are sent as JSON; their icon files travel as config_icon_<index> (named by current order below).
        onSubmit(e, (fd) => fd.set("configuration", JSON.stringify(rows.map(({ id, title, description }) => ({ id, title, description })))))
      }
      className="space-y-6"
      encType="multipart/form-data"
    >
      <FormError message={error} />

      <FormSection title="Basic details">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField label="Name" name="name" defaultValue={initial?.name} maxLength={150} required markRequired error={fieldErrors.name} onChange={(e) => auto.onNameChange(e.target.value)} />
          <FormField label="Title" name="title" defaultValue={initial?.title} maxLength={255} required markRequired error={fieldErrors.title} />
        </div>
        <TextAreaField label="Short description" name="short_description" rows={3} defaultValue={initial?.short_description} maxLength={500} required error={fieldErrors.short_description} />
        <div className="grid gap-6 md:grid-cols-2">
          <SelectField
            label="Type"
            name="type"
            required
            defaultValue={initial?.type ?? "core"}
            options={[
              { value: "core", label: "Core" },
              { value: "brand", label: "Brand" },
            ]}
            error={fieldErrors.type}
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
        </div>
      </FormSection>

      <FormSection title="SEO">
        <SeoFields auto={auto} metaTitle={initial?.meta_title} metaDescription={initial?.meta_description} errors={fieldErrors} />
      </FormSection>

      <FormSection title="Images">
        <div className="grid gap-6 md:grid-cols-3">
          <ImageField name="list_image" label="List image" required currentUrl={initial?.list_image} error={fieldErrors.list_image} hint="JPG, PNG or WebP, up to 2 MB." />
          <ImageField name="detail_image_d" label="Detail image (desktop)" required currentUrl={initial?.detail_image_d} error={fieldErrors.detail_image_d} hint="JPG, PNG or WebP, up to 2 MB." />
          <ImageField name="detail_image_m" label="Detail image (mobile)" required currentUrl={initial?.detail_image_m} error={fieldErrors.detail_image_m} hint="JPG, PNG or WebP, up to 2 MB." />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ImageField name="why_choose_img" label="Why choose image (optional)" currentUrl={initial?.why_choose_img ?? undefined} error={fieldErrors.why_choose_img} hint="JPG, PNG or WebP, up to 2 MB." />
          <ImageField name="menu_img" label="Menu image (optional)" currentUrl={initial?.menu_img ?? undefined} error={fieldErrors.menu_img} hint="JPG, PNG or WebP, up to 2 MB." />
        </div>
      </FormSection>

      <FormSection title="Summaries (optional)">
        <TextAreaField label="Product summary" name="product_summary" rows={4} defaultValue={initial?.product_summary ?? ""} error={fieldErrors.product_summary} />
        <FormField label="Product short line" name="product_short_line" defaultValue={initial?.product_short_line ?? ""} maxLength={255} error={fieldErrors.product_short_line} />
        <FormField label="Configuration short line" name="configuration_short_line" defaultValue={initial?.configuration_short_line ?? ""} maxLength={255} error={fieldErrors.configuration_short_line} />
        <FormField label="Why choose - title" name="why_choose_title" defaultValue={initial?.why_choose_title ?? ""} maxLength={255} error={fieldErrors.why_choose_title} />
        <TextAreaField label="Why choose - summary" name="why_choose_summary" rows={3} defaultValue={initial?.why_choose_summary ?? ""} error={fieldErrors.why_choose_summary} />
        <RichTextField label="Why choose - description" name="why_choose_desc" defaultValue={initial?.why_choose_desc} error={fieldErrors.why_choose_desc} />
      </FormSection>

      <FormSection title="Configuration (optional)">
        {rows.length === 0 && <p className="text-sm text-[var(--adm-muted)]">No configuration entries yet.</p>}

        {rows.map((row, i) => (
          <div key={row.key} className="space-y-4 rounded-lg border border-[var(--adm-border)] bg-[var(--adm-bg)] p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Entry {i + 1}</h3>
              <button
                type="button"
                onClick={() => remove(row.key)}
                className="text-sm font-medium text-[var(--adm-danger)] hover:underline"
                aria-label={`Delete entry ${i + 1}`}
              >
                Delete
              </button>
            </div>
            <FormField
              label="Title"
              name={`cfg_title_${row.key}`}
              value={row.title}
              onChange={(e) => update(row.key, { title: e.target.value })}
              maxLength={255}
              required
              markRequired
              error={fieldErrors[`configuration.${i}.title`]}
            />
            <RichTextField
              label="Description"
              name={`cfg_desc_${row.key}`}
              defaultValue={row.description}
              onChange={(html) => update(row.key, { description: html })}
              required
              minHeight={110}
              error={fieldErrors[`configuration.${i}.description`]}
            />
            <ImageField
              name={`config_icon_${i}`}
              label="Icon"
              required
              currentUrl={row.iconUrl}
              error={fieldErrors[`configuration.${i}.icon`]}
              hint="JPG, PNG or WebP, up to 2 MB."
            />
          </div>
        ))}

        <button type="button" onClick={add} disabled={rows.length >= MAX_ENTRIES} className="adm-btn adm-btn-ghost adm-btn-inline">
          + Add more
        </button>
        {rows.length >= MAX_ENTRIES && <p className="text-xs text-[var(--adm-muted)]">Maximum of {MAX_ENTRIES} entries.</p>}
        {fieldErrors.configuration && <p className="text-xs text-[var(--adm-danger)]">{fieldErrors.configuration}</p>}
      </FormSection>

      <FormActions pending={pending} cancelHref="/admin/categories" submitLabel={initial ? "Save changes" : "Create category"} />
    </form>
  );
}
