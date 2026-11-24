import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import PresenceForm from "@/components/admin/presences/PresenceForm";

export const metadata: Metadata = { title: "Add state" };

export default function NewPresencePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Add state" description="Fields marked * are required." />
      <PresenceForm />
    </div>
  );
}
