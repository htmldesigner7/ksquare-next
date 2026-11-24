"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
import { ROW_ACTION_DELETE } from "@/components/admin/RowActions";
import { confirmAction, showAlert } from "@/lib/admin/alerts";
import { adminRequest } from "@/lib/admin/client";

/** Confirm -> DELETE through the API -> back to the list with a success banner. */
export default function DeleteAction({
  endpoint,
  redirectTo,
  confirmMessage,
  label = "Delete",
  compact,
}: {
  endpoint: string;
  /** List page to return to, e.g. "/admin/blogs" (?success=deleted is appended). */
  redirectTo: string;
  confirmMessage: string;
  label?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function onClick() {
    if (!(await confirmAction(confirmMessage))) return;
    setPending(true);
    const res = await adminRequest(endpoint, { method: "DELETE" });
    if (res.ok) {
      router.push(`${redirectTo}?success=deleted`);
      router.refresh();
    } else {
      showAlert(res.message);
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      {...(compact && { title: pending ? "Deleting…" : label, "aria-label": label })}
      className={
        compact
          ? ROW_ACTION_DELETE
          : "adm-btn adm-btn-inline !h-10 border-[var(--adm-danger)] bg-[var(--adm-danger-pale)] text-[var(--adm-danger)] hover:bg-[var(--adm-danger)] hover:text-white"
      }
    >
      {compact ? <MdDeleteOutline className="size-[19px]" aria-hidden /> : pending ? "Deleting…" : label}
    </button>
  );
}
