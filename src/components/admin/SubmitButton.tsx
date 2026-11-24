export default function SubmitButton({ pending, children }: { pending: boolean; children: React.ReactNode }) {
  return (
    <button type="submit" disabled={pending} className="adm-btn adm-btn-primary">
      {pending ? "Please wait…" : children}
    </button>
  );
}
