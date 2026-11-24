import type { NextRequest } from "next/server";
import { RESOURCES } from "@/lib/admin/resources";
import { SESSION_COOKIE } from "@/lib/admin/session";

/**
 * Browser -> Next.js -> Express API bridge for the admin forms (uploads, create/update/delete).
 * The browser never sees the API token: it lives in an HTTP-only cookie, and this handler attaches it server-side.
 * Only the content modules below are reachable; auth endpoints are handled by server actions instead.
 */
const API_URL = (process.env.ADMIN_API_URL ?? "http://localhost:4000/api/v1").replace(/\/$/, "");
const ALLOWED_MODULES = new Set(["testimonials", "blogs", "categories", "authors", "settings", "faq-categories", "faqs", "products", "ksquare-presences", "profile", ...Object.keys(RESOURCES)]);

const fail = (status: number, message: string) => Response.json({ success: false, message }, { status });

async function handle(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return fail(401, "Your session has expired. Please sign in again.");

  const { path } = await ctx.params;
  if (!ALLOWED_MODULES.has(path[0])) return fail(404, "Not found");

  // CSRF defence in depth (the cookie is SameSite=Lax already): state-changing calls must come from this origin.
  if (req.method !== "GET") {
    const origin = req.headers.get("origin");
    if (!origin || new URL(origin).host !== req.headers.get("host")) return fail(403, "Cross-origin request blocked");
  }

  const url = `${API_URL}/admin/${path.map(encodeURIComponent).join("/")}${req.nextUrl.search}`;
  const headers = new Headers({ Accept: "application/json", Authorization: `Bearer ${token}` });
  for (const h of ["content-type", "content-length"]) {
    const v = req.headers.get(h);
    if (v) headers.set(h, v);
  }
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
  if (forwardedFor) headers.set("X-Forwarded-For", forwardedFor);

  try {
    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const res = await fetch(url, {
      method: req.method,
      headers,
      body: hasBody ? req.body : undefined, // streamed through, uploads are never buffered here
      duplex: "half",
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    } as RequestInit);
    return new Response(res.body, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    return fail(503, "The service is temporarily unavailable. Please try again.");
  }
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
