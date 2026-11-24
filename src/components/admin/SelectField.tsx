import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
  error?: string;
};

export default function SelectField({ label, name, options, error, ...rest }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-[var(--adm-text)]">
        {label}
        {rest.required && <span className="text-[var(--adm-danger)]"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        className="adm-input"
        aria-invalid={error ? true : undefined}
        suppressHydrationWarning
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[var(--adm-danger)]">{error}</p>}
    </div>
  );
}
