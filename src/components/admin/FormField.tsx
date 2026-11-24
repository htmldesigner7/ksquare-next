import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; name: string; error?: string; hint?: string; markRequired?: boolean };

export default function FormField({ label, name, error, hint, markRequired, ...rest }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-[var(--adm-text)]">
        {label}
        {markRequired && <span className="text-[var(--adm-danger)]"> *</span>}
      </label>
      {/* Password managers / autofill extensions inject attributes into inputs before hydration. */}
      <input
        id={name}
        name={name}
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
