export default function Alert({ type, children }: { type: "error" | "success"; children: React.ReactNode }) {
  const styles =
    type === "error"
      ? "bg-[var(--adm-danger-pale)] text-[var(--adm-danger)]"
      : "bg-[var(--adm-success-pale)] text-[var(--adm-success)]";
  return (
    <div role={type === "error" ? "alert" : "status"} className={`rounded-lg px-3.5 py-2.5 text-sm ${styles}`}>
      {children}
    </div>
  );
}
