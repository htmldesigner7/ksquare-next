"use client";

import { useRef, useState } from "react";
import Alert from "@/components/admin/Alert";
import FormField from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormShell";
import { adminRequest } from "@/lib/admin/client";

/** Change the signed-in admin's password (the API checks the current one and signs out other devices). */
export default function PasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setMessage(null);
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const res = await adminRequest("/profile/password", {
      method: "PUT",
      body: { current_password: fd.get("current_password"), password: fd.get("password"), confirm_password: fd.get("confirm_password") },
    });
    if (res.ok) {
      formRef.current?.reset();
      setMessage({ type: "success", text: res.message });
    } else {
      setErrors(res.errors);
      setMessage({ type: "error", text: Object.keys(res.errors).length ? "Please correct the highlighted fields." : res.message });
    }
    setPending(false);
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <FormSection title="Change password">
        {message && <Alert type={message.type}>{message.text}</Alert>}
        <FormField label="Current password" name="current_password" type="password" autoComplete="current-password" required markRequired maxLength={200} error={errors.current_password} />
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="New password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            markRequired
            maxLength={72}
            hint="At least 10 characters with an uppercase letter, a lowercase letter and a number."
            error={errors.password}
          />
          <FormField label="Confirm new password" name="confirm_password" type="password" autoComplete="new-password" required markRequired maxLength={72} error={errors.confirm_password} />
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={pending} className="adm-btn adm-btn-primary adm-btn-inline">
            {pending ? "Updating…" : "Update password"}
          </button>
        </div>
      </FormSection>
    </form>
  );
}
