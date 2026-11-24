"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiFetch } from "@/lib/admin/api";
import { getToken } from "@/lib/admin/dal";
import { SESSION_COOKIE, sessionCookieOptions } from "@/lib/admin/session";

// `email` is echoed back so the field keeps its value (React resets uncontrolled forms after an action).
export type FormState = { error?: string; success?: string; devLink?: string; email?: string } | undefined;

const str = (fd: FormData, key: string) => String(fd.get(key) ?? "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function login(_: FormState, formData: FormData): Promise<FormState> {
  const email = str(formData, "email").trim();
  const password = str(formData, "password");
  if (!EMAIL_RE.test(email) || !password) return { error: "Enter a valid email and password.", email };

  const res = await apiFetch<{ token: string; expiresIn: number }>("/admin/auth/login", {
    method: "POST",
    body: { email, password },
  });
  if (!res.ok || !res.data) return { error: res.message, email };

  (await cookies()).set(SESSION_COOKIE, res.data.token, sessionCookieOptions(res.data.expiresIn));
  redirect("/admin");
}

export async function logout() {
  const token = await getToken();
  if (token) await apiFetch("/admin/auth/logout", { method: "POST", token }); // revokes the session server-side
  (await cookies()).delete({ name: SESSION_COOKIE, path: "/admin" });
  redirect("/admin/login");
}

export async function forgotPassword(_: FormState, formData: FormData): Promise<FormState> {
  const email = str(formData, "email").trim();
  if (!EMAIL_RE.test(email)) return { error: "Enter a valid email address.", email };

  const res = await apiFetch<{ devResetLink?: string }>("/admin/auth/forgot-password", { method: "POST", body: { email } });
  if (!res.ok) return { error: res.message, email };
  return { email, success: res.message, devLink: res.data?.devResetLink };
}

export async function resetPasswordAction(_: FormState, formData: FormData): Promise<FormState> {
  const token = str(formData, "token");
  const password = str(formData, "password");
  if (password !== str(formData, "confirm")) return { error: "Passwords do not match." };

  const res = await apiFetch("/admin/auth/reset-password", { method: "POST", body: { token, password } });
  if (!res.ok) return { error: res.message };
  redirect("/admin/login?reset=1");
}
