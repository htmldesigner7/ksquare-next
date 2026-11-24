import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiFetch, type ApiResult } from "./api";
import { SESSION_COOKIE } from "./session";
import type { AdminUser } from "./types";

export const getToken = async () => (await cookies()).get(SESSION_COOKIE)?.value;

/** The signed-in admin according to the backend, or null (no cookie, expired, revoked, deactivated). */
export const getSession = cache(async (): Promise<AdminUser | null> => {
  const token = await getToken();
  if (!token) return null;
  const res = await apiFetch<{ admin: AdminUser }>("/admin/auth/me", { token });
  return res.ok ? (res.data?.admin ?? null) : null;
});

export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getSession();
  if (!admin) redirect("/admin/login");
  return admin;
}

/** Authenticated call to a protected admin API endpoint; a 401 sends the user to the login page. */
export async function adminFetch<T = unknown>(path: string, opts: Parameters<typeof apiFetch>[1] = {}): Promise<ApiResult<T>> {
  const token = await getToken();
  if (!token) redirect("/admin/login");
  const res = await apiFetch<T>(path, { ...opts, token });
  if (res.status === 401) redirect("/admin/login");
  return res;
}
