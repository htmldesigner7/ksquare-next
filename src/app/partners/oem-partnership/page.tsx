import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/oem-partnership";

export const metadata = pageMetadata(page);

export default function OemPartnershipPage() {
  return <PageTemplate page={page} />;
}
