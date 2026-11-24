import "server-only";
import { notFound } from "next/navigation";
import { adminFetch } from "./dal";
import { getResource, type Resource, type SelectOption } from "./resources";

/** The module for a route param, or a 404. */
export function resourceOr404(slug: string): Resource {
  const resource = getResource(slug);
  if (!resource) notFound();
  return resource;
}

/** Dropdown rows (active, non-deleted) for each fk field of a module, keyed by field name. */
export async function loadOptions(resource: Resource): Promise<Record<string, SelectOption[]>> {
  const fks = resource.fields.filter((f) => f.type === "fk");
  const results = await Promise.all(fks.map((f) => adminFetch<SelectOption[]>(`/admin/${f.ref}/options`)));
  return Object.fromEntries(fks.map((f, i) => [f.name, results[i].data ?? []]));
}
