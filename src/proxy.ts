import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin/session";

const PUBLIC_ADMIN_PATHS = ["/admin/login", "/admin/forgot-password", "/admin/reset-password"];

// Optimistic gate only: no session cookie -> login. The cookie is an opaque token, so the real check
// (is it valid, unexpired, not revoked?) happens in the panel layout via the backend API (requireAdmin).
// The public site is untouched (see matcher).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublic = PUBLIC_ADMIN_PATHS.some((p) => pathname === p || pathname === `${p}/`);

  if (!isPublic && !request.cookies.has(SESSION_COOKIE)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

// /admin/api/* is excluded: those route handlers stream uploads and answer with JSON 401s instead of redirects.
export const config = { matcher: ["/admin", "/admin/((?!api/).*)"] };
