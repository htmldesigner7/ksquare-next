import "server-only";
import { headers } from "next/headers";

const BASE_URL = (process.env.ADMIN_API_URL ?? "http://localhost:4000/api/v1").replace(/\/$/, "");

export type ApiResult<T> = {
  ok: boolean;
  status: number;
  message: string;
  data: T | null;
  meta?: unknown;
};

type Options = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string;
  query?: Record<string, string | number | undefined>;
};

/**
 * Server-side client for the Node.js backend. The Next.js admin never touches the database;
 * every read/write goes through this function. Never throws: network failures become a 503 result.
 */
export async function apiFetch<T = unknown>(path: string, { method = "GET", body, token, query }: Options = {}): Promise<ApiResult<T>> {
  const url = new URL(BASE_URL + path);
  for (const [k, v] of Object.entries(query ?? {})) if (v !== undefined && v !== "") url.searchParams.set(k, String(v));

  // Forward the visitor's IP so the API can rate-limit per client instead of per Next.js server.
  const incoming = await headers();
  const clientIp = incoming.get("x-forwarded-for")?.split(",")[0].trim() || incoming.get("x-real-ip") || undefined;

  try {
    const res = await fetch(url, {
      method,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Accept: "application/json",
        ...(body !== undefined && { "Content-Type": "application/json" }),
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(clientIp && { "X-Forwarded-For": clientIp }),
        "User-Agent": incoming.get("user-agent") ?? "ksquare-next",
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const json = await res.json().catch(() => null);
    return {
      ok: res.ok,
      status: res.status,
      message: json?.message ?? (res.ok ? "OK" : "Request failed"),
      data: json?.data ?? null,
      meta: json?.meta,
    };
  } catch {
    return { ok: false, status: 503, message: "The service is temporarily unavailable. Please try again.", data: null };
  }
}
