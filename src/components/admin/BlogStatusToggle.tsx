"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminRequest } from "@/lib/admin/client";
import type { BlogStatus } from "@/lib/admin/types";

const STYLES: Record<BlogStatus, string> = {
  published: "bg-[var(--adm-success-pale)] text-[var(--adm-success)]",
  draft: "bg-amber-50 text-amber-700",
};

/** Status badge that doubles as a publish/unpublish switch. */
export default function BlogStatusToggle({ id, status }: { id: number; status: BlogStatus }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const next: BlogStatus = status === "published" ? "draft" : "published";

  async function toggle() {
    setPending(true);
    const res = await adminRequest(`/blogs/${id}/status`, { method: "PATCH", body: { status: next } });
    if (!res.ok) window.alert(res.message);
    router.refresh();
    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      title={`Click to ${next === "published" ? "publish" : "move to draft"}`}
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize disabled:opacity-50 ${STYLES[status]}`}
    >
      {pending ? "…" : status}
    </button>
  );
}
