"use client";

import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import RichTextField from "@/components/admin/RichTextField";
import SelectField from "@/components/admin/SelectField";
import TextAreaField from "@/components/admin/TextAreaField";
import { useAdminForm } from "@/lib/admin/client";
import { fkLabelKey, type Field, type Resource, type ResourceRow, type SelectOption } from "@/lib/admin/resources";

const STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

/** Add / edit form for any module in lib/admin/resources.ts. `options` holds the dropdown rows of fk fields. */
export default function ResourceForm({
  resource,
  initial,
  options = {},
}: {
  resource: Resource;
  initial?: ResourceRow;
  options?: Record<string, SelectOption[]>;
}) {
  const base = `/admin/${resource.slug}`;
  const hasImages = resource.fields.some((f) => f.type === "image");
  const { pending, error, fieldErrors, onSubmit } = useAdminForm({
    endpoint: initial ? `/${resource.slug}/${initial.id}` : `/${resource.slug}`,
    method: initial ? "PUT" : "POST",
    successHref: `${base}?success=${initial ? "updated" : "created"}`,
  });

  // Fields are grouped into cards by `section`, in the order the sections first appear.
  const sections = new Map<string, Field[]>();
  for (const f of resource.fields) sections.set(f.section ?? "Details", [...(sections.get(f.section ?? "Details") ?? []), f]);

  function renderField(f: Field) {
    const common = { label: f.label, name: f.name, error: fieldErrors[f.name], hint: f.hint };
    const value = initial?.[f.name];
    switch (f.type) {
      case "image":
        return <ImageField key={f.name} {...common} required={f.required} currentUrl={value ? String(value) : undefined} />;
      case "textarea":
        if (f.rich) return <RichTextField key={f.name} {...common} required={f.required} defaultValue={value ? String(value) : ""} />;
        return <TextAreaField key={f.name} {...common} rows={4} defaultValue={value ?? ""} maxLength={f.max} required={f.required} />;
      case "bool":
        return (
          <SelectField
            key={f.name}
            {...common}
            defaultValue={String(value ?? 0)}
            options={[
              { value: "0", label: "No" },
              { value: "1", label: "Yes" },
            ]}
          />
        );
      case "fk": {
        const choices = [...(options[f.name] ?? [])];
        // Editing a row whose parent was deactivated later: keep it selectable so the row can still be saved.
        if (initial && value && !choices.some((o) => o.id === Number(value))) choices.push({ id: Number(value), label: `${initial[fkLabelKey(f)]} (inactive)` });
        return (
          <SelectField
            key={f.name}
            {...common}
            required={f.required}
            defaultValue={value ? String(value) : ""}
            options={[{ value: "", label: `Select ${f.label.toLowerCase()}` }, ...choices.map((o) => ({ value: o.id, label: o.label }))]}
          />
        );
      }
      default: {
        const type = { int: "number", date: "date", url: "url", text: "text" }[f.type];
        return (
          <FormField
            key={f.name}
            {...common}
            type={type}
            defaultValue={value ?? ""}
            maxLength={f.type === "text" || f.type === "url" ? f.max : undefined}
            min={f.min}
            max={f.type === "int" ? f.max : undefined}
            markRequired={f.required}
          />
        );
      }
    }
  }

  // Short fields sit two per row; long text, links and descriptions take the full width.
  const isWide = (f: Field) => f.type === "textarea" || f.type === "url" || (f.type === "text" && (f.max ?? 0) > 150);
  const hasFieldErrors = Object.keys(fieldErrors).length > 0;
  const entries = [...sections.entries()];
  return (
    <form
      noValidate // the server validates and returns a message per field
      // Forms with images are sent as multipart; the others as JSON.
      onSubmit={(e) => onSubmit(e, hasImages ? undefined : (fd) => Object.fromEntries(fd))}
      className="space-y-6"
    >
      {/* Field errors are shown under their inputs; the banner only points at them (no duplicate text). */}
      <FormError message={hasFieldErrors ? "Please correct the highlighted fields." : error} />
      {entries.map(([title, fields], i) => (
        <FormSection key={title} title={title}>
          <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name} className={isWide(f) ? "md:col-span-2" : undefined}>
                {renderField(f)}
              </div>
            ))}
            {i === 0 && (
              <SelectField label="Status" name="status" required defaultValue={initial?.status ?? "active"} options={STATUS_OPTIONS} error={fieldErrors.status} />
            )}
          </div>
        </FormSection>
      ))}
      <FormActions pending={pending} cancelHref={base} submitLabel={initial ? "Save changes" : `Add ${resource.label}`} />
    </form>
  );
}
