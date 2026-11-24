import type { Metadata } from "next";
import Link from "next/link";
import Alert from "@/components/admin/Alert";
import DeleteAction from "@/components/admin/DeleteAction";
import FieldValue from "@/components/admin/resource/FieldValue";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import SearchBar from "@/components/admin/SearchBar";
import StatusSwitch from "@/components/admin/StatusSwitch";
import SuccessNotice from "@/components/admin/SuccessNotice";
import { adminFetch, requireAdmin } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import { loadOptions, resourceOr404 } from "@/lib/admin/resource-data";
import { getResource, rowTitle, type ResourceRow } from "@/lib/admin/resources";
import type { PageMeta } from "@/lib/admin/types";

type Params = Promise<{ resource: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return { title: getResource((await params).resource)?.plural ?? "Admin" };
}

export default async function ResourceListPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const resource = resourceOr404((await params).resource);
  const { page = "1", q = "", status = "", success, ...rest } = await searchParams;

  // One dropdown filter per fk field (e.g. certificates by category).
  const filterFields = resource.fields.filter((f) => f.type === "fk");
  const filters = Object.fromEntries(filterFields.map((f) => [f.name, rest[f.name] ?? ""]));
  const columns = resource.fields.filter((f) => f.list);
  const base = `/admin/${resource.slug}`;

  const [admin, res, options] = await Promise.all([
    requireAdmin(),
    adminFetch<ResourceRow[]>(`/admin/${resource.slug}`, { query: { page, q, status, ...filters } }),
    loadOptions(resource),
  ]);
  const rows = res.data ?? [];
  const meta = res.meta as PageMeta | undefined;
  const headings = [...columns.map((c) => c.label), "Status", "Updated", ""];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title={resource.plural} description={resource.description} action={{ href: `${base}/new`, label: `Add ${resource.label}` }} />
      <SuccessNotice code={success} noun={resource.label} />
      {!res.ok && <Alert type="error">{res.message}</Alert>}

      <SearchBar defaultQ={q} placeholder={resource.searchHint ?? "Search"}>
        {filterFields.map((f) => (
          <select key={f.name} name={f.name} defaultValue={filters[f.name]} className="adm-input sm:max-w-[200px]" aria-label={f.label} suppressHydrationWarning>
            <option value="">All {f.label.toLowerCase()}</option>
            {options[f.name]?.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        ))}
        <select name="status" defaultValue={status} className="adm-input sm:max-w-[180px]" aria-label="Status" suppressHydrationWarning>
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </SearchBar>

      <div className="overflow-x-auto rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-[var(--adm-border)] text-[var(--adm-muted)]">
            <tr>
              {headings.map((h, i) => (
                <th key={i} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={headings.length} className="px-4 py-10 text-center text-[var(--adm-muted)]">
                  No {resource.plural.toLowerCase()} found.
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[var(--adm-border)] last:border-0">
                {columns.map((c) => (
                  <td key={c.name} className="px-4 py-3">
                    <FieldValue field={c} row={row} />
                  </td>
                ))}
                <td className="px-4 py-3">
                  <StatusSwitch endpoint={`/${resource.slug}/${row.id}/status`} status={row.status} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-[var(--adm-muted)]">{formatDate(row.updated_at)}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <div className="flex justify-end gap-4">
                    <Link href={`${base}/${row.id}`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      View
                    </Link>
                    <Link href={`${base}/${row.id}/edit`} className="font-medium text-[var(--adm-primary)] hover:underline">
                      Edit
                    </Link>
                    {admin.role === "super_admin" && (
                      <DeleteAction
                        compact
                        endpoint={`/${resource.slug}/${row.id}`}
                        redirectTo={base}
                        confirmMessage={`Delete ${resource.label.toLowerCase()} "${rowTitle(resource, row)}"?`}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination meta={meta} basePath={base} params={{ q, status, ...filters }} />
    </div>
  );
}
