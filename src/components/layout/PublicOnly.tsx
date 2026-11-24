"use client";

import { usePathname } from "next/navigation";

/** Renders its children on the public website only; the /admin section has its own chrome. */
export default function PublicOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return null;
  return <>{children}</>;
}
