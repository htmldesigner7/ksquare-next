import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/admin/AuthCard";
import ResetPasswordForm from "@/components/admin/ResetPasswordForm";
import Alert from "@/components/admin/Alert";
import { apiFetch } from "@/lib/admin/api";

export const metadata: Metadata = { title: "Reset password" };

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token = "" } = await searchParams;
  const check = token ? await apiFetch<{ valid: boolean }>("/admin/auth/reset-password", { query: { token } }) : null;
  const valid = check?.data?.valid === true;
  return (
    <AuthCard title="Reset password" subtitle="Choose a new password for your admin account.">
      {valid ? (
        <ResetPasswordForm token={token} />
      ) : (
        <div className="space-y-4">
          <Alert type="error">This reset link is invalid or has expired.</Alert>
          <Link href="/admin/forgot-password" className="adm-btn adm-btn-primary">
            Request a new link
          </Link>
        </div>
      )}
    </AuthCard>
  );
}
