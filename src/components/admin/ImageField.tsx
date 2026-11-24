"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import AdminImage from "./AdminImage";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 2 * 1024 * 1024; // must match the API limit

type Props = {
  name: string;
  label: string;
  /** Existing image (edit forms). Kept unless a new file is chosen (or removal is ticked). */
  currentUrl?: string | null;
  required?: boolean;
  /** Optional images only: shows a "remove" checkbox (submitted as remove_<name>). */
  removable?: boolean;
  /** Server-side validation message. */
  error?: string;
  hint?: string;
};

/** File input with instant preview and client-side type/size validation (the API re-validates everything). */
export default function ImageField({ name, label, currentUrl, required, removable, error, hint }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const [remove, setRemove] = useState(false);

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setLocalError(null);
    setPreview(null);
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setLocalError("Use a JPG, PNG or WebP image.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_BYTES) {
      setLocalError("Image must be 2 MB or smaller.");
      e.target.value = "";
      return;
    }
    setRemove(false);
    setPreview(URL.createObjectURL(file));
  }

  const shown = preview ?? (remove ? null : (currentUrl ?? null));
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
        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
        required={required && !currentUrl}
        onChange={onChange}
        aria-invalid={message ? true : undefined}
        suppressHydrationWarning
        className="block w-full text-sm text-[var(--adm-muted)] file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[var(--adm-primary-pale)] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-[var(--adm-primary)]"
      />
      {shown ? (
        <AdminImage
          src={shown}
          alt={`${label} preview`}
          className="mt-2 max-h-36 max-w-full rounded-lg border border-[var(--adm-border)] bg-white object-contain"
        />
      ) : null}
      {removable && currentUrl && !preview && (
        <label className="flex items-center gap-2 text-sm text-[var(--adm-muted)]">
          <input type="checkbox" name={`remove_${name}`} value="1" checked={remove} onChange={(e) => setRemove(e.target.checked)} />
          Remove current image
        </label>
      )}
      {hint && !message && <p className="text-xs text-[var(--adm-muted)]">{hint}</p>}
      {message && <p className="text-xs text-[var(--adm-danger)]">{message}</p>}
    </div>
  );
}
