"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmAction, showAlert } from "@/lib/admin/alerts";
import { adminRequest } from "@/lib/admin/client";

/** Toggle switch for a yes/no field in a list (e.g. "Featured"): asks for confirmation, then PATCHes <endpoint> with { field, value }. */
export default function FlagSwitch({ endpoint, field, label, value }: { endpoint: string; field: string; label: string; value: boolean }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const next = !value;

  async function toggle() {
    const ok = await confirmAction(`${next ? "Mark as" : "Remove from"} ${label.toLowerCase()}?`, {
      title: `Update ${label.toLowerCase()}?`,
      confirmText: next ? "Yes, enable" : "Yes, disable",
      icon: "question",
      confirmColor: "#2b398b",
    });
    if (!ok) return;
    setPending(true);
    const res = await adminRequest(endpoint, { method: "PATCH", body: { field, value: next } });
    if (!res.ok) await showAlert(res.message);
    router.refresh();
    setPending(false);
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-label={`${label}: ${value ? "Yes" : "No"}. Click to change`}
        title={value ? `Click to remove ${label.toLowerCase()}` : `Click to mark ${label.toLowerCase()}`}
        onClick={toggle}
        disabled={pending}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--adm-primary)] disabled:cursor-wait disabled:opacity-60 ${
          value ? "bg-[var(--adm-success)]" : "bg-gray-300"
        }`}
      >
        <span className={`inline-block size-[14px] rounded-full bg-white shadow transition-transform ${value ? "translate-x-[19px]" : "translate-x-[3px]"}`} />
      </button>
      <span className={`text-[11px] font-semibold ${value ? "text-[var(--adm-success)]" : "text-gray-500"}`}>{value ? "Yes" : "No"}</span>
    </span>
  );
}
