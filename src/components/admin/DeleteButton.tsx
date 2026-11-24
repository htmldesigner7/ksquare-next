"use client";

/** Submit button that asks for confirmation before the surrounding form (a server action) is sent. */
export default function DeleteButton({ label = "Delete", message }: { label?: string; message: string }) {
  return (
    <button
      type="submit"
      className="adm-btn !h-10 border-[var(--adm-danger)] bg-[var(--adm-danger-pale)] text-[var(--adm-danger)] hover:bg-[var(--adm-danger)] hover:text-white"
      onClick={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      {label}
    </button>
  );
}
