"use client";

type Row = { key: number; value: string };

/** A list of single-value inputs with "Add more" and per-row "Delete" (e.g. several phone numbers). */
export default function EntryList({
  title,
  rows,
  onAdd,
  onRemove,
  onChange,
  type = "text",
  multiline,
  placeholder,
  max,
  errorPrefix,
  errors,
}: {
  title: string;
  rows: Row[];
  onAdd: () => void;
  onRemove: (key: number) => void;
  onChange: (key: number, value: string) => void;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  placeholder?: string;
  max: number;
  /** Field-error prefix: errors are looked up as `${errorPrefix}.${index}.value`. */
  errorPrefix: string;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      {rows.length === 0 && <p className="text-sm text-[var(--adm-muted)]">None added yet.</p>}

      {rows.map((row, i) => {
        const error = errors[`${errorPrefix}.${i}.value`];
        const id = `${errorPrefix}_${row.key}`;
        const common = {
          id,
          value: row.value,
          required: true,
          placeholder,
          className: "adm-input",
          "aria-label": `${title} ${i + 1}`,
          "aria-invalid": error ? true : undefined,
          suppressHydrationWarning: true,
        } as const;
        return (
          <div key={row.key} className="space-y-1">
            <div className="flex items-start gap-3">
              {multiline ? (
                <textarea {...common} rows={2} maxLength={500} onChange={(e) => onChange(row.key, e.target.value)} />
              ) : (
                <input {...common} type={type} maxLength={type === "email" ? 255 : 30} onChange={(e) => onChange(row.key, e.target.value)} />
              )}
              <button
                type="button"
                onClick={() => onRemove(row.key)}
                className="mt-2.5 shrink-0 text-sm font-medium text-[var(--adm-danger)] hover:underline"
                aria-label={`Delete ${title} ${i + 1}`}
              >
                Delete
              </button>
            </div>
            {error && <p className="text-xs text-[var(--adm-danger)]">{error}</p>}
          </div>
        );
      })}

      <button type="button" onClick={onAdd} disabled={rows.length >= max} className="adm-btn adm-btn-ghost adm-btn-inline">
        + Add more
      </button>
    </div>
  );
}
