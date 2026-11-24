"use client";

import Link from "next/link";
import { useActionState } from "react";
import { forgotPassword } from "@/app/admin/actions";
import Alert from "./Alert";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

export default function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(forgotPassword, undefined);
  return (
    <form action={action} className="space-y-4" noValidate>
      {state?.error && <Alert type="error">{state.error}</Alert>}
      {state?.success && <Alert type="success">{state.success}</Alert>}
      {state?.devLink && (
        <p className="break-all rounded-lg border border-dashed border-[var(--adm-border)] p-3 text-xs text-[var(--adm-muted)]">
          Dev only (no email provider configured):{" "}
          <Link href={state.devLink} className="text-[var(--adm-primary)] underline">
            open reset link
          </Link>
        </p>
      )}
      <FormField label="Email" name="email" type="email" defaultValue={state?.email} autoComplete="username" placeholder="admin@example.com" required />
      <SubmitButton pending={pending}>Send reset link</SubmitButton>
      <p className="text-center text-sm">
        <Link href="/admin/login" className="font-medium text-[var(--adm-primary)] hover:underline">
          ← Back to sign in
        </Link>
      </p>
    </form>
  );
}
