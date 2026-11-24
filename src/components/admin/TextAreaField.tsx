import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string; error?: string; hint?: string };

export default function TextAreaField({ label, name, error, hint, rows = 4, ...rest }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-[var(--adm-text)]">
        {label}
        {rest.required && <span className="text-[var(--adm-danger)]"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="adm-input"
        aria-invalid={error ? true : undefined}
        suppressHydrationWarning
        {...rest}
      />
      {hint && !error && <p className="text-xs text-[var(--adm-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--adm-danger)]">{error}</p>}
    </div>
  );
}
