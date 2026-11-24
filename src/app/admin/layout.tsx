import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: { default: "Admin | Ksquare Energy", template: "%s | Ksquare Admin" },
  robots: { index: false, follow: false },
};

// Admin shell: carries the admin theme scope. Auth screens and the dashboard each add their own layout below.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  // suppressHydrationWarning: browser extensions (dark-mode, translate, autofill) tag wrapper elements before React hydrates.
  return (
    <div className="admin-root" suppressHydrationWarning>
      {children}
    </div>
  );
}
