"use client";

import FormField from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import TextAreaField from "@/components/admin/TextAreaField";
import { useRepeater } from "@/lib/admin/client";
import type { Repeater } from "@/lib/admin/resources";

type Row = { id?: number; values: Record<string, string>; images: Record<string, string> };

/**
 * "Add more / Delete" rows of a resource (see `repeaters` in lib/admin/resources.ts).
 * The rows' text values travel as one JSON field named after the repeater; each picture is a file named
 * <repeater>_<field>_<row number>, which is what the API expects.
 */
export default function RepeaterSection({
  repeater,
  initial,
  errors,
  onRemove,
}: {
  repeater: Repeater;
  initial: Record<string, string | number | null>[];
  errors: Record<string, string>;
  /** Called after a row is deleted: errors are keyed by row position, so the form clears them. */
  onRemove: () => void;
}) {
  const rowName = repeater.rowName ?? repeater.label;
  const textFields = repeater.fields.filter((f) => f.type !== "image");
  const imageFields = repeater.fields.filter((f) => f.type === "image");
  const toRow = (r: Record<string, string | number | null>): Row => ({
    id: r.id === undefined ? undefined : Number(r.id),
    values: Object.fromEntries(textFields.map((f) => [f.name, String(r[f.name] ?? "")])),
    images: Object.fromEntries(imageFields.map((f) => [f.name, String(r[f.name] ?? "")])),
  });
  const blank = (): Row => ({ values: Object.fromEntries(textFields.map((f) => [f.name, ""])), images: {} });
  const { rows, add, remove, update } = useRepeater<Row>(initial.map(toRow), blank);

  return (
    <FormSection title={repeater.label}>
      {/* The JSON of the rows (the API reads it by the repeater's name). */}
      <input type="hidden" name={repeater.name} value={JSON.stringify(rows.map(({ id, values }) => ({ id, ...values })))} />

      {rows.length === 0 && <p className="text-sm text-[var(--adm-muted)]">Nothing added yet.</p>}

      {rows.map((row, i) => (
        <div key={row.key} className="space-y-4 rounded-lg border border-[var(--adm-border)] bg-[var(--adm-bg)] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">
              {rowName} {i + 1}
            </h3>
            <button
              type="button"
              onClick={() => {
                remove(row.key);
                onRemove();
              }}
              className="text-sm font-medium text-[var(--adm-danger)] hover:underline"
              aria-label={`Delete ${rowName.toLowerCase()} ${i + 1}`}
            >
              Delete
            </button>
          </div>

          {imageFields.map((f) => (
            <ImageField key={f.name} name={`${repeater.name}_${f.name}_${i}`} label={f.label} required={f.required} currentUrl={row.images[f.name]} error={errors[`${repeater.name}.${i}.${f.name}`]} hint={f.hint} />
          ))}

          <div className="grid gap-4 md:grid-cols-2">
            {textFields.map((f) => {
              const common = {
                label: f.label,
                name: `${repeater.name}_${f.name}_${row.key}`,
                value: row.values[f.name],
                onChange: (e: { target: { value: string } }) => update(row.key, { values: { ...row.values, [f.name]: e.target.value } }),
                error: errors[`${repeater.name}.${i}.${f.name}`],
                hint: f.hint,
              };
              return f.type === "textarea" ? (
                <div key={f.name} className="md:col-span-2">
                  <TextAreaField {...common} rows={3} maxLength={f.max} required={f.required} />
                </div>
              ) : (
                <FormField key={f.name} {...common} maxLength={f.max} required={f.required} markRequired={f.required} />
              );
            })}
          </div>
        </div>
      ))}

      <button type="button" onClick={add} disabled={rows.length >= repeater.max} className="adm-btn adm-btn-ghost adm-btn-inline">
        + Add more
      </button>
      {rows.length >= repeater.max && <p className="text-xs text-[var(--adm-muted)]">Maximum of {repeater.max}.</p>}
      {errors[repeater.name] && <p className="text-xs text-[var(--adm-danger)]">{errors[repeater.name]}</p>}
    </FormSection>
  );
}
