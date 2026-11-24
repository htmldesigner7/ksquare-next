import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import ResourceForm from "@/components/admin/resource/ResourceForm";
import { loadOptions, resourceOr404 } from "@/lib/admin/resource-data";
import { getResource } from "@/lib/admin/resources";

type Params = Promise<{ resource: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resource = getResource((await params).resource);
  return { title: resource ? `Add ${resource.label}` : "Admin" };
}

export default async function NewResourcePage({ params }: { params: Params }) {
  const resource = resourceOr404((await params).resource);
  const options = await loadOptions(resource);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title={`Add ${resource.label}`} description="Fields marked * are required." />
      <ResourceForm resource={resource} options={options} />
    </div>
  );
}
