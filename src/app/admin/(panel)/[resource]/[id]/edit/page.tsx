import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import ResourceForm from "@/components/admin/resource/ResourceForm";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import { loadOptions, resourceOr404 } from "@/lib/admin/resource-data";
import { getResource, type ResourceRow } from "@/lib/admin/resources";

type Params = Promise<{ resource: string; id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resource = getResource((await params).resource);
  return { title: resource ? `Edit ${resource.label}` : "Admin" };
}

export default async function EditResourcePage({ params }: { params: Params }) {
  const { resource: slug, id: rawId } = await params;
  const resource = resourceOr404(slug);
  const id = parseId(rawId);
  if (!id) notFound();
  const [res, options] = await Promise.all([adminFetch<ResourceRow>(`/admin/${resource.slug}/${id}`), loadOptions(resource)]);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title={`Edit ${resource.label}`} description="Fields marked * are required." />
      <ResourceForm resource={resource} initial={res.data} options={options} />
    </div>
  );
}
