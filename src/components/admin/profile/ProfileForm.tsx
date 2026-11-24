"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/admin/Alert";
import FormField from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormShell";
import { adminRequest } from "@/lib/admin/client";
import type { AdminProfile } from "@/lib/admin/types";

/** Name + email of the signed-in admin. */
export default function ProfileForm({ profile }: { profile: AdminProfile }) {
  const router = useRouter();
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
    const res = await adminRequest("/profile", { method: "PUT", body: { name: fd.get("name"), email: fd.get("email") } });
    if (res.ok) {
      setMessage({ type: "success", text: "Profile updated." });
      router.refresh(); // header shows the new name
    } else {
      setErrors(res.errors);
      setMessage({ type: "error", text: Object.keys(res.errors).length ? "Please correct the highlighted fields." : res.message });
    }
    setPending(false);
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <FormSection title="Profile details">
        {message && <Alert type={message.type}>{message.text}</Alert>}
        <FormField label="Name" name="name" defaultValue={profile.name} maxLength={120} required markRequired autoComplete="name" error={errors.name} />
        <FormField label="Email" name="email" type="email" defaultValue={profile.email} maxLength={255} required markRequired autoComplete="email" error={errors.email} hint="Used to sign in and to receive password reset links." />
        <div className="flex justify-end">
          <button type="submit" disabled={pending} className="adm-btn adm-btn-primary adm-btn-inline">
            {pending ? "Saving…" : "Save changes"}
          </button>
        </div>
      </FormSection>
    </form>
  );
}
