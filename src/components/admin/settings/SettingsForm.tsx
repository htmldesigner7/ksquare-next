"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/admin/Alert";
import EntryList from "@/components/admin/EntryList";
import FormField from "@/components/admin/FormField";
import { FormSection } from "@/components/admin/FormShell";
import { adminRequest, useRepeater } from "@/lib/admin/client";
import type { Settings } from "@/lib/admin/types";

const MAX_ENTRIES = 10; // matches the API limit
const toRows = (entries: { value: string }[]) => entries.map((e) => ({ value: e.value }));

export default function SettingsForm({ initial }: { initial: Settings }) {
  const router = useRouter();
  const calls = useRepeater(toRows(initial.call_details), () => ({ value: "" }));
  const emails = useRepeater(toRows(initial.email_details), () => ({ value: "" }));
  const addresses = useRepeater(toRows(initial.address_details), () => ({ value: "" }));

  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Errors are keyed by row position, so deleting a row must clear them (they would land on the wrong row).
  const removing = (remove: (key: number) => void) => (key: number) => {
    remove(key);
    setError(null);
    setFieldErrors({});
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setError(null);
    setSaved(false);
    setFieldErrors({});
    const fd = new FormData(e.currentTarget);
    const res = await adminRequest("/settings", {
      method: "PUT",
      body: {
        call_details: calls.rows.map((r) => ({ value: r.value })),
        email_details: emails.rows.map((r) => ({ value: r.value })),
        address_details: addresses.rows.map((r) => ({ value: r.value })),
        facebook_link: fd.get("facebook_link"),
        instagram_link: fd.get("instagram_link"),
        linkedin_link: fd.get("linkedin_link"),
      },
    });
    if (res.ok) {
      setSaved(true);
      router.refresh();
    } else {
      setError(res.message);
      setFieldErrors(res.errors);
    }
    setPending(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {saved && <Alert type="success">Settings saved successfully.</Alert>}
      {error && <Alert type="error">{error}</Alert>}

      <FormSection title="Contact details">
        <EntryList
          title="Phone number"
          rows={calls.rows}
          onAdd={calls.add}
          onRemove={removing(calls.remove)}
          onChange={(key, value) => calls.update(key, { value })}
          type="tel"
          placeholder="+91 98765 43210"
          max={MAX_ENTRIES}
          errorPrefix="call_details"
          errors={fieldErrors}
        />
        <hr className="border-[var(--adm-border)]" />
        <EntryList
          title="Email"
          rows={emails.rows}
          onAdd={emails.add}
          onRemove={removing(emails.remove)}
          onChange={(key, value) => emails.update(key, { value })}
          type="email"
          placeholder="sales@example.com"
          max={MAX_ENTRIES}
          errorPrefix="email_details"
          errors={fieldErrors}
        />
        <hr className="border-[var(--adm-border)]" />
        <EntryList
          title="Address"
          rows={addresses.rows}
          onAdd={addresses.add}
          onRemove={removing(addresses.remove)}
          onChange={(key, value) => addresses.update(key, { value })}
          multiline
          placeholder="Street, city, state, PIN"
          max={MAX_ENTRIES}
          errorPrefix="address_details"
          errors={fieldErrors}
        />
      </FormSection>

      <FormSection title="Social links (optional)">
        <FormField label="Facebook" name="facebook_link" type="url" defaultValue={initial.facebook_link ?? ""} maxLength={255} placeholder="https://facebook.com/yourpage" error={fieldErrors.facebook_link} />
        <FormField label="Instagram" name="instagram_link" type="url" defaultValue={initial.instagram_link ?? ""} maxLength={255} placeholder="https://instagram.com/yourpage" error={fieldErrors.instagram_link} />
        <FormField label="LinkedIn" name="linkedin_link" type="url" defaultValue={initial.linkedin_link ?? ""} maxLength={255} placeholder="https://linkedin.com/company/yourpage" error={fieldErrors.linkedin_link} />
      </FormSection>

      <div className="flex justify-end">
        <button type="submit" disabled={pending} className="adm-btn adm-btn-primary adm-btn-inline">
          {pending ? "Saving…" : "Save settings"}
        </button>
      </div>
    </form>
  );
}
