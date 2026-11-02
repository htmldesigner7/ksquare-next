import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/news-events";

export const metadata = pageMetadata(page);

export default function NewsEventsPage() {
  return <PageTemplate page={page} />;
}
