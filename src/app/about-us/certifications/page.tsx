import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/certifications";

export const metadata = pageMetadata(page);

export default function CertificationsPage() {
  return <PageTemplate page={page} />;
}
