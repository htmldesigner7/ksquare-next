// The session lives in the backend API (admin_sessions table). The browser only holds an opaque, HTTP-only token cookie.
export const SESSION_COOKIE = "admin_session";

export const sessionCookieOptions = (maxAge: number) =>
  ({
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge,
  }) as const;
