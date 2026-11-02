import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/become-a-partner";

export const metadata = pageMetadata(page);

export default function BecomeAPartnerPage() {
  return <PageTemplate page={page} />;
}
