"use client";

import { confirmAction } from "@/lib/admin/alerts";

/** Submit button that asks for confirmation (SweetAlert) before the surrounding form (a server action) is sent. */
export default function DeleteButton({ label = "Delete", message }: { label?: string; message: string }) {
  return (
    <button
      type="submit"
      className="adm-btn !h-10 border-[var(--adm-danger)] bg-[var(--adm-danger-pale)] text-[var(--adm-danger)] hover:bg-[var(--adm-danger)] hover:text-white"
      onClick={async (e) => {
        e.preventDefault();
        const form = e.currentTarget.form;
        if (await confirmAction(message)) form?.requestSubmit(); // requestSubmit() does not click the button again
      }}
    >
      {label}
    </button>
  );
}
