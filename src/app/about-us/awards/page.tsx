import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/awards";

export const metadata = pageMetadata(page);

export default function AwardsPage() {
  return <PageTemplate page={page} />;
}
