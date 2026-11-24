"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminRequest } from "@/lib/admin/client";

/** Status badge that doubles as a switch: click to flip between two statuses via PATCH <endpoint>. */
export default function StatusSwitch({
  endpoint,
  status,
  values = ["active", "inactive"],
}: {
  endpoint: string;
  status: string;
  /** [positive, negative] status values, e.g. ["active", "inactive"] */
  values?: [string, string];
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const positive = status === values[0];
  const next = positive ? values[1] : values[0];

  async function toggle() {
    setPending(true);
    const res = await adminRequest(endpoint, { method: "PATCH", body: { status: next } });
    if (!res.ok) window.alert(res.message);
    router.refresh();
    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      title={`Click to set ${next}`}
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize disabled:opacity-50 ${
        positive ? "bg-[var(--adm-success-pale)] text-[var(--adm-success)]" : "bg-gray-100 text-gray-600"
      }`}
    >
      {pending ? "…" : status}
    </button>
  );
}
