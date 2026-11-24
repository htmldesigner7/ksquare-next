"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login } from "@/app/admin/actions";
import Alert from "./Alert";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

export default function LoginForm({ resetDone }: { resetDone: boolean }) {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="space-y-4" noValidate>
      {resetDone && !state && <Alert type="success">Password updated. Please sign in.</Alert>}
      {state?.error && <Alert type="error">{state.error}</Alert>}
      <FormField label="Email" name="email" type="email" defaultValue={state?.email} autoComplete="username" placeholder="admin@example.com" required />
      <FormField label="Password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" required />
      <div className="text-right">
        <Link href="/admin/forgot-password" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
          Forgot password?
        </Link>
      </div>
      <SubmitButton pending={pending}>Sign in</SubmitButton>
    </form>
  );
}
