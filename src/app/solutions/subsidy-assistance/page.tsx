import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/subsidy-assistance";

export const metadata = pageMetadata(page);

export default function SubsidyAssistancePage() {
  return <PageTemplate page={page} />;
}
