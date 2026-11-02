import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/annual-maintenance";

export const metadata = pageMetadata(page);

export default function AnnualMaintenancePage() {
  return <PageTemplate page={page} />;
}
