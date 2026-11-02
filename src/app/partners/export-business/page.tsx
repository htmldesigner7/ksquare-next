import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/export-business";

export const metadata = pageMetadata(page);

export default function ExportBusinessPage() {
  return <PageTemplate page={page} />;
}
