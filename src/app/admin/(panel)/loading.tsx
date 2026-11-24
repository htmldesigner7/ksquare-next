// Shown while any panel page is fetching its data from the API.
export default function PanelLoading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse space-y-6" role="status" aria-label="Loading">
      <div className="h-8 w-56 rounded-lg bg-[var(--adm-border)]" />
      <div className="h-11 w-full max-w-md rounded-lg bg-[var(--adm-border)]" />
      <div className="space-y-3 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-5">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-10 rounded-lg bg-[var(--adm-bg)]" />
        ))}
      </div>
    </div>
  );
}
