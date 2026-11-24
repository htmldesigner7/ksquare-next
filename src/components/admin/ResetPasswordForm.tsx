"use client";

import { useActionState } from "react";
import { resetPasswordAction } from "@/app/admin/actions";
import Alert from "./Alert";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [state, action, pending] = useActionState(resetPasswordAction, undefined);
  return (
    <form action={action} className="space-y-4" noValidate>
      <input type="hidden" name="token" value={token} />
      {state?.error && <Alert type="error">{state.error}</Alert>}
      <FormField label="New password" name="password" type="password" autoComplete="new-password" required />
      <FormField label="Confirm password" name="confirm" type="password" autoComplete="new-password" required />
      <p className="text-xs text-[var(--adm-muted)]">At least 10 characters, with an uppercase letter, a lowercase letter and a number.</p>
      <SubmitButton pending={pending}>Update password</SubmitButton>
    </form>
  );
}
