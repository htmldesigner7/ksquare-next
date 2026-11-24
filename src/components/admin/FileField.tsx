"use client";

import { useState, type ChangeEvent } from "react";

const MAX_BYTES = 15 * 1024 * 1024; // must match the API limit

type Props = {
  name: string;
  label: string;
  /** Existing file (edit forms). Kept unless a new file is chosen. */
  currentUrl?: string | null;
  required?: boolean;
  /** Server-side validation message. */
  error?: string;
  hint?: string;
};

/** PDF file input with client-side type/size validation (the API re-validates everything). */
export default function FileField({ name, label, currentUrl, required, error, hint }: Props) {
  const [localError, setLocalError] = useState<string | null>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setLocalError(null);
    if (!file) return;
    if (file.type !== "application/pdf") {
      setLocalError("Use a PDF file.");
      e.target.value = "";
    } else if (file.size > MAX_BYTES) {
      setLocalError("The file must be 15 MB or smaller.");
      e.target.value = "";
    }
  }

  const message = localError ?? error;

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-[var(--adm-text)]">
        {label}
        {required && <span className="text-[var(--adm-danger)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        accept="application/pdf"
        onChange={onChange}
        aria-invalid={message ? true : undefined}
        className="block w-full text-sm file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[var(--adm-primary-pale)] file:px-4 file:py-2.5 file:font-semibold file:text-[var(--adm-primary)]"
        suppressHydrationWarning
      />
      {currentUrl && (
        <p className="text-xs">
          <a href={currentUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--adm-primary)] hover:underline">
            View current PDF
          </a>
        </p>
      )}
      {hint && !message && <p className="text-xs text-[var(--adm-muted)]">{hint}</p>}
      {message && <p className="text-xs text-[var(--adm-danger)]">{message}</p>}
    </div>
  );
}
