"use client";

import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import SelectField from "@/components/admin/SelectField";
import { useAdminForm, useRepeater } from "@/lib/admin/client";
import type { Presence } from "@/lib/admin/types";

const MAX_CITIES = 50; // matches the API limit

export default function PresenceForm({ initial }: { initial?: Presence }) {
  const { pending, error, fieldErrors, onSubmit, clearErrors } = useAdminForm({
    endpoint: initial ? `/ksquare-presences/${initial.id}` : "/ksquare-presences",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/ksquare-presences?success=${initial ? "updated" : "created"}`,
  });
  const cities = useRepeater(
    (initial?.cities ?? []).map((c) => ({ city_name: c.city_name, city_link: c.city_link ?? "" })),
    () => ({ city_name: "", city_link: "" }),
  );

  return (
    <form
      noValidate // the server validates and returns a message per field
      encType="multipart/form-data"
      className="space-y-6"
      onSubmit={(e) =>
        onSubmit(e, (fd) => {
          for (const key of [...fd.keys()]) if (key.startsWith("city_n_") || key.startsWith("city_l_")) fd.delete(key); // sent as JSON below
          fd.set("cities", JSON.stringify(cities.rows.map(({ city_name, city_link }) => ({ city_name, city_link }))));
        })
      }
    >
      <FormError message={error} />

      <FormSection title="State">
        <FormField label="State name" name="state_name" defaultValue={initial?.state_name} maxLength={150} required markRequired error={fieldErrors.state_name} />
        <FormField label="State link (optional)" name="state_link" type="url" defaultValue={initial?.state_link ?? ""} maxLength={255} placeholder="https://" error={fieldErrors.state_link} />
        <FormField label="Short line (optional)" name="short_line" defaultValue={initial?.short_line ?? ""} maxLength={255} error={fieldErrors.short_line} />
        <ImageField name="map_img" label="Map image" required currentUrl={initial?.map_img} error={fieldErrors.map_img} hint="JPG, PNG or WebP, up to 2 MB." />
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
      </FormSection>

      <FormSection title="Cities (optional)">
        {cities.rows.length === 0 && <p className="text-sm text-[var(--adm-muted)]">No cities yet.</p>}
        {cities.rows.map((row, i) => (
          <div key={row.key} className="space-y-4 rounded-lg border border-[var(--adm-border)] bg-[var(--adm-bg)] p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">City {i + 1}</h3>
              <button
                type="button"
                onClick={() => {
                  cities.remove(row.key);
                  clearErrors(); // errors are keyed by row position
                }}
                className="text-sm font-medium text-[var(--adm-danger)] hover:underline"
                aria-label={`Delete city ${i + 1}`}
              >
                Delete
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="City name" name={`city_n_${row.key}`} value={row.city_name} onChange={(e) => cities.update(row.key, { city_name: e.target.value })} maxLength={150} required markRequired error={fieldErrors[`cities.${i}.city_name`]} />
              <FormField label="City link (optional)" name={`city_l_${row.key}`} type="url" value={row.city_link} onChange={(e) => cities.update(row.key, { city_link: e.target.value })} maxLength={255} placeholder="https://" error={fieldErrors[`cities.${i}.city_link`]} />
            </div>
          </div>
        ))}
        <button type="button" onClick={cities.add} disabled={cities.rows.length >= MAX_CITIES} className="adm-btn adm-btn-ghost adm-btn-inline">
          + Add more
        </button>
        {fieldErrors.cities && <p className="text-xs text-[var(--adm-danger)]">{fieldErrors.cities}</p>}
      </FormSection>

      <FormActions pending={pending} cancelHref="/admin/ksquare-presences" submitLabel={initial ? "Save changes" : "Create presence"} />
    </form>
  );
}
