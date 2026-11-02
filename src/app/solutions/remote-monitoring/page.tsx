import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/remote-monitoring";

export const metadata = pageMetadata(page);

export default function RemoteMonitoringPage() {
  return <PageTemplate page={page} />;
}
