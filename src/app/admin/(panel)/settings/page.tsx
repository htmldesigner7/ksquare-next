import type { Metadata } from "next";
import Alert from "@/components/admin/Alert";
import PageHeader from "@/components/admin/PageHeader";
import SettingsForm from "@/components/admin/settings/SettingsForm";
import { adminFetch } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import type { Settings } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Settings" };

export default async function SettingsPage() {
  const res = await adminFetch<Settings>("/admin/settings");

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="Settings"
        description={res.data ? `Contact details and social links. Last updated ${formatDate(res.data.updated_at)}.` : "Contact details and social links."}
      />
      {res.data ? <SettingsForm initial={res.data} /> : <Alert type="error">{res.message}</Alert>}
    </div>
  );
}
