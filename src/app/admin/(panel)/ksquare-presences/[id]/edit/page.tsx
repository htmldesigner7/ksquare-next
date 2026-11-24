import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import PresenceForm from "@/components/admin/presences/PresenceForm";
import { adminFetch } from "@/lib/admin/dal";
import { parseId } from "@/lib/admin/format";
import type { Presence } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Edit state" };

export default async function EditPresencePage({ params }: { params: Promise<{ id: string }> }) {
  const id = parseId((await params).id);
  if (!id) notFound();
  const res = await adminFetch<Presence>(`/admin/ksquare-presences/${id}`);
  if (res.status === 404 || !res.data) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Edit state" description="Leave the map image empty to keep the current one." />
      <PresenceForm initial={res.data} />
    </div>
  );
}
