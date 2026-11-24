import { STATUS_LABEL, type EnquiryStatus } from "@/lib/admin/types";

const STYLES: Record<EnquiryStatus, string> = {
  new: "bg-[var(--adm-primary-pale)] text-[var(--adm-primary)]",
  in_progress: "bg-amber-50 text-amber-700",
  resolved: "bg-[var(--adm-success-pale)] text-[var(--adm-success)]",
};

export default function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${STYLES[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
