"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmAction, showAlert } from "@/lib/admin/alerts";
import { adminRequest } from "@/lib/admin/client";

/**
 * Toggle switch for a status field: asks for confirmation, then flips between two statuses via PATCH <endpoint>.
 * The first value in `values` is the "on" state (e.g. ["active", "inactive"] or ["published", "draft"]).
 */
export default function StatusSwitch({
  endpoint,
  status,
  values = ["active", "inactive"],
}: {
  endpoint: string;
  status: string;
  values?: [string, string];
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const on = status === values[0];
  const next = on ? values[1] : values[0];

  async function toggle() {
    const ok = await confirmAction(`Change the status from "${status}" to "${next}"?`, {
      title: "Update status?",
      confirmText: `Yes, set ${next}`,
      icon: "question",
      confirmColor: "#2b398b",
    });
    if (!ok) return;
    setPending(true);
    const res = await adminRequest(endpoint, { method: "PATCH", body: { status: next } });
    if (!res.ok) await showAlert(res.message);
    router.refresh();
    setPending(false);
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={`Status: ${status}. Click to set ${next}`}
        title={`Click to set ${next}`}
        onClick={toggle}
        disabled={pending}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--adm-primary)] disabled:cursor-wait disabled:opacity-60 ${
          on ? "bg-[var(--adm-success)]" : "bg-gray-300"
        }`}
      >
        <span className={`inline-block size-[14px] rounded-full bg-white shadow transition-transform ${on ? "translate-x-[19px]" : "translate-x-[3px]"}`} />
      </button>
      <span className={`text-[11px] font-semibold capitalize ${on ? "text-[var(--adm-success)]" : "text-gray-500"}`}>{status}</span>
    </span>
  );
}
