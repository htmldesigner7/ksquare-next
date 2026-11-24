"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export type RequestResult<T> = {
  ok: boolean;
  status: number;
  message: string;
  data: T | null;
  /** Field-level validation errors keyed by field name (e.g. "url", "configuration.0.title"). */
  errors: Record<string, string>;
};

/**
 * Browser-side call to the admin API (through the /admin/api bridge, which attaches the session token).
 * A 401 sends the user back to the login page.
 */
export async function adminRequest<T = unknown>(
  path: string,
  { method = "GET", body }: { method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; body?: FormData | object } = {},
): Promise<RequestResult<T>> {
  const isForm = body instanceof FormData;
  try {
    const res = await fetch(`/admin/api${path}`, {
      method,
      headers: body && !isForm ? { "Content-Type": "application/json" } : undefined,
      body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
    });
    if (res.status === 401) {
      // Deliberate full reload: drops all client state when the session is gone.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/admin/login");
    }
    const json = await res.json().catch(() => null);
    const errors: Record<string, string> = {};
    for (const e of (json?.errors ?? []) as { field: string; message: string }[]) errors[e.field] ??= e.message;
    return {
      ok: res.ok,
      status: res.status,
      message: json?.message ?? (res.ok ? "Done" : "Something went wrong. Please try again."),
      data: json?.data ?? null,
      errors,
    };
  } catch {
    return { ok: false, status: 0, message: "Network error. Check your connection and try again.", data: null, errors: {} };
  }
}

/** Shared create/edit form behaviour: submit as multipart, show loading/errors, redirect on success. */
export function useAdminForm({ endpoint, method, successHref }: { endpoint: string; method: "POST" | "PUT"; successHref: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  /** `build` may mutate the FormData (multipart upload forms) or return a plain object, which is then sent as JSON. */
  async function onSubmit(e: FormEvent<HTMLFormElement>, build?: (fd: FormData) => FormData | object | void) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setError(null);
    setFieldErrors({});
    const fd = new FormData(e.currentTarget);
    const body = build?.(fd) ?? fd;
    const res = await adminRequest(endpoint, { method, body });
    if (res.ok) {
      router.push(successHref);
      router.refresh();
      return;
    }
    // Field errors are shown under their inputs; the banner only summarises them instead of repeating the first one.
    setError(Object.keys(res.errors).length ? "Please correct the highlighted fields." : res.message);
    setFieldErrors(res.errors);
    setPending(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /** Errors are keyed by row position, so forms with removable rows clear them when a row is deleted. */
  const clearErrors = () => {
    setError(null);
    setFieldErrors({});
  };

  return { pending, error, fieldErrors, onSubmit, clearErrors };
}

/**
 * State for forms with "Add more" / "Delete" rows. Each row gets a stable `key` so inputs keep their state
 * when other rows are removed.
 */
export function useRepeater<T extends object>(initial: T[], blank: () => T) {
  const nextKey = useRef(initial.length);
  const [rows, setRows] = useState<(T & { key: number })[]>(() => initial.map((v, i) => ({ ...v, key: i })));

  const add = () => {
    const key = nextKey.current++; // outside the updater: StrictMode runs updaters twice
    setRows((rs) => [...rs, { ...blank(), key }]);
  };
  const remove = (key: number) => setRows((rs) => rs.filter((r) => r.key !== key));
  const update = (key: number, patch: Partial<T>) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));

  return { rows, add, remove, update };
}
