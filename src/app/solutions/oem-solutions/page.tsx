import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/oem-solutions";

export const metadata = pageMetadata(page);

export default function OemSolutionsPage() {
  return <PageTemplate page={page} />;
}
