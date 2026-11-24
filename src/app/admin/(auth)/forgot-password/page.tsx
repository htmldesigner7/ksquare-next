import type { Metadata } from "next";
import AuthCard from "@/components/admin/AuthCard";
import ForgotPasswordForm from "@/components/admin/ForgotPasswordForm";

export const metadata: Metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Forgot password?" subtitle="Enter your admin email and we'll generate a reset link.">
      <ForgotPasswordForm />
    </AuthCard>
  );
}
