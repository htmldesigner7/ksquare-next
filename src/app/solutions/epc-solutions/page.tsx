import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/epc-solutions";

export const metadata = pageMetadata(page);

export default function EpcSolutionsPage() {
  return <PageTemplate page={page} />;
}
