import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/export-solutions";

export const metadata = pageMetadata(page);

export default function ExportSolutionsPage() {
  return <PageTemplate page={page} />;
}
