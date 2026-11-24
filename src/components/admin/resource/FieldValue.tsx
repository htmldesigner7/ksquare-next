import AdminImage from "@/components/admin/AdminImage";
import RichText from "@/components/admin/RichText";
import { formatDay } from "@/lib/admin/format";
import { fkLabelKey, type Field, type ResourceRow } from "@/lib/admin/resources";

const Empty = () => <span className="text-[var(--adm-muted)]">—</span>;

/** Read-only display of one field value, shared by the list table and the view page. */
export default function FieldValue({ field, row, imageClass }: { field: Field; row: ResourceRow; imageClass?: string }) {
  const value = row[field.name];
  switch (field.type) {
    case "image":
      return value ? (
        <AdminImage src={String(value)} alt={field.label} className={imageClass ?? "size-12 rounded-md border border-[var(--adm-border)] object-cover"} />
      ) : (
        <Empty />
      );
    case "textarea":
      return field.rich ? <RichText html={value as string | null} /> : <span className="whitespace-pre-wrap">{value ?? <Empty />}</span>;
    case "bool":
      return <>{value ? "Yes" : "No"}</>;
    case "date":
      return value ? <>{formatDay(String(value))}</> : <Empty />;
    case "fk":
      return row[fkLabelKey(field)] ? <>{row[fkLabelKey(field)]}</> : <Empty />;
    case "url":
      return value ? (
        <a href={String(value)} target="_blank" rel="noopener noreferrer" className="break-all text-[var(--adm-primary)] hover:underline">
          {value}
        </a>
      ) : (
        <Empty />
      );
    default:
      return value === null || value === "" || value === undefined ? <Empty /> : <span className="whitespace-pre-wrap">{value}</span>;
  }
}
