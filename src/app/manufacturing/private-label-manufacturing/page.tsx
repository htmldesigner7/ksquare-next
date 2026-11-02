import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/private-label-manufacturing";

export const metadata = pageMetadata(page);

export default function PrivateLabelManufacturingPage() {
  return <PageTemplate page={page} />;
}
